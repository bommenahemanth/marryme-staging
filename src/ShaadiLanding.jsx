import React, { useState, useRef, useEffect } from 'react';
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
  Edit2,
  Loader2,

  Trophy,
  ArrowUp,
  Cpu,
  Award,
  Linkedin,
  Instagram,
  MessageCircle,
  X,
  Mail,
  Facebook,
  Phone,
} from 'lucide-react';

import { resizeImage } from './helpers';
import {
  PLACEHOLDER_GALLERY,
  DEFAULT_PROFILE,
  SKILLS,
  CERTIFICATIONS,
  TIMELINE_DATA
} from './constants';
import {
  DetailItem,
  ProfileEditModal,
  NetworkBackground,
  FactsModal,
  CursorTrail,
  SectionDivider,
  TypeWriter,
  FloatingParticles,
  LoadingScreen
} from './components';
import {
  HoroscopeSection,
  AboutMeSection,
  FamilySection,

  ContactSection
} from './sections';

export default function ShaadiLanding() {
  const [profile, setProfile] = useState(DEFAULT_PROFILE);
  const [loading] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [flippedCards, setFlippedCards] = useState([]);
  const [selectedFactItem, setSelectedFactItem] = useState(null);
  const [fullscreenLandingPhoto, setFullscreenLandingPhoto] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [editForm, setEditForm] = useState(DEFAULT_PROFILE);
  const [galleryImages, setGalleryImages] = useState(DEFAULT_PROFILE.galleryImages || []);
  const [pageLoaded, setPageLoaded] = useState(false);

  const fileInputRef = useRef(null);
  const journeySectionRef = useRef(null);
  const profileSectionRef = useRef(null);
  const horoscopeSectionRef = useRef(null);
  const aboutSectionRef = useRef(null);
  const familySectionRef = useRef(null);

  const handleGalleryReplace = async (e, indexStr) => {
    if (!e.target.files || e.target.files.length === 0 || indexStr === undefined) return;

    const index = parseInt(indexStr);
    if (isNaN(index)) return;

    try {
      const file = e.target.files[0];
      const base64 = await resizeImage(file);

      let currentImages = [...galleryImages];
      while (currentImages.length <= index) {
        currentImages.push(PLACEHOLDER_GALLERY[currentImages.length % PLACEHOLDER_GALLERY.length]);
      }

      currentImages[index] = base64;
      setGalleryImages(currentImages);
    } catch (error) {
      console.error("Gallery replace failed", error);
    }
  };

  const handleDeleteGalleryImage = async (index) => {
    const updatedGallery = galleryImages.filter((_, i) => i !== index);
    setGalleryImages(updatedGallery);
  };

  const handlePhotoUpload = async (e, field = 'photoBase64') => {
    if (!e.target.files || e.target.files.length === 0) return;
    setUploading(true);
    try {
      const file = e.target.files[0];
      const base64 = await resizeImage(file);
      setProfile(prev => ({ ...prev, [field]: base64 }));
    } catch (error) {
      console.error("Error uploading photo:", error);
    } finally {
      setUploading(false);
    }
  };

  const saveProfile = async () => {
    setProfile(editForm);
    setIsEditing(false);
  };

  const toggleFlip = (id) => {
    setFlippedCards(prev =>
      prev.includes(id) ? prev.filter(cardId => cardId !== id) : [...prev, id]
    );
  };

  const scrollToJourney = () => {
    journeySectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToTop = () => {
    profileSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  // Scroll progress and section navigation
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState(0);
  const containerRef = useRef(null);
  
  const sections = [
    { id: 'profile', label: 'Profile' },
    { id: 'journey', label: 'Journey' },
    { id: 'horoscope', label: 'Horoscope' },
    { id: 'about', label: 'About' },
    { id: 'family', label: 'Family' },
    { id: 'contact', label: 'Connect' }
  ];

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const scrollTop = container.scrollTop;
      const scrollHeight = container.scrollHeight - container.clientHeight;
      const progress = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;
      setScrollProgress(progress);

      // Determine active section
      const sectionElements = container.querySelectorAll('[data-section]');
      sectionElements.forEach((el, idx) => {
        const rect = el.getBoundingClientRect();
        if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
          setActiveSection(idx);
        }
      });
    };

    container.addEventListener('scroll', handleScroll);
    return () => container.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll reveal observer for content animations
  useEffect(() => {
    const revealElements = document.querySelectorAll('.reveal-on-scroll');
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.05, rootMargin: '0px 0px -20px 0px' }
    );

    revealElements.forEach((el) => observer.observe(el));

    return () => {
      revealElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const scrollToSection = (idx) => {
    const container = containerRef.current;
    if (!container) return;
    const sectionElements = container.querySelectorAll('[data-section]');
    if (sectionElements[idx]) {
      sectionElements[idx].scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (loading) {
    return (
      <div className="h-screen w-full bg-black flex items-center justify-center">
        <div className="animate-spin text-[#D4AF37]">
          <Loader2 size={48} />
        </div>
      </div>
    );
  }

  return (
    <>
      {!pageLoaded && <LoadingScreen onLoadComplete={() => setPageLoaded(true)} />}
      <div ref={containerRef} className={`h-screen w-full overflow-y-scroll bg-black text-white font-sans selection:bg-[#D4AF37] selection:text-black scroll-smooth snap-y snap-proximity md:snap-mandatory ${pageLoaded ? "page-entrance" : "opacity-0"}`}>
      
      {/* Cursor Trail (Desktop only) */}
      <FloatingParticles />
      <CursorTrail />

      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-black/50 z-[100]">
        <div 
          className="h-full progress-shimmer transition-all duration-150"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Section Dots Navigation - Hidden on mobile */}
      <nav className="fixed right-4 md:right-6 top-1/2 -translate-y-1/2 z-[100] hidden md:flex flex-col gap-3">
        {sections.map((section, idx) => (
          <button
            key={section.id}
            onClick={() => scrollToSection(idx)}
            className="group relative flex items-center justify-end"
            aria-label={`Go to ${section.label}`}
          >
            <span className={`absolute right-6 px-2 py-1 rounded text-xs font-medium whitespace-nowrap transition-all duration-200 ${
              activeSection === idx 
                ? 'opacity-100 bg-[#D4AF37] text-black' 
                : 'opacity-0 group-hover:opacity-100 bg-white/10 text-white'
            }`}>
              {section.label}
            </span>
            <span className={`w-3 h-3 rounded-full border-2 transition-all duration-300 ${
              activeSection === idx 
                ? 'bg-[#D4AF37] border-[#D4AF37] scale-125' 
                : 'bg-transparent border-white/40 hover:border-[#D4AF37] hover:scale-110'
            }`} />
          </button>
        ))}
      </nav>

      {/* Mobile Navigation - Minimal dots, expand on touch */}
      <div className="fixed right-0 top-1/2 -translate-y-1/2 z-[100] flex md:hidden flex-col gap-0.5 pr-1">
        {sections.map((section, idx) => (
          <button
            key={section.id}
            onClick={(e) => {
              // Hide all labels first
              document.querySelectorAll('.mobile-nav-label').forEach(el => {
                el.style.opacity = '0';
                el.style.transform = 'translateX(10px)';
              });
              document.querySelectorAll('.mobile-nav-dot').forEach(el => {
                el.style.transform = 'scale(1)';
              });
              // Show this label
              const label = e.currentTarget.querySelector('.mobile-nav-label');
              const dot = e.currentTarget.querySelector('.mobile-nav-dot');
              if (label) { label.style.opacity = '1'; label.style.transform = 'translateX(0)'; }
              if (dot) { dot.style.transform = 'scale(1.5)'; }
              // Hide after 2 seconds
              setTimeout(() => {
                document.querySelectorAll('.mobile-nav-label').forEach(el => {
                  el.style.opacity = '0';
                  el.style.transform = 'translateX(10px)';
                });
                document.querySelectorAll('.mobile-nav-dot').forEach(el => {
                  el.style.transform = 'scale(1)';
                });
              }, 2000);
              scrollToSection(idx);
            }}
            className="group relative flex items-center justify-end py-2 pr-2 touch-manipulation"
            aria-label={`Go to ${section.label}`}
          >
            {/* Label - appears on touch */}
            <span 
              className="mobile-nav-label absolute right-6 px-2 py-1 bg-gradient-to-r from-[#D4AF37] to-[#F4D03F] rounded text-[10px] text-black font-medium whitespace-nowrap transition-all duration-200 opacity-0 translate-x-2.5 pointer-events-none shadow-lg"
            >
              {section.label}
            </span>
            {/* Dot */}
            <span 
              className={`mobile-nav-dot rounded-full transition-all duration-300 ${
                activeSection === idx 
                  ? 'bg-[#D4AF37] w-2 h-2 shadow-[0_0_6px_rgba(212,175,55,0.8)] animate-dot-pulse animate-dot-pulse' 
                  : 'bg-white/50 w-1.5 h-1.5'
              }`}
            ></span>
          </button>
        ))}
      </div>

      {/* ==================== PAGE 1: PROFILE ==================== */}
      <div ref={profileSectionRef} data-section="profile" className="relative w-full min-h-[100dvh] flex flex-col overflow-visible snap-start">
        <div
          className="absolute inset-0 z-0 bg-cover bg-no-repeat transition-all duration-700"
          style={{
            backgroundImage: `url('${profile.photoBase64 || "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=2187&auto=format&fit=crop"}')`,
            backgroundPosition: '60% 25%'
          }}
        />
        <div className="absolute inset-0 z-10 bg-gradient-to-r from-black via-black/70 via-50% to-transparent" />
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/80 via-transparent to-black/30" />

        <div className="relative z-20 w-full px-4 sm:px-6 md:px-8 lg:px-12 py-8 sm:py-12 flex-1 flex flex-col justify-center">



          
          {/* CENTER: PROFILE CONTENT */}
          <div className="flex flex-col justify-center max-w-2xl md:max-w-3xl lg:max-w-4xl xl:max-w-5xl mx-auto md:mx-0 animate-fadeInUp">
            <div className="mb-4 sm:mb-6 group relative">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif tracking-tight leading-tight mb-2">
                <TypeWriter 
                  text={`${profile.firstName} ${profile.lastName}`}
                  speed={100}
                  delay={300}
                  className="font-bold bg-gradient-to-r from-[#BF953F] via-[#FCF6BA] to-[#B38728] bg-clip-text text-transparent drop-shadow-lg text-glow-gold"
                />
              </h1>
              <button
                onClick={() => setIsEditing(true)}
                className="absolute -right-6 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity p-2 text-gray-500 hover:text-[#D4AF37]"
                title="Edit Profile"
              >
                <Edit2 size={18} />
              </button>
            </div>

            {/* Social Connect - below name */}
            <div className="flex flex-col gap-3 mb-6">
              {/* Row 1 */}
              <div className="flex items-center justify-start gap-3">
                <a href="https://www.linkedin.com/in/bommena-hemanth-2a2834118/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center bg-blue-600/20 border border-blue-500/40 rounded-full text-blue-400 hover:bg-blue-600 hover:text-white transition-all hover:-translate-y-1 backdrop-blur-md social-icon" title="LinkedIn">
                  <Linkedin size={18} />
                </a>
                <a href="https://www.instagram.com/bommenahemanth/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center bg-pink-600/20 border border-pink-500/40 rounded-full text-pink-400 hover:bg-pink-600 hover:text-white transition-all hover:-translate-y-1 backdrop-blur-md social-icon" title="Instagram">
                  <Instagram size={18} />
                </a>
                <a href="https://www.facebook.com/bommenahemanth" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center bg-blue-700/20 border border-blue-600/40 rounded-full text-blue-500 hover:bg-blue-700 hover:text-white transition-all hover:-translate-y-1 backdrop-blur-md social-icon" title="Facebook">
                  <Facebook size={18} />
                </a>
                <a href="mailto:bommenahemanth@gmail.com?subject=Hey%20Hemanth!%20Loved%20your%20profile%20%E2%9C%A8&body=Hi%20Hemanth!%20%F0%9F%91%8B%0A%0AI%20just%20saw%20your%20profile%20and%20really%20liked%20it!%0AWould%20love%20to%20connect%20and%20chat.%20%F0%9F%98%8A%0A%0ALooking%20forward%20to%20hearing%20from%20you!" className="w-10 h-10 flex items-center justify-center bg-red-600/20 border border-red-500/40 rounded-full text-red-400 hover:bg-red-600 hover:text-white transition-all hover:-translate-y-1 backdrop-blur-md social-icon" title="Email">
                  <Mail size={18} />
                </a>
              </div>
              {/* Row 2 */}
              <div className="flex items-center justify-start gap-3">
                <a href="https://wa.me/918124269822?text=Hey%20Hemanth!%20%F0%9F%91%8B%0A%0AJust%20saw%20your%20profile%20and%20loved%20it!%20%E2%9C%A8%0AWould%20love%20to%20connect%20and%20get%20to%20know%20you%20better.%20%F0%9F%98%8A" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center bg-[#25D366]/20 border border-[#25D366]/40 rounded-full text-[#25D366] hover:bg-[#25D366] hover:text-white transition-all hover:-translate-y-1 backdrop-blur-md social-icon" title="WhatsApp">
                  <svg className="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                </a>
                <a href="sms:+14699967434&body=Hey%20Hemanth!%20Saw%20your%20profile%20and%20loved%20it!" className="w-10 h-10 flex items-center justify-center bg-[#007AFF]/20 border border-[#007AFF]/40 rounded-full text-[#007AFF] hover:bg-[#007AFF] hover:text-white transition-all hover:-translate-y-1 backdrop-blur-md social-icon" title="iMessage (US)">
                  <MessageCircle size={18} />
                </a>
                <a href="facetime-audio:bommenahemanth@gmail.com" className="w-10 h-10 flex items-center justify-center bg-[#007AFF]/20 border border-[#007AFF]/40 rounded-full text-[#007AFF] hover:bg-[#007AFF] hover:text-white transition-all hover:-translate-y-1 backdrop-blur-md social-icon" title="FaceTime Audio">
                  <svg className="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 24 24"><path d="M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4z"/></svg>
                </a>
                <a href="tel:+14699967434" className="w-10 h-10 flex items-center justify-center bg-emerald-600/20 border border-emerald-500/40 rounded-full text-emerald-400 hover:bg-emerald-600 hover:text-white transition-all hover:-translate-y-1 backdrop-blur-md social-icon" title="Call US: +1 469-996-7434">
                  <Phone size={18} />
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4 mb-10">
              <div className="w-0.5 h-10 bg-gradient-to-b from-[#BF953F] to-[#B38728]" />
              <p className="text-lg md:text-xl lg:text-2xl font-light text-gray-300 italic shadow-black drop-shadow-md whitespace-pre-line">
                {profile.quote}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 md:gap-x-6 lg:gap-x-8 gap-y-4 md:gap-y-5 lg:gap-y-6 mb-8 stagger-fade-in md:max-w-3xl lg:max-w-4xl">
              <DetailItem icon={Calendar} value={profile.age} label="Age" />
              <DetailItem icon={Ruler} value={profile.height} label="Height" />
              <DetailItem icon={User} value={profile.caste} label="Caste (reach out only if no concern)" />
              <DetailItem icon={MapPin} value={profile.raisedIn} label="Raised in" />
              <DetailItem icon={Navigation} value={profile.currentLocation} label="Current Location" />
              <DetailItem icon={Plane} value={profile.movedToUs} subValue="Moved to US" />
              <DetailItem icon={Briefcase} value={profile.company} subValue={profile.jobTitle} />
              <DetailItem icon={Globe} value={profile.visaStatus} label="Visa Status" />
              <DetailItem icon={GraduationCap} value={profile.educationDegree} subValue={profile.educationUni} />
              <DetailItem icon={Languages} value={profile.languages} label="Languages" />
            </div>

            {/* BOTTOM CENTER: READ STORY BUTTON */}
            <div className="flex flex-col gap-3 items-center mt-6 pb-8">
              <p className="text-gray-400/70 text-xs italic">Open in desktop for better experience</p>
              <button
                onClick={scrollToJourney}
                className="relative group overflow-hidden bg-gradient-to-r from-[#BF953F] to-[#B38728] text-black font-bold py-3 px-10 rounded-full shadow-[0_0_20px_rgba(212,175,55,0.4)] hover:shadow-[0_0_30px_rgba(212,175,55,0.7)] transition-all duration-300 w-fit animate-pulse-glow btn-press btn-ripple"
              >
                <span className="relative z-10 flex items-center gap-2 text-lg tracking-wider">
                  Read Full Story <ChevronDown size={20} className="group-hover:translate-y-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </button>
            </div>
          </div>
        </div>
      </div>

      
      {/* Fullscreen Landing Photo Modal */}
      {fullscreenLandingPhoto && (
        <div 
          className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-md lightbox-backdrop flex items-center justify-center p-4 cursor-pointer animate-fadeIn"
          onClick={() => setFullscreenLandingPhoto(false)}
        >
          <div className="relative max-w-6xl max-h-[90vh] animate-lightbox">
            <img 
              src={profile.photoBase64} 
              alt="Profile Fullscreen" 
              className="max-w-full max-h-[90vh] object-contain rounded-2xl shadow-2xl shadow-[#D4AF37]/30"
            />
            <button 
              className="absolute top-4 right-4 p-3 bg-black/50 backdrop-blur rounded-full hover:bg-[#D4AF37] hover:text-black transition-all duration-300 border border-white/20 hover:scale-110"
              onClick={() => setFullscreenLandingPhoto(false)}
            >
              <X size={24} />
            </button>
          </div>
        </div>
      )}

      {/* ==================== PAGE 2: JOURNEY (VERTICAL) ==================== */}
      <div ref={journeySectionRef} data-section="journey" className="relative w-full flex flex-col bg-black snap-start overflow-visible">
        <NetworkBackground />

        <div className="sticky top-0 z-50 w-full px-4 sm:px-8 py-4 sm:py-6 flex justify-between items-center bg-black/90 backdrop-blur-xl border-b border-[#D4AF37]/20">
          <div>
            <h2 className="text-3xl font-serif text-white tracking-wide">
              The <span className="text-[#D4AF37] italic">Journey</span> So Far
            </h2>
          </div>
          <button onClick={scrollToTop} className="group flex items-center gap-2 text-xs text-[#D4AF37] hover:text-white transition-colors bg-white/5 px-4 py-2 rounded-full border border-[#D4AF37]/20">
            <span>Back to Top</span>
            <ArrowUp className="w-3 h-3 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>

        <div className="text-center my-8 relative z-20 px-4 reveal-on-scroll">
          <p className="text-gray-300 max-w-2xl mx-auto font-serif text-base sm:text-xl leading-relaxed">
            Ex-<span className="bg-gradient-to-l from-[#FFD700] via-[#FFF8DC] to-[#DAA520] bg-clip-text text-transparent font-bold">McKinsey</span> Supply Chain Strategy Consultant with <span className="bg-gradient-to-l from-[#FFD700] via-[#FFF8DC] to-[#DAA520] bg-clip-text text-transparent font-bold">5+ years</span> experience in India, UK, US in the <span className="bg-gradient-to-l from-[#FFD700] via-[#FFF8DC] to-[#DAA520] bg-clip-text text-transparent font-bold">Retail</span> industry.
          </p>
        </div>

        <div className="max-w-4xl mx-auto px-4 pb-4 relative z-10 w-full reveal-on-scroll reveal-delay-2">
          {/* Timeline line - positioned to connect logos only */}
          <div className="absolute left-1/2 w-[2px] -translate-x-1/2 bg-[#D4AF37]" style={{ top: '100px', bottom: '100px' }} />

          <div className="space-y-8 animate-in slide-in-from-bottom-20 duration-1000">
            {TIMELINE_DATA.map((item, idx) => {
              const isEven = idx % 2 === 0;
              const isFlipped = flippedCards.includes(item.id);

              return (
                <div key={item.id} className={`relative flex flex-col md:flex-row items-center gap-8 ${isEven ? 'md:flex-row-reverse slide-in-right' : 'slide-in-left'}`} style={{ animationDelay: `${idx * 0.15}s` }}>
                  {/* FLIP CARD */}
                  <div className="flex-1 w-full md:w-[45%] h-[200px] sm:h-[180px]" style={{ perspective: '1000px' }}>
                    <div
                      className="relative w-full h-full cursor-pointer"
                      style={{ 
                        transformStyle: 'preserve-3d',
                        transition: 'transform 0.6s ease',
                        transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)'
                      }}
                      onClick={() => toggleFlip(item.id)}
                    >
                      {/* FRONT FACE */}
                      <div 
                        className="absolute inset-0 bg-gradient-to-br from-[#1a1608] via-[#0d0b05] to-[#050505] border border-[#D4AF37]/30 rounded-xl p-3 shadow-2xl flex flex-col hover:border-[#D4AF37]/60 hover:shadow-[#D4AF37]/20 active:scale-[0.98] transition-all duration-300"
                        style={{ backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden' }}
                      >
                        <div className="text-[#D4AF37] text-[10px] font-black tracking-[0.2em] uppercase mb-1 border-b border-[#D4AF37]/20 pb-1 flex justify-between items-center">
                          <span>{item.date}</span>
                        </div>
                        <div className="flex-grow flex flex-col justify-center text-left">
                          <h3 className="text-lg font-serif text-white mb-0.5 leading-tight">{item.role}</h3>
                          <div className="flex items-center gap-1.5 mb-2">
                            <Briefcase size={11} className="text-gray-500" />
                            <span className="text-sm font-bold uppercase tracking-wider bg-gradient-to-l from-[#FFD700] via-[#FFF8DC] to-[#DAA520] bg-clip-text text-transparent">
                              {item.org}
                            </span>
                          </div>
                          <p className="text-gray-400 font-serif italic text-xs leading-relaxed border-l-2 border-[#D4AF37]/30 pl-2 line-clamp-2">
                            "{item.tagline}"
                          </p>
                        </div>
                        <div className="mt-auto pt-1 flex items-center justify-between text-[9px] text-gray-500 uppercase tracking-widest">
                          <span className="flex items-center gap-2"><MapPin size={9} /> {item.loc}</span>
                          <span className="text-[#D4AF37]/70 animate-pulse">👆 Tap to flip</span>
                        </div>
                      </div>

                      {/* BACK FACE */}
                      <div 
                        className="absolute inset-0 bg-gradient-to-br from-[#1a1608] via-[#0d0b05] to-[#050505] border border-[#D4AF37] rounded-xl p-3 shadow-[0_0_40px_rgba(212,175,55,0.15)] flex flex-col"
                        style={{ backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
                      >
                        <div className="flex items-center gap-2 mb-2 border-b border-[#D4AF37]/30 pb-1">
                          <Trophy className="text-[#D4AF37]" size={12} />
                          <span className="text-white font-serif text-xs">Responsibilities</span>
                        </div>
                        <ul className="flex-grow space-y-1.5 pr-1 flex flex-col justify-center">
                          {item.responsibilities && item.responsibilities.map((resp, i) => (
                            <li key={i} className="flex gap-2 text-[10px] text-gray-300 leading-tight">
                              <span className="text-[#D4AF37] mt-0.5">•</span>
                              <span>{resp}</span>
                            </li>
                          ))}
                        </ul>
                        <div className="mt-1 pt-1 text-center border-t border-white/10">
                          <span className="text-[9px] text-[#D4AF37] uppercase tracking-widest">👆 Tap to flip back</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    onClick={() => setSelectedFactItem(item)}
                    className="relative flex-shrink-0 z-10 cursor-pointer group"
                  >
                    <div className="w-14 h-14 rounded-full bg-black border-[3px] border-[#D4AF37] p-2 flex items-center justify-center shadow-[0_0_20px_rgba(212,175,55,0.4)] transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_0_30px_rgba(212,175,55,0.6)]">
                      <img
                        src={item.logo || `https://logo.clearbit.com/${item.domain}`}
                        alt={item.org}
                        className="w-full h-full object-contain"
                        loading="lazy"
                        onError={(e) => { 
                          e.target.onerror = null;
                          e.target.style.display = 'none';
                          e.target.parentElement.innerHTML = `<span class="text-[#D4AF37] font-bold text-lg">${item.org[0]}</span>`;
                        }}
                      />
                    </div>
                    <div className={`absolute -top-7 left-0 right-0 flex justify-center pointer-events-none transition-opacity ${idx === 0 ? 'opacity-100 animate-bounce' : 'opacity-0 group-hover:opacity-100'}`}>
                      <span className="bg-[#D4AF37] text-black text-[9px] px-2 py-0.5 rounded whitespace-nowrap font-bold font-serif">Click Logo</span>
                    </div>
                  </div>
                  <div className="flex-1 hidden md:block" />
                </div>
              );
            })}
          </div>

        </div>
        
      </div>

      <SectionDivider  />

      {/* ==================== PAGE 3: HOROSCOPE ==================== */}
      <div ref={horoscopeSectionRef} data-section="horoscope" className="relative w-full min-h-screen snap-start">
        <HoroscopeSection scrollToTop={scrollToTop} />
      </div>

      <SectionDivider />

      {/* ==================== PAGE 4: ABOUT ME ==================== */}
      <div ref={aboutSectionRef} data-section="about" className="relative w-full min-h-screen snap-start">
        <AboutMeSection scrollToTop={scrollToTop} galleryImages={galleryImages} />
      </div>

      <SectionDivider  />

      {/* ==================== PAGE 5: FAMILY ==================== */}
      <div ref={familySectionRef} data-section="family" className="relative w-full snap-start">
        <FamilySection profile={profile} scrollToTop={scrollToTop} />
      </div>

      <SectionDivider />

      {/* ==================== PAGE 7: CONTACT / CTA ==================== */}
      <div data-section="contact" className="relative w-full min-h-screen snap-start">
        <ContactSection scrollToTop={scrollToTop} />
      </div>

      <ProfileEditModal
        isOpen={isEditing}
        onClose={() => setIsEditing(false)}
        data={editForm}
        onChange={setEditForm}
        onSave={saveProfile}
      />
      {selectedFactItem && <FactsModal item={selectedFactItem} onClose={() => setSelectedFactItem(null)} />}
    </div>
    </>
  );
}
