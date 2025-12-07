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
    <div className="flex items-start gap-3">
      <div className="mt-1 flex-shrink-0">
        <Icon className="w-4 h-4 text-white/80" />
      </div>
      <div>
        <h3 className="text-white font-medium text-xs leading-tight">{value}</h3>
        {subValue && <p className="text-[#D4AF37]/80 text-xs font-light">{subValue}</p>}
        {label && !subValue && <p className="text-[#D4AF37]/80 text-xs font-light">{label}</p>}
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
    <div onClick={onClose} className="fixed inset-0 z-[150] flex items-center justify-center bg-black/90 backdrop-blur-md p-4 animate-in fade-in zoom-in duration-300 cursor-pointer">
      <div onClick={(e) => e.stopPropagation()} className="bg-[#0f110f] w-full max-w-md rounded-2xl border border-[#D4AF37]/50 shadow-[0_0_50px_rgba(212,175,55,0.2)] p-8 relative overflow-hidden cursor-default">
        <div className="absolute top-0 right-0 w-32 h-32 bg-[#D4AF37] blur-[100px] opacity-10 pointer-events-none" />
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors">
          <X size={24} />
        </button>
        <div className="text-center mb-8">
          <div className="w-20 h-20 rounded-full bg-black border-2 border-[#D4AF37] p-4 flex items-center justify-center shadow-lg mx-auto mb-4">
            <img
              src={item.logo || `https://logo.clearbit.com/${item.domain}`}
              alt="logo"
              className="w-full h-full object-contain"
              onError={(e) => { e.target.src = 'https://via.placeholder.com/50/000000/FFFFFF?text=' + item.org[0] }}
            />
          </div>
          <h3 className="text-2xl font-serif bg-gradient-to-r from-[#BF953F] via-[#FCF6BA] to-[#B38728] bg-clip-text text-transparent font-bold">
            {item.org}
          </h3>
          <p className="text-[#D4AF37] text-xs font-bold tracking-[0.2em] uppercase mt-2">Did You Know?</p>
        </div>
        <ul className="space-y-4">
          {(item.facts || []).map((fact, idx) => (
            <li key={idx} className="flex gap-3 text-sm text-gray-300 leading-relaxed border-b border-white/5 pb-2 last:border-0">
              <span className="font-serif text-[#D4AF37] font-bold text-lg leading-none mt-0.5">{idx + 1}.</span>
              <span>{fact}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

const CompatibilityTab = ({ t }) => {
  const [partnerDetails, setPartnerDetails] = useState({ name: '', date: '', time: '', city: '' });
  const [analyzing, setAnalyzing] = useState(false);
  const [result, setResult] = useState(null);
  const [citySuggestions, setCitySuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

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

    const analysis = generateDetailedAnalysis(partnerDetails.date, partnerDetails.city, partnerDetails.name);

    setTimeout(() => {
      setResult({
        score: analysis.score,
        total: 36,
        verdictTitle: analysis.verdictTitle,
        verdictDesc: analysis.verdictDesc,
        details: analysis.details
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
        <div className="max-w-md mx-auto w-full bg-[#111] border border-white/10 p-8 rounded-2xl shadow-2xl">
          <h4 className="text-white font-bold mb-6 flex items-center gap-2 border-b border-white/10 pb-4">
            <User className="text-[#D4AF37]" size={20} /> {t.partnerDetails}
          </h4>
          <div className="space-y-4">
            <div>
              <label className="text-[10px] text-gray-500 uppercase font-bold mb-1 block">Name</label>
              <input
                type="text"
                className="w-full bg-black border border-white/20 rounded-lg p-3 text-white focus:border-[#D4AF37] outline-none transition-colors"
                placeholder="Partner's Name"
                value={partnerDetails.name}
                onChange={e => setPartnerDetails({ ...partnerDetails, name: e.target.value })}
              />
            </div>
            <div className="relative">
              <label className="text-[10px] text-gray-500 uppercase font-bold mb-1 block">City</label>
              <div className="relative">
                <input
                  type="text"
                  className="w-full bg-black border border-white/20 rounded-lg p-3 pl-10 text-white focus:border-[#D4AF37] outline-none transition-colors"
                  placeholder="Start typing..."
                  value={partnerDetails.city}
                  onChange={handleCityChange}
                />
                <MapIcon className="absolute left-3 top-3.5 text-gray-500 w-4 h-4" />
              </div>
              {showSuggestions && citySuggestions.length > 0 && (
                <ul className="absolute z-50 w-full bg-[#1a1a1a] border border-white/10 rounded-lg mt-1 max-h-40 overflow-y-auto shadow-xl">
                  {citySuggestions.map(city => (
                    <li
                      key={city}
                      onClick={() => selectCity(city)}
                      className="px-4 py-2 text-sm text-gray-300 hover:bg-[#D4AF37] hover:text-black cursor-pointer"
                    >
                      {city}
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="text-[10px] text-gray-500 uppercase font-bold mb-1 block">Date</label>
                <input
                  type="date"
                  className="w-full bg-black border border-white/20 rounded-lg p-3 text-white focus:border-[#D4AF37] outline-none transition-colors text-xs"
                  value={partnerDetails.date}
                  onChange={e => setPartnerDetails({ ...partnerDetails, date: e.target.value })}
                />
              </div>
              <div>
                <label className="text-[10px] text-gray-500 uppercase font-bold mb-1 block">Time</label>
                <input
                  type="time"
                  className="w-full bg-black border border-white/20 rounded-lg p-3 text-white focus:border-[#D4AF37] outline-none transition-colors text-xs"
                  value={partnerDetails.time}
                  onChange={e => setPartnerDetails({ ...partnerDetails, time: e.target.value })}
                />
              </div>
            </div>
          </div>
          <button
            onClick={handleAnalyze}
            disabled={!partnerDetails.name || !partnerDetails.date || !partnerDetails.city}
            className="w-full mt-6 py-3 bg-gradient-to-r from-[#BF953F] to-[#B38728] text-black font-bold rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Sparkles size={18} /> {t.analyze}
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
        <div className="max-w-5xl mx-auto w-full h-full overflow-y-auto pb-8 px-2 scrollbar-hide animate-in zoom-in duration-500">
          <div className="flex flex-col items-center mb-10">
            <div className="relative mb-4">
              <div className="w-40 h-40 rounded-full border-[6px] border-[#D4AF37] flex items-center justify-center bg-black shadow-[0_0_60px_rgba(212,175,55,0.4)]">
                <div className="text-center">
                  <span className="block text-5xl font-serif font-bold text-white">{result.score}</span>
                  <span className="block text-xs text-gray-500 uppercase tracking-widest mt-1 font-bold">/ 36 Gunas</span>
                </div>
              </div>
              <div className={`absolute -bottom-3 left-1/2 -translate-x-1/2 px-6 py-1.5 rounded-full text-sm font-bold shadow-xl whitespace-nowrap border ${result.score > 18 ? 'bg-green-900/90 border-green-500 text-green-100' : 'bg-red-900/90 border-red-500 text-red-100'}`}>
                {result.verdictTitle}
              </div>
            </div>
            <p className="text-gray-400 text-sm font-sans text-center max-w-lg">{result.verdictDesc}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {result.details.map((item, idx) => (
              <div key={idx} className="bg-[#111] border border-white/10 rounded-xl p-5 hover:border-[#D4AF37]/40 transition-all hover:shadow-lg hover:shadow-[#D4AF37]/5 flex gap-4">
                <div className={`p-3 rounded-full h-fit ${item.score === item.total ? 'bg-green-500/20 text-green-400' : item.score > 0 ? 'bg-[#D4AF37]/20 text-[#D4AF37]' : 'bg-red-500/20 text-red-400'}`}>
                  <item.icon size={24} />
                </div>
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <h5 className="text-white font-bold text-base">{item.category}</h5>
                    <span className="text-xs font-mono text-gray-500 bg-black px-2 py-1 rounded border border-white/10">{item.score} / {item.total}</span>
                  </div>
                  <div className="w-full bg-white/5 rounded-full h-1 mb-2">
                    <div
                      className={`h-full rounded-full ${item.score === item.total ? 'bg-green-500' : item.score > 0 ? 'bg-[#D4AF37]' : 'bg-red-500'}`}
                      style={{ width: `${(item.score / item.total) * 100}%` }}
                    />
                  </div>
                  <p className="text-xs text-gray-400 font-sans leading-relaxed mb-2">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center border-t border-white/10 pt-6">
            <p className="text-gray-500 text-xs italic mb-4">Note: This is a simulated Vedic analysis based on birth details. For marriage decisions, consultation with a real astrologer is recommended.</p>
            <button onClick={() => setResult(null)} className="px-6 py-2 bg-white/5 hover:bg-white/10 text-white rounded-full text-sm border border-white/10 transition-colors">
              Analyze New Match
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export { DetailItem, ProfileEditModal, NetworkBackground, FactsModal, CompatibilityTab };
