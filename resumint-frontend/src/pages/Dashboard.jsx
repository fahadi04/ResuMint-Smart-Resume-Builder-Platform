import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ResumeForm from "../components/ResumeForm";
import ResumePreview from "../components/ResumePreview";
import { motion } from "framer-motion";

export default function Dashboard() {
    return (
        <>
            <Navbar />

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="min-h-screen bg-gradient-to-br from-indigo-50 to-white"
            >
                <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-2 gap-8">
                    <ResumeForm />
                    <ResumePreview />
                </div>
            </motion.div>
            <Footer/>
        </>
    );
}
