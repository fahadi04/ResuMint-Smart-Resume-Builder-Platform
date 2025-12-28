import React from 'react';
import { useForm } from 'react-hook-form';
import { useAuth } from '../context/AuthContext';
import { Link, useNavigate } from 'react-router-dom';
import { Loader2, Check } from 'lucide-react';

const Register = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { register: registerUser, loading } = useAuth();
    const navigate = useNavigate();

    const onSubmit = async (data) => {
        try {
            await registerUser(data);
            navigate('/dashboard');
        } catch (error) {
            console.error("Registration failed", error);
        }
    };

    return (
        <div className="min-h-screen flex bg-white">
            {/* Left Side - Image/Feature */}
            <div className="hidden lg:flex w-1/2 bg-slate-900 relative overflow-hidden items-center justify-center p-12">
                <div className="relative z-10 max-w-lg">
                    <div className="mb-8">
                        <span className="bg-indigo-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">New</span>
                        <h2 className="text-4xl font-bold text-white mt-4 mb-4">Start your journey to a better career.</h2>
                        <p className="text-slate-400 text-lg">Create a professional resume in minutes and stand out from the competition.</p>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div className="bg-slate-800 p-4 rounded-xl border border-slate-700">
                            <div className="text-2xl font-bold text-white mb-1">10k+</div>
                            <div className="text-slate-400 text-sm">Resumes Created</div>
                        </div>
                        <div className="bg-slate-800 p-4 rounded-xl border border-slate-700">
                            <div className="text-2xl font-bold text-white mb-1">95%</div>
                            <div className="text-slate-400 text-sm">Satisfaction Rate</div>
                        </div>
                    </div>
                </div>
                {/* Abstract grid pattern */}
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-600 rounded-full mix-blend-overlay filter blur-[128px] opacity-50"></div>
            </div>

            {/* Right Side - Form */}
            <div className="w-full lg:w-1/2 flex items-center justify-center p-8 sm:p-12 lg:p-24 bg-white">
                <div className="w-full max-w-md space-y-8 text-center sm:text-left">
                    <div className="text-center lg:text-left">
                        <h2 className="text-4xl font-extrabold text-slate-900 tracking-tight">Create your account</h2>
                        <p className="mt-2 text-slate-500 text-lg">
                            Get started for free. No credit card required.
                        </p>
                    </div>

                    <form className="mt-8 space-y-5" onSubmit={handleSubmit(onSubmit)}>
                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-1 text-left">Full Name</label>
                            <input
                                {...register("name", { required: "Name is required" })}
                                className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-indigo-500 focus:bg-white focus:ring-0 transition-colors"
                                placeholder="John Doe"
                                type="text"
                            />
                            {errors.name && <span className="text-red-500 text-sm mt-1 block text-left">{errors.name.message}</span>}
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-1 text-left">Email address</label>
                            <input
                                {...register("email", { required: "Email is required" })}
                                className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-indigo-500 focus:bg-white focus:ring-0 transition-colors"
                                placeholder="john@example.com"
                                type="email"
                            />
                            {errors.email && <span className="text-red-500 text-sm mt-1 block text-left">{errors.email.message}</span>}
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-1 text-left">Password</label>
                            <input
                                {...register("password", { required: "Password is required", minLength: { value: 6, message: "Min 6 chars" } })}
                                className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-indigo-500 focus:bg-white focus:ring-0 transition-colors"
                                placeholder="••••••••"
                                type="password"
                            />
                            {errors.password && <span className="text-red-500 text-sm mt-1 block text-left">{errors.password.message}</span>}
                        </div>

                        <div className="flex items-center text-sm text-center lg:text-left">
                            <input type="checkbox" className="mr-2 rounded text-indigo-600 focus:ring-indigo-500" id="terms" required />
                            <label htmlFor="terms" className="text-slate-500">I agree to the <a href="#" className="text-indigo-600 font-medium hover:underline">Terms of Service</a> and <a href="#" className="text-indigo-600 font-medium hover:underline">Privacy Policy</a></label>
                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-bold text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
                        >
                            {loading ? <Loader2 className="animate-spin" /> : "Create Account"}
                        </button>

                        <p className="mt-4 text-center text-sm text-slate-600">
                            Already have an account?{' '}
                            <Link to="/login" className="font-medium text-indigo-600 hover:text-indigo-500">
                                Sign in
                            </Link>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;
