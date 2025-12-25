"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle,
  MessageSquare,
  User,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  Youtube,
  Building,
  ArrowRight,
  HelpCircle,
  ChevronDown,
  ChevronUp,
  ExternalLink,
  Calendar,
  Headphones,
} from "lucide-react";

const branches = [
  {
    city: "Jakarta (Kantor Pusat)",
    address: "Jl. Sudirman No. 123, Lantai 15, Jakarta Selatan 12190",
    phone: "(021) 1234-5678",
    email: "jakarta@finansialsejahtera.id",
    hours: "Senin - Jumat: 09:00 - 17:00",
  },
  {
    city: "Surabaya",
    address: "Jl. Pemuda No. 45, Surabaya 60271",
    phone: "(031) 8765-4321",
    email: "surabaya@finansialsejahtera.id",
    hours: "Senin - Jumat: 09:00 - 17:00",
  },
  {
    city: "Bandung",
    address: "Jl. Asia Afrika No. 89, Bandung 40111",
    phone: "(022) 4567-8901",
    email: "bandung@finansialsejahtera.id",
    hours: "Senin - Jumat: 09:00 - 17:00",
  },
];

const contactMethods = [
  {
    icon: Phone,
    title: "Telepon",
    description: "Hubungi tim kami langsung",
    value: "(021) 1234-5678",
    action: "tel:+622112345678",
    actionText: "Telepon Sekarang",
  },
  {
    icon: MessageSquare,
    title: "WhatsApp",
    description: "Chat dengan kami 24/7",
    value: "+62 812-3456-7890",
    action: "https://wa.me/6281234567890",
    actionText: "Chat WhatsApp",
  },
  {
    icon: Mail,
    title: "Email",
    description: "Kirim email kapan saja",
    value: "info@finansialsejahtera.id",
    action: "mailto:info@finansialsejahtera.id",
    actionText: "Kirim Email",
  },
  {
    icon: Calendar,
    title: "Jadwalkan Konsultasi",
    description: "Konsultasi gratis dengan advisor",
    value: "60 menit, 100% gratis",
    action: "/konsultasi",
    actionText: "Jadwalkan Sekarang",
    isInternal: true,
  },
];

const faqs = [
  {
    question: "Bagaimana cara menghubungi customer service?",
    answer: "Anda dapat menghubungi kami melalui telepon di (021) 1234-5678, WhatsApp di +62 812-3456-7890, atau email di info@finansialsejahtera.id. Tim kami siap membantu pada hari kerja pukul 09:00 - 17:00 WIB.",
  },
  {
    question: "Apakah ada layanan di luar jam kerja?",
    answer: "Untuk layanan di luar jam kerja, Anda dapat menghubungi kami melalui WhatsApp atau mengisi form kontak di website. Tim kami akan merespons pada hari kerja berikutnya.",
  },
  {
    question: "Di mana lokasi kantor Finansial Sejahtera?",
    answer: "Kantor pusat kami berlokasi di Jl. Sudirman No. 123, Lantai 15, Jakarta Selatan. Kami juga memiliki cabang di Surabaya dan Bandung.",
  },
  {
    question: "Apakah bisa konsultasi secara online?",
    answer: "Ya, kami menyediakan layanan konsultasi online melalui video call (Zoom/Google Meet) untuk kenyamanan klien yang berada di luar kota atau tidak dapat datang ke kantor.",
  },
  {
    question: "Berapa lama waktu respons untuk pertanyaan?",
    answer: "Untuk pertanyaan melalui telepon atau WhatsApp, kami biasanya merespons dalam waktu 1-2 jam pada jam kerja. Untuk email, respons akan diberikan dalam 1x24 jam kerja.",
  },
];

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Youtube, href: "#", label: "YouTube" },
];

export default function KontakPage() {
  const [formData, setFormData] = useState({
    nama: "",
    email: "",
    telepon: "",
    subjek: "",
    pesan: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

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
              Hubungi Kami
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Ada pertanyaan? Tim kami siap membantu Anda. Pilih cara yang paling
              nyaman untuk menghubungi kami.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactMethods.map((method, index) => (
              <motion.div
                key={method.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-background rounded-2xl p-6 text-center hover:shadow-lg transition-shadow"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <method.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-bold text-text mb-1">{method.title}</h3>
                <p className="text-sm text-text/60 mb-2">{method.description}</p>
                <p className="font-medium text-primary mb-4">{method.value}</p>
                {method.isInternal ? (
                  <Link
                    href={method.action}
                    className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-white text-sm font-medium rounded-lg hover:bg-secondary transition-colors"
                  >
                    {method.actionText}
                    <ArrowRight size={16} />
                  </Link>
                ) : (
                  <a
                    href={method.action}
                    target={method.action.startsWith("http") ? "_blank" : undefined}
                    rel={method.action.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-white text-sm font-medium rounded-lg hover:bg-secondary transition-colors"
                  >
                    {method.actionText}
                    {method.action.startsWith("http") ? <ExternalLink size={16} /> : <ArrowRight size={16} />}
                  </a>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-2xl font-bold text-text font-heading mb-6">
                  Informasi Kontak
                </h2>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-text">Alamat Kantor Pusat</h3>
                      <p className="text-text/70 mt-1">
                        Jl. Sudirman No. 123, Lantai 15
                        <br />
                        Jakarta Selatan 12190
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-text">Telepon</h3>
                      <p className="text-text/70 mt-1">
                        <a href="tel:+622112345678" className="hover:text-primary transition-colors">
                          (021) 1234-5678
                        </a>
                      </p>
                      <p className="text-text/70">
                        <a href="https://wa.me/6281234567890" className="hover:text-primary transition-colors">
                          +62 812-3456-7890 (WhatsApp)
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-text">Email</h3>
                      <p className="text-text/70 mt-1">
                        <a href="mailto:info@finansialsejahtera.id" className="hover:text-primary transition-colors">
                          info@finansialsejahtera.id
                        </a>
                      </p>
                      <p className="text-text/70">
                        <a href="mailto:konsultasi@finansialsejahtera.id" className="hover:text-primary transition-colors">
                          konsultasi@finansialsejahtera.id
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-text">Jam Operasional</h3>
                      <p className="text-text/70 mt-1">
                        Senin - Jumat: 09:00 - 17:00
                        <br />
                        Sabtu: 09:00 - 13:00
                        <br />
                        Minggu & Hari Libur: Tutup
                      </p>
                    </div>
                  </div>
                </div>

                {/* Social Media */}
                <div className="mt-8 pt-8 border-t">
                  <h3 className="font-semibold text-text mb-4">Ikuti Kami</h3>
                  <div className="flex gap-3">
                    {socialLinks.map((social) => (
                      <a
                        key={social.label}
                        href={social.href}
                        aria-label={social.label}
                        className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center hover:bg-primary hover:text-white transition-all text-text/70"
                      >
                        <social.icon size={20} />
                      </a>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                {isSubmitted ? (
                  <div className="text-center py-12">
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle className="w-10 h-10 text-green-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-text font-heading mb-4">
                      Pesan Terkirim!
                    </h3>
                    <p className="text-text/70 mb-6">
                      Terima kasih telah menghubungi kami. Tim kami akan membalas
                      pesan Anda dalam 1x24 jam.
                    </p>
                    <button
                      onClick={() => {
                        setIsSubmitted(false);
                        setFormData({
                          nama: "",
                          email: "",
                          telepon: "",
                          subjek: "",
                          pesan: "",
                        });
                      }}
                      className="text-primary font-medium hover:underline"
                    >
                      Kirim pesan lain
                    </button>
                  </div>
                ) : (
                  <>
                    <h2 className="text-2xl font-bold text-text font-heading mb-6">
                      Kirim Pesan
                    </h2>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-text mb-2">
                            <User className="inline w-4 h-4 mr-2" />
                            Nama Lengkap *
                          </label>
                          <input
                            type="text"
                            name="nama"
                            value={formData.nama}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary"
                            placeholder="Masukkan nama lengkap"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-text mb-2">
                            <Mail className="inline w-4 h-4 mr-2" />
                            Email *
                          </label>
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary"
                            placeholder="email@example.com"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-text mb-2">
                            <Phone className="inline w-4 h-4 mr-2" />
                            Nomor Telepon
                          </label>
                          <input
                            type="tel"
                            name="telepon"
                            value={formData.telepon}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary"
                            placeholder="08xx-xxxx-xxxx"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-text mb-2">
                            Subjek *
                          </label>
                          <select
                            name="subjek"
                            value={formData.subjek}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary"
                          >
                            <option value="">Pilih subjek</option>
                            <option value="Pertanyaan Umum">Pertanyaan Umum</option>
                            <option value="Layanan">Informasi Layanan</option>
                            <option value="Konsultasi">Jadwal Konsultasi</option>
                            <option value="Kerjasama">Kerjasama/Partnership</option>
                            <option value="Feedback">Saran & Masukan</option>
                            <option value="Lainnya">Lainnya</option>
                          </select>
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-text mb-2">
                          <MessageSquare className="inline w-4 h-4 mr-2" />
                          Pesan *
                        </label>
                        <textarea
                          name="pesan"
                          value={formData.pesan}
                          onChange={handleChange}
                          required
                          rows={6}
                          className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                          placeholder="Tulis pesan Anda di sini..."
                        />
                      </div>

                      <button
                        type="submit"
                        className="w-full py-4 bg-primary text-white font-semibold rounded-xl hover:bg-secondary transition-colors flex items-center justify-center gap-2"
                      >
                        <Send size={20} />
                        Kirim Pesan
                      </button>
                    </form>
                  </>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Branch Locations */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-text font-heading mb-4">
              Lokasi Kantor Kami
            </h2>
            <p className="text-text/70 max-w-2xl mx-auto">
              Kunjungi kantor kami yang terdekat untuk konsultasi tatap muka
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {branches.map((branch, index) => (
              <motion.div
                key={branch.city}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-background rounded-2xl p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                    <Building className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-bold text-text">{branch.city}</h3>
                </div>
                <div className="space-y-3 text-sm">
                  <p className="text-text/70 flex items-start gap-2">
                    <MapPin className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    {branch.address}
                  </p>
                  <p className="text-text/70 flex items-center gap-2">
                    <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                    <a href={`tel:${branch.phone.replace(/[^0-9]/g, "")}`} className="hover:text-primary transition-colors">
                      {branch.phone}
                    </a>
                  </p>
                  <p className="text-text/70 flex items-center gap-2">
                    <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                    <a href={`mailto:${branch.email}`} className="hover:text-primary transition-colors">
                      {branch.email}
                    </a>
                  </p>
                  <p className="text-text/70 flex items-center gap-2">
                    <Clock className="w-4 h-4 text-primary flex-shrink-0" />
                    {branch.hours}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-background">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-text font-heading mb-4">
              Pertanyaan Umum
            </h2>
            <p className="text-text/70">
              Jawaban atas pertanyaan yang sering diajukan tentang cara menghubungi kami
            </p>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-white rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <span className="font-medium text-text flex items-center gap-3">
                    <HelpCircle className="w-5 h-5 text-primary" />
                    {faq.question}
                  </span>
                  {openFaq === index ? (
                    <ChevronUp className="w-5 h-5 text-text/40" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-text/40" />
                  )}
                </button>
                {openFaq === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="px-6 pb-4"
                  >
                    <p className="text-text/70 pl-8">{faq.answer}</p>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl overflow-hidden shadow-lg"
          >
            <div className="w-full h-[400px] bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-16 h-16 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold text-text mb-2">Kantor Pusat Jakarta</h3>
                <p className="text-text/70 max-w-md mx-auto mb-4">
                  Jl. Sudirman No. 123, Lantai 15
                  <br />
                  Jakarta Selatan 12190
                </p>
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-medium rounded-xl hover:bg-secondary transition-colors"
                >
                  <MapPin size={18} />
                  Buka di Google Maps
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-primary to-secondary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Headphones className="w-16 h-16 text-white/30 mx-auto mb-6" />
            <h2 className="text-2xl md:text-3xl font-bold text-white font-heading mb-4">
              Butuh Bantuan Lebih Lanjut?
            </h2>
            <p className="text-white/80 mb-8 max-w-2xl mx-auto">
              Jadwalkan konsultasi gratis dengan advisor kami untuk mendapatkan
              solusi finansial yang personal dan komprehensif.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/konsultasi"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent text-white font-semibold rounded-xl hover:bg-accent/90 transition-colors shadow-lg"
              >
                Jadwalkan Konsultasi
                <ArrowRight size={20} />
              </Link>
              <a
                href="https://wa.me/6281234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 text-white font-semibold rounded-xl hover:bg-white/20 transition-colors border border-white/30"
              >
                Chat WhatsApp
                <ExternalLink size={20} />
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
