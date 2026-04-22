import { Inter } from "next/font/google";
import { Abhaya_Libre } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const abhayaLibre = Abhaya_Libre({
  subsets: ["latin"],
  weight: ["800"],
  variable: "--font-abhaya",
  display: "swap",
});

export const metadata = {
  title: "MedisPo — Vos médicaments, plus proches que jamais",
  description:
    "Trouvez vos médicaments dans les pharmacies près de chez vous en quelques clics.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr" className={`${inter.variable} ${abhayaLibre.variable}`}>
      <body className="font-body bg-background text-gray-800 antialiased">
        {children}
      </body>
    </html>
  );
}