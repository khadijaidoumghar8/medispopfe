"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Eye, EyeOff, User, Mail, Phone, Lock, Building2, MapPin, Hash } from "lucide-react";

export default function InscriptionPage() {
  const [onglet, setOnglet] = useState("utilisateur");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [accepted, setAccepted] = useState(false);
  const router = useRouter();


  return (
    <div className="min-h-screen bg-background">
      {/* Onglets en haut */}
      <div className="bg-white border-b border-gray-100 sticky top-0 z-10">
        <div className="max-w-5xl mx-auto px-4 flex gap-1 py-3">
          <button
            onClick={() => setOnglet("utilisateur")}
            className={`px-5 py-2 rounded-lg text-sm font-medium transition-colors ${
              onglet === "utilisateur"
                ? "bg-primary text-white"
                : "text-gray-600 hover:bg-gray-100"
            }`}
          >
            Inscription Utilisateur
          </button>
          <button
            onClick={() => setOnglet("pharmacie")}
            className={`px-5 py-2 rounded-lg text-sm font-medium transition-colors ${
              onglet === "pharmacie"
                ? "bg-primary text-white"
                : "text-gray-600 hover:bg-gray-100"
            }`}
          >
            Inscription Pharmacie
          </button>
        </div>
      </div>

      {/* FORMULAIRE UTILISATEUR */}
      {onglet === "utilisateur" && (
        <div className="grid md:grid-cols-2 min-h-[calc(100vh-57px)]">
          {/* Colonne gauche — image */}
          <div className="relative hidden md:block">
            <div className="absolute inset-0 bg-primary/90 z-10 flex flex-col items-center justify-center px-10 text-white">
            <Image
              src="/logo.jpeg"
              alt="MedisPo"
              width={140}
              height={40}
              className="object-contain"
            />
              <h2 className="font-title text-3xl font-extrabold text-center mb-4">
                La technologie au service de la santé.
              </h2>
              <p className="text-white/80 text-sm text-center leading-relaxed">
                Accédez à l'intégralité des médicaments et diagnostiquiez
                votre état de santé en toute sécurité avec nos outils
                médicaux.
              </p>
            </div>
            <div className="absolute inset-0 bg-gray-300" />
          </div>

          {/* Colonne droite — formulaire */}
          <div className="flex items-center justify-center px-6 py-10">
            <div className="w-full max-w-md">
              <h1 className="font-title text-2xl font-extrabold text-primary mb-1">
                Inscription
              </h1>
              <p className="text-textgray text-sm mb-6">
                Créez votre compte personnel
              </p>

              <form className="flex flex-col gap-4">
                {/* Prénom / Nom */}
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-xs font-medium text-gray-700 mb-1 block">
                      Prénom
                    </label>
                    <div className="flex items-center gap-2 border border-gray-200 rounded-lg px-3 py-2.5 focus-within:border-primary">
                      <User size={15} className="text-gray-400" />
                      <input
                        type="text"
                        placeholder="Ahmed"
                        className="flex-1 outline-none text-sm text-gray-700"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-xs font-medium text-gray-700 mb-1 block">
                      Nom
                    </label>
                    <div className="flex items-center gap-2 border border-gray-200 rounded-lg px-3 py-2.5 focus-within:border-primary">
                      <User size={15} className="text-gray-400" />
                      <input
                        type="text"
                        placeholder="Bennani"
                        className="flex-1 outline-none text-sm text-gray-700"
                      />
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label className="text-xs font-medium text-gray-700 mb-1 block">
                    Adresse email
                  </label>
                  <div className="flex items-center gap-2 border border-gray-200 rounded-lg px-3 py-2.5 focus-within:border-primary">
                    <Mail size={15} className="text-gray-400" />
                    <input
                      type="email"
                      placeholder="ahmed@email.com"
                      className="flex-1 outline-none text-sm text-gray-700"
                    />
                  </div>
                </div>

                {/* Téléphone */}
                <div>
                  <label className="text-xs font-medium text-gray-700 mb-1 block">
                    Numéro de téléphone
                  </label>
                  <div className="flex items-center gap-2 border border-gray-200 rounded-lg px-3 py-2.5 focus-within:border-primary">
                    <span className="text-xs text-gray-500 font-medium border-r border-gray-200 pr-2">
                      +212
                    </span>
                    <Phone size={15} className="text-gray-400" />
                    <input
                      type="tel"
                      placeholder="06 00 00 00 00"
                      className="flex-1 outline-none text-sm text-gray-700"
                    />
                  </div>
                </div>

                {/* Mot de passe */}
                <div>
                  <label className="text-xs font-medium text-gray-700 mb-1 block">
                    Mot de passe
                  </label>
                  <div className="flex items-center gap-2 border border-gray-200 rounded-lg px-3 py-2.5 focus-within:border-primary">
                    <Lock size={15} className="text-gray-400" />
                    <input
                      type={showPassword ? "text" : "password"}
                      placeholder="••••••••"
                      className="flex-1 outline-none text-sm text-gray-700"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="text-gray-400 hover:text-gray-600"
                    >
                      {showPassword ? <EyeOff size={15} /> : <Eye size={15} />}
                    </button>
                  </div>
                </div>

                {/* Confirmer mot de passe */}
                <div>
                  <label className="text-xs font-medium text-gray-700 mb-1 block">
                    Confirmer le mot de passe
                  </label>
                  <div className="flex items-center gap-2 border border-gray-200 rounded-lg px-3 py-2.5 focus-within:border-primary">
                    <Lock size={15} className="text-gray-400" />
                    <input
                      type={showConfirm ? "text" : "password"}
                      placeholder="••••••••"
                      className="flex-1 outline-none text-sm text-gray-700"
                    />
                    <button
                      type="button"
                      onClick={() => setShowConfirm(!showConfirm)}
                      className="text-gray-400 hover:text-gray-600"
                    >
                      {showConfirm ? <EyeOff size={15} /> : <Eye size={15} />}
                    </button>
                  </div>
                </div>

                {/* Checkbox CGU */}
                <label className="flex items-start gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={accepted}
                    onChange={(e) => setAccepted(e.target.checked)}
                    className="mt-0.5 accent-primary"
                  />
                  <span className="text-xs text-textgray leading-relaxed">
                    J'accepte les{" "}
                    <Link href="#" className="text-primary hover:underline">
                      conditions générales d'utilisation
                    </Link>{" "}
                    et la{" "}
                    <Link href="#" className="text-primary hover:underline">
                      politique de confidentialité
                    </Link>
                  </span>
                </label>

                {/* Bouton inscription */}
                <button
                type="button"
                onClick={() => router.push("/dashboard")}
                className="bg-primary text-white rounded-lg px-6 py-3 font-medium text-sm hover:bg-secondary transition-colors"
                >
                S'inscrire
                </button>
              </form>

              {/* Séparateur */}
              <div className="flex items-center gap-3 my-4">
                <div className="flex-1 h-px bg-gray-200" />
                <span className="text-textgray text-xs">ou</span>
                <div className="flex-1 h-px bg-gray-200" />
              </div>

              {/* Google */}
              <button className="w-full flex items-center justify-center gap-3 border border-gray-200 rounded-lg px-6 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors">
                <svg width="18" height="18" viewBox="0 0 18 18">
                  <path fill="#4285F4" d="M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844c-.209 1.125-.843 2.078-1.796 2.717v2.258h2.908c1.702-1.567 2.684-3.874 2.684-6.615z" />
                  <path fill="#34A853" d="M9 18c2.43 0 4.467-.806 5.956-2.184l-2.908-2.258c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332C2.438 15.983 5.482 18 9 18z" />
                  <path fill="#FBBC05" d="M3.964 10.707c-.18-.54-.282-1.117-.282-1.707s.102-1.167.282-1.707V4.961H.957C.347 6.175 0 7.55 0 9s.348 2.825.957 4.039l3.007-2.332z" />
                  <path fill="#EA4335" d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0 5.482 0 2.438 2.017.957 4.961L3.964 7.293C4.672 5.166 6.656 3.58 9 3.58z" />
                </svg>
                Continuer avec Google
              </button>

              {/* Lien connexion */}
              <p className="text-center text-sm text-textgray mt-4">
                Déjà un compte ?{" "}
                <Link href="/connexion" className="text-primary font-medium hover:underline">
                  Se connecter
                </Link>
              </p>
            </div>
          </div>
        </div>
      )}

      {/* FORMULAIRE PHARMACIE */}
      {onglet === "pharmacie" && (
        <div className="grid md:grid-cols-2 min-h-[calc(100vh-57px)]">
          {/* Colonne gauche — image */}
          <div className="relative hidden md:block">
            <div className="absolute inset-0 bg-primary/90 z-10 flex flex-col items-center justify-center px-10 text-white">
            <Image
              src="/logo.jpeg"
              alt="MedisPo"
              width={140}
              height={40}
              className="object-contain"
            />
              <h2 className="font-title text-3xl font-extrabold text-center mb-4">
                Rejoignez notre réseau de pharmacies partenaires.
              </h2>
              <p className="text-white/80 text-sm text-center leading-relaxed">
                Augmentez votre visibilité et gérez vos stocks de médicaments
                efficacement grâce à notre plateforme dédiée aux professionnels.
              </p>
            </div>
            <div className="absolute inset-0 bg-gray-300" />
          </div>

          {/* Colonne droite — formulaire pharmacie */}
          <div className="flex items-center justify-center px-6 py-10">
            <div className="w-full max-w-md">
              <h1 className="font-title text-2xl font-extrabold text-primary mb-1">
                Inscription Pharmacie
              </h1>
              <p className="text-textgray text-sm mb-6">
                Créez votre profil professionnel
              </p>

              <form className="flex flex-col gap-4">
                {/* Nom pharmacie */}
                <div>
                  <label className="text-xs font-medium text-gray-700 mb-1 block">
                    Nom de la pharmacie
                  </label>
                  <div className="flex items-center gap-2 border border-gray-200 rounded-lg px-3 py-2.5 focus-within:border-primary">
                    <Building2 size={15} className="text-gray-400" />
                    <input
                      type="text"
                      placeholder="Pharmacie Atlas"
                      className="flex-1 outline-none text-sm text-gray-700"
                    />
                  </div>
                </div>

                {/* CIF */}
                <div>
                  <label className="text-xs font-medium text-gray-700 mb-1 block">
                    Numéro CIF
                  </label>
                  <div className="flex items-center gap-2 border border-gray-200 rounded-lg px-3 py-2.5 focus-within:border-primary">
                    <Hash size={15} className="text-gray-400" />
                    <input
                      type="text"
                      placeholder="12345678"
                      className="flex-1 outline-none text-sm text-gray-700"
                    />
                  </div>
                </div>

                {/* Secteur */}
                <div>
                  <label className="text-xs font-medium text-gray-700 mb-1 block">
                    Secteur d'activité
                  </label>
                  <div className="flex items-center gap-2 border border-gray-200 rounded-lg px-3 py-2.5 focus-within:border-primary">
                    <Hash size={15} className="text-gray-400" />
                    <select className="flex-1 outline-none text-sm text-gray-700 bg-transparent">
                      <option value="">Sélectionner un secteur</option>
                      <option value="urbain">Urbain</option>
                      <option value="rural">Rural</option>
                      <option value="periurbain">Péri-urbain</option>
                    </select>
                  </div>
                </div>

                {/* Ville */}
                <div>
                  <label className="text-xs font-medium text-gray-700 mb-1 block">
                    Ville
                  </label>
                  <div className="flex items-center gap-2 border border-gray-200 rounded-lg px-3 py-2.5 focus-within:border-primary">
                    <MapPin size={15} className="text-gray-400" />
                    <input
                      type="text"
                      placeholder="Casablanca"
                      className="flex-1 outline-none text-sm text-gray-700"
                    />
                  </div>
                </div>

                {/* Téléphone */}
                <div>
                  <label className="text-xs font-medium text-gray-700 mb-1 block">
                    Numéro de téléphone
                  </label>
                  <div className="flex items-center gap-2 border border-gray-200 rounded-lg px-3 py-2.5 focus-within:border-primary">
                    <span className="text-xs text-gray-500 font-medium border-r border-gray-200 pr-2">
                      +212
                    </span>
                    <Phone size={15} className="text-gray-400" />
                    <input
                      type="tel"
                      placeholder="05 22 00 00 00"
                      className="flex-1 outline-none text-sm text-gray-700"
                    />
                  </div>
                </div>

                {/* Mot de passe */}
                <div>
                  <label className="text-xs font-medium text-gray-700 mb-1 block">
                    Mot de passe
                  </label>
                  <div className="flex items-center gap-2 border border-gray-200 rounded-lg px-3 py-2.5 focus-within:border-primary">
                    <Lock size={15} className="text-gray-400" />
                    <input
                      type={showPassword ? "text" : "password"}
                      placeholder="••••••••"
                      className="flex-1 outline-none text-sm text-gray-700"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="text-gray-400 hover:text-gray-600"
                    >
                      {showPassword ? <EyeOff size={15} /> : <Eye size={15} />}
                    </button>
                  </div>
                </div>

                {/* Checkbox CGU */}
                <label className="flex items-start gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    className="mt-0.5 accent-primary"
                  />
                  <span className="text-xs text-textgray leading-relaxed">
                    J'accepte les{" "}
                    <Link href="#" className="text-primary hover:underline">
                      conditions générales
                    </Link>{" "}
                    et la{" "}
                    <Link href="#" className="text-primary hover:underline">
                      politique de confidentialité
                    </Link>
                  </span>
                </label>

                {/* Bouton */}
                <Link
                  href="/inscription/finalisation"
                  className="bg-primary text-white rounded-lg px-6 py-3 font-medium text-sm hover:bg-secondary transition-colors text-center"
                >
                  Créer mon compte →
                </Link>
              </form>

              {/* Lien connexion */}
              <p className="text-center text-sm text-textgray mt-4">
                Déjà un compte ?{" "}
                <Link href="/connexion" className="text-primary font-medium hover:underline">
                  Se connecter
                </Link>
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}