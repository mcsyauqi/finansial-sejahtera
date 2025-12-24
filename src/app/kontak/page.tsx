"use client";

import { motion } from "framer-motion";
import { useState } from "react";
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
} from "lucide-react";

export default function KontakPage() {
  const [formData, setFormData] = useState({
    nama: "",
    email: "",
    telepon: "",
    subjek: "",
    pesan: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

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
              Ada pertanyaan? Tim kami siap membantu Anda. Hubungi kami melalui
              berbagai channel di bawah ini.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-20 bg-background">
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
                      <h3 className="font-semibold text-text">Alamat Kantor</h3>
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
                  <div className="flex gap-4">
                    <a
                      href="#"
                      className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center hover:bg-primary hover:text-white transition-all"
                    >
                      <Facebook size={20} />
                    </a>
                    <a
                      href="#"
                      className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center hover:bg-primary hover:text-white transition-all"
                    >
                      <Instagram size={20} />
                    </a>
                    <a
                      href="#"
                      className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center hover:bg-primary hover:text-white transition-all"
                    >
                      <Linkedin size={20} />
                    </a>
                    <a
                      href="#"
                      className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center hover:bg-primary hover:text-white transition-all"
                    >
                      <Twitter size={20} />
                    </a>
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

      {/* Map Section */}
      <section className="py-20 bg-white">
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
            <p className="text-text/70">
              Kunjungi kantor kami untuk konsultasi tatap muka
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl overflow-hidden shadow-lg"
          >
            <div className="w-full h-[400px] bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-16 h-16 text-primary mx-auto mb-4" />
                <p className="text-text/70 max-w-md mx-auto">
                  Jl. Sudirman No. 123, Lantai 15
                  <br />
                  Jakarta Selatan 12190
                </p>
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-4 px-6 py-3 bg-primary text-white font-medium rounded-xl hover:bg-secondary transition-colors"
                >
                  <MapPin size={18} />
                  Buka di Google Maps
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
