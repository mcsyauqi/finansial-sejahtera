"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import {
  PiggyBank,
  GraduationCap,
  TrendingUp,
  Calculator,
  ArrowRight,
  Info,
  RefreshCw,
  Target,
  BarChart3,
  Lightbulb,
  HelpCircle,
  ChevronDown,
  ChevronUp,
  Shield,
  Wallet,
  Building2,
  Gem,
  Coins,
} from "lucide-react";

type CalculatorType = "pensiun" | "pendidikan" | "investasi";

function formatCurrency(value: number): string {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value);
}

function PensiunCalculator() {
  const [currentAge, setCurrentAge] = useState(30);
  const [retirementAge, setRetirementAge] = useState(55);
  const [monthlyExpense, setMonthlyExpense] = useState(15000000);
  const [currentSavings, setCurrentSavings] = useState(100000000);
  const [inflation, setInflation] = useState(6);
  const [returnRate, setReturnRate] = useState(10);
  const [result, setResult] = useState<{
    neededFund: number;
    monthlyInvestment: number;
    yearsToRetirement: number;
  } | null>(null);

  const calculate = () => {
    const yearsToRetirement = retirementAge - currentAge;
    const yearsInRetirement = 25;

    const futureMonthlyExpense = monthlyExpense * Math.pow(1 + inflation / 100, yearsToRetirement);
    const neededFund = futureMonthlyExpense * 12 * yearsInRetirement;
    const futureCurrentSavings = currentSavings * Math.pow(1 + returnRate / 100, yearsToRetirement);
    const gap = Math.max(0, neededFund - futureCurrentSavings);

    const monthlyReturnRate = returnRate / 100 / 12;
    const totalMonths = yearsToRetirement * 12;
    const monthlyInvestment =
      gap > 0
        ? (gap * monthlyReturnRate) / (Math.pow(1 + monthlyReturnRate, totalMonths) - 1)
        : 0;

    setResult({
      neededFund,
      monthlyInvestment,
      yearsToRetirement,
    });
  };

  return (
    <div className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-text mb-2">Usia Saat Ini</label>
          <input
            type="number"
            value={currentAge}
            onChange={(e) => setCurrentAge(Number(e.target.value))}
            className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-text mb-2">Usia Pensiun</label>
          <input
            type="number"
            value={retirementAge}
            onChange={(e) => setRetirementAge(Number(e.target.value))}
            className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-text mb-2">Pengeluaran Bulanan Saat Ini</label>
          <input
            type="number"
            value={monthlyExpense}
            onChange={(e) => setMonthlyExpense(Number(e.target.value))}
            className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-text mb-2">Tabungan/Investasi Saat Ini</label>
          <input
            type="number"
            value={currentSavings}
            onChange={(e) => setCurrentSavings(Number(e.target.value))}
            className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-text mb-2">Asumsi Inflasi (%/tahun)</label>
          <input
            type="number"
            value={inflation}
            onChange={(e) => setInflation(Number(e.target.value))}
            className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-text mb-2">Asumsi Return Investasi (%/tahun)</label>
          <input
            type="number"
            value={returnRate}
            onChange={(e) => setReturnRate(Number(e.target.value))}
            className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
      </div>

      <button
        onClick={calculate}
        className="w-full py-4 bg-primary text-white font-semibold rounded-xl hover:bg-secondary transition-colors flex items-center justify-center gap-2"
      >
        <Calculator size={20} />
        Hitung Dana Pensiun
      </button>

      {result && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-primary/5 rounded-2xl p-6 space-y-4"
        >
          <h3 className="text-lg font-bold text-text">Hasil Perhitungan</h3>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-white rounded-xl p-4">
              <p className="text-sm text-text/60">Dana Pensiun Dibutuhkan</p>
              <p className="text-xl font-bold text-primary">{formatCurrency(result.neededFund)}</p>
            </div>
            <div className="bg-white rounded-xl p-4">
              <p className="text-sm text-text/60">Investasi Bulanan</p>
              <p className="text-xl font-bold text-accent">{formatCurrency(result.monthlyInvestment)}</p>
            </div>
            <div className="bg-white rounded-xl p-4">
              <p className="text-sm text-text/60">Waktu Menuju Pensiun</p>
              <p className="text-xl font-bold text-text">{result.yearsToRetirement} tahun</p>
            </div>
          </div>
          <p className="text-sm text-text/60 flex items-start gap-2">
            <Info size={16} className="flex-shrink-0 mt-0.5" />
            Perhitungan ini adalah estimasi. Konsultasikan dengan advisor kami untuk perencanaan yang lebih akurat.
          </p>
        </motion.div>
      )}
    </div>
  );
}

function PendidikanCalculator() {
  const [childAge, setChildAge] = useState(5);
  const [targetAge, setTargetAge] = useState(18);
  const [currentCost, setCurrentCost] = useState(200000000);
  const [currentSavings, setCurrentSavings] = useState(50000000);
  const [inflation, setInflation] = useState(10);
  const [returnRate, setReturnRate] = useState(10);
  const [result, setResult] = useState<{
    futureCost: number;
    monthlyInvestment: number;
    yearsToTarget: number;
  } | null>(null);

  const calculate = () => {
    const yearsToTarget = targetAge - childAge;
    const futureCost = currentCost * Math.pow(1 + inflation / 100, yearsToTarget);
    const futureCurrentSavings = currentSavings * Math.pow(1 + returnRate / 100, yearsToTarget);
    const gap = Math.max(0, futureCost - futureCurrentSavings);

    const monthlyReturnRate = returnRate / 100 / 12;
    const totalMonths = yearsToTarget * 12;
    const monthlyInvestment =
      gap > 0
        ? (gap * monthlyReturnRate) / (Math.pow(1 + monthlyReturnRate, totalMonths) - 1)
        : 0;

    setResult({
      futureCost,
      monthlyInvestment,
      yearsToTarget,
    });
  };

  return (
    <div className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-text mb-2">Usia Anak Saat Ini</label>
          <input
            type="number"
            value={childAge}
            onChange={(e) => setChildAge(Number(e.target.value))}
            className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-text mb-2">Usia Masuk Universitas</label>
          <input
            type="number"
            value={targetAge}
            onChange={(e) => setTargetAge(Number(e.target.value))}
            className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-text mb-2">Biaya Pendidikan Saat Ini</label>
          <input
            type="number"
            value={currentCost}
            onChange={(e) => setCurrentCost(Number(e.target.value))}
            className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-text mb-2">Dana Pendidikan Saat Ini</label>
          <input
            type="number"
            value={currentSavings}
            onChange={(e) => setCurrentSavings(Number(e.target.value))}
            className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-text mb-2">Asumsi Inflasi Pendidikan (%/tahun)</label>
          <input
            type="number"
            value={inflation}
            onChange={(e) => setInflation(Number(e.target.value))}
            className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-text mb-2">Asumsi Return Investasi (%/tahun)</label>
          <input
            type="number"
            value={returnRate}
            onChange={(e) => setReturnRate(Number(e.target.value))}
            className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
      </div>

      <button
        onClick={calculate}
        className="w-full py-4 bg-primary text-white font-semibold rounded-xl hover:bg-secondary transition-colors flex items-center justify-center gap-2"
      >
        <Calculator size={20} />
        Hitung Dana Pendidikan
      </button>

      {result && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-primary/5 rounded-2xl p-6 space-y-4"
        >
          <h3 className="text-lg font-bold text-text">Hasil Perhitungan</h3>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-white rounded-xl p-4">
              <p className="text-sm text-text/60">Biaya Pendidikan Masa Depan</p>
              <p className="text-xl font-bold text-primary">{formatCurrency(result.futureCost)}</p>
            </div>
            <div className="bg-white rounded-xl p-4">
              <p className="text-sm text-text/60">Investasi Bulanan</p>
              <p className="text-xl font-bold text-accent">{formatCurrency(result.monthlyInvestment)}</p>
            </div>
            <div className="bg-white rounded-xl p-4">
              <p className="text-sm text-text/60">Waktu Persiapan</p>
              <p className="text-xl font-bold text-text">{result.yearsToTarget} tahun</p>
            </div>
          </div>
          <p className="text-sm text-text/60 flex items-start gap-2">
            <Info size={16} className="flex-shrink-0 mt-0.5" />
            Inflasi pendidikan biasanya lebih tinggi dari inflasi umum (10-15% per tahun).
          </p>
        </motion.div>
      )}
    </div>
  );
}

function InvestasiCalculator() {
  const [initialInvestment, setInitialInvestment] = useState(10000000);
  const [monthlyInvestment, setMonthlyInvestment] = useState(2000000);
  const [years, setYears] = useState(10);
  const [returnRate, setReturnRate] = useState(10);
  const [result, setResult] = useState<{
    futureValue: number;
    totalInvestment: number;
    totalReturn: number;
  } | null>(null);

  const calculate = () => {
    const monthlyRate = returnRate / 100 / 12;
    const totalMonths = years * 12;

    const fvInitial = initialInvestment * Math.pow(1 + returnRate / 100, years);
    const fvMonthly =
      monthlyInvestment * ((Math.pow(1 + monthlyRate, totalMonths) - 1) / monthlyRate);

    const futureValue = fvInitial + fvMonthly;
    const totalInvestment = initialInvestment + monthlyInvestment * totalMonths;
    const totalReturn = futureValue - totalInvestment;

    setResult({
      futureValue,
      totalInvestment,
      totalReturn,
    });
  };

  return (
    <div className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-text mb-2">Investasi Awal</label>
          <input
            type="number"
            value={initialInvestment}
            onChange={(e) => setInitialInvestment(Number(e.target.value))}
            className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-text mb-2">Investasi Bulanan</label>
          <input
            type="number"
            value={monthlyInvestment}
            onChange={(e) => setMonthlyInvestment(Number(e.target.value))}
            className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-text mb-2">Jangka Waktu (Tahun)</label>
          <input
            type="number"
            value={years}
            onChange={(e) => setYears(Number(e.target.value))}
            className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-text mb-2">Asumsi Return (%/tahun)</label>
          <input
            type="number"
            value={returnRate}
            onChange={(e) => setReturnRate(Number(e.target.value))}
            className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
      </div>

      <button
        onClick={calculate}
        className="w-full py-4 bg-primary text-white font-semibold rounded-xl hover:bg-secondary transition-colors flex items-center justify-center gap-2"
      >
        <Calculator size={20} />
        Hitung Hasil Investasi
      </button>

      {result && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-primary/5 rounded-2xl p-6 space-y-4"
        >
          <h3 className="text-lg font-bold text-text">Hasil Perhitungan</h3>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-white rounded-xl p-4">
              <p className="text-sm text-text/60">Nilai Masa Depan</p>
              <p className="text-xl font-bold text-primary">{formatCurrency(result.futureValue)}</p>
            </div>
            <div className="bg-white rounded-xl p-4">
              <p className="text-sm text-text/60">Total Investasi</p>
              <p className="text-xl font-bold text-text">{formatCurrency(result.totalInvestment)}</p>
            </div>
            <div className="bg-white rounded-xl p-4">
              <p className="text-sm text-text/60">Total Keuntungan</p>
              <p className="text-xl font-bold text-green-600">{formatCurrency(result.totalReturn)}</p>
            </div>
          </div>
          <p className="text-sm text-text/60 flex items-start gap-2">
            <Info size={16} className="flex-shrink-0 mt-0.5" />
            Return investasi tidak dijamin dan dapat bervariasi. Hasil aktual dapat berbeda dari proyeksi.
          </p>
        </motion.div>
      )}
    </div>
  );
}

const investmentTypes = [
  {
    icon: Wallet,
    name: "Deposito",
    return: "3-5%",
    risk: "Rendah",
    riskColor: "text-green-600",
    horizon: "1-12 bulan",
    minInvestment: "Rp 1 juta",
    description: "Cocok untuk dana darurat dan tujuan jangka pendek",
  },
  {
    icon: Shield,
    name: "Obligasi/SBN",
    return: "5-7%",
    risk: "Rendah-Menengah",
    riskColor: "text-yellow-600",
    horizon: "1-3 tahun",
    minInvestment: "Rp 1 juta",
    description: "Pendapatan tetap dengan jaminan pemerintah",
  },
  {
    icon: Building2,
    name: "Reksa Dana Campuran",
    return: "7-12%",
    risk: "Menengah",
    riskColor: "text-yellow-600",
    horizon: "3-5 tahun",
    minInvestment: "Rp 100 ribu",
    description: "Diversifikasi otomatis antara saham dan obligasi",
  },
  {
    icon: TrendingUp,
    name: "Reksa Dana Saham",
    return: "10-15%",
    risk: "Tinggi",
    riskColor: "text-red-500",
    horizon: "5+ tahun",
    minInvestment: "Rp 100 ribu",
    description: "Potensi return tinggi untuk jangka panjang",
  },
  {
    icon: Gem,
    name: "Saham Langsung",
    return: "Variabel",
    risk: "Tinggi",
    riskColor: "text-red-500",
    horizon: "5+ tahun",
    minInvestment: "Rp 100 ribu",
    description: "Membutuhkan analisis dan pemantauan aktif",
  },
  {
    icon: Coins,
    name: "Emas",
    return: "5-10%",
    risk: "Menengah",
    riskColor: "text-yellow-600",
    horizon: "3+ tahun",
    minInvestment: "0.01 gram",
    description: "Lindung nilai terhadap inflasi",
  },
];

const tips = [
  {
    icon: Target,
    title: "Tentukan Tujuan",
    description: "Identifikasi tujuan finansial Anda dengan jelas: pensiun, pendidikan anak, atau dana darurat.",
  },
  {
    icon: BarChart3,
    title: "Ketahui Profil Risiko",
    description: "Pahami toleransi risiko Anda untuk memilih instrumen investasi yang sesuai.",
  },
  {
    icon: RefreshCw,
    title: "Investasi Rutin",
    description: "Konsisten berinvestasi setiap bulan (Dollar Cost Averaging) untuk hasil optimal.",
  },
  {
    icon: Lightbulb,
    title: "Diversifikasi",
    description: "Jangan menaruh semua telur dalam satu keranjang. Sebarkan investasi Anda.",
  },
];

const faqs = [
  {
    question: "Bagaimana cara kerja kalkulator ini?",
    answer: "Kalkulator ini menggunakan rumus finansial standar untuk menghitung kebutuhan dana berdasarkan input Anda seperti usia, target, inflasi, dan asumsi return investasi. Perhitungan menggunakan konsep time value of money dan future value calculations.",
  },
  {
    question: "Apakah hasil perhitungan ini akurat?",
    answer: "Hasil perhitungan adalah estimasi berdasarkan asumsi yang Anda masukkan. Return investasi aktual dapat bervariasi dan inflasi bisa berbeda dari asumsi. Gunakan hasil ini sebagai panduan awal dan konsultasikan dengan advisor kami untuk perencanaan yang lebih detail.",
  },
  {
    question: "Berapa asumsi inflasi yang tepat?",
    answer: "Inflasi umum di Indonesia rata-rata 3-5% per tahun. Namun, inflasi pendidikan bisa mencapai 10-15% per tahun. Untuk perencanaan konservatif, gunakan asumsi inflasi yang lebih tinggi.",
  },
  {
    question: "Instrumen investasi apa yang sebaiknya dipilih?",
    answer: "Pemilihan instrumen tergantung pada profil risiko dan jangka waktu Anda. Untuk tujuan jangka pendek (< 3 tahun), pilih instrumen rendah risiko seperti deposito atau obligasi. Untuk jangka panjang (> 5 tahun), reksa dana saham atau saham langsung bisa memberikan return lebih tinggi.",
  },
  {
    question: "Apakah saya bisa berkonsultasi lebih lanjut?",
    answer: "Tentu! Kalkulator ini hanya memberikan gambaran awal. Untuk perencanaan yang lebih komprehensif dan personal, kami menyediakan layanan konsultasi gratis dengan advisor bersertifikat kami.",
  },
];

export default function KalkulatorPage() {
  const [activeCalculator, setActiveCalculator] = useState<CalculatorType>("pensiun");
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const calculators = [
    {
      id: "pensiun" as CalculatorType,
      icon: PiggyBank,
      title: "Dana Pensiun",
      description: "Hitung kebutuhan dana pensiun Anda",
    },
    {
      id: "pendidikan" as CalculatorType,
      icon: GraduationCap,
      title: "Dana Pendidikan",
      description: "Rencanakan biaya pendidikan anak",
    },
    {
      id: "investasi" as CalculatorType,
      icon: TrendingUp,
      title: "Investasi",
      description: "Simulasi pertumbuhan investasi",
    },
  ];

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
              Kalkulator Finansial
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Tools interaktif untuk membantu Anda merencanakan keuangan dengan lebih baik
            </p>
          </motion.div>
        </div>
      </section>

      {/* Tips Section */}
      <section className="py-12 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-6">
            {tips.map((tip, index) => (
              <motion.div
                key={tip.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <tip.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-semibold text-text mb-2">{tip.title}</h3>
                <p className="text-sm text-text/60">{tip.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="py-16 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Calculator Tabs */}
          <div className="grid md:grid-cols-3 gap-4 mb-8">
            {calculators.map((calc) => (
              <button
                key={calc.id}
                onClick={() => setActiveCalculator(calc.id)}
                className={`p-6 rounded-2xl transition-all text-left ${
                  activeCalculator === calc.id
                    ? "bg-primary text-white shadow-lg shadow-primary/25"
                    : "bg-white hover:shadow-lg"
                }`}
              >
                <calc.icon
                  className={`w-8 h-8 mb-3 ${
                    activeCalculator === calc.id ? "text-white" : "text-primary"
                  }`}
                />
                <h3 className={`font-bold ${activeCalculator === calc.id ? "text-white" : "text-text"}`}>
                  {calc.title}
                </h3>
                <p className={`text-sm ${activeCalculator === calc.id ? "text-white/80" : "text-text/60"}`}>
                  {calc.description}
                </p>
              </button>
            ))}
          </div>

          {/* Calculator Content */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            {activeCalculator === "pensiun" && <PensiunCalculator />}
            {activeCalculator === "pendidikan" && <PendidikanCalculator />}
            {activeCalculator === "investasi" && <InvestasiCalculator />}
          </div>
        </div>
      </section>

      {/* Investment Comparison */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-text font-heading mb-4">
              Perbandingan Instrumen Investasi
            </h2>
            <p className="text-text/70 max-w-2xl mx-auto">
              Pilih instrumen investasi yang sesuai dengan profil risiko dan tujuan finansial Anda
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {investmentTypes.map((investment, index) => (
              <motion.div
                key={investment.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-background rounded-2xl p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <investment.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-text">{investment.name}</h3>
                    <p className={`text-sm font-medium ${investment.riskColor}`}>
                      Risiko: {investment.risk}
                    </p>
                  </div>
                </div>
                <p className="text-sm text-text/70 mb-4">{investment.description}</p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-text/60">Return per Tahun</span>
                    <span className="font-medium text-text">{investment.return}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-text/60">Horizon Waktu</span>
                    <span className="font-medium text-text">{investment.horizon}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-text/60">Minimum Investasi</span>
                    <span className="font-medium text-text">{investment.minInvestment}</span>
                  </div>
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
              Jawaban atas pertanyaan yang sering diajukan tentang kalkulator dan perencanaan finansial
            </p>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
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

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-text font-heading mb-4">
              Butuh Analisis Lebih Detail?
            </h2>
            <p className="text-text/70 mb-8 max-w-2xl mx-auto">
              Kalkulator ini hanya memberikan estimasi. Untuk perencanaan yang lebih akurat
              dan personal, konsultasikan dengan advisor bersertifikat kami secara gratis.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/konsultasi"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent text-white font-semibold rounded-xl hover:bg-accent/90 transition-colors shadow-lg shadow-accent/25"
              >
                Konsultasi dengan Advisor
                <ArrowRight size={20} />
              </Link>
              <Link
                href="/edukasi"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary/10 text-primary font-semibold rounded-xl hover:bg-primary/20 transition-colors"
              >
                Pelajari Lebih Lanjut
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
