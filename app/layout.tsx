import type { Metadata } from "next";
import { Inter /*, Geist, Geist_Mono*/ } from "next/font/google";
import "./globals.css";

// import Sidebar from "./components/Sidebar";
import Profile from "./components/Profile";
import Navigation from "./components/Navigation";
import styles from "./layout.module.css";

const inter = Inter({ subsets: ["latin"] });

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: "Portfolio Zamili App",
  description: "Porfolio application by nextJS app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* STRUKTUR 3-KOLOM BARU */}
        <div className={styles.container}>

          {/* 1. KOLOM PROFIL (KIRI) */}
          <aside className={styles.profileColumn}>
            <Profile />
          </aside>

          {/* 2. KOLOM NAVIGASI (TENGAH) */}
          <nav className={styles.navColumn}>
            <Navigation />
          </nav>

          {/* 3. KOLOM KONTEN (KANAN) */}
          <main className={styles.contentColumn}>
            {children}
          </main>

        </div>
      </body>
    </html>
  );
}
