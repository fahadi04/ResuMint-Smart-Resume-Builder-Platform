import React from 'react';
import { Wrench, Plus, X } from 'lucide-react';

const Skills = ({ data, onChange }) => {
    // data is expected to be an array of objects { name: string, level: string }

    const handleAdd = () => {
        onChange([...data, { name: 'New Skill', level: 'Intermediate' }]);
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
                    <Wrench className="text-indigo-600" size={20} />
                    Skills
                </h2>
                <button
                    onClick={handleAdd}
                    className="flex items-center gap-1 text-sm font-medium text-indigo-600 hover:text-indigo-700 hover:bg-indigo-50 px-3 py-1.5 rounded-lg transition-colors"
                >
                    <Plus size={16} /> Add Skill
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {data.map((skill, index) => (
                    <div key={index} className="flex items-center gap-2 p-3 bg-slate-50 rounded-lg border border-slate-200 group">
                        <input
                            type="text"
                            value={skill.name}
                            onChange={(e) => handleChange(index, 'name', e.target.value)}
                            className="flex-1 bg-transparent border-none focus:ring-0 p-0 font-medium text-slate-700"
                            placeholder="Skill Name"
                        />
                        <select
                            value={skill.level}
                            onChange={(e) => handleChange(index, 'level', e.target.value)}
                            className="text-xs bg-white border-slate-200 rounded px-2 py-1 text-slate-500"
                        >
                            <option value="Beginner">Beginner</option>
                            <option value="Intermediate">Intermediate</option>
                            <option value="Advanced">Advanced</option>
                            <option value="Expert">Expert</option>
                        </select>
                        <button
                            onClick={() => handleRemove(index)}
                            className="text-slate-400 hover:text-red-500 transition-colors p-1"
                        >
                            <X size={16} />
                        </button>
                    </div>
                ))}
            </div>
            {data.length === 0 && (
                <div className="text-center py-8 bg-slate-50 rounded-lg border-2 border-dashed border-slate-200 text-slate-400">
                    <Wrench size={32} className="mx-auto mb-2 opacity-50" />
                    <p>No skills added yet</p>
                    <button onClick={handleAdd} className="mt-2 text-indigo-600 font-medium hover:underline">Add Skill</button>
                </div>
            )}
        </div>
    );
};

export default Skills;
