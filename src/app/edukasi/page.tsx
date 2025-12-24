"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FileText, Clock, User, ArrowRight, Search, TrendingUp, PiggyBank, Shield, Filter } from "lucide-react";
import { useState } from "react";

const categories = ["Semua", "Investasi", "Pensiun", "Asuransi", "Pajak", "Perencanaan"];

const artikelData = [
  {
    id: 1,
    title: "5 Cara Memulai Investasi untuk Pemula",
    excerpt: "Pelajari langkah-langkah dasar untuk memulai perjalanan investasi Anda dengan aman. Mulai dari menentukan tujuan hingga memilih instrumen yang tepat.",
    category: "Investasi",
    readTime: "5 min read",
    author: "Kevin Hartono, RFP",
    date: "20 Desember 2024",
    featured: true,
    content: `
      Memulai investasi bisa terasa overwhelming bagi pemula. Namun dengan pemahaman dasar yang tepat, Anda bisa memulai perjalanan investasi dengan percaya diri.

      **1. Tentukan Tujuan Investasi**
      Sebelum berinvestasi, tentukan dulu apa tujuan Anda. Apakah untuk dana pensiun, pendidikan anak, atau membeli rumah? Tujuan yang jelas akan menentukan strategi investasi Anda.

      **2. Pahami Profil Risiko Anda**
      Setiap orang memiliki toleransi risiko yang berbeda. Apakah Anda tipe konservatif, moderat, atau agresif? Ini akan menentukan alokasi aset Anda.

      **3. Mulai dari yang Sederhana**
      Untuk pemula, reksa dana pasar uang atau deposito bisa menjadi pilihan awal yang aman. Seiring bertambahnya pengetahuan, Anda bisa eksplorasi instrumen lain.

      **4. Investasi Secara Rutin**
      Gunakan strategi dollar-cost averaging dengan investasi rutin setiap bulan. Ini membantu meratakan harga beli dan mengurangi risiko timing pasar.

      **5. Terus Belajar**
      Investasi adalah perjalanan seumur hidup. Terus pelajari berbagai instrumen dan strategi untuk mengoptimalkan return Anda.
    `,
  },
  {
    id: 2,
    title: "Berapa Dana Pensiun yang Anda Butuhkan?",
    excerpt: "Hitung kebutuhan dana pensiun Anda dengan metode yang tepat dan realistis. Jangan sampai salah perhitungan di masa tua.",
    category: "Pensiun",
    readTime: "7 min read",
    author: "Ratna Dewi, CFP",
    date: "18 Desember 2024",
    featured: true,
    content: `
      Merencanakan pensiun adalah salah satu aspek terpenting dalam perencanaan keuangan. Berikut cara menghitung kebutuhan dana pensiun Anda.

      **Rumus Dasar:**
      Dana Pensiun = Pengeluaran Bulanan × 12 × Tahun Pensiun × (1 + Inflasi)^n

      **Faktor yang Perlu Dipertimbangkan:**
      - Usia pensiun yang diinginkan
      - Estimasi biaya hidup saat pensiun
      - Inflasi rata-rata (5-7% per tahun)
      - Sumber pendapatan lain (BPJS, dana pensiun perusahaan)

      **Contoh Perhitungan:**
      Jika pengeluaran bulanan Rp 15 juta dan ingin pensiun 20 tahun, dengan asumsi inflasi 6%, Anda membutuhkan sekitar Rp 6-8 miliar untuk pensiun nyaman.
    `,
  },
  {
    id: 3,
    title: "Asuransi: Term Life vs Whole Life",
    excerpt: "Pahami perbedaan kedua jenis asuransi jiwa untuk memilih yang sesuai kebutuhan dan kemampuan finansial Anda.",
    category: "Asuransi",
    readTime: "6 min read",
    author: "Ratna Dewi, CFP",
    date: "15 Desember 2024",
    featured: false,
    content: `
      Memilih antara asuransi term life dan whole life sering membingungkan. Mari kita bahas perbedaannya.

      **Term Life Insurance:**
      - Proteksi untuk periode tertentu (10, 20, 30 tahun)
      - Premi lebih murah
      - Tidak ada nilai tunai
      - Cocok untuk proteksi murni

      **Whole Life Insurance:**
      - Proteksi seumur hidup
      - Premi lebih mahal
      - Ada nilai tunai yang bisa diambil
      - Cocok untuk yang ingin proteksi + tabungan

      **Mana yang Lebih Baik?**
      Tidak ada yang lebih baik secara universal. Pilihan tergantung kebutuhan dan kemampuan finansial Anda.
    `,
  },
  {
    id: 4,
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
    title: "Reksa Dana vs Saham: Mana yang Tepat?",
    excerpt: "Perbandingan investasi reksa dana dan saham langsung. Keunggulan dan kekurangan masing-masing.",
    category: "Investasi",
    readTime: "7 min read",
    author: "Kevin Hartono, RFP",
    date: "1 Desember 2024",
    featured: false,
  },
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
      <section className="bg-gradient-to-br from-primary to-secondary py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center text-white"
          >
            <h1 className="text-4xl md:text-5xl font-bold font-heading mb-6">
              Edukasi Finansial
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto mb-8">
              Artikel, tips, dan insight untuk membantu Anda mengambil keputusan finansial yang lebih baik
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

      {/* Featured Articles */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-text font-heading mb-8">Artikel Pilihan</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {featuredArtikel.map((artikel, index) => (
              <motion.article
                key={artikel.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-background rounded-2xl overflow-hidden hover:shadow-xl transition-all">
                  <div className="h-56 bg-gradient-to-br from-primary to-secondary flex items-center justify-center relative">
                    {artikel.category === "Investasi" && <TrendingUp className="w-20 h-20 text-white/30" />}
                    {artikel.category === "Pensiun" && <PiggyBank className="w-20 h-20 text-white/30" />}
                    {artikel.category === "Asuransi" && <Shield className="w-20 h-20 text-white/30" />}
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
                    <h3 className="text-xl font-bold text-text font-heading group-hover:text-primary transition-colors mb-3">
                      {artikel.title}
                    </h3>
                    <p className="text-text/70">{artikel.excerpt}</p>
                    <div className="flex items-center justify-between mt-4 pt-4 border-t">
                      <div className="flex items-center gap-2 text-sm text-text/60">
                        <User size={14} />
                        {artikel.author}
                      </div>
                      <span className="text-sm text-text/50">{artikel.date}</span>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* All Articles */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
                    : "bg-white text-text/70 hover:bg-primary/10"
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
                <div className="bg-white rounded-2xl overflow-hidden hover:shadow-lg transition-all h-full flex flex-col">
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
                    <p className="text-text/70 text-sm flex-1">{artikel.excerpt}</p>
                    <div className="flex items-center gap-2 mt-4 text-sm text-text/50">
                      <User size={14} />
                      {artikel.author}
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {filteredArtikel.length === 0 && (
            <div className="text-center py-12">
              <FileText className="w-16 h-16 text-text/20 mx-auto mb-4" />
              <p className="text-text/60">Tidak ada artikel yang ditemukan</p>
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
          </motion.div>
        </div>
      </section>
    </div>
  );
}
