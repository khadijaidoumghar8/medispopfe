import Sidebar from "@/components/Sidebar";
import Link from "next/link";
import { Bell, CheckCircle } from "lucide-react";

export default function VerificationEnCoursPage() {
  return (
    <div className="flex min-h-screen bg-[#f0f2f5]">
      <Sidebar />

      <div className="flex-1 flex flex-col">
        {/* Topbar */}
        <header className="bg-white border-b border-gray-200 px-6 py-3 flex items-center justify-between">
          <h1 className="font-bold text-primary text-lg">
            Vérification d'Identité
          </h1>
          <div className="flex items-center gap-4">
            <button className="relative text-gray-500 hover:text-primary">
              <Bell size={20} />
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full text-white text-[9px] flex items-center justify-center font-bold">
                3
              </span>
            </button>
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 bg-primary rounded-full flex items-center justify-center text-white text-sm font-bold">
                AH
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-800 leading-none">
                  Ahmed Bennani
                </p>
                <p className="text-xs text-yellow-500 font-medium mt-0.5">
                  ★ Patient
                </p>
              </div>
            </div>
          </div>
        </header>

        {/* Contenu */}
        <main className="flex-1 flex items-start justify-center px-4 pt-10">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 w-full max-w-2xl p-12 flex flex-col items-center text-center">

            {/* Icône checkmark vert */}
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
              <CheckCircle size={36} className="text-green-500" />
            </div>

            {/* Titre */}
            <h2 className="font-title text-3xl font-extrabold text-primary mb-3">
              Vérification en cours
            </h2>

            {/* Description */}
            <p className="text-textgray text-sm leading-relaxed mb-8 max-w-sm">
              Votre CIN a été soumis. Vous recevrez une confirmation
              dans les 24h.
            </p>

            {/* Bouton retour */}
            <Link
            href="/dashboard/complet"
            className="w-full bg-primary text-white rounded-xl px-6 py-4 text-sm font-semibold hover:bg-secondary transition-colors text-center"
            >
            Retour au tableau de bord
            </Link>
          </div>
        </main>
      </div>
    </div>
  );
}