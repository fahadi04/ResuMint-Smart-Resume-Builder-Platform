const features = [
    "AI Resume Suggestions",
    "Multiple Templates",
    "PDF Export",
    "Cloud Storage",
];

export default function Features() {
    return (
        <section className="py-20 bg-slate-900">
            <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-6 px-4">
                {features.map((f) => (
                    <div
                        key={f}
                        className="bg-slate-800 p-6 rounded-lg hover:scale-105 transition animate-fade"
                    >
                        <h3 className="text-indigo-400 font-semibold">{f}</h3>
                    </div>
                ))}
            </div>
        </section>
    );
}
