export default function Navbar() {
    return (
        <nav className="fixed top-0 w-full bg-black/60 backdrop-blur z-50">
            <div className="max-w-7xl mx-auto flex justify-between p-4">
                <h1 className="text-xl font-bold text-indigo-400">Resumint</h1>
                <button className="bg-indigo-600 px-4 py-2 rounded hover:bg-indigo-700">
                    Login
                </button>
            </div>
        </nav>
    );
}
