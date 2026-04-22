import Sidebar from "@/components/Sidebar";
import Link from "next/link";
import { Bell, Building2 } from "lucide-react";

const stats = [
  { label: "Total Demandes", value: "24" },
  { label: "Confirmées", value: "18" },
  { label: "En Attente", value: "04" },
  { label: "Médicaments Recherchés", value: "12" },
];

const demandes = [
  {
    medicament: "Amoxicilline 500mg",
    pharmacie: "Pharmacie Atlas",
    date: "22 Mai 2024",
    statut: "Disponible",
    statutColor: "bg-green-100 text-green-700",
    point: "bg-green-500",
    prix: "45,00 DH",
  },
  {
    medicament: "Doliprane 1000mg",
    pharmacie: "Pharmacie du Soleil",
    date: "21 Mai 2024",
    statut: "Partiellement disponible",
    statutColor: "bg-yellow-100 text-yellow-700",
    point: "bg-yellow-500",
    prix: "15,50 DH",
  },
  {
    medicament: "Ventoline Inhalateur",
    pharmacie: "Pharmacie Centrale",
    date: "19 Mai 2024",
    statut: "Non disponible",
    statutColor: "bg-red-100 text-red-500",
    point: "bg-red-500",
    prix: "62,00 DH",
  },
  {
    medicament: "Augmentin Adulte",
    pharmacie: "Pharmacie El Mansour",
    date: "18 Mai 2024",
    statut: "Disponible",
    statutColor: "bg-green-100 text-green-700",
    point: "bg-green-500",
    prix: "112,00 DH",
  },
  {
    medicament: "Spasfon 80mg",
    pharmacie: "Pharmacie de Garde",
    date: "15 Mai 2024",
    statut: "Partiellement disponible",
    statutColor: "bg-yellow-100 text-yellow-700",
    point: "bg-yellow-500",
    prix: "34,20 DH",
  },
];

const pharmacies = [
  {
    nom: "Pharmacie Atlas",
    adresse: "250m • Avenue Mohamed V",
    ouvert: true,
  },
  {
    nom: "Pharmacie du Soleil",
    adresse: "800m • Rue Agadir",
    ouvert: true,
  },
  {
    nom: "Pharmacie El Mansour",
    adresse: "1.2km • Bd Zerktouni",
    ouvert: false,
  },
];

export default function DashboardCompletPage() {
  return (
    <div className="flex min-h-screen bg-[#f0f2f5]">
      <Sidebar />

      <div className="flex-1 flex flex-col">
        {/* Topbar */}
        <header className="bg-white border-b border-gray-200 px-6 py-3 flex items-center justify-between">
          <h1 className="font-bold text-primary text-lg">Tableau de bord</h1>
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

        <main className="flex-1 px-6 py-6 flex flex-col gap-6">

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((s, i) => (
              <div
                key={i}
                className="bg-white rounded-xl border border-gray-100 shadow-sm px-5 py-4"
              >
                <p className="text-xs font-semibold text-textgray uppercase tracking-widest mb-2">
                  {s.label}
                </p>
                <p className="text-4xl font-extrabold text-gray-800">
                  {s.value}
                </p>
              </div>
            ))}
          </div>

          {/* Deux colonnes */}
          <div className="grid md:grid-cols-[1fr_320px] gap-6 items-start">

            {/* Tableau demandes */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
              <div className="flex items-center justify-between mb-5">
                <h2 className="font-title text-xl font-extrabold text-primary">
                  Demandes récentes
                </h2>
                <Link
                  href="#"
                  className="text-xs text-secondary hover:underline"
                >
                  Voir tout l'historique
                </Link>
              </div>

              {/* En-tête tableau */}
              <div className="grid grid-cols-[2fr_1.5fr_1fr_1.5fr_1fr] gap-2 px-3 pb-2 border-b border-gray-100">
                {["Médicament", "Pharmacie", "Date", "Statut", "Prix"].map(
                  (h) => (
                    <p
                      key={h}
                      className="text-xs font-semibold text-textgray uppercase tracking-wider"
                    >
                      {h}
                    </p>
                  )
                )}
              </div>

              {/* Lignes */}
              <div className="flex flex-col divide-y divide-gray-50">
                {demandes.map((d, i) => (
                  <div
                    key={i}
                    className="grid grid-cols-[2fr_1.5fr_1fr_1.5fr_1fr] gap-2 items-center px-3 py-4"
                  >
                    <p className="text-sm font-semibold text-gray-800">
                      {d.medicament}
                    </p>
                    <p className="text-sm text-textgray">{d.pharmacie}</p>
                    <p className="text-xs text-textgray leading-relaxed">
                      {d.date}
                    </p>
                    <span
                      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium w-fit ${d.statutColor}`}
                    >
                      <span
                        className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${d.point}`}
                      />
                      {d.statut}
                    </span>
                    <p className="text-sm font-bold text-primary">
                      {d.prix}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Pharmacies proches */}
            <div className="flex flex-col gap-3">
              <h2 className="font-title text-xl font-extrabold text-primary">
                Pharmacies proches
              </h2>

              {/* Carte placeholder */}
              <div className="w-full h-40 rounded-xl overflow-hidden bg-gradient-to-br from-green-100 to-blue-100 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="flex flex-col items-center">
                    <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center mb-1">
                      <div className="w-2 h-2 bg-white rounded-full" />
                    </div>
                    <p className="text-xs text-gray-500">Carte</p>
                  </div>
                </div>
              </div>

              {/* Liste */}
              <div className="flex flex-col gap-2">
                {pharmacies.map((p, i) => (
                  <div
                    key={i}
                    className="bg-white rounded-xl border border-gray-100 shadow-sm flex items-center justify-between px-4 py-3"
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
                      {p.ouvert ? "OUVERT" : "FERMÉ"}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}