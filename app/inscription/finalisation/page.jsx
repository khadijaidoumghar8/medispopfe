"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Upload, ImagePlus, ArrowLeft, ArrowRight } from "lucide-react";

const documents = [
  { id: "rc", label: "Registre du Commerce", desc: "Document RC officiel" },
  { id: "patente", label: "Taxe professionnelle", desc: "Taxe de base" },
  { id: "medecin", label: "RC Médecin PI", label2: "Ordonnance 1" },
  { id: "crf", label: "Numéro CRF", desc: "Numéro crf" },
  { id: "cin", label: "Identité reçue", desc: "Carte nationale de identité" },
  { id: "certificat", label: "Certificat reçu", desc: "Certificat de certificat" },
];

export default function FinalisationPage() {
  const [uploadedDocs, setUploadedDocs] = useState({});
  const [photos, setPhotos] = useState([]);
  const [dragging, setDragging] = useState(false);

  const handleDocUpload = (id, e) => {
    const file = e.target.files[0];
    if (file) {
      setUploadedDocs((prev) => ({ ...prev, [id]: file.name }));
    }
  };

  const handlePhotoDrop = (e) => {
    e.preventDefault();
    setDragging(false);
    const files = Array.from(e.dataTransfer.files).filter((f) =>
      f.type.startsWith("image/")
    );
    const urls = files.map((f) => URL.createObjectURL(f));
    setPhotos((prev) => [...prev, ...urls]);
  };

  const handlePhotoInput = (e) => {
    const files = Array.from(e.target.files);
    const urls = files.map((f) => URL.createObjectURL(f));
    setPhotos((prev) => [...prev, ...urls]);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-6 py-3 flex items-center justify-between">
        <span className="font-bold text-primary text-lg">
          Me<span className="text-secondary">disPo</span>
        </span>
        <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white text-xs font-bold">
          2
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 py-8">
        {/* Indicateur étape */}
        <div className="mb-6">
          <p className="text-xs font-semibold text-textgray uppercase tracking-widest mb-1">
            ÉTAPE 2 SUR 2
          </p>
          <h1 className="font-title text-2xl font-extrabold text-primary mb-1">
            Finalisation de l'inscription
          </h1>
          <p className="text-textgray text-sm">
            Veuillez remplir les informations administratives et les documents
            légaux pour vérifier votre établissement.
          </p>
        </div>

        {/* Section informations pharmacie */}
        <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 mb-5">
          <h2 className="font-semibold text-gray-800 text-sm mb-4 flex items-center gap-2">
            <span className="w-4 h-4 bg-primary rounded-sm inline-block" />
            Informations de la pharmacie
          </h2>

          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label className="text-xs font-medium text-gray-600 mb-1 block">
                Nom complet
              </label>
              <input
                type="text"
                placeholder="Ex: Pharmacie Al Amal"
                className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm outline-none focus:border-primary"
              />
            </div>
            <div>
              <label className="text-xs font-medium text-gray-600 mb-1 block">
                Nom de la société
              </label>
              <input
                type="text"
                placeholder="Ex: Pharmacie du Centre"
                className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm outline-none focus:border-primary"
              />
            </div>
          </div>

          <div className="mb-4">
            <label className="text-xs font-medium text-gray-600 mb-1 block">
              CIF
            </label>
            <input
              type="text"
              placeholder="Identifiant Commun de l'Entreprise"
              className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm outline-none focus:border-primary"
            />
          </div>

          <div className="mb-4">
            <label className="text-xs font-medium text-gray-600 mb-1 block">
              Adresse
            </label>
            <input
              type="text"
              placeholder="Adresse Complète de votre Établissement"
              className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm outline-none focus:border-primary"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-xs font-medium text-gray-600 mb-1 block">
                TIN
              </label>
              <input
                type="text"
                placeholder="TIN de la pharmacie"
                className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm outline-none focus:border-primary"
              />
            </div>
            <div>
              <label className="text-xs font-medium text-gray-600 mb-1 block">
                Numéro de téléphone
              </label>
              <div className="flex items-center gap-2 border border-gray-200 rounded-lg px-3 py-2 focus-within:border-primary">
                <span className="text-xs font-medium text-gray-600 border-r border-gray-200 pr-2 flex items-center gap-1">
                  🇲🇦 +212
                </span>
                <input
                  type="tel"
                  placeholder="06 00 00 00 00"
                  className="flex-1 outline-none text-sm text-gray-700"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Section documents légaux */}
        <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 mb-5">
          <h2 className="font-semibold text-gray-800 text-sm mb-4 flex items-center gap-2">
            <span className="w-4 h-4 bg-primary rounded-sm inline-block" />
            Documents légaux
          </h2>

          <div className="flex flex-col gap-3">
            {documents.map((doc) => (
              <div
                key={doc.id}
                className="flex items-center justify-between border border-gray-100 rounded-lg px-4 py-3 bg-gray-50"
              >
                <div>
                  <p className="text-sm font-medium text-gray-700">
                    {doc.label}
                  </p>
                  <p className="text-xs text-textgray">
                    {uploadedDocs[doc.id]
                      ? `✓ ${uploadedDocs[doc.id]}`
                      : doc.desc || doc.label2 || "Cliquez pour télécharger"}
                  </p>
                </div>
                <label className="cursor-pointer">
                  <input
                    type="file"
                    className="hidden"
                    accept=".pdf,.jpg,.jpeg,.png"
                    onChange={(e) => handleDocUpload(doc.id, e)}
                  />
                  <span
                    className={`flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-medium transition-colors ${
                      uploadedDocs[doc.id]
                        ? "bg-green-100 text-green-700"
                        : "bg-primary text-white hover:bg-secondary"
                    }`}
                  >
                    <Upload size={13} />
                    {uploadedDocs[doc.id] ? "Modifié" : "Télécharger"}
                  </span>
                </label>
              </div>
            ))}
          </div>
        </div>

        {/* Section photos */}
        <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 mb-6">
          <h2 className="font-semibold text-gray-800 text-sm mb-4 flex items-center gap-2">
            <span className="w-4 h-4 bg-primary rounded-sm inline-block" />
            Photos de la pharmacie
          </h2>

          {/* Zone drag and drop */}
          <div
            onDragOver={(e) => { e.preventDefault(); setDragging(true); }}
            onDragLeave={() => setDragging(false)}
            onDrop={handlePhotoDrop}
            className={`border-2 border-dashed rounded-xl p-10 flex flex-col items-center justify-center text-center transition-colors mb-4 ${
              dragging
                ? "border-primary bg-primary/5"
                : "border-gray-200 bg-gray-50"
            }`}
          >
            <ImagePlus size={32} className="text-gray-300 mb-3" />
            <p className="text-sm font-medium text-gray-500">
              Faites glisser vos photos ici ou parcourez
            </p>
            <p className="text-xs text-textgray mt-1">
              Format JPG, PNG conseillé (max 5 Mo par photo)
            </p>
          </div>

          {/* Aperçu photos */}
          {photos.length > 0 && (
            <div className="flex flex-wrap gap-3 mb-4">
              {photos.map((url, i) => (
                <div
                  key={i}
                  className="w-24 h-20 rounded-lg overflow-hidden border border-gray-200"
                >
                  <img
                    src={url}
                    alt={`photo-${i}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          )}

          {/* Bouton ajouter photos */}
          <label className="cursor-pointer inline-flex items-center gap-2 border border-gray-200 rounded-lg px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 transition-colors">
            <input
              type="file"
              multiple
              accept="image/*"
              className="hidden"
              onChange={handlePhotoInput}
            />
            <ImagePlus size={15} />
            + Ajouter des photos
          </label>
        </div>

        {/* Boutons navigation */}
        <div className="flex items-center justify-between">
          <Link
            href="/inscription"
            className="flex items-center gap-2 border border-gray-300 text-gray-600 rounded-lg px-6 py-2.5 text-sm font-medium hover:bg-gray-50 transition-colors"
          >
            <ArrowLeft size={16} />
            Retour
          </Link>
          <Link
            href="/inscription/verification"
            className="flex items-center gap-2 bg-primary text-white rounded-lg px-6 py-2.5 text-sm font-medium hover:bg-secondary transition-colors"
          >
            Suivant
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </div>
  );
}