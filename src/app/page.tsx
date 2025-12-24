"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  TrendingUp,
  Shield,
  PiggyBank,
  Calculator,
  FileText,
  Users,
  Award,
  CheckCircle,
  ArrowRight,
  Star,
  Quote,
  ChevronRight,
  BarChart3,
  Target,
  Wallet,
} from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

// Hero Section
function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-white to-primary/5">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
              <Award className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium text-primary">CFP Certified Advisors</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text leading-tight font-heading">
              Rencanakan Masa Depan{" "}
              <span className="text-primary">Finansial Anda</span> dengan Tepat
            </h1>
            <p className="mt-6 text-lg text-text/70 max-w-xl">
              Konsultan keuangan bersertifikat yang membantu Anda mencapai tujuan finansial,
              dari perencanaan investasi hingga dana pensiun.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link
                href="/konsultasi"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent text-white font-semibold rounded-xl hover:bg-accent/90 transition-all shadow-lg shadow-accent/25 hover:shadow-xl hover:shadow-accent/30"
              >
                Konsultasi Gratis
                <ArrowRight size={20} />
              </Link>
              <Link
                href="/kalkulator"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary/10 text-primary font-semibold rounded-xl hover:bg-primary/20 transition-all"
              >
                <Calculator size={20} />
                Cek Kesehatan Finansial
              </Link>
            </div>

            {/* Trust Badges */}
            <div className="mt-12 flex flex-wrap gap-8">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="font-bold text-text">CFP Certified</p>
                  <p className="text-sm text-text/60">Financial Planner</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="font-bold text-text">500+ Klien</p>
                  <p className="text-sm text-text/60">Sudah Terbantu</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="font-bold text-text">Rp 200M+</p>
                  <p className="text-sm text-text/60">Asset Under Advisory</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="hidden lg:block"
          >
            <div className="relative">
              <div className="w-full h-[500px] bg-gradient-to-br from-primary to-secondary rounded-3xl overflow-hidden shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                <div className="absolute bottom-8 left-8 right-8 text-white">
                  <div className="bg-white/20 backdrop-blur-md rounded-2xl p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center">
                        <BarChart3 className="w-8 h-8 text-primary" />
                      </div>
                      <div>
                        <p className="text-white/80 text-sm">Portfolio Growth</p>
                        <p className="text-2xl font-bold">+25.4%</p>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <div
                          key={i}
                          className="flex-1 h-16 bg-white/20 rounded-lg"
                          style={{ height: `${30 + i * 15}px` }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              {/* Floating Cards */}
              <div className="absolute -top-6 -right-6 bg-white rounded-2xl shadow-xl p-4 animate-bounce">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <p className="text-xs text-text/60">Target Tercapai</p>
                    <p className="font-semibold text-text">Dana Pensiun</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// Layanan Section
const layananData = [
  {
    icon: Target,
    title: "Financial Planning",
    description: "Perencanaan keuangan komprehensif untuk mencapai semua tujuan finansial Anda.",
    color: "bg-blue-500",
  },
  {
    icon: TrendingUp,
    title: "Investment Advisory",
    description: "Rekomendasi investasi yang disesuaikan dengan profil risiko dan tujuan Anda.",
    color: "bg-green-500",
  },
  {
    icon: PiggyBank,
    title: "Retirement Planning",
    description: "Persiapan dana pensiun agar masa tua Anda tetap nyaman dan sejahtera.",
    color: "bg-purple-500",
  },
  {
    icon: Calculator,
    title: "Tax Planning",
    description: "Optimalisasi pajak secara legal untuk memaksimalkan kekayaan Anda.",
    color: "bg-orange-500",
  },
  {
    icon: Shield,
    title: "Insurance Review",
    description: "Analisis kebutuhan asuransi untuk proteksi optimal bagi Anda dan keluarga.",
    color: "bg-red-500",
  },
  {
    icon: FileText,
    title: "Estate Planning",
    description: "Perencanaan warisan untuk memastikan aset terdistribusi sesuai keinginan.",
    color: "bg-teal-500",
  },
];

function LayananSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Layanan Kami
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-text font-heading">
            Solusi Keuangan Lengkap untuk Anda
          </h2>
          <p className="mt-4 text-lg text-text/70 max-w-2xl mx-auto">
            Kami menyediakan layanan perencanaan keuangan menyeluruh untuk membantu Anda
            mencapai kebebasan finansial.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {layananData.map((item, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="group p-8 bg-background rounded-2xl hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div
                className={`w-14 h-14 ${item.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
              >
                <item.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-text mb-3 font-heading">{item.title}</h3>
              <p className="text-text/70">{item.description}</p>
              <Link
                href="/layanan"
                className="inline-flex items-center gap-2 mt-4 text-primary font-medium hover:gap-3 transition-all"
              >
                Pelajari lebih lanjut
                <ChevronRight size={16} />
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// Tim Section
const timData = [
  {
    name: "Bapak Andi Wijaya, CFP",
    role: "Founder & Lead Advisor",
    experience: "20 tahun pengalaman",
    image: "/team/andi.jpg",
    description: "Berpengalaman dalam wealth management dan perencanaan keuangan untuk high net worth individuals.",
  },
  {
    name: "Ibu Ratna Dewi, CFP",
    role: "Senior Advisor",
    experience: "15 tahun pengalaman",
    image: "/team/ratna.jpg",
    description: "Spesialis dalam perencanaan pensiun dan proteksi asuransi untuk keluarga Indonesia.",
  },
  {
    name: "Mas Kevin Hartono, RFP",
    role: "Investment Specialist",
    experience: "10 tahun pengalaman",
    image: "/team/kevin.jpg",
    description: "Ahli dalam analisis investasi dan portfolio management untuk berbagai profil risiko.",
  },
];

function TimSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-background to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Tim Advisor
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-text font-heading">
            Dipandu oleh Para Ahli
          </h2>
          <p className="mt-4 text-lg text-text/70 max-w-2xl mx-auto">
            Tim advisor bersertifikat kami siap membantu Anda meraih tujuan finansial.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {timData.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <div className="h-64 bg-gradient-to-br from-primary to-secondary relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-32 h-32 bg-white/20 rounded-full flex items-center justify-center">
                      <Users className="w-16 h-16 text-white" />
                    </div>
                  </div>
                  <div className="absolute top-4 right-4 bg-accent text-white text-xs font-medium px-3 py-1 rounded-full">
                    {member.role.includes("CFP") || member.name.includes("CFP") ? "CFP" : "RFP"}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-text font-heading">{member.name}</h3>
                  <p className="text-primary font-medium">{member.role}</p>
                  <p className="text-sm text-accent mt-1">{member.experience}</p>
                  <p className="text-text/70 mt-4 text-sm">{member.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link
            href="/tim"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-semibold rounded-xl hover:bg-secondary transition-colors"
          >
            Lihat Semua Tim
            <ArrowRight size={18} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

// Testimoni Section
const testimoniData = [
  {
    quote: "Berkat Finansial Sejahtera, sekarang saya punya perencanaan pensiun yang jelas. Tim advisor sangat profesional dan memahami kebutuhan saya.",
    name: "Bapak Hendra",
    role: "45 tahun, Profesional",
    rating: 5,
  },
  {
    quote: "Portfolio investasi saya naik 25% dalam setahun dengan advisory mereka. Sangat recommended untuk siapapun yang serius dengan keuangan.",
    name: "Ibu Maya",
    role: "38 tahun, Business Owner",
    rating: 5,
  },
];

function TestimoniSection() {
  return (
    <section className="py-24 bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-white/20 text-white rounded-full text-sm font-medium mb-4">
            Testimoni
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white font-heading">
            Apa Kata Klien Kami
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimoniData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-xl"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(item.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                ))}
              </div>
              <Quote className="w-10 h-10 text-primary/20 mb-4" />
              <p className="text-text text-lg mb-6">{item.quote}</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="font-bold text-text">{item.name}</p>
                  <p className="text-text/60 text-sm">{item.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Edukasi Preview Section
const artikelData = [
  {
    title: "5 Cara Memulai Investasi untuk Pemula",
    excerpt: "Pelajari langkah-langkah dasar untuk memulai perjalanan investasi Anda dengan aman.",
    category: "Investasi",
    readTime: "5 min read",
  },
  {
    title: "Berapa Dana Pensiun yang Anda Butuhkan?",
    excerpt: "Hitung kebutuhan dana pensiun Anda dengan metode yang tepat dan realistis.",
    category: "Pensiun",
    readTime: "7 min read",
  },
  {
    title: "Asuransi: Term Life vs Whole Life",
    excerpt: "Pahami perbedaan kedua jenis asuransi jiwa untuk memilih yang sesuai kebutuhan.",
    category: "Asuransi",
    readTime: "6 min read",
  },
];

function EdukasiSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-12"
        >
          <div>
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
              Edukasi Finansial
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-text font-heading">
              Artikel & Insight Terbaru
            </h2>
          </div>
          <Link
            href="/edukasi"
            className="inline-flex items-center gap-2 text-primary font-medium mt-4 md:mt-0 hover:gap-3 transition-all"
          >
            Lihat Semua Artikel
            <ArrowRight size={18} />
          </Link>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {artikelData.map((artikel, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-background rounded-2xl overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                  <FileText className="w-16 h-16 text-primary/40" />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs font-medium text-accent bg-accent/10 px-3 py-1 rounded-full">
                      {artikel.category}
                    </span>
                    <span className="text-xs text-text/50">{artikel.readTime}</span>
                  </div>
                  <h3 className="text-lg font-bold text-text font-heading group-hover:text-primary transition-colors">
                    {artikel.title}
                  </h3>
                  <p className="text-text/70 mt-2 text-sm">{artikel.excerpt}</p>
                  <Link
                    href="/edukasi"
                    className="inline-flex items-center gap-2 mt-4 text-primary font-medium text-sm hover:gap-3 transition-all"
                  >
                    Baca Selengkapnya
                    <ChevronRight size={14} />
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

// CTA Section
function CTASection() {
  return (
    <section className="py-24 bg-gradient-to-br from-background to-primary/5">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/10 rounded-full mb-8">
            <Wallet className="w-10 h-10 text-primary" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-text font-heading mb-6">
            Mulai Perjalanan Menuju Kebebasan Finansial Anda
          </h2>
          <p className="text-lg text-text/70 mb-8 max-w-2xl mx-auto">
            Jadwalkan konsultasi gratis dengan advisor kami dan dapatkan analisis
            kesehatan finansial Anda secara menyeluruh.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/konsultasi"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent text-white font-semibold rounded-xl hover:bg-accent/90 transition-all shadow-lg shadow-accent/25"
            >
              Jadwalkan Konsultasi
              <ArrowRight size={20} />
            </Link>
            <Link
              href="/kalkulator"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-white font-semibold rounded-xl hover:bg-secondary transition-all"
            >
              <Calculator size={20} />
              Coba Kalkulator Gratis
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <HeroSection />
      <LayananSection />
      <TimSection />
      <TestimoniSection />
      <EdukasiSection />
      <CTASection />
    </>
  );
}
