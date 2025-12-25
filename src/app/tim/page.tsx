"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Users,
  Award,
  Briefcase,
  GraduationCap,
  ArrowRight,
  Linkedin,
  Mail,
  Star,
  Quote,
  Target,
  Heart,
  Lightbulb,
  Shield,
  TrendingUp,
  CheckCircle,
  Calendar,
  Phone,
} from "lucide-react";

const teamData = [
  {
    name: "Bapak Andi Wijaya, CFP",
    role: "Founder & Lead Advisor",
    experience: "20 tahun pengalaman",
    certifications: ["CFP (Certified Financial Planner)", "CWM (Certified Wealth Manager)"],
    education: "MBA Finance - Universitas Indonesia",
    specialization: ["Wealth Management", "Retirement Planning", "Estate Planning"],
    bio: "Bapak Andi adalah founder Finansial Sejahtera dengan pengalaman lebih dari 20 tahun di industri keuangan. Beliau memulai karir di perbankan swasta sebelum memutuskan untuk fokus pada financial advisory. Passion beliau adalah membantu keluarga Indonesia mencapai kebebasan finansial melalui perencanaan yang tepat.",
    quote: "Kebebasan finansial bukan tentang menjadi kaya, tapi tentang memiliki pilihan dalam hidup.",
    achievements: ["500+ klien terbantu", "Rp 200M+ asset under advisory", "Speaker di berbagai seminar"],
  },
  {
    name: "Ibu Ratna Dewi, CFP",
    role: "Senior Advisor",
    experience: "15 tahun pengalaman",
    certifications: ["CFP (Certified Financial Planner)", "AEPP (Associate Estate Planning Practitioner)"],
    education: "S1 Akuntansi - Universitas Gadjah Mada",
    specialization: ["Insurance Planning", "Retirement Planning", "Tax Planning"],
    bio: "Ibu Ratna adalah senior advisor dengan keahlian khusus dalam perencanaan proteksi dan pensiun. Sebelum bergabung dengan Finansial Sejahtera, beliau bekerja di perusahaan asuransi multinasional selama 10 tahun. Beliau sangat passionate dalam membantu keluarga mendapatkan proteksi yang optimal.",
    quote: "Proteksi yang tepat adalah bentuk cinta untuk keluarga.",
    achievements: ["Specialist asuransi terbaik 2022", "200+ review polis", "Trainer asuransi certified"],
  },
  {
    name: "Mas Kevin Hartono, RFP",
    role: "Investment Specialist",
    experience: "10 tahun pengalaman",
    certifications: ["RFP (Registered Financial Planner)", "WMI (Wakil Manajer Investasi)"],
    education: "S2 Finance - Prasetiya Mulya",
    specialization: ["Investment Advisory", "Portfolio Management", "Market Analysis"],
    bio: "Mas Kevin adalah investment specialist dengan track record yang solid dalam analisis pasar dan portfolio management. Beliau memiliki pengalaman bekerja di beberapa asset management company sebelum bergabung dengan Finansial Sejahtera. Keahliannya dalam analisis fundamental dan teknikal membantu klien mencapai return optimal.",
    quote: "Investasi yang baik dimulai dari pemahaman yang baik tentang diri sendiri.",
    achievements: ["Average return 15%+ per tahun", "50+ portfolio dikelola", "Contributor di media finansial"],
  },
  {
    name: "Ibu Sarah Putri, CFP",
    role: "Financial Advisor",
    experience: "8 tahun pengalaman",
    certifications: ["CFP (Certified Financial Planner)"],
    education: "S1 Manajemen - Universitas Airlangga",
    specialization: ["Financial Planning", "Education Planning", "Cash Flow Management"],
    bio: "Ibu Sarah adalah financial advisor yang fokus pada perencanaan keuangan keluarga muda. Beliau memiliki kemampuan luar biasa dalam membantu klien mengelola cash flow dan merencanakan dana pendidikan anak. Pendekatan yang friendly membuat klien merasa nyaman berkonsultasi.",
    quote: "Merencanakan keuangan itu seperti merencanakan perjalanan - perlu peta yang jelas.",
    achievements: ["Specialist keluarga muda", "100+ education plan", "Rating 4.9/5 dari klien"],
  },
  {
    name: "Mas Budi Santoso, RFP",
    role: "Tax & Estate Specialist",
    experience: "12 tahun pengalaman",
    certifications: ["RFP (Registered Financial Planner)", "Brevet A & B"],
    education: "S1 Perpajakan - Universitas Brawijaya",
    specialization: ["Tax Planning", "Estate Planning", "Business Succession"],
    bio: "Mas Budi adalah spesialis perpajakan dan perencanaan warisan dengan background di konsultan pajak Big Four. Keahliannya dalam mengoptimalkan kewajiban pajak secara legal telah membantu banyak klien memaksimalkan kekayaan mereka. Beliau juga ahli dalam perencanaan suksesi bisnis keluarga.",
    quote: "Pajak yang optimal adalah pajak yang sesuai dengan kewajiban, tidak lebih tidak kurang.",
    achievements: ["Ex-Big Four consultant", "50+ tax planning", "Business succession specialist"],
  },
];

const values = [
  {
    icon: Heart,
    title: "Client First",
    description: "Kepentingan klien selalu menjadi prioritas utama dalam setiap rekomendasi kami.",
  },
  {
    icon: Shield,
    title: "Integritas",
    description: "Kami berkomitmen pada kejujuran dan transparansi dalam setiap interaksi.",
  },
  {
    icon: Lightbulb,
    title: "Expertise",
    description: "Tim kami terus belajar dan berkembang untuk memberikan advice terbaik.",
  },
  {
    icon: Target,
    title: "Result-Oriented",
    description: "Fokus pada hasil nyata yang bisa dirasakan oleh klien kami.",
  },
];

const testimonials = [
  {
    quote: "Pak Andi sangat sabar menjelaskan konsep-konsep keuangan yang rumit. Sekarang saya lebih percaya diri mengelola keuangan keluarga.",
    name: "Ibu Sinta",
    role: "Ibu Rumah Tangga",
    rating: 5,
  },
  {
    quote: "Mas Kevin membantu saya membangun portfolio investasi yang sesuai profil risiko. Return-nya di atas ekspektasi saya!",
    name: "Pak Denny",
    role: "Entrepreneur",
    rating: 5,
  },
  {
    quote: "Ibu Ratna sangat detail dalam mereview polis asuransi saya. Ternyata banyak yang perlu diperbaiki. Terima kasih!",
    name: "Ibu Lina",
    role: "Profesional",
    rating: 5,
  },
];

const certificationLogos = [
  { name: "CFP", fullName: "Certified Financial Planner" },
  { name: "RFP", fullName: "Registered Financial Planner" },
  { name: "CWM", fullName: "Certified Wealth Manager" },
  { name: "AEPP", fullName: "Associate Estate Planning Practitioner" },
];

export default function TimPage() {
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
              Tim Profesional
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading mb-6">
              Kenali Tim Advisor Kami
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto mb-8">
              Dipandu oleh para profesional bersertifikat dengan puluhan tahun
              pengalaman di industri keuangan Indonesia
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {certificationLogos.map((cert, index) => (
                <div
                  key={index}
                  className="px-4 py-2 bg-white/10 backdrop-blur rounded-lg text-sm"
                >
                  <span className="font-bold">{cert.name}</span>
                  <span className="text-white/60 ml-2 hidden sm:inline">{cert.fullName}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <p className="text-3xl font-bold text-text">5+</p>
              <p className="text-text/60">Advisor Bersertifikat</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Briefcase className="w-8 h-8 text-primary" />
              </div>
              <p className="text-3xl font-bold text-text">65+</p>
              <p className="text-text/60">Tahun Pengalaman</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-primary" />
              </div>
              <p className="text-3xl font-bold text-text">10+</p>
              <p className="text-text/60">Sertifikasi Profesional</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-primary" />
              </div>
              <p className="text-3xl font-bold text-text">500+</p>
              <p className="text-text/60">Klien Terbantu</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
              Nilai-Nilai Kami
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-text font-heading">
              Prinsip yang Kami Pegang
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
                className="bg-white rounded-2xl p-8 text-center shadow-lg"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-text font-heading mb-2">{value.title}</h3>
                <p className="text-text/70">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
              Meet The Team
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-text font-heading">
              Tim Advisor Kami
            </h2>
            <p className="text-text/70 mt-4 max-w-2xl mx-auto">
              Setiap advisor kami dipilih berdasarkan keahlian, pengalaman, dan komitmen
              untuk membantu klien mencapai tujuan finansial
            </p>
          </motion.div>

          <div className="space-y-12">
            {teamData.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-background rounded-2xl overflow-hidden shadow-lg"
              >
                <div className="grid lg:grid-cols-3 gap-0">
                  <div className="bg-gradient-to-br from-primary to-secondary p-8 flex flex-col justify-center items-center text-white">
                    <div className="w-40 h-40 bg-white/20 rounded-full flex items-center justify-center mb-6">
                      <Users className="w-20 h-20 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-center font-heading">{member.name}</h3>
                    <p className="text-white/80 text-center mt-2">{member.role}</p>
                    <p className="text-accent font-medium mt-1">{member.experience}</p>
                    <div className="flex gap-4 mt-6">
                      <a href="#" className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-accent transition-colors">
                        <Linkedin size={20} />
                      </a>
                      <a href="#" className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-accent transition-colors">
                        <Mail size={20} />
                      </a>
                    </div>

                    {/* Quote */}
                    <div className="mt-8 bg-white/10 rounded-xl p-4">
                      <Quote className="w-6 h-6 text-white/40 mb-2" />
                      <p className="text-sm text-white/90 italic">&ldquo;{member.quote}&rdquo;</p>
                    </div>
                  </div>

                  <div className="lg:col-span-2 p-8">
                    <p className="text-text/70 mb-6 text-lg">{member.bio}</p>

                    {/* Achievements */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-text mb-3 flex items-center gap-2">
                        <Star className="w-5 h-5 text-accent" />
                        Pencapaian
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {member.achievements.map((achievement, i) => (
                          <span key={i} className="text-sm bg-accent/10 text-accent px-3 py-1 rounded-full">
                            {achievement}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-text mb-3 flex items-center gap-2">
                          <Award className="w-5 h-5 text-primary" />
                          Sertifikasi
                        </h4>
                        <ul className="space-y-2">
                          {member.certifications.map((cert, i) => (
                            <li key={i} className="text-sm text-text/70 flex items-start gap-2">
                              <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                              {cert}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-text mb-3 flex items-center gap-2">
                          <GraduationCap className="w-5 h-5 text-primary" />
                          Pendidikan
                        </h4>
                        <p className="text-sm text-text/70">{member.education}</p>

                        <h4 className="font-semibold text-text mb-3 mt-4 flex items-center gap-2">
                          <Briefcase className="w-5 h-5 text-primary" />
                          Spesialisasi
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {member.specialization.map((spec, i) => (
                            <span key={i} className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full">
                              {spec}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="mt-8 pt-6 border-t flex flex-col sm:flex-row gap-4">
                      <Link
                        href="/konsultasi"
                        className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-white font-semibold rounded-xl hover:bg-secondary transition-colors"
                      >
                        <Calendar size={18} />
                        Jadwalkan dengan {member.name.split(" ")[1]}
                      </Link>
                      <a
                        href="#"
                        className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary/10 text-primary font-semibold rounded-xl hover:bg-primary/20 transition-colors"
                      >
                        <Mail size={18} />
                        Kirim Pesan
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials about the team */}
      <section className="py-20 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="inline-block px-4 py-2 bg-white/20 text-white rounded-full text-sm font-medium mb-4">
              Testimoni Klien
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white font-heading">
              Apa Kata Mereka tentang Tim Kami
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                  ))}
                </div>
                <Quote className="w-8 h-8 text-primary/20 mb-4" />
                <p className="text-text mb-6">{testimonial.quote}</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-bold text-text">{testimonial.name}</p>
                    <p className="text-text/60 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Join the Team */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 md:p-12 shadow-lg text-center"
          >
            <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Users className="w-10 h-10 text-primary" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-text font-heading mb-4">
              Bergabung dengan Tim Kami
            </h2>
            <p className="text-text/70 mb-8 max-w-2xl mx-auto">
              Kami selalu mencari talenta terbaik untuk bergabung. Jika Anda adalah
              financial planner bersertifikat dengan passion untuk membantu klien,
              hubungi kami!
            </p>
            <a
              href="mailto:career@finansialsejahtera.id"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white font-semibold rounded-xl hover:bg-secondary transition-colors"
            >
              <Mail size={20} />
              career@finansialsejahtera.id
            </a>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-text font-heading mb-6">
              Siap Berkonsultasi dengan Tim Kami?
            </h2>
            <p className="text-text/70 text-lg mb-8">
              Jadwalkan sesi konsultasi gratis dan temukan solusi terbaik untuk kebutuhan finansial Anda.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/konsultasi"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent text-white font-semibold rounded-xl hover:bg-accent/90 transition-colors shadow-lg shadow-accent/25"
              >
                Jadwalkan Konsultasi
                <ArrowRight size={20} />
              </Link>
              <a
                href="tel:+622112345678"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary/10 text-primary font-semibold rounded-xl hover:bg-primary hover:text-white transition-colors"
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
