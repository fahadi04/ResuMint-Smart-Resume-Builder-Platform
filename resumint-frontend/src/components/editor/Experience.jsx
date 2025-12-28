import React from 'react';
import { Briefcase, Plus, Trash2, Calendar, MapPin } from 'lucide-react';

const Experience = ({ data, onChange }) => {
    const handleAdd = () => {
        onChange([...data, {
            title: '',
            company: '',
            location: '',
            startDate: '',
            endDate: '',
            current: false,
            description: ''
        }]);
    };

    const handleRemove = (index) => {
        onChange(data.filter((_, i) => i !== index));
    };

    const handleChange = (index, field, value) => {
        const newData = [...data];
        newData[index] = { ...newData[index], [field]: value };
        onChange(newData);
    };

    return (
        <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold text-slate-800 flex items-center gap-2">
                    <Briefcase className="text-indigo-600" size={20} />
                    Experience
                </h2>
                <button
                    onClick={handleAdd}
                    className="flex items-center gap-1 text-sm font-medium text-indigo-600 hover:text-indigo-700 hover:bg-indigo-50 px-3 py-1.5 rounded-lg transition-colors"
                >
                    <Plus size={16} /> Add Experience
                </button>
            </div>

            <div className="space-y-6">
                {data.map((exp, index) => (
                    <div key={index} className="p-4 bg-slate-50 rounded-lg border border-slate-200 relative group">
                        <button
                            onClick={() => handleRemove(index)}
                            className="absolute top-4 right-4 text-slate-400 hover:text-red-500 transition-colors opacity-0 group-hover:opacity-100"
                            title="Remove"
                        >
                            <Trash2 size={18} />
                        </button>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-1">Job Title</label>
                                <input
                                    type="text"
                                    value={exp.title}
                                    onChange={(e) => handleChange(index, 'title', e.target.value)}
                                    placeholder="e.g. Senior Developer"
                                    className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-1">Company</label>
                                <input
                                    type="text"
                                    value={exp.company}
                                    onChange={(e) => handleChange(index, 'company', e.target.value)}
                                    placeholder="e.g. Google"
                                    className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-1">Start Date</label>
                                <div className="relative">
                                    <Calendar className="absolute left-3 top-3 text-slate-400" size={16} />
                                    <input
                                        type="month"
                                        value={exp.startDate}
                                        onChange={(e) => handleChange(index, 'startDate', e.target.value)}
                                        className="w-full pl-10 pr-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                                    />
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-1">End Date</label>
                                <div className="relative">
                                    <Calendar className="absolute left-3 top-3 text-slate-400" size={16} />
                                    <input
                                        type="month"
                                        value={exp.endDate}
                                        onChange={(e) => handleChange(index, 'endDate', e.target.value)}
                                        disabled={exp.current}
                                        className="w-full pl-10 pr-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent disabled:bg-slate-100"
                                    />
                                </div>
                                <label className="flex items-center mt-2 text-sm text-slate-600">
                                    <input
                                        type="checkbox"
                                        checked={exp.current}
                                        onChange={(e) => handleChange(index, 'current', e.target.checked)}
                                        className="mr-2 rounded text-indigo-600 focus:ring-indigo-500"
                                    />
                                    I currently work here
                                </label>
                            </div>
                            <div className="col-span-1 md:col-span-2">
                                <label className="block text-sm font-medium text-slate-700 mb-1">Description</label>
                                <textarea
                                    value={exp.description}
                                    onChange={(e) => handleChange(index, 'description', e.target.value)}
                                    rows={3}
                                    placeholder="Describe your responsibilities and achievements..."
                                    className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                                />
                            </div>
                        </div>
                    </div>
                ))}
                {data.length === 0 && (
                    <div className="text-center py-8 bg-slate-50 rounded-lg border-2 border-dashed border-slate-200 text-slate-400">
                        <Briefcase size={32} className="mx-auto mb-2 opacity-50" />
                        <p>No experience added yet</p>
                        <button onClick={handleAdd} className="mt-2 text-indigo-600 font-medium hover:underline">Add Experience</button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Experience;
