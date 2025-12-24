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
    const yearsInRetirement = 25; // Asumsi hidup sampai 80 tahun dari pensiun 55

    // Future monthly expense considering inflation
    const futureMonthlyExpense = monthlyExpense * Math.pow(1 + inflation / 100, yearsToRetirement);

    // Total needed fund (using 4% withdrawal rate rule)
    const neededFund = futureMonthlyExpense * 12 * yearsInRetirement;

    // Future value of current savings
    const futureCurrentSavings = currentSavings * Math.pow(1 + returnRate / 100, yearsToRetirement);

    // Gap to fill
    const gap = Math.max(0, neededFund - futureCurrentSavings);

    // Monthly investment needed (PMT formula)
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

    // Future education cost considering inflation
    const futureCost = currentCost * Math.pow(1 + inflation / 100, yearsToTarget);

    // Future value of current savings
    const futureCurrentSavings = currentSavings * Math.pow(1 + returnRate / 100, yearsToTarget);

    // Gap to fill
    const gap = Math.max(0, futureCost - futureCurrentSavings);

    // Monthly investment needed
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

    // Future value of initial investment
    const fvInitial = initialInvestment * Math.pow(1 + returnRate / 100, years);

    // Future value of monthly investments (FV of annuity)
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

export default function KalkulatorPage() {
  const [activeCalculator, setActiveCalculator] = useState<CalculatorType>("pensiun");

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
            <p className="text-text/70 mb-8">
              Kalkulator ini hanya memberikan estimasi. Untuk perencanaan yang lebih akurat
              dan personal, konsultasikan dengan advisor kami.
            </p>
            <Link
              href="/konsultasi"
              className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-white font-semibold rounded-xl hover:bg-accent/90 transition-colors shadow-lg shadow-accent/25"
            >
              Konsultasi dengan Advisor
              <ArrowRight size={20} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
