import React from 'react';
import { Mail, Phone, MapPin, Globe, Linkedin } from 'lucide-react';

const ResumePreview = ({ data }) => {
    if (!data) return <div className="text-center text-slate-400 py-20">Loading preview...</div>;

    const { personalDetails, experience, education, skills, projects } = data;

    return (
        <div className="bg-white min-h-[1100px] w-full shadow-2xl p-12 text-slate-800 text-sm leading-normal">
            {/* Header */}
            <header className="border-b-2 border-slate-800 pb-6 mb-6">
                <h1 className="text-4xl font-bold uppercase tracking-wide text-slate-900 mb-2">
                    {personalDetails?.firstName} {personalDetails?.lastName}
                </h1>
                <p className="text-xl text-slate-600 font-medium mb-4">{personalDetails?.jobTitle}</p>

                <div className="flex flex-wrap gap-4 text-xs text-slate-500 font-medium">
                    {personalDetails?.email && (
                        <div className="flex items-center gap-1">
                            <Mail size={12} /> {personalDetails.email}
                        </div>
                    )}
                    {personalDetails?.phone && (
                        <div className="flex items-center gap-1">
                            <Phone size={12} /> {personalDetails.phone}
                        </div>
                    )}
                    {personalDetails?.address && (
                        <div className="flex items-center gap-1">
                            <MapPin size={12} /> {personalDetails.address}
                        </div>
                    )}
                    {personalDetails?.website && (
                        <div className="flex items-center gap-1">
                            <Globe size={12} /> {personalDetails.website}
                        </div>
                    )}
                    {personalDetails?.linkedin && (
                        <div className="flex items-center gap-1">
                            <Linkedin size={12} /> {personalDetails.linkedin}
                        </div>
                    )}
                </div>
            </header>

            {/* Summary */}
            {personalDetails?.summary && (
                <section className="mb-6">
                    <h2 className="text-xs font-bold uppercase tracking-wider text-slate-700 border-b border-slate-200 pb-1 mb-2">Professional Summary</h2>
                    <p className="text-slate-600 leading-relaxed text-justify">{personalDetails.summary}</p>
                </section>
            )}

            {/* Experience */}
            {experience?.length > 0 && (
                <section className="mb-6">
                    <h2 className="text-xs font-bold uppercase tracking-wider text-slate-700 border-b border-slate-200 pb-1 mb-3">Experience</h2>
                    <div className="space-y-4">
                        {experience.map((exp, i) => (
                            <div key={i}>
                                <div className="flex justify-between items-baseline mb-1">
                                    <h3 className="font-bold text-slate-800">{exp.title}</h3>
                                    <span className="text-xs text-slate-500 whitespace-nowrap">
                                        {exp.startDate} - {exp.current ? 'Present' : exp.endDate}
                                    </span>
                                </div>
                                <div className="text-indigo-600 font-medium text-xs mb-1">{exp.company}</div>
                                <p className="text-slate-600 whitespace-pre-line">{exp.description}</p>
                            </div>
                        ))}
                    </div>
                </section>
            )}

            {/* Projects */}
            {projects?.length > 0 && (
                <section className="mb-6">
                    <h2 className="text-xs font-bold uppercase tracking-wider text-slate-700 border-b border-slate-200 pb-1 mb-3">Projects</h2>
                    <div className="space-y-3">
                        {projects.map((proj, i) => (
                            <div key={i}>
                                <div className="flex justify-between items-baseline">
                                    <h3 className="font-bold text-slate-800">
                                        {proj.name}
                                        {proj.link && <a href={`https://${proj.link}`} target="_blank" rel="noreferrer" className="text-indigo-500 ml-2 font-normal text-xs hover:underline">{proj.link}</a>}
                                    </h3>
                                </div>
                                <p className="text-slate-600 text-xs mt-1">{proj.description}</p>
                            </div>
                        ))}
                    </div>
                </section>
            )}

            {/* Two Column Layout for Education and Skills */}
            <div className="grid grid-cols-3 gap-8">
                {/* Education */}
                {education?.length > 0 && (
                    <div className="col-span-2">
                        <h2 className="text-xs font-bold uppercase tracking-wider text-slate-700 border-b border-slate-200 pb-1 mb-3">Education</h2>
                        <div className="space-y-3">
                            {education.map((edu, i) => (
                                <div key={i}>
                                    <h3 className="font-bold text-slate-800">{edu.school}</h3>
                                    <div className="flex justify-between text-xs text-slate-500 mt-0.5">
                                        <span>{edu.degree}</span>
                                        <span>{edu.startDate} - {edu.endDate}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Skills */}
                {skills?.length > 0 && (
                    <div className="col-span-1">
                        <h2 className="text-xs font-bold uppercase tracking-wider text-slate-700 border-b border-slate-200 pb-1 mb-3">Skills</h2>
                        <div className="flex flex-wrap gap-2">
                            {skills.map((skill, i) => (
                                <span key={i} className="px-2 py-1 bg-slate-100 text-slate-700 rounded text-xs font-medium">
                                    {skill.name}
                                </span>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ResumePreview;
