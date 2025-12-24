import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Finansial Sejahtera | Konsultan Keuangan Jakarta | Financial Planner CFP",
  description: "Konsultan keuangan bersertifikat CFP yang membantu Anda mencapai tujuan finansial, dari perencanaan investasi hingga dana pensiun. Partner Menuju Kebebasan Finansial.",
  keywords: "konsultan keuangan, financial planner, CFP, Jakarta, perencanaan keuangan, investasi, dana pensiun",
  openGraph: {
    title: "Finansial Sejahtera | Partner Menuju Kebebasan Finansial",
    description: "Konsultan keuangan bersertifikat yang membantu Anda mencapai tujuan finansial.",
    type: "website",
    locale: "id_ID",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className="antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
