"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Eye, EyeOff, Mail, Lock } from "lucide-react";

export default function ConnexionPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center px-4 py-12">
      {/* Card */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 w-full max-w-md p-8">

        {/* Logo */}
        <div className="flex flex-col items-center mb-8">
          <Image
            src="/logo.jpeg"
            alt="MedisPo"
            width={140}
            height={40}
            className="object-contain mb-4"
          />
          <h1 className="font-title text-2xl font-extrabold text-primary">
            Bon retour
          </h1>
          <p className="text-textgray text-sm mt-1">
            Connectez-vous à votre compte
          </p>
        </div>

        {/* Formulaire */}
        <form className="flex flex-col gap-4">

          {/* Email */}
          <div>
            <label className="text-sm font-medium text-gray-700 mb-1.5 block">
              Adresse email
            </label>
            <div className="flex items-center gap-2 border border-gray-200 rounded-lg px-4 py-3 focus-within:border-primary transition-colors">
              <Mail size={18} className="text-gray-400" />
              <input
                type="email"
                placeholder="exemple@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 outline-none text-sm text-gray-700"
              />
            </div>
          </div>

          {/* Mot de passe */}
          <div>
            <div className="flex items-center justify-between mb-1.5">
              <label className="text-sm font-medium text-gray-700">
                Mot de passe
              </label>
              <Link
                href="#"
                className="text-xs text-primary hover:underline"
              >
                Mot de passe oublié ?
              </Link>
            </div>
            <div className="flex items-center gap-2 border border-gray-200 rounded-lg px-4 py-3 focus-within:border-primary transition-colors">
              <Lock size={18} className="text-gray-400" />
              <input
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="flex-1 outline-none text-sm text-gray-700"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="text-gray-400 hover:text-gray-600"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          {/* Bouton connexion */}
          <button
            type="submit"
            className="bg-primary text-white rounded-lg px-6 py-3 font-medium text-sm hover:bg-secondary transition-colors mt-2"
          >
            Se connecter
          </button>
        </form>

        {/* Séparateur */}
        <div className="flex items-center gap-3 my-6">
          <div className="flex-1 h-px bg-gray-200" />
          <span className="text-textgray text-xs">ou</span>
          <div className="flex-1 h-px bg-gray-200" />
        </div>

        {/* Bouton Google */}
        <button className="w-full flex items-center justify-center gap-3 border border-gray-200 rounded-lg px-6 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors">
          <svg width="18" height="18" viewBox="0 0 18 18">
            <path
              fill="#4285F4"
              d="M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844c-.209 1.125-.843 2.078-1.796 2.717v2.258h2.908c1.702-1.567 2.684-3.874 2.684-6.615z"
            />
            <path
              fill="#34A853"
              d="M9 18c2.43 0 4.467-.806 5.956-2.184l-2.908-2.258c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332C2.438 15.983 5.482 18 9 18z"
            />
            <path
              fill="#FBBC05"
              d="M3.964 10.707c-.18-.54-.282-1.117-.282-1.707s.102-1.167.282-1.707V4.961H.957C.347 6.175 0 7.55 0 9s.348 2.825.957 4.039l3.007-2.332z"
            />
            <path
              fill="#EA4335"
              d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0 5.482 0 2.438 2.017.957 4.961L3.964 7.293C4.672 5.166 6.656 3.58 9 3.58z"
            />
          </svg>
          Continuer avec Google
        </button>

        {/* Lien inscription */}
        <p className="text-center text-sm text-textgray mt-6">
          Pas encore de compte ?{" "}
          <Link
            href="/inscription"
            className="text-primary font-medium hover:underline"
          >
            S'inscrire
          </Link>
        </p>
      </div>
    </div>
  );
}