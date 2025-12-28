import { motion } from "framer-motion";
import { useState } from "react";
import api from "../api/api";

export default function ResumeForm() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        skills: "",
    });

    const handleChange = (e) =>
        setForm({ ...form, [e.target.name]: e.target.value });

    const handleSubmit = async (e) => {
        e.preventDefault();
        await api.post("/resume", form);
        alert("Resume saved");
    };

    return (
        <motion.form
            initial={{ x: -40, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.4 }}
            onSubmit={handleSubmit}
            className="bg-white/80 backdrop-blur p-8 rounded-2xl shadow-xl"
        >
            <h2 className="text-2xl font-bold mb-6 text-gray-800">
                Build Your Resume
            </h2>

            <div className="space-y-5">
                <input
                    name="name"
                    placeholder="Full Name"
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border focus:ring-2 focus:ring-indigo-500 outline-none transition"
                />

                <input
                    name="email"
                    placeholder="Email Address"
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border focus:ring-2 focus:ring-indigo-500 outline-none transition"
                />

                <textarea
                    name="skills"
                    rows="4"
                    placeholder="Skills (comma separated)"
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border focus:ring-2 focus:ring-indigo-500 outline-none transition"
                />

                <button
                    type="submit"
                    className="w-full py-3 rounded-xl bg-indigo-600 text-white font-semibold hover:bg-indigo-700 active:scale-95 transition"
                >
                    Save Resume
                </button>
            </div>
        </motion.form>
    );
}
