import React from 'react';
import { User, Mail, Phone, MapPin, Globe, Linkedin, Briefcase } from 'lucide-react';

const PersonalDetails = ({ data, onChange }) => {
    const handleChange = (e) => {
        const { name, value } = e.target;
        onChange({ ...data, [name]: value });
    };

    return (
        <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm">
            <h2 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                <User className="text-indigo-600" size={20} />
                Personal Details
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Job Title</label>
                    <div className="relative">
                        <Briefcase className="absolute left-3 top-3 text-slate-400" size={16} />
                        <input
                            type="text"
                            name="jobTitle"
                            value={data.jobTitle || ''}
                            onChange={handleChange}
                            placeholder="e.g. Software Engineer"
                            className="w-full pl-10 pr-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                        />
                    </div>
                </div>
                <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">First Name</label>
                    <input
                        type="text"
                        name="firstName"
                        value={data.firstName || ''}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Last Name</label>
                    <input
                        type="text"
                        name="lastName"
                        value={data.lastName || ''}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Email</label>
                    <div className="relative">
                        <Mail className="absolute left-3 top-3 text-slate-400" size={16} />
                        <input
                            type="email"
                            name="email"
                            value={data.email || ''}
                            onChange={handleChange}
                            className="w-full pl-10 pr-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                        />
                    </div>
                </div>
                <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Phone</label>
                    <div className="relative">
                        <Phone className="absolute left-3 top-3 text-slate-400" size={16} />
                        <input
                            type="tel"
                            name="phone"
                            value={data.phone || ''}
                            onChange={handleChange}
                            className="w-full pl-10 pr-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                        />
                    </div>
                </div>
                <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Address</label>
                    <div className="relative">
                        <MapPin className="absolute left-3 top-3 text-slate-400" size={16} />
                        <input
                            type="text"
                            name="address"
                            value={data.address || ''}
                            onChange={handleChange}
                            className="w-full pl-10 pr-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                        />
                    </div>
                </div>
                <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">LinkedIn</label>
                    <div className="relative">
                        <Linkedin className="absolute left-3 top-3 text-slate-400" size={16} />
                        <input
                            type="text"
                            name="linkedin"
                            value={data.linkedin || ''}
                            onChange={handleChange}
                            placeholder="linkedin.com/in/username"
                            className="w-full pl-10 pr-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                        />
                    </div>
                </div>
                <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Website</label>
                    <div className="relative">
                        <Globe className="absolute left-3 top-3 text-slate-400" size={16} />
                        <input
                            type="text"
                            name="website"
                            value={data.website || ''}
                            onChange={handleChange}
                            placeholder="yourportfolio.com"
                            className="w-full pl-10 pr-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                        />
                    </div>
                </div>
                <div className="col-span-1 md:col-span-2">
                    <label className="block text-sm font-medium text-slate-700 mb-1">Professional Summary</label>
                    <textarea
                        name="summary"
                        value={data.summary || ''}
                        onChange={handleChange}
                        rows={4}
                        placeholder="Write a short professional summary..."
                        className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    />
                </div>
            </div>
        </div>
    );
};

export default PersonalDetails;
