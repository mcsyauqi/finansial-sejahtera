"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Target,
  TrendingUp,
  PiggyBank,
  Calculator,
  Shield,
  FileText,
  CheckCircle,
  ArrowRight,
  Phone,
} from "lucide-react";

const layananData = [
  {
    id: "financial-planning",
    icon: Target,
    title: "Financial Planning",
    subtitle: "Perencanaan Keuangan Komprehensif",
    description: "Layanan perencanaan keuangan menyeluruh yang mencakup analisis kondisi keuangan Anda saat ini, penetapan tujuan finansial, dan pembuatan strategi untuk mencapainya.",
    features: [
      "Analisis cash flow dan net worth",
      "Penetapan tujuan finansial SMART",
      "Perencanaan anggaran bulanan",
      "Strategi pengelolaan utang",
      "Review berkala dan penyesuaian rencana",
    ],
    color: "bg-blue-500",
    bgColor: "bg-blue-50",
  },
  {
    id: "investment",
    icon: TrendingUp,
    title: "Investment Advisory",
    subtitle: "Rekomendasi Investasi Personal",
    description: "Layanan advisory investasi yang disesuaikan dengan profil risiko, tujuan finansial, dan horizon waktu Anda. Kami membantu memilih instrumen investasi yang tepat.",
    features: [
      "Profiling risiko investasi",
      "Rekomendasi alokasi aset",
      "Analisis reksa dana & saham",
      "Diversifikasi portfolio",
      "Monitoring dan rebalancing",
    ],
    color: "bg-green-500",
    bgColor: "bg-green-50",
  },
  {
    id: "retirement",
    icon: PiggyBank,
    title: "Retirement Planning",
    subtitle: "Persiapan Dana Pensiun",
    description: "Layanan perencanaan pensiun yang membantu Anda menghitung kebutuhan dana pensiun dan strategi untuk mencapainya, agar masa tua Anda tetap nyaman.",
    features: [
      "Perhitungan kebutuhan dana pensiun",
      "Analisis sumber pendapatan pensiun",
      "Strategi investasi untuk pensiun",
      "Optimalisasi BPJS & dana pensiun",
      "Perencanaan gaya hidup pensiun",
    ],
    color: "bg-purple-500",
    bgColor: "bg-purple-50",
  },
  {
    id: "tax",
    icon: Calculator,
    title: "Tax Planning",
    subtitle: "Optimalisasi Pajak",
    description: "Layanan perencanaan pajak yang membantu Anda mengoptimalkan kewajiban pajak secara legal, sehingga dapat memaksimalkan kekayaan yang Anda miliki.",
    features: [
      "Review kewajiban pajak tahunan",
      "Strategi pengurangan pajak legal",
      "Pemanfaatan insentif pajak",
      "Perencanaan pajak investasi",
      "Konsultasi peraturan perpajakan",
    ],
    color: "bg-orange-500",
    bgColor: "bg-orange-50",
  },
  {
    id: "insurance",
    icon: Shield,
    title: "Insurance Review",
    subtitle: "Analisis Kebutuhan Asuransi",
    description: "Layanan review asuransi yang membantu menganalisis kebutuhan proteksi Anda dan keluarga, serta memastikan coverage yang optimal dengan premi yang efisien.",
    features: [
      "Analisis kebutuhan proteksi",
      "Review polis asuransi existing",
      "Rekomendasi jenis & jumlah coverage",
      "Perbandingan produk asuransi",
      "Evaluasi klaim dan manfaat",
    ],
    color: "bg-red-500",
    bgColor: "bg-red-50",
  },
  {
    id: "estate",
    icon: FileText,
    title: "Estate Planning",
    subtitle: "Perencanaan Warisan",
    description: "Layanan perencanaan warisan yang membantu memastikan aset Anda terdistribusi sesuai keinginan, dengan mempertimbangkan aspek legal dan pajak.",
    features: [
      "Inventarisasi aset dan utang",
      "Strategi transfer kekayaan",
      "Perencanaan wasiat dan hibah",
      "Minimalisasi pajak warisan",
      "Koordinasi dengan notaris/lawyer",
    ],
    color: "bg-teal-500",
    bgColor: "bg-teal-50",
  },
];

export default function LayananPage() {
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
              Layanan Kami
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Solusi perencanaan keuangan lengkap untuk membantu Anda mencapai kebebasan finansial
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {layananData.map((layanan, index) => (
              <motion.div
                key={layanan.id}
                id={layanan.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className={`inline-flex items-center gap-2 px-4 py-2 ${layanan.bgColor} rounded-full mb-4`}>
                    <layanan.icon className={`w-5 h-5 ${layanan.color.replace("bg-", "text-")}`} />
                    <span className={`text-sm font-medium ${layanan.color.replace("bg-", "text-")}`}>
                      {layanan.subtitle}
                    </span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-text font-heading mb-4">
                    {layanan.title}
                  </h2>
                  <p className="text-text/70 text-lg mb-6">{layanan.description}</p>
                  <ul className="space-y-3 mb-8">
                    {layanan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-text/80">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/konsultasi"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-semibold rounded-xl hover:bg-secondary transition-colors"
                  >
                    Konsultasi Sekarang
                    <ArrowRight size={18} />
                  </Link>
                </div>
                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <div className={`${layanan.bgColor} rounded-3xl p-8 h-80 flex items-center justify-center`}>
                    <div className={`w-32 h-32 ${layanan.color} rounded-2xl flex items-center justify-center shadow-xl`}>
                      <layanan.icon className="w-16 h-16 text-white" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white font-heading mb-6">
              Butuh Bantuan Memilih Layanan?
            </h2>
            <p className="text-white/80 text-lg mb-8">
              Tim advisor kami siap membantu menganalisis kebutuhan Anda dan merekomendasikan layanan yang tepat.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/konsultasi"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent text-white font-semibold rounded-xl hover:bg-accent/90 transition-colors"
              >
                Jadwalkan Konsultasi Gratis
                <ArrowRight size={20} />
              </Link>
              <a
                href="tel:+622112345678"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 text-white font-semibold rounded-xl hover:bg-white/20 transition-colors"
              >
                <Phone size={20} />
                Hubungi Kami
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
