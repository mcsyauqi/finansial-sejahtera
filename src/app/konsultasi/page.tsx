"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import {
  Calendar,
  Clock,
  User,
  Mail,
  Phone,
  MessageSquare,
  CheckCircle,
  Video,
  MapPin,
  ArrowRight,
  Shield,
  Award,
} from "lucide-react";

const layananOptions = [
  "Financial Planning",
  "Investment Advisory",
  "Retirement Planning",
  "Tax Planning",
  "Insurance Review",
  "Estate Planning",
  "Lainnya",
];

const timeSlots = [
  "09:00 - 10:00",
  "10:00 - 11:00",
  "11:00 - 12:00",
  "13:00 - 14:00",
  "14:00 - 15:00",
  "15:00 - 16:00",
  "16:00 - 17:00",
];

export default function KonsultasiPage() {
  const [formData, setFormData] = useState({
    nama: "",
    email: "",
    telepon: "",
    layanan: "",
    tanggal: "",
    waktu: "",
    metode: "online",
    pesan: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send to an API
    setIsSubmitted(true);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  if (isSubmitted) {
    return (
      <div className="pt-20 min-h-screen bg-background flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-lg mx-auto px-4 text-center"
        >
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-10 h-10 text-green-600" />
          </div>
          <h1 className="text-3xl font-bold text-text font-heading mb-4">
            Terima Kasih!
          </h1>
          <p className="text-text/70 mb-8">
            Permintaan konsultasi Anda telah kami terima. Tim kami akan menghubungi
            Anda dalam 1x24 jam untuk konfirmasi jadwal.
          </p>
          <div className="bg-white rounded-2xl p-6 shadow-lg text-left mb-8">
            <h3 className="font-semibold text-text mb-4">Detail Konsultasi:</h3>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-text/60">Nama:</span>
                <span className="text-text font-medium">{formData.nama}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-text/60">Layanan:</span>
                <span className="text-text font-medium">{formData.layanan}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-text/60">Tanggal:</span>
                <span className="text-text font-medium">{formData.tanggal}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-text/60">Waktu:</span>
                <span className="text-text font-medium">{formData.waktu}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-text/60">Metode:</span>
                <span className="text-text font-medium">
                  {formData.metode === "online" ? "Online (Video Call)" : "Tatap Muka"}
                </span>
              </div>
            </div>
          </div>
          <button
            onClick={() => setIsSubmitted(false)}
            className="text-primary font-medium hover:underline"
          >
            Buat jadwal konsultasi baru
          </button>
        </motion.div>
      </div>
    );
  }

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
              Jadwalkan Konsultasi
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Konsultasi gratis dengan advisor bersertifikat kami untuk mendapatkan
              solusi finansial yang tepat untuk Anda
            </p>
          </motion.div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-12 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-semibold text-text">100% Gratis</h3>
              <p className="text-sm text-text/60 mt-1">Konsultasi pertama tanpa biaya</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-center"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Award className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-semibold text-text">Advisor Bersertifikat</h3>
              <p className="text-sm text-text/60 mt-1">CFP & RFP certified</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-center"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Shield className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-semibold text-text">Kerahasiaan Terjamin</h3>
              <p className="text-sm text-text/60 mt-1">Data Anda aman bersama kami</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-center"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Clock className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-semibold text-text">Fleksibel</h3>
              <p className="text-sm text-text/60 mt-1">Online atau tatap muka</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 shadow-lg"
          >
            <h2 className="text-2xl font-bold text-text font-heading mb-6">
              Form Pendaftaran Konsultasi
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Personal Info */}
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
                    Nomor Telepon *
                  </label>
                  <input
                    type="tel"
                    name="telepon"
                    value={formData.telepon}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="08xx-xxxx-xxxx"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-text mb-2">
                    Layanan yang Dibutuhkan *
                  </label>
                  <select
                    name="layanan"
                    value={formData.layanan}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option value="">Pilih layanan</option>
                    {layananOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Schedule */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-text mb-2">
                    <Calendar className="inline w-4 h-4 mr-2" />
                    Pilih Tanggal *
                  </label>
                  <input
                    type="date"
                    name="tanggal"
                    value={formData.tanggal}
                    onChange={handleChange}
                    required
                    min={new Date().toISOString().split("T")[0]}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-text mb-2">
                    <Clock className="inline w-4 h-4 mr-2" />
                    Pilih Waktu *
                  </label>
                  <select
                    name="waktu"
                    value={formData.waktu}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option value="">Pilih waktu</option>
                    {timeSlots.map((slot) => (
                      <option key={slot} value={slot}>
                        {slot}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Method */}
              <div>
                <label className="block text-sm font-medium text-text mb-3">
                  Metode Konsultasi *
                </label>
                <div className="grid md:grid-cols-2 gap-4">
                  <label
                    className={`flex items-center gap-3 p-4 border-2 rounded-xl cursor-pointer transition-all ${
                      formData.metode === "online"
                        ? "border-primary bg-primary/5"
                        : "border-gray-200 hover:border-primary/50"
                    }`}
                  >
                    <input
                      type="radio"
                      name="metode"
                      value="online"
                      checked={formData.metode === "online"}
                      onChange={handleChange}
                      className="hidden"
                    />
                    <Video
                      className={`w-6 h-6 ${
                        formData.metode === "online" ? "text-primary" : "text-text/40"
                      }`}
                    />
                    <div>
                      <p className={`font-medium ${formData.metode === "online" ? "text-primary" : "text-text"}`}>
                        Online (Video Call)
                      </p>
                      <p className="text-sm text-text/60">Via Zoom/Google Meet</p>
                    </div>
                  </label>
                  <label
                    className={`flex items-center gap-3 p-4 border-2 rounded-xl cursor-pointer transition-all ${
                      formData.metode === "offline"
                        ? "border-primary bg-primary/5"
                        : "border-gray-200 hover:border-primary/50"
                    }`}
                  >
                    <input
                      type="radio"
                      name="metode"
                      value="offline"
                      checked={formData.metode === "offline"}
                      onChange={handleChange}
                      className="hidden"
                    />
                    <MapPin
                      className={`w-6 h-6 ${
                        formData.metode === "offline" ? "text-primary" : "text-text/40"
                      }`}
                    />
                    <div>
                      <p className={`font-medium ${formData.metode === "offline" ? "text-primary" : "text-text"}`}>
                        Tatap Muka
                      </p>
                      <p className="text-sm text-text/60">Di kantor kami, Jakarta</p>
                    </div>
                  </label>
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-medium text-text mb-2">
                  <MessageSquare className="inline w-4 h-4 mr-2" />
                  Pesan atau Pertanyaan (Opsional)
                </label>
                <textarea
                  name="pesan"
                  value={formData.pesan}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                  placeholder="Ceritakan kebutuhan atau pertanyaan Anda..."
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-accent text-white font-semibold rounded-xl hover:bg-accent/90 transition-colors flex items-center justify-center gap-2 shadow-lg shadow-accent/25"
              >
                Jadwalkan Konsultasi
                <ArrowRight size={20} />
              </button>

              <p className="text-sm text-text/60 text-center">
                Dengan mengirim form ini, Anda menyetujui{" "}
                <a href="#" className="text-primary hover:underline">
                  Syarat & Ketentuan
                </a>{" "}
                dan{" "}
                <a href="#" className="text-primary hover:underline">
                  Kebijakan Privasi
                </a>{" "}
                kami.
              </p>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
