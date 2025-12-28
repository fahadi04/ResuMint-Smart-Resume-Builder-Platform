import React from 'react';
import { GraduationCap, Plus, Trash2, Calendar } from 'lucide-react';

const Education = ({ data, onChange }) => {
    const handleAdd = () => {
        onChange([...data, {
            school: '',
            degree: '',
            field: '',
            startDate: '',
            endDate: '',
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
                    <GraduationCap className="text-indigo-600" size={20} />
                    Education
                </h2>
                <button
                    onClick={handleAdd}
                    className="flex items-center gap-1 text-sm font-medium text-indigo-600 hover:text-indigo-700 hover:bg-indigo-50 px-3 py-1.5 rounded-lg transition-colors"
                >
                    <Plus size={16} /> Add Education
                </button>
            </div>

            <div className="space-y-6">
                {data.map((edu, index) => (
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
                                <label className="block text-sm font-medium text-slate-700 mb-1">School / University</label>
                                <input
                                    type="text"
                                    value={edu.school}
                                    onChange={(e) => handleChange(index, 'school', e.target.value)}
                                    placeholder="e.g. Stanford University"
                                    className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-1">Degree</label>
                                <input
                                    type="text"
                                    value={edu.degree}
                                    onChange={(e) => handleChange(index, 'degree', e.target.value)}
                                    placeholder="e.g. Bachelor of Science"
                                    className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-1">Start Date</label>
                                <div className="relative">
                                    <Calendar className="absolute left-3 top-3 text-slate-400" size={16} />
                                    <input
                                        type="month"
                                        value={edu.startDate}
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
                                        value={edu.endDate}
                                        onChange={(e) => handleChange(index, 'endDate', e.target.value)}
                                        className="w-full pl-10 pr-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
                {data.length === 0 && (
                    <div className="text-center py-8 bg-slate-50 rounded-lg border-2 border-dashed border-slate-200 text-slate-400">
                        <GraduationCap size={32} className="mx-auto mb-2 opacity-50" />
                        <p>No education added yet</p>
                        <button onClick={handleAdd} className="mt-2 text-indigo-600 font-medium hover:underline">Add Education</button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Education;
