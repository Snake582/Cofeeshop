import Link from "next/link";

export default function Contact() {
    return(
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#4B2E2B] to-black relative">
          <div className="bg-white/10 backdrop-blur-lg border border-white/20 p-8 rounded-2xl shadow-xl w-full max-w-md text-white">
            <h1 className="text-3xl font-bold text-white">Contact 📱</h1>
            <p className="mt-4 text-gray-300">
              Pour toute question ou demande, n’hésitez pas à nous contacter :
            </p>
            <ul className="mt-4 space-y-2 text-gray-300">
              <li>Email : <a href="mailto:mamadoukabadiagne@gmail.com" className="text-[#C49A6C] hover:underline">
                mamadoukabadiagne@gmail.com
              </a></li>
            </ul>
            <ul className="mt-4 space-y-2 text-gray-300">
                <li>Phone : <a href="tel:+221706063217" className="text-[#C49A6C] hover:underline">
                +221 70 606 32 17
              </a></li>
            </ul>
            <ul className="mt-4 space-y-2 text-gray-300">
                <li>Addresse: Yoff, Dakar, Sénégal</li>
            </ul>
            <p className="mt-6 text-gray-300">
              Nous sommes impatients de vous aider à savourer l’instant café !
            </p>
           <div className="mt-8">
              <Link
                href="/"
                className="px-6 py-3 bg-[#C49A6C] hover:bg-[#a67c52] rounded-lg font-semibold transition duration-300 inline-block"
              >
                Retour à l’accueil
              </Link>
              </div>
          </div>
        </div>
    );
}