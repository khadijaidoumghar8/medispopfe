"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import {
  Search,
  MapPin,
  ChevronDown,
  ChevronUp,
  Star,
  ArrowRight,
  CheckCircle,
} from "lucide-react";

const faqs = [
  {
    question: "Qu'est-ce que MedisPo ?",
    answer:
      "MedisPo est une plateforme qui vous permet de rechercher vos médicaments dans les pharmacies proches de chez vous, de comparer les disponibilités et les prix, et de récupérer vos médicaments sans mauvaise surprise.",
  },
  {
    question: "Comment ça fonctionne ?",
    answer:
      "Il vous suffit de rechercher votre médicament, de recevoir les offres des pharmacies partenaires proches de chez vous, puis de vous rendre à la pharmacie choisie pour récupérer votre commande.",
  },
  {
    question: "Le service est-il gratuit ?",
    answer:
      "Oui, l'utilisation de MedisPo est entièrement gratuite pour les patients. Vous payez uniquement le prix du médicament directement à la pharmacie.",
  },
  {
    question: "Mes données sont-elles sécurisées ?",
    answer:
      "Absolument. Nous utilisons un chiffrement de bout en bout et respectons strictement les réglementations en vigueur sur la protection des données de santé.",
  },
];

const temoignages = [
  {
    nom: "Samia Benali",
    role: "Patiente",
    texte:
      "En tant que maman, PharmaExpress m'a sauvé plusieurs fois. Trouver un antibiotique spécifique un samedi soir n'est plus un parcours du combattant.",
    note: 4.8,
  },
  {
    nom: "Karim Tazi",
    role: "Patient",
    texte:
      "Simple, rapide et efficace. Je ne me déplace plus pour rien, je sais exactement quelle pharmacie a mon médicament avant d'y aller.",
    note: 4.8,
  },
];

export default function HomePage() {
  const [onglet, setOnglet] = useState("medicament");
  const [faqOuvert, setFaqOuvert] = useState(null);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* HERO */}
      <section className="bg-primary text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-title text-4xl md:text-5xl font-extrabold mb-4 leading-tight">
            Vos médicaments,<br />
            <span className="text-hover">plus proches que jamais</span>
          </h1>
          <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto">
            Trouvez facilement les médicaments disponibles dans les pharmacies
            partenaires et récupérez-les sans délai.
          </p>

          {/* Onglets */}
          <div className="bg-white/10 rounded-xl p-1 inline-flex mb-6">
            <button
              onClick={() => setOnglet("medicament")}
              className={`px-6 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                onglet === "medicament"
                  ? "bg-white text-primary"
                  : "text-white/80 hover:text-white"
              }`}
            >
              Recherche Médicament
            </button>
            <button
              onClick={() => setOnglet("pharmacie")}
              className={`px-6 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                onglet === "pharmacie"
                  ? "bg-white text-primary"
                  : "text-white/80 hover:text-white"
              }`}
            >
              Recherche Pharmacie
            </button>
          </div>

          {/* Formulaire de recherche */}
          <div className="bg-white rounded-2xl p-6 shadow-xl max-w-3xl mx-auto">
            {onglet === "medicament" ? (
              <div className="flex flex-col md:flex-row gap-3">
                <div className="flex-1 flex items-center gap-2 border border-gray-200 rounded-lg px-4 py-3">
                  <Search size={18} className="text-gray-400" />
                  <input
                    type="text"
                    placeholder="Nom du médicament..."
                    className="flex-1 outline-none text-gray-700 text-sm"
                  />
                </div>
                <div className="flex items-center gap-2 border border-gray-200 rounded-lg px-4 py-3 md:w-48">
                  <MapPin size={18} className="text-gray-400" />
                  <input
                    type="text"
                    placeholder="Ville..."
                    className="flex-1 outline-none text-gray-700 text-sm"
                  />
                </div>
                <button className="bg-primary text-white rounded-lg px-6 py-3 text-sm font-medium hover:bg-secondary transition-colors">
                  Lancer la recherche →
                </button>
              </div>
            ) : (
              <div className="flex flex-col md:flex-row gap-3">
                <div className="flex-1 flex items-center gap-2 border border-gray-200 rounded-lg px-4 py-3">
                  <Search size={18} className="text-gray-400" />
                  <input
                    type="text"
                    placeholder="Nom de la pharmacie..."
                    className="flex-1 outline-none text-gray-700 text-sm"
                  />
                </div>
                <div className="flex items-center gap-2 border border-gray-200 rounded-lg px-4 py-3 md:w-48">
                  <MapPin size={18} className="text-gray-400" />
                  <input
                    type="text"
                    placeholder="Quartier..."
                    className="flex-1 outline-none text-gray-700 text-sm"
                  />
                </div>
                <button className="bg-primary text-white rounded-lg px-6 py-3 text-sm font-medium hover:bg-secondary transition-colors">
                  Rechercher →
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* COMMENT ÇA MARCHE */}
      <section id="comment-ca-marche" className="py-20 px-4 bg-background">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-title text-3xl font-extrabold text-primary text-center mb-4">
            Comment ça marche
          </h2>
          <p className="text-textgray text-center mb-12 max-w-xl mx-auto">
            Trois étapes simples pour trouver vos médicaments sans vous déplacer inutilement.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                num: "1",
                titre: "Recherchez votre médicament",
                desc: "Entrez le nom du médicament que vous cherchez. Notre système interroge en temps réel toutes les pharmacies partenaires proches de chez vous.",
              },
              {
                num: "2",
                titre: "Recevez et comparez les offres",
                desc: "Consultez la liste des pharmacies qui ont votre médicament en stock avec les prix et les distances pour choisir la meilleure option.",
              },
              {
                num: "3",
                titre: "Récupérez votre médicament",
                desc: "Rendez-vous directement à la pharmacie choisie. Votre médicament vous attend, pas besoin d'attendre ou de revenir plus tard.",
              },
            ].map((etape) => (
              <div
                key={etape.num}
                className="bg-white rounded-xl shadow-sm border border-gray-100 p-6"
              >
                <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold text-lg mb-4">
                  {etape.num}
                </div>
                <h3 className="font-title text-xl font-extrabold text-primary mb-2">
                  {etape.titre}
                </h3>
                <p className="text-textgray text-sm leading-relaxed">
                  {etape.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TÉMOIGNAGES */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-title text-3xl font-extrabold text-primary text-center mb-2">
            Ils nous font confiance
          </h2>
          <p className="text-textgray text-center mb-12">
            Plus de 50 000 patients utilisent MedisPo chaque mois.
          </p>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {temoignages.map((t, i) => (
              <div
                key={i}
                className="bg-primary text-white rounded-xl p-6 shadow-sm"
              >
                <p className="text-white/90 text-sm leading-relaxed mb-4">
                  "{t.texte}"
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 bg-white/20 rounded-full flex items-center justify-center text-white font-bold text-sm">
                      {t.nom[0]}
                    </div>
                    <div>
                      <p className="font-medium text-sm">{t.nom}</p>
                      <p className="text-white/60 text-xs">{t.role}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star size={14} className="text-yellow-400 fill-yellow-400" />
                    <span className="text-sm font-medium">{t.note}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-textgray text-sm mt-6">
            Note moyenne de <strong>4.8/5</strong> — Basée sur plus de 2 000 avis
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20 px-4 bg-background">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-title text-3xl font-extrabold text-primary text-center mb-4">
            Questions fréquentes
          </h2>
          <p className="text-textgray text-center mb-10">
            Tout ce que vous devez savoir sur MedisPo.
          </p>
          <div className="flex flex-col gap-3">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden"
              >
                <button
                  className="w-full flex items-center justify-between px-6 py-4 text-left"
                  onClick={() => setFaqOuvert(faqOuvert === i ? null : i)}
                >
                  <span className="font-medium text-gray-800 text-sm">
                    {faq.question}
                  </span>
                  {faqOuvert === i ? (
                    <ChevronUp size={18} className="text-primary" />
                  ) : (
                    <ChevronDown size={18} className="text-primary" />
                  )}
                </button>
                {faqOuvert === i && (
                  <div className="px-6 pb-4 text-textgray text-sm leading-relaxed border-t border-gray-50">
                    <p className="pt-3">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="bg-primary py-20 px-4 text-white text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-title text-3xl font-extrabold mb-4">
            Prêt à trouver votre médicament ?
          </h2>
          <p className="text-white/80 mb-8">
            Rejoignez les milliers de patients qui gagnent du temps chaque jour avec MedisPo.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/inscription"
              className="bg-white text-primary rounded-lg px-8 py-3 font-medium hover:bg-hover transition-colors"
            >
              Commencer
            </Link>
            <Link
              href="/pharmacies"
              className="border-2 border-white text-white rounded-lg px-8 py-3 font-medium hover:bg-white/10 transition-colors"
            >
              Voir les pharmacies
            </Link>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-white border-t border-gray-100 py-8 px-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="font-bold text-primary text-lg">
            Me<span className="text-secondary">disPo</span>
          </span>
          <div className="flex gap-6 text-sm text-textgray">
            <Link href="#" className="hover:text-primary transition-colors">
              Mentions légales
            </Link>
            <Link href="#" className="hover:text-primary transition-colors">
              Confidentialité
            </Link>
            <Link href="#" className="hover:text-primary transition-colors">
              Contact
            </Link>
          </div>
          <p className="text-textgray text-xs">
            © 2026 MedisPo. Tous droits réservés.
          </p>
        </div>
      </footer>
    </div>
  );
}