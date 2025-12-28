import React, { useEffect, useState } from 'react';
import { getResumes, createResume, deleteResume } from '../api/resume';
import { Link, useNavigate } from 'react-router-dom';
import { Plus, FileText, Trash2, Edit, Loader2, BarChart2, Eye, Download, MoreVertical, Copy } from 'lucide-react';
import { toast } from 'react-toastify';
import { useAuth } from '../context/AuthContext';
import { motion } from 'framer-motion';

const Dashboard = () => {
    const [resumes, setResumes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [creating, setCreating] = useState(false);
    const { user } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        fetchResumes();
    }, []);

    const fetchResumes = async () => {
        try {
            const data = await getResumes();
            setResumes(data);
        } catch (error) {
            toast.error("Failed to load resumes");
        } finally {
            setLoading(false);
        }
    };

    const handleCreateResume = async () => {
        const title = prompt("Enter a title for your new resume:");
        if (!title) return;

        setCreating(true);
        try {
            const newResume = await createResume(title);
            toast.success("Resume created!");
            setResumes([...resumes, newResume]);
        } catch (error) {
            toast.error(error.response?.data?.message || "Failed to create resume");
        } finally {
            setCreating(false);
        }
    };

    const handleDelete = async (e, id) => {
        e.preventDefault();
        if (!window.confirm("Are you sure you want to delete this resume? This action cannot be undone.")) return;

        try {
            await deleteResume(id);
            setResumes(resumes.filter(r => r._id !== id));
            toast.success("Resume deleted");
        } catch (error) {
            toast.error("Failed to delete resume");
        }
    };

    // Mock stats for UI demonstration
    const stats = [
        { label: "Total Resumes", value: resumes.length, icon: FileText, color: "text-blue-600", bg: "bg-blue-50" },
        { label: "Avg. ATS Score", value: resumes.length > 0 ? "85" : "0", icon: BarChart2, color: "text-emerald-600", bg: "bg-emerald-50" },
        { label: "Profile Views", value: "124", icon: Eye, color: "text-violet-600", bg: "bg-violet-50" },
    ];

    if (loading) {
        return (
            <div className="flex h-screen items-center justify-center bg-slate-50">
                <Loader2 className="animate-spin text-indigo-600" size={40} />
            </div>
        );
    }

    return (
        <div className="container mx-auto px-4 py-8 max-w-7xl">
            {/* Header Section */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
                <div>
                    <h1 className="text-3xl font-bold text-slate-900 tracking-tight">
                        Welcome back, {user?.name?.split(' ')[0] || 'User'}! 👋
                    </h1>
                    <p className="text-slate-500 mt-1">Here's what's happening with your job applications.</p>
                </div>
                <button
                    onClick={handleCreateResume}
                    disabled={creating}
                    className="flex items-center gap-2 bg-indigo-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-indigo-700 transition-all shadow-lg hover:shadow-indigo-500/30 active:scale-95"
                >
                    {creating ? <Loader2 className="animate-spin" size={20} /> : <Plus size={20} />}
                    <span>Create New Resume</span>
                </button>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                {stats.map((stat, index) => (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        key={index}
                        className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow"
                    >
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-slate-500 text-sm font-medium">{stat.label}</p>
                                <p className="text-3xl font-bold text-slate-800 mt-1">{stat.value}</p>
                            </div>
                            <div className={`p-3 rounded-xl ${stat.bg}`}>
                                <stat.icon className={`w-6 h-6 ${stat.color}`} />
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Resumes List */}
            <div className="mb-6 flex justify-between items-end">
                <h2 className="text-xl font-bold text-slate-800">Your Resumes</h2>
                <div className="text-sm text-slate-500">Sorted by: Last Updated</div>
            </div>

            {resumes.length === 0 ? (
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-20 bg-white rounded-3xl border-2 border-dashed border-slate-200"
                >
                    <div className="bg-indigo-50 p-6 rounded-full inline-block mb-6">
                        <FileText size={48} className="text-indigo-400" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-800 mb-2">No resumes yet</h3>
                    <p className="text-slate-500 mb-8 max-w-md mx-auto">Create your first professional resume to start building your career profile and applying to jobs.</p>
                    <button onClick={handleCreateResume} className="text-indigo-600 font-bold hover:text-indigo-700 hover:underline text-lg">
                        Create your first resume &rarr;
                    </button>
                </motion.div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {resumes.map((resume, index) => (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            key={resume._id}
                            className="bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group flex flex-col overflow-hidden"
                        >
                            {/* Card Preview Area */}
                            <div className="h-48 bg-slate-100 relative overflow-hidden">
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <FileText className="text-slate-300 w-16 h-16 group-hover:scale-110 transition-transform duration-500" />
                                </div>
                                {/* Hover Overlay */}
                                <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/40 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100 backdrop-blur-sm">
                                    <Link to={`/editor/${resume._id}`} className="bg-white text-slate-900 px-6 py-2.5 rounded-full font-bold shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 hover:bg-indigo-50">
                                        Edit Resume
                                    </Link>
                                </div>
                            </div>

                            {/* Card Content */}
                            <div className="p-5 flex-1 flex flex-col">
                                <div className="flex justify-between items-start mb-2">
                                    <h3 className="font-bold text-lg text-slate-800 truncate pr-4" title={resume.title}>{resume.title}</h3>
                                    <button className="text-slate-400 hover:text-slate-600">
                                        <MoreVertical size={16} />
                                    </button>
                                </div>
                                <p className="text-xs text-slate-500 mb-6 bg-slate-100 self-start px-2 py-1 rounded">
                                    Last edited: {new Date(resume.updatedAt || resume.createdAt).toLocaleDateString()}
                                </p>

                                <div className="mt-auto grid grid-cols-3 gap-2 border-t border-slate-100 pt-4">
                                    <button className="flex flex-col items-center gap-1 text-slate-500 hover:text-indigo-600 transition-colors py-1 rounded-lg hover:bg-slate-50" title="Edit">
                                        <Link to={`/editor/${resume._id}`} className="flex flex-col items-center w-full">
                                            <Edit size={16} />
                                            <span className="text-[10px] font-medium mt-1">Edit</span>
                                        </Link>
                                    </button>
                                    <button className="flex flex-col items-center gap-1 text-slate-500 hover:text-indigo-600 transition-colors py-1 rounded-lg hover:bg-slate-50" title="Duplicate">
                                        <Copy size={16} />
                                        <span className="text-[10px] font-medium mt-1">Clone</span>
                                    </button>
                                    <button
                                        onClick={(e) => handleDelete(e, resume._id)}
                                        className="flex flex-col items-center gap-1 text-slate-500 hover:text-red-500 transition-colors py-1 rounded-lg hover:bg-red-50"
                                        title="Delete"
                                    >
                                        <Trash2 size={16} />
                                        <span className="text-[10px] font-medium mt-1">Delete</span>
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Dashboard;
