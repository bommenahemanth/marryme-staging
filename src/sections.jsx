import React, { useState, useRef, useEffect } from 'react';
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
  X,
  ArrowUp, Calculator, Clock, Pizza, Scale, Gem, Plane, ChefHat, Cpu, Users, Instagram, MessageCircle, Triangle, BarChart3, Diamond, Dog, Flame, GraduationCap, Map, Megaphone, MonitorSmartphone, Share2, TrendingUp, Wallet, WifiOff, Backpack, Tractor, Apple, PawPrint, Mountain, Waves, Compass, Book, Baby, HeartHandshake, Shield, Smartphone, Smile, Tv, Footprints, Activity, Lightbulb, Bot, Mail, CreditCard, Target, Carrot, Music, Coffee, Calendar} from 'lucide-react';

import { CompatibilityTab , NetworkBackground, StarField } from './components';
import { TRANSLATIONS, ASTRO_DATA, ASTRO_DATA_TE, PLACEHOLDER_GALLERY, MARRIAGE_DATA, HOROSCOPE_PROFILE, MARRIAGE_DATA_TE, HOROSCOPE_PROFILE_TE, ZODIAC_SIGNS, PLANET_NAMES, CHART_HIGHLIGHTS } from './constants';

// --- Marriage Tab Component ---
function MarriageTab({ lang = 'en' }) {
  const marriageData = lang === 'te' ? MARRIAGE_DATA_TE : MARRIAGE_DATA;
  const profile = lang === 'te' ? HOROSCOPE_PROFILE_TE : HOROSCOPE_PROFILE;
  const labels = lang === 'te' ? MARRIAGE_DATA_TE : {
    birthDetails: "Birth Details", name: "Name", dob: "Date of Birth", time: "Time", place: "Place",
    rashiNakshatra: "Rashi / Nakshatra", gotra: "Gotra", lagna: "Lagna (Ascendant)", moonPhase: "Moon Phase",
    lifePathNumber: "Life Path Number", bestMatch: "Best Match", avoid: "Avoid"
  };

  return (
    <div className="space-y-6">
      {/* Row 1: Birth Details + Marriage Indicators */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Birth Details */}
        <div className="bg-gradient-to-br from-[#D4AF37]/10 to-transparent border border-[#D4AF37]/30 rounded-xl p-5 hover:border-[#D4AF37]/60 transition-all duration-500 hover:shadow-xl hover:shadow-[#D4AF37]/20 hover:-translate-y-1 opacity-0 animate-fadeInUp" style={{ animationDelay: '100ms', animationFillMode: 'forwards' }}>
          <h3 className="text-lg font-serif text-[#D4AF37] mb-4 flex items-center gap-3">
            <Sparkles size={18} className="animate-pulse" /> {labels.birthDetails}
          </h3>
          <div className="grid grid-cols-3 gap-3">
            {[
              { label: labels.name, value: profile.name, span: 1 },
              { label: labels.dob, value: profile.dob, span: 1 },
              { label: labels.time, value: profile.time, span: 1 },
              { label: labels.place, value: profile.place, span: 2, small: true },
              { label: labels.rashiNakshatra, value: `${profile.rashi} / ${profile.nakshatra}`, span: 1, small: true },
              { label: labels.gotra, value: profile.gotra, span: 1 },
              { label: labels.lagna, value: profile.lagna, span: 1, small: true },
              { label: labels.moonPhase, value: profile.moonPhase, span: 1, small: true },
              { label: labels.lifePathNumber, value: `${profile.lifePathNumber} — ${profile.lifePathMeaning}`, span: 3 }
            ].map((item, idx) => (
              <div key={idx} className={`bg-black/30 p-3 rounded-lg hover:bg-black/50 transition-all duration-300 hover:scale-[1.03] hover:shadow-lg hover:shadow-[#D4AF37]/10 opacity-0 animate-fadeInUp ${item.span === 2 ? 'col-span-2' : item.span === 3 ? 'col-span-3' : ''}`} style={{ animationDelay: `${150 + idx * 50}ms`, animationFillMode: 'forwards' }}>
                <span className="text-gray-500 text-xs uppercase block">{item.label}</span>
                <p className={`text-white font-medium ${item.small ? 'text-xs' : 'text-sm'}`}>{item.value}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Marriage Indicators */}
        <div className="bg-[#050505] border border-[#D4AF37]/20 rounded-xl p-5 flex flex-col h-full hover:border-[#D4AF37]/50 transition-all duration-500 hover:shadow-xl hover:shadow-[#D4AF37]/20 hover:-translate-y-1 opacity-0 animate-fadeInUp" style={{ animationDelay: '200ms', animationFillMode: 'forwards' }}>
          <h3 className="text-lg font-serif text-[#D4AF37] mb-4 flex items-center gap-3">
            <Heart size={18} className="animate-pulse" /> {marriageData.summary.title}
          </h3>
          <div className="grid grid-cols-2 gap-4 flex-1">
            {marriageData.summary.items.map((item, idx) => (
              <div key={idx} className="bg-black/40 p-4 rounded-lg border border-white/5 flex flex-col justify-center hover:bg-black/60 hover:border-[#D4AF37]/30 transition-all duration-300 hover:scale-[1.03] hover:shadow-lg hover:shadow-[#D4AF37]/10 opacity-0 animate-fadeInUp" style={{ animationDelay: `${250 + idx * 80}ms`, animationFillMode: 'forwards' }}>
                <div className="flex justify-between items-start mb-2">
                  <span className="text-[#D4AF37] font-bold text-sm">{item.label}</span>
                  <span className="text-white text-xs text-right">{item.value}</span>
                </div>
                <p className="text-gray-400 text-sm">{item.meaning}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Row 2: Navamsa + Partner Traits + Compatible Signs */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Navamsa D9 */}
        <div className="bg-gradient-to-r from-purple-900/20 to-[#050505] border border-purple-500/20 rounded-xl p-5 flex flex-col hover:border-purple-500/50 transition-all duration-500 hover:shadow-xl hover:shadow-purple-500/20 hover:-translate-y-1 opacity-0 animate-fadeInUp" style={{ animationDelay: '300ms', animationFillMode: 'forwards' }}>
          <h3 className="text-base font-serif text-purple-400 mb-4 flex items-center gap-3">
            <Compass size={16} className="animate-pulse" /> {marriageData.navamsa.title}
          </h3>
          <div className="grid grid-cols-2 gap-3 mb-4 flex-1">
            <div className="bg-black/40 p-4 rounded-lg text-center flex flex-col justify-center hover:bg-black/60 hover:scale-[1.03] transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10">
              <span className="text-gray-500 text-xs uppercase block mb-1">Lagna</span>
              <span className="text-white text-base font-bold">{marriageData.navamsa.lagna}</span>
            </div>
            <div className="bg-black/40 p-4 rounded-lg text-center flex flex-col justify-center hover:bg-black/60 hover:scale-[1.03] transition-all duration-300 hover:shadow-lg hover:shadow-green-500/10">
              <span className="text-gray-500 text-xs uppercase block mb-1">Venus</span>
              <span className="text-green-400 text-sm font-bold">{marriageData.navamsa.venus}</span>
            </div>
            <div className="bg-black/40 p-4 rounded-lg text-center flex flex-col justify-center hover:bg-black/60 hover:scale-[1.03] transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10">
              <span className="text-gray-500 text-xs uppercase block mb-1">Jupiter</span>
              <span className="text-white text-sm font-bold">{marriageData.navamsa.jupiter}</span>
            </div>
            <div className="bg-black/40 p-4 rounded-lg text-center flex flex-col justify-center hover:bg-black/60 hover:scale-[1.03] transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10">
              <span className="text-gray-500 text-xs uppercase block mb-1">Moon</span>
              <span className="text-white text-sm font-bold">{marriageData.navamsa.moon}</span>
            </div>
          </div>
          <p className="text-gray-300 text-sm italic bg-black/30 p-4 rounded-lg hover:bg-black/50 transition-all duration-300">{marriageData.navamsa.interpretation}</p>
        </div>

        {/* Partner Traits */}
        <div className="bg-[#050505] border border-pink-500/20 rounded-xl p-5 flex flex-col hover:border-pink-500/50 transition-all duration-500 hover:shadow-xl hover:shadow-pink-500/20 hover:-translate-y-1 opacity-0 animate-fadeInUp" style={{ animationDelay: '400ms', animationFillMode: 'forwards' }}>
          <h3 className="text-base font-serif text-pink-400 mb-4 flex items-center gap-3">
            <Heart size={16} className="animate-pulse" /> {marriageData.partnerTraits.title}
          </h3>
          <ul className="space-y-2 flex-1 flex flex-col justify-between">
            {marriageData.partnerTraits.traits.map((trait, idx) => {
              const icons = [
                <Sparkles key="s" size={14} className="text-pink-400 flex-shrink-0" />,
                <Heart key="h" size={14} className="text-pink-400 flex-shrink-0" />,
                <GraduationCap key="g" size={14} className="text-pink-400 flex-shrink-0" />,
                <Gem key="ge" size={14} className="text-pink-400 flex-shrink-0" />,
                <HeartHandshake key="hh" size={14} className="text-pink-400 flex-shrink-0" />,
                <Scale key="sc" size={14} className="text-pink-400 flex-shrink-0" />
              ];
              return (
                <li key={idx} className="text-gray-300 text-sm flex items-center gap-3 bg-black/30 p-3 rounded-lg hover:bg-black/50 hover:translate-x-1 hover:shadow-lg hover:shadow-pink-500/10 transition-all duration-300 opacity-0 animate-fadeInUp" style={{ animationDelay: `${450 + idx * 60}ms`, animationFillMode: 'forwards' }}>
                  {icons[idx]} {trait}
                </li>
              );
            })}
          </ul>
        </div>

        {/* Compatible Signs */}
        <div className="bg-[#050505] border border-green-500/20 rounded-xl p-5 flex flex-col hover:border-green-500/50 transition-all duration-500 hover:shadow-xl hover:shadow-green-500/20 hover:-translate-y-1 opacity-0 animate-fadeInUp" style={{ animationDelay: '500ms', animationFillMode: 'forwards' }}>
          <h3 className="text-base font-serif text-green-400 mb-4 flex items-center gap-3">
            <Star size={16} className="animate-pulse" /> {marriageData.compatibleSigns.title}
          </h3>
          <div className="flex-1 flex flex-col justify-center space-y-4">
            <div className="bg-black/30 p-4 rounded-lg hover:bg-black/50 transition-all duration-300">
              <p className="text-gray-500 text-xs uppercase mb-2">{labels.bestMatch}</p>
              <div className="flex flex-wrap gap-2">
                {marriageData.compatibleSigns.best.map((sign, idx) => (
                  <span key={idx} className="bg-green-900/40 text-green-400 px-3 py-1.5 rounded-full text-sm font-medium border border-green-500/30 hover:bg-green-900/60 hover:border-green-500/60 hover:scale-105 hover:shadow-lg hover:shadow-green-500/20 transition-all duration-300 cursor-default">{sign}</span>
                ))}
              </div>
            </div>
            <div className="bg-black/30 p-4 rounded-lg hover:bg-black/50 transition-all duration-300">
              <p className="text-gray-500 text-xs uppercase mb-2">{labels.avoid}</p>
              <div className="flex flex-wrap gap-2">
                {marriageData.compatibleSigns.avoid.map((sign, idx) => (
                  <span key={idx} className="bg-red-900/40 text-red-400 px-3 py-1.5 rounded-full text-sm font-medium border border-red-500/30 hover:bg-red-900/60 hover:border-red-500/60 hover:scale-105 hover:shadow-lg hover:shadow-red-500/20 transition-all duration-300 cursor-default">{sign}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Row 3: Dasha Timeline + Personality */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Dasha Timeline */}
        <div className="bg-[#050505] border border-[#D4AF37]/20 rounded-xl p-5 flex flex-col h-full hover:border-[#D4AF37]/50 transition-all duration-500 hover:shadow-xl hover:shadow-[#D4AF37]/20 hover:-translate-y-1 opacity-0 animate-fadeInUp" style={{ animationDelay: '600ms', animationFillMode: 'forwards' }}>
          <h3 className="text-base font-serif text-[#D4AF37] mb-4 flex items-center gap-3">
            <Calendar size={16} className="animate-pulse" /> {marriageData.dashaTimeline.title}
          </h3>
          <div className="space-y-2 mb-4 flex-1">
            {marriageData.dashaTimeline.periods.map((period, idx) => (
              <div key={idx} className={`flex items-center justify-between p-3 rounded-lg text-xs hover:translate-x-1 transition-all duration-300 opacity-0 animate-fadeInUp ${period.highlight ? 'bg-[#D4AF37]/20 border border-[#D4AF37]/50 hover:bg-[#D4AF37]/30' : 'bg-black/30 hover:bg-black/50'}`} style={{ animationDelay: `${650 + idx * 60}ms`, animationFillMode: 'forwards' }}>
                <div className="flex items-center gap-3">
                  <span className={`font-bold ${period.highlight ? 'text-[#D4AF37]' : 'text-white'}`}>{period.planet}</span>
                  <span className="text-gray-500">|</span>
                  <span className="text-gray-400">{period.period}</span>
                </div>
                <span className={`${period.highlight ? 'text-[#D4AF37] font-bold' : 'text-gray-400'}`}>{period.note}</span>
              </div>
            ))}
          </div>
          <div className="bg-green-900/20 border border-green-500/30 p-3 rounded-lg hover:bg-green-900/30 hover:border-green-500/50 hover:scale-[1.02] transition-all duration-300">
            <p className="text-green-400 font-bold text-center text-sm flex items-center justify-center gap-3">
              <Target size={14} className="animate-pulse" /> {lang === 'te' ? 'వివాహ సమయం' : 'Marriage Window'}: {marriageData.dashaTimeline.marriageWindow}
            </p>
          </div>
        </div>

        {/* Personality Profile */}
        <div className="bg-[#050505] border border-blue-500/20 rounded-xl p-5 flex flex-col h-full hover:border-blue-500/50 transition-all duration-500 hover:shadow-xl hover:shadow-blue-500/20 hover:-translate-y-1 opacity-0 animate-fadeInUp" style={{ animationDelay: '700ms', animationFillMode: 'forwards' }}>
          <h3 className="text-base font-serif text-blue-400 mb-4 flex items-center gap-3">
            <Sparkles size={16} className="animate-pulse" /> {marriageData.personality.title}
          </h3>
          <div className="grid grid-cols-2 gap-4 flex-1">
            {marriageData.personality.traits.map((trait, idx) => (
              <div key={idx} className="bg-black/40 p-4 rounded-lg flex flex-col justify-center hover:bg-black/60 hover:scale-[1.03] hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300 opacity-0 animate-fadeInUp" style={{ animationDelay: `${750 + idx * 80}ms`, animationFillMode: 'forwards' }}>
                <span className="text-blue-400 font-bold text-sm uppercase">{trait.domain}</span>
                <p className="text-gray-300 text-sm mt-1">{trait.keywords}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// --- Horoscope Section ---
export function HoroscopeSection({ scrollToTop }) {
  const [lang, setLang] = useState('en');
  const [activeTab, setActiveTab] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const t = TRANSLATIONS[lang];
  const astroData = lang === 'te' ? ASTRO_DATA_TE : ASTRO_DATA;

  const handleLangToggle = () => setLang(prev => prev === 'en' ? 'te' : 'en');
  
  const handleTabChange = (idx) => {
    if (idx === activeTab) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setActiveTab(idx);
      setIsTransitioning(false);
    }, 150);
  };

  return (
    <div className="relative w-full min-h-screen bg-[#080808] flex flex-col p-4 sm:p-4 sm:p-6 lg:p-12 overflow-visible">
      <NetworkBackground />
      <StarField count={25} />
      <div className="sticky top-0 z-50 w-full px-4 sm:px-8 py-3 sm:py-4 flex justify-between items-center bg-black/95 backdrop-blur-xl border-b border-[#D4AF37]/20 mb-3">
        <div>
          <h2 className="text-2xl sm:text-3xl font-serif text-white tracking-wide">
            {t.title}
          </h2>
          <p className="text-[#D4AF37] uppercase tracking-[0.2em] text-xs font-bold mt-1">{t.subtitle}</p>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={handleLangToggle}
            className="flex items-center gap-2 px-3 py-2 border border-[#D4AF37]/50 rounded-full hover:bg-[#D4AF37] hover:text-black transition-all text-[#D4AF37] text-xs font-bold"
          >
            <Languages size={14} /> {lang === 'en' ? 'తెలుగు' : 'EN'}
          </button>
          <button onClick={scrollToTop} className="group flex items-center gap-2 text-xs text-[#D4AF37] hover:text-white transition-colors bg-white/5 px-4 py-2 rounded-full border border-[#D4AF37]/20">
            <span>Back to Top</span>
            <ArrowUp className="w-3 h-3 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>

      <div className="relative z-10 flex-grow bg-[#0c0c0c] border border-[#D4AF37]/30 rounded-3xl overflow-hidden shadow-2xl flex flex-col reveal-on-scroll">
        <div className="flex flex-wrap border-b border-[#D4AF37]/20 bg-black/40">
          {t.tabs.map((tab, idx) => (
            <button
              key={idx}
              onClick={() => handleTabChange(idx)}
              className={`flex-1 min-w-[100px] py-3 px-3 md:py-4 md:px-6 text-xs sm:text-sm md:text-base font-serif tracking-wide transition-all duration-300 relative overflow-hidden ${activeTab === idx
                  ? 'bg-[#D4AF37] text-black font-bold shadow-lg shadow-[#D4AF37]/30'
                  : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`}
            >
              <span className="relative z-10">{tab}</span>
              {activeTab === idx && (
                <span className="absolute inset-0 bg-gradient-to-r from-[#D4AF37] via-[#F4D03F] to-[#D4AF37] animate-shimmer" />
              )}
            </button>
          ))}
        </div>

        <div className={`p-6 md:p-10 overflow-y-auto flex-grow transition-all duration-300 ${isTransitioning ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}`}>
          {activeTab === 0 && (
            <div className="space-y-6 animate-fadeInUp">
              {/* Row 1: Basic Details + Rasi Chart */}
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
                {/* Basic Details - 2 cols */}
                <div className="lg:col-span-2 bg-[#050505] border border-[#D4AF37]/20 rounded-xl p-5 hover:border-[#D4AF37]/50 transition-all duration-500 hover:shadow-lg hover:shadow-[#D4AF37]/10 group">
                  <h3 className="text-lg font-serif text-[#D4AF37] mb-4 border-l-4 border-[#D4AF37] pl-3">{t.basicDetails}</h3>
                  <div className="space-y-3">
                    {Object.entries(astroData.basicDetails).map(([key, val], index) => (
                      <div key={key} className="flex justify-between items-center bg-black/30 p-3 rounded-lg hover:bg-black/50 transition-all duration-300 transform hover:translate-x-1" style={{ animationDelay: `${index * 50}ms` }}>
                        <span className="text-gray-400 text-sm uppercase tracking-wider">{t[key.toLowerCase()] || key}</span>
                        <span className="text-white font-medium text-right text-sm">{val}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 p-4 bg-[#D4AF37]/10 border border-[#D4AF37]/30 rounded-xl">
                    <h4 className="text-[#D4AF37] font-bold mb-2">{t.navamsa}</h4>
                    <p className="text-gray-300 text-sm leading-relaxed">{t.navamsaDesc}</p>
                  </div>
                </div>

                {/* Rasi Chart - 3 cols */}
                <div className="lg:col-span-3 bg-[#050505] border border-[#D4AF37]/20 rounded-xl p-5 hover:border-[#D4AF37]/50 transition-all duration-500 hover:shadow-lg hover:shadow-[#D4AF37]/10">
                  <div className="text-center mb-4">
                    <h3 className="text-xl font-serif text-[#D4AF37]">{t.chartTitle}</h3>
                    <p className="text-gray-500 text-xs uppercase tracking-widest">{t.chartSubtitle}</p>
                  </div>
                  
                  <div className="w-full max-w-[480px] mx-auto aspect-square grid grid-cols-4 grid-rows-4 border-2 border-[#D4AF37] bg-[#0a0a0a]">
                    <div className="border border-[#D4AF37]/30 p-2 flex flex-col justify-between">
                      <span className="text-[10px] text-gray-500">{ZODIAC_SIGNS[lang].pisces}</span>
                      <span className="text-[#D4AF37] text-xs font-bold text-center">{PLANET_NAMES[lang].venus} ({PLANET_NAMES[lang].ex}), {PLANET_NAMES[lang].ketu}</span>
                    </div>
                    <div className="border border-[#D4AF37]/30 p-2 flex flex-col justify-between">
                      <span className="text-[10px] text-gray-500">{ZODIAC_SIGNS[lang].aries}</span>
                      <span className="text-[#D4AF37] text-xs font-bold text-center">{PLANET_NAMES[lang].sun} ({PLANET_NAMES[lang].ex})</span>
                    </div>
                    <div className="border border-[#D4AF37]/30 p-2 flex flex-col justify-between">
                      <span className="text-[10px] text-gray-500">{ZODIAC_SIGNS[lang].taurus}</span>
                      <span className="text-[#D4AF37] text-xs font-bold text-center">{PLANET_NAMES[lang].mercury}</span>
                    </div>
                    <div className="border border-[#D4AF37]/30 p-2 flex flex-col justify-between">
                      <span className="text-[10px] text-gray-500">{ZODIAC_SIGNS[lang].gemini}</span>
                      <span className="text-[#D4AF37] text-xs font-bold text-center"></span>
                    </div>
                    <div className="border border-[#D4AF37]/30 p-2 flex flex-col justify-between">
                      <span className="text-[10px] text-gray-500">{ZODIAC_SIGNS[lang].aquarius}</span>
                      <span className="text-[#D4AF37] text-xs font-bold text-center">{PLANET_NAMES[lang].saturn}</span>
                    </div>
                    <div className="col-span-2 row-span-2 border border-[#D4AF37]/30 flex items-center justify-center bg-[#D4AF37]/5">
                      <div className="text-center">
                        <div className="text-3xl mb-2 text-[#D4AF37]">ॐ</div>
                        <span className="text-[#D4AF37] font-serif text-lg">{lang === 'te' ? 'రాశి D1' : 'Rasi D1'}</span>
                      </div>
                    </div>
                    <div className="border border-[#D4AF37]/30 p-2 flex flex-col justify-between bg-[#D4AF37]/15">
                      <span className="text-[10px] text-[#D4AF37]">{ZODIAC_SIGNS[lang].cancer}</span>
                      <span className="text-[#D4AF37] text-xs font-bold text-center">{PLANET_NAMES[lang].asc}, {PLANET_NAMES[lang].moon}</span>
                    </div>
                    <div className="border border-[#D4AF37]/30 p-2 flex flex-col justify-between">
                      <span className="text-[10px] text-gray-500">{ZODIAC_SIGNS[lang].capricorn}</span>
                      <span className="text-[#D4AF37] text-xs font-bold text-center">{PLANET_NAMES[lang].jupiter} ({PLANET_NAMES[lang].n})</span>
                    </div>
                    <div className="border border-[#D4AF37]/30 p-2 flex flex-col justify-between">
                      <span className="text-[10px] text-gray-500">{ZODIAC_SIGNS[lang].leo}</span>
                      <span className="text-[#D4AF37] text-xs font-bold text-center"></span>
                    </div>
                    <div className="border border-[#D4AF37]/30 p-2 flex flex-col justify-between">
                      <span className="text-[10px] text-gray-500">{ZODIAC_SIGNS[lang].sagittarius}</span>
                      <span className="text-[#D4AF37] text-xs font-bold text-center"></span>
                    </div>
                    <div className="border border-[#D4AF37]/30 p-2 flex flex-col justify-between">
                      <span className="text-[10px] text-gray-500">{ZODIAC_SIGNS[lang].scorpio}</span>
                      <span className="text-[#D4AF37] text-xs font-bold text-center"></span>
                    </div>
                    <div className="border border-[#D4AF37]/30 p-2 flex flex-col justify-between">
                      <span className="text-[10px] text-gray-500">{ZODIAC_SIGNS[lang].libra}</span>
                      <span className="text-[#D4AF37] text-xs font-bold text-center"></span>
                    </div>
                    <div className="border border-[#D4AF37]/30 p-2 flex flex-col justify-between">
                      <span className="text-[10px] text-gray-500">{ZODIAC_SIGNS[lang].virgo}</span>
                      <span className="text-[#D4AF37] text-xs font-bold text-center">{PLANET_NAMES[lang].mars}, {PLANET_NAMES[lang].rahu}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Row 2: Key Planetary Highlights */}
              <div className="bg-gradient-to-r from-purple-900/10 to-[#050505] border border-purple-500/20 rounded-xl p-5 hover:border-purple-500/40 transition-all duration-500 hover:shadow-lg hover:shadow-purple-500/10">
                <h3 className="text-lg font-serif text-purple-400 mb-4 flex items-center gap-2">
                  <Star size={18} className="animate-pulse" /> {lang === 'te' ? 'గ్రహ స్థాన ముఖ్యాంశాలు' : 'Key Planetary Highlights'}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {CHART_HIGHLIGHTS[lang].map((item, idx) => (
                    <div key={idx} className={`bg-black/40 p-4 rounded-lg border-l-4 transform hover:scale-[1.02] hover:bg-black/60 transition-all duration-300 ${
                      item.color === 'yellow' ? 'border-yellow-500' :
                      item.color === 'blue' ? 'border-blue-500' :
                      item.color === 'pink' ? 'border-pink-500' :
                      item.color === 'orange' ? 'border-orange-500' :
                      item.color === 'purple' ? 'border-purple-500' :
                      'border-red-500'
                    }`}>
                      <h4 className={`font-bold text-sm mb-1 ${
                        item.color === 'yellow' ? 'text-yellow-400' :
                        item.color === 'blue' ? 'text-blue-400' :
                        item.color === 'pink' ? 'text-pink-400' :
                        item.color === 'orange' ? 'text-orange-400' :
                        item.color === 'purple' ? 'text-purple-400' :
                        'text-red-400'
                      }`}>{item.title}</h4>
                      <p className="text-gray-300 text-sm">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Row 3: Planets Table */}
              <div className="bg-[#050505] border border-[#D4AF37]/20 rounded-xl p-5 hover:border-[#D4AF37]/50 transition-all duration-500 hover:shadow-lg hover:shadow-[#D4AF37]/10">
                <h3 className="text-lg font-serif text-[#D4AF37] mb-4 border-l-4 border-[#D4AF37] pl-3">{lang === 'te' ? 'గ్రహ స్థానాలు' : 'Planetary Positions'}</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="border-b border-[#D4AF37]/30 text-[#D4AF37] text-xs uppercase tracking-wider">
                        <th className="py-3 font-bold">{t.planet}</th>
                        <th className="py-3 font-bold">{t.sign}</th>
                        <th className="py-3 font-bold">{t.degree}</th>
                        <th className="py-3 font-bold">{t.house}</th>
                        <th className="py-3 font-bold">{t.nature}</th>
                        <th className="py-3 font-bold hidden md:table-cell">{lang === 'te' ? 'ప్రభావం' : 'Effect'}</th>
                      </tr>
                    </thead>
                    <tbody className="text-gray-300 text-sm">
                      {astroData.planets.map((p, i) => (
                        <tr key={i} className="border-b border-white/5 hover:bg-white/5 transition-all duration-300 hover:translate-x-1" style={{ animationDelay: `${i * 30}ms` }}>
                          <td className="py-3 font-medium text-white">{p.name}</td>
                          <td className="py-3">{p.sign}</td>
                          <td className="py-3 font-mono text-[#D4AF37]">{p.degree}</td>
                          <td className="py-3">{p.house}</td>
                          <td className="py-3">
                            <span className={`px-2 py-1 rounded text-xs ${p.nature.includes('Exalted') || p.nature.includes('ఉచ్చ') ? 'bg-green-900/50 text-green-400 border border-green-500/30' : p.nature.includes('Debilitated') || p.nature.includes('నీచ') ? 'bg-red-900/50 text-red-400 border border-red-500/30' : 'bg-gray-800 text-gray-400'}`}>
                              {p.nature}
                            </span>
                          </td>
                          <td className="py-3 text-gray-400 text-xs hidden md:table-cell">{p.effect}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}
          {activeTab === 1 && <div className="animate-fadeInUp"><MarriageTab lang={lang} /></div>}

          {activeTab === 2 && <div className="animate-fadeInUp"><CompatibilityTab t={t} lang={lang} /></div>}
        </div>
      </div>
    </div>
  );
}

// --- About Me Section ---
export function AboutMeSection({ scrollToTop, galleryImages }) {
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const minSwipeDistance = 50;
  const [fullscreenIndex, setFullscreenIndex] = useState(null);
  const images = galleryImages && galleryImages.length > 0 ? galleryImages : PLACEHOLDER_GALLERY;

  // Lock body scroll when fullscreen modal is open
  useEffect(() => {
    if (fullscreenIndex !== null) {
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
      // Also disable snap on the main container
      const container = document.querySelector('[data-main-container]');
      if (container) {
        container.style.overflow = 'hidden';
        container.style.scrollSnapType = 'none';
      }
    } else {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
      const container = document.querySelector('[data-main-container]');
      if (container) {
        container.style.overflow = '';
        container.style.scrollSnapType = '';
      }
    }
    return () => {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
      const container = document.querySelector('[data-main-container]');
      if (container) {
        container.style.overflow = '';
        container.style.scrollSnapType = '';
      }
    };
  }, [fullscreenIndex]);

  return (
    <div className="relative w-full min-h-screen bg-[#050505] flex flex-col p-4 sm:p-4 sm:p-6 lg:p-12 overflow-visible snap-start font-sans">
      <NetworkBackground />
      <StarField count={25} />

      <div className="sticky top-0 z-50 w-full px-4 sm:px-8 py-3 sm:py-4 flex justify-between items-center bg-black/95 backdrop-blur-xl border-b border-[#D4AF37]/20 mb-4">
        <div>
          <h2 className="text-2xl sm:text-3xl font-serif text-white tracking-wide">
            More than a bit <span className="text-[#D4AF37] italic">about</span> Me..
          </h2>
          <p className="text-gray-400 uppercase tracking-[0.2em] text-xs mt-1">Grounded • Grateful • Growing</p>
        </div>
        <button onClick={scrollToTop} className="group flex items-center gap-2 text-xs text-[#D4AF37] hover:text-white transition-colors bg-white/5 px-4 py-2 rounded-full border border-[#D4AF37]/20">
          <span>Back to Top</span>
          <ArrowUp className="w-3 h-3 group-hover:-translate-y-1 transition-transform" />
        </button>
      </div>

      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 max-w-[1400px] mx-auto w-full pb-20 reveal-on-scroll">

        {/* 1. BIO (Wide) */}
        <div className="col-span-1 md:col-span-2 bg-[#0a0a0a] border border-[#D4AF37]/30 rounded-3xl p-6 hover:border-[#D4AF37]/60 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-[#D4AF37]/20 group opacity-0 animate-fadeInUp" style={{ animationDelay: '100ms', animationFillMode: 'forwards' }}>
          <h4 className="text-[#D4AF37] font-bold text-lg mb-4 flex items-center gap-2 uppercase tracking-wider">
            <User className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" /> When Not Working
          </h4>
          <ul className="space-y-3">
            <li className="flex gap-3 text-sm text-gray-300 bg-yellow-900/10 p-2 rounded items-center hover:bg-yellow-900/20 hover:translate-x-1 transition-all duration-300 cursor-default">
              <Activity size={16} className="text-[#D4AF37] flex-shrink-0" /><span>Play badminton (I was great when my knees were younger)</span>
            </li>
            <li className="flex gap-3 text-sm text-gray-300 bg-yellow-900/10 p-2 rounded items-center hover:bg-yellow-900/20 hover:translate-x-1 transition-all duration-300 cursor-default">
              <Lightbulb size={16} className="text-[#D4AF37] flex-shrink-0" /><span>Giving unsolicited advice (<strong>'Uchitha salahalu'</strong>, literally) to young folks who reach out to me on LinkedIn.</span>
            </li>
            <li className="flex gap-3 text-sm text-gray-300 bg-yellow-900/10 p-2 rounded items-center hover:bg-yellow-900/20 hover:translate-x-1 transition-all duration-300 cursor-default">
              <Smartphone size={16} className="text-[#D4AF37] flex-shrink-0" /><span>Exploring new tech gadgets</span>
            </li>
            <li className="flex gap-3 text-sm text-gray-300 bg-yellow-900/10 p-2 rounded items-center hover:bg-yellow-900/20 hover:translate-x-1 transition-all duration-300 cursor-default">
              <Footprints size={16} className="text-[#D4AF37] flex-shrink-0" /><span>Walk 10 km daily (and pet <strong>'kukka bangaralu'</strong> on the way)</span>
            </li>
            <li className="flex gap-3 text-sm text-gray-300 bg-yellow-900/10 p-2 rounded items-center hover:bg-yellow-900/20 hover:translate-x-1 transition-all duration-300 cursor-default">
              <Bot size={16} className="text-[#D4AF37] flex-shrink-0" /><span>Get my hands dirty with new AI tools out there</span>
            </li>
            <li className="flex gap-3 text-sm text-gray-300 bg-yellow-900/10 p-2 rounded items-center hover:bg-yellow-900/20 hover:translate-x-1 transition-all duration-300 cursor-default">
              <Smile size={16} className="text-[#D4AF37] flex-shrink-0" /><span>Annoying my little sister</span>
            </li>
          </ul>
        </div>

        {/* 2. FAITH & CORE */}
        <div className="col-span-1 bg-[#0a0a0f] border border-cyan-500/30 rounded-3xl p-6 hover:border-cyan-500/60 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-cyan-500/20 flex flex-col justify-center text-center opacity-0 animate-fadeInUp" style={{ animationDelay: '200ms', animationFillMode: 'forwards' }}>
          <Sparkles className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
          <h3 className="text-lg font-bold text-cyan-400 mb-3">Faith</h3>
          <p className="text-sm text-gray-400 italic">
            Grounded in faith. I believe in a Creator and a force beyond human comprehension. You can choose otherwise, just respect the boundaries.
          </p>
        </div>

        {/* 3. LIFESTYLE */}
        <div className="col-span-1 bg-[#0f0a05] border border-orange-500/30 rounded-3xl p-6 hover:border-orange-500/60 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-orange-500/20 flex flex-col justify-center opacity-0 animate-fadeInUp" style={{ animationDelay: '300ms', animationFillMode: 'forwards' }}>
          <h3 className="text-lg font-bold text-orange-400 mb-4 flex items-center gap-2 uppercase tracking-wider justify-center">
            <Leaf className="w-5 h-5 text-orange-400" /> Lifestyle
          </h3>
          <div className="space-y-3 text-sm">
            <div className="flex justify-between items-center p-2 bg-white/5 rounded-lg">
              <span className="flex items-center gap-2 text-gray-300"><Feather size={16} className="text-orange-400" /> Diet</span>
              <span className="text-gray-500 text-xs whitespace-nowrap">Non-Veg (open to veg)</span>
            </div>
            <div className="flex justify-between items-center p-2 bg-white/5 rounded-lg">
              <span className="flex items-center gap-2 text-gray-300"><Wine size={16} className="text-red-400" /> Alcohol</span>
              <span className="text-gray-500 text-xs whitespace-nowrap">Don't drink, you can!</span>
            </div>
            <div className="flex justify-between items-center p-2 bg-white/5 rounded-lg border border-red-500/20">
              <span className="flex items-center gap-2 text-gray-300"><Wind size={16} className="text-gray-400" /> Smoke</span>
              <span className="text-red-400 font-bold text-xs">No Please</span>
            </div>
          </div>
        </div>

        {/* 3.5 CAUSES */}
        <div className="col-span-1 md:col-span-2 bg-[#0a0a0a] border border-violet-500/30 rounded-3xl p-6 hover:border-violet-500/60 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-violet-500/20 opacity-0 animate-fadeInUp" style={{ animationDelay: '400ms', animationFillMode: 'forwards' }}>
          <h3 className="text-xl font-serif text-violet-400 mb-4 flex items-center gap-3">
            <Heart className="w-6 h-6" /> Causes I Believe In
          </h3>
          <p className="text-gray-400 text-sm mb-4 italic">A promise to myself, monthly donations until my last breath</p>
          <div className="flex flex-wrap gap-3">
            {[
              {icon: Mountain, text: "Elephant Habitat Protection"},
              {icon: Dog, text: "Street Dog Vaccination"},
              {icon: Waves, text: "Whale Conservation"},
              {icon: Compass, text: "Coral Reef Restoration"},
              {icon: Sparkles, text: "Bee Breeding & Protection"}
            ].map((item, i) => (
              <span key={i} className="flex items-center gap-1.5 px-3 py-1.5 bg-violet-500/10 rounded-lg text-sm text-violet-200 border border-violet-500/20 hover:bg-violet-500/30 hover:border-violet-500/50 hover:scale-105 hover:shadow-lg hover:shadow-violet-500/20 transition-all duration-300 cursor-default">
                <item.icon size={14} className="text-violet-400" /> {item.text}
              </span>
            ))}
          </div>
        </div>

        {/* 4. LOVES (Wide) */}
        <div className="col-span-1 md:col-span-2 bg-[#0a0a0a] border border-pink-500/20 rounded-3xl p-6 hover:border-pink-500/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-pink-500/20 opacity-0 animate-fadeInUp" style={{ animationDelay: '500ms', animationFillMode: 'forwards' }}>
          <h3 className="text-xl font-serif text-pink-400 mb-4 flex items-center gap-3">
            <Heart className="w-6 h-6" /> Adorations
          </h3>
          <div className="flex flex-wrap gap-3">
            {[
              {icon: Smartphone, text: "Tech Gadgets"}, {icon: Bot, text: "AI Tools"}, {icon: Plane, text: "Drones"},
              {icon: Tv, text: "Naruto"}, {icon: Smile, text: "Memes"}, {icon: Shield, text: "Henry Cavill Superman"},
              {icon: Backpack, text: "School Friends"}, {icon: Tractor, text: "Farms & Fruits"},
              {icon: Book, text: "Mahabharata & Mythology"},
              {icon: Baby, text: "2 year olds with buggalu & pilakalu"},
              {icon: Activity, text: "Badminton"}, {icon: Compass, text: "Tropical Islands"}, {icon: Coffee, text: "Boba"}
            ].map((item, i) => (
              <span key={i} className="flex items-center gap-1.5 px-3 py-1.5 bg-pink-500/5 rounded-lg text-sm text-pink-200 border border-pink-500/10 hover:bg-pink-500/25 hover:border-pink-500/40 hover:scale-105 hover:shadow-lg hover:shadow-pink-500/20 transition-all duration-300 cursor-default">
                <item.icon size={14} className="text-pink-400" /> {item.text}
              </span>
            ))}
          </div>
        </div>

        {/* 5. SUPERPOWERS */}
        <div className="col-span-1 md:col-span-2 lg:col-span-2 bg-[#0a110a] border border-green-500/30 rounded-3xl p-6 hover:border-green-500/60 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-green-500/20 opacity-0 animate-fadeInUp" style={{ animationDelay: '600ms', animationFillMode: 'forwards' }}>
          <h4 className="text-green-400 font-bold text-lg mb-4 flex items-center gap-2 uppercase tracking-wider">
            <Zap className="w-5 h-5" /> Superpowers
          </h4>
          <ul className="space-y-3">
            <li className="flex gap-3 text-sm text-gray-300 bg-green-900/10 p-2 rounded items-center hover:bg-green-900/20 hover:translate-x-1 transition-all duration-300 cursor-default">
              <Share2 size={16} className="text-green-400 flex-shrink-0" /><span>Sharing memes faster than the flu spreads</span>
            </li>
            <li className="flex gap-3 text-sm text-gray-300 bg-green-900/10 p-2 rounded items-center hover:bg-green-900/20 hover:translate-x-1 transition-all duration-300 cursor-default">
              <Map size={16} className="text-green-400 flex-shrink-0" /><span>Planning travel (Solo traveled 10+ European countries)</span>
            </li>
            <li className="flex gap-3 text-sm text-gray-300 bg-green-900/10 p-2 rounded items-center hover:bg-green-900/20 hover:translate-x-1 transition-all duration-300 cursor-default">
              <Sparkles size={16} className="text-green-400 flex-shrink-0" /><span>Mahadev's grace, solid friendships, and a wonderful family</span>
            </li>
            <li className="flex gap-3 text-sm text-gray-300 bg-green-900/10 p-2 rounded items-center hover:bg-green-900/20 hover:translate-x-1 transition-all duration-300 cursor-default">
              <CreditCard size={16} className="text-green-400 flex-shrink-0" /><span>Credit card points wizard, maximizes every swipe</span>
            </li>
            <li className="flex gap-3 text-sm text-gray-300 bg-green-900/10 p-2 rounded items-center hover:bg-green-900/20 hover:translate-x-1 transition-all duration-300 cursor-default">
              <Target size={16} className="text-green-400 flex-shrink-0" /><span>I stand by my word — sets a goal, stays persistent, gets it done</span>
            </li>
          </ul>
        </div>

        {/* 6. KRYPTONITE */}
        <div className="col-span-1 md:col-span-2 lg:col-span-2 bg-[#110a0a] border border-red-500/30 rounded-3xl p-6 hover:border-red-500/60 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-red-500/20 opacity-0 animate-fadeInUp" style={{ animationDelay: '700ms', animationFillMode: 'forwards' }}>
          <h4 className="text-red-400 font-bold text-lg mb-4 flex items-center gap-2 uppercase tracking-wider">
            <AlertTriangle className="w-5 h-5 group-hover:animate-pulse" /> Not So Super
          </h4>
          <ul className="space-y-3">
            <li className="flex gap-3 text-sm text-gray-300 bg-red-900/10 p-2 rounded items-center hover:bg-red-900/20 hover:translate-x-1 transition-all duration-300 cursor-default">
              <Flame size={16} className="text-red-400 flex-shrink-0" /><span>Potential to bring Kitchen to ashes</span>
            </li>
            <li className="flex gap-3 text-sm text-gray-300 bg-red-900/10 p-2 rounded items-center hover:bg-red-900/20 hover:translate-x-1 transition-all duration-300 cursor-default">
              <Dog size={16} className="text-red-400 flex-shrink-0" /><span>Keep asking for a dog, baby cow, or an elephant (Please…)</span>
            </li>
            <li className="flex gap-3 text-sm text-gray-300 bg-red-900/10 p-2 rounded items-center hover:bg-red-900/20 hover:translate-x-1 transition-all duration-300 cursor-default">
              <Heart size={16} className="text-red-400 flex-shrink-0" /><span>Self esteem could use a little work</span>
            </li>
            <li className="flex gap-3 text-sm text-gray-300 bg-red-900/10 p-2 rounded items-center hover:bg-red-900/20 hover:translate-x-1 transition-all duration-300 cursor-default">
              <Carrot size={16} className="text-red-400 flex-shrink-0" /><span>Veggies? Meh, only if blended</span>
            </li>
            <li className="flex gap-3 text-sm text-gray-300 bg-red-900/10 p-2 rounded items-center hover:bg-red-900/20 hover:translate-x-1 transition-all duration-300 cursor-default">
              <Smartphone size={16} className="text-red-400 flex-shrink-0" /><span>Got a soft spot for tech, wallet takes the hit</span>
            </li>
          </ul>
        </div>

        {/* 7. THE SEARCH - About You (Full Width) */}
        <div className="col-span-1 md:col-span-2 lg:col-span-4 bg-gradient-to-br from-[#1a1a1a] to-black border border-[#D4AF37]/40 rounded-3xl p-6 relative overflow-hidden group flex flex-col hover:border-[#D4AF37]/70 transition-all duration-500 hover:shadow-2xl hover:shadow-[#D4AF37]/20 opacity-0 animate-fadeInUp" style={{ animationDelay: '800ms', animationFillMode: 'forwards' }}>
          <div className="absolute top-0 right-0 w-40 h-40 bg-[#D4AF37] blur-[80px] opacity-10 pointer-events-none" />

          <h3 className="text-2xl font-serif text-[#D4AF37] mb-4 flex items-center gap-3">
            <Search className="w-6 h-6" /> About You
          </h3>

          <div className="flex-grow grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div>
              <h4 className="text-green-400 font-bold text-sm mb-2 uppercase tracking-wider flex items-center gap-3">
                <CheckCircle2 size={16} /> Big Yes To
              </h4>
              <ul className="space-y-2 text-sm text-gray-300 pl-3 border-l-2 border-green-500/20">
                <li className="flex items-center gap-3"><GraduationCap size={14} className="text-green-400" /> Academically Inclined</li>
                <li className="flex items-center gap-3"><Heart size={14} className="text-green-400" /> Humble, Empathetic & Kind</li>
                <li className="flex items-center gap-3"><TrendingUp size={14} className="text-green-400" /> Growth Mindset & High EQ</li>
                <li className="flex items-center gap-3"><Wallet size={14} className="text-green-400" /> Teaches me finances</li>
              </ul>
            </div>

            <div>
              <h4 className="text-red-400 font-bold text-sm mb-2 uppercase tracking-wider flex items-center gap-3">
                <XCircle size={16} /> Please No
              </h4>
              <ul className="space-y-2 text-sm text-gray-300 pl-3 border-l-2 border-red-500/20">
                <li className="flex items-center gap-3"><MonitorSmartphone size={14} className="text-red-400" /> Influencer energy</li>
                <li className="flex items-center gap-3"><Diamond size={14} className="text-red-400" /> Materialism - Values &gt; Valuables</li>
                <li className="flex items-center gap-3"><Megaphone size={14} className="text-red-400" /> Married to their job</li>
                <li className="flex items-center gap-3"><BarChart3 size={14} className="text-red-400" /> Constant Comparisons</li>
              </ul>
            </div>

            <div className="sm:col-span-2">
              <h4 className="text-yellow-400 font-bold text-sm mb-4 flex items-center gap-2 uppercase tracking-wider">
                <Star size={16} className="animate-pulse" /> Bonus Points If...
              </h4>
              <div className="flex flex-wrap gap-2">
                {["Naruto Fan", "Great Meme Game", "Anime girl", "Lets me buy tech gadgets", "Dog Lover", "Spiritual", "Dress modern yet elegant", "Puts on Bindi & Kajal occasionally", "Welcome home a Pocket Pom", "Teaches me cooking", "Hits gym and drags me too", "Gets ready quick", "A Hiker", "Gets me Boba"].map((b, i) => (
                  <span key={i} className="text-xs bg-yellow-400/10 text-yellow-200 px-2.5 py-1.5 rounded-lg border border-yellow-400/20 hover:bg-yellow-400/25 hover:border-yellow-400/50 hover:scale-105 hover:shadow-lg hover:shadow-yellow-400/20 transition-all duration-300 cursor-default">{b}</span>
                ))}
              </div>
            </div>

            {/* Quote inside About You */}
            <div className="sm:col-span-2 lg:col-span-4 mt-4 pt-4 border-t border-white/10 text-center">
              <p className="text-gray-300 text-sm italic mb-2 leading-relaxed">
                "I understand everyone has their flaws, but ideally I hope for a partner with high EQ, someone who can point out my mistakes and help me grow into a better version of myself each day. I see feedback as a gift, and I'm willing to work on myself. It would be wonderful if you feel the same way, so we can gently lift each other up and grow together."
              </p>
              <span className="text-[#D4AF37] font-serif text-sm font-bold">
                "Gayyali ina parledu if you tick the above boxes"
              </span>
            </div>
          </div>
        </div>

        {/* 8. LIFE IN FRAMES - Photo Gallery */}
        <div className="col-span-1 md:col-span-2 lg:col-span-4 opacity-0 animate-fadeInUp" style={{ animationDelay: '900ms', animationFillMode: 'forwards' }}>
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-xl font-serif text-white">Life in <span className="text-[#D4AF37] italic">Frames</span></h3>
              <p className="text-gray-400 text-xs uppercase tracking-wider">Memories • Travels • Life</p>
            </div>
            <a 
              href="https://www.instagram.com/bommenahemanth/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 text-white px-4 py-2 rounded-full text-xs font-medium hover:scale-105 hover:shadow-lg hover:shadow-pink-500/30 transition-all duration-300"
            >
              <Instagram className="w-3 h-3" />
              Instagram
            </a>
          </div>
          <p className="text-gray-400 text-xs mb-4 text-center"><span className="text-[#D4AF37]">Heads up!</span> I've lost some weight, so I might look different across photos. Also, all fake candids! Check out my Instagram for latest pics.</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {images.map((img, index) => (
              <div
                key={index}
                className="relative group rounded-xl overflow-hidden border border-white/10 cursor-pointer hover:border-[#D4AF37]/50 transition-all duration-500 hover:shadow-xl hover:shadow-[#D4AF37]/30 active:scale-[0.98] hover:-translate-y-2 opacity-0 animate-fadeInUp"
                style={{ animationDelay: `${1000 + index * 100}ms`, animationFillMode: 'forwards' }}
                onClick={() => setFullscreenIndex(index)}
              >
                <img
                  src={img}
                  alt={`Gallery ${index + 1}`}
                  className="w-full aspect-square object-cover object-top transition-all duration-700 ease-out opacity-85 group-hover:opacity-100 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <Maximize2 className="text-[#D4AF37] w-6 h-6 drop-shadow-lg" />
                  </div>
                </div>
                {/* Shine effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out pointer-events-none" />
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Fullscreen Image Modal */}
      {fullscreenIndex !== null && (
        <div 
          className="fixed inset-0 z-[200] bg-black/95 backdrop-blur-md lightbox-backdrop flex items-center justify-center p-4 animate-fadeIn"
          onClick={(e) => {
            if (e.target === e.currentTarget) setFullscreenIndex(null);
          }}
          onKeyDown={(e) => {
            if (e.key === 'Escape') setFullscreenIndex(null);
            if (e.key === 'ArrowLeft' && fullscreenIndex > 0) setFullscreenIndex(fullscreenIndex - 1);
            if (e.key === 'ArrowRight' && fullscreenIndex < images.length - 1) setFullscreenIndex(fullscreenIndex + 1);
          }}
          onTouchStart={(e) => {
            setTouchEnd(null);
            setTouchStart(e.targetTouches[0].clientX);
          }}
          onTouchMove={(e) => setTouchEnd(e.targetTouches[0].clientX)}
          onTouchEnd={() => {
            if (!touchStart || !touchEnd) return;
            const distance = touchStart - touchEnd;
            if (distance > minSwipeDistance && fullscreenIndex < images.length - 1) setFullscreenIndex(fullscreenIndex + 1);
            if (distance < -minSwipeDistance && fullscreenIndex > 0) setFullscreenIndex(fullscreenIndex - 1);
          }}
          tabIndex={0}
          ref={(el) => el && el.focus({ preventScroll: true })}
        >
          {/* Desktop: Side arrows, Mobile: Bottom arrows */}
          <button
            className={`hidden md:block absolute left-[15%] top-1/2 -translate-y-1/2 z-10 p-3 bg-black/70 backdrop-blur rounded-full hover:bg-[#D4AF37] hover:text-black transition-all duration-300 border border-white/20 hover:scale-110 ${fullscreenIndex === 0 ? 'opacity-30 pointer-events-none' : 'opacity-100'}`}
            onClick={(e) => { e.stopPropagation(); if (fullscreenIndex > 0) setFullscreenIndex(fullscreenIndex - 1); }}
          >
            <ChevronLeft size={24} />
          </button>

          <div className="relative max-w-5xl max-h-[80vh] md:max-h-[90vh]">
            <img 
              key={fullscreenIndex}
              src={images[fullscreenIndex]} 
              alt="Fullscreen" 
              className="max-w-full max-h-[70vh] md:max-h-[90vh] object-contain rounded-2xl shadow-2xl shadow-[#D4AF37]/20 animate-slide-in"
            />
            <button 
              className="absolute top-4 right-4 p-3 bg-black/50 backdrop-blur rounded-full hover:bg-[#D4AF37] hover:text-black transition-all border border-white/20"
              onClick={() => setFullscreenIndex(null)}
            >
              <X size={24} />
            </button>
            {/* Image counter */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 px-4 py-2 bg-black/60 backdrop-blur rounded-full text-white/80 text-sm border border-white/10">
              {fullscreenIndex + 1} / {images.length}
            </div>
          </div>

          {/* Desktop: Side arrow */}
          <button
            className={`hidden md:block absolute right-[15%] top-1/2 -translate-y-1/2 z-10 p-3 bg-black/70 backdrop-blur rounded-full hover:bg-[#D4AF37] hover:text-black transition-all duration-300 border border-white/20 hover:scale-110 ${fullscreenIndex === images.length - 1 ? 'opacity-30 pointer-events-none' : 'opacity-100'}`}
            onClick={(e) => { e.stopPropagation(); if (fullscreenIndex < images.length - 1) setFullscreenIndex(fullscreenIndex + 1); }}
          >
            <ChevronRight size={24} />
          </button>

          {/* Mobile: Bottom arrows */}
          <div className="md:hidden fixed bottom-8 left-0 right-0 flex justify-center gap-16 z-20">
            <button
              className={`p-4 bg-black/70 backdrop-blur rounded-full border border-white/20 ${fullscreenIndex === 0 ? 'opacity-30' : 'opacity-100 active:bg-[#D4AF37] active:text-black'}`}
              onClick={(e) => { e.stopPropagation(); if (fullscreenIndex > 0) setFullscreenIndex(fullscreenIndex - 1); }}
            >
              <ChevronLeft size={28} />
            </button>
            <button
              className={`p-4 bg-black/70 backdrop-blur rounded-full border border-white/20 ${fullscreenIndex === images.length - 1 ? 'opacity-30' : 'opacity-100 active:bg-[#D4AF37] active:text-black'}`}
              onClick={(e) => { e.stopPropagation(); if (fullscreenIndex < images.length - 1) setFullscreenIndex(fullscreenIndex + 1); }}
            >
              <ChevronRight size={28} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

// --- Family Section ---
// Family gallery images - order: 2,5,3,4,1,6
const FAMILY_PHOTOS = [
  'images/family/family1.jpg',
  'images/family/family5.jpg',
  'images/family/family3.jpg',
  'images/family/family4.jpg',
  'images/mom-dad.jpg',
  'images/family/IMG_3929.jpg',
].map(img => import.meta.env.BASE_URL + img);

export function FamilySection({ profile, scrollToTop }) {
  const [fullscreenImage, setFullscreenImage] = useState(null);
  const [fullscreenGalleryIndex, setFullscreenGalleryIndex] = useState(null);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const minSwipeDistance = 50;

  // Lock body scroll when fullscreen modal is open
  useEffect(() => {
    if (fullscreenImage !== null || fullscreenGalleryIndex !== null) {
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
      // Also disable snap on the main container
      const container = document.querySelector('[data-main-container]');
      if (container) {
        container.style.overflow = 'hidden';
        container.style.scrollSnapType = 'none';
      }
    } else {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
      const container = document.querySelector('[data-main-container]');
      if (container) {
        container.style.overflow = '';
        container.style.scrollSnapType = '';
      }
    }
    return () => {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
      const container = document.querySelector('[data-main-container]');
      if (container) {
        container.style.overflow = '';
        container.style.scrollSnapType = '';
      }
    };
  }, [fullscreenImage, fullscreenGalleryIndex]);

  return (
    <div className="relative w-full bg-[#080808] flex flex-col py-4 px-4 lg:py-6 lg:px-8 overflow-visible snap-start font-sans">
      <NetworkBackground />
      <StarField count={25} />
      {/* Ambient glow effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="sticky top-0 z-50 w-full px-4 sm:px-8 py-3 sm:py-4 flex justify-between items-center bg-black/95 backdrop-blur-xl border-b border-[#D4AF37]/20 mb-3">
        <div>
          <h2 className="text-2xl sm:text-3xl font-serif text-white tracking-wide">
            The <span className="text-[#D4AF37] italic">Inner</span> Circle
          </h2>
          <p className="text-gray-400 uppercase tracking-[0.2em] text-xs mt-1">Grateful • Fun • Everything</p>
        </div>
        <button onClick={scrollToTop} className="group flex items-center gap-2 text-xs text-[#D4AF37] hover:text-white transition-colors bg-white/5 px-4 py-2 rounded-full border border-[#D4AF37]/20">
          <span>Back to Top</span>
          <ArrowUp className="w-3 h-3 group-hover:-translate-y-1 transition-transform" />
        </button>
      </div>


      {/* Family Summary - The Bommena Squad */}
      <div className="relative z-10 max-w-5xl mx-auto w-full mb-6 px-4 reveal-on-scroll">
        <div className="bg-gradient-to-br from-[#D4AF37]/10 via-[#0c0c0c]/80 to-[#D4AF37]/5 border border-[#D4AF37]/30 rounded-2xl p-4 backdrop-blur-sm">
          <p className="text-center text-gray-300 text-sm leading-relaxed">We are a close knit family of four, bound by respect, love, and an unshakable bond that only grows stronger with time. When you become part of this family, you will not just gain a husband but a whole tribe that stands by you. Your father in law will always take your side in our tiny fights, your mother in law will pass down her wisdom, drape you in beautiful sarees, and love you like her own daughter. And Meghana already dreams of spoiling you and your kids with endless love and gifts. This is home.</p>
        </div>
      </div>


      <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 max-w-6xl mx-auto w-full items-start reveal-on-scroll">

        {/* DAD CARD */}
        <div className="bg-[#0c0c0c]/80 backdrop-blur-sm border border-[#D4AF37]/20 rounded-3xl overflow-hidden group hover:border-[#D4AF37]/60 transition-all duration-500 hover:-translate-y-3 active:scale-[0.98] active:scale-[0.98] hover:shadow-2xl hover:shadow-[#D4AF37]/20 flex flex-col h-full">
          <div 
            className="h-56 sm:h-64 md:h-56 bg-gradient-to-b from-gray-800 to-black relative cursor-pointer overflow-hidden"
            onClick={() => setFullscreenImage(profile.dadPhoto)}
          >
            {profile.dadPhoto && (
              <img src={profile.dadPhoto} alt="Dad" className="w-full h-full object-cover object-[center_5%] md:object-[center_20%] opacity-90 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700" />
            )}
            {/* Gradient blending overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#D4AF37]/5 via-transparent to-[#D4AF37]/5" />
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[#D4AF37]/5" />
          </div>
          <div className="p-4 flex-grow flex flex-col bg-gradient-to-b from-[#0c0c0c] to-[#080808]">
            <div className="flex justify-between items-start mb-3">
              <div>
                <h3 className="text-2xl font-serif text-white font-bold tracking-tight">Father</h3>
                <p className="text-[#D4AF37] text-xs font-bold uppercase tracking-wider mt-1">Srinivas Rao</p>
              </div>
              <div className="p-2 bg-[#D4AF37]/10 rounded-xl group-hover:bg-[#D4AF37]/20 transition-colors">
                <Wrench className="text-[#D4AF37]" size={20} />
              </div>
            </div>
            <div className="space-y-2 flex-grow">
              <div className="flex items-start gap-3 group/item">
                <Cpu size={16} className="text-[#D4AF37] mt-0.5 flex-shrink-0" />
                <p className="text-gray-300 text-sm leading-relaxed">Mechanical Engineer & Head of Ops at NBEIL</p>
              </div>
              <div className="flex items-start gap-3 group/item">
                <Calculator size={16} className="text-[#D4AF37] mt-0.5 flex-shrink-0" />
                <p className="text-gray-300 text-sm leading-relaxed">Good with numbers & kind to people</p>
              </div>
              <div className="flex items-start gap-3 group/item">
                <Pizza size={16} className="text-[#D4AF37] mt-0.5 flex-shrink-0" />
                <p className="text-gray-300 text-sm leading-relaxed">Sneaks junk food like a secret agent</p>
              </div>
                <div className="flex items-start gap-3 group/item">
                  <Crown size={16} className="text-[#D4AF37] mt-0.5 flex-shrink-0" />
                  <p className="text-gray-300 text-sm leading-relaxed">Treats me like the male Daddy's princess</p>
                </div>
                <div className="flex items-start gap-3 group/item">
                  <Heart size={16} className="text-[#D4AF37] mt-0.5 flex-shrink-0" />
                  <p className="text-gray-300 text-sm leading-relaxed">Loves mom & cuddles her to sleep daily</p>
                </div>
            </div>
          </div>
        </div>

        {/* MOM CARD - Center, Elevated */}
        <div className="bg-[#0c0c0c]/80 backdrop-blur-sm border-2 border-[#D4AF37]/50 rounded-3xl overflow-hidden group hover:border-[#D4AF37] hover:shadow-[0_0_60px_rgba(212,175,55,0.3)] transition-all duration-500 hover:-translate-y-5 flex flex-col h-full relative z-20 scale-105">
          <div 
            className="h-64 sm:h-72 md:h-64 bg-gradient-to-b from-gray-800 to-black relative cursor-pointer overflow-hidden"
            onClick={() => setFullscreenImage(profile.momPhoto)}
          >
            {profile.momPhoto && (
              <img src={profile.momPhoto} alt="Mom" className="w-full h-full object-cover object-[center_5%] md:object-[center_25%] scale-110 opacity-90 group-hover:opacity-100 group-hover:scale-125 transition-all duration-700" />
            )}
            {/* Gradient blending overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#D4AF37]/5 via-transparent to-[#D4AF37]/5" />
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[#D4AF37]/10" />
          </div>
          <div className="p-4 flex-grow flex flex-col bg-gradient-to-b from-[#0c0c0c] to-[#080808]">
            <div className="flex justify-between items-start mb-3">
              <div>
                <h3 className="text-2xl font-serif text-white font-bold tracking-tight">Mother</h3>
                <p className="text-[#D4AF37] text-xs font-bold uppercase tracking-wider mt-1">Savithri</p>
              </div>
              <div className="p-2 bg-[#D4AF37]/10 rounded-xl group-hover:bg-[#D4AF37]/20 transition-colors">
                <Crown className="text-[#D4AF37]" size={20} />
              </div>
            </div>
            <div className="space-y-2 flex-grow">
              <div className="flex items-start gap-3">
                <Crown size={16} className="text-[#D4AF37] mt-0.5 flex-shrink-0" />
                <p className="text-gray-300 text-sm leading-relaxed">Laxmi of our house & proud homemaker</p>
              </div>
              <div className="flex items-start gap-3">
                <Users size={16} className="text-[#D4AF37] mt-0.5 flex-shrink-0" />
                <p className="text-gray-300 text-sm leading-relaxed">She said: "Apes together strong"</p>
              </div>
              <div className="flex items-start gap-3">
                <Scale size={16} className="text-[#D4AF37] mt-0.5 flex-shrink-0" />
                <p className="text-gray-300 text-sm leading-relaxed">The ultimate decision maker</p>
              </div>
                <div className="flex items-start gap-3">
                  <Leaf size={16} className="text-[#D4AF37] mt-0.5 flex-shrink-0" />
                  <p className="text-gray-300 text-sm leading-relaxed">Beat the greens into me as a kid (literally)</p>
                </div>
                <div className="flex items-start gap-3">
                  <Heart size={16} className="text-[#D4AF37] mt-0.5 flex-shrink-0" />
                  <p className="text-gray-300 text-sm leading-relaxed">Understanding & respects her husband</p>
                </div>
            </div>
          </div>
        </div>

        {/* SISTER CARD */}
        <div className="bg-[#0c0c0c]/80 backdrop-blur-sm border border-[#D4AF37]/20 rounded-3xl overflow-hidden group hover:border-[#D4AF37]/60 transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl hover:shadow-[#D4AF37]/20 flex flex-col h-full">
          <div 
            className="h-56 sm:h-64 md:h-56 bg-gradient-to-b from-gray-800 to-black relative cursor-pointer overflow-hidden"
            onClick={() => setFullscreenImage(profile.sisPhoto)}
          >
            {profile.sisPhoto && (
              <img src={profile.sisPhoto} alt="Sister" className="w-full h-full object-cover object-[center_15%] md:object-[center_25%] opacity-90 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700" />
            )}
            {/* Gradient blending overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#D4AF37]/5 via-transparent to-[#D4AF37]/5" />
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[#D4AF37]/5" />
          </div>
          <div className="p-4 flex-grow flex flex-col bg-gradient-to-b from-[#0c0c0c] to-[#080808]">
            <div className="flex justify-between items-start mb-3">
              <div>
                <h3 className="text-2xl font-serif text-white font-bold tracking-tight">Sister</h3>
                <p className="text-[#D4AF37] text-xs font-bold uppercase tracking-wider mt-1">Meghana</p>
              </div>
              <div className="p-2 bg-[#D4AF37]/10 rounded-xl group-hover:bg-[#D4AF37]/20 transition-colors">
                <Feather className="text-[#D4AF37]" size={20} />
              </div>
            </div>
            <div className="space-y-2 flex-grow">
              <div className="flex items-start gap-3">
                <Gem size={16} className="text-[#D4AF37] mt-0.5 flex-shrink-0" />
                <p className="text-gray-300 text-sm leading-relaxed">Potti Laxmi (of our house & the next)</p>
              </div>
              <div className="flex items-start gap-3">
                <Plane size={16} className="text-[#D4AF37] mt-0.5 flex-shrink-0" />
                <p className="text-gray-300 text-sm leading-relaxed">Analytics grad, reason I moved to US</p>
              </div>
              <div className="flex items-start gap-3">
                <ChefHat size={16} className="text-[#D4AF37] mt-0.5 flex-shrink-0" />
                <p className="text-gray-300 text-sm leading-relaxed">Minimalist, creative, and a good cook</p>
              </div>
                <div className="flex items-start gap-3">
                  <Smile size={16} className="text-[#D4AF37] mt-0.5 flex-shrink-0" />
                  <p className="text-gray-300 text-sm leading-relaxed">My advocate & feeds me well</p>
                </div>
                <div className="flex items-start gap-3">
                  <Search size={16} className="text-[#D4AF37] mt-0.5 flex-shrink-0" />
                  <p className="text-gray-300 text-sm leading-relaxed">Job hunting & currently with me</p>
                </div>
            </div>
          </div>
        </div>

      </div>

      {/* Family Gallery Grid */}
      <div className="relative z-10 max-w-6xl mx-auto w-full mt-8 px-4 pb-4">
        <h3 className="text-xl font-serif text-white text-center mb-4">
          Family <span className="text-[#D4AF37] italic">Moments</span>
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 gallery-stagger">
          {FAMILY_PHOTOS.map((img, index) => (
            <div
              key={index}
              className="relative group rounded-xl overflow-hidden border border-white/10 cursor-pointer hover:border-[#D4AF37]/50 transition-all duration-300 hover:shadow-xl hover:shadow-[#D4AF37]/20 active:scale-[0.98] gallery-item gallery-hover-zoom"
              onClick={() => setFullscreenGalleryIndex(index)}
            >
              <img
                src={img}
                alt={`Family ${index + 1}`}
                className="w-full aspect-square object-cover object-[center_25%] transition-all duration-500 opacity-85 group-hover:opacity-100 group-hover:scale-110"
              />
              {/* Gradient blending overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#D4AF37]/5 via-transparent to-[#D4AF37]/5" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </div>


      {/* Fullscreen Image Modal */}
      {fullscreenImage && (
        <div
          className="fixed inset-0 z-[200] bg-black/95 backdrop-blur-md flex items-center justify-center p-4 cursor-pointer animate-fadeIn"
          onClick={() => setFullscreenImage(null)}
        >
          <div className="relative max-w-5xl max-h-[90vh] animate-lightbox">
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

      {/* Fullscreen Gallery Modal with Navigation */}
      {fullscreenGalleryIndex !== null && (
        <div
          className="fixed inset-0 z-[200] bg-black/95 backdrop-blur-md lightbox-backdrop flex items-center justify-center p-4 animate-fadeIn"
          onClick={(e) => {
            if (e.target === e.currentTarget) setFullscreenGalleryIndex(null);
          }}
          onKeyDown={(e) => {
            if (e.key === 'Escape') setFullscreenGalleryIndex(null);
            if (e.key === 'ArrowLeft' && fullscreenGalleryIndex > 0) setFullscreenGalleryIndex(fullscreenGalleryIndex - 1);
            if (e.key === 'ArrowRight' && fullscreenGalleryIndex < FAMILY_PHOTOS.length - 1) setFullscreenGalleryIndex(fullscreenGalleryIndex + 1);
          }}
          onTouchStart={(e) => {
            setTouchEnd(null);
            setTouchStart(e.targetTouches[0].clientX);
          }}
          onTouchMove={(e) => setTouchEnd(e.targetTouches[0].clientX)}
          onTouchEnd={() => {
            if (!touchStart || !touchEnd) return;
            const distance = touchStart - touchEnd;
            if (distance > minSwipeDistance && fullscreenGalleryIndex < FAMILY_PHOTOS.length - 1) setFullscreenGalleryIndex(fullscreenGalleryIndex + 1);
            if (distance < -minSwipeDistance && fullscreenGalleryIndex > 0) setFullscreenGalleryIndex(fullscreenGalleryIndex - 1);
          }}
          tabIndex={0}
          ref={(el) => el && el.focus({ preventScroll: true })}
        >
          {/* Desktop: Side arrows */}
          <button
            className={`hidden md:block absolute left-[15%] top-1/2 -translate-y-1/2 z-10 p-3 bg-black/70 backdrop-blur rounded-full hover:bg-[#D4AF37] hover:text-black transition-all duration-300 border border-white/20 hover:scale-110 ${fullscreenGalleryIndex === 0 ? 'opacity-30 pointer-events-none' : 'opacity-100'}`}
            onClick={(e) => { e.stopPropagation(); if (fullscreenGalleryIndex > 0) setFullscreenGalleryIndex(fullscreenGalleryIndex - 1); }}
          >
            <ChevronLeft size={24} />
          </button>

          <div className="relative max-w-6xl max-h-[80vh] md:max-h-[90vh]">
            <img
              key={fullscreenGalleryIndex}
              src={FAMILY_PHOTOS[fullscreenGalleryIndex]}
              alt="Fullscreen"
              className="max-w-full max-h-[65vh] md:max-h-[85vh] object-contain rounded-xl sm:rounded-2xl shadow-2xl shadow-[#D4AF37]/30 animate-slide-in"
            />
            <button
              className="absolute top-4 right-4 p-3 bg-black/50 backdrop-blur rounded-full hover:bg-[#D4AF37] hover:text-black transition-all duration-300 border border-white/20 hover:scale-110"
              onClick={() => setFullscreenGalleryIndex(null)}
            >
              <X size={24} />
            </button>
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 px-4 py-2 bg-black/60 backdrop-blur rounded-full text-white/80 text-sm border border-white/10">
              {fullscreenGalleryIndex + 1} / {FAMILY_PHOTOS.length}
            </div>
          </div>

          {/* Desktop: Side arrow */}
          <button
            className={`hidden md:block absolute right-[15%] top-1/2 -translate-y-1/2 z-10 p-3 bg-black/70 backdrop-blur rounded-full hover:bg-[#D4AF37] hover:text-black transition-all duration-300 border border-white/20 hover:scale-110 ${fullscreenGalleryIndex === FAMILY_PHOTOS.length - 1 ? 'opacity-30 pointer-events-none' : 'opacity-100'}`}
            onClick={(e) => { e.stopPropagation(); if (fullscreenGalleryIndex < FAMILY_PHOTOS.length - 1) setFullscreenGalleryIndex(fullscreenGalleryIndex + 1); }}
          >
            <ChevronRight size={24} />
          </button>

          {/* Mobile: Bottom arrows */}
          <div className="md:hidden fixed bottom-8 left-0 right-0 flex justify-center gap-16 z-20">
            <button
              className={`p-4 bg-black/70 backdrop-blur rounded-full border border-white/20 ${fullscreenGalleryIndex === 0 ? 'opacity-30' : 'opacity-100 active:bg-[#D4AF37] active:text-black'}`}
              onClick={(e) => { e.stopPropagation(); if (fullscreenGalleryIndex > 0) setFullscreenGalleryIndex(fullscreenGalleryIndex - 1); }}
            >
              <ChevronLeft size={28} />
            </button>
            <button
              className={`p-4 bg-black/70 backdrop-blur rounded-full border border-white/20 ${fullscreenGalleryIndex === FAMILY_PHOTOS.length - 1 ? 'opacity-30' : 'opacity-100 active:bg-[#D4AF37] active:text-black'}`}
              onClick={(e) => { e.stopPropagation(); if (fullscreenGalleryIndex < FAMILY_PHOTOS.length - 1) setFullscreenGalleryIndex(fullscreenGalleryIndex + 1); }}
            >
              <ChevronRight size={28} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

// --- Gallery Section ---
export function GallerySection({ profile, scrollToTop }) {
  const [fullscreenIndex, setFullscreenIndex] = useState(null);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  
  // Minimum swipe distance
  const minSwipeDistance = 50;

  const images = (profile.galleryImages && profile.galleryImages.length > 0)
    ? profile.galleryImages
    : PLACEHOLDER_GALLERY;

  const finalImages = images;

  return (
    <div className="relative w-full bg-[#080808] flex flex-col py-4 px-4 lg:py-6 lg:px-8 overflow-visible snap-start font-sans">
      <NetworkBackground />
      <StarField count={25} />
      {/* Ambient glow effects */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-[#D4AF37]/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] bg-[#D4AF37]/5 rounded-full blur-[150px] pointer-events-none" />
      
      <div className="sticky top-0 z-50 w-full px-4 sm:px-8 py-3 sm:py-4 flex justify-between items-center bg-black/95 backdrop-blur-xl border-b border-[#D4AF37]/20 mb-4">
        <div>
          <h2 className="text-2xl sm:text-3xl font-serif text-white tracking-wide">
            Life in <span className="text-[#D4AF37] italic">Frames</span>
          </h2>
          <p className="text-gray-400 uppercase tracking-[0.2em] text-xs mt-1">Memories • Travels • Life</p>
        </div>
        <button onClick={scrollToTop} className="group flex items-center gap-2 text-xs text-[#D4AF37] hover:text-white transition-colors bg-white/5 px-4 py-2 rounded-full border border-[#D4AF37]/20">
          <span>Back to Top</span>
          <ArrowUp className="w-3 h-3 group-hover:-translate-y-1 transition-transform" />
        </button>
      </div>

      {/* Photo Disclaimer */}
      <div className="relative z-10 max-w-[1600px] mx-auto w-full mb-6 px-2">
        <div className="bg-black/40 backdrop-blur-sm border border-[#D4AF37]/20 rounded-2xl p-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-300 text-sm text-center sm:text-left">
            <span className="text-[#D4AF37]">Heads up!</span> I've lost some weight, so I might look different across photos.
            <br className="sm:hidden" />
            Also, all fake candids! Check out my Instagram for latest pics.
          </p>
          <a 
            href="https://www.instagram.com/bommenahemanth/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 text-white px-5 py-2.5 rounded-full text-sm font-medium hover:scale-105 transition-transform whitespace-nowrap"
          >
            <Instagram className="w-4 h-4" />
            Latest on Instagram
          </a>
        </div>
      </div>

      <div className="relative z-10 pb-4 max-w-6xl mx-auto w-full reveal-on-scroll">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 gallery-stagger">
          {finalImages.map((img, index) => (
            <div
              key={index}
              className="relative group break-inside-avoid rounded-2xl overflow-hidden border border-white/10 cursor-pointer hover:border-[#D4AF37]/50 transition-all duration-500 hover:shadow-2xl hover:shadow-[#D4AF37]/20 active:scale-[0.98] gallery-item gallery-hover-zoom"
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
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md lightbox-backdrop flex items-center justify-center p-4 animate-fadeIn"
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
          {/* Desktop: Side arrows */}
          <button 
            className={`hidden md:block absolute left-[15%] top-1/2 -translate-y-1/2 z-10 p-3 bg-black/70 backdrop-blur rounded-full hover:bg-[#D4AF37] hover:text-black transition-all duration-300 border border-white/20 hover:scale-110 ${fullscreenIndex === 0 ? 'opacity-30 pointer-events-none' : 'opacity-100'}`}
            onClick={(e) => { e.stopPropagation(); if (fullscreenIndex > 0) setFullscreenIndex(fullscreenIndex - 1); }}
          >
            <ChevronLeft size={24} />
          </button>

          <div className="relative max-w-6xl max-h-[80vh] md:max-h-[90vh] animate-lightbox">
            <img 
              src={finalImages[fullscreenIndex]} 
              alt="Fullscreen" 
              className="max-w-full max-h-[65vh] md:max-h-[85vh] object-contain rounded-xl sm:rounded-2xl shadow-2xl shadow-[#D4AF37]/30"
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

          {/* Desktop: Side arrow */}
          <button 
            className={`hidden md:block absolute right-[15%] top-1/2 -translate-y-1/2 z-10 p-3 bg-black/70 backdrop-blur rounded-full hover:bg-[#D4AF37] hover:text-black transition-all duration-300 border border-white/20 hover:scale-110 ${fullscreenIndex === finalImages.length - 1 ? 'opacity-30 pointer-events-none' : 'opacity-100'}`}
            onClick={(e) => { e.stopPropagation(); if (fullscreenIndex < finalImages.length - 1) setFullscreenIndex(fullscreenIndex + 1); }}
          >
            <ChevronRight size={24} />
          </button>

          {/* Mobile: Bottom arrows */}
          <div className="md:hidden fixed bottom-8 left-0 right-0 flex justify-center gap-16 z-20">
            <button
              className={`p-4 bg-black/70 backdrop-blur rounded-full border border-white/20 ${fullscreenIndex === 0 ? 'opacity-30' : 'opacity-100 active:bg-[#D4AF37] active:text-black'}`}
              onClick={(e) => { e.stopPropagation(); if (fullscreenIndex > 0) setFullscreenIndex(fullscreenIndex - 1); }}
            >
              <ChevronLeft size={28} />
            </button>
            <button
              className={`p-4 bg-black/70 backdrop-blur rounded-full border border-white/20 ${fullscreenIndex === finalImages.length - 1 ? 'opacity-30' : 'opacity-100 active:bg-[#D4AF37] active:text-black'}`}
              onClick={(e) => { e.stopPropagation(); if (fullscreenIndex < finalImages.length - 1) setFullscreenIndex(fullscreenIndex + 1); }}
            >
              <ChevronRight size={28} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

// --- Contact / CTA Section ---
export function ContactSection({ scrollToTop }) {
  const [hoveredButton, setHoveredButton] = useState(null);
  
  const whatsappMessage = encodeURIComponent(
    `Namaste Srinivas Garu 🙏\n\nWe came across Hemanth's profile and found it very interesting.\n\nWe would like to take this conversation forward.\n\nWarm regards`
  );
  
  const fatherWhatsApp = `https://wa.me/919000196092?text=${whatsappMessage}`;
  const hemanthInstagram = "https://www.instagram.com/bommenahemanth/";
  const hemanthLinkedIn = "https://www.linkedin.com/in/bommena-hemanth-2a2834118/";

  const socialButtons = [
    { id: 'instagram', href: hemanthInstagram, icon: <Instagram className="w-4 h-4" />, label: 'Instagram', gradient: 'from-purple-600 via-pink-500 to-orange-400', shadow: 'shadow-pink-500/30' },
    { id: 'linkedin', href: hemanthLinkedIn, icon: <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>, label: 'LinkedIn', bg: 'bg-[#0A66C2]', shadow: 'shadow-blue-500/30' },
    { id: 'facebook', href: "https://www.facebook.com/bommenahemanth", icon: <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>, label: 'Facebook', bg: 'bg-[#1877F2]', shadow: 'shadow-blue-600/30' },
    { id: 'email', href: "mailto:bommenahemanth@gmail.com?subject=Hey%20Hemanth!%20Your%20profile%20caught%20my%20eye%20%E2%9C%A8&body=Hi%20Hemanth!%20%F0%9F%91%8B%0A%0AI%20just%20went%20through%20your%20profile%20and%20really%20enjoyed%20reading%20it!%0AYou%20seem%20like%20a%20genuine%20and%20fun%20person.%0A%0AWould%20love%20to%20get%20to%20know%20you%20better.%20%F0%9F%98%8A%0A%0ALooking%20forward%20to%20hearing%20from%20you!", icon: <Mail className="w-4 h-4" />, label: 'Email', bg: 'bg-red-600', shadow: 'shadow-red-500/30' },
    { id: 'whatsapp', href: "https://wa.me/918124269822?text=Hey%20Hemanth!%20%F0%9F%91%8B%0A%0AJust%20stumbled%20upon%20your%20profile%20and%20couldn't%20resist%20saying%20hi!%20%E2%9C%A8%0ALet's%20chat%20and%20see%20if%20our%20stars%20align%20%F0%9F%8C%9F", icon: <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>, label: 'WhatsApp', bg: 'bg-[#25D366]', shadow: 'shadow-green-500/30' },
    { id: 'imessage', href: "sms:+14699967434&body=Hey%20Hemanth!%20%F0%9F%91%8B%0A%0AFound%20your%20profile%20and%20loved%20it!%20%E2%9C%A8%0ALet's%20connect%20and%20see%20where%20this%20goes%20%F0%9F%98%8A", icon: <MessageCircle className="w-4 h-4" />, label: 'iMessage', bg: 'bg-[#007AFF]', shadow: 'shadow-blue-400/30' },
    { id: 'facetime', href: "facetime-audio:bommenahemanth@gmail.com", icon: <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4z"/></svg>, label: 'FaceTime', bg: 'bg-[#34C759]', shadow: 'shadow-green-400/30' },
    { id: 'call', href: "tel:+14699967434", icon: <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>, label: 'Call (US)', bg: 'bg-emerald-600', shadow: 'shadow-emerald-500/30' },
  ];
  
  return (
    <div className="relative w-full bg-[#080808] flex flex-col p-6 lg:p-12 pb-24 overflow-visible snap-start font-sans">
      <NetworkBackground />
      <StarField count={25} />
      
      {/* Animated ambient glow effects */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-[#D4AF37]/5 rounded-full blur-[150px] pointer-events-none animate-pulse" style={{ animationDuration: '4s' }} />
      <div className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] bg-[#D4AF37]/5 rounded-full blur-[150px] pointer-events-none animate-pulse" style={{ animationDuration: '5s', animationDelay: '1s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-pink-500/5 rounded-full blur-[100px] pointer-events-none animate-pulse" style={{ animationDuration: '6s', animationDelay: '2s' }} />
      
      {/* Back to Top header */}
      <div className="sticky top-0 z-50 w-full px-4 sm:px-8 py-3 sm:py-4 flex justify-between items-center bg-black/95 backdrop-blur-xl border-b border-[#D4AF37]/20 mb-8">
        <div>
          <h2 className="text-2xl sm:text-3xl font-serif text-white tracking-wide">
            Let's <span className="text-[#D4AF37] italic">Connect</span>
          </h2>
          <p className="text-gray-400 uppercase tracking-[0.2em] text-xs mt-1">The Next Step</p>
        </div>
        <button onClick={scrollToTop} className="group flex items-center gap-2 text-xs text-[#D4AF37] hover:text-white transition-colors bg-white/5 px-4 py-2 rounded-full border border-[#D4AF37]/20 hover:border-[#D4AF37]/50 hover:bg-[#D4AF37]/10">
          <span>Back to Top</span>
          <ArrowUp className="w-3 h-3 group-hover:-translate-y-1 transition-transform" />
        </button>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-2xl mx-auto text-center space-y-8 py-4 reveal-on-scroll">
        
        {/* Made it so far message */}
        <div className="space-y-4 opacity-0 animate-fadeInUp" style={{ animationDelay: '100ms', animationFillMode: 'forwards' }}>
          <h3 className="text-4xl sm:text-5xl font-serif">
            <span className="bg-gradient-to-r from-[#BF953F] via-[#FCF6BA] to-[#B38728] bg-clip-text text-transparent animate-shimmer bg-[length:200%_100%]">Made it this far?</span> <span className="text-[#D4AF37] inline-block animate-bounce" style={{ animationDuration: '2s' }}>✨</span>
          </h3>
          <p className="text-gray-300 text-lg opacity-0 animate-fadeInUp" style={{ animationDelay: '300ms', animationFillMode: 'forwards' }}>
            If you liked my profile and want to take things forward, feel free to reach out!
          </p>
        </div>

        {/* Social Buttons */}
        <div className="space-y-4 opacity-0 animate-fadeInUp" style={{ animationDelay: '400ms', animationFillMode: 'forwards' }}>
          <p className="text-gray-400 text-sm uppercase tracking-wider flex items-center justify-center gap-2">
            <span className="w-8 h-px bg-gradient-to-r from-transparent to-[#D4AF37]/50"></span>
            Connect with Hemanth
            <span className="w-8 h-px bg-gradient-to-l from-transparent to-[#D4AF37]/50"></span>
          </p>
          <div className="flex flex-col gap-3 max-w-xl mx-auto">
            {/* All social buttons - animated grid */}
            <div className="flex justify-center gap-3 flex-wrap">
              {socialButtons.map((btn, idx) => (
                <a 
                  key={btn.id}
                  href={btn.href}
                  target={btn.href.startsWith('http') ? "_blank" : undefined}
                  rel={btn.href.startsWith('http') ? "noopener noreferrer" : undefined}
                  onMouseEnter={() => setHoveredButton(btn.id)}
                  onMouseLeave={() => setHoveredButton(null)}
                  className={`group relative flex items-center gap-2 ${btn.gradient ? `bg-gradient-to-r ${btn.gradient}` : btn.bg} text-white px-4 py-2.5 rounded-full font-medium text-sm overflow-hidden opacity-0 animate-fadeInUp transition-all duration-500 ${hoveredButton === btn.id ? `scale-110 ${btn.shadow} shadow-xl -translate-y-1` : hoveredButton && hoveredButton !== btn.id ? 'opacity-60 scale-95' : ''}`}
                  style={{ 
                    animationDelay: `${500 + idx * 80}ms`, 
                    animationFillMode: 'forwards',
                  }}
                >
                  {/* Shine effect */}
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out" />
                  {/* Icon with bounce */}
                  <span className={`relative z-10 transition-transform duration-300 ${hoveredButton === btn.id ? 'animate-bounce' : ''}`} style={{ animationDuration: '0.5s' }}>
                    {btn.icon}
                  </span>
                  {/* Label */}
                  <span className="relative z-10">{btn.label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Talk to Father */}
        <div className="pt-6 border-t border-white/10 space-y-3 opacity-0 animate-fadeInUp" style={{ animationDelay: '1000ms', animationFillMode: 'forwards' }}>
          <p className="text-[#D4AF37] text-sm font-medium mb-3 bg-[#D4AF37]/10 px-4 py-2 rounded-lg inline-block border border-[#D4AF37]/20 hover:bg-[#D4AF37]/20 hover:border-[#D4AF37]/40 transition-all duration-300 hover:scale-105 cursor-default">
            ✨ No strict caste preferences? I'd love to hear from you!
          </p>
          <p className="text-gray-400 text-sm">
            Want to speak with family? Connect with my father directly
          </p>
          <a 
            href={fatherWhatsApp}
            target="_blank" 
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-3 bg-[#25D366] text-white px-6 py-3 rounded-full font-medium transition-all duration-500 shadow-lg shadow-[#25D366]/20 hover:shadow-xl hover:shadow-[#25D366]/40 hover:scale-110 hover:-translate-y-1 overflow-hidden"
          >
            {/* Animated ring */}
            <span className="absolute inset-0 rounded-full border-2 border-white/30 scale-100 group-hover:scale-150 group-hover:opacity-0 transition-all duration-500" />
            {/* Pulse effect */}
            <span className="absolute inset-0 rounded-full bg-white/10 scale-0 group-hover:scale-100 transition-transform duration-300" />
            <svg className="w-5 h-5 relative z-10 group-hover:animate-bounce" style={{ animationDuration: '0.5s' }} fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            <span className="relative z-10">Message Father on WhatsApp</span>
          </a>

          {/* Share Profile Section */}
          <div className="mt-8 pt-6 border-t border-white/10 opacity-0 animate-fadeInUp" style={{ animationDelay: '1200ms', animationFillMode: 'forwards' }}>
            <p className="text-gray-400 text-sm mb-3">
              Know someone who might be interested? Share this profile!
            </p>
            <a 
              href="https://wa.me/?text=Hey%21%20I%20found%20Hemanth%27s%20profile%20and%20thought%20you%20might%20be%20interested.%20Would%20you%20like%20to%20connect%20with%20him%3F%20%F0%9F%92%8D%0A%0ACheck%20out%20his%20profile%20here%3A%20https%3A%2F%2Fbommenahemanth.github.io%2Fmarryme%0A%0APS%3A%20Open%20it%20on%20a%20laptop%20for%20the%20full%20experience%20%28trust%20me%2C%20it%27s%20worth%20it%21%29%20%F0%9F%92%BB%E2%9C%A8"
              target="_blank" 
              rel="noopener noreferrer"
              className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-purple-600 via-violet-500 to-purple-600 bg-[length:200%_100%] hover:bg-right text-white px-6 py-3 rounded-full font-medium transition-all duration-700 shadow-lg shadow-purple-500/30 hover:shadow-xl hover:shadow-purple-500/50 hover:scale-110 hover:-translate-y-1 overflow-hidden"
            >
              {/* Animated gradient */}
              <span className="absolute inset-0 bg-gradient-to-r from-violet-600 via-purple-500 to-violet-600 bg-[length:200%_100%] animate-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              {/* Sparkle effect */}
              <span className="absolute top-1 right-2 w-1 h-1 bg-white rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping" />
              <span className="absolute bottom-2 left-4 w-1 h-1 bg-white rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping" style={{ animationDelay: '0.2s' }} />
              <svg className="w-5 h-5 relative z-10 group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
              </svg>
              <span className="relative z-10">Share Profile on WhatsApp</span>
            </a>
          </div>
        </div>

        {/* Farewell section */}
        <div className="pt-8 mt-4 opacity-0 animate-fadeInUp" style={{ animationDelay: '1400ms', animationFillMode: 'forwards' }}>
          <div className="group relative bg-gradient-to-br from-[#D4AF37]/15 via-[#D4AF37]/5 to-transparent border border-[#D4AF37]/30 rounded-2xl p-6 overflow-hidden hover:border-[#D4AF37]/50 transition-all duration-500 hover:shadow-xl hover:shadow-[#D4AF37]/10 hover:-translate-y-1">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#D4AF37]/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-[#D4AF37]/5 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10 flex flex-col sm:flex-row items-center gap-4">
              <div className="text-4xl group-hover:scale-125 group-hover:rotate-12 transition-transform duration-500">🤝</div>
              <div className="text-center sm:text-left">
                <p className="text-gray-200 text-lg font-medium mb-1">
                  Didn't quite click? <span className="text-[#D4AF37] font-semibold">No worries!</span>
                </p>
                <p className="text-gray-400 text-sm">
                  Wishing you all the best in your search. May you find your perfect match soon!
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Built with love footer */}
        <div className="pt-10 mt-6 border-t border-white/5 opacity-0 animate-fadeInUp" style={{ animationDelay: '1600ms', animationFillMode: 'forwards' }}>
          <div className="text-center max-w-3xl mx-auto">
            <p className="text-gray-500 text-xs leading-relaxed hover:text-gray-400 transition-colors duration-300">
              Built with Gemini 2.5 Pro, VS Code + GitHub Copilot (Claude Opus 4.5), GitHub Pages & a sleepless weekend ☕
            </p>
            <p className="text-gray-400 text-sm mt-2 group">
              Feedback is a gift — <span className="text-[#D4AF37] group-hover:animate-pulse cursor-pointer">Got thoughts? Text me.</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
