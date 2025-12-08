import { Heart, Users, MessageCircle, Home, Coins, Brain, Smile, Moon } from 'lucide-react';

// Helper function for compatibility analysis
export function generateDetailedAnalysis(date, city, name, lang = 'en') {
  const seed = name.length + parseInt(date.split('-')[2] || '1');
  const cityFactor = city.length % 5;
  
  const translations = {
    en: {
      varna: { category: "Varna (Spiritual Compatibility)", desc: "Measures spiritual and intellectual compatibility. Higher scores indicate aligned life philosophies and spiritual values." },
      vashya: { category: "Vashya (Mutual Attraction)", desc: "Indicates the degree of magnetic attraction and mutual influence between partners." },
      tara: { category: "Tara (Health & Destiny)", desc: "Relates to health compatibility and the stars' influence on the couple's destiny together." },
      yoni: { category: "Yoni (Physical Compatibility)", desc: "Represents physical and intimate compatibility. Essential for a harmonious married life." },
      graha: { category: "Graha Maitri (Mental Match)", desc: "Moon sign compatibility indicating mental wavelength match and emotional understanding." },
      gana: { category: "Gana (Temperament)", desc: "Deva, Manushya, or Rakshasa gana match determining behavioral compatibility and temperament." },
      bhakoot: { category: "Bhakoot (Love & Finance)", desc: "Crucial for emotional bonding, financial prosperity, and family growth potential." },
      nadi: { category: "Nadi (Health & Genes)", desc: "Most important factor for progeny health and genetic compatibility. Highest weightage." },
      excellent: { title: "Excellent Match", desc: "The stars align beautifully. This is a highly auspicious match with strong compatibility across all dimensions." },
      veryGood: { title: "Very Good Match", desc: "A favorable union with strong foundations. Minor adjustments may be needed but overall prospects are bright." },
      good: { title: "Good Match", desc: "A workable match with decent compatibility. Success depends on mutual understanding and effort." },
      needsRemedies: { title: "Needs Remedies", desc: "Some challenges exist. Vedic remedies and conscious effort can help overcome obstacles." },
      note: "Note: This is a simulated Vedic analysis based on birth details. For marriage decisions, consultation with a real astrologer is recommended.",
      analyzeNew: "Analyze New Match",
      gunas: "Gunas"
    },
    te: {
      varna: { category: "వర్ణ (ఆధ్యాత్మిక అనుకూలత)", desc: "ఆధ్యాత్మిక మరియు మేధో అనుకూలతను కొలుస్తుంది. అధిక స్కోర్లు సమాన జీవన తత్వాలు మరియు ఆధ్యాత్మిక విలువలను సూచిస్తాయి." },
      vashya: { category: "వశ్య (పరస్పర ఆకర్షణ)", desc: "భాగస్వాముల మధ్య అయస్కాంత ఆకర్షణ మరియు పరస్పర ప్రభావం యొక్క స్థాయిని సూచిస్తుంది." },
      tara: { category: "తార (ఆరోగ్యం & విధి)", desc: "ఆరోగ్య అనుకూలత మరియు జంట విధిపై నక్షత్రాల ప్రభావానికి సంబంధించినది." },
      yoni: { category: "యోని (శారీరక అనుకూలత)", desc: "శారీరక మరియు సన్నిహిత అనుకూలతను సూచిస్తుంది. సామరస్య వివాహ జీవితానికి అవసరం." },
      graha: { category: "గ్రహ మైత్రి (మానసిక అనుకూలత)", desc: "మానసిక తరంగదైర్ఘ్య సమతుల్యత మరియు భావోద్వేగ అవగాహనను సూచించే చంద్ర రాశి అనుకూలత." },
      gana: { category: "గణ (స్వభావం)", desc: "ప్రవర్తనా అనుకూలత మరియు స్వభావాన్ని నిర్ణయించే దేవ, మనుష్య లేదా రాక్షస గణ సమతుల్యత." },
      bhakoot: { category: "భకూట్ (ప్రేమ & ఆర్థికం)", desc: "భావోద్వేగ బంధం, ఆర్థిక శ్రేయస్సు మరియు కుటుంబ వృద్ధి సామర్థ్యానికి కీలకం." },
      nadi: { category: "నాడి (ఆరోగ్యం & వంశపారంపర్యం)", desc: "సంతాన ఆరోగ్యం మరియు జన్యు అనుకూలతకు అత్యంత ముఖ్యమైన అంశం. అత్యధిక వెయిటేజ్." },
      excellent: { title: "అద్భుతమైన జోడీ", desc: "నక్షత్రాలు అందంగా సమలేఖనమవుతున్నాయి. ఇది అన్ని కోణాలలో బలమైన అనుకూలతతో అత్యంత శుభప్రదమైన జోడీ." },
      veryGood: { title: "చాలా మంచి జోడీ", desc: "బలమైన పునాదులతో అనుకూలమైన బంధం. చిన్న సర్దుబాట్లు అవసరం కావచ్చు కానీ మొత్తం అవకాశాలు ప్రకాశవంతంగా ఉన్నాయి." },
      good: { title: "మంచి జోడీ", desc: "మంచి అనుకూలతతో పని చేయగల జోడీ. విజయం పరస్పర అవగాహన మరియు ప్రయత్నంపై ఆధారపడి ఉంటుంది." },
      needsRemedies: { title: "పరిహారాలు అవసరం", desc: "కొన్ని సవాళ్లు ఉన్నాయి. వైదిక పరిహారాలు మరియు స్పృహతో కూడిన ప్రయత్నం అడ్డంకులను అధిగమించడంలో సహాయపడతాయి." },
      note: "గమనిక: ఇది జన్మ వివరాల ఆధారంగా అనుకరించిన వైదిక విశ్లేషణ. వివాహ నిర్ణయాలకు, నిజమైన జ్యోతిష్కుడితో సంప్రదింపు సిఫార్సు చేయబడింది.",
      analyzeNew: "కొత్త జోడీని విశ్లేషించండి",
      gunas: "గుణాలు"
    }
  };

  const t = translations[lang] || translations.en;
  
  const details = [
    { ...t.varna, icon: Brain, score: Math.min(4, 1 + (seed % 4)), total: 4 },
    { ...t.vashya, icon: Heart, score: Math.min(2, (seed + cityFactor) % 3), total: 2 },
    { ...t.tara, icon: Moon, score: Math.min(3, 1 + ((seed * 2) % 3)), total: 3 },
    { ...t.yoni, icon: Users, score: Math.min(4, 2 + (seed % 3)), total: 4 },
    { ...t.graha, icon: Brain, score: Math.min(5, 2 + ((seed + cityFactor) % 4)), total: 5 },
    { ...t.gana, icon: Smile, score: Math.min(6, 3 + (seed % 4)), total: 6 },
    { ...t.bhakoot, icon: Coins, score: Math.min(7, 4 + ((seed * cityFactor) % 4)), total: 7 },
    { ...t.nadi, icon: Home, score: Math.min(8, 5 + (seed % 4)), total: 8 }
  ];

  const totalScore = details.reduce((sum, d) => sum + d.score, 0);
  
  let verdict;
  if (totalScore >= 28) verdict = t.excellent;
  else if (totalScore >= 22) verdict = t.veryGood;
  else if (totalScore >= 18) verdict = t.good;
  else verdict = t.needsRemedies;

  return { 
    details, 
    score: totalScore, 
    verdictTitle: verdict.title, 
    verdictDesc: verdict.desc,
    note: t.note,
    analyzeNew: t.analyzeNew,
    gunas: t.gunas
  };
}

// Image resize helper
export function resizeImage(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (event) => {
      const img = new Image();
      img.src = event.target?.result;
      img.onload = () => {
        const canvas = document.createElement('canvas');
        const MAX_WIDTH = 600;
        const MAX_HEIGHT = 600;
        let width = img.width;
        let height = img.height;

        if (width > height) {
          if (width > MAX_WIDTH) {
            height *= MAX_WIDTH / width;
            width = MAX_WIDTH;
          }
        } else {
          if (height > MAX_HEIGHT) {
            width *= MAX_HEIGHT / height;
            height = MAX_HEIGHT;
          }
        }

        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext('2d');
        ctx?.drawImage(img, 0, 0, width, height);
        const dataUrl = canvas.toDataURL('image/jpeg', 0.5);
        resolve(dataUrl);
      };
      img.onerror = (err) => reject(err);
    };
    reader.onerror = (err) => reject(err);
  });
}
