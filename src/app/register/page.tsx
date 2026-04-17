export default function Register() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#4B2E2B] to-black">
            <div className="bg-white/10 backdrop-blur-lg border border-white/20 p-8 rounded-2xl shadow-xl w-full max-w-md text-white">
                <h2 className="text-3xl font-bold mb-6 text-center"> Inscription ☕</h2>
                <form className="space-y-5">
                    <div>
                        <label className="block text-sm mb-1">Nom complet</label>
                        <input
                            type="text"
                            required
                            className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 focus:outline-none focus:ring-2 focus:ring-[#C49A6C] text-white placeholder-gray-300"
                            placeholder="Votre nom complet"
                        />
                    </div>
                    <div>
                        <label className="block text-sm mb-1">Email</label>
                        <input
                            type="email"
                            required
                            className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 focus:outline-none focus:ring-2 focus:ring-[#C49A6C] text-white placeholder-gray-300"
                            placeholder="Votre adresse email"
                        />
                    </div>
                    <div>
                        <label className="block text-sm mb-1">Mot de passe</label>
                        <input
                            type="password"
                            required
                            className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 focus:outline-none focus:ring-2 focus:ring-[#C49A6C] text-white placeholder-gray-300"
                            placeholder="Créez un mot de passe"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full py-3 bg-[#C49A6C] hover:bg-[#a67c52] rounded-lg font-semibold transition duration-300"
                    >
                        S’inscrire
                    </button>
                    <div className="mt-6 text-center text-sm text-gray-300">
                        Vous avez déjà un compte ?{" "}
                        <a href="/login" className="text-[#C49A6C] hover:underline">
                            Se connecter
                        </a>
                    </div>
                </form>
            </div>
        </div>
    );
}