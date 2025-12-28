import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FileText, CheckCircle, Zap, Layout, Shield, Download, Star, ArrowRight, Menu, X } from 'lucide-react';
import Footer from '../components/layout/Footer';

const Landing = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const fadeIn = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
            {/* Navbar */}
            <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50 border-b border-slate-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        <div className="flex items-center gap-2">
                            <div className="bg-indigo-600 p-2 rounded-lg">
                                <FileText className="text-white w-6 h-6" />
                            </div>
                            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-violet-600">
                                ResuMint
                            </span>
                        </div>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center space-x-8">
                            <a href="#features" className="text-slate-600 hover:text-indigo-600 font-medium transition-colors">Features</a>
                            <a href="#how-it-works" className="text-slate-600 hover:text-indigo-600 font-medium transition-colors">How it Works</a>
                            <a href="#testimonials" className="text-slate-600 hover:text-indigo-600 font-medium transition-colors">Testimonials</a>
                        </div>

                        <div className="hidden md:flex items-center space-x-4">
                            <Link to="/login" className="text-slate-600 hover:text-indigo-600 font-medium px-4 py-2 transition-colors">Login</Link>
                            <Link to="/register" className="bg-indigo-600 text-white px-5 py-2.5 rounded-full font-medium hover:bg-indigo-700 transition-all shadow-lg hover:shadow-indigo-500/30">
                                Get Started
                            </Link>
                        </div>

                        {/* Mobile Menu Button */}
                        <div className="md:hidden">
                            <button
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                className="text-slate-600 hover:text-indigo-600 p-2"
                            >
                                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Menu Dropdown */}
                <AnimatePresence>
                    {isMobileMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="md:hidden bg-white border-b border-slate-200 overflow-hidden"
                        >
                            <div className="px-4 py-4 space-y-4 flex flex-col">
                                <a href="#features" onClick={() => setIsMobileMenuOpen(false)} className="text-slate-600 hover:text-indigo-600 font-medium py-2">Features</a>
                                <a href="#how-it-works" onClick={() => setIsMobileMenuOpen(false)} className="text-slate-600 hover:text-indigo-600 font-medium py-2">How it Works</a>
                                <a href="#testimonials" onClick={() => setIsMobileMenuOpen(false)} className="text-slate-600 hover:text-indigo-600 font-medium py-2">Testimonials</a>
                                <hr className="border-slate-100" />
                                <Link to="/login" onClick={() => setIsMobileMenuOpen(false)} className="text-slate-600 hover:text-indigo-600 font-medium py-2">Login</Link>
                                <Link to="/register" onClick={() => setIsMobileMenuOpen(false)} className="bg-indigo-600 text-white px-5 py-3 rounded-xl font-medium text-center shadow-lg">
                                    Get Started
                                </Link>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </nav>

            {/* Hero Section */}
            <section className="pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden relative">
                {/* Background Blobs */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full z-0 pointer-events-none">
                    <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
                    <div className="absolute top-20 right-10 w-72 h-72 bg-violet-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
                    <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={fadeIn}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="inline-block py-1 px-3 rounded-full bg-indigo-100 text-indigo-700 text-sm font-semibold mb-6 border border-indigo-200">
                            ✨ AI-Powered Resume Builder
                        </span>
                        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 mb-8 leading-tight">
                            Build a <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">Winning Resume</span><br />
                            in Minutes, Not Hours.
                        </h1>
                        <p className="mt-4 max-w-2xl mx-auto text-xl text-slate-600 mb-10">
                            Create professional, ATS-friendly resumes with our intuitive builder.
                            Choose from modern templates and get hired faster at top companies.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <Link to="/register" className="px-8 py-4 bg-indigo-600 text-white rounded-full font-bold text-lg hover:bg-indigo-700 transition-all shadow-xl hover:shadow-indigo-500/40 flex items-center justify-center gap-2">
                                Build Your Resume <ArrowRight size={20} />
                            </Link>
                            <Link to="/templates" className="px-8 py-4 bg-white text-slate-700 border border-slate-200 rounded-full font-bold text-lg hover:bg-slate-50 transition-all shadow-sm flex items-center justify-center">
                                View Templates
                            </Link>
                        </div>
                    </motion.div>

                    {/* Dashboard Preview Image using generic placeholder representation or generated image */}
                    <motion.div
                        className="mt-16 relative mx-auto max-w-5xl"
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                    >
                        <div className="rounded-2xl border border-slate-200 bg-white/50 backdrop-blur-xl p-2 shadow-2xl">
                            <div className="rounded-xl overflow-hidden bg-slate-100 aspect-video flex items-center justify-center relative group">
                                <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/10 to-violet-500/10"></div>
                                <div className="text-center">
                                    <Layout size={64} className="mx-auto text-indigo-300 mb-4" />
                                    <p className="text-slate-400 font-medium">Interactive Resume Builder Interface</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Features Section */}
            <section id="features" className="py-20 bg-white relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">Everything you need to get hired</h2>
                        <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
                            Powerful features designed to help you stand out from the crowd and pass Applicant Tracking Systems.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            { icon: <CheckCircle className="w-6 h-6 text-emerald-500" />, title: "ATS-Friendly", desc: "Templates designed to be easily parsed by recruitment software." },
                            { icon: <Zap className="w-6 h-6 text-amber-500" />, title: "Instant Generation", desc: "Create multiple versions of your resume in seconds." },
                            { icon: <Layout className="w-6 h-6 text-indigo-500" />, title: "Modern Templates", desc: "Professionally designed layouts for every industry." },
                            { icon: <Shield className="w-6 h-6 text-blue-500" />, title: "Secure & Private", desc: "Your data is encrypted and safe. No hidden tracking." },
                            { icon: <Download className="w-6 h-6 text-violet-500" />, title: "PDF Export", desc: "Download high-quality PDFs ready for application." },
                            { icon: <Star className="w-6 h-6 text-rose-500" />, title: "Expert Tips", desc: "Built-in guidance to help you write compelling content." }
                        ].map((feature, index) => (
                            <motion.div
                                key={index}
                                className="p-8 rounded-2xl bg-slate-50 hover:bg-indigo-50/50 transition-colors border border-slate-100 hover:border-indigo-100 group"
                                whileHover={{ y: -5 }}
                            >
                                <div className="bg-white p-3 rounded-xl inline-block shadow-sm mb-4 group-hover:scale-110 transition-transform">
                                    {feature.icon}
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-2">{feature.title}</h3>
                                <p className="text-slate-600">{feature.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* How It Works */}
            <section id="how-it-works" className="py-20 bg-slate-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">How it works</h2>
                        <p className="mt-4 text-lg text-slate-600">Three simple steps to your dream job</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
                        {[
                            { step: "01", title: "Choose a Template", desc: "Select from our range of professional, field-tested templates." },
                            { step: "02", title: "Enter Your Details", desc: "Fill in your experience, skills, and education in our easy form." },
                            { step: "03", title: "Download & Apply", desc: "Export your polished resume as a PDF and start applying." }
                        ].map((item, index) => (
                            <div key={index} className="relative">
                                <span className="text-9xl font-black text-slate-200 absolute -top-10 left-1/2 -translate-x-1/2 z-0 opacity-50 select-none">
                                    {item.step}
                                </span>
                                <div className="relative z-10">
                                    <h3 className="text-2xl font-bold text-slate-900 mb-4 pt-10">{item.title}</h3>
                                    <p className="text-slate-600 max-w-xs mx-auto">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section id="testimonials" className="py-20 bg-white border-t border-slate-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-slate-900">Loved by professionals</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            { name: "Sarah J.", role: "Software Engineer", quote: "I landed my dream job at a FAANG company thanks to the clean, ATS-friendly templates." },
                            { name: "David M.", role: "Marketing Director", quote: "The easiest resume builder I've used. The interface is intuitive and fast." },
                            { name: "Emily R.", role: "Recent Graduate", quote: "As a fresh grad, I didn't know where to start. ResuMint made it super simple." }
                        ].map((t, i) => (
                            <div key={i} className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                                <div className="flex text-amber-400 mb-4">
                                    {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                                </div>
                                <p className="text-slate-700 mb-6 italic">"{t.quote}"</p>
                                <div>
                                    <p className="font-bold text-slate-900">{t.name}</p>
                                    <p className="text-sm text-slate-500">{t.role}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Footer */}
            <Footer />
        </div>
    );
};

export default Landing;
