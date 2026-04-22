"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Sidebar from "@/components/Sidebar";
import { Bell, Shield, CloudUpload, CreditCard } from "lucide-react";
import Link from "next/link";

export default function VerificationCINPage() {
  const router = useRouter();
  const [cin, setCin] = useState("");
  const [fichier, setFichier] = useState(null);
  const [dragging, setDragging] = useState(false);

  const handleDrop = (e) => {
    e.preventDefault();
    setDragging(false);
    const file = e.dataTransfer.files[0];
    if (file) setFichier(file);
  };

  const handleConfirmer = () => {
    router.push("/verification-cin/en-cours");
  };

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

        {/* Contenu centré */}
        <main className="flex-1 flex items-center justify-center px-4 py-10">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 w-full max-w-xl p-8">

            {/* Icône shield */}
            <div className="flex justify-center mb-5">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                <Shield size={32} className="text-primary" />
              </div>
            </div>

            {/* Titre */}
            <h2 className="font-title text-2xl font-extrabold text-primary text-center mb-2">
              Vérifiez votre identité
            </h2>
            <p className="text-textgray text-sm text-center mb-8">
              Veuillez compléter les étapes ci-dessous pour activer votre compte.
            </p>

            {/* Champ CIN */}
            <div className="mb-6">
              <label className="text-xs font-bold text-primary uppercase tracking-widest mb-2 block">
                Numéro CIN
              </label>
              <div className="flex items-center gap-2 border border-gray-200 rounded-xl px-4 py-3 focus-within:border-primary transition-colors bg-gray-50">
                <input
                  type="text"
                  placeholder="EX : AB123456"
                  value={cin}
                  onChange={(e) => setCin(e.target.value.toUpperCase())}
                  className="flex-1 outline-none text-sm text-gray-700 bg-transparent"
                  maxLength={10}
                />
                <CreditCard size={18} className="text-gray-400" />
              </div>
              <p className="text-xs text-textgray mt-1.5 ml-1">
                Format : 1-2 lettres suivies de chiffres
              </p>
            </div>

            {/* Zone upload carte */}
            <div className="mb-6">
              <label className="text-xs font-bold text-primary uppercase tracking-widest mb-2 block">
                Importer votre carte nationale
              </label>
              <label
                onDragOver={(e) => { e.preventDefault(); setDragging(true); }}
                onDragLeave={() => setDragging(false)}
                onDrop={handleDrop}
                className={`cursor-pointer flex flex-col items-center justify-center border-2 border-dashed rounded-xl px-6 py-8 transition-colors ${
                  dragging
                    ? "border-primary bg-primary/5"
                    : "border-blue-200 bg-blue-50/40 hover:border-primary hover:bg-primary/5"
                }`}
              >
                <input
                  type="file"
                  className="hidden"
                  accept=".jpg,.jpeg,.png,.pdf"
                  onChange={(e) => setFichier(e.target.files[0])}
                />
                <CloudUpload size={36} className="text-primary mb-3" />
                <p className="text-sm font-semibold text-gray-700">
                  {fichier ? fichier.name : "Glissez votre carte ici"}
                </p>
                <p className="text-xs text-textgray mt-1">
                  {fichier ? "✓ Fichier sélectionné" : "ou cliquez pour parcourir"}
                </p>
                <p className="text-xs text-textgray mt-2">
                  Formats acceptés : JPG, PNG, PDF — Max 5 Mo
                </p>
              </label>
            </div>

            {/* Bouton confirmer */}
            <button
              onClick={handleConfirmer}
              className={`w-full flex items-center justify-center gap-2 rounded-xl px-6 py-3.5 text-sm font-semibold transition-colors ${
                cin && fichier
                  ? "bg-primary text-white hover:bg-secondary"
                  : "bg-gray-300 text-gray-500 cursor-not-allowed"
              }`}
              disabled={!cin || !fichier}
            >
              <Shield size={16} />
              Confirmer et vérifier mon identité
            </button>

            {/* Lien retour */}
            <div className="text-center mt-4">
              <Link
                href="/dashboard"
                className="text-sm text-primary hover:underline"
              >
                Revenir au tableau de bord
              </Link>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}