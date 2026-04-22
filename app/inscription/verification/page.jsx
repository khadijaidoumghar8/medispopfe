import Link from "next/link";
import Image from "next/image";
import { CheckCircle, Shield, Zap } from "lucide-react";

export default function VerificationPage() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 px-6 py-3 flex items-center justify-between">
        <Image
          src="/logo.jpeg"
          alt="MedisPo"
          width={130}
          height={36}
          className="object-contain"
        />
        <Link
          href="/pharmacie/dashboard"
          className="text-sm text-primary font-medium flex items-center gap-1 hover:underline"
        >
          Profil Pharmacie
          <span className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-xs ml-1">
            ⊕
          </span>
        </Link>
      </header>

      {/* Contenu principal */}
      <main className="flex-1 flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-3xl bg-white rounded-2xl shadow-md overflow-hidden flex flex-col md:flex-row">

          {/* Colonne gauche — bleu foncé */}
          <div className="bg-primary text-white p-8 md:w-2/5 flex flex-col justify-center">
            <h2 className="font-title text-2xl font-extrabold mb-3 leading-snug">
              Vérification<br />en cours.
            </h2>
            <p className="text-white/75 text-sm leading-relaxed mb-8">
              Notre équipe MedisPo examine vos documents pour
              garantir la sécurité et la conformité du réseau
              MedisPo.
            </p>

            {/* Badges */}
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <Shield size={16} className="text-hover" />
                <span className="text-xs font-semibold tracking-widest text-hover uppercase">
                  Sécurité Maximale
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Zap size={16} className="text-hover" />
                <span className="text-xs font-semibold tracking-widest text-hover uppercase">
                  Activation Rapide
                </span>
              </div>
            </div>
          </div>

          {/* Colonne droite — blanche */}
          <div className="flex-1 p-8 flex flex-col items-center justify-center text-center">
            {/* Checkmark */}
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-5">
              <CheckCircle size={36} className="text-green-500" />
            </div>

            <h3 className="font-title text-2xl font-extrabold text-gray-800 mb-3">
              Merci pour votre confiance !
            </h3>
            <p className="text-textgray text-sm leading-relaxed mb-6 max-w-xs">
              Votre compte sera activé en moins de 24 heures.
              Merci de votre patience pendant ce processus de
              validation.
            </p>

            <Link
              href="/pharmacie/dashboard"
              className="bg-primary text-white rounded-lg px-6 py-3 text-sm font-medium hover:bg-secondary transition-colors"
            >
              Continuer vers mon profil →
            </Link>

            <p className="text-xs text-textgray mt-5 max-w-xs leading-relaxed">
              Un e-mail de confirmation a été envoyé à l'adresse fournie lors
              de l'inscription.
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 px-6 py-4 flex flex-col md:flex-row items-center justify-between gap-2">
        <p className="text-xs text-textgray">© 2026 MedisPo</p>
        <div className="flex gap-4 text-xs text-textgray">
          <Link href="#" className="hover:text-primary transition-colors">
            Mentions légales
          </Link>
          <Link href="#" className="hover:text-primary transition-colors">
            Confidentialité
          </Link>
        </div>
        <p className="text-xs text-textgray">
          Besoin d'aide ?{" "}
          <a href="mailto:support@medispo.fr" className="text-primary hover:underline">
            support@medispo.fr
          </a>
        </p>
      </footer>
    </div>
  );
}