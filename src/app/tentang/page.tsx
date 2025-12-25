"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Target,
  Eye,
  Heart,
  Shield,
  Users,
  Award,
  TrendingUp,
  CheckCircle,
  ArrowRight,
  Calendar,
  Building2,
  Lightbulb,
  HandHeart,
  Phone,
  MapPin,
} from "lucide-react";

const milestones = [
  { year: "2010", title: "Pendirian", description: "Finansial Sejahtera didirikan oleh Bapak Andi Wijaya dengan visi membantu keluarga Indonesia mencapai kebebasan finansial." },
  { year: "2013", title: "100 Klien Pertama", description: "Berhasil membantu 100 keluarga Indonesia dengan perencanaan keuangan komprehensif." },
  { year: "2016", title: "Ekspansi Tim", description: "Tim advisor berkembang menjadi 5 orang dengan berbagai spesialisasi." },
  { year: "2018", title: "Rp 100M AUA", description: "Asset Under Advisory mencapai Rp 100 miliar." },
  { year: "2021", title: "Digital Transformation", description: "Meluncurkan layanan konsultasi online untuk menjangkau klien di seluruh Indonesia." },
  { year: "2024", title: "500+ Klien", description: "Telah membantu lebih dari 500 keluarga dengan total AUA Rp 200M+." },
];

const values = [
  {
    icon: Heart,
    title: "Client First",
    description: "Setiap keputusan dan rekomendasi kami berdasarkan kepentingan terbaik klien, bukan komisi atau keuntungan kami.",
  },
  {
    icon: Shield,
    title: "Integritas",
    description: "Kejujuran dan transparansi adalah fondasi hubungan kami dengan klien. Kami mengatakan apa adanya, bukan apa yang ingin didengar.",
  },
  {
    icon: Lightbulb,
    title: "Expertise",
    description: "Tim kami terus belajar dan berkembang mengikuti perkembangan industri keuangan untuk memberikan advice terbaik.",
  },
  {
    icon: HandHeart,
    title: "Empati",
    description: "Kami memahami bahwa setiap klien memiliki situasi unik dan membutuhkan pendekatan yang personal.",
  },
];

const stats = [
  { number: "500+", label: "Klien Terbantu" },
  { number: "Rp 200M+", label: "Asset Under Advisory" },
  { number: "65+", label: "Tahun Pengalaman Gabungan" },
  { number: "98%", label: "Client Satisfaction" },
];

const partners = [
  "Asosiasi Financial Planner Indonesia",
  "Financial Planning Standards Board",
  "Ikatan Konsultan Pajak Indonesia",
  "Asosiasi Asuransi Jiwa Indonesia",
];

export default function TentangPage() {
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
              Tentang Kami
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading mb-6">
              Partner Menuju Kebebasan Finansial
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Sejak 2010, kami telah membantu ratusan keluarga Indonesia merencanakan
              dan mencapai tujuan finansial mereka melalui perencanaan yang tepat.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <p className="text-4xl md:text-5xl font-bold text-primary">{stat.number}</p>
                <p className="text-text/60 mt-2">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
                Cerita Kami
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-text font-heading mb-6">
                Dari Passion Menjadi Misi
              </h2>
              <div className="space-y-4 text-text/70">
                <p>
                  Finansial Sejahtera didirikan pada tahun 2010 oleh Bapak Andi Wijaya, CFP,
                  seorang profesional perbankan yang melihat kesenjangan besar dalam
                  literasi keuangan masyarakat Indonesia.
                </p>
                <p>
                  Setelah 15 tahun bekerja di industri perbankan, beliau menyadari bahwa
                  banyak keluarga Indonesia yang tidak memiliki akses ke perencanaan
                  keuangan yang profesional dan objektif.
                </p>
                <p>
                  Dengan visi &ldquo;Membantu setiap keluarga Indonesia mencapai kebebasan
                  finansial&rdquo;, Finansial Sejahtera lahir sebagai independent financial
                  advisory yang memprioritaskan kepentingan klien di atas segalanya.
                </p>
                <p>
                  Kini, dengan tim yang terdiri dari 5+ advisor bersertifikat dan
                  pengalaman gabungan lebih dari 65 tahun, kami telah membantu 500+
                  keluarga mencapai berbagai tujuan finansial mereka.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-primary to-secondary rounded-3xl p-8 text-white">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center">
                    <Building2 className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold font-heading">Finansial Sejahtera</h3>
                    <p className="text-white/70">Est. 2010</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                    <p>Fee-based advisory - rekomendasi objektif tanpa conflict of interest</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                    <p>Tim bersertifikat CFP & RFP dengan pengalaman puluhan tahun</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                    <p>Terdaftar di OJK sebagai penasihat keuangan</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                    <p>Pendekatan holistik untuk perencanaan keuangan</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-primary rounded-2xl p-8 text-white"
            >
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6">
                <Eye className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold font-heading mb-4">Visi</h3>
              <p className="text-white/80 text-lg">
                Menjadi mitra terpercaya bagi setiap keluarga Indonesia dalam
                perjalanan menuju kebebasan finansial, di mana setiap orang memiliki
                kendali penuh atas keuangan dan masa depan mereka.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-secondary rounded-2xl p-8 text-white"
            >
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6">
                <Target className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold font-heading mb-4">Misi</h3>
              <ul className="space-y-3 text-white/80">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                  Memberikan advice keuangan yang objektif dan sesuai kebutuhan klien
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                  Meningkatkan literasi keuangan masyarakat Indonesia
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                  Membangun hubungan jangka panjang berbasis kepercayaan
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                  Terus berkembang mengikuti dinamika industri keuangan
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
              Nilai-Nilai Kami
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-text font-heading">
              Prinsip yang Kami Pegang Teguh
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                  <value.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-text font-heading mb-3">{value.title}</h3>
                <p className="text-text/70">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
              Perjalanan Kami
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-text font-heading">
              Milestone Penting
            </h2>
          </motion.div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-primary/20" />
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? "justify-start" : "justify-end"
                  }`}
                >
                  <div
                    className={`w-5/12 ${index % 2 === 0 ? "text-right pr-8" : "text-left pl-8"}`}
                  >
                    <div className="bg-background rounded-xl p-6">
                      <span className="text-accent font-bold text-lg">{milestone.year}</span>
                      <h4 className="text-xl font-bold text-text font-heading mt-1">
                        {milestone.title}
                      </h4>
                      <p className="text-text/70 mt-2">{milestone.description}</p>
                    </div>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-white" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Affiliations */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
              Afiliasi & Keanggotaan
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-text font-heading">
              Tergabung dalam Organisasi Profesional
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {partners.map((partner, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 text-center shadow-lg"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-primary" />
                </div>
                <p className="text-text font-medium">{partner}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Office Location */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
                Kantor Kami
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-text font-heading mb-6">
                Kunjungi Kami
              </h2>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-text">Alamat</h4>
                    <p className="text-text/70">
                      Jl. Sudirman No. 123, Lantai 15<br />
                      Jakarta Selatan 12190
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-text">Telepon</h4>
                    <p className="text-text/70">(021) 1234-5678</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Calendar className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-text">Jam Operasional</h4>
                    <p className="text-text/70">
                      Senin - Jumat: 09:00 - 17:00<br />
                      Sabtu: 09:00 - 13:00
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-3xl h-80 flex items-center justify-center"
            >
              <div className="text-center">
                <MapPin className="w-16 h-16 text-primary mx-auto mb-4" />
                <p className="text-text font-medium">Jakarta Selatan</p>
                <Link
                  href="/kontak"
                  className="inline-flex items-center gap-2 mt-4 px-6 py-3 bg-primary text-white font-medium rounded-xl hover:bg-secondary transition-colors"
                >
                  Lihat Lokasi
                  <ArrowRight size={18} />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-primary to-secondary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white font-heading mb-6">
              Mulai Perjalanan Finansial Anda Bersama Kami
            </h2>
            <p className="text-white/80 text-lg mb-8">
              Jadwalkan konsultasi gratis dan temukan bagaimana kami dapat membantu
              Anda mencapai tujuan finansial.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/konsultasi"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent text-white font-semibold rounded-xl hover:bg-accent/90 transition-colors shadow-lg"
              >
                Jadwalkan Konsultasi
                <ArrowRight size={20} />
              </Link>
              <Link
                href="/tim"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 text-white font-semibold rounded-xl hover:bg-white/20 transition-colors"
              >
                <Users size={20} />
                Kenali Tim Kami
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
