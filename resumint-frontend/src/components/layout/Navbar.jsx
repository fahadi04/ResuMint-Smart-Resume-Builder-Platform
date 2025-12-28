import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { LogOut, FileText, User } from 'lucide-react';

const Navbar = () => {
    const { user, logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/login');
    };

    return (
        <nav className="bg-white border-b border-primary-100 shadow-sm sticky top-0 z-50 backdrop-blur-lg bg-opacity-80">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">
                    <div className="flex items-center">
                        <Link to="/" className="flex-shrink-0 flex items-center gap-2">
                            <div className="bg-gradient-to-tr from-primary-600 to-primary-400 p-2 rounded-lg text-white">
                                <FileText size={24} />
                            </div>
                            <span className="font-bold text-xl text-slate-800 tracking-tight">ResuMint</span>
                        </Link>
                    </div>

                    <div className="flex items-center space-x-4">
                        {user ? (
                            <>
                                <span className="text-sm text-slate-600 hidden md:block">Welcome, <span className="font-semibold text-primary-600">{user.name}</span></span>
                                <button
                                    onClick={handleLogout}
                                    className="flex items-center gap-2 text-slate-500 hover:text-red-600 transition-colors px-3 py-2 rounded-md text-sm font-medium"
                                >
                                    <LogOut size={18} />
                                    <span>Logout</span>
                                </button>
                            </>
                        ) : (
                            <div className="flex gap-4">
                                <Link to="/login" className="text-slate-600 hover:text-primary-600 font-medium transition-colors">Login</Link>
                                <Link to="/register" className="bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5">Get Started</Link>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
