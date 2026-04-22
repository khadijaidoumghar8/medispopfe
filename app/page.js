"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import Image from "next/image";
import {
  Search,
  MapPin,
  ChevronDown,
  ChevronUp,
  Star,
  FileText,
  ShoppingBag,
  PlusCircle,
} from "lucide-react";

const STAR_KEYS = [1, 2, 3, 4, 5];

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
    role: "Patiente depuis 1 an",
    texte:
      "En tant que maman, MedisPo m'a sauvée plusieurs fois. Trouver un antibiotique spécifique un samedi soir n'est plus un parcours du combattant.",
    note: 4.8,
  },
  {
    nom: "Youssef Alili",
    role: "Patient",
    texte:
      "Simple, rapide et efficace. Je ne me déplace plus pour rien, je sais exactement quelle pharmacie a mon médicament avant d'y aller.",
    note: 4.8,
  },
  {
    nom: "Nadia Lahlou",
    role: "Pharmacienne",
    texte:
      "Idéal pour les personnes âgées ou celles ayant des difficultés de déplacement. MedisPo les aide vraiment au quotidien.",
    note: 4.7,
  },
];

function LocationFilterGrid({ rayon, onRayonChange }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div className="flex flex-col gap-2">
        <label className="text-xs font-bold uppercase tracking-widest text-primary">
          Localisation
        </label>
        <div className="flex items-center gap-2 bg-gray-100 rounded-xl px-4 py-3.5">
          <MapPin size={16} className="text-gray-400 flex-shrink-0" />
          <input
            type="text"
            placeholder="Ville"
            className="flex-1 bg-transparent outline-none text-gray-700 text-sm min-w-0"
          />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <label className="text-xs font-bold uppercase tracking-widest text-primary">
          Quartier
        </label>
        <div className="flex items-center bg-gray-100 rounded-xl px-4 py-3.5">
          <input
            type="text"
            placeholder="Ex: Centre-Ville"
            className="flex-1 bg-transparent outline-none text-gray-700 text-sm"
          />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <label className="text-xs font-bold uppercase tracking-widest text-primary">
          Rayon de Recherche
        </label>
        <div className="relative">
          <select
            value={rayon}
            onChange={(e) => onRayonChange(e.target.value)}
            className="w-full bg-gray-100 rounded-xl px-4 py-3.5 text-sm text-gray-700 outline-none appearance-none pr-10"
          >
            <option value="1km">1 km</option>
            <option value="2km">2 km</option>
            <option value="5km">5 km</option>
            <option value="10km">10 km</option>
            <option value="20km">20 km</option>
          </select>
          <ChevronDown
            size={16}
            className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
          />
        </div>
      </div>
    </div>
  );
}

function SearchButton() {
  return (
    <button className="w-full bg-primary text-white rounded-xl py-4 text-base font-semibold hover:bg-secondary transition-colors flex items-center justify-center gap-2">
      Lancer la recherche
      <Search size={18} />
    </button>
  );
}

export default function HomePage() {
  const [onglet, setOnglet] = useState("medicament");
  const [faqOuvert, setFaqOuvert] = useState(null);
  const [rayon, setRayon] = useState("10km");

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <section className="bg-gray-50 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-title text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 leading-tight">
            Vos médicaments,<br />
            <span className="text-primary">plus proches que jamais</span>
          </h1>
          <p className="text-gray-500 text-base mb-10 max-w-2xl mx-auto">
            MedisPo simplifie l&apos;accès aux médicaments grâce à un réseau de pharmacies connectées en temps réel.
          </p>

          <div className="bg-white rounded-2xl shadow-lg overflow-hidden max-w-3xl mx-auto">
            <div className="flex border-b border-gray-100">
              <button
                onClick={() => setOnglet("medicament")}
                className={`flex-1 py-4 text-sm font-semibold transition-colors ${
                  onglet === "medicament"
                    ? "text-primary border-b-2 border-primary"
                    : "text-gray-400 hover:text-gray-600"
                }`}
              >
                Recherche Médicament
              </button>
              <button
                onClick={() => setOnglet("pharmacie")}
                className={`flex-1 py-4 text-sm font-semibold transition-colors ${
                  onglet === "pharmacie"
                    ? "text-primary border-b-2 border-primary"
                    : "text-gray-400 hover:text-gray-600"
                }`}
              >
                Recherche Pharmacie
              </button>
            </div>

            <div className="p-6">
              {onglet === "medicament" ? (
                <div className="flex flex-col gap-5">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-primary mb-3">
                      Liste des médicaments
                    </label>
                    <div className="flex items-center gap-3">
                      <input
                        type="text"
                        placeholder="Nom du médicament (ex: Paracétamol 1000mg)"
                        className="flex-1 bg-gray-100 rounded-xl px-4 py-3.5 text-sm text-gray-700 outline-none placeholder:text-gray-400 min-w-0"
                      />
                      <span className="text-gray-400 text-sm flex-shrink-0">ou</span>
                      <button type="button" className="flex items-center gap-2 border border-gray-200 rounded-xl px-4 py-3.5 text-sm text-gray-700 bg-white hover:bg-gray-50 transition-colors flex-shrink-0 whitespace-nowrap">
                        <FileText size={15} className="text-gray-500" />
                        Joindre ordonnance
                      </button>
                    </div>
                    <button type="button" className="flex items-center gap-1.5 text-primary text-sm font-medium mt-3 hover:opacity-75 transition-opacity">
                      <PlusCircle size={16} />
                      Ajouter un autre médicament
                    </button>
                  </div>
                  <LocationFilterGrid rayon={rayon} onRayonChange={setRayon} />
                  <SearchButton />
                </div>
              ) : (
                <div className="flex flex-col gap-5">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-primary mb-3">
                      Recherche par nom
                    </label>
                    <div className="flex items-center gap-2 bg-gray-100 rounded-xl px-4 py-3.5">
                      <Search size={16} className="text-gray-400 flex-shrink-0" />
                      <input
                        type="text"
                        placeholder="Nom de la pharmacie (ex: Pharmacie Centrale)"
                        className="flex-1 bg-transparent outline-none text-gray-700 text-sm"
                      />
                    </div>
                  </div>
                  <LocationFilterGrid rayon={rayon} onRayonChange={setRayon} />
                  <SearchButton />
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <section id="comment-ca-marche" className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-2/5 flex-shrink-0">
              <div className="rounded-2xl overflow-hidden h-80 md:h-[440px] relative">
                <Image
                  src="/pharmacist.jpg"
                  alt="Pharmacien MedisPo"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div className="md:w-3/5">
              <h2 className="font-title text-3xl font-extrabold text-gray-900 mb-3">
                Comment ça marche
              </h2>
              <p className="text-gray-500 text-sm mb-8 leading-relaxed">
                Notre système vous permet d&apos;accéder aux médicaments sans attendre ni vous déplacer inutilement. Voici comment ça fonctionne en trois étapes simples.
              </p>

              <div className="flex flex-col gap-4">
                {[
                  { icon: <Search size={20} className="text-primary" />, titre: "1. Recherchez votre médicament", desc: "Entrez le nom du médicament ou du principe actif, puis choisissez votre ville. Notre système interroge en temps réel toutes les pharmacies partenaires pour trouver les disponibilités." },
                  { icon: <FileText size={20} className="text-primary" />, titre: "2. Recevez et comparez les offres", desc: "Les pharmacies disponibles vous répondent avec leurs disponibilités et prix. Comparez les propositions et choisissez la pharmacie qui vous convient le mieux." },
                  { icon: <ShoppingBag size={20} className="text-primary" />, titre: "3. Récupérez votre médicament", desc: "Rendez-vous directement à la pharmacie choisie. Votre médicament vous attend. Il ne vous reste plus qu'à payer directement sur place." },
                ].map((etape, i) => (
                  <div key={i} className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 flex items-start gap-4">
                    <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
                      {etape.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 text-sm mb-1">{etape.titre}</h3>
                      <p className="text-gray-500 text-sm leading-relaxed">{etape.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-title text-3xl font-extrabold text-gray-900 text-center mb-2">
            Ils nous font confiance
          </h2>
          <p className="text-gray-500 text-center text-sm mb-12">
            Plus de 50 000 patients font confiance à MedisPo chaque mois.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="bg-primary text-white rounded-xl p-6 shadow-sm">
              <div className="text-5xl text-white/20 font-serif leading-none mb-3 select-none">"</div>
              <p className="text-white/90 text-sm leading-relaxed mb-6">{temoignages[0].texte}</p>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 bg-white/20 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  {temoignages[0].nom[0]}
                </div>
                <div>
                  <p className="font-medium text-sm">{temoignages[0].nom}</p>
                  <p className="text-white/60 text-xs">{temoignages[0].role}</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
              <div className="text-5xl text-gray-200 font-serif leading-none mb-3 select-none">"</div>
              <p className="text-gray-700 text-sm leading-relaxed mb-6">{temoignages[1].texte}</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold text-sm">
                    {temoignages[1].nom[0]}
                  </div>
                  <div>
                    <p className="font-medium text-sm text-gray-900">{temoignages[1].nom}</p>
                    <p className="text-gray-400 text-xs">{temoignages[1].role}</p>
                  </div>
                </div>
                <div className="flex items-center gap-1">
                  <Star size={14} className="text-yellow-400 fill-yellow-400" />
                  <span className="text-sm font-medium text-gray-700">{temoignages[1].note}</span>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 rounded-xl p-5 border border-blue-100">
              <p className="text-gray-700 text-sm leading-relaxed mb-4">
                &ldquo;{temoignages[2].texte}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center text-primary font-bold text-xs">
                  {temoignages[2].nom[0]}
                </div>
                <div>
                  <p className="font-medium text-sm text-gray-900">{temoignages[2].nom}</p>
                  <p className="text-gray-400 text-xs">{temoignages[2].role}</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-xl p-5 border border-gray-100 flex flex-col items-center justify-center text-center">
              <p className="text-gray-500 text-sm mb-1">Note moyenne de</p>
              <p className="text-4xl font-extrabold text-primary">
                4.9<span className="text-xl font-medium text-gray-400">/5</span>
              </p>
              <div className="flex gap-1 mt-2 mb-3">
                {STAR_KEYS.map((s) => (
                  <Star key={s} size={16} className="text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <p className="text-gray-400 text-xs">Basée sur plus de 2 000 avis de patients satisfaits.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="faq" className="py-20 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-title text-3xl font-extrabold text-gray-900 text-center mb-2">
            Questions Fréquentes
          </h2>
          <p className="text-gray-500 text-center text-sm mb-10">
            Tout ce que vous devez savoir sur MedisPo.
          </p>
          <div className="flex flex-col gap-3">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
                <button
                  className="w-full flex items-center justify-between px-6 py-4 text-left"
                  onClick={() => setFaqOuvert(faqOuvert === i ? null : i)}
                >
                  <span className="font-medium text-gray-800 text-sm">{faq.question}</span>
                  {faqOuvert === i ? (
                    <ChevronUp size={18} className="text-primary flex-shrink-0" />
                  ) : (
                    <ChevronDown size={18} className="text-primary flex-shrink-0" />
                  )}
                </button>
                {faqOuvert === i && (
                  <div className="px-6 pt-3 pb-4 text-gray-500 text-sm leading-relaxed border-t border-gray-50">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-primary py-20 px-4 text-white text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-title text-3xl md:text-4xl font-extrabold mb-4">
            Prêt à trouver votre médicament ?
          </h2>
          <p className="text-white/70 mb-8 text-sm leading-relaxed">
            Rejoignez des milliers de patients qui ne perdent plus de temps. Trouvez, recevez et récupérez vos soins en toute sérénité.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/inscription" className="bg-white text-primary rounded-lg px-8 py-3 font-medium hover:bg-hover transition-colors text-sm">
              Commencer
            </Link>
            <Link href="/pharmacies" className="border-2 border-white/50 text-white rounded-lg px-8 py-3 font-medium hover:bg-white/10 transition-colors text-sm">
              Voir les pharmacies
            </Link>
          </div>
        </div>
      </section>

      <footer className="bg-white border-t border-gray-100 py-8 px-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="font-bold text-primary text-lg">
            Medi<span className="text-secondary">sPo</span>
          </span>
          <div className="flex gap-6 text-sm text-gray-400">
            <Link href="#" className="hover:text-primary transition-colors">Mentions légales</Link>
            <Link href="#" className="hover:text-primary transition-colors">Confidentialité</Link>
            <Link href="#" className="hover:text-primary transition-colors">À propos</Link>
            <Link href="#" className="hover:text-primary transition-colors">Contact</Link>
          </div>
          <p className="text-gray-400 text-xs">© 2026 MedisPo. Tous droits réservés.</p>
        </div>
      </footer>
    </div>
  );
}
