import { motion } from "framer-motion";

export default function ResumePreview() {
    return (
        <motion.div
            initial={{ x: 40, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="bg-white/80 backdrop-blur p-8 rounded-2xl shadow-xl"
        >
            <h2 className="text-2xl font-bold mb-4 text-gray-800">
                Live Preview
            </h2>

            <div className="text-gray-600 space-y-3">
                <div className="h-4 bg-gray-200 rounded w-2/3 animate-pulse"></div>
                <div className="h-4 bg-gray-200 rounded w-1/2 animate-pulse"></div>
                <div className="h-4 bg-gray-200 rounded w-3/4 animate-pulse"></div>
            </div>
        </motion.div>
    );
}
