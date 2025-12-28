import React from 'react';
import { FolderGit2, Plus, Trash2 } from 'lucide-react';

const Projects = ({ data, onChange }) => {
    const handleAdd = () => {
        onChange([...data, { name: '', description: '', link: '' }]);
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
                    <FolderGit2 className="text-indigo-600" size={20} />
                    Projects
                </h2>
                <button
                    onClick={handleAdd}
                    className="flex items-center gap-1 text-sm font-medium text-indigo-600 hover:text-indigo-700 hover:bg-indigo-50 px-3 py-1.5 rounded-lg transition-colors"
                >
                    <Plus size={16} /> Add Project
                </button>
            </div>

            <div className="space-y-6">
                {data.map((project, index) => (
                    <div key={index} className="p-4 bg-slate-50 rounded-lg border border-slate-200 relative group">
                        <button
                            onClick={() => handleRemove(index)}
                            className="absolute top-4 right-4 text-slate-400 hover:text-red-500 transition-colors opacity-0 group-hover:opacity-100"
                            title="Remove"
                        >
                            <Trash2 size={18} />
                        </button>

                        <div className="grid grid-cols-1 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-1">Project Name</label>
                                <input
                                    type="text"
                                    value={project.name}
                                    onChange={(e) => handleChange(index, 'name', e.target.value)}
                                    placeholder="e.g. E-commerce Website"
                                    className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-1">Link (Optional)</label>
                                <input
                                    type="text"
                                    value={project.link}
                                    onChange={(e) => handleChange(index, 'link', e.target.value)}
                                    placeholder="github.com/project"
                                    className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-1">Description</label>
                                <textarea
                                    value={project.description}
                                    onChange={(e) => handleChange(index, 'description', e.target.value)}
                                    rows={3}
                                    placeholder="Describe the project..."
                                    className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                                />
                            </div>
                        </div>
                    </div>
                ))}
                {data.length === 0 && (
                    <div className="text-center py-8 bg-slate-50 rounded-lg border-2 border-dashed border-slate-200 text-slate-400">
                        <FolderGit2 size={32} className="mx-auto mb-2 opacity-50" />
                        <p>No projects added yet</p>
                        <button onClick={handleAdd} className="mt-2 text-indigo-600 font-medium hover:underline">Add Project</button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Projects;
