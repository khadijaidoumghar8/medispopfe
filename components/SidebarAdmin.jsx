"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Users,
  Building2,
  ClipboardList,
  BarChart2,
  Shield,
  Settings,
  LogOut,
} from "lucide-react";

const navItems = [
  {
    label: "Tableau de bord",
    href: "/admin",
    icon: LayoutDashboard,
  },
  {
    label: "Utilisateurs",
    href: "/admin/utilisateurs",
    icon: Users,
  },
  {
    label: "Pharmacies",
    href: "/admin/pharmacies",
    icon: Building2,
  },
  {
    label: "Demandes",
    href: "/admin/demandes",
    icon: ClipboardList,
  },
  {
    label: "Statistiques",
    href: "/admin/statistiques",
    icon: BarChart2,
  },
  {
    label: "Sécurité",
    href: "/admin/securite",
    icon: Shield,
  },
  {
    label: "Paramètres",
    href: "/admin/parametres",
    icon: Settings,
  },
];

export default function SidebarAdmin() {
  const pathname = usePathname();

  return (
    <aside className="bg-primary text-white w-56 min-h-screen flex flex-col justify-between py-6 px-3">
      {/* Logo */}
      <div>
        <div className="px-3 mb-8">
          <span className="text-white font-bold text-xl tracking-wide">
            Me<span className="text-hover">disPo</span>
          </span>
          <p className="text-white/50 text-xs mt-0.5">Admin</p>
        </div>

        {/* Navigation */}
        <nav className="flex flex-col gap-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  isActive
                    ? "bg-white/15 text-white"
                    : "text-white/70 hover:bg-white/10 hover:text-white"
                }`}
              >
                <Icon size={18} />
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Déconnexion */}
      <div className="px-3">
        <button className="flex items-center gap-3 text-white/70 hover:text-white text-sm font-medium transition-colors w-full px-3 py-2.5 rounded-lg hover:bg-white/10">
          <LogOut size={18} />
          Déconnexion
        </button>
      </div>
    </aside>
  );
}