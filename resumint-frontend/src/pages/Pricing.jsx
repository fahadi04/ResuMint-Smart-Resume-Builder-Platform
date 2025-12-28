import { Check, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import Footer from '../components/layout/Footer';

const Pricing = () => {
    return (
        <div className="bg-slate-50 min-h-screen py-20 px-4">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <Link to="/" className="text-indigo-600 font-bold mb-4 inline-block hover:underline">&larr; Back to Home</Link>
                    <h1 className="text-4xl font-bold text-slate-900 mb-4">Simple, Transparent Pricing</h1>
                    <p className="text-xl text-slate-500 max-w-2xl mx-auto">
                        Start for free, upgrade for premium features. No credit card required to start.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    {/* Free Plan */}
                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col hover:border-indigo-200 transition-colors">
                        <div className="mb-6">
                            <h3 className="text-xl font-bold text-slate-900">Free</h3>
                            <p className="text-slate-500 text-sm mt-1">For students & first-timers</p>
                        </div>
                        <div className="mb-6">
                            <span className="text-4xl font-bold text-slate-900">$0</span>
                            <span className="text-slate-400">/month</span>
                        </div>
                        <Link to="/register" className="block w-full text-center bg-indigo-50 text-indigo-700 font-bold py-3 rounded-full hover:bg-indigo-100 transition-colors mb-8">
                            Get Started
                        </Link>
                        <div className="flex-1 space-y-4">
                            {[
                                "1 Resume Template",
                                "Basic ATS Check",
                                "PDF Export (Watermarked)",
                                "7-day Cloud Storage",
                            ].map((feature, i) => (
                                <div key={i} className="flex items-center gap-3 text-slate-600 text-sm">
                                    <Check size={16} className="text-emerald-500 shrink-0" /> {feature}
                                </div>
                            ))}
                            {[
                                "No Cover Letter",
                                "No Email Support",
                            ].map((feature, i) => (
                                <div key={i} className="flex items-center gap-3 text-slate-400 text-sm line-through">
                                    <X size={16} className="shrink-0" /> {feature}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Pro Plan */}
                    <div className="bg-white p-8 rounded-2xl shadow-xl border-2 border-indigo-600 flex flex-col relative transform scale-105 z-10">
                        <div className="absolute top-0 right-0 bg-indigo-600 text-white text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg uppercase tracking-wider">
                            Most Popular
                        </div>
                        <div className="mb-6">
                            <h3 className="text-xl font-bold text-slate-900">Pro</h3>
                            <p className="text-slate-500 text-sm mt-1">For serious job seekers</p>
                        </div>
                        <div className="mb-6">
                            <span className="text-4xl font-bold text-slate-900">$12</span>
                            <span className="text-slate-400">/month</span>
                        </div>
                        <Link to="/register" className="block w-full text-center bg-indigo-600 text-white font-bold py-3 rounded-full hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-200 mb-8">
                            Start Free Trial
                        </Link>
                        <div className="flex-1 space-y-4">
                            {[
                                "Unlimited Resumes",
                                "All Premium Templates",
                                "Advanced ATS Optimizer",
                                "Unlimited PDF Downloads",
                                "Cover Letter Builder",
                                "Priority Email Support",
                            ].map((feature, i) => (
                                <div key={i} className="flex items-center gap-3 text-slate-700 font-medium text-sm">
                                    <Check size={16} className="text-indigo-600 shrink-0" /> {feature}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Enterprise Plan */}
                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col hover:border-indigo-200 transition-colors">
                        <div className="mb-6">
                            <h3 className="text-xl font-bold text-slate-900">Lifetime</h3>
                            <p className="text-slate-500 text-sm mt-1">One-time payment</p>
                        </div>
                        <div className="mb-6">
                            <span className="text-4xl font-bold text-slate-900">$99</span>
                            <span className="text-slate-400">/once</span>
                        </div>
                        <Link to="/register" className="block w-full text-center bg-slate-800 text-white font-bold py-3 rounded-full hover:bg-slate-900 transition-colors mb-8">
                            Buy Now
                        </Link>
                        <div className="flex-1 space-y-4">
                            {[
                                "Everything in Pro",
                                "Lifetime Access",
                                "LinkedIn Profile Review",
                                "Career Coaching Session",
                                "Feature Request Priority",
                            ].map((feature, i) => (
                                <div key={i} className="flex items-center gap-3 text-slate-600 text-sm">
                                    <Check size={16} className="text-emerald-500 shrink-0" /> {feature}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Pricing;
