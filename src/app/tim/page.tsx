"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Users, Award, Briefcase, GraduationCap, ArrowRight, Linkedin, Mail } from "lucide-react";

const teamData = [
  {
    name: "Bapak Andi Wijaya, CFP",
    role: "Founder & Lead Advisor",
    experience: "20 tahun pengalaman",
    certifications: ["CFP (Certified Financial Planner)", "CWM (Certified Wealth Manager)"],
    education: "MBA Finance - Universitas Indonesia",
    specialization: ["Wealth Management", "Retirement Planning", "Estate Planning"],
    bio: "Bapak Andi adalah founder Finansial Sejahtera dengan pengalaman lebih dari 20 tahun di industri keuangan. Beliau memulai karir di perbankan swasta sebelum memutuskan untuk fokus pada financial advisory. Passion beliau adalah membantu keluarga Indonesia mencapai kebebasan finansial melalui perencanaan yang tepat.",
  },
  {
    name: "Ibu Ratna Dewi, CFP",
    role: "Senior Advisor",
    experience: "15 tahun pengalaman",
    certifications: ["CFP (Certified Financial Planner)", "AEPP (Associate Estate Planning Practitioner)"],
    education: "S1 Akuntansi - Universitas Gadjah Mada",
    specialization: ["Insurance Planning", "Retirement Planning", "Tax Planning"],
    bio: "Ibu Ratna adalah senior advisor dengan keahlian khusus dalam perencanaan proteksi dan pensiun. Sebelum bergabung dengan Finansial Sejahtera, beliau bekerja di perusahaan asuransi multinasional selama 10 tahun. Beliau sangat passionate dalam membantu keluarga mendapatkan proteksi yang optimal.",
  },
  {
    name: "Mas Kevin Hartono, RFP",
    role: "Investment Specialist",
    experience: "10 tahun pengalaman",
    certifications: ["RFP (Registered Financial Planner)", "WMI (Wakil Manajer Investasi)"],
    education: "S2 Finance - Prasetiya Mulya",
    specialization: ["Investment Advisory", "Portfolio Management", "Market Analysis"],
    bio: "Mas Kevin adalah investment specialist dengan track record yang solid dalam analisis pasar dan portfolio management. Beliau memiliki pengalaman bekerja di beberapa asset management company sebelum bergabung dengan Finansial Sejahtera. Keahliannya dalam analisis fundamental dan teknikal membantu klien mencapai return optimal.",
  },
  {
    name: "Ibu Sarah Putri, CFP",
    role: "Financial Advisor",
    experience: "8 tahun pengalaman",
    certifications: ["CFP (Certified Financial Planner)"],
    education: "S1 Manajemen - Universitas Airlangga",
    specialization: ["Financial Planning", "Education Planning", "Cash Flow Management"],
    bio: "Ibu Sarah adalah financial advisor yang fokus pada perencanaan keuangan keluarga muda. Beliau memiliki kemampuan luar biasa dalam membantu klien mengelola cash flow dan merencanakan dana pendidikan anak. Pendekatan yang friendly membuat klien merasa nyaman berkonsultasi.",
  },
  {
    name: "Mas Budi Santoso, RFP",
    role: "Tax & Estate Specialist",
    experience: "12 tahun pengalaman",
    certifications: ["RFP (Registered Financial Planner)", "Brevet A & B"],
    education: "S1 Perpajakan - Universitas Brawijaya",
    specialization: ["Tax Planning", "Estate Planning", "Business Succession"],
    bio: "Mas Budi adalah spesialis perpajakan dan perencanaan warisan dengan background di konsultan pajak Big Four. Keahliannya dalam mengoptimalkan kewajiban pajak secara legal telah membantu banyak klien memaksimalkan kekayaan mereka. Beliau juga ahli dalam perencanaan suksesi bisnis keluarga.",
  },
];

export default function TimPage() {
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
              Tim Advisor Kami
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Dipandu oleh para profesional bersertifikat dengan puluhan tahun pengalaman di industri keuangan
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white border-b">
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
              <p className="text-text/60">Tahun Pengalaman Gabungan</p>
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
                <GraduationCap className="w-8 h-8 text-primary" />
              </div>
              <p className="text-3xl font-bold text-text">500+</p>
              <p className="text-text/60">Klien Terbantu</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {teamData.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg"
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
                  </div>
                  <div className="lg:col-span-2 p-8">
                    <p className="text-text/70 mb-6">{member.bio}</p>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-text mb-3 flex items-center gap-2">
                          <Award className="w-5 h-5 text-primary" />
                          Sertifikasi
                        </h4>
                        <ul className="space-y-2">
                          {member.certifications.map((cert, i) => (
                            <li key={i} className="text-sm text-text/70 flex items-start gap-2">
                              <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0" />
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
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
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
            <Link
              href="/konsultasi"
              className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-white font-semibold rounded-xl hover:bg-accent/90 transition-colors shadow-lg shadow-accent/25"
            >
              Jadwalkan Konsultasi
              <ArrowRight size={20} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
