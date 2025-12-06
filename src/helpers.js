import { Heart, Users, MessageCircle, Home, Coins, Brain, Smile, Moon } from 'lucide-react';

// Helper function for compatibility analysis
export function generateDetailedAnalysis(date, city, name) {
  const seed = name.length + parseInt(date.split('-')[2] || '1');
  const cityFactor = city.length % 5;
  
  const details = [
    {
      category: "Varna (Spiritual Compatibility)",
      icon: Brain,
      score: Math.min(4, 1 + (seed % 4)),
      total: 4,
      desc: "Measures spiritual and intellectual compatibility. Higher scores indicate aligned life philosophies and spiritual values."
    },
    {
      category: "Vashya (Mutual Attraction)",
      icon: Heart,
      score: Math.min(2, (seed + cityFactor) % 3),
      total: 2,
      desc: "Indicates the degree of magnetic attraction and mutual influence between partners."
    },
    {
      category: "Tara (Health & Destiny)",
      icon: Moon,
      score: Math.min(3, 1 + ((seed * 2) % 3)),
      total: 3,
      desc: "Relates to health compatibility and the stars' influence on the couple's destiny together."
    },
    {
      category: "Yoni (Physical Compatibility)",
      icon: Users,
      score: Math.min(4, 2 + (seed % 3)),
      total: 4,
      desc: "Represents physical and intimate compatibility. Essential for a harmonious married life."
    },
    {
      category: "Graha Maitri (Mental Match)",
      icon: Brain,
      score: Math.min(5, 2 + ((seed + cityFactor) % 4)),
      total: 5,
      desc: "Moon sign compatibility indicating mental wavelength match and emotional understanding."
    },
    {
      category: "Gana (Temperament)",
      icon: Smile,
      score: Math.min(6, 3 + (seed % 4)),
      total: 6,
      desc: "Deva, Manushya, or Rakshasa gana match determining behavioral compatibility and temperament."
    },
    {
      category: "Bhakoot (Love & Finance)",
      icon: Coins,
      score: Math.min(7, 4 + ((seed * cityFactor) % 4)),
      total: 7,
      desc: "Crucial for emotional bonding, financial prosperity, and family growth potential."
    },
    {
      category: "Nadi (Health & Genes)",
      icon: Home,
      score: Math.min(8, 5 + (seed % 4)),
      total: 8,
      desc: "Most important factor for progeny health and genetic compatibility. Highest weightage."
    }
  ];

  const totalScore = details.reduce((sum, d) => sum + d.score, 0);
  
  let verdictTitle, verdictDesc;
  if (totalScore >= 28) {
    verdictTitle = "Excellent Match";
    verdictDesc = "The stars align beautifully. This is a highly auspicious match with strong compatibility across all dimensions.";
  } else if (totalScore >= 22) {
    verdictTitle = "Very Good Match";
    verdictDesc = "A favorable union with strong foundations. Minor adjustments may be needed but overall prospects are bright.";
  } else if (totalScore >= 18) {
    verdictTitle = "Good Match";
    verdictDesc = "A workable match with decent compatibility. Success depends on mutual understanding and effort.";
  } else {
    verdictTitle = "Needs Remedies";
    verdictDesc = "Some challenges exist. Vedic remedies and conscious effort can help overcome obstacles.";
  }

  return { details, score: totalScore, verdictTitle, verdictDesc };
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
