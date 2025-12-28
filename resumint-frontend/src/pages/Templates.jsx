import { Check, Search } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Footer from '../components/layout/Footer';

const Templates = () => {
    const [filter, setFilter] = useState('All');
    const [search, setSearch] = useState('');

    const templates = [
        { id: 1, name: "Professional Modern", category: "Experienced", image: "bg-indigo-100", tags: ["Clean", "Corporate"] },
        { id: 2, name: "Creative Designer", category: "Tech", image: "bg-pink-100", tags: ["Colorful", "Portfolio"] },
        { id: 3, name: "Minimalist", category: "Fresher", image: "bg-slate-100", tags: ["Simple", "ATS-Friendly"] },
        { id: 4, name: "Executive Suite", category: "Experienced", image: "bg-blue-100", tags: ["Formal", "Leadership"] },
        { id: 5, name: "Tech Lead", category: "Tech", image: "bg-emerald-100", tags: ["Modern", "Developer"] },
        { id: 6, name: "Academic", category: "Non-tech", image: "bg-amber-100", tags: ["Detailed", "Research"] },
    ];

    const categories = ["All", "Fresher", "Experienced", "Tech", "Non-tech"];

    const filteredTemplates = templates.filter(t => {
        const matchesCategory = filter === 'All' || t.category === filter;
        const matchesSearch = t.name.toLowerCase().includes(search.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    return (
        <>
            <div className="container mx-auto px-4 py-8 max-w-7xl min-h-screen">
                {/* Header */}
                <div className="text-center mb-12">
                    <Link to="/" className="text-indigo-600 font-bold mb-4 inline-block hover:underline">&larr; Back to Home</Link>
                    <h1 className="text-4xl font-bold text-slate-900 mb-4">Choose Your Perfect Resume Template</h1>
                    <p className="text-xl text-slate-500 max-w-2xl mx-auto">
                        Professionally designed, ATS-friendly templates to help you land your dream job.
                    </p>
                </div>

                {/* Controls */}
                <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-4 bg-white p-4 rounded-xl shadow-sm border border-slate-100">
                    {/* Categories */}
                    <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 hide-scrollbar">
                        {categories.map(cat => (
                            <button
                                key={cat}
                                onClick={() => setFilter(cat)}
                                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${filter === cat
                                    ? 'bg-indigo-600 text-white shadow-md'
                                    : 'bg-slate-50 text-slate-600 hover:bg-slate-100'
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>

                    {/* Search */}
                    <div className="relative w-full md:w-72">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                        <input
                            type="text"
                            placeholder="Search templates..."
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            className="w-full pl-10 pr-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                        />
                    </div>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredTemplates.map((template, index) => (
                        <motion.div
                            key={template.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all group"
                        >
                            {/* Preview Image Placeholder */}
                            <div className={`h-80 ${template.image} relative flex items-center justify-center p-8 group-hover:bg-opacity-80 transition-all`}>
                                <div className="w-full h-full bg-white shadow-lg rounded-lg opacity-40 transform group-hover:scale-105 transition-transform duration-500"></div>

                                {/* Overlay Actions */}
                                <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity bg-slate-900/10 backdrop-blur-sm">
                                    <button className="bg-white text-slate-900 px-6 py-3 rounded-full font-bold shadow-lg hover:bg-indigo-50 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                                        Preview
                                    </button>
                                    <Link to="/register" className="bg-indigo-600 text-white px-6 py-3 rounded-full font-bold shadow-lg hover:bg-indigo-700 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-75">
                                        Use This Template
                                    </Link>
                                </div>
                            </div>

                            {/* Info */}
                            <div className="p-5">
                                <div className="flex justify-between items-start mb-2">
                                    <h3 className="font-bold text-lg text-slate-800">{template.name}</h3>
                                    <div className="bg-slate-100 text-slate-600 text-xs px-2 py-1 rounded font-medium">
                                        {template.category}
                                    </div>
                                </div>
                                <div className="flex flex-wrap gap-2 mt-3">
                                    {template.tags.map(tag => (
                                        <span key={tag} className="text-xs text-slate-500 flex items-center gap-1">
                                            <Check size={12} className="text-emerald-500" /> {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Templates;
