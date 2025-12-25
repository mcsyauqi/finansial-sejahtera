"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useParams } from "next/navigation";
import {
  ArrowLeft,
  Calendar,
  Clock,
  User,
  Share2,
  Facebook,
  Twitter,
  Linkedin,
  Copy,
  BookOpen,
  TrendingUp,
  PiggyBank,
  Shield,
  CheckCircle,
  ArrowRight,
  FileText,
} from "lucide-react";

const artikelData: Record<string, {
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  author: string;
  authorRole: string;
  date: string;
  content: string;
  relatedTopics: string[];
}> = {
  "memulai-investasi-pemula": {
    title: "5 Cara Memulai Investasi untuk Pemula",
    excerpt: "Pelajari langkah-langkah dasar untuk memulai perjalanan investasi Anda dengan aman.",
    category: "Investasi",
    readTime: "5 min read",
    author: "Kevin Hartono, RFP",
    authorRole: "Investment Specialist",
    date: "20 Desember 2024",
    content: `
## Mengapa Investasi Penting?

Investasi adalah salah satu cara terbaik untuk mengembangkan kekayaan Anda dari waktu ke waktu. Dengan inflasi yang terus menggerus nilai uang, hanya menyimpan uang di tabungan biasa tidak cukup untuk mencapai tujuan finansial jangka panjang.

## 1. Tentukan Tujuan Investasi Anda

Sebelum mulai berinvestasi, tanyakan pada diri sendiri: **Untuk apa saya berinvestasi?**

Tujuan investasi bisa bermacam-macam:
- Dana pensiun (jangka panjang, 20-30 tahun)
- Dana pendidikan anak (jangka menengah, 10-15 tahun)
- Down payment rumah (jangka pendek-menengah, 3-5 tahun)
- Dana darurat (jangka pendek)

Tujuan yang jelas akan menentukan strategi investasi Anda, termasuk horizon waktu dan toleransi risiko.

## 2. Pahami Profil Risiko Anda

Setiap orang memiliki toleransi risiko yang berbeda. Ada tiga profil umum:

**Konservatif**: Mengutamakan keamanan, siap dengan return lebih rendah
- Cocok untuk: deposito, obligasi, reksa dana pasar uang

**Moderat**: Keseimbangan antara keamanan dan pertumbuhan
- Cocok untuk: reksa dana campuran, obligasi korporasi

**Agresif**: Siap menerima volatilitas untuk potensi return tinggi
- Cocok untuk: saham, reksa dana saham, equity crowdfunding

## 3. Mulai dari yang Sederhana

Untuk pemula, disarankan memulai dengan instrumen yang mudah dipahami dan risiko terkelola:

### Reksa Dana Pasar Uang
- Return: 4-6% per tahun
- Risiko: Sangat rendah
- Likuiditas: Tinggi
- Minimum investasi: Mulai dari Rp 10.000

### Reksa Dana Pendapatan Tetap (Obligasi)
- Return: 6-9% per tahun
- Risiko: Rendah-menengah
- Cocok untuk tujuan 1-3 tahun

### Reksa Dana Campuran
- Return: 8-12% per tahun
- Risiko: Menengah
- Cocok untuk tujuan 3-5 tahun

## 4. Investasi Secara Rutin (Dollar-Cost Averaging)

Salah satu strategi terbaik untuk pemula adalah **investasi rutin** setiap bulan dengan jumlah yang sama. Strategi ini disebut Dollar-Cost Averaging (DCA).

**Keuntungan DCA:**
- Meratakan harga beli
- Mengurangi risiko timing pasar
- Membangun disiplin investasi
- Tidak perlu memprediksi pasar

**Contoh:**
Investasi Rp 1.000.000/bulan selama 10 tahun dengan return 10% per tahun:
- Total investasi: Rp 120.000.000
- Nilai akhir: ~Rp 206.000.000
- Keuntungan: ~Rp 86.000.000

## 5. Terus Belajar dan Evaluasi

Investasi adalah perjalanan seumur hidup. Beberapa tips:

- **Baca buku dan artikel** tentang investasi
- **Ikuti perkembangan ekonomi** dan pasar
- **Review portfolio** secara berkala (minimal per kuartal)
- **Jangan panik** saat pasar turun
- **Diversifikasi** untuk mengurangi risiko

## Kesalahan Umum yang Harus Dihindari

1. **Investasi tanpa dana darurat** - Pastikan ada dana darurat 3-6 bulan pengeluaran
2. **Terpengaruh FOMO** - Jangan ikut-ikutan investasi yang sedang "hype"
3. **Tidak diversifikasi** - Jangan taruh semua telur di satu keranjang
4. **Panic selling** - Jangan jual saat pasar turun karena panik
5. **Mengharapkan cepat kaya** - Investasi adalah marathon, bukan sprint

## Mulai Sekarang!

Waktu terbaik untuk mulai investasi adalah kemarin. Waktu terbaik kedua adalah **sekarang**. Semakin cepat Anda mulai, semakin besar manfaat compound interest yang Anda dapatkan.

Jika Anda masih ragu atau butuh panduan lebih lanjut, jangan ragu untuk berkonsultasi dengan financial advisor profesional.
    `,
    relatedTopics: ["Reksa Dana", "Saham", "Profil Risiko", "Dollar Cost Averaging"],
  },
  "dana-pensiun-yang-dibutuhkan": {
    title: "Berapa Dana Pensiun yang Anda Butuhkan?",
    excerpt: "Hitung kebutuhan dana pensiun Anda dengan metode yang tepat dan realistis.",
    category: "Pensiun",
    readTime: "7 min read",
    author: "Ratna Dewi, CFP",
    authorRole: "Senior Advisor",
    date: "18 Desember 2024",
    content: `
## Mengapa Perencanaan Pensiun Penting?

Pensiun adalah fase kehidupan yang pasti akan datang. Sayangnya, banyak orang baru memikirkan pensiun ketika sudah terlambat. Data menunjukkan bahwa sebagian besar masyarakat Indonesia tidak siap secara finansial untuk pensiun.

## Berapa Dana yang Dibutuhkan?

Ada beberapa metode untuk menghitung kebutuhan dana pensiun:

### Metode 1: Replacement Ratio

Umumnya, Anda membutuhkan **70-80%** dari penghasilan terakhir untuk mempertahankan gaya hidup saat pensiun.

**Contoh:**
- Penghasilan saat ini: Rp 20.000.000/bulan
- Kebutuhan pensiun: 75% x Rp 20.000.000 = Rp 15.000.000/bulan
- Per tahun: Rp 180.000.000

### Metode 2: Expense-Based

Hitung berdasarkan proyeksi pengeluaran riil saat pensiun:
- Biaya hidup dasar
- Healthcare (biasanya naik saat tua)
- Leisure dan hobi
- Biaya tak terduga

### Rule of 25

Cara sederhana: **Kalikan pengeluaran tahunan dengan 25**

Jika kebutuhan Rp 180.000.000/tahun:
Dana pensiun = Rp 180.000.000 x 25 = **Rp 4.500.000.000**

## Faktor yang Mempengaruhi

### 1. Inflasi
Dengan inflasi 6% per tahun, Rp 15.000.000 hari ini akan setara dengan:
- 10 tahun lagi: Rp 26.863.000
- 20 tahun lagi: Rp 48.107.000
- 30 tahun lagi: Rp 86.156.000

### 2. Life Expectancy
Dengan harapan hidup yang meningkat, Anda mungkin perlu dana untuk 25-30 tahun masa pensiun.

### 3. Sumber Pendapatan Lain
- BPJS Ketenagakerjaan (JHT & JP)
- Dana Pensiun Perusahaan
- Passive income (sewa, dividen)

## Strategi Mencapai Target

### Mulai Sedini Mungkin
**Kekuatan Compound Interest:**
- Mulai usia 25, investasi Rp 2.000.000/bulan = Rp 6,9 miliar di usia 55
- Mulai usia 35, investasi Rp 2.000.000/bulan = Rp 2,3 miliar di usia 55
- Mulai usia 45, investasi Rp 2.000.000/bulan = Rp 0,7 miliar di usia 55

### Pilih Instrumen yang Tepat
- Usia 25-40: Agresif (saham 60-80%)
- Usia 40-50: Moderat (saham 40-60%)
- Usia 50-55: Konservatif (saham 20-40%)

### Manfaatkan Program Pensiun
- Maksimalkan iuran BPJS
- Ikut DPLK jika tersedia
- Pertimbangkan anuitas pensiun

## Action Steps

1. Hitung kebutuhan dana pensiun Anda
2. Evaluasi berapa yang sudah terkumpul
3. Hitung gap yang perlu ditutup
4. Tentukan strategi investasi
5. Review berkala minimal setahun sekali

Gunakan kalkulator pensiun kami untuk simulasi yang lebih akurat!
    `,
    relatedTopics: ["BPJS", "Dana Pensiun", "Investasi Jangka Panjang", "Compound Interest"],
  },
  "term-life-vs-whole-life": {
    title: "Asuransi: Term Life vs Whole Life",
    excerpt: "Pahami perbedaan kedua jenis asuransi jiwa untuk memilih yang sesuai kebutuhan.",
    category: "Asuransi",
    readTime: "6 min read",
    author: "Ratna Dewi, CFP",
    authorRole: "Senior Advisor",
    date: "15 Desember 2024",
    content: `
## Memahami Asuransi Jiwa

Asuransi jiwa adalah produk proteksi yang memberikan santunan kepada ahli waris jika tertanggung meninggal dunia. Ada dua jenis utama: Term Life dan Whole Life.

## Term Life Insurance

### Apa itu Term Life?
Asuransi jiwa berjangka yang memberikan proteksi untuk periode tertentu (10, 20, atau 30 tahun).

### Karakteristik:
- **Premi murah** - Hanya membayar untuk proteksi murni
- **Tidak ada nilai tunai** - Jika tidak terjadi klaim, premi hangus
- **Proteksi tinggi** - Bisa dapat Uang Pertanggungan besar dengan premi terjangkau
- **Simpel** - Mudah dipahami

### Cocok untuk:
- Pencari nafkah utama dengan tanggungan
- Yang membutuhkan proteksi tinggi dengan budget terbatas
- Proteksi pelunasan KPR
- Proteksi dana pendidikan anak

### Contoh:
Pria 30 tahun, non-smoker
- UP: Rp 1 miliar
- Jangka waktu: 20 tahun
- Premi: ~Rp 300.000-500.000/bulan

## Whole Life Insurance

### Apa itu Whole Life?
Asuransi jiwa seumur hidup yang menggabungkan proteksi dengan komponen investasi/tabungan.

### Karakteristik:
- **Premi lebih mahal** - Ada komponen tabungan/investasi
- **Ada nilai tunai** - Bisa diambil atau dipinjam
- **Proteksi seumur hidup** - Sampai usia 99-100 tahun
- **Lebih kompleks** - Banyak varian produk

### Cocok untuk:
- Yang ingin proteksi + tabungan jangka panjang
- Yang memiliki budget lebih
- Perencanaan warisan
- Yang sulit disiplin menabung terpisah

### Contoh:
Pria 30 tahun, non-smoker
- UP: Rp 500 juta
- Jangka waktu: Seumur hidup
- Premi: ~Rp 1.000.000-2.000.000/bulan

## Perbandingan

| Aspek | Term Life | Whole Life |
|-------|-----------|------------|
| Premi | Murah | Mahal |
| Nilai Tunai | Tidak ada | Ada |
| Jangka Waktu | Terbatas | Seumur hidup |
| UP | Tinggi | Relatif rendah |
| Kompleksitas | Simpel | Kompleks |

## Mana yang Lebih Baik?

**Tidak ada yang lebih baik secara universal.** Pilihan tergantung pada:
- Tujuan Anda
- Kemampuan finansial
- Preferensi investasi

### Rekomendasi Kami:
1. **Prioritaskan proteksi** - Pastikan UP cukup untuk mencover kebutuhan keluarga
2. **Buy term, invest the difference** - Beli term life, sisanya investasikan sendiri
3. **Jangan mix terlalu banyak** - Asuransi untuk proteksi, investasi untuk investasi
4. **Review berkala** - Kebutuhan berubah seiring waktu

## Tips Memilih Asuransi Jiwa

1. Hitung kebutuhan UP yang tepat (5-10x penghasilan tahunan)
2. Bandingkan beberapa produk
3. Perhatikan exclusion dan waiting period
4. Pastikan klaim mudah
5. Pilih perusahaan dengan track record baik
6. Konsultasikan dengan advisor independen
    `,
    relatedTopics: ["Premi Asuransi", "Uang Pertanggungan", "Klaim Asuransi", "Financial Protection"],
  },
};

const relatedArticles = [
  { slug: "memulai-investasi-pemula", title: "5 Cara Memulai Investasi untuk Pemula", category: "Investasi" },
  { slug: "dana-pensiun-yang-dibutuhkan", title: "Berapa Dana Pensiun yang Anda Butuhkan?", category: "Pensiun" },
  { slug: "term-life-vs-whole-life", title: "Asuransi: Term Life vs Whole Life", category: "Asuransi" },
];

export default function ArtikelDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const artikel = artikelData[slug];

  if (!artikel) {
    return (
      <div className="pt-20 min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <FileText className="w-16 h-16 text-text/20 mx-auto mb-4" />
          <h1 className="text-2xl font-bold text-text mb-2">Artikel Tidak Ditemukan</h1>
          <p className="text-text/60 mb-6">Maaf, artikel yang Anda cari tidak tersedia.</p>
          <Link
            href="/edukasi"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-semibold rounded-xl hover:bg-secondary transition-colors"
          >
            <ArrowLeft size={18} />
            Kembali ke Edukasi
          </Link>
        </div>
      </div>
    );
  }

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Investasi":
        return TrendingUp;
      case "Pensiun":
        return PiggyBank;
      case "Asuransi":
        return Shield;
      default:
        return BookOpen;
    }
  };

  const CategoryIcon = getCategoryIcon(artikel.category);

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-secondary py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Link
              href="/edukasi"
              className="inline-flex items-center gap-2 text-white/70 hover:text-white mb-6 transition-colors"
            >
              <ArrowLeft size={18} />
              Kembali ke Edukasi
            </Link>

            <div className="flex items-center gap-3 mb-4">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 text-white rounded-full text-sm font-medium">
                <CategoryIcon size={16} />
                {artikel.category}
              </span>
              <span className="text-white/60 flex items-center gap-1">
                <Clock size={14} />
                {artikel.readTime}
              </span>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white font-heading mb-6">
              {artikel.title}
            </h1>

            <p className="text-xl text-white/80 mb-8">{artikel.excerpt}</p>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                <User className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-white font-semibold">{artikel.author}</p>
                <p className="text-white/60 text-sm">{artikel.authorRole}</p>
              </div>
              <div className="ml-auto text-white/60 flex items-center gap-2">
                <Calendar size={16} />
                {artikel.date}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-4 gap-12">
            {/* Main Content */}
            <motion.article
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="lg:col-span-3 prose prose-lg max-w-none"
            >
              <div
                className="text-text/80 leading-relaxed"
                dangerouslySetInnerHTML={{
                  __html: artikel.content
                    .replace(/## (.*)/g, '<h2 class="text-2xl font-bold text-text mt-8 mb-4 font-heading">$1</h2>')
                    .replace(/### (.*)/g, '<h3 class="text-xl font-bold text-text mt-6 mb-3 font-heading">$1</h3>')
                    .replace(/\*\*(.*?)\*\*/g, '<strong class="text-text font-semibold">$1</strong>')
                    .replace(/- (.*)/g, '<li class="ml-4 mb-2">$1</li>')
                    .replace(/\n\n/g, '</p><p class="mb-4">')
                    .replace(/\|(.+)\|/g, (match) => {
                      return `<div class="overflow-x-auto my-4"><table class="min-w-full border border-gray-200 rounded-lg">${match}</table></div>`;
                    })
                }}
              />

              {/* Topics */}
              <div className="mt-12 pt-8 border-t">
                <h4 className="font-semibold text-text mb-4">Topik Terkait:</h4>
                <div className="flex flex-wrap gap-2">
                  {artikel.relatedTopics.map((topic, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              </div>

              {/* Share */}
              <div className="mt-8 pt-8 border-t">
                <h4 className="font-semibold text-text mb-4 flex items-center gap-2">
                  <Share2 size={18} />
                  Bagikan Artikel
                </h4>
                <div className="flex gap-4">
                  <button className="w-10 h-10 bg-blue-600 text-white rounded-lg flex items-center justify-center hover:bg-blue-700 transition-colors">
                    <Facebook size={20} />
                  </button>
                  <button className="w-10 h-10 bg-sky-500 text-white rounded-lg flex items-center justify-center hover:bg-sky-600 transition-colors">
                    <Twitter size={20} />
                  </button>
                  <button className="w-10 h-10 bg-blue-700 text-white rounded-lg flex items-center justify-center hover:bg-blue-800 transition-colors">
                    <Linkedin size={20} />
                  </button>
                  <button className="w-10 h-10 bg-gray-600 text-white rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors">
                    <Copy size={20} />
                  </button>
                </div>
              </div>
            </motion.article>

            {/* Sidebar */}
            <motion.aside
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="lg:col-span-1"
            >
              <div className="sticky top-28 space-y-8">
                {/* CTA */}
                <div className="bg-primary rounded-2xl p-6 text-white">
                  <h4 className="font-bold text-lg mb-2">Butuh Konsultasi?</h4>
                  <p className="text-white/80 text-sm mb-4">
                    Diskusikan kebutuhan finansial Anda dengan advisor kami.
                  </p>
                  <Link
                    href="/konsultasi"
                    className="block w-full py-3 bg-accent text-center font-semibold rounded-xl hover:bg-accent/90 transition-colors"
                  >
                    Konsultasi Gratis
                  </Link>
                </div>

                {/* Related Articles */}
                <div className="bg-background rounded-2xl p-6">
                  <h4 className="font-bold text-text mb-4">Artikel Lainnya</h4>
                  <div className="space-y-4">
                    {relatedArticles
                      .filter((a) => a.slug !== slug)
                      .slice(0, 3)
                      .map((article, index) => (
                        <Link
                          key={index}
                          href={`/edukasi/${article.slug}`}
                          className="block group"
                        >
                          <span className="text-xs text-accent font-medium">{article.category}</span>
                          <h5 className="text-sm font-semibold text-text group-hover:text-primary transition-colors">
                            {article.title}
                          </h5>
                        </Link>
                      ))}
                  </div>
                </div>
              </div>
            </motion.aside>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 md:p-12 shadow-lg text-center"
          >
            <CheckCircle className="w-16 h-16 text-primary mx-auto mb-6" />
            <h2 className="text-2xl md:text-3xl font-bold text-text font-heading mb-4">
              Ingin Mengaplikasikan Ilmu Ini?
            </h2>
            <p className="text-text/70 mb-8 max-w-xl mx-auto">
              Tim advisor kami siap membantu Anda menerapkan strategi yang tepat
              sesuai dengan kondisi dan tujuan finansial Anda.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/konsultasi"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent text-white font-semibold rounded-xl hover:bg-accent/90 transition-colors"
              >
                Jadwalkan Konsultasi
                <ArrowRight size={20} />
              </Link>
              <Link
                href="/kalkulator"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary/10 text-primary font-semibold rounded-xl hover:bg-primary hover:text-white transition-colors"
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
