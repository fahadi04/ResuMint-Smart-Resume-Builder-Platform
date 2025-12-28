import React from 'react';
import { useForm } from 'react-hook-form';
import { useAuth } from '../context/AuthContext';
import { Link, useNavigate } from 'react-router-dom';
import { Loader2, ArrowRight, CheckCircle } from 'lucide-react';

const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { login, loading } = useAuth();
    const navigate = useNavigate();

    const onSubmit = async (data) => {
        try {
            await login(data);
            navigate('/dashboard');
        } catch (error) {
            console.error("Login failed", error);
        }
    };

    return (
        <div className="min-h-screen flex bg-white">
            {/* Left Side - Form */}
            <div className="w-full lg:w-1/2 flex items-center justify-center p-8 sm:p-12 lg:p-24">
                <div className="w-full max-w-md space-y-8 text-center sm:text-left">
                    <div className="text-center lg:text-left">
                        <h2 className="text-4xl font-extrabold text-slate-900 tracking-tight">Welcome back</h2>
                        <p className="mt-2 text-slate-500 text-lg">
                            Please enter your details to sign in.
                        </p>
                    </div>

                    <form className="mt-8 space-y-6" onSubmit={handleSubmit(onSubmit)}>
                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-1 text-left">Email address</label>
                                <input
                                    {...register("email", { required: "Email is required" })}
                                    className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-indigo-500 focus:bg-white focus:ring-0 transition-colors"
                                    placeholder="Enter your email"
                                    type="email"
                                />
                                {errors.email && <span className="text-red-500 text-sm mt-1 block text-left">{errors.email.message}</span>}
                            </div>
                            <div>
                                <div className="flex justify-between items-center mb-1">
                                    <label className="block text-sm font-medium text-slate-700">Password</label>
                                    <a href="#" className="text-sm font-medium text-indigo-600 hover:text-indigo-500">Forgot password?</a>
                                </div>
                                <input
                                    {...register("password", { required: "Password is required" })}
                                    className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-indigo-500 focus:bg-white focus:ring-0 transition-colors"
                                    placeholder="••••••••"
                                    type="password"
                                />
                                {errors.password && <span className="text-red-500 text-sm mt-1 block text-left">{errors.password.message}</span>}
                            </div>
                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-bold text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
                        >
                            {loading ? <Loader2 className="animate-spin" /> : "Sign in"}
                        </button>

                        <div className="relative">
                            <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-slate-200"></div></div>
                            <div className="relative flex justify-center text-sm">
                                <span className="px-2 bg-white text-slate-500">Or continue with</span>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-3">
                            <button type="button" className="flex items-center justify-center w-full px-4 py-2 border border-slate-200 rounded-lg shadow-sm bg-white text-sm font-medium text-slate-700 hover:bg-slate-50">
                                <span className="sr-only">Sign in with Google</span>
                                Google
                            </button>
                            <button type="button" className="flex items-center justify-center w-full px-4 py-2 border border-slate-200 rounded-lg shadow-sm bg-white text-sm font-medium text-slate-700 hover:bg-slate-50">
                                <span className="sr-only">Sign in with GitHub</span>
                                GitHub
                            </button>
                        </div>

                        <p className="mt-4 text-center text-sm text-slate-600">
                            Don't have an account?{' '}
                            <Link to="/register" className="font-medium text-indigo-600 hover:text-indigo-500">
                                Sign up for free
                            </Link>
                        </p>
                    </form>
                </div>
            </div>

            {/* Right Side - Image/Feature */}
            <div className="hidden lg:flex w-1/2 bg-indigo-600 relative overflow-hidden items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 to-violet-700 opacity-90"></div>
                <div className="relative z-10 p-12 text-white max-w-xl">
                    <h3 className="text-3xl font-bold mb-6">Join thousands of professionals getting hired today.</h3>
                    <ul className="space-y-4 mb-8">
                        {['ATS-friendly templates', 'AI-powered suggestions', 'Real-time resume scoring'].map((item, i) => (
                            <li key={i} className="flex items-center gap-3 text-indigo-100 text-lg">
                                <CheckCircle className="text-emerald-400" /> {item}
                            </li>
                        ))}
                    </ul>
                    <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
                        <p className="text-indigo-50 italic mb-4">"ResuMint helped me rework my resume in under 20 minutes. I received 3 interview calls the next day!"</p>
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-indigo-400 rounded-full"></div>
                            <div>
                                <p className="font-bold">Alex Chen</p>
                                <p className="text-sm text-indigo-200">Software Engineer @ TechCorp</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Decorative background shapes */}
                <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 rounded-full bg-indigo-500 mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
                <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-violet-600 mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
            </div>
        </div>
    );
};

export default Login;
