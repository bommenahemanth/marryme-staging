import React, { useState, useRef } from 'react';
import {
  Languages,
  User,
  Camera,
  Trash2,
  Crown,
  Wrench,
  Feather,
  Sparkles,
  Heart,
  Leaf,
  Wind,
  Wine,
  Search,
  CheckCircle2,
  XCircle,
  Star,
  Zap,
  AlertTriangle,
  MessageSquare,
  Maximize2,
  ChevronLeft,
  ChevronRight,
  X
} from 'lucide-react';

import { CompatibilityTab } from './components';
import { TRANSLATIONS, ASTRO_DATA, ASTRO_DATA_TE, PLACEHOLDER_GALLERY, MARRIAGE_DATA, HOROSCOPE_PROFILE, MARRIAGE_DATA_TE, HOROSCOPE_PROFILE_TE } from './constants';

// --- Marriage Tab Component ---
function MarriageTab({ lang = 'en' }) {
  // Select data based on language
  const marriageData = lang === 'te' ? MARRIAGE_DATA_TE : MARRIAGE_DATA;
  const profile = lang === 'te' ? HOROSCOPE_PROFILE_TE : HOROSCOPE_PROFILE;
  const labels = lang === 'te' ? MARRIAGE_DATA_TE : {
    birthDetails: "Birth Details",
    name: "Name",
    dob: "Date of Birth",
    time: "Time",
    place: "Place",
    rashiNakshatra: "Rashi / Nakshatra",
    gotra: "Gotra",
    lagna: "Lagna (Ascendant)",
    moonPhase: "Moon Phase",
    lifePathNumber: "Life Path Number",
    bestMatch: "Best Match",
    avoid: "Avoid"
  };

  return (
    <div className="space-y-8 overflow-y-auto max-h-[70vh] pr-2">
      {/* Birth Details Card */}
      <div className="bg-gradient-to-br from-[#D4AF37]/10 to-transparent border border-[#D4AF37]/30 rounded-2xl p-6">
        <h3 className="text-2xl font-serif text-[#D4AF37] mb-4 flex items-center gap-3">
          🕉️ {labels.birthDetails}
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-black/30 p-3 rounded-lg">
            <span className="text-gray-500 text-xs uppercase">{labels.name}</span>
            <p className="text-white font-medium">{profile.name}</p>
          </div>
          <div className="bg-black/30 p-3 rounded-lg">
            <span className="text-gray-500 text-xs uppercase">{labels.dob}</span>
            <p className="text-white font-medium">{profile.dob}</p>
          </div>
          <div className="bg-black/30 p-3 rounded-lg">
            <span className="text-gray-500 text-xs uppercase">{labels.time}</span>
            <p className="text-white font-medium">{profile.time}</p>
          </div>
          <div className="bg-black/30 p-3 rounded-lg">
            <span className="text-gray-500 text-xs uppercase">{labels.place}</span>
            <p className="text-white font-medium text-sm">{profile.place}</p>
          </div>
          <div className="bg-black/30 p-3 rounded-lg">
            <span className="text-gray-500 text-xs uppercase">{labels.rashiNakshatra}</span>
            <p className="text-white font-medium">{profile.rashi} / {profile.nakshatra}</p>
          </div>
          <div className="bg-black/30 p-3 rounded-lg">
            <span className="text-gray-500 text-xs uppercase">{labels.gotra}</span>
            <p className="text-white font-medium">{profile.gotra}</p>
          </div>
          <div className="bg-black/30 p-3 rounded-lg">
            <span className="text-gray-500 text-xs uppercase">{labels.lagna}</span>
            <p className="text-white font-medium">{profile.lagna}</p>
          </div>
          <div className="bg-black/30 p-3 rounded-lg">
            <span className="text-gray-500 text-xs uppercase">{labels.moonPhase}</span>
            <p className="text-white font-medium">{profile.moonPhase}</p>
          </div>
          <div className="bg-black/30 p-3 rounded-lg">
            <span className="text-gray-500 text-xs uppercase">{labels.lifePathNumber}</span>
            <p className="text-white font-medium">{profile.lifePathNumber} — {profile.lifePathMeaning}</p>
          </div>
        </div>
      </div>

      {/* Marriage Indicators */}
      <div className="bg-[#050505] border border-[#D4AF37]/20 rounded-2xl p-6">
        <h3 className="text-2xl font-serif text-[#D4AF37] mb-4 flex items-center gap-3">
          💍 {marriageData.summary.title}
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {marriageData.summary.items.map((item, idx) => (
            <div key={idx} className="bg-black/40 p-4 rounded-xl border border-white/5 hover:border-[#D4AF37]/30 transition-all">
              <div className="flex justify-between items-start mb-2">
                <span className="text-[#D4AF37] font-bold">{item.label}</span>
                <span className="text-white text-sm text-right">{item.value}</span>
              </div>
              <p className="text-gray-400 text-sm">{item.meaning}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Partner Traits & Compatible Signs */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Partner Traits */}
        <div className="bg-[#050505] border border-pink-500/20 rounded-2xl p-6">
          <h3 className="text-xl font-serif text-pink-400 mb-4 flex items-center gap-2">
            💝 {marriageData.partnerTraits.title}
          </h3>
          <ul className="space-y-3">
            {marriageData.partnerTraits.traits.map((trait, idx) => (
              <li key={idx} className="text-gray-300 text-base flex items-center gap-2 bg-black/30 p-3 rounded-lg">
                {trait}
              </li>
            ))}
          </ul>
        </div>

        {/* Compatible Signs */}
        <div className="bg-[#050505] border border-green-500/20 rounded-2xl p-6">
          <h3 className="text-xl font-serif text-green-400 mb-4 flex items-center gap-2">
            ⭐ {marriageData.compatibleSigns.title}
          </h3>
          <div className="mb-4">
            <p className="text-gray-500 text-xs uppercase mb-2">{labels.bestMatch}</p>
            <div className="flex flex-wrap gap-2">
              {marriageData.compatibleSigns.best.map((sign, idx) => (
                <span key={idx} className="bg-green-900/30 text-green-400 px-3 py-1 rounded-full text-sm border border-green-500/30">
                  {sign}
                </span>
              ))}
            </div>
          </div>
          <div className="mb-4">
            <p className="text-gray-500 text-xs uppercase mb-2">{labels.avoid}</p>
            <div className="flex flex-wrap gap-2">
              {marriageData.compatibleSigns.avoid.map((sign, idx) => (
                <span key={idx} className="bg-red-900/30 text-red-400 px-3 py-1 rounded-full text-sm border border-red-500/30">
                  {sign}
                </span>
              ))}
            </div>
          </div>
          <p className="text-gray-400 text-sm italic">{marriageData.compatibleSigns.reason}</p>
        </div>
      </div>

      {/* Navamsa D9 Highlights */}
      <div className="bg-gradient-to-r from-purple-900/20 to-[#050505] border border-purple-500/20 rounded-2xl p-6">
        <h3 className="text-xl font-serif text-purple-400 mb-4 flex items-center gap-2">
          🔮 {marriageData.navamsa.title}
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
          <div className="bg-black/40 p-3 rounded-lg text-center">
            <span className="text-gray-500 text-xs uppercase block">{labels.lagna}</span>
            <span className="text-white font-bold">{marriageData.navamsa.lagna}</span>
          </div>
          <div className="bg-black/40 p-3 rounded-lg text-center">
            <span className="text-gray-500 text-xs uppercase block">Venus ♀️</span>
            <span className="text-green-400 font-bold text-sm">{marriageData.navamsa.venus}</span>
          </div>
          <div className="bg-black/40 p-3 rounded-lg text-center">
            <span className="text-gray-500 text-xs uppercase block">Jupiter ♃</span>
            <span className="text-white font-bold text-sm">{marriageData.navamsa.jupiter}</span>
          </div>
          <div className="bg-black/40 p-3 rounded-lg text-center">
            <span className="text-gray-500 text-xs uppercase block">Moon 🌙</span>
            <span className="text-white font-bold text-sm">{marriageData.navamsa.moon}</span>
          </div>
        </div>
        <p className="text-gray-300 text-sm italic bg-black/30 p-3 rounded-lg">✨ {marriageData.navamsa.interpretation}</p>
      </div>

      {/* Dasha Timeline */}
      <div className="bg-[#050505] border border-[#D4AF37]/20 rounded-2xl p-6">
        <h3 className="text-xl font-serif text-[#D4AF37] mb-4 flex items-center gap-2">
          📅 {marriageData.dashaTimeline.title}
        </h3>
        <div className="space-y-3 mb-4">
          {marriageData.dashaTimeline.periods.map((period, idx) => (
            <div 
              key={idx} 
              className={`flex items-center justify-between p-3 rounded-lg transition-all ${
                period.highlight 
                  ? 'bg-[#D4AF37]/20 border border-[#D4AF37]/50' 
                  : 'bg-black/30 hover:bg-black/50'
              }`}
            >
              <div className="flex items-center gap-3">
                <span className={`font-bold ${period.highlight ? 'text-[#D4AF37]' : 'text-white'}`}>
                  {period.planet}
                </span>
                <span className="text-gray-500">|</span>
                <span className="text-gray-400 text-sm">{period.period}</span>
              </div>
              <span className={`text-sm ${period.highlight ? 'text-[#D4AF37] font-bold' : 'text-gray-400'}`}>
                {period.note}
              </span>
            </div>
          ))}
        </div>
        <div className="bg-green-900/20 border border-green-500/30 p-4 rounded-xl">
          <p className="text-green-400 font-bold text-center">
            🎯 {lang === 'te' ? 'వివాహ సమయం' : 'Marriage Window'}: {marriageData.dashaTimeline.marriageWindow}
          </p>
        </div>
      </div>

      {/* Personality Profile */}
      <div className="bg-[#050505] border border-blue-500/20 rounded-2xl p-6">
        <h3 className="text-xl font-serif text-blue-400 mb-4 flex items-center gap-2">
          🧠 {marriageData.personality.title}
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {marriageData.personality.traits.map((trait, idx) => (
            <div key={idx} className="bg-black/40 p-4 rounded-xl">
              <span className="text-blue-400 font-bold text-sm uppercase">{trait.domain}</span>
              <p className="text-gray-300 mt-1">{trait.keywords}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// --- Horoscope Section ---
export function HoroscopeSection() {
  const [lang, setLang] = useState('en');
  const [activeTab, setActiveTab] = useState(0);
  const t = TRANSLATIONS[lang];
  const astroData = lang === 'te' ? ASTRO_DATA_TE : ASTRO_DATA;

  const handleLangToggle = () => setLang(prev => prev === 'en' ? 'te' : 'en');

  return (
    <div className="relative w-full min-h-screen bg-[#080808] flex flex-col p-6 lg:p-12 overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cross-stripes.png')] pointer-events-none" />
      <div className="relative z-10 flex flex-col md:flex-row justify-between items-center mb-8 border-b border-[#D4AF37]/20 pb-6">
        <div className="text-center md:text-left mb-4 md:mb-0">
          <h2 className="text-4xl md:text-5xl font-serif text-white mb-2">{t.title}</h2>
          <p className="text-[#D4AF37] uppercase tracking-[0.3em] text-xs font-bold">{t.subtitle}</p>
        </div>
        <button
          onClick={handleLangToggle}
          className="flex items-center gap-2 px-4 py-2 border border-[#D4AF37]/50 rounded-full hover:bg-[#D4AF37] hover:text-black transition-all text-[#D4AF37] text-sm font-bold"
        >
          <Languages size={16} /> {lang === 'en' ? 'EN | తెలుగు' : 'TE | English'}
        </button>
      </div>

      <div className="relative z-10 flex-grow bg-[#0c0c0c] border border-[#D4AF37]/30 rounded-3xl overflow-hidden shadow-2xl flex flex-col">
        <div className="flex flex-wrap border-b border-[#D4AF37]/20 bg-black/40">
          {t.tabs.map((tab, idx) => (
            <button
              key={idx}
              onClick={() => setActiveTab(idx)}
              className={`flex-1 py-4 px-6 text-sm md:text-base font-serif tracking-wide transition-colors ${activeTab === idx
                  ? 'bg-[#D4AF37] text-black font-bold'
                  : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="p-6 md:p-10 overflow-y-auto flex-grow">
          {activeTab === 0 && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 h-full items-center">
              <div className="h-full flex flex-col justify-center">
                <h3 className="text-xl font-serif text-[#D4AF37] mb-6 border-l-4 border-[#D4AF37] pl-3">{t.basicDetails}</h3>
                <div className="space-y-4">
                  {Object.entries(astroData.basicDetails).map(([key, val]) => (
                    <div key={key} className="flex justify-between items-center border-b border-white/5 pb-3">
                      <span className="text-gray-400 text-sm uppercase tracking-wider">{t[key.toLowerCase()] || key}</span>
                      <span className="text-white font-medium text-right">{val}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-8 p-4 bg-[#D4AF37]/10 border border-[#D4AF37]/30 rounded-xl">
                  <h4 className="text-[#D4AF37] font-bold mb-2">{t.navamsa}</h4>
                  <p className="text-gray-300 text-sm leading-relaxed">{t.navamsaDesc}</p>
                </div>
              </div>

              <div className="flex flex-col items-center justify-center h-full">
                <div className="text-center mb-4">
                  <h3 className="text-2xl font-serif text-[#D4AF37]">{t.chartTitle}</h3>
                  <p className="text-gray-500 text-xs uppercase tracking-widest">{t.chartSubtitle}</p>
                </div>

                <div className="w-full max-w-[400px] aspect-square grid grid-cols-4 grid-rows-4 border-2 border-[#D4AF37] bg-[#050505]">
                  <div className="border border-[#D4AF37]/30 p-1 flex flex-col justify-between"><span className="text-[8px] text-gray-500">Pisces</span><span className="text-[#D4AF37] text-xs font-bold text-center">Venus (Ex), Ketu</span></div>
                  <div className="border border-[#D4AF37]/30 p-1 flex flex-col justify-between"><span className="text-[8px] text-gray-500">Aries</span><span className="text-[#D4AF37] text-xs font-bold text-center">Sun (Ex)</span></div>
                  <div className="border border-[#D4AF37]/30 p-1 flex flex-col justify-between"><span className="text-[8px] text-gray-500">Taurus</span><span className="text-[#D4AF37] text-xs font-bold text-center">Mercury</span></div>
                  <div className="border border-[#D4AF37]/30 p-1 flex flex-col justify-between"><span className="text-[8px] text-gray-500">Gemini</span><span className="text-[#D4AF37] text-xs font-bold text-center"></span></div>
                  <div className="border border-[#D4AF37]/30 p-1 flex flex-col justify-between"><span className="text-[8px] text-gray-500">Aquarius</span><span className="text-[#D4AF37] text-xs font-bold text-center">Saturn</span></div>
                  <div className="col-span-2 row-span-2 border border-[#D4AF37]/30 flex items-center justify-center bg-[#D4AF37]/5">
                    <div className="text-center">
                      <div className="text-4xl mb-2">🕉️</div>
                      <span className="text-[#D4AF37] font-serif text-xl">Rasi D1</span>
                    </div>
                  </div>
                  <div className="border border-[#D4AF37]/30 p-1 flex flex-col justify-between bg-[#D4AF37]/10"><span className="text-[8px] text-gray-500">Cancer</span><span className="text-[#D4AF37] text-xs font-bold text-center">ASC, Moon</span></div>
                  <div className="border border-[#D4AF37]/30 p-1 flex flex-col justify-between"><span className="text-[8px] text-gray-500">Capricorn</span><span className="text-[#D4AF37] text-xs font-bold text-center">Jupiter (N)</span></div>
                  <div className="border border-[#D4AF37]/30 p-1 flex flex-col justify-between"><span className="text-[8px] text-gray-500">Leo</span><span className="text-[#D4AF37] text-xs font-bold text-center"></span></div>
                  <div className="border border-[#D4AF37]/30 p-1 flex flex-col justify-between"><span className="text-[8px] text-gray-500">Sagittarius</span><span className="text-[#D4AF37] text-xs font-bold text-center"></span></div>
                  <div className="border border-[#D4AF37]/30 p-1 flex flex-col justify-between"><span className="text-[8px] text-gray-500">Scorpio</span><span className="text-[#D4AF37] text-xs font-bold text-center"></span></div>
                  <div className="border border-[#D4AF37]/30 p-1 flex flex-col justify-between"><span className="text-[8px] text-gray-500">Libra</span><span className="text-[#D4AF37] text-xs font-bold text-center"></span></div>
                  <div className="border border-[#D4AF37]/30 p-1 flex flex-col justify-between"><span className="text-[8px] text-gray-500">Virgo</span><span className="text-[#D4AF37] text-xs font-bold text-center">Mars, Rahu</span></div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 1 && (
            <div className="overflow-x-auto h-full">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-[#D4AF37]/30 text-[#D4AF37] text-xs uppercase tracking-wider">
                    <th className="py-4 font-bold">{t.planet}</th>
                    <th className="py-4 font-bold">{t.sign}</th>
                    <th className="py-4 font-bold">{t.degree}</th>
                    <th className="py-4 font-bold">{t.house}</th>
                    <th className="py-4 font-bold">{t.nature}</th>
                    <th className="py-4 font-bold hidden md:table-cell">Effect</th>
                  </tr>
                </thead>
                <tbody className="text-gray-300 text-sm">
                  {astroData.planets.map((p, i) => (
                    <tr key={i} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                      <td className="py-4 font-medium text-white">{p.name}</td>
                      <td className="py-4">{p.sign}</td>
                      <td className="py-4 font-mono text-[#D4AF37]">{p.degree}</td>
                      <td className="py-4">{p.house}</td>
                      <td className="py-4">
                        <span className={`px-2 py-1 rounded text-xs ${p.nature.includes('Exalted') ? 'bg-green-900/50 text-green-400 border border-green-500/30' : p.nature.includes('Debilitated') ? 'bg-red-900/50 text-red-400 border border-red-500/30' : 'bg-gray-800 text-gray-400'}`}>
                          {p.nature}
                        </span>
                      </td>
                      <td className="py-4 text-gray-400 text-xs hidden md:table-cell">{p.effect}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {activeTab === 2 && <MarriageTab lang={lang} />}

          {activeTab === 3 && <CompatibilityTab t={t} />}
        </div>
      </div>
    </div>
  );
}

// --- About Me Section ---
export function AboutMeSection() {
  return (
    <div className="relative w-full min-h-screen bg-[#050505] flex flex-col p-6 lg:p-12 overflow-y-auto snap-start font-sans">
      <div className="absolute inset-0 z-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] pointer-events-none" />

      <div className="relative z-10 mb-10 text-center shrink-0">
        <h2 className="text-4xl md:text-6xl font-serif text-white mb-3 tracking-tight">
          Life <span className="text-[#D4AF37]">Beyond</span> The Numbers
        </h2>
        <p className="text-gray-400 text-sm uppercase tracking-widest">Grounded • Grateful • Growing</p>
      </div>

      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 max-w-[1400px] mx-auto w-full pb-20">

        {/* 1. BIO (Wide) */}
        <div className="col-span-1 md:col-span-2 bg-[#0a0a0a] border border-[#D4AF37]/30 rounded-3xl p-6 hover:border-[#D4AF37] transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-[#D4AF37]/10 group">
          <h3 className="text-xl font-serif text-[#D4AF37] mb-4 flex items-center gap-2">
            <User className="w-6 h-6" /> Outside 9-5 I DO
          </h3>
          <ul className="space-y-3 text-gray-300 text-base">
            <li className="flex items-start gap-3">
              <span className="text-[#D4AF37] mt-1">➢</span>
              <span>Walk 10 km daily (and pet <strong>'kukka bangaralu'</strong> on the way).</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#D4AF37] mt-1">➢</span>
              <span>Play badminton (I was great when my knees were younger).</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#D4AF37] mt-1">➢</span>
              <span>Give unsolicited advice (<strong>'Uchitha salahalu'</strong>, literally) to young folks who reach out to me on LinkedIn.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#D4AF37] mt-1">➢</span>
              <span>Get my hands dirty with new AI tools out there.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#D4AF37] mt-1">➢</span>
              <span>Full-time job: Annoying my little sister.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#D4AF37] mt-1">➢</span>
              <span>Exploring new tech gadgets.</span>
            </li>
          </ul>
        </div>

        {/* 2. FAITH & CORE */}
        <div className="col-span-1 bg-[#0a0a0a] border border-white/10 rounded-3xl p-6 hover:border-white/30 transition-all hover:-translate-y-1 flex flex-col justify-center text-center">
          <Sparkles className="w-8 h-8 text-yellow-400 mx-auto mb-3" />
          <h3 className="text-lg font-bold text-white mb-2">Faith</h3>
          <p className="text-sm text-gray-400 italic">
            "Grounded in faith. I believe in a Creator and a force beyond human comprehension (but you can choose otherwise)."
          </p>
        </div>

        {/* 3. LIFESTYLE */}
        <div className="col-span-1 bg-[#0a0a0a] border border-white/10 rounded-3xl p-6 hover:border-white/30 transition-all hover:-translate-y-1 flex flex-col justify-center">
          <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2 uppercase tracking-wider justify-center">
            <Leaf className="w-5 h-5 text-green-400" /> Lifestyle
          </h3>
          <div className="space-y-3 text-sm">
            <div className="flex justify-between items-center p-2 bg-white/5 rounded-lg">
              <span className="flex items-center gap-2 text-gray-300"><Wine size={16} className="text-red-400" /> Alcohol</span>
              <span className="text-gray-500 text-xs text-right max-w-[120px] leading-tight">I don't.. but you can (just don't get wasted)</span>
            </div>
            <div className="flex justify-between items-center p-2 bg-white/5 rounded-lg">
              <span className="flex items-center gap-2 text-gray-300"><Leaf size={16} className="text-green-400" /> Greens</span>
              <span className="text-gray-500 text-xs">Less (You can)</span>
            </div>
            <div className="flex justify-between items-center p-2 bg-white/5 rounded-lg border border-red-500/20">
              <span className="flex items-center gap-2 text-gray-300"><Wind size={16} className="text-gray-400" /> Smoke</span>
              <span className="text-red-400 font-bold text-xs">No Please.</span>
            </div>
          </div>
        </div>

        {/* 4. LOVES (Wide) */}
        <div className="col-span-1 md:col-span-2 bg-[#0a0a0a] border border-pink-500/20 rounded-3xl p-6 hover:border-pink-500/50 transition-all hover:-translate-y-1">
          <h3 className="text-xl font-serif text-pink-400 mb-4 flex items-center gap-2">
            <Heart className="w-6 h-6" /> Adorations
          </h3>
          <div className="flex flex-wrap gap-2">
            {[
              "Shiva 🙏", "Family 👨‍👩‍👧", "Late Maths Teacher 📐", "School Friends 🎒", "Farms 🚜", "Fruits 🍎", "Dogs 🐕", "Cows 🐄", "Elephants 🐘", "Whales 🐋",
              "Oceans 🌊", "Mahabharata 📖", "Kids 👶", "Buggalu & Pilakalu ❤️",
              "Superman (Henry Cavill) 🦸", "Capt. America (Steve Rogers) 🛡️", "Tech Gadgets 📱",
              "Sarcasm 😏", "Memes 😂", "Naruto 🍥"
            ].map((tag, i) => (
              <span key={i} className="px-3 py-1.5 bg-pink-500/5 rounded-lg text-sm text-pink-200 border border-pink-500/10 hover:bg-pink-500/20 transition-colors cursor-default">
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* 5. THE SEARCH */}
        <div className="col-span-1 md:col-span-2 lg:col-span-2 bg-gradient-to-br from-[#1a1a1a] to-black border border-[#D4AF37]/40 rounded-3xl p-6 relative overflow-hidden group flex flex-col">
          <div className="absolute top-0 right-0 w-40 h-40 bg-[#D4AF37] blur-[80px] opacity-10 pointer-events-none" />

          <h3 className="text-2xl font-serif text-[#D4AF37] mb-4 flex items-center gap-2">
            <Search className="w-6 h-6" /> The Search
          </h3>

          <div className="flex-grow grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <h4 className="text-green-400 font-bold text-sm mb-2 uppercase tracking-wider flex items-center gap-2">
                <CheckCircle2 size={16} /> Big Yes To
              </h4>
              <ul className="space-y-2 text-sm text-gray-300 pl-3 border-l-2 border-green-500/20">
                <li>• Academically Inclined</li>
                <li>• Low Digital Footprint</li>
                <li>• Growth Mindset / High EQ</li>
                <li>• Knows their finances</li>
              </ul>
            </div>

            <div>
              <h4 className="text-red-400 font-bold text-sm mb-2 uppercase tracking-wider flex items-center gap-2">
                <XCircle size={16} /> Please No
              </h4>
              <ul className="space-y-2 text-sm text-gray-300 pl-3 border-l-2 border-red-500/20">
                <li>• Heavy Social Media</li>
                <li>• Materialism</li>
                <li>• Wokeness & Strong Opinions</li>
                <li>• Constant Comparisons</li>
              </ul>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-white/10">
            <h4 className="text-yellow-400 font-bold text-sm mb-3 flex items-center gap-2 uppercase tracking-wider">
              <Star size={16} /> Bonus Points If...
            </h4>
            <div className="flex flex-wrap gap-2">
              {["Naruto Fan", "Great Meme Game", "Dog Lover", "Smiles often", "Spiritual", "Anime girl", "Dress elegant", "Puts on Bindi", "Buys me Pocket Pom", "Lets me buy tech gadgets", "Hiker", "Gets me Boba"].map((b, i) => (
                <span key={i} className="text-xs bg-yellow-400/10 text-yellow-200 px-2 py-1 rounded border border-yellow-400/20">{b}</span>
              ))}
            </div>
          </div>
        </div>

        {/* 6. SUPERPOWERS */}
        <div className="col-span-1 md:col-span-2 lg:col-span-2 bg-[#0a110a] border border-green-500/30 rounded-3xl p-6 hover:border-green-500/60 transition-all hover:-translate-y-1">
          <h4 className="text-green-400 font-bold text-lg mb-4 flex items-center gap-2 uppercase tracking-wider">
            <Zap className="w-5 h-5" /> Superpowers
          </h4>
          <ul className="space-y-3">
            <li className="flex gap-3 text-sm text-gray-300 bg-green-900/10 p-2 rounded">
              <span className="font-bold text-green-500">01</span> Sharing memes faster than the flu spreads.
            </li>
            <li className="flex gap-3 text-sm text-gray-300 bg-green-900/10 p-2 rounded">
              <span className="font-bold text-green-500">02</span> Planning travel (Solo traveled 10+ European countries).
            </li>
            <li className="flex gap-3 text-sm text-gray-300 bg-green-900/10 p-2 rounded">
              <span className="font-bold text-green-500">03</span> Mahadev's grace, solid friendships, and a wonderful family.
            </li>
          </ul>
        </div>

        {/* 7. KRYPTONITE */}
        <div className="col-span-1 md:col-span-2 lg:col-span-2 bg-[#110a0a] border border-red-500/30 rounded-3xl p-6 hover:border-red-500/60 transition-all hover:-translate-y-1">
          <h4 className="text-red-400 font-bold text-lg mb-4 flex items-center gap-2 uppercase tracking-wider">
            <AlertTriangle className="w-5 h-5" /> Not So Super
          </h4>
          <ul className="space-y-3">
            <li className="flex gap-3 text-sm text-gray-300 bg-red-900/10 p-2 rounded">
              <span className="font-bold text-red-500">01</span> Potential to bring Kitchen to ashes.
            </li>
            <li className="flex gap-3 text-sm text-gray-300 bg-red-900/10 p-2 rounded">
              <span className="font-bold text-red-500">02</span> Keep asking for a dog, baby cow, or an elephant (Please…).
            </li>
            <li className="flex gap-3 text-sm text-gray-300 bg-red-900/10 p-2 rounded">
              <span className="font-bold text-red-500">03</span> Self esteem could use a little work.
            </li>
          </ul>
        </div>

        {/* 8. CLOSING QUOTE */}
        <div className="col-span-1 md:col-span-2 lg:col-span-4 text-center py-8 border-t border-white/10 mt-4">
          <MessageSquare className="w-8 h-8 text-[#D4AF37] mx-auto mb-4 opacity-50" />
          <p className="text-gray-300 text-lg italic mb-6 max-w-3xl mx-auto leading-relaxed">
            "I understand everyone has their flaws, but ideally I hope for a partner with high EQ, someone who can point out my mistakes and help me grow into a better version of myself each day. I see feedback as a gift, and I'm willing to work on myself."
          </p>
          <div className="inline-block px-6 py-3 bg-[#D4AF37]/10 rounded-full border border-[#D4AF37]/30">
            <p className="text-[#D4AF37] font-serif text-xl font-bold animate-pulse">
              "Gayyali danivi ina parledu if you tick the above boxes."
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}

// --- Family Section ---
export function FamilySection({ profile }) {
  const [fullscreenImage, setFullscreenImage] = useState(null);

  return (
    <div className="relative w-full min-h-screen bg-[#080808] flex flex-col p-6 lg:p-12 overflow-hidden snap-start font-sans">
      {/* Background texture */}
      <div className="absolute inset-0 z-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/wood-pattern.png')] pointer-events-none" />
      
      {/* Ambient glow effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="relative z-10 mb-12 text-center">
        <h2 className="text-4xl md:text-6xl font-serif text-white mb-3 tracking-tight">
          The <span className="text-[#D4AF37]">Inner</span> Circle
        </h2>
        <p className="text-gray-400 text-sm uppercase tracking-widest">Grateful • Fun • Everything</p>
      </div>

      <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto w-full flex-grow items-center">

        {/* DAD CARD */}
        <div className="bg-[#0c0c0c]/80 backdrop-blur-sm border border-[#D4AF37]/20 rounded-3xl overflow-hidden group hover:border-[#D4AF37]/60 transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl hover:shadow-[#D4AF37]/20 flex flex-col h-full">
          <div 
            className="h-64 bg-gradient-to-b from-gray-800 to-black relative cursor-pointer overflow-hidden"
            onClick={() => setFullscreenImage(profile.dadPhoto)}
          >
            {profile.dadPhoto && (
              <img src={profile.dadPhoto} alt="Dad" className="w-full h-full object-cover object-top opacity-90 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700" />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[#D4AF37]/5" />
          </div>
          <div className="p-6 flex-grow flex flex-col bg-gradient-to-b from-[#0c0c0c] to-[#080808]">
            <div className="flex justify-between items-start mb-5">
              <div>
                <h3 className="text-2xl font-serif text-white font-bold tracking-tight">Father</h3>
                <p className="text-[#D4AF37] text-xs font-bold uppercase tracking-wider mt-1">Srinivas Rao</p>
              </div>
              <div className="p-2 bg-[#D4AF37]/10 rounded-xl group-hover:bg-[#D4AF37]/20 transition-colors">
                <Wrench className="text-[#D4AF37]" size={20} />
              </div>
            </div>
            <div className="space-y-3 flex-grow">
              <div className="flex items-start gap-3 group/item">
                <span className="text-[#D4AF37] mt-0.5">⚙️</span>
                <p className="text-gray-300 text-sm leading-relaxed">Mechanical Engineer & Head of Ops at NBEIL</p>
              </div>
              <div className="flex items-start gap-3 group/item">
                <span className="text-[#D4AF37] mt-0.5">🔢</span>
                <p className="text-gray-300 text-sm leading-relaxed">Good with numbers & kind to people</p>
              </div>
              <div className="flex items-start gap-3 group/item">
                <span className="text-[#D4AF37] mt-0.5">⏰</span>
                <p className="text-gray-300 text-sm leading-relaxed">Extremely disciplined</p>
              </div>
              <div className="flex items-start gap-3 group/item">
                <span className="text-[#D4AF37] mt-0.5">🍕</span>
                <p className="text-gray-300 text-sm leading-relaxed">Will secretly feed you junk food</p>
              </div>
            </div>
          </div>
        </div>

        {/* MOM CARD - Center, Elevated */}
        <div className="bg-[#0c0c0c]/80 backdrop-blur-sm border-2 border-[#D4AF37]/50 rounded-3xl overflow-hidden group hover:border-[#D4AF37] hover:shadow-[0_0_60px_rgba(212,175,55,0.3)] transition-all duration-500 hover:-translate-y-5 flex flex-col h-full relative z-20 scale-105">
          {/* Crown badge */}
          <div className="absolute top-4 left-1/2 -translate-x-1/2 z-30 bg-black/70 p-3 rounded-full backdrop-blur-md border border-[#D4AF37]/50 group-hover:bg-[#D4AF37]/20 transition-colors duration-500">
            <Crown className="text-[#D4AF37] fill-[#D4AF37]" size={24} />
          </div>
          <div 
            className="h-72 bg-gradient-to-b from-gray-800 to-black relative cursor-pointer overflow-hidden"
            onClick={() => setFullscreenImage(profile.momPhoto)}
          >
            {profile.momPhoto && (
              <img src={profile.momPhoto} alt="Mom" className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700" />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[#D4AF37]/10" />
          </div>
          <div className="p-8 flex-grow flex flex-col text-center bg-gradient-to-b from-[#0c0c0c] to-[#080808]">
            <h3 className="text-2xl font-serif text-white font-bold tracking-tight">Mother</h3>
            <p className="text-[#D4AF37] text-xs font-bold uppercase tracking-wider mt-1 mb-5">Savithri (Home Minister)</p>
            <div className="space-y-3 flex-grow text-left">
              <div className="flex items-start gap-3">
                <span className="text-[#D4AF37] mt-0.5">👑</span>
                <p className="text-gray-300 text-sm leading-relaxed">Laxmi of our house, elegant and intelligent</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-[#D4AF37] mt-0.5">🦍</span>
                <p className="text-gray-300 text-sm leading-relaxed">She said: "Apes together strong."</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-[#D4AF37] mt-0.5">⚖️</span>
                <p className="text-gray-300 text-sm leading-relaxed">The ultimate decision maker</p>
              </div>
            </div>
          </div>
        </div>

        {/* SISTER CARD */}
        <div className="bg-[#0c0c0c]/80 backdrop-blur-sm border border-[#D4AF37]/20 rounded-3xl overflow-hidden group hover:border-[#D4AF37]/60 transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl hover:shadow-[#D4AF37]/20 flex flex-col h-full">
          <div 
            className="h-64 bg-gradient-to-b from-gray-800 to-black relative cursor-pointer overflow-hidden"
            onClick={() => setFullscreenImage(profile.sisPhoto)}
          >
            {profile.sisPhoto && (
              <img src={profile.sisPhoto} alt="Sister" className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700" />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[#D4AF37]/5" />
          </div>
          <div className="p-6 flex-grow flex flex-col bg-gradient-to-b from-[#0c0c0c] to-[#080808]">
            <div className="flex justify-between items-start mb-5">
              <div>
                <h3 className="text-2xl font-serif text-white font-bold tracking-tight">Sister</h3>
                <p className="text-[#D4AF37] text-xs font-bold uppercase tracking-wider mt-1">Meghana</p>
              </div>
              <div className="p-2 bg-[#D4AF37]/10 rounded-xl group-hover:bg-[#D4AF37]/20 transition-colors">
                <Feather className="text-[#D4AF37]" size={20} />
              </div>
            </div>
            <div className="space-y-3 flex-grow">
              <div className="flex items-start gap-3">
                <span className="text-[#D4AF37] mt-0.5">💎</span>
                <p className="text-gray-300 text-sm leading-relaxed">Little Laxmi (In our house and the next)</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-[#D4AF37] mt-0.5">🇺🇸</span>
                <p className="text-gray-300 text-sm leading-relaxed">Reason I moved to US. Dallas grad.</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-[#D4AF37] mt-0.5">🍳</span>
                <p className="text-gray-300 text-sm leading-relaxed">Minimalist, creative, and a good cook</p>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Fullscreen Image Modal */}
      {fullscreenImage && (
        <div 
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 cursor-pointer animate-fadeIn"
          onClick={() => setFullscreenImage(null)}
        >
          <div className="relative max-w-5xl max-h-[90vh] animate-zoomIn">
            <img 
              src={fullscreenImage} 
              alt="Fullscreen" 
              className="max-w-full max-h-[90vh] object-contain rounded-2xl shadow-2xl shadow-[#D4AF37]/20"
            />
            <button 
              className="absolute top-4 right-4 p-3 bg-black/50 backdrop-blur rounded-full hover:bg-[#D4AF37] hover:text-black transition-all border border-white/20"
              onClick={() => setFullscreenImage(null)}
            >
              <X size={24} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

// --- Gallery Section ---
export function GallerySection({ profile }) {
  const [fullscreenIndex, setFullscreenIndex] = useState(null);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  
  // Minimum swipe distance
  const minSwipeDistance = 50;

  const images = (profile.galleryImages && profile.galleryImages.length > 0)
    ? profile.galleryImages
    : PLACEHOLDER_GALLERY;

  const displayImages = [...images];
  while (displayImages.length < 15) {
    displayImages.push(PLACEHOLDER_GALLERY[displayImages.length % PLACEHOLDER_GALLERY.length]);
  }
  const finalImages = displayImages.slice(0, 15);

  return (
    <div className="relative w-full min-h-screen bg-[#080808] flex flex-col p-6 lg:p-12 overflow-hidden snap-start font-sans">
      {/* Background texture */}
      <div className="absolute inset-0 z-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/diamond-upholstery.png')] pointer-events-none" />
      
      {/* Ambient glow effects */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-[#D4AF37]/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] bg-[#D4AF37]/5 rounded-full blur-[150px] pointer-events-none" />
      
      <div className="relative z-10 mb-10 text-center">
        <h2 className="text-4xl md:text-6xl font-serif text-white mb-3 tracking-tight">
          Life in <span className="text-[#D4AF37]">Frames</span>
        </h2>
        <p className="text-gray-400 text-sm uppercase tracking-widest">Memories • Travels • Life</p>
      </div>

      <div className="relative z-10 flex-grow overflow-y-auto pb-12 max-w-[1600px] mx-auto w-full">
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {finalImages.map((img, index) => (
            <div
              key={index}
              className="relative group break-inside-avoid rounded-2xl overflow-hidden border border-white/10 cursor-pointer hover:border-[#D4AF37]/50 transition-all duration-500 hover:shadow-2xl hover:shadow-[#D4AF37]/20"
              onClick={() => setFullscreenIndex(index)}
            >
              <img
                src={img}
                alt={`Gallery ${index}`}
                className="w-full h-auto object-cover transition-all duration-700 opacity-85 group-hover:opacity-100 group-hover:scale-110"
              />
              
              {/* Hover overlay with zoom icon */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
                <div className="p-4 bg-black/40 backdrop-blur-sm rounded-full border border-[#D4AF37]/30 transform scale-75 group-hover:scale-100 transition-transform duration-500">
                  <Maximize2 className="text-[#D4AF37] w-6 h-6" />
                </div>
              </div>
              
              {/* Golden glow on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[#D4AF37]/5 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>

      {/* Fullscreen Image Modal with Navigation */}
      {fullscreenIndex !== null && (
        <div 
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 animate-fadeIn"
          onClick={(e) => {
            if (e.target === e.currentTarget) setFullscreenIndex(null);
          }}
          onTouchStart={(e) => {
            setTouchEnd(null);
            setTouchStart(e.targetTouches[0].clientX);
          }}
          onTouchMove={(e) => setTouchEnd(e.targetTouches[0].clientX)}
          onTouchEnd={() => {
            if (!touchStart || !touchEnd) return;
            const distance = touchStart - touchEnd;
            const isLeftSwipe = distance > minSwipeDistance;
            const isRightSwipe = distance < -minSwipeDistance;
            if (isLeftSwipe && fullscreenIndex < finalImages.length - 1) {
              setFullscreenIndex(fullscreenIndex + 1);
            }
            if (isRightSwipe && fullscreenIndex > 0) {
              setFullscreenIndex(fullscreenIndex - 1);
            }
          }}
        >
          {/* Left Arrow */}
          <button 
            className={`absolute left-4 md:left-8 z-10 p-3 md:p-4 bg-black/60 backdrop-blur rounded-full hover:bg-[#D4AF37] hover:text-black transition-all duration-300 border border-white/20 hover:scale-110 ${fullscreenIndex === 0 ? 'opacity-30 pointer-events-none' : 'opacity-100'}`}
            onClick={(e) => {
              e.stopPropagation();
              if (fullscreenIndex > 0) setFullscreenIndex(fullscreenIndex - 1);
            }}
          >
            <ChevronLeft size={28} />
          </button>

          <div className="relative max-w-6xl max-h-[90vh] animate-zoomIn">
            <img 
              src={finalImages[fullscreenIndex]} 
              alt="Fullscreen" 
              className="max-w-full max-h-[85vh] object-contain rounded-2xl shadow-2xl shadow-[#D4AF37]/30"
            />
            
            {/* Close button */}
            <button 
              className="absolute top-4 right-4 p-3 bg-black/50 backdrop-blur rounded-full hover:bg-[#D4AF37] hover:text-black transition-all duration-300 border border-white/20 hover:scale-110"
              onClick={() => setFullscreenIndex(null)}
            >
              <X size={24} />
            </button>

            {/* Image counter */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 px-4 py-2 bg-black/60 backdrop-blur rounded-full text-white/80 text-sm border border-white/10">
              {fullscreenIndex + 1} / {finalImages.length}
            </div>
          </div>

          {/* Right Arrow */}
          <button 
            className={`absolute right-4 md:right-8 z-10 p-3 md:p-4 bg-black/60 backdrop-blur rounded-full hover:bg-[#D4AF37] hover:text-black transition-all duration-300 border border-white/20 hover:scale-110 ${fullscreenIndex === finalImages.length - 1 ? 'opacity-30 pointer-events-none' : 'opacity-100'}`}
            onClick={(e) => {
              e.stopPropagation();
              if (fullscreenIndex < finalImages.length - 1) setFullscreenIndex(fullscreenIndex + 1);
            }}
          >
            <ChevronRight size={28} />
          </button>
        </div>
      )}
    </div>
  );
}
