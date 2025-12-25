"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FileText, Clock, User, ArrowRight, Search, TrendingUp, PiggyBank, Shield, Filter, BookOpen, Video, Headphones, ChevronRight } from "lucide-react";
import { useState } from "react";

const categories = ["Semua", "Investasi", "Pensiun", "Asuransi", "Pajak", "Perencanaan"];

const artikelData = [
  {
    id: 1,
    slug: "memulai-investasi-pemula",
    title: "5 Cara Memulai Investasi untuk Pemula",
    excerpt: "Pelajari langkah-langkah dasar untuk memulai perjalanan investasi Anda dengan aman. Mulai dari menentukan tujuan hingga memilih instrumen yang tepat.",
    category: "Investasi",
    readTime: "5 min read",
    author: "Kevin Hartono, RFP",
    date: "20 Desember 2024",
    featured: true,
  },
  {
    id: 2,
    slug: "dana-pensiun-yang-dibutuhkan",
    title: "Berapa Dana Pensiun yang Anda Butuhkan?",
    excerpt: "Hitung kebutuhan dana pensiun Anda dengan metode yang tepat dan realistis. Jangan sampai salah perhitungan di masa tua.",
    category: "Pensiun",
    readTime: "7 min read",
    author: "Ratna Dewi, CFP",
    date: "18 Desember 2024",
    featured: true,
  },
  {
    id: 3,
    slug: "term-life-vs-whole-life",
    title: "Asuransi: Term Life vs Whole Life",
    excerpt: "Pahami perbedaan kedua jenis asuransi jiwa untuk memilih yang sesuai kebutuhan dan kemampuan finansial Anda.",
    category: "Asuransi",
    readTime: "6 min read",
    author: "Ratna Dewi, CFP",
    date: "15 Desember 2024",
    featured: true,
  },
  {
    id: 4,
    slug: "strategi-menghadapi-inflasi",
    title: "Strategi Menghadapi Inflasi dalam Investasi",
    excerpt: "Inflasi adalah musuh diam-diam kekayaan Anda. Pelajari strategi investasi untuk mengalahkan inflasi.",
    category: "Investasi",
    readTime: "8 min read",
    author: "Kevin Hartono, RFP",
    date: "12 Desember 2024",
    featured: false,
  },
  {
    id: 5,
    slug: "cara-efektif-mengelola-utang",
    title: "Cara Efektif Mengelola Utang",
    excerpt: "Utang bukan selalu buruk jika dikelola dengan benar. Pelajari strategi pengelolaan utang yang efektif.",
    category: "Perencanaan",
    readTime: "5 min read",
    author: "Sarah Putri, CFP",
    date: "10 Desember 2024",
    featured: false,
  },
  {
    id: 6,
    slug: "optimalisasi-pajak-karyawan",
    title: "Optimalisasi Pajak untuk Karyawan",
    excerpt: "Tips mengoptimalkan kewajiban pajak secara legal untuk karyawan. Manfaatkan berbagai insentif yang tersedia.",
    category: "Pajak",
    readTime: "6 min read",
    author: "Budi Santoso, RFP",
    date: "8 Desember 2024",
    featured: false,
  },
  {
    id: 7,
    slug: "membangun-dana-darurat",
    title: "Membangun Dana Darurat yang Kuat",
    excerpt: "Dana darurat adalah fondasi keuangan yang sehat. Berapa idealnya dan bagaimana cara membangunnya?",
    category: "Perencanaan",
    readTime: "4 min read",
    author: "Andi Wijaya, CFP",
    date: "5 Desember 2024",
    featured: false,
  },
  {
    id: 8,
    slug: "reksa-dana-vs-saham",
    title: "Reksa Dana vs Saham: Mana yang Tepat?",
    excerpt: "Perbandingan investasi reksa dana dan saham langsung. Keunggulan dan kekurangan masing-masing.",
    category: "Investasi",
    readTime: "7 min read",
    author: "Kevin Hartono, RFP",
    date: "1 Desember 2024",
    featured: false,
  },
  {
    id: 9,
    slug: "perencanaan-keuangan-keluarga-muda",
    title: "Perencanaan Keuangan untuk Keluarga Muda",
    excerpt: "Tips dan strategi mengelola keuangan untuk pasangan yang baru menikah atau memiliki anak.",
    category: "Perencanaan",
    readTime: "6 min read",
    author: "Sarah Putri, CFP",
    date: "28 November 2024",
    featured: false,
  },
];

const edukasiTypes = [
  {
    icon: BookOpen,
    title: "Artikel",
    count: "50+",
    description: "Artikel mendalam tentang berbagai topik keuangan",
  },
  {
    icon: Video,
    title: "Video",
    count: "Coming Soon",
    description: "Video tutorial dan penjelasan visual",
  },
  {
    icon: Headphones,
    title: "Podcast",
    count: "Coming Soon",
    description: "Diskusi dan wawancara tentang finansial",
  },
];

const popularTopics = [
  "Investasi Pemula",
  "Dana Pensiun",
  "Asuransi Jiwa",
  "Reksa Dana",
  "Saham",
  "Perencanaan Keuangan",
  "Pajak",
  "Dana Darurat",
  "Inflasi",
  "FIRE Movement",
];

export default function EdukasiPage() {
  const [selectedCategory, setSelectedCategory] = useState("Semua");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredArtikel = artikelData.filter((artikel) => {
    const matchCategory = selectedCategory === "Semua" || artikel.category === selectedCategory;
    const matchSearch = artikel.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                       artikel.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCategory && matchSearch;
  });

  const featuredArtikel = artikelData.filter((a) => a.featured);

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-secondary py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center text-white"
          >
            <span className="inline-block px-4 py-2 bg-white/20 rounded-full text-sm font-medium mb-6">
              Belajar Finansial
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading mb-6">
              Edukasi Finansial
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto mb-8">
              Artikel, tips, dan insight dari para ahli untuk membantu Anda
              mengambil keputusan finansial yang lebih baik
            </p>

            {/* Search Bar */}
            <div className="max-w-xl mx-auto relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-text/40" />
              <input
                type="text"
                placeholder="Cari artikel..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-xl bg-white text-text placeholder:text-text/40 focus:outline-none focus:ring-2 focus:ring-accent"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content Types */}
      <section className="py-12 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6">
            {edukasiTypes.map((type, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-4 p-6 bg-background rounded-2xl"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center">
                  <type.icon className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-bold text-text">{type.title}</h3>
                    <span className="text-xs bg-accent/10 text-accent px-2 py-0.5 rounded-full">
                      {type.count}
                    </span>
                  </div>
                  <p className="text-sm text-text/60">{type.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-text font-heading">Artikel Pilihan</h2>
            <Link href="#semua" className="text-primary font-medium flex items-center gap-1 hover:gap-2 transition-all">
              Lihat Semua <ChevronRight size={16} />
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {featuredArtikel.map((artikel, index) => (
              <motion.article
                key={artikel.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <Link href={`/edukasi/${artikel.slug}`}>
                  <div className="bg-background rounded-2xl overflow-hidden hover:shadow-xl transition-all">
                    <div className="h-48 bg-gradient-to-br from-primary to-secondary flex items-center justify-center relative">
                      {artikel.category === "Investasi" && <TrendingUp className="w-16 h-16 text-white/30" />}
                      {artikel.category === "Pensiun" && <PiggyBank className="w-16 h-16 text-white/30" />}
                      {artikel.category === "Asuransi" && <Shield className="w-16 h-16 text-white/30" />}
                      <span className="absolute top-4 left-4 bg-accent text-white text-xs font-medium px-3 py-1 rounded-full">
                        Featured
                      </span>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-xs font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                          {artikel.category}
                        </span>
                        <span className="text-xs text-text/50 flex items-center gap-1">
                          <Clock size={12} />
                          {artikel.readTime}
                        </span>
                      </div>
                      <h3 className="text-lg font-bold text-text font-heading group-hover:text-primary transition-colors mb-2">
                        {artikel.title}
                      </h3>
                      <p className="text-text/70 text-sm line-clamp-2">{artikel.excerpt}</p>
                      <div className="flex items-center gap-2 mt-4 text-sm text-text/60">
                        <User size={14} />
                        {artikel.author}
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Topics */}
      <section className="py-12 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-lg font-bold text-text mb-4">Topik Populer</h3>
          <div className="flex flex-wrap gap-3">
            {popularTopics.map((topic, index) => (
              <button
                key={index}
                onClick={() => setSearchQuery(topic)}
                className="px-4 py-2 bg-white rounded-full text-sm text-text/70 hover:bg-primary hover:text-white transition-colors"
              >
                {topic}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* All Articles */}
      <section id="semua" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-text font-heading mb-8">Semua Artikel</h2>

          {/* Category Filter */}
          <div className="flex flex-wrap items-center gap-4 mb-8">
            <Filter className="w-5 h-5 text-text/60" />
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === cat
                    ? "bg-primary text-white"
                    : "bg-background text-text/70 hover:bg-primary/10"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Articles Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArtikel.map((artikel, index) => (
              <motion.article
                key={artikel.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="group"
              >
                <Link href={`/edukasi/${artikel.slug}`}>
                  <div className="bg-background rounded-2xl overflow-hidden hover:shadow-lg transition-all h-full flex flex-col">
                    <div className="h-40 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                      <FileText className="w-12 h-12 text-primary/40" />
                    </div>
                    <div className="p-6 flex-1 flex flex-col">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-xs font-medium text-accent bg-accent/10 px-3 py-1 rounded-full">
                          {artikel.category}
                        </span>
                        <span className="text-xs text-text/50">{artikel.readTime}</span>
                      </div>
                      <h3 className="text-lg font-bold text-text font-heading group-hover:text-primary transition-colors mb-2">
                        {artikel.title}
                      </h3>
                      <p className="text-text/70 text-sm flex-1 line-clamp-2">{artikel.excerpt}</p>
                      <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
                        <div className="flex items-center gap-2 text-sm text-text/50">
                          <User size={14} />
                          {artikel.author}
                        </div>
                        <span className="text-xs text-text/40">{artikel.date}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>

          {filteredArtikel.length === 0 && (
            <div className="text-center py-12">
              <FileText className="w-16 h-16 text-text/20 mx-auto mb-4" />
              <p className="text-text/60">Tidak ada artikel yang ditemukan</p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("Semua");
                }}
                className="mt-4 text-primary font-medium hover:underline"
              >
                Reset filter
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 bg-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white font-heading mb-4">
              Dapatkan Insight Finansial Terbaru
            </h2>
            <p className="text-white/80 mb-8">
              Berlangganan newsletter kami untuk mendapatkan tips dan artikel terbaru langsung ke inbox Anda.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
              <input
                type="email"
                placeholder="Masukkan email Anda"
                className="flex-1 px-6 py-4 rounded-xl bg-white text-text placeholder:text-text/40 focus:outline-none focus:ring-2 focus:ring-accent"
              />
              <button className="px-8 py-4 bg-accent text-white font-semibold rounded-xl hover:bg-accent/90 transition-colors">
                Berlangganan
              </button>
            </div>
            <p className="text-white/60 text-sm mt-4">
              Gratis. Bisa unsubscribe kapan saja.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-text font-heading mb-4">
              Ingin Belajar Lebih Dalam?
            </h2>
            <p className="text-text/70 mb-8">
              Jadwalkan konsultasi dengan advisor kami untuk mendapatkan panduan
              personal sesuai kondisi finansial Anda.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/konsultasi"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent text-white font-semibold rounded-xl hover:bg-accent/90 transition-colors"
              >
                Konsultasi Gratis
                <ArrowRight size={20} />
              </Link>
              <Link
                href="/kalkulator"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-white font-semibold rounded-xl hover:bg-secondary transition-colors"
              >
                Coba Kalkulator
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
