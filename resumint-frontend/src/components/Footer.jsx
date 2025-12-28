import { motion } from "framer-motion";

export default function Footer() {
    return (
        <motion.footer
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-white border-t"
        >
            <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8 text-sm text-gray-600">

                {/* Brand */}
                <div>
                    <h2 className="text-xl font-bold text-indigo-600 mb-2">
                        Resumint
                    </h2>
                    <p className="leading-relaxed">
                        Build modern, ATS-friendly resumes with ease.
                        Designed for students, developers, and professionals.
                    </p>
                </div>

                {/* Links */}
                <div>
                    <h3 className="font-semibold text-gray-800 mb-3">
                        Quick Links
                    </h3>
                    <ul className="space-y-2">
                        <li className="hover:text-indigo-600 cursor-pointer transition">
                            Dashboard
                        </li>
                        <li className="hover:text-indigo-600 cursor-pointer transition">
                            Templates
                        </li>
                        <li className="hover:text-indigo-600 cursor-pointer transition">
                            Pricing
                        </li>
                        <li className="hover:text-indigo-600 cursor-pointer transition">
                            Support
                        </li>
                    </ul>
                </div>

                {/* Social / Info */}
                <div>
                    <h3 className="font-semibold text-gray-800 mb-3">
                        Connect
                    </h3>
                    <ul className="space-y-2">
                        <li className="hover:text-indigo-600 transition cursor-pointer">
                            LinkedIn
                        </li>
                        <li className="hover:text-indigo-600 transition cursor-pointer">
                            GitHub
                        </li>
                        <li className="hover:text-indigo-600 transition cursor-pointer">
                            Email Support
                        </li>
                    </ul>
                </div>

            </div>

            {/* Bottom bar */}
            <div className="border-t text-center py-4 text-xs text-gray-500">
                © {new Date().getFullYear()} Resumint. All rights reserved.
            </div>
        </motion.footer>
    );
}
