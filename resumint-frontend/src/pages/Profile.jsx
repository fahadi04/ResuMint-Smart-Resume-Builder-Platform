import React from 'react';
import { useAuth } from '../context/AuthContext';
import { User, Mail, Shield, LogOut } from 'lucide-react';
import { Link } from 'react-router-dom';

const Profile = () => {
    const { user, logout } = useAuth();

    return (
        <div className="container mx-auto px-4 py-8 max-w-4xl">
            <h1 className="text-2xl font-bold text-slate-900 mb-8">Account Settings</h1>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Sidebar */}
                <div className="md:col-span-1">
                    <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-6 flex flex-col items-center text-center">
                        <div className="w-24 h-24 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 text-3xl font-bold mb-4">
                            {user?.name?.charAt(0) || 'U'}
                        </div>
                        <h2 className="font-bold text-lg text-slate-900">{user?.name}</h2>
                        <p className="text-slate-500 text-sm mb-6">{user?.email}</p>

                        <div className="w-full pt-6 border-t border-slate-100">
                            <span className="inline-block px-3 py-1 bg-indigo-50 text-indigo-700 text-xs font-bold rounded-full">
                                Pro Plan
                            </span>
                            <p className="text-xs text-slate-400 mt-2">Renews on Jan 14, 2026</p>
                        </div>
                    </div>
                </div>

                {/* Main Content */}
                <div className="md:col-span-2 space-y-6">
                    {/* Personal Info */}
                    <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-6">
                        <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                            <User size={18} className="text-slate-400" /> Personal Information
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-1">Full Name</label>
                                <input
                                    type="text"
                                    defaultValue={user?.name}
                                    className="w-full px-4 py-2 border border-slate-200 rounded-lg bg-slate-50 text-slate-600"
                                    disabled
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-1">Email Address</label>
                                <input
                                    type="email"
                                    defaultValue={user?.email}
                                    className="w-full px-4 py-2 border border-slate-200 rounded-lg bg-slate-50 text-slate-600"
                                    disabled
                                />
                            </div>
                        </div>
                    </div>

                    {/* Security */}
                    <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-6">
                        <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                            <Shield size={18} className="text-slate-400" /> Security
                        </h3>
                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-1">Change Password</label>
                            <div className="flex gap-2">
                                <input
                                    type="password"
                                    placeholder="New Password"
                                    className="flex-1 px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                                />
                                <button className="px-4 py-2 bg-slate-900 text-white rounded-lg font-medium hover:bg-slate-800 transition-colors">
                                    Update
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Danger Zone */}
                    <div className="border border-red-200 bg-red-50 rounded-xl p-6">
                        <h3 className="font-bold text-red-700 mb-2">Danger Zone</h3>
                        <p className="text-red-600 text-sm mb-4">Once you delete your account, there is no going back. Please be certain.</p>
                        <button className="px-4 py-2 bg-white border border-red-200 text-red-600 rounded-lg text-sm font-medium hover:bg-red-50 transition-colors">
                            Delete Account
                        </button>
                    </div>

                    <div className="flex justify-end pt-4">
                        <button onClick={logout} className="flex items-center gap-2 text-slate-500 hover:text-red-600 font-medium transition-colors">
                            <LogOut size={18} /> Sign Out
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
