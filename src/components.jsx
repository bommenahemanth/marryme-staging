import React, { useState, useEffect, useRef } from 'react';
import {
  Camera,
  ChevronDown,
  Calendar,
  Ruler,
  User,
  MapPin,
  Navigation,
  Plane,
  Briefcase,
  GraduationCap,
  Languages,
  Globe,
  X,
  Edit2,
  Save,
  Loader2,
  Sparkles,
  RotateCw,
  RefreshCw,
  Trophy,
  ArrowUp,
  Cpu,
  Award,
  Zap,
  Star,
  Heart,
  Leaf,
  Wind,
  Search,
  CheckCircle2,
  XCircle,
  Map as MapIcon,
  MessageSquare,
  Crown,
  Wrench,
  Feather,
  Linkedin,
  Instagram,
  Trash2,
  MessageCircle,
  Wine,
  AlertTriangle,
  Smile
} from 'lucide-react';

import { generateDetailedAnalysis, resizeImage } from './helpers';
import {
  PLACEHOLDER_GALLERY,
  ALL_CITIES,
  DEFAULT_PROFILE,
  SKILLS,
  CERTIFICATIONS,
  TIMELINE_DATA,
  TRANSLATIONS,
  ASTRO_DATA
} from './constants';

// --- Components ---

function DetailItem({ icon: Icon, label, value, subValue }) {
  return (
    <div className="flex items-start gap-3 md:gap-4">
      <div className="mt-1 flex-shrink-0">
        <Icon className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-white/80" />
      </div>
      <div>
        <h3 className="text-white font-medium text-xs md:text-sm lg:text-base leading-tight">{value}</h3>
        {subValue && <p className="text-[#D4AF37]/80 text-xs md:text-sm lg:text-base font-light">{subValue}</p>}
        {label && !subValue && <p className="text-[#D4AF37]/80 text-xs md:text-sm lg:text-base font-light">{label}</p>}
      </div>
    </div>
  );
}

function ProfileEditModal({ isOpen, onClose, data, onChange, onSave }) {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
      <div className="bg-[#1a1a1a] w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-xl border border-gray-800 shadow-2xl">
        <div className="sticky top-0 bg-[#1a1a1a] p-6 border-b border-gray-800 flex justify-between items-center">
          <h2 className="text-xl font-serif text-[#D4AF37]">Edit Profile Details</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-white">
            <X size={24} />
          </button>
        </div>
        <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-4">
            <h3 className="text-gray-500 text-sm uppercase tracking-wider font-semibold">Basic Info</h3>
            <input placeholder="First Name" value={data.firstName} onChange={e => onChange({...data, firstName: e.target.value})} className="w-full bg-gray-900 border border-gray-700 rounded p-3 text-white focus:border-[#D4AF37] focus:outline-none" />
            <input placeholder="Last Name" value={data.lastName} onChange={e => onChange({...data, lastName: e.target.value})} className="w-full bg-gray-900 border border-gray-700 rounded p-3 text-white focus:border-[#D4AF37] focus:outline-none" />
            <textarea placeholder="Quote" value={data.quote} onChange={e => onChange({...data, quote: e.target.value})} className="w-full bg-gray-900 border border-gray-700 rounded p-3 text-white focus:border-[#D4AF37] focus:outline-none h-24" />
          </div>
          <div className="space-y-4">
            <h3 className="text-gray-500 text-sm uppercase tracking-wider font-semibold">Details</h3>
            <input placeholder="Age" value={data.age} onChange={e => onChange({...data, age: e.target.value})} className="w-full bg-gray-900 border border-gray-700 rounded p-3 text-white" />
            <input placeholder="Height" value={data.height} onChange={e => onChange({...data, height: e.target.value})} className="w-full bg-gray-900 border border-gray-700 rounded p-3 text-white" />
            <input placeholder="Caste" value={data.caste} onChange={e => onChange({...data, caste: e.target.value})} className="w-full bg-gray-900 border border-gray-700 rounded p-3 text-white" />
            <input placeholder="Raised In" value={data.raisedIn} onChange={e => onChange({...data, raisedIn: e.target.value})} className="w-full bg-gray-900 border border-gray-700 rounded p-3 text-white" />
            <input placeholder="Current Location" value={data.currentLocation} onChange={e => onChange({...data, currentLocation: e.target.value})} className="w-full bg-gray-900 border border-gray-700 rounded p-3 text-white" />
            <input placeholder="Moved To US" value={data.movedToUs} onChange={e => onChange({...data, movedToUs: e.target.value})} className="w-full bg-gray-900 border border-gray-700 rounded p-3 text-white" />
            <input placeholder="Job Title" value={data.jobTitle} onChange={e => onChange({...data, jobTitle: e.target.value})} className="w-full bg-gray-900 border border-gray-700 rounded p-3 text-white" />
            <input placeholder="Company" value={data.company} onChange={e => onChange({...data, company: e.target.value})} className="w-full bg-gray-900 border border-gray-700 rounded p-3 text-white" />
            <input placeholder="Degree" value={data.educationDegree} onChange={e => onChange({...data, educationDegree: e.target.value})} className="w-full bg-gray-900 border border-gray-700 rounded p-3 text-white" />
            <input placeholder="University" value={data.educationUni} onChange={e => onChange({...data, educationUni: e.target.value})} className="w-full bg-gray-900 border border-gray-700 rounded p-3 text-white" />
            <input placeholder="Languages" value={data.languages} onChange={e => onChange({...data, languages: e.target.value})} className="w-full bg-gray-900 border border-gray-700 rounded p-3 text-white" />
            <input placeholder="Visa Status" value={data.visaStatus} onChange={e => onChange({...data, visaStatus: e.target.value})} className="w-full bg-gray-900 border border-gray-700 rounded p-3 text-white" />
          </div>
        </div>
        <div className="p-6 border-t border-gray-800 flex justify-end gap-3">
          <button onClick={onClose} className="px-6 py-2 rounded-full text-gray-400 hover:text-white transition-colors">Cancel</button>
          <button onClick={onSave} className="px-6 py-2 bg-[#D4AF37] text-black font-semibold rounded-full hover:bg-yellow-500 transition-colors flex items-center gap-2">
            <Save size={18} /> Save (Temporary)
          </button>
        </div>
      </div>
    </div>
  );
}

function NetworkBackground() {
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const rect = canvasRef.current?.getBoundingClientRect();
      if (rect) {
        mouseRef.current = {
          x: e.clientX - rect.left,
          y: e.clientY - rect.top
        };
      }
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      canvas.width = canvas.parentElement?.clientWidth || window.innerWidth;
      canvas.height = canvas.parentElement?.clientHeight || window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const points = [];
    const numPoints = 120;
    for (let i = 0; i < numPoints; i++) {
      points.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.8,
        vy: (Math.random() - 0.5) * 0.8
      });
    }

    const draw = () => {
      if (!ctx || !canvas) return;
      ctx.fillStyle = '#050505';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      for (let p of points) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
      }

      for (let i = 0; i < points.length; i++) {
        for (let j = i + 1; j < points.length; j++) {
          const dx = points[i].x - points[j].x;
          const dy = points[i].y - points[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 150) {
            const mx = (points[i].x + points[j].x) / 2 - mouseRef.current.x;
            const my = (points[i].y + points[j].y) / 2 - mouseRef.current.y;
            const mDist = Math.sqrt(mx * mx + my * my);

            ctx.beginPath();
            ctx.moveTo(points[i].x, points[i].y);
            ctx.lineTo(points[j].x, points[j].y);

            if (mDist < 150) {
              const alpha = 1 - mDist / 150;
              ctx.strokeStyle = `rgba(212, 175, 55, ${alpha})`;
              ctx.lineWidth = 1.5;
            } else {
              const alpha = 1 - dist / 150;
              ctx.strokeStyle = `rgba(150, 150, 150, ${alpha * 0.1})`;
              ctx.lineWidth = 0.5;
            }
            ctx.stroke();
          }
        }
        const mx = points[i].x - mouseRef.current.x;
        const my = points[i].y - mouseRef.current.y;
        const mDist = Math.sqrt(mx * mx + my * my);

        ctx.beginPath();
        ctx.arc(points[i].x, points[i].y, mDist < 150 ? 3 : 1.5, 0, Math.PI * 2);
        ctx.fillStyle = mDist < 150 ? '#D4AF37' : '#555';
        ctx.fill();
      }

      requestAnimationFrame(draw);
    };

    const animId = requestAnimationFrame(draw);

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animId);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 z-0 w-full h-full pointer-events-none" />;
}

function FactsModal({ item, onClose }) {
  return (
    <div onClick={onClose} className="fixed inset-0 z-[200] flex items-center justify-center bg-black/90 backdrop-blur-md p-4 cursor-pointer animate-[fadeIn_0.3s_ease-out]">
      <div 
        onClick={(e) => e.stopPropagation()} 
        className="bg-[#0f110f] w-full max-w-md rounded-2xl border border-[#D4AF37]/50 shadow-[0_0_50px_rgba(212,175,55,0.2)] p-8 relative overflow-hidden cursor-default animate-[modalPop_0.4s_cubic-bezier(0.175,0.885,0.32,1.275)]"
      >
        <div className="absolute top-0 right-0 w-32 h-32 bg-[#D4AF37] blur-[100px] opacity-10 pointer-events-none animate-pulse" />
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors hover:rotate-90 duration-300">
          <X size={24} />
        </button>
        <div className="text-center mb-8">
          <div className="w-20 h-20 rounded-full bg-black border-2 border-[#D4AF37] p-4 flex items-center justify-center shadow-[0_0_20px_rgba(212,175,55,0.3)] mx-auto mb-4 animate-[logoBounce_0.5s_ease-out_0.2s_both]">
            <img
              src={item.logo || `https://logo.clearbit.com/${item.domain}`}
              alt="logo"
              className="w-full h-full object-contain"
              onError={(e) => { e.target.onerror = null; e.target.style.display = 'none'; e.target.parentElement.innerHTML = `<span class="text-[#D4AF37] font-bold text-2xl">${item.org[0]}</span>`; }}
            />
          </div>
          <h3 className="text-2xl font-serif bg-gradient-to-r from-[#BF953F] via-[#FCF6BA] to-[#B38728] bg-clip-text text-transparent font-bold animate-[slideUp_0.4s_ease-out_0.3s_both]">
            {item.org}
          </h3>
          <p className="text-[#D4AF37] text-xs font-bold tracking-[0.2em] uppercase mt-2 animate-[slideUp_0.4s_ease-out_0.4s_both]">Did You Know?</p>
        </div>
        <ul className="space-y-4">
          {(item.facts || []).map((fact, idx) => (
            <li 
              key={idx} 
              className="flex gap-3 text-sm text-gray-300 leading-relaxed border-b border-white/5 pb-2 last:border-0 animate-[slideUp_0.4s_ease-out_both]"
              style={{ animationDelay: `${0.5 + idx * 0.1}s` }}
            >
              <span className="font-serif text-[#D4AF37] font-bold text-lg leading-none mt-0.5">{idx + 1}.</span>
              <span>{fact}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

const CompatibilityTab = ({ t, lang = "en" }) => {
  const [partnerDetails, setPartnerDetails] = useState({ name: '', date: '', time: '', city: '' });
  const [analyzing, setAnalyzing] = useState(false);
  const [result, setResult] = useState(null);
  const [citySuggestions, setCitySuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const cityDropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (cityDropdownRef.current && !cityDropdownRef.current.contains(e.target)) {
        setShowSuggestions(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleCityChange = (e) => {
    const val = e.target.value;
    setPartnerDetails({ ...partnerDetails, city: val });
    if (val.length > 0) {
      const filtered = ALL_CITIES.filter(c => c.toLowerCase().includes(val.toLowerCase()));
      setCitySuggestions(filtered);
      setShowSuggestions(true);
    } else {
      setShowSuggestions(false);
    }
  };

  const selectCity = (city) => {
    setPartnerDetails({ ...partnerDetails, city });
    setShowSuggestions(false);
  };

  const handleAnalyze = () => {
    if (!partnerDetails.name || !partnerDetails.date || !partnerDetails.city) return;
    setAnalyzing(true);

    const analysis = generateDetailedAnalysis(partnerDetails.date, partnerDetails.city, partnerDetails.name, lang);

    setTimeout(() => {
      setResult({
        score: analysis.score,
        total: 36,
        verdictTitle: analysis.verdictTitle,
        verdictDesc: analysis.verdictDesc,
        details: analysis.details,
        note: analysis.note,
        analyzeNew: analysis.analyzeNew,
        gunas: analysis.gunas
      });
      setAnalyzing(false);
    }, 2500);
  };

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 w-full h-full flex flex-col p-4">
      <div className="text-center mb-8">
        <h3 className="text-3xl font-serif text-[#D4AF37] mb-2">{t.synastryTitle}</h3>
        <p className="text-gray-400 text-xs uppercase tracking-widest">{t.synastrySubtitle}</p>
      </div>

      {!result && !analyzing && (
        <div className="max-w-md mx-auto w-full bg-[#111] border border-white/10 p-8 rounded-2xl shadow-2xl hover:border-[#D4AF37]/30 transition-all duration-500 hover:shadow-[#D4AF37]/10">
          <h4 className="text-white font-bold mb-6 flex items-center gap-2 border-b border-white/10 pb-4">
            <User className="text-[#D4AF37] animate-pulse" size={20} /> {t.partnerDetails}
          </h4>
          <div className="space-y-4">
            <div className="transform transition-all duration-300 hover:translate-x-1">
              <label className="text-[10px] text-gray-500 uppercase font-bold mb-1 block">Full Name</label>
              <input
                type="text"
                className="w-full bg-black border border-white/20 rounded-lg p-3 text-white focus:border-[#D4AF37] focus:shadow-[0_0_15px_rgba(212,175,55,0.2)] outline-none transition-all duration-300"
                placeholder="Partner's Full Name"
                value={partnerDetails.name}
                onChange={e => setPartnerDetails({ ...partnerDetails, name: e.target.value })}
              />
            </div>
            <div ref={cityDropdownRef} className="relative transform transition-all duration-300 hover:translate-x-1 z-30">
              <label className="text-[10px] text-gray-500 uppercase font-bold mb-1 block">Place of Birth</label>
              <div className="relative">
                <input
                  type="text"
                  className="w-full bg-black border border-white/20 rounded-lg p-3 pl-10 text-white focus:border-[#D4AF37] focus:shadow-[0_0_15px_rgba(212,175,55,0.2)] outline-none transition-all duration-300"
                  placeholder="Enter birth place..."
                  value={partnerDetails.city}
                  onChange={handleCityChange}
                  onFocus={() => partnerDetails.city.length > 0 && setShowSuggestions(true)}
                  autoComplete="off"
                />
                <MapIcon className="absolute left-3 top-3.5 text-gray-500 w-4 h-4" />
              </div>
              {showSuggestions && citySuggestions.length > 0 && (
                <ul className="absolute z-[100] left-0 right-0 w-full bg-[#1a1a1a] border border-[#D4AF37]/30 rounded-lg mt-1 max-h-48 overflow-y-auto shadow-2xl shadow-black/50 animate-fadeInUp scrollbar-thin scrollbar-thumb-[#D4AF37]/30 scrollbar-track-transparent">
                  {citySuggestions.slice(0, 8).map((city, idx) => (
                    <li
                      key={`${city}-${idx}`}
                      onClick={() => selectCity(city)}
                      className="px-4 py-3 text-sm text-gray-300 hover:bg-[#D4AF37] hover:text-black cursor-pointer transition-all duration-200 border-b border-white/5 last:border-0 flex items-center gap-2"
                    >
                      <MapIcon className="w-3 h-3 text-[#D4AF37]" />
                      {city}
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="transform transition-all duration-300 hover:translate-x-1">
                <label className="text-[10px] text-gray-500 uppercase font-bold mb-1 block">Date of Birth</label>
                <input
                  type="date"
                  className="w-full bg-black border border-white/20 rounded-lg p-3 text-white focus:border-[#D4AF37] focus:shadow-[0_0_15px_rgba(212,175,55,0.2)] outline-none transition-all duration-300 cursor-pointer [&::-webkit-calendar-picker-indicator]:filter [&::-webkit-calendar-picker-indicator]:invert [&::-webkit-calendar-picker-indicator]:opacity-50 [&::-webkit-calendar-picker-indicator]:hover:opacity-100 [&::-webkit-calendar-picker-indicator]:cursor-pointer"
                  value={partnerDetails.date}
                  onChange={e => setPartnerDetails({ ...partnerDetails, date: e.target.value })}
                  onClick={e => e.target.showPicker && e.target.showPicker()}
                />
              </div>
              <div className="transform transition-all duration-300 hover:translate-x-1">
                <label className="text-[10px] text-gray-500 uppercase font-bold mb-1 block">Time of Birth</label>
                <input
                  type="time"
                  className="w-full bg-black border border-white/20 rounded-lg p-3 text-white focus:border-[#D4AF37] focus:shadow-[0_0_15px_rgba(212,175,55,0.2)] outline-none transition-all duration-300 cursor-pointer [&::-webkit-calendar-picker-indicator]:filter [&::-webkit-calendar-picker-indicator]:invert [&::-webkit-calendar-picker-indicator]:opacity-50 [&::-webkit-calendar-picker-indicator]:hover:opacity-100 [&::-webkit-calendar-picker-indicator]:cursor-pointer"
                  value={partnerDetails.time}
                  onChange={e => setPartnerDetails({ ...partnerDetails, time: e.target.value })}
                  onClick={e => e.target.showPicker && e.target.showPicker()}
                />
              </div>
            </div>
          </div>
          <button
            onClick={handleAnalyze}
            disabled={!partnerDetails.name || !partnerDetails.date || !partnerDetails.city}
            className="w-full mt-6 py-3 bg-gradient-to-r from-[#BF953F] to-[#B38728] text-black font-bold rounded-lg hover:opacity-90 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 shadow-lg hover:shadow-[#D4AF37]/30"
          >
            <Sparkles size={18} className="animate-pulse" /> {t.analyze}
          </button>
        </div>
      )}

      {analyzing && (
        <div className="flex flex-col items-center justify-center flex-grow space-y-6">
          <div className="relative">
            <div className="w-24 h-24 border-4 border-[#D4AF37]/30 border-t-[#D4AF37] rounded-full animate-spin"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <Star className="text-[#D4AF37] animate-pulse" size={32} />
            </div>
          </div>
          <p className="text-[#D4AF37] font-serif text-lg animate-pulse">Calculating Ashtakoot Gunas...</p>
        </div>
      )}

      {result && (
        <div className="max-w-5xl mx-auto w-full h-full overflow-y-auto pb-8 px-2 scrollbar-hide animate-in fade-in duration-500">
          <div className="flex flex-col items-center mb-10 animate-fadeInUp">
            <div className="relative mb-4">
              <div className="w-40 h-40 rounded-full border-[6px] border-[#D4AF37] flex items-center justify-center bg-black shadow-[0_0_60px_rgba(212,175,55,0.4)] animate-pulse-slow">
                <div className="text-center">
                  <span className="block text-5xl font-serif font-bold text-white">{result.score}</span>
                  <span className="block text-xs text-gray-500 uppercase tracking-widest mt-1 font-bold">/ 36 {result.gunas || 'Gunas'}</span>
                </div>
              </div>
              <div className={`absolute -bottom-3 left-1/2 -translate-x-1/2 px-6 py-1.5 rounded-full text-sm font-bold shadow-xl whitespace-nowrap border animate-bounce-subtle ${result.score > 18 ? 'bg-green-900/90 border-green-500 text-green-100' : 'bg-red-900/90 border-red-500 text-red-100'}`}>
                {result.verdictTitle}
              </div>
            </div>
            <p className="text-gray-400 text-sm font-sans text-center max-w-lg">{result.verdictDesc}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {result.details.map((item, idx) => (
              <div key={idx} className="bg-[#111] border border-white/10 rounded-xl p-5 hover:border-[#D4AF37]/40 transition-all duration-500 hover:shadow-lg hover:shadow-[#D4AF37]/10 hover:-translate-y-1 flex gap-4 opacity-0 animate-fadeInUp" style={{ animationDelay: `${idx * 100}ms`, animationFillMode: 'forwards' }}>
                <div className={`p-3 rounded-full h-fit transition-transform duration-300 hover:scale-110 ${item.score === item.total ? 'bg-green-500/20 text-green-400' : item.score > 0 ? 'bg-[#D4AF37]/20 text-[#D4AF37]' : 'bg-red-500/20 text-red-400'}`}>
                  <item.icon size={24} />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-center mb-1">
                    <h5 className="text-white font-bold text-base">{item.category}</h5>
                    <span className="text-xs font-mono text-gray-500 bg-black px-2 py-1 rounded border border-white/10">{item.score} / {item.total}</span>
                  </div>
                  <div className="w-full bg-white/5 rounded-full h-1.5 mb-2 overflow-hidden">
                    <div
                      className={`h-full rounded-full transition-all duration-1000 ease-out ${item.score === item.total ? 'bg-green-500' : item.score > 0 ? 'bg-[#D4AF37]' : 'bg-red-500'}`}
                      style={{ width: `${(item.score / item.total) * 100}%`, transitionDelay: `${idx * 100 + 300}ms` }}
                    />
                  </div>
                  <p className="text-xs text-gray-400 font-sans leading-relaxed mb-2">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center border-t border-white/10 pt-8 mt-4 animate-fadeInUp" style={{ animationDelay: '800ms', animationFillMode: 'forwards' }}>
            <p className="text-gray-400 text-sm italic mb-6">{result.note}</p>
            <button 
              onClick={() => setResult(null)} 
              className="group relative px-8 py-3 bg-gradient-to-r from-[#D4AF37] to-[#B38728] text-black font-bold rounded-full text-sm shadow-lg shadow-[#D4AF37]/30 hover:shadow-[#D4AF37]/50 transition-all duration-300 hover:scale-105 active:scale-95 overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                <RefreshCw size={16} className="group-hover:rotate-180 transition-transform duration-500" />
                {result.analyzeNew || 'Analyze Another Profile'}
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#F4D03F] to-[#D4AF37] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export { DetailItem, ProfileEditModal, NetworkBackground, FactsModal, CompatibilityTab };

// Twinkling Stars Background
export function StarField({ count = 30 }) {
  const stars = React.useMemo(() => {
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      animationDelay: `${Math.random() * 3}s`,
      size: Math.random() * 2 + 1
    }));
  }, [count]);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {stars.map(star => (
        <div
          key={star.id}
          className="twinkle-star"
          style={{
            left: star.left,
            top: star.top,
            animationDelay: star.animationDelay,
            width: `${star.size}px`,
            height: `${star.size}px`
          }}
        />
      ))}
    </div>
  );
}

// Scroll Reveal Hook - triggers visibility when element enters viewport
export function useScrollReveal(threshold = 0.2) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [threshold]);

  return [ref, isVisible];
}

// TypeWriter Effect Component - types out text character by character
export function TypeWriter({ text, speed = 80, delay = 500, className = '', onComplete, startImmediately = false }) {
  const [displayText, setDisplayText] = useState('');
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    // Reset when text changes
    setDisplayText('');
    setIsComplete(false);
    
    let index = 0;
    let typeInterval = null;
    
    const startTyping = () => {
      typeInterval = setInterval(() => {
        if (index < text.length) {
          setDisplayText(text.slice(0, index + 1));
          index++;
        } else {
          if (typeInterval) clearInterval(typeInterval);
          setIsComplete(true);
          onComplete && onComplete();
        }
      }, speed);
    };

    const timer = setTimeout(startTyping, delay);

    return () => {
      clearTimeout(timer);
      if (typeInterval) clearInterval(typeInterval);
    };
  }, [text, speed, delay, onComplete]);

  return (
    <span className={className}>
      {displayText}
      {!isComplete && <span className="animate-pulse">|</span>}
    </span>
  );
}

// Animated Counter Component
export function AnimatedCounter({ end, duration = 2000, prefix = '', suffix = '' }) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const startTime = Date.now();
    const endValue = parseInt(end, 10);

    const updateCounter = () => {
      const now = Date.now();
      const progress = Math.min((now - startTime) / duration, 1);
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentCount = Math.floor(easeOutQuart * endValue);
      
      setCount(currentCount);

      if (progress < 1) {
        requestAnimationFrame(updateCounter);
      }
    };

    requestAnimationFrame(updateCounter);
  }, [isVisible, end, duration]);

  return (
    <span ref={ref} className="counter counter-animate">
      {prefix}{count}{suffix}
    </span>
  );
}

// Text Reveal Component - reveals text when scrolled into view
export function TextReveal({ children, className = '', stagger = false }) {
  const [ref, isVisible] = useScrollReveal(0.3);

  return (
    <div
      ref={ref}
      className={`${stagger ? 'text-reveal-stagger' : 'text-reveal'} ${isVisible ? 'visible' : ''} ${className}`}
    >
      {children}
    </div>
  );
}

// Cursor Trail Effect (Desktop only)
export function CursorTrail() {
  const [trails, setTrails] = React.useState([]);
  const trailRef = React.useRef([]);
  
  React.useEffect(() => {
    // Only on desktop
    if (window.matchMedia('(hover: none)').matches) return;
    
    const handleMouseMove = (e) => {
      const newTrail = {
        id: Date.now(),
        x: e.clientX,
        y: e.clientY
      };
      
      trailRef.current = [...trailRef.current.slice(-8), newTrail];
      setTrails([...trailRef.current]);
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Clean up old trails
  React.useEffect(() => {
    const interval = setInterval(() => {
      if (trailRef.current.length > 0) {
        trailRef.current = trailRef.current.slice(1);
        setTrails([...trailRef.current]);
      }
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {trails.map((trail, idx) => (
        <div
          key={trail.id}
          className="cursor-trail active"
          style={{
            left: trail.x - 4,
            top: trail.y - 4,
            opacity: (idx + 1) / trails.length * 0.5,
            transform: `scale(${(idx + 1) / trails.length})`
          }}
        />
      ))}
    </>
  );
}

// Section Divider Component
export function SectionDivider({ variant = 'default' }) {
  if (variant === 'diamond') {
    return (
      <div className="section-divider-diamond relative z-20 my-4">
        <span></span>
      </div>
    );
  }
  
  return (
    <div className="section-divider relative z-20" />
  );
}

// Lazy Loading Image with skeleton loading
export function LazyImage({ src, alt, className = '', ...props }) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const imgRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.unobserve(entry.target);
        }
      },
      { rootMargin: '100px' }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => {
      if (imgRef.current) {
        observer.unobserve(imgRef.current);
      }
    };
  }, []);

  return (
    <div ref={imgRef} className={`relative overflow-hidden ${className}`} {...props}>
      {/* Skeleton loader */}
      {!isLoaded && (
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 animate-pulse">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent skeleton-shimmer" />
        </div>
      )}
      
      {/* Actual image */}
      {isInView && (
        <img
          src={src}
          alt={alt}
          className={`w-full h-full object-cover transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
          onLoad={() => setIsLoaded(true)}
          loading="lazy"
        />
      )}
    </div>
  );
}

// Quick Jump Navigation Menu
export function QuickJumpMenu({ sections, currentSection, onNavigate }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed right-4 top-1/2 -translate-y-1/2 z-50 hidden md:block">
      {/* Toggle button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-10 h-10 bg-black/70 backdrop-blur-md border border-[#D4AF37]/30 rounded-full flex items-center justify-center text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black transition-all duration-300 mb-2"
        aria-label="Quick navigation"
      >
        <span className="text-lg">☰</span>
      </button>

      {/* Navigation menu */}
      <div 
        className={`flex flex-col gap-2 transition-all duration-300 ${
          isOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full pointer-events-none'
        }`}
      >
        {sections.map((section, idx) => (
          <button
            key={section.id}
            onClick={() => {
              onNavigate(section.id);
              setIsOpen(false);
            }}
            className={`w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-300 ${
              currentSection === section.id
                ? 'bg-[#D4AF37] text-black scale-110'
                : 'bg-black/70 backdrop-blur-md border border-[#D4AF37]/30 text-[#D4AF37] hover:bg-[#D4AF37]/20'
            }`}
            title={section.label}
          >
            {section.icon || idx + 1}
          </button>
        ))}
      </div>
    </div>
  );
}

// Floating Particles Background
export function FloatingParticles() {
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    delay: `${Math.random() * 15}s`,
    duration: `${15 + Math.random() * 10}s`
  }));

  return (
    <div className="particles-container">
      {particles.map((p) => (
        <div
          key={p.id}
          className="particle"
          style={{
            left: p.left,
            animationDelay: p.delay,
            animationDuration: p.duration
          }}
        />
      ))}
    </div>
  );
}

// Cinematic Loading Screen Component V3
export function LoadingScreen({ onLoadComplete }) {
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState('loading');
  const [isExiting, setIsExiting] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile on mount
  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
  }, []);

  // Critical images (hero, main profile) - must load first
  const criticalImages = [
    './images/mallorca.jpg',
    './images/me.jpg',
    './images/gallery-1.jpg',
    './images/gallery-2.jpg'
  ];

  // Secondary images - background load
  const secondaryImages = [
    './images/gallery-3.jpg',
    './images/gallery-4.jpg',
    './images/gallery-5.jpg',
    './images/dad.jpg',
    './images/mother.JPG',
    './images/potti.jpg',
    './images/mom-dad.jpg',
    './images/family/family1.jpg',
    './images/family/family3.jpg',
    './images/family/family4.jpg',
    './images/family/family5.jpg',
    './images/family/IMG_3929.jpg'
  ];

  useEffect(() => {
    const startTime = Date.now();
    const MIN_LOAD_TIME = 5000;
    let loadComplete = false;

    const preloadImage = (src) => new Promise((resolve) => {
      const img = new Image();
      img.onload = resolve;
      img.onerror = resolve;
      img.src = src;
    });

    // Load critical first, then secondary in background
    const preloadAll = async () => {
      await Promise.all(criticalImages.map(preloadImage));
      secondaryImages.forEach(src => preloadImage(src));
      loadComplete = true;
    };
    preloadAll();

    const progressInterval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const targetProgress = Math.min((elapsed / MIN_LOAD_TIME) * 100, 100);
      setProgress(Math.round(targetProgress));

      if (elapsed >= MIN_LOAD_TIME && loadComplete) {
        clearInterval(progressInterval);
        setPhase('ready');
        setTimeout(() => {
          setIsExiting(true);
          setTimeout(() => onLoadComplete(), 1800);
        }, 1200);
      }
    }, 50);

    const fallback = setTimeout(() => {
      clearInterval(progressInterval);
      setProgress(100);
      setPhase('ready');
      setTimeout(() => {
        setIsExiting(true);
        setTimeout(() => onLoadComplete(), 1800);
      }, 1200);
    }, 10000);

    return () => {
      clearInterval(progressInterval);
      clearTimeout(fallback);
    };
  }, [onLoadComplete]);

  const displayText = phase === 'ready' ? "Let's Go" : "Crafting Your Experience";

  // Fewer particles on mobile for performance
  const particleCount = isMobile ? 12 : 20;
  const particles = Array.from({ length: particleCount }, (_, i) => ({
    id: i,
    left: `${5 + Math.random() * 90}%`,
    size: isMobile ? 1.5 + Math.random() * 2 : 2 + Math.random() * 3,
    duration: 14 + Math.random() * 6,
    delay: Math.random() * 8,
    opacity: 0.3 + Math.random() * 0.4
  }));

  // Fewer rings on mobile
  const ringCount = isMobile ? 3 : 4;
  const rings = Array.from({ length: ringCount }, (_, i) => ({
    id: i,
    delay: i * 2.5
  }));

  return (
    <div className={`loader-v7 phase-${phase} ${isExiting ? 'loader-exit' : ''}`}>
      <div className="loader-dark-bg" />
      
      <div className="particles-layer">
        {particles.map((p) => (
          <div
            key={p.id}
            className="float-particle"
            style={{
              left: p.left,
              width: `${p.size}px`,
              height: `${p.size}px`,
              animationDuration: `${p.duration}s`,
              animationDelay: `${p.delay}s`,
              opacity: p.opacity
            }}
          />
        ))}
      </div>

      <div className="rings-layer">
        {rings.map((ring) => (
          <div
            key={ring.id}
            className="expand-ring"
            style={{ animationDelay: `${ring.delay}s` }}
          />
        ))}
      </div>

      <div className="ambient-glow" />

      <div className="reveal-bars">
        <div className="reveal-bar top" style={{ height: `${Math.max(0, 50 - progress / 2)}%` }} />
        <div className="reveal-bar bottom" style={{ height: `${Math.max(0, 50 - progress / 2)}%` }} />
      </div>

      <div className="vignette-overlay" />

      <div className="corner-accent top-left" />
      <div className="corner-accent top-right" />
      <div className="corner-accent bottom-left" />
      <div className="corner-accent bottom-right" />

      <div className="loader-content">
        <div className={`loader-title ${phase === 'ready' ? 'title-ready' : ''}`}>
          {displayText.split('').map((char, i) => (
            <span 
              key={`${phase}-${i}`}
              className="title-char"
              style={{ animationDelay: `${i * 0.04}s` }}
            >
              {char === ' ' ? '\u00A0' : char}
            </span>
          ))}
        </div>

        {phase === 'loading' && (
          <div className="progress-bar-container">
            <div className="progress-bar-track">
              <div className="progress-bar-fill" style={{ width: `${progress}%` }}>
                <div className="progress-bar-glow" />
              </div>
            </div>
            <div className="progress-percent">{progress}%</div>
          </div>
        )}
      </div>
    </div>
  );
}
