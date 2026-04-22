"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutGrid,
  Search,
  History,
  Settings,
  User,
  HelpCircle,
  LogOut,
} from "lucide-react";

const navItems = [
  { label: "Tableau de bord", href: "/dashboard", icon: LayoutGrid },
  { label: "Recherche", href: "/recherche", icon: Search },
  { label: "Historique", href: "/historique", icon: History },
  { label: "Paramètres", href: "/parametres", icon: Settings },
  { label: "Profil", href: "/profil", icon: User },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="bg-[#1e3a5f] text-white w-56 min-h-screen flex flex-col justify-between py-6 px-4">
      <div>
        {/* Logo */}
        <div className="flex items-center gap-2 mb-8 px-2">
          <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
            <LayoutGrid size={16} className="text-white" />
          </div>
          <span className="font-bold text-white text-lg">MedisPo</span>
        </div>

        {/* Nav label */}
        <p className="text-white/40 text-xs font-semibold uppercase tracking-widest px-2 mb-3">
          Navigation
        </p>

        {/* Liens */}
        <nav className="flex flex-col gap-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                  isActive
                    ? "bg-white/15 text-white"
                    : "text-white/60 hover:bg-white/10 hover:text-white"
                }`}
              >
                <Icon size={17} />
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Bas sidebar */}
      <div className="flex flex-col gap-1 border-t border-white/10 pt-4">
        <Link
          href="#"
          className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm text-white/60 hover:bg-white/10 hover:text-white transition-colors"
        >
          <HelpCircle size={17} />
          Support
        </Link>
        <button className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm text-white/60 hover:bg-white/10 hover:text-white transition-colors">
          <LogOut size={17} />
          Déconnexion
        </button>
      </div>
    </aside>
  );
}