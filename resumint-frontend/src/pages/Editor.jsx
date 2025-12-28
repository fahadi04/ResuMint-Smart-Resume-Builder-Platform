import React, { useEffect, useState, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getResumeById, updateResume } from '../api/resume';
import { useDebounce } from '../hooks/useDebounce';
import { ChevronLeft, Save, Eye, Layout, Download, Settings } from 'lucide-react';
import { toast } from 'react-toastify';

// Components
import PersonalDetails from '../components/editor/PersonalDetails';
import Experience from '../components/editor/Experience';
import Education from '../components/editor/Education';
import Skills from '../components/editor/Skills';
import Projects from '../components/editor/Projects';
import ResumePreview from '../components/editor/ResumePreview';

const Editor = () => {
    const { id } = useParams();
    const [resumeData, setResumeData] = useState({
        personalDetails: {},
        experience: [],
        education: [],
        skills: [],
        projects: []
    });
    const [title, setTitle] = useState('');
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);
    const [activeTab, setActiveTab] = useState('personal'); // personal, experience, education, projects, skills
    const [mobileView, setMobileView] = useState('editor'); // editor, preview

    // Debounce the entire resume data for auto-saving
    const debouncedData = useDebounce(resumeData, 2000); // 2 second delay

    useEffect(() => {
        const loadResume = async () => {
            try {
                const data = await getResumeById(id);
                setTitle(data.title);
                // Ensure structure exists even if empty
                setResumeData({
                    personalDetails: data.personalDetails || {},
                    experience: data.experience || [],
                    education: data.education || [],
                    skills: data.skills || [],
                    projects: data.projects || []
                });
            } catch (error) {
                toast.error("Failed to load resume");
            } finally {
                setLoading(false);
            }
        };
        loadResume();
    }, [id]);

    // Auto-save effect
    useEffect(() => {
        if (!loading && debouncedData) {
            handleSave(debouncedData, true);
        }
    }, [debouncedData]);

    const handleSave = async (dataToSave, isAuto = false) => {
        setSaving(true);
        try {
            // Merge the title and other fields if needed, but for now we just save the sections
            // Note: The backend updateResume API likely expects the full object structure
            await updateResume(id, { title, ...dataToSave });
            if (!isAuto) toast.success("Resume saved successfully");
        } catch (error) {
            console.error("Save failed", error);
            if (!isAuto) toast.error("Failed to save changes");
        } finally {
            setSaving(false);
        }
    };

    const updateSection = (section, data) => {
        setResumeData(prev => ({
            ...prev,
            [section]: data
        }));
    };

    if (loading) return <div className="flex h-screen items-center justify-center text-indigo-600">Loading Editor...</div>;

    const sections = [
        { id: 'personal', label: 'Personal Info' },
        { id: 'experience', label: 'Experience' },
        { id: 'education', label: 'Education' },
        { id: 'projects', label: 'Projects' },
        { id: 'skills', label: 'Skills' },
    ];

    return (
        <div className="flex flex-col h-screen bg-slate-100 overflow-hidden">
            {/* Top Bar */}
            <header className="bg-white border-b border-slate-200 px-6 py-3 flex justify-between items-center h-16 shrink-0 z-20">
                <div className="flex items-center gap-4">
                    <Link to="/dashboard" className="p-2 hover:bg-slate-100 rounded-full transition-colors text-slate-500">
                        <ChevronLeft size={20} />
                    </Link>
                    <div>
                        <input
                            type="text"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            className="font-bold text-lg text-slate-800 bg-transparent border-none focus:ring-0 p-0"
                        />
                        <div className="text-xs text-slate-400 flex items-center gap-1">
                            {saving ? <span className="text-indigo-500">Saving...</span> : 'All changes saved'}
                        </div>
                    </div>
                </div>

                <div className="flex items-center gap-3">
                    <button className="flex items-center gap-2 text-slate-600 hover:text-indigo-600 px-3 py-2 rounded-lg text-sm font-medium transition-colors">
                        <Layout size={18} /> Templates
                    </button>
                    <button className="flex items-center gap-2 text-slate-600 hover:text-indigo-600 px-3 py-2 rounded-lg text-sm font-medium transition-colors">
                        <Download size={18} /> Download PDF
                    </button>
                    <button
                        onClick={() => handleSave(resumeData)}
                        className="flex items-center gap-2 bg-indigo-600 text-white px-5 py-2 rounded-lg text-sm font-medium hover:bg-indigo-700 transition-colors shadow-sm"
                    >
                        <Save size={18} /> Save
                    </button>
                </div>
            </header>

            {/* Mobile View Toggle */}
            <div className="lg:hidden bg-white border-b border-slate-200 p-2 flex gap-2 justify-center">
                <button
                    onClick={() => setMobileView('editor')}
                    className={`flex-1 py-2 text-sm font-medium rounded-lg text-center ${mobileView === 'editor' ? 'bg-indigo-600 text-white' : 'text-slate-500 bg-slate-50'}`}
                >
                    Editor
                </button>
                <button
                    onClick={() => setMobileView('preview')}
                    className={`flex-1 py-2 text-sm font-medium rounded-lg text-center ${mobileView === 'preview' ? 'bg-indigo-600 text-white' : 'text-slate-500 bg-slate-50'}`}
                >
                    Live Preview
                </button>
            </div>

            {/* Main Content Area */}
            <div className="flex flex-1 overflow-hidden relative">
                {/* Left Panel - Editor */}
                <div className={`${mobileView === 'editor' ? 'block' : 'hidden'} lg:block w-full lg:w-1/2 flex flex-col border-r border-slate-200 bg-white z-10 h-full overflow-hidden`}>
                    {/* Section Tabs */}
                    <div className="flex items-center gap-1 overflow-x-auto p-2 border-b border-slate-100 hide-scrollbar bg-slate-50/50 shrink-0">
                        {sections.map(section => (
                            <button
                                key={section.id}
                                onClick={() => setActiveTab(section.id)}
                                className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-all ${activeTab === section.id
                                    ? 'bg-white text-indigo-600 shadow-sm border border-slate-200'
                                    : 'text-slate-500 hover:text-slate-700 hover:bg-slate-100'
                                    }`}
                            >
                                {section.label}
                            </button>
                        ))}
                    </div>

                    {/* Scrollable Form Area */}
                    <div className="flex-1 overflow-y-auto p-6 bg-slate-50/30">
                        <div className="max-w-2xl mx-auto space-y-6 pb-20">
                            {activeTab === 'personal' && (
                                <PersonalDetails
                                    data={resumeData.personalDetails}
                                    onChange={(data) => updateSection('personalDetails', data)}
                                />
                            )}
                            {activeTab === 'experience' && (
                                <Experience
                                    data={resumeData.experience}
                                    onChange={(data) => updateSection('experience', data)}
                                />
                            )}
                            {activeTab === 'education' && (
                                <Education
                                    data={resumeData.education}
                                    onChange={(data) => updateSection('education', data)}
                                />
                            )}
                            {activeTab === 'projects' && (
                                <Projects
                                    data={resumeData.projects}
                                    onChange={(data) => updateSection('projects', data)}
                                />
                            )}
                            {activeTab === 'skills' && (
                                <Skills
                                    data={resumeData.skills}
                                    onChange={(data) => updateSection('skills', data)}
                                />
                            )}
                        </div>
                    </div>
                </div>

                {/* Right Panel - Live Preview */}
                <div className={`${mobileView === 'preview' ? 'block' : 'hidden'} lg:block w-full lg:w-1/2 bg-slate-200 overflow-y-auto flex justify-center p-4 lg:p-8 relative`}>
                    <div className="scale-[0.5] sm:scale-[0.6] md:scale-[0.7] lg:scale-[0.8] origin-top w-[210mm] shadow-2xl transition-transform mt-4 lg:mt-0">
                        <ResumePreview data={resumeData} />
                    </div>

                    {/* Floating Zoom Controls (Mock) */}
                    <div className="absolute bottom-6 right-6 flex flex-col gap-2 bg-white/90 backdrop-blur rounded-lg shadow-lg p-2 border border-slate-200">
                        <button className="p-2 hover:bg-slate-100 rounded text-slate-600" title="Zoom In">+</button>
                        <button className="p-2 hover:bg-slate-100 rounded text-slate-600" title="Reset">100%</button>
                        <button className="p-2 hover:bg-slate-100 rounded text-slate-600" title="Zoom Out">-</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Editor;
