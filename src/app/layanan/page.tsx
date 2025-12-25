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
  Users,
  Clock,
  Award,
  HeartHandshake,
  BarChart3,
  Lightbulb,
  MessageCircle,
  FileCheck,
  RefreshCw,
  ChevronDown,
  ChevronUp,
  Briefcase,
  Home,
  GraduationCap,
  Plane,
  Building2,
} from "lucide-react";
import { useState } from "react";

const layananData = [
  {
    id: "financial-planning",
    icon: Target,
    title: "Financial Planning",
    subtitle: "Perencanaan Keuangan Komprehensif",
    description: "Layanan perencanaan keuangan menyeluruh yang mencakup analisis kondisi keuangan Anda saat ini, penetapan tujuan finansial, dan pembuatan strategi untuk mencapainya.",
    longDescription: "Financial Planning adalah fondasi dari semua keputusan keuangan Anda. Kami akan membantu Anda memetakan kondisi keuangan saat ini, mengidentifikasi gap antara kondisi saat ini dengan tujuan yang ingin dicapai, dan menyusun roadmap yang jelas untuk mencapai tujuan tersebut. Proses ini mencakup analisis menyeluruh terhadap income, expenses, assets, liabilities, dan proyeksi masa depan.",
    features: [
      "Analisis cash flow dan net worth secara mendetail",
      "Penetapan tujuan finansial dengan metode SMART",
      "Perencanaan anggaran bulanan yang realistis",
      "Strategi pengelolaan dan pelunasan utang",
      "Pembangunan dana darurat yang optimal",
      "Review berkala setiap 3 bulan",
    ],
    benefits: [
      "Kejelasan arah keuangan Anda",
      "Kontrol penuh atas cash flow",
      "Persiapan untuk berbagai skenario",
      "Mencapai tujuan lebih cepat",
    ],
    color: "bg-blue-500",
    bgColor: "bg-blue-50",
    idealFor: ["Keluarga muda", "Profesional", "Pengusaha", "Siapapun yang ingin kontrol keuangan"],
  },
  {
    id: "investment",
    icon: TrendingUp,
    title: "Investment Advisory",
    subtitle: "Rekomendasi Investasi Personal",
    description: "Layanan advisory investasi yang disesuaikan dengan profil risiko, tujuan finansial, dan horizon waktu Anda. Kami membantu memilih instrumen investasi yang tepat.",
    longDescription: "Investment Advisory kami bukan sekadar memberikan rekomendasi produk, tetapi membangun strategi investasi yang holistik. Dimulai dari profiling risiko yang mendalam, kami akan menyusun portfolio yang sesuai dengan karakter dan tujuan Anda. Kami memantau perkembangan portfolio secara berkala dan melakukan rebalancing ketika diperlukan.",
    features: [
      "Profiling risiko investasi komprehensif",
      "Rekomendasi alokasi aset strategis",
      "Analisis mendalam reksa dana & saham",
      "Diversifikasi portfolio multi-asset",
      "Monitoring portfolio mingguan",
      "Rebalancing berkala setiap kuartal",
    ],
    benefits: [
      "Portfolio sesuai profil risiko",
      "Return optimal untuk risiko yang diambil",
      "Diversifikasi yang tepat",
      "Monitoring profesional",
    ],
    color: "bg-green-500",
    bgColor: "bg-green-50",
    idealFor: ["Investor pemula", "Investor berpengalaman", "High net worth individuals"],
  },
  {
    id: "retirement",
    icon: PiggyBank,
    title: "Retirement Planning",
    subtitle: "Persiapan Dana Pensiun",
    description: "Layanan perencanaan pensiun yang membantu Anda menghitung kebutuhan dana pensiun dan strategi untuk mencapainya, agar masa tua Anda tetap nyaman.",
    longDescription: "Pensiun bukan akhir dari segalanya, tetapi awal dari fase kehidupan baru. Retirement Planning kami memastikan Anda memiliki dana yang cukup untuk menjalani masa pensiun dengan nyaman tanpa khawatir kehabisan uang. Kami memperhitungkan inflasi, healthcare costs, lifestyle yang diinginkan, dan berbagai variabel lainnya.",
    features: [
      "Perhitungan kebutuhan dana pensiun akurat",
      "Analisis semua sumber pendapatan pensiun",
      "Strategi investasi khusus pensiun",
      "Optimalisasi BPJS & dana pensiun perusahaan",
      "Perencanaan healthcare cost masa tua",
      "Simulasi berbagai skenario pensiun",
    ],
    benefits: [
      "Pensiun tanpa khawatir finansial",
      "Gaya hidup tetap terjaga",
      "Healthcare cost tercukupi",
      "Legacy untuk keluarga",
    ],
    color: "bg-purple-500",
    bgColor: "bg-purple-50",
    idealFor: ["Usia 30-50 tahun", "Mendekati pensiun", "Early retirement planner"],
  },
  {
    id: "tax",
    icon: Calculator,
    title: "Tax Planning",
    subtitle: "Optimalisasi Pajak",
    description: "Layanan perencanaan pajak yang membantu Anda mengoptimalkan kewajiban pajak secara legal, sehingga dapat memaksimalkan kekayaan yang Anda miliki.",
    longDescription: "Tax Planning bukan tentang menghindari pajak, tetapi mengoptimalkan kewajiban pajak secara legal dan efisien. Kami membantu Anda memahami peraturan perpajakan yang berlaku, memanfaatkan berbagai insentif pajak, dan menyusun strategi untuk meminimalkan beban pajak sambil tetap patuh pada regulasi.",
    features: [
      "Review komprehensif kewajiban pajak",
      "Strategi pengurangan pajak yang legal",
      "Pemanfaatan maksimal insentif pajak",
      "Perencanaan pajak untuk investasi",
      "Konsultasi update peraturan perpajakan",
      "Pendampingan pelaporan SPT",
    ],
    benefits: [
      "Bayar pajak sesuai kewajiban",
      "Maksimalkan penghasilan bersih",
      "Hindari denda dan sanksi",
      "Kepatuhan pajak terjamin",
    ],
    color: "bg-orange-500",
    bgColor: "bg-orange-50",
    idealFor: ["Karyawan", "Profesional", "Pengusaha", "Investor"],
  },
  {
    id: "insurance",
    icon: Shield,
    title: "Insurance Review",
    subtitle: "Analisis Kebutuhan Asuransi",
    description: "Layanan review asuransi yang membantu menganalisis kebutuhan proteksi Anda dan keluarga, serta memastikan coverage yang optimal dengan premi yang efisien.",
    longDescription: "Asuransi adalah komponen penting dalam financial planning, tetapi seringkali orang membeli asuransi yang tidak sesuai kebutuhan. Insurance Review kami akan menganalisis kebutuhan proteksi Anda yang sesungguhnya, mereview polis yang sudah dimiliki, dan memberikan rekomendasi untuk coverage yang optimal dengan premi yang efisien.",
    features: [
      "Analisis kebutuhan proteksi keluarga",
      "Review menyeluruh polis existing",
      "Rekomendasi jenis & jumlah coverage",
      "Perbandingan objektif produk asuransi",
      "Evaluasi klaim dan manfaat polis",
      "Strategi optimalisasi premi",
    ],
    benefits: [
      "Proteksi sesuai kebutuhan",
      "Tidak over-insured atau under-insured",
      "Premi efisien",
      "Klaim lancar saat dibutuhkan",
    ],
    color: "bg-red-500",
    bgColor: "bg-red-50",
    idealFor: ["Pencari nafkah utama", "Keluarga dengan tanggungan", "Pemilik bisnis"],
  },
  {
    id: "estate",
    icon: FileText,
    title: "Estate Planning",
    subtitle: "Perencanaan Warisan",
    description: "Layanan perencanaan warisan yang membantu memastikan aset Anda terdistribusi sesuai keinginan, dengan mempertimbangkan aspek legal dan pajak.",
    longDescription: "Estate Planning memastikan kekayaan yang sudah Anda bangun dapat diteruskan ke generasi berikutnya sesuai keinginan Anda, dengan cara yang paling efisien dari sisi pajak dan legal. Kami membantu menyusun strategi transfer kekayaan, perencanaan wasiat, dan koordinasi dengan profesional hukum.",
    features: [
      "Inventarisasi lengkap aset dan utang",
      "Strategi transfer kekayaan efisien",
      "Perencanaan wasiat dan hibah",
      "Minimalisasi pajak warisan",
      "Koordinasi dengan notaris/lawyer",
      "Family governance planning",
    ],
    benefits: [
      "Aset terdistribusi sesuai keinginan",
      "Minimalisasi konflik keluarga",
      "Efisiensi pajak warisan",
      "Legacy terjaga",
    ],
    color: "bg-teal-500",
    bgColor: "bg-teal-50",
    idealFor: ["High net worth individuals", "Pemilik bisnis keluarga", "Usia 50+"],
  },
];

const processSteps = [
  {
    step: 1,
    icon: MessageCircle,
    title: "Konsultasi Awal",
    description: "Diskusi untuk memahami kondisi keuangan, tujuan, dan kekhawatiran Anda saat ini.",
  },
  {
    step: 2,
    icon: FileCheck,
    title: "Pengumpulan Data",
    description: "Mengumpulkan data keuangan lengkap untuk analisis yang komprehensif.",
  },
  {
    step: 3,
    icon: BarChart3,
    title: "Analisis & Perencanaan",
    description: "Advisor kami menganalisis data dan menyusun rencana keuangan personal.",
  },
  {
    step: 4,
    icon: Lightbulb,
    title: "Presentasi Rencana",
    description: "Mempresentasikan rencana keuangan beserta rekomendasi yang actionable.",
  },
  {
    step: 5,
    icon: Target,
    title: "Implementasi",
    description: "Membantu mengimplementasikan rencana dengan langkah-langkah konkret.",
  },
  {
    step: 6,
    icon: RefreshCw,
    title: "Review Berkala",
    description: "Monitoring dan penyesuaian rencana secara berkala sesuai perkembangan.",
  },
];

const whyChooseUs = [
  {
    icon: Award,
    title: "Advisor Bersertifikat",
    description: "Tim kami terdiri dari CFP dan RFP certified dengan pengalaman puluhan tahun.",
  },
  {
    icon: HeartHandshake,
    title: "Fee-Based Advisory",
    description: "Kami dibayar oleh klien, bukan komisi produk, sehingga rekomendasi kami objektif.",
  },
  {
    icon: Users,
    title: "Pendekatan Personal",
    description: "Setiap klien unik, kami menyusun rencana yang sesuai dengan situasi Anda.",
  },
  {
    icon: Clock,
    title: "Support Berkelanjutan",
    description: "Kami tidak hanya membuat rencana, tetapi mendampingi Anda dalam perjalanan.",
  },
];

const packages = [
  {
    name: "Essential",
    description: "Untuk individu yang baru memulai perencanaan keuangan",
    price: "Rp 2.500.000",
    period: "/one-time",
    features: [
      "Konsultasi awal 60 menit",
      "Analisis cash flow",
      "Financial health check",
      "Rekomendasi dasar",
      "1x follow-up session",
    ],
    popular: false,
  },
  {
    name: "Professional",
    description: "Untuk profesional yang ingin perencanaan komprehensif",
    price: "Rp 7.500.000",
    period: "/tahun",
    features: [
      "Semua fitur Essential",
      "Financial plan lengkap",
      "Investment advisory",
      "Insurance review",
      "Quarterly review (4x/tahun)",
      "Priority support",
    ],
    popular: true,
  },
  {
    name: "Premium",
    description: "Untuk keluarga atau high net worth individuals",
    price: "Rp 15.000.000",
    period: "/tahun",
    features: [
      "Semua fitur Professional",
      "Estate planning",
      "Tax planning",
      "Monthly review (12x/tahun)",
      "Family financial planning",
      "Dedicated advisor",
      "24/7 priority access",
    ],
    popular: false,
  },
];

const faqs = [
  {
    question: "Berapa biaya konsultasi pertama?",
    answer: "Konsultasi pertama kami sediakan gratis selama 30 menit untuk mengenal kebutuhan Anda. Setelah itu, Anda bisa memilih paket layanan yang sesuai dengan kebutuhan.",
  },
  {
    question: "Apakah data keuangan saya aman?",
    answer: "Sangat aman. Kami menerapkan standar keamanan data yang ketat dan semua informasi klien dijaga kerahasiaannya sesuai kode etik profesi financial planner.",
  },
  {
    question: "Bagaimana cara kerja fee-based advisory?",
    answer: "Kami dibayar langsung oleh klien melalui fee konsultasi, bukan dari komisi produk keuangan. Ini memastikan rekomendasi kami 100% objektif dan sesuai kepentingan Anda.",
  },
  {
    question: "Apakah saya wajib mengikuti semua rekomendasi?",
    answer: "Tidak wajib. Kami memberikan rekomendasi berdasarkan analisis profesional, tetapi keputusan akhir tetap di tangan Anda. Kami akan menjelaskan pro-cons setiap pilihan.",
  },
  {
    question: "Berapa lama proses perencanaan keuangan?",
    answer: "Proses awal hingga mendapatkan financial plan lengkap biasanya membutuhkan 2-4 minggu. Setelah itu, kami akan melakukan review berkala sesuai paket yang dipilih.",
  },
  {
    question: "Apakah bisa konsultasi online?",
    answer: "Ya, kami menyediakan opsi konsultasi online via Zoom atau Google Meet untuk kenyamanan Anda. Kualitas layanan tetap sama dengan tatap muka.",
  },
];

const lifeGoals = [
  { icon: Home, title: "Beli Rumah", desc: "Wujudkan rumah impian" },
  { icon: GraduationCap, title: "Dana Pendidikan", desc: "Persiapan pendidikan anak" },
  { icon: Plane, title: "Liburan Impian", desc: "Traveling tanpa khawatir" },
  { icon: PiggyBank, title: "Pensiun Nyaman", desc: "Masa tua sejahtera" },
  { icon: Building2, title: "Memulai Bisnis", desc: "Modal usaha sendiri" },
  { icon: Briefcase, title: "Bebas Finansial", desc: "Passive income cukup" },
];

export default function LayananPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

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
              Solusi Keuangan Lengkap
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading mb-6">
              Layanan Perencanaan Keuangan
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto mb-8">
              Dari perencanaan keuangan dasar hingga wealth management kompleks,
              kami siap membantu Anda mencapai setiap tujuan finansial
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/konsultasi"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent text-white font-semibold rounded-xl hover:bg-accent/90 transition-colors shadow-lg"
              >
                Konsultasi Gratis
                <ArrowRight size={20} />
              </Link>
              <Link
                href="/kalkulator"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 text-white font-semibold rounded-xl hover:bg-white/20 transition-colors"
              >
                <Calculator size={20} />
                Coba Kalkulator
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Life Goals Section */}
      <section className="py-16 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-text font-heading">
              Apa Tujuan Finansial Anda?
            </h2>
            <p className="text-text/70 mt-2">Kami bantu wujudkan setiap impian Anda</p>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {lifeGoals.map((goal, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="text-center p-6 bg-background rounded-2xl hover:shadow-lg transition-all cursor-pointer group"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                  <goal.icon className="w-7 h-7 text-primary group-hover:text-white" />
                </div>
                <h3 className="font-semibold text-text">{goal.title}</h3>
                <p className="text-sm text-text/60 mt-1">{goal.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
              6 Layanan Utama
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-text font-heading">
              Solusi Lengkap untuk Setiap Kebutuhan
            </h2>
          </motion.div>

          <div className="space-y-24">
            {layananData.map((layanan, index) => (
              <motion.div
                key={layanan.id}
                id={layanan.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className={`grid lg:grid-cols-2 gap-12 items-start ${
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
                  <p className="text-text/70 text-lg mb-4">{layanan.description}</p>
                  <p className="text-text/60 mb-6">{layanan.longDescription}</p>

                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div>
                      <h4 className="font-semibold text-text mb-3">Yang Kami Lakukan:</h4>
                      <ul className="space-y-2">
                        {layanan.features.map((feature, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm">
                            <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                            <span className="text-text/80">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-text mb-3">Manfaat untuk Anda:</h4>
                      <ul className="space-y-2">
                        {layanan.benefits.map((benefit, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm">
                            <CheckCircle className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                            <span className="text-text/80">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-text mb-3">Ideal untuk:</h4>
                    <div className="flex flex-wrap gap-2">
                      {layanan.idealFor.map((item, i) => (
                        <span key={i} className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  <Link
                    href="/konsultasi"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-semibold rounded-xl hover:bg-secondary transition-colors"
                  >
                    Konsultasi {layanan.title}
                    <ArrowRight size={18} />
                  </Link>
                </div>
                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <div className={`${layanan.bgColor} rounded-3xl p-8 sticky top-28`}>
                    <div className="flex items-center justify-center mb-8">
                      <div className={`w-32 h-32 ${layanan.color} rounded-2xl flex items-center justify-center shadow-xl`}>
                        <layanan.icon className="w-16 h-16 text-white" />
                      </div>
                    </div>
                    <div className="bg-white rounded-2xl p-6 space-y-4">
                      <h4 className="font-semibold text-text">Apa yang Anda Dapatkan:</h4>
                      <ul className="space-y-3">
                        <li className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                            <CheckCircle className="w-4 h-4 text-green-600" />
                          </div>
                          <span className="text-sm text-text/80">Konsultasi dengan advisor bersertifikat</span>
                        </li>
                        <li className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                            <CheckCircle className="w-4 h-4 text-green-600" />
                          </div>
                          <span className="text-sm text-text/80">Dokumen rencana keuangan tertulis</span>
                        </li>
                        <li className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                            <CheckCircle className="w-4 h-4 text-green-600" />
                          </div>
                          <span className="text-sm text-text/80">Follow-up dan review berkala</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
              Proses Kerja
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-text font-heading">
              Bagaimana Kami Bekerja
            </h2>
            <p className="text-text/70 mt-4 max-w-2xl mx-auto">
              Proses terstruktur untuk memastikan Anda mendapatkan perencanaan keuangan terbaik
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                <div className="bg-background rounded-2xl p-8 h-full">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-primary text-white rounded-xl flex items-center justify-center font-bold text-lg">
                      {step.step}
                    </div>
                    <step.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-text font-heading mb-2">{step.title}</h3>
                  <p className="text-text/70">{step.description}</p>
                </div>
                {index < processSteps.length - 1 && index !== 2 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-primary/30" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 bg-white/20 text-white rounded-full text-sm font-medium mb-4">
              Mengapa Kami
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white font-heading">
              Keunggulan Finansial Sejahtera
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur rounded-2xl p-8 text-center"
              >
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <item.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-white font-heading mb-2">{item.title}</h3>
                <p className="text-white/70">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Packages */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
              Paket Layanan
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-text font-heading">
              Pilih Paket yang Sesuai
            </h2>
            <p className="text-text/70 mt-4 max-w-2xl mx-auto">
              Berbagai pilihan paket untuk berbagai kebutuhan dan budget
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`relative bg-white rounded-2xl p-8 ${
                  pkg.popular ? "ring-2 ring-accent shadow-xl" : "shadow-lg"
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-accent text-white text-sm font-medium rounded-full">
                    Paling Populer
                  </div>
                )}
                <h3 className="text-2xl font-bold text-text font-heading">{pkg.name}</h3>
                <p className="text-text/60 mt-2 mb-6">{pkg.description}</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-primary">{pkg.price}</span>
                  <span className="text-text/60">{pkg.period}</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-text/80">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/konsultasi"
                  className={`block w-full py-3 text-center font-semibold rounded-xl transition-colors ${
                    pkg.popular
                      ? "bg-accent text-white hover:bg-accent/90"
                      : "bg-primary/10 text-primary hover:bg-primary hover:text-white"
                  }`}
                >
                  Pilih Paket
                </Link>
              </motion.div>
            ))}
          </div>

          <p className="text-center text-text/60 mt-8">
            * Harga belum termasuk PPN 11%. Hubungi kami untuk paket custom sesuai kebutuhan Anda.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
              FAQ
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-text font-heading">
              Pertanyaan yang Sering Ditanyakan
            </h2>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="border border-gray-200 rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-6 py-4 flex items-center justify-between text-left bg-white hover:bg-gray-50 transition-colors"
                >
                  <span className="font-semibold text-text">{faq.question}</span>
                  {openFaq === index ? (
                    <ChevronUp className="w-5 h-5 text-primary" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-text/40" />
                  )}
                </button>
                {openFaq === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    className="px-6 pb-4"
                  >
                    <p className="text-text/70">{faq.answer}</p>
                  </motion.div>
                )}
              </motion.div>
            ))}
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
              Siap Memulai Perjalanan Finansial Anda?
            </h2>
            <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
              Jadwalkan konsultasi gratis dengan advisor kami dan dapatkan roadmap
              untuk mencapai tujuan finansial Anda.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/konsultasi"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent text-white font-semibold rounded-xl hover:bg-accent/90 transition-colors shadow-lg"
              >
                Jadwalkan Konsultasi Gratis
                <ArrowRight size={20} />
              </Link>
              <a
                href="tel:+622112345678"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 text-white font-semibold rounded-xl hover:bg-white/20 transition-colors"
              >
                <Phone size={20} />
                (021) 1234-5678
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
