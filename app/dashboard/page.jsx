"use client";

import Sidebar from "@/components/Sidebar";
import Link from "next/link";
import {
  Bell,
  Shield,
  Search,
  ArrowRight,
  Building2,
  ImageOff,
} from "lucide-react";

const pharmacies = [
  {
    nom: "Pharmacie Atlas",
    adresse: "250m • Avenue Mohamed V",
    statut: "OUVERT",
    ouvert: true,
  },
  {
    nom: "Pharmacie du Soleil",
    adresse: "800m • Rue Agadir",
    statut: "OUVERT",
    ouvert: true,
  },
  {
    nom: "Pharmacie El Mansour",
    adresse: "1.2km • Bd Zerktouni",
    statut: "FERMÉ",
    ouvert: false,
  },
];

const etapes = [
  {
    num: 1,
    titre: "Recherchez",
    desc: "Saisissez le nom du médicament",
  },
  {
    num: 2,
    titre: "Recevez les offres",
    desc: "Les pharmacies répondent en temps réel",
  },
  {
    num: 3,
    titre: "Choisissez",
    desc: "Sélectionnez la meilleure option",
  },
  {
    num: 4,
    titre: "Récupérez",
    desc: "Allez chercher votre traitement",
  },
];

export default function DashboardUtilisateur() {
  return (
    <div className="flex min-h-screen bg-[#f0f2f5]">
      <Sidebar />

      <div className="flex-1 flex flex-col">
        {/* Topbar */}
        <header className="bg-white border-b border-gray-200 px-6 py-3 flex items-center justify-between">
          <h1 className="font-bold text-gray-800 text-lg">Tableau de bord</h1>
          <div className="flex items-center gap-4">
            <button className="relative text-gray-500 hover:text-primary">
              <Bell size={20} />
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full text-white text-[9px] flex items-center justify-center font-bold">
                9
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
                <p className="text-xs text-yellow-500 font-medium mt-0.5 flex items-center gap-1">
                  ★ Patient
                </p>
              </div>
            </div>
          </div>
        </header>

        <main className="flex-1 px-6 py-5 flex flex-col gap-5">

          {/* Bannière CIN */}
          <div className="bg-red-50 border border-red-200 rounded-xl px-5 py-4 flex items-center gap-4">
            <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
              <Shield size={20} className="text-red-500" />
            </div>
            <div className="flex-1">
              <p className="text-sm font-semibold text-red-700">
                Vérification de compte requise
              </p>
              <p className="text-xs text-red-500 mt-0.5">
                Pour accéder à toutes les fonctionnalités, veuillez vérifier
                votre identité en ajoutant votre numéro de carte nationale.
              </p>
            </div>
            <Link
              href="/verification-cin"
              className="bg-[#1e3a5f] text-white rounded-lg px-4 py-2 text-xs font-semibold whitespace-nowrap hover:bg-primary transition-colors"
            >
              Ajouter mon N° CIN
            </Link>
          </div>

          {/* Bienvenue */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm px-6 py-6 flex items-center justify-between">
            <div>
              <h2 className="font-title text-2xl font-extrabold text-primary mb-2">
                Bienvenue sur MedisPo, Ahmed 👋
              </h2>
              <p className="text-textgray text-sm mb-5 max-w-sm">
                Trouvez rapidement un médicament disponible dans les pharmacies
                près de chez vous.
              </p>
              <Link
                href="/recherche"
                className="inline-flex items-center gap-2 bg-primary text-white rounded-lg px-5 py-2.5 text-sm font-medium hover:bg-secondary transition-colors"
              >
                <Search size={15} />
                Rechercher un médicament
              </Link>
            </div>
            {/* Icône décorative */}
            <div className="hidden md:flex flex-col items-center opacity-20">
              <Building2 size={80} className="text-primary" />
            </div>
          </div>

          {/* Deux colonnes */}
          <div className="grid md:grid-cols-2 gap-5">

            {/* Demandes récentes */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-title text-lg font-extrabold text-primary">
                  Demandes récentes
                </h3>
                <Link
                  href="/historique"
                  className="text-xs text-secondary hover:underline"
                >
                  Voir tout l'historique
                </Link>
              </div>

              {/* État vide */}
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center mb-3">
                  <ImageOff size={22} className="text-gray-300" />
                </div>
                <p className="text-sm text-textgray mb-4">
                  Aucune demande pour l'instant
                </p>
                <button className="border border-gray-300 text-gray-600 rounded-lg px-5 py-2 text-sm font-medium hover:bg-gray-50 transition-colors">
                  Faire ma première recherche
                </button>
              </div>
            </div>

            {/* Pharmacies proches */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
              <h3 className="font-title text-lg font-extrabold text-primary mb-4">
                Pharmacies proches
              </h3>

              {/* Carte placeholder */}
              <div className="w-full h-36 bg-gray-200 rounded-xl mb-4 overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-br from-green-100 to-blue-100 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-6 h-6 bg-red-500 rounded-full mx-auto mb-1 flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full" />
                    </div>
                    <p className="text-xs text-gray-500">Carte interactive</p>
                  </div>
                </div>
              </div>

              {/* Liste pharmacies */}
              <div className="flex flex-col gap-2">
                {pharmacies.map((p, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between border border-gray-100 rounded-xl px-3 py-2.5"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center">
                        <Building2 size={15} className="text-gray-400" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-gray-800">
                          {p.nom}
                        </p>
                        <p className="text-xs text-textgray">{p.adresse}</p>
                      </div>
                    </div>
                    <span
                      className={`text-xs font-bold flex items-center gap-1 ${
                        p.ouvert ? "text-green-600" : "text-red-500"
                      }`}
                    >
                      <span
                        className={`w-1.5 h-1.5 rounded-full ${
                          p.ouvert ? "bg-green-500" : "bg-red-500"
                        }`}
                      />
                      {p.statut}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Comment ça marche */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm px-6 py-6">
            <h3 className="font-title text-lg font-extrabold text-primary text-center mb-6">
              Comment ça marche ?
            </h3>
            <div className="flex items-start justify-center gap-2 flex-wrap">
              {etapes.map((e, i) => (
                <div key={e.num} className="flex items-start gap-2">
                  <div className="flex flex-col items-center text-center w-28">
                    <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold text-sm mb-2">
                      {e.num}
                    </div>
                    <p className="text-sm font-semibold text-primary mb-1">
                      {e.titre}
                    </p>
                    <p className="text-xs text-textgray leading-relaxed">
                      {e.desc}
                    </p>
                  </div>
                  {i < etapes.length - 1 && (
                    <ArrowRight
                      size={16}
                      className="text-gray-300 mt-3 flex-shrink-0"
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}