"use client";

import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  ArrowRight
} from "lucide-react";

const footerLinks = {
  layanan: [
    { href: "/layanan#financial-planning", label: "Financial Planning" },
    { href: "/layanan#investment", label: "Investment Advisory" },
    { href: "/layanan#retirement", label: "Retirement Planning" },
    { href: "/layanan#tax", label: "Tax Planning" },
    { href: "/layanan#insurance", label: "Insurance Review" },
    { href: "/layanan#estate", label: "Estate Planning" },
  ],
  perusahaan: [
    { href: "/tentang", label: "Tentang Kami" },
    { href: "/tim", label: "Tim Advisor" },
    { href: "/edukasi", label: "Artikel & Edukasi" },
    { href: "/kalkulator", label: "Kalkulator Finansial" },
    { href: "/konsultasi", label: "Konsultasi" },
    { href: "/kontak", label: "Hubungi Kami" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-secondary text-white">
      {/* CTA Section */}
      <div className="bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold font-heading">
                Siap Memulai Perjalanan Finansial Anda?
              </h3>
              <p className="text-white/80 mt-2">
                Konsultasi gratis dengan advisor bersertifikat kami.
              </p>
            </div>
            <Link
              href="/konsultasi"
              className="flex items-center gap-2 px-8 py-4 bg-accent text-white font-semibold rounded-lg hover:bg-accent/90 transition-colors shadow-lg"
            >
              Jadwalkan Konsultasi
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                <span className="text-primary font-bold text-xl font-heading">FS</span>
              </div>
              <div>
                <h2 className="text-xl font-bold font-heading">Finansial Sejahtera</h2>
              </div>
            </div>
            <p className="text-white/70 mb-6">
              Partner Menuju Kebebasan Finansial. Konsultan keuangan bersertifikat yang membantu Anda merencanakan masa depan finansial dengan tepat.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-accent transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-accent transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-accent transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-accent transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Layanan */}
          <div>
            <h3 className="text-lg font-semibold font-heading mb-6">Layanan Kami</h3>
            <ul className="space-y-3">
              {footerLinks.layanan.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-accent transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Perusahaan */}
          <div>
            <h3 className="text-lg font-semibold font-heading mb-6">Perusahaan</h3>
            <ul className="space-y-3">
              {footerLinks.perusahaan.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-accent transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold font-heading mb-6">Hubungi Kami</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin size={20} className="text-accent mt-1 flex-shrink-0" />
                <span className="text-white/70">
                  Jl. Sudirman No. 123, Jakarta Selatan 12190
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={20} className="text-accent flex-shrink-0" />
                <a href="tel:+622112345678" className="text-white/70 hover:text-accent transition-colors">
                  (021) 1234-5678
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={20} className="text-accent flex-shrink-0" />
                <a href="mailto:info@finansialsejahtera.id" className="text-white/70 hover:text-accent transition-colors">
                  info@finansialsejahtera.id
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/60">
            <p>&copy; 2025 Finansial Sejahtera. Terdaftar di OJK.</p>
            <p>
              Website ini dibuat dengan <span className="text-red-400">&hearts;</span> oleh{" "}
              <a
                href="https://creativism.id"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:underline"
              >
                Creativism Digital Marketing Agency
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
