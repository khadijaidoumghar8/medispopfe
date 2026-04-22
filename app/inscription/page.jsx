"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Eye, EyeOff, Mail, Lock, RefreshCw, Shield } from "lucide-react";

function PasswordField({ label, icon: Icon }) {
  const [show, setShow] = useState(false);
  return (
    <div>
      <label className="block text-xs font-bold uppercase tracking-widest text-gray-600 mb-1.5">
        {label}<span className="text-red-400">*</span>
      </label>
      <div className="flex items-center gap-3 bg-gray-100 rounded-xl px-4 py-3.5">
        <Icon size={16} className="text-gray-400 flex-shrink-0" />
        <input
          type={show ? "text" : "password"}
          placeholder="••••••••"
          className="flex-1 bg-transparent text-sm text-gray-700 outline-none"
        />
        <button
          type="button"
          onClick={() => setShow((s) => !s)}
          className="text-gray-400 hover:text-gray-600 flex-shrink-0"
        >
          {show ? <EyeOff size={16} /> : <Eye size={16} />}
        </button>
      </div>
    </div>
  );
}

const LegalBox = () => (
  <div className="bg-gray-50 border border-gray-200 rounded-xl px-4 py-3">
    <p className="text-xs text-gray-400 italic leading-relaxed">
      Conformément à la loi de 09-08, vous disposez d&apos;un droit d&apos;accès, de rectification
      et d&apos;opposition au traitement de vos données personnelles. Ce traitement a été
      autorisé par la CNDP sous le numéro D-765/2024.
    </p>
  </div>
);

const OuDivider = () => (
  <div className="flex items-center gap-3 my-4">
    <div className="flex-1 h-px bg-gray-200" />
    <span className="text-gray-400 text-xs font-medium">ou</span>
    <div className="flex-1 h-px bg-gray-200" />
  </div>
);

const GoogleButton = () => (
  <button
    type="button"
    className="w-full flex items-center justify-center gap-3 border border-gray-200 rounded-xl px-6 py-3.5 text-sm font-semibold text-gray-700 bg-white hover:bg-gray-50 transition-colors"
  >
    <svg width="18" height="18" viewBox="0 0 18 18">
      <path fill="#4285F4" d="M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844c-.209 1.125-.843 2.078-1.796 2.717v2.258h2.908c1.702-1.567 2.684-3.874 2.684-6.615z" />
      <path fill="#34A853" d="M9 18c2.43 0 4.467-.806 5.956-2.184l-2.908-2.258c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332C2.438 15.983 5.482 18 9 18z" />
      <path fill="#FBBC05" d="M3.964 10.707c-.18-.54-.282-1.117-.282-1.707s.102-1.167.282-1.707V4.961H.957C.347 6.175 0 7.55 0 9s.348 2.825.957 4.039l3.007-2.332z" />
      <path fill="#EA4335" d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0 5.482 0 2.438 2.017.957 4.961L3.964 7.293C4.672 5.166 6.656 3.58 9 3.58z" />
    </svg>
    Continuer avec Google
  </button>
);

export default function InscriptionPage() {
  const [onglet, setOnglet] = useState("utilisateur");
  const [accepted, setAccepted] = useState(false);
  const [acceptedPharmacie, setAcceptedPharmacie] = useState(false);
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gray-100 flex items-start justify-center py-8 px-4">
      <div className="w-full max-w-5xl bg-white rounded-3xl shadow-xl overflow-hidden flex">

        <div className="hidden md:block w-[42%] flex-shrink-0 relative min-h-[760px]">
          <Image
            src="/image.png"
            alt="Intérieur pharmacie"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#162d4a]/95 via-[#162d4a]/35 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
            <div className="flex items-center gap-2 mb-5">
              <Shield size={17} className="text-white/80" />
              <span className="font-semibold text-sm tracking-wide">MedisPo</span>
            </div>
            <h2 className="font-title text-3xl font-extrabold mb-3 leading-snug">
              La technologie au<br />service de la santé.
            </h2>
            <p className="text-white/70 text-sm leading-relaxed">
              {onglet === "utilisateur"
                ? "Accédez à l'intégralité des médicaments et diagnostiquez votre état de santé en toute sécurité avec nos outils médicaux."
                : "Développez votre pharmacie et attirez plus de clients en rejoignant notre plateforme."}
            </p>
          </div>
        </div>

        <div className="flex-1 flex flex-col overflow-y-auto">
          <div className="px-8 pt-8">
            <div className="flex bg-gray-100 rounded-xl p-1">
              <button
                onClick={() => setOnglet("pharmacie")}
                className={`flex-1 py-3 rounded-lg text-sm font-semibold transition-all ${
                  onglet === "pharmacie"
                    ? "bg-primary text-white shadow-sm"
                    : "text-gray-500 hover:text-gray-700"
                }`}
              >
                Inscription Pharmacie
              </button>
              <button
                onClick={() => setOnglet("utilisateur")}
                className={`flex-1 py-3 rounded-lg text-sm font-semibold transition-all ${
                  onglet === "utilisateur"
                    ? "bg-primary text-white shadow-sm"
                    : "text-gray-500 hover:text-gray-700"
                }`}
              >
                Inscription Utilisateur
              </button>
            </div>
          </div>

          {onglet === "utilisateur" && (
            <div className="px-8 py-6">
              <h1 className="font-title text-3xl font-extrabold text-primary mb-1">Inscription</h1>
              <p className="text-gray-500 text-sm mb-6">Créez votre compte personnel</p>

              <form className="flex flex-col gap-4">
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-gray-600 mb-1.5">
                      Nom<span className="text-red-400">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Doe"
                      className="w-full bg-gray-100 rounded-xl px-4 py-3.5 text-sm text-gray-700 outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-primary/20"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-gray-600 mb-1.5">
                      Prénom<span className="text-red-400">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="John"
                      className="w-full bg-gray-100 rounded-xl px-4 py-3.5 text-sm text-gray-700 outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-primary/20"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-gray-600 mb-1.5">
                    Numéro de téléphone
                  </label>
                  <div className="flex items-center bg-gray-100 rounded-xl overflow-hidden">
                    <div className="flex items-center gap-2 px-3 py-3.5 border-r border-gray-200 flex-shrink-0">
                      <span className="text-base leading-none">🇲🇦</span>
                      <span className="text-sm font-semibold text-gray-700">+212</span>
                    </div>
                    <input
                      type="tel"
                      placeholder="6 00 00 00 00"
                      className="flex-1 bg-transparent px-3 py-3.5 text-sm text-gray-700 outline-none placeholder:text-gray-400"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-gray-600 mb-1.5">
                    Email<span className="text-red-400">*</span>
                  </label>
                  <div className="flex items-center gap-3 bg-gray-100 rounded-xl px-4 py-3.5">
                    <Mail size={16} className="text-gray-400 flex-shrink-0" />
                    <input
                      type="email"
                      placeholder="votre@email.com"
                      className="flex-1 bg-transparent text-sm text-gray-700 outline-none placeholder:text-gray-400"
                    />
                  </div>
                </div>

                <PasswordField label="Mot de passe" icon={Lock} />
                <PasswordField label="Confirmer votre mot de passe" icon={RefreshCw} />

                <label className="flex items-start gap-2.5 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={accepted}
                    onChange={(e) => setAccepted(e.target.checked)}
                    className="mt-0.5 w-4 h-4 rounded border-gray-300 accent-primary flex-shrink-0"
                  />
                  <span className="text-xs text-gray-600 leading-relaxed">
                    J&apos;ai lu et j&apos;accepte les{" "}
                    <Link href="#" className="text-primary hover:underline font-medium">
                      conditions générales d&apos;utilisation
                    </Link>
                    , notamment la mention relative à la protection des données personnelles.
                  </span>
                </label>

                <LegalBox />

                <button
                  type="button"
                  onClick={() => router.push("/dashboard")}
                  className="w-full bg-primary text-white rounded-xl py-4 text-base font-semibold hover:bg-secondary transition-colors"
                >
                  S&apos;inscrire
                </button>
              </form>

              <OuDivider />
              <GoogleButton />
              <p className="text-center text-sm text-gray-500 mt-4">
                Déjà un compte ?{" "}
                <Link href="/connexion" className="text-primary font-semibold hover:underline">
                  Se connecter
                </Link>
              </p>
            </div>
          )}

          {onglet === "pharmacie" && (
            <div className="px-8 py-6">
              <h1 className="font-title text-3xl font-extrabold text-primary mb-1">Inscription</h1>
              <p className="text-gray-500 text-sm mb-6">Créez votre compte professionnel</p>

              <form className="flex flex-col gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-gray-600 mb-1.5">
                    Email <span className="text-red-400">*</span>
                  </label>
                  <div className="flex items-center gap-3 bg-gray-100 rounded-xl px-4 py-3.5">
                    <Mail size={16} className="text-gray-400 flex-shrink-0" />
                    <input
                      type="email"
                      placeholder="contact@pharmacie.fr"
                      className="flex-1 bg-transparent text-sm text-gray-700 outline-none placeholder:text-gray-400"
                    />
                  </div>
                </div>

                <PasswordField label="Mot de passe" icon={Lock} />
                <PasswordField label="Confirmer le mot de passe" icon={RefreshCw} />

                <label className="flex items-start gap-2.5 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={acceptedPharmacie}
                    onChange={(e) => setAcceptedPharmacie(e.target.checked)}
                    className="mt-0.5 w-4 h-4 rounded border-gray-300 accent-primary flex-shrink-0"
                  />
                  <span className="text-xs text-gray-600 leading-relaxed">
                    J&apos;ai lu et j&apos;accepte les{" "}
                    <Link href="#" className="text-primary hover:underline font-medium">
                      conditions générales d&apos;utilisation
                    </Link>
                    , notamment la mention relative à la protection des données personnelles.
                  </span>
                </label>

                <LegalBox />

                <button
                  type="button"
                  onClick={() => router.push("/inscription/finalisation")}
                  className="w-full bg-primary text-white rounded-xl py-4 text-base font-semibold hover:bg-secondary transition-colors"
                >
                  Créer mon compte
                </button>
              </form>

              <OuDivider />
              <GoogleButton />
              <p className="text-center text-sm text-gray-500 mt-4">
                Déjà un compte professionnel ?{" "}
                <Link href="/connexion" className="text-primary font-semibold hover:underline">
                  Se connecter
                </Link>
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
