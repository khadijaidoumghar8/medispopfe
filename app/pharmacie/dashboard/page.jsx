import SidebarPharmacie from "@/components/SidebarPharmacie";
import { Search, Bell, Settings, ChevronRight } from "lucide-react";
import Link from "next/link";

const demandes = [
  {
    initiales: "AB",
    nom: "Anas Bourid",
    statut: "TRAITEMENT",
    statutColor: "bg-blue-100 text-blue-700",
    detail: "1 médicament (Amoxicilline)",
    id: 1,
  },
  {
    initiales: "YB",
    nom: "Youness Bouhribat",
    statut: "En attente",
    statutColor: "bg-yellow-100 text-yellow-700",
    detail: "Prise d'ordonnance",
    id: 2,
  },
  {
    initiales: "SL",
    nom: "Samira Larghid",
    statut: "EN RÉCEPTION",
    statutColor: "bg-green-100 text-green-700",
    detail: "3 médicaments",
    id: 3,
  },
];

export default function DashboardPage() {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <SidebarPharmacie />

      <div className="flex-1 flex flex-col">
        {/* Topbar */}
        <header className="bg-white border-b border-gray-200 px-6 py-3 flex items-center justify-between gap-4">
          {/* Barre de recherche */}
          <div className="flex items-center gap-2 bg-gray-100 rounded-lg px-4 py-2 flex-1 max-w-md">
            <Search size={16} className="text-gray-400" />
            <input
              type="text"
              placeholder="Rechercher un renvoyé, le patient..."
              className="bg-transparent outline-none text-sm text-gray-600 flex-1"
            />
          </div>

          {/* Droite */}
          <div className="flex items-center gap-4">
            <button className="relative text-gray-500 hover:text-primary">
              <Bell size={20} />
              <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full" />
            </button>
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 bg-primary rounded-full flex items-center justify-center text-white text-sm font-bold">
                YA
              </div>
              <div className="hidden sm:block">
                <p className="text-sm font-semibold text-gray-800 leading-none">
                  Dr. Yahya Alami
                </p>
                <p className="text-xs text-textgray mt-0.5">
                  PHARMACIEN TITULAIRE
                </p>
              </div>
            </div>
          </div>
        </header>

        {/* Contenu */}
        <main className="flex-1 px-6 py-6 flex flex-col gap-5">
          {/* Titre */}
          <div>
            <h1 className="font-title text-2xl font-extrabold text-primary">
              Bienvenue sur votre profil MedisPo !
            </h1>
            <p className="text-textgray text-sm mt-1">
              Vous pouvez consulter les nouvelles demandes, gérer votre profil et répondre
              rapidement aux utilisateurs.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-5">
              <p className="text-xs font-semibold text-textgray uppercase tracking-widest mb-2">
                Statut Actuel
              </p>
              <div className="flex items-end gap-2">
                <span className="text-4xl font-extrabold text-gray-800">
                  12
                </span>
                <span className="mb-1 bg-blue-100 text-blue-700 text-xs font-semibold px-2 py-0.5 rounded-full">
                  Nouvelles
                </span>
              </div>
              <p className="text-xs text-textgray mt-1">
                Nouvelles demandes en attente
              </p>
            </div>

            <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-5">
              <p className="text-xs font-semibold text-textgray uppercase tracking-widest mb-2">
                Volume Journalier
              </p>
              <span className="text-4xl font-extrabold text-gray-800">
                45
              </span>
              <p className="text-xs text-textgray mt-1">
                Demandes traitées aujourd'hui
              </p>
            </div>

            <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-5">
              <p className="text-xs font-semibold text-textgray uppercase tracking-widest mb-2">
                Efficacité
              </p>
              <span className="text-4xl font-extrabold text-gray-800">
                94%
              </span>
              <p className="text-xs text-textgray mt-1">
                Disponibilité moyenne
              </p>
            </div>
          </div>

          {/* Demandes récentes */}
          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-5">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h2 className="font-semibold text-gray-800 text-sm">
                  Demandes Récentes
                </h2>
                <p className="text-xs text-textgray">
                  Gérez les dossiers patients prioritaires
                </p>
              </div>
              <Link
                href="#"
                className="text-xs text-primary font-medium hover:underline flex items-center gap-1"
              >
                Voir tout l'historique
                <ChevronRight size={13} />
              </Link>
            </div>

            <div className="flex flex-col gap-3">
              {demandes.map((d) => (
                <div
                  key={d.id}
                  className="flex items-center justify-between border border-gray-100 rounded-xl px-4 py-3 hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    {/* Avatar initiales */}
                    <div className="w-9 h-9 bg-primary/10 text-primary rounded-full flex items-center justify-center text-xs font-bold">
                      {d.initiales}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-800">
                        {d.nom}
                      </p>
                      <div className="flex items-center gap-2 mt-0.5">
                        <span
                          className={`text-xs font-semibold px-2 py-0.5 rounded-full ${d.statutColor}`}
                        >
                          {d.statut}
                        </span>
                        <span className="text-xs text-textgray">
                          {d.detail}
                        </span>
                      </div>
                    </div>
                  </div>
                  <button className="flex items-center gap-1 border border-gray-200 text-gray-600 rounded-lg px-3 py-1.5 text-xs font-medium hover:bg-gray-100 transition-colors">
                    Voir détails
                    <ChevronRight size={12} />
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Card gérer officine */}
          <div className="bg-primary rounded-xl p-6 text-white">
            <h3 className="font-title text-lg font-extrabold mb-1">
              Gérer votre officine
            </h3>
            <p className="text-white/75 text-sm mb-4">
              Mettez à jour vos horaires et vos services de livraison directement
              depuis l'interface de gestion avancée.
            </p>
            <button className="bg-white text-primary rounded-lg px-5 py-2 text-sm font-medium hover:bg-hover transition-colors flex items-center gap-2">
              <Settings size={15} />
              Accéder aux paramètres
            </button>
          </div>
        </main>

        {/* Footer */}
        <footer className="bg-white border-t border-gray-200 px-6 py-3 flex items-center justify-between">
          <p className="text-xs text-textgray">© 2026 MedisPo</p>
          <div className="flex gap-4 text-xs text-textgray">
            <Link href="#" className="hover:text-primary transition-colors">
              Conditions Générales
            </Link>
            <Link href="#" className="hover:text-primary transition-colors">
              Support Technique
            </Link>
          </div>
        </footer>
      </div>
    </div>
  );
}