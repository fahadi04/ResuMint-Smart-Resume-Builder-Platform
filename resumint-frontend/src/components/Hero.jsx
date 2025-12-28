export default function Hero() {
    return (
        <section className="min-h-screen flex items-center justify-center text-center px-4">
            <div className="animate-slide">
                <h1 className="text-4xl md:text-6xl font-bold mb-4">
                    Build Smart Resumes
                    <span className="text-indigo-400"> Instantly</span>
                </h1>
                <p className="text-gray-400 max-w-xl mx-auto mb-6">
                    AI-powered resume builder that gets you shortlisted faster.
                </p>
                <button className="bg-indigo-600 px-6 py-3 rounded-lg hover:scale-105 transition">
                    Get Started
                </button>
            </div>
        </section>
    );
}
