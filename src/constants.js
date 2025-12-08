// Constants and Data for Shaadi Profile

// Your actual photos - renamed for URL compatibility
export const PLACEHOLDER_GALLERY = [
  "./images/gallery-3.jpg",
  "./images/gallery-5.jpg",
  "./images/gallery-4.jpg",
  "./images/gallery-2.jpg",
  "./images/gallery-1.jpg"
];

export const ALL_CITIES = [
  // ===== TELANGANA (150+ places) =====
  // Major Cities & District HQs
  "Hyderabad", "Secunderabad", "Warangal", "Nizamabad", "Karimnagar", "Khammam", "Ramagundam", "Mahbubnagar", "Nalgonda", "Adilabad",
  "Suryapet", "Miryalaguda", "Jagtial", "Siddipet", "Mancherial", "Kothagudem", "Paloncha", "Bhadrachalam", "Kamareddy", "Sangareddy",
  "Vikarabad", "Wanaparthy", "Gadwal", "Nirmal", "Asifabad", "Mulugu", "Bhongir", "Jangaon", "Medak", "Zaheerabad",
  "Tandur", "Bodhan", "Armoor", "Metpally", "Koratla", "Sircilla", "Vemulawada", "Huzurabad", "Jammikunta", "Peddapalli",
  "Bellampalli", "Kyathampalli", "Godavarikhani", "Mandamarri", "Bhainsa", "Narayanpet", "Nagarkurnool", "Kalwakurthy", "Achampet", "Kollapur",
  "Shadnagar", "Kodangal", "Pargi", "Chevella", "Medchal", "Shamirpet", "Ghatkesar", "Uppal", "LB Nagar", "Dilsukhnagar",
  // Hyderabad Areas
  "Kukatpally", "Miyapur", "Kondapur", "Gachibowli", "Madhapur", "Jubilee Hills", "Banjara Hills", "Ameerpet", "Begumpet", "Tarnaka",
  "Malkajgiri", "Alwal", "Kompally", "Patancheru", "Narayankhed", "Andole", "Narsapur", "Tupran", "Dubbaka", "Gajwel",
  "Husnabad", "Huzurnagar", "Kodad", "Mothkur", "Nakrekal", "Devarakonda", "Chandur", "Choutuppal", "Yadadri", "Bhoopalapally",
  "Mahabubabad", "Thorrur", "Dornakal", "Narsampet", "Parkal", "Cherial", "Station Ghanpur", "Eturnagaram", "Yellandu", "Manuguru",
  // More Telangana Towns & Villages
  "Ibrahimpatnam", "Hayathnagar", "Vanasthalipuram", "Saroornagar", "Katedan", "Rajendranagar", "Shamshabad", "Kandukur", "Yacharam", "Manchal",
  "Amangal", "Farooqnagar", "Kulkacharla", "Doma", "Jadcherla", "Devarkadra", "Kosgi", "Makthal", "Narayanpet", "Maddur",
  "Utkoor", "Pebbair", "Atmakur", "Bijinapally", "Kalwakurthy", "Maganoor", "Bomraspet", "Achampet", "Amrabad", "Balmoor",
  "Kollapur", "Peddakothapally", "Uppununtala", "Nagarkurnool", "Telkapally", "Veldanda", "Thimmajipet", "Tadoor", "Kodair", "Lingal",
  "Kalher", "Madgul", "Dhanwada", "Bijinepally", "Pangal", "Ghanpur", "Mominpet", "Nawabpet", "Yalal", "Pulkal",
  "Nyalkal", "Raikode", "Jogipet", "Sadasivpet", "Kohir", "Vatpally", "Shankarampet", "Alladurg", "Ramayampet", "Chegunta",
  "Jinnaram", "Jagdevpur", "Wargal", "Shivampet", "Mirdoddi", "Markook", "Cheriyal", "Akkannapet", "Bejjanki", "Dharmaram",
  "Kathlapur", "Kamanpur", "Ellandakunta", "Mustabad", "Gollapally", "Chandurthi", "Boinpally", "Ganneruvaram", "Ramadugu", "Rudrangi",
  "Gambhiraopet", "Mallial", "Manthani", "Ramagundam", "Kagaznagar", "Sirpur", "Chennur", "Luxettipet", "Mancherial", "Bellampalli",
  
  // ===== ANDHRA PRADESH (150+ places) =====
  // Major Cities
  "Visakhapatnam", "Vijayawada", "Guntur", "Nellore", "Kurnool", "Rajahmundry", "Kakinada", "Tirupati", "Kadapa", "Anantapur",
  "Vizianagaram", "Eluru", "Ongole", "Nandyal", "Machilipatnam", "Adoni", "Tenali", "Proddatur", "Chittoor", "Hindupur",
  "Bhimavaram", "Madanapalle", "Guntakal", "Dharmavaram", "Gudivada", "Srikakulam", "Narasaraopet", "Tadipatri", "Tadepalligudem", "Amaravati",
  // Towns & Mandals
  "Amalapuram", "Kavali", "Chirala", "Chilakaluripet", "Mangalagiri", "Sattenapalle", "Repalle", "Bapatla", "Markapur", "Kandukur",
  "Gudur", "Sullurpeta", "Srikalahasti", "Nagari", "Puttur", "Palamaner", "Punganur", "Pileru", "Vayalpad", "Piler",
  "Rayachoti", "Rajampet", "Jammalamadugu", "Pulivendla", "Mydukur", "Badvel", "Porumamilla", "Duvvur", "Yemmiganur", "Mantralayam",
  "Alur", "Pattikonda", "Aspari", "Gooty", "Pamidi", "Uravakonda", "Rayadurg", "Kalyandurg", "Kadiri", "Penukonda",
  "Bukkarayasamudram", "Madakasira", "Lepakshi", "Puttaparthi", "Kothacheruvu", "Dhone", "Peapully", "Koilkuntla", "Nandikotkur", "Srisailam",
  "Atmakur", "Velgode", "Mahanandi", "Banaganapalle", "Owk", "Allagadda", "Panyam", "Kolimigundla", "Rudravaram", "Vinukonda",
  "Piduguralla", "Macherla", "Dachepalli", "Gurazala", "Karempudi", "Bollapalli", "Rentachintala", "Durgi", "Palasa", "Tekkali",
  // More Andhra Towns & Villages
  "Narasannapeta", "Sompeta", "Ichapuram", "Amadalavalasa", "Rajam", "Pathapatnam", "Hiramandalam", "Ponduru", "Ranastalam", "Gara",
  "Nellimarla", "Bhogapuram", "Bobbili", "Parvathipuram", "Salur", "Kurupam", "Cheepurupalli", "Gajapathinagaram", "Vizianagaram", "Kothavalasa",
  "Anakapalle", "Narsipatnam", "Yelamanchili", "Chodavaram", "Payakaraopeta", "S.Kota", "Madugula", "Chintapalle", "Araku", "Paderu",
  "Pendurthi", "Gajuwaka", "Gopalapatnam", "Seethammadhara", "Dwaraka Nagar", "MVP Colony", "Lawsons Bay", "Waltair", "Simhachalam", "Vizag Steel",
  "Tanuku", "Nidadavole", "Narasapuram", "Palacole", "Achanta", "Penugonda", "Jangareddygudem", "Chintalapudi", "Buttayagudem", "Kovvur",
  "Nidadavolu", "Gopalapuram", "Kalla", "Mandapeta", "Ramachandrapuram", "Mummidivaram", "Razole", "Atreyapuram", "Alamuru", "Kothapeta",
  "Pithapuram", "Gollaprolu", "Samalkot", "Pedapudi", "Annavaram", "Tuni", "Thondangi", "Kotananduru", "Yalamanchili", "Nakkapalli",
  "Yellamanchili", "Atchutapuram", "Rambilli", "Paravada", "Pudimadaka", "Sabbavaram", "Pendurthi", "Visakhapatnam Rural", "Bheemili", "Bheemunipatnam",
  "Srungavarapukota", "Chodavaram", "Butchiahpeta", "Ravikamatham", "Makavarapalem", "Nathavaram", "Rolugunta", "Kasimkota", "Anakapalli", "Yelamanchili",
  
  // ===== TAMIL NADU (50+ places) =====
  "Chennai", "Coimbatore", "Madurai", "Tiruchirappalli", "Salem", "Tirunelveli", "Tiruppur", "Erode", "Vellore", "Thoothukudi",
  "Dindigul", "Thanjavur", "Ranipet", "Sivakasi", "Karur", "Udhagamandalam", "Hosur", "Nagercoil", "Kanchipuram", "Kumarapalayam",
  "Karaikkudi", "Neyveli", "Cuddalore", "Kumbakonam", "Tiruvannamalai", "Pollachi", "Rajapalayam", "Gudiyatham", "Pudukkottai", "Vaniyambadi",
  "Ambur", "Nagapattinam", "Tambaram", "Avadi", "Tiruvottiyur", "Chromepet", "Pallavaram", "Velachery", "Porur", "Adyar",
  "T. Nagar", "Anna Nagar", "Mylapore", "Egmore", "Nungambakkam", "Kodambakkam", "Saidapet", "Guindy", "Ashok Nagar", "Thiruvanmiyur",
  
  // ===== MAHARASHTRA (50+ places) =====
  "Mumbai", "Pune", "Nagpur", "Thane", "Nashik", "Aurangabad", "Solapur", "Kolhapur", "Amravati", "Navi Mumbai",
  "Sangli", "Malegaon", "Jalgaon", "Akola", "Latur", "Dhule", "Ahmednagar", "Chandrapur", "Parbhani", "Ichalkaranji",
  "Jalna", "Ambarnath", "Bhusawal", "Panvel", "Badlapur", "Beed", "Gondia", "Satara", "Barshi", "Yavatmal",
  "Nanded", "Wardha", "Osmanabad", "Hingoli", "Washim", "Buldhana", "Gadchiroli", "Bhandara", "Ratnagiri", "Sindhudurg",
  "Alibaug", "Lonavala", "Khandala", "Mahabaleshwar", "Shirdi", "Pandharpur", "Wai", "Panchgani", "Matheran", "Karjat",
  
  // ===== KERALA (20+ places) =====
  "Kochi", "Thiruvananthapuram", "Kozhikode", "Thrissur", "Kollam", "Alappuzha", "Palakkad", "Malappuram", "Kannur", "Kottayam",
  "Kasaragod", "Pathanamthitta", "Idukki", "Wayanad", "Munnar", "Thekkady", "Alleppey", "Kumarakom", "Kovalam", "Varkala"
].sort();

export const DEFAULT_PROFILE = {
  firstName: "Bommena",
  lastName: "Hemanth",
  quote: "Looking for a Telugu Waifu\nto share memes & travel.",
  age: "28 Years",
  height: "5.8 ft",
  caste: "No Bar",
  raisedIn: "Bhadrachalam, Telangana",
  currentLocation: "Bentonville, AR",
  movedToUs: "May 2024",
  jobTitle: "Sr Manager - Supply Chain Analytics",
  company: "Walmart, Ex-McKinsey",
  educationDegree: "MSc Business Analytics, 2021",
  educationUni: "#34 QS Uni of Manchester (Ivy League Level), UK",
  languages: "Telugu, English, Bhaiya thoda pyaaz daalo",
  visaStatus: "H1B - i140 Started",
  photoBase64: "./images/mallorca.jpg",
  dadPhoto: "./images/father.jpg",
  momPhoto: "./images/mother.JPG",
  sisPhoto: "./images/potti.jpg",
  familyPhoto: null,
  galleryImages: null
};

export const SKILLS = [
  "SQL", "SAP IBP", "Python", "Tableau", "Power BI",
  "Demand Planning", "Inventory Planning", "Excel/VBA",
  "Alteryx", "AWS Sagemaker", "AnyLogistix", "Simul8",
  "Machine Learning", "GenAI Agents", "O9 IBP"
];

export const CERTIFICATIONS = [
  "SAP IBP for Supply Chain 2311",
  "O9 IBP - Functional Associate",
  "Professional Scrum Master I (PSM I)",
  "Various other certs on Analytics, Blockchain & Supply Chain"
];

export const TIMELINE_DATA = [
  {
    id: 1,
    date: "Jul 2025 - Present",
    role: "Sr Manager - Inventory Analytics",
    org: "Walmart",
    loc: "Bentonville, AR (On-site)",
    logo: "/marryme/images/logos/walmart.svg",
    domain: "walmart.com",
    tagline: "Selling Veggies and billion other products",
    responsibilities: [
      "Strategy & Analytics for Inventory Transformation",
      "Creating Chatbots and automation apps",
      "Enabling merchant decisions with data and delivering tools"
    ],
    facts: [
      "World's #1 company by revenue — $674 BILLION in FY2025",
      "If Walmart were a country, it would be the 23rd LARGEST ECONOMY on Earth",
      "Employs 2.1 MILLION associates — larger than the US Army, Navy & Air Force COMBINED",
      "270 MILLION customers visit weekly across 10,750+ stores in 19 countries",
      "Moves 100 BILLION items per year through its supply chain — more than any company in history"
    ]
  },
  {
    id: 2,
    date: "May 2024 - Jul 2025",
    role: "Sr Supply Chain Consultant",
    org: "McKinsey & Company",
    loc: "Dallas, TX (Remote)",
    logo: "/marryme/images/logos/mckinsey.svg",
    domain: "mckinsey.com",
    tagline: "Sold pretty ppts",
    responsibilities: [
      "ABC-XYZ Analysis using SAP IBP (+18% inventory turnover)",
      "Consensus demand forecasts (+15% accuracy)",
      "Multi-Echelon Inventory Planning ($850K savings)"
    ],
    facts: [
      "World's MOST prestigious consulting firm — 99 years of shaping global business",
      "Advises 90% of Fortune 100 companies + 80+ national governments",
      "In 2018, 800,000 applied for just 8,000 jobs — 1% acceptance rate (harder than Harvard!)",
      "$16 BILLION in annual revenue — larger than most countries' GDP",
      "Alumni run 150+ Fortune 500 companies as CEOs — the ultimate CEO factory"
    ]
  },
  {
    id: 3,
    date: "Dec 2021 - May 2023",
    role: "Sr Data Analyst - Merch & Supply Chain",
    org: "THG",
    loc: "Manchester, UK",
    logo: "/marryme/images/logos/thg.svg",
    domain: "thg.com",
    tagline: "Sold lipsticks and other make up stuff",
    responsibilities: [
      "JIT principles & SQL optimization (£300K savings)",
      "Demand Capacity Planning tool (£1.3M savings)",
      "Automated sales forecasting in Python (+£1M revenue)"
    ],
    facts: [
      "IPO valued at $6 BILLION in 2020 — the LARGEST London Stock Exchange IPO since 2013",
      "Owns 100+ brands including Lookfantastic, Myprotein, ESPA, Cult Beauty & Glossybox",
      "Ships to 195+ countries — literally almost EVERY country on the planet",
      "Acquired 30+ companies in 15 years — grew from £0 to £1.75B revenue",
      "THG Ingenuity platform powers e-commerce for Nike, Nestlé & P&G"
    ]
  },
  {
    id: 4,
    date: "Jul 2018 - Sep 2020",
    role: "Data Analyst - Supply Chain",
    org: "Tata Consultancy Services",
    loc: "Hyderabad, India",
    logo: "/marryme/images/logos/tcs.svg",
    domain: "tcs.com",
    tagline: "Sold my time",
    responsibilities: [
      "SQL & Excel for demand planning (+12% accuracy)",
      "ML models in AWS SageMaker (+10% revenue)",
      "Tableau dashboards (-7 days inventory on hand)"
    ],
    facts: [
      "India's MOST VALUABLE company — crossed $200 BILLION market cap in 2021",
      "600,000+ employees in 46 countries — 4th largest employer in all of India",
      "$31 BILLION revenue in FY2025 — larger than entire economies of 100+ countries",
      "First Indian IT company to hit $100 BILLION market cap (2018)",
      "Part of 156-year-old TATA Group — India's oldest & most respected conglomerate"
    ]
  },
  {
    id: 5,
    date: "Oct 2020 - Sep 2021",
    role: "MSc Analytics - Operations Research",
    org: "University of Manchester",
    loc: "Manchester, UK",
    logo: "/marryme/images/logos/manchester.svg",
    domain: "manchester.ac.uk",
    tagline: "I don't even know how a classroom looks like",
    responsibilities: [
      "Grade: 78% (Distinction)",
      "Skills: R · ML · Python · SQL · Power BI · Tableau · Simul8",
      "Entire course was online due to COVID"
    ],
    facts: [
      "QS World Ranking: #34 globally — Top 1% university worldwide",
      "📊 MSc Analytics: Ranked #4 in UK for Business Analytics & Data Science",
      "Birthplace of the MODERN COMPUTER — Alan Turing built the first stored-program computer here in 1948",
      "26 NOBEL PRIZE winners including Ernest Rutherford who split the atom",
      "40,000+ students from 160+ countries — UK's largest single-site university"
    ]
  },
  {
    id: 6,
    date: "Jul 2014 - May 2018",
    role: "Bachelor's - Mechanical Engineering",
    org: "Vellore Institute of Technology",
    loc: "Vellore, India",
    logo: "/marryme/images/logos/vit.svg",
    domain: "vit.ac.in",
    tagline: "Mech because papa forced me to",
    responsibilities: [
      "Grade: 8.15 CGPA",
      "Skills: Excel · Team Leadership · SolidWorks · MATLAB",
      "University Badminton Player & Health Club President"
    ],
    facts: [
      "India's #1 Private Engineering University — NIRF Ranking 2024",
      "50,000+ students from 65+ countries — largest private tech campus in India",
      "Alumni created PyTorch (Soumith Chintala) — powering Tesla, Meta & OpenAI's GPT",
      "2.5 LAKH+ applicants compete for 8,000 seats — 3% acceptance rate",
      "1,200+ companies recruit on campus — highest packages of ₹2+ Crore"
    ]
  },
];
export const TRANSLATIONS = {
  en: {
    title: "Vedic Horoscope",
    subtitle: "Jataka Chakra Analysis",
    tabs: ["Birth Chart", "Marriage", "Compatibility"],
    basicDetails: "Basic Details",
    birthChart: "Birth Chart",
    planets: "Planets",
    houses: "Houses",
    compatibility: "Compatibility",
    rashi: "Rashi",
    nakshatra: "Nakshatra",
    pada: "Pada",
    gothram: "Gothram",
    gan: "Gan",
    nadi: "Nadi",
    manglik: "Manglik",
    planet: "Planet",
    sign: "Sign",
    degree: "Degree",
    house: "House",
    nature: "Nature",
    navamsa: "Navamsa Chart",
    navamsaDesc: "The Navamsa (D9) chart reveals deeper aspects of marriage and spiritual growth. Venus exalted in Pisces indicates a harmonious and devoted partner.",
    chartTitle: "Rasi Chart",
    chartSubtitle: "South Indian Format",
    synastryTitle: "Ashtakoot Milan",
    synastrySubtitle: "Vedic Compatibility Analysis",
    partnerDetails: "Enter Partner Details",
    analyze: "Analyze Compatibility"
  },
  te: {
    title: "వేద జ్యోతిష్యం",
    subtitle: "జాతక చక్ర విశ్లేషణ",
    tabs: ["జాతక చక్రం", "వివాహం", "పొంతన"],
    basicDetails: "ప్రాథమిక వివరాలు",
    birthChart: "జాతక చక్రం",
    planets: "గ్రహాలు",
    houses: "భావాలు",
    compatibility: "పొంతన",
    rashi: "రాశి",
    nakshatra: "నక్షత్రం",
    pada: "పాద",
    gothram: "గోత్రం",
    gan: "గణ",
    nadi: "నాడి",
    manglik: "మాంగ్లిక్",
    planet: "గ్రహం",
    sign: "రాశి",
    degree: "డిగ్రీ",
    house: "భావం",
    nature: "స్వభావం",
    navamsa: "నవాంశ చక్రం",
    navamsaDesc: "నవాంశ (D9) చార్ట్ వివాహం మరియు ఆధ్యాత్మిక అభివృద్ధి యొక్క లోతైన అంశాలను వెల్లడిస్తుంది.",
    chartTitle: "రాశి చక్రం",
    chartSubtitle: "దక్షిణ భారత శైలి",
    synastryTitle: "అష్టకూట మిలన్",
    synastrySubtitle: "వేద పొంతన విశ్లేషణ",
    partnerDetails: "భాగస్వామి వివరాలు నమోదు చేయండి",
    analyze: "పొంతన విశ్లేషించండి"
  }
};

// Zodiac signs mapping for Rasi chart
export const ZODIAC_SIGNS = {
  en: {
    pisces: "Pisces", aries: "Aries", taurus: "Taurus", gemini: "Gemini",
    cancer: "Cancer", leo: "Leo", virgo: "Virgo", libra: "Libra",
    scorpio: "Scorpio", sagittarius: "Sagittarius", capricorn: "Capricorn", aquarius: "Aquarius"
  },
  te: {
    pisces: "మీనం", aries: "మేషం", taurus: "వృషభం", gemini: "మిథునం",
    cancer: "కర్కాటకం", leo: "సింహం", virgo: "కన్య", libra: "తుల",
    scorpio: "వృశ్చికం", sagittarius: "ధనస్సు", capricorn: "మకరం", aquarius: "కుంభం"
  }
};

// Planet names for chart
export const PLANET_NAMES = {
  en: {
    sun: "Sun", moon: "Moon", mars: "Mars", mercury: "Mercury",
    jupiter: "Jupiter", venus: "Venus", saturn: "Saturn", rahu: "Rahu", ketu: "Ketu",
    asc: "ASC", ex: "Ex", n: "N"
  },
  te: {
    sun: "సూర్య", moon: "చంద్ర", mars: "కుజ", mercury: "బుధ",
    jupiter: "గురు", venus: "శుక్ర", saturn: "శని", rahu: "రాహు", ketu: "కేతు",
    asc: "లగ్నం", ex: "ఉచ్చ", n: "నీచ"
  }
};

// Rasi chart data with positions
export const RASI_CHART_DATA = [
  { sign: "pisces", planets: ["venus", "ketu"], venusExalted: true },
  { sign: "aries", planets: ["sun"], sunExalted: true },
  { sign: "taurus", planets: ["mercury"] },
  { sign: "gemini", planets: [] },
  { sign: "aquarius", planets: ["saturn"] },
  { sign: "cancer", planets: ["asc", "moon"], isLagna: true },
  { sign: "capricorn", planets: ["jupiter"], jupiterDebilitated: true },
  { sign: "leo", planets: [] },
  { sign: "sagittarius", planets: [] },
  { sign: "scorpio", planets: [] },
  { sign: "libra", planets: [] },
  { sign: "virgo", planets: ["mars", "rahu"] }
];

// Chart key highlights for simple explanation
export const CHART_HIGHLIGHTS = {
  en: [
    { icon: "sun", title: "Sun in Aries (Exalted)", desc: "Strong leadership, ambition, career authority", color: "yellow" },
    { icon: "moon", title: "Moon in Cancer (Own Sign)", desc: "Emotional intelligence, intuition, nurturing nature", color: "blue" },
    { icon: "venus", title: "Venus in Pisces (Exalted)", desc: "Deeply romantic, idealistic, spiritual partner", color: "pink" },
    { icon: "jupiter", title: "Jupiter in Capricorn", desc: "Mature spouse potential, delayed but lasting marriage", color: "orange" },
    { icon: "saturn", title: "Saturn in Aquarius (Own Sign)", desc: "Transformation, long-term stability", color: "purple" },
    { icon: "mars", title: "Mars in Virgo", desc: "Analytical, hardworking, strategic approach", color: "red" }
  ],
  te: [
    { icon: "sun", title: "సూర్యుడు మేషంలో (ఉచ్చ)", desc: "బలమైన నాయకత్వం, ఆశయం, వృత్తి అధికారం", color: "yellow" },
    { icon: "moon", title: "చంద్రుడు కర్కాటకంలో (స్వగృహం)", desc: "భావోద్వేగ మేధస్సు, అంతర్దృష్టి, పోషక స్వభావం", color: "blue" },
    { icon: "venus", title: "శుక్రుడు మీనంలో (ఉచ్చ)", desc: "లోతైన ప్రేమ, ఆదర్శవాద, ఆధ్యాత్మిక భాగస్వామి", color: "pink" },
    { icon: "jupiter", title: "గురువు మకరంలో", desc: "పరిణత భాగస్వామి, ఆలస్యమైన కానీ శాశ్వత వివాహం", color: "orange" },
    { icon: "saturn", title: "శని కుంభంలో (స్వగృహం)", desc: "పరివర్తన, దీర్ఘకాలిక స్థిరత్వం", color: "purple" },
    { icon: "mars", title: "కుజుడు కన్యలో", desc: "విశ్లేషణాత్మక, కష్టపడే, వ్యూహాత్మక విధానం", color: "red" }
  ]
};


// ===== COMPLETE HOROSCOPE DATA =====
export const HOROSCOPE_PROFILE = {
  name: "Bommena Hemanth",
  dob: "** May 1997 (Ask Me 😉)",
  time: "04:05 AM",
  place: "V. Venkatayapalem, Khammam District, Telangana, India",
  rashi: "Karkataka (Cancer) ♋",
  nakshatra: "Pushyami",
  nakshatraPada: 3,
  nakshatraDeity: "Brihaspati (Guru)",
  nakshatraSymbol: "Udder of a cow (nourishment)",
  gotra: "Cherakunoolla",
  height: "173 cm (5'8\")",
  complexion: "Wheatish Brown",
  lagna: "Cancer (Karka Lagna)",
  lagnaElement: "Water",
  lagnaMode: "Cardinal",
  lagnaRuler: "Moon",
  moonPhase: "Waning Gibbous 🌖",
  lifePathNumber: 8,
  lifePathMeaning: "Ambitious, authoritative, managerial mindset"
};

export const ASTRO_DATA = {
  basicDetails: {
    rashi: "Karkataka (Cancer) ♋",
    nakshatra: "Pushyami (Pada 3)",
    gothram: "Cherakunoolla",
    gan: "Deva (Divine)",
    nadi: "Madhya (Middle)",
    manglik: "Mild (Neutralized by Venus)"
  },
  planets: [
    { name: "Sun ☀️", sign: "Aries", house: 10, degree: "28°", nature: "Exalted", effect: "Strong leadership, ambition, career authority" },
    { name: "Moon 🌙", sign: "Cancer ♋", house: 1, degree: "9°", nature: "Own Sign", effect: "Emotional intelligence, intuition, nurturing" },
    { name: "Mars ♂️", sign: "Virgo", house: 3, degree: "12°", nature: "Neutral", effect: "Analytical, hardworking, strategic, courageous" },
    { name: "Mercury ☿", sign: "Taurus", house: 11, degree: "4°", nature: "Benefic", effect: "Practical communication, business mindset" },
    { name: "Jupiter ♃", sign: "Capricorn ♑", house: 7, degree: "6°", nature: "Debilitated", effect: "Mature spouse, delayed but lasting marriage" },
    { name: "Venus ♀️", sign: "Pisces", house: 9, degree: "26°", nature: "Exalted ✨", effect: "Deeply romantic, idealistic, spiritual partner" },
    { name: "Saturn ♄", sign: "Aquarius ♒", house: 8, degree: "8°", nature: "Own Sign", effect: "Transformation, delays but long-term stability" },
    { name: "Rahu ☊", sign: "Virgo", house: 3, degree: "24°", nature: "Shadow", effect: "Ambition, communication skill, technical aptitude" },
    { name: "Ketu ☋", sign: "Pisces", house: 9, degree: "24°", nature: "Shadow", effect: "Spiritual, philosophical, past-life wisdom" }
  ],
  houses: [
    { id: 1, sign: "Cancer", theme: "Self & Personality", planet: "Moon (Own Sign)", meaning: "Emotional, intuitive, protective, family-centered" },
    { id: 2, sign: "Leo", theme: "Wealth & Family", planet: "Sun (Ruling)", meaning: "Family pride, financial stability through career" },
    { id: 3, sign: "Virgo", theme: "Siblings & Courage", planet: "Mars, Rahu", meaning: "Analytical courage, technical communication" },
    { id: 4, sign: "Libra", theme: "Mother & Home", planet: "Venus (Lord)", meaning: "Beautiful home, artistic taste, comfort" },
    { id: 5, sign: "Scorpio", theme: "Children & Creativity", planet: "Mars (Lord)", meaning: "Deep creativity, emotional intensity" },
    { id: 6, sign: "Sagittarius", theme: "Health & Service", planet: "Jupiter (Lord)", meaning: "Health awareness, philosophical approach" },
    { id: 7, sign: "Capricorn", theme: "Marriage & Partner", planet: "Jupiter, Saturn (Lord)", meaning: "Serious, stable, mature partner" },
    { id: 8, sign: "Aquarius", theme: "Transformation", planet: "Saturn (Own Sign)", meaning: "Hidden strength, longevity, depth" },
    { id: 9, sign: "Pisces", theme: "Fortune & Father", planet: "Venus (Exalted), Ketu", meaning: "Spiritual growth, luck through wisdom" },
    { id: 10, sign: "Aries", theme: "Career & Status", planet: "Sun (Exalted)", meaning: "Leadership, authority, public recognition" },
    { id: 11, sign: "Taurus", theme: "Gains & Friends", planet: "Mercury", meaning: "Stable income, practical networks" },
    { id: 12, sign: "Gemini", theme: "Spirituality & Losses", planet: "Mercury (Lord)", meaning: "Introspection, overseas connections" }
  ]
};

// ===== MARRIAGE INDICATORS =====
export const MARRIAGE_DATA = {
  summary: {
    title: "Marriage Indicators Summary",
    items: [
      { label: "7th House", value: "Capricorn (ruled by Saturn)", meaning: "Serious, stable, mature partner" },
      { label: "7th Lord", value: "Saturn in 8th House", meaning: "Delays marriage until 27-30; karmic depth" },
      { label: "Venus (Love)", value: "Exalted in Pisces ♓", meaning: "Loving, spiritual, emotionally fulfilling partner" },
      { label: "Jupiter (Karaka)", value: "In 7th House", meaning: "Marriage-oriented, but needs patience" },
      { label: "Manglik Status", value: "Mild (Mars in 3rd)", meaning: "Neutralized by exalted Venus" },
      { label: "Marriage Window", value: "2026 - 2028", meaning: "Venus Mahadasha → Jupiter Bhukti" }
    ]
  },
  partnerTraits: {
    title: "Expected Partner Traits",
    traits: [
      "Spiritual and calm nature",
      "Loyal and emotionally mature",
      "Well-educated, possibly abroad",
      "Artistic or creative interests",
      "Compassionate and nurturing",
      "Balanced and responsible"
    ]
  },
  compatibleSigns: {
    title: "Compatible Moon Signs",
    best: ["Pisces", "Taurus", "Virgo", "Scorpio"],
    avoid: ["Aries", "Leo", "Sagittarius"],
    reason: "Water/Earth signs match Cancer's emotional nature; Fire signs may be too intense"
  },
  navamsa: {
    title: "Navamsa (D9) Highlights",
    lagna: "Virgo",
    venus: "Pisces (Exalted again → double strength)",
    jupiter: "Taurus — pragmatic teacher spouse",
    moon: "Libra — emotionally balanced partner",
    interpretation: "Marriage enhances spiritual and emotional growth; spouse may be artistic or religiously inclined."
  },
  dashaTimeline: {
    title: "Vimshottari Dasha Timeline",
    periods: [
      { planet: "Ketu", period: "1997-2004", note: "Childhood karma" },
      { planet: "Venus ♀️", period: "2004-2024", note: "Love, relationships, creativity" },
      { planet: "Sun ☀️", period: "2024-2030", note: "Career peak, family foundation", highlight: true },
      { planet: "Moon 🌙", period: "2030-2040", note: "Emotional fulfillment, home" },
      { planet: "Mars ♂️", period: "2040-2047", note: "Passion, assertiveness" },
      { planet: "Rahu", period: "2047-2065", note: "Ambition, expansion" }
    ],
    marriageWindow: "Venus–Jupiter or Venus–Moon Bhukti: 2025–2028"
  },
  personality: {
    title: "Personality Profile",
    traits: [
      { domain: "Core Nature", keywords: "Emotional, protective, ambitious" },
      { domain: "Strengths", keywords: "Loyalty, empathy, determination" },
      { domain: "Weaknesses", keywords: "Over-sensitivity, occasional self-doubt" },
      { domain: "Career Themes", keywords: "Leadership, management, analytics" },
      { domain: "Marriage Energy", keywords: "Deeply emotional, spiritual, stable" },
      { domain: "Karma Lesson", keywords: "Balance practicality with emotional depth" }
    ]
  },
  gunaPoints: {
    title: "Guna Milan Score (For Partner Matching)",
    total: "34/36 — Excellent Match Potential",
    breakdown: [
      { koota: "Varna", max: 1, meaning: "Spiritual compatibility" },
      { koota: "Vashya", max: 2, meaning: "Mutual attraction" },
      { koota: "Tara", max: 3, meaning: "Health & destiny" },
      { koota: "Yoni", max: 4, meaning: "Physical compatibility" },
      { koota: "Graha Maitri", max: 5, meaning: "Mental harmony" },
      { koota: "Gana", max: 6, meaning: "Temperament match" },
      { koota: "Bhakoot", max: 7, meaning: "Emotional bond" },
      { koota: "Nadi", max: 8, meaning: "Health & progeny" }
    ]
  }
};

// ===== MARRIAGE DATA TRANSLATIONS =====
export const MARRIAGE_DATA_TE = {
  summary: {
    title: "వివాహ సూచికల సారాంశం",
    items: [
      { label: "7వ భావం", value: "మకరం (శని పాలన)", meaning: "సీరియస్, స్థిరమైన, పరిణతి చెందిన భాగస్వామి" },
      { label: "7వ అధిపతి", value: "శని 8వ భావంలో", meaning: "27-30 వరకు వివాహం ఆలస్యం; కార్మిక లోతు" },
      { label: "శుక్రుడు (ప్రేమ)", value: "మీనంలో ఉచ్చ స్థితి ♓", meaning: "ప్రేమగల, ఆధ్యాత్మిక, భావోద్వేగ భాగస్వామి" },
      { label: "గురు (కారక)", value: "7వ భావంలో", meaning: "వివాహ దృష్టి, కానీ ఓపిక అవసరం" },
      { label: "మాంగ్లిక్ స్థితి", value: "తేలిక (3వ భావంలో కుజ)", meaning: "ఉచ్చ శుక్రుడి ద్వారా తటస్థీకరణ" },
      { label: "వివాహ సమయం", value: "2026 - 2028", meaning: "శుక్ర మహాదశ → గురు భుక్తి" }
    ]
  },
  partnerTraits: {
    title: "ఆశించిన భాగస్వామి లక్షణాలు",
    traits: [
      "🧘 ఆధ్యాత్మిక మరియు ప్రశాంత స్వభావం",
      "💝 విశ్వసనీయ మరియు భావోద్వేగంగా పరిణతి చెందిన",
      "బాగా చదువుకున్న, విదేశీ అనుభవం",
      "🎨 కళాత్మక లేదా సృజనాత్మక ఆసక్తులు",
      "🌙 దయగల మరియు పోషించే స్వభావం",
      "⚖️ సమతుల్య మరియు బాధ్యతగల"
    ]
  },
  compatibleSigns: {
    title: "అనుకూల చంద్ర రాశులు",
    best: ["మీనం ♓", "వృషభం ♉", "కన్య ♍", "వృశ్చికం ♏"],
    avoid: ["మేషం ♈", "సింహం ♌", "ధనస్సు ♐"],
    reason: "జల/భూమి రాశులు కర్కాటక భావోద్వేగ స్వభావానికి సరిపోతాయి; అగ్ని రాశులు చాలా తీవ్రంగా ఉండవచ్చు"
  },
  navamsa: {
    title: "నవాంశ (D9) ముఖ్యాంశాలు",
    lagna: "కన్య",
    venus: "మీనం (మళ్ళీ ఉచ్చ → రెట్టింపు శక్తి)",
    jupiter: "వృషభం — వ్యావహారిక గురువు భాగస్వామి",
    moon: "తుల — భావోద్వేగంగా సమతుల్య భాగస్వామి",
    interpretation: "వివాహం ఆధ్యాత్మిక మరియు భావోద్వేగ వృద్ధిని పెంచుతుంది; భాగస్వామి కళాత్మక లేదా ధార్మికంగా ఆసక్తి కలిగి ఉండవచ్చు."
  },
  dashaTimeline: {
    title: "విమ్శోత్తరి దశా కాలక్రమం",
    periods: [
      { planet: "కేతు", period: "1997-2004", note: "బాల్య కర్మ" },
      { planet: "శుక్రుడు ♀️", period: "2004-2024", note: "ప్రేమ, సంబంధాలు, సృజనాత్మకత" },
      { planet: "సూర్యుడు ☀️", period: "2024-2030", note: "వృత్తి శిఖరం, కుటుంబ పునాది", highlight: true },
      { planet: "చంద్రుడు 🌙", period: "2030-2040", note: "భావోద్వేగ సంతృప్తి, గృహం" },
      { planet: "కుజుడు ♂️", period: "2040-2047", note: "అభిరుచి, దృఢత్వం" },
      { planet: "రాహు", period: "2047-2065", note: "ఆశయం, విస్తరణ" }
    ],
    marriageWindow: "శుక్ర-గురు లేదా శుక్ర-చంద్ర భుక్తి: 2025-2028"
  },
  personality: {
    title: "వ్యక్తిత్వ ప్రొఫైల్",
    traits: [
      { domain: "మూల స్వభావం", keywords: "భావోద్వేగ, రక్షణాత్మక, ఆశావాది" },
      { domain: "బలాలు", keywords: "విశ్వసనీయత, సానుభూతి, పట్టుదల" },
      { domain: "బలహీనతలు", keywords: "అధిక సున్నితత్వం, అప్పుడప్పుడు ఆత్మ సందేహం" },
      { domain: "వృత్తి థీమ్‌లు", keywords: "నాయకత్వం, నిర్వహణ, విశ్లేషణలు" },
      { domain: "వివాహ శక్తి", keywords: "లోతైన భావోద్వేగ, ఆధ్యాత్మిక, స్థిరమైన" },
      { domain: "కర్మ పాఠం", keywords: "వ్యావహారికత మరియు భావోద్వేగ లోతును సమతుల్యం చేయడం" }
    ]
  },
  birthDetails: "జన్మ వివరాలు",
  name: "పేరు",
  dob: "పుట్టిన తేదీ",
  time: "సమయం",
  place: "ప్రదేశం",
  rashiNakshatra: "రాశి / నక్షత్రం",
  gotra: "గోత్రం",
  lagna: "లగ్నం (ఆరోహణ)",
  moonPhase: "చంద్ర దశ",
  lifePathNumber: "జీవిత పథ సంఖ్య",
  bestMatch: "అత్యుత్తమ మ్యాచ్",
  avoid: "నివారించండి"
};

export const HOROSCOPE_PROFILE_TE = {
  name: "బొమ్మెన హేమంత్ కుమార్",
  dob: "13 మే 1997",
  time: "ఉదయం 04:05",
  place: "వి. వెంకటయ్యపాలెం, ఖమ్మం జిల్లా, తెలంగాణ, భారతదేశం",
  rashi: "కర్కాటకం (క్యాన్సర్) ♋",
  nakshatra: "పుష్యమి",
  gotra: "చేరకునూల్ల",
  lagna: "కర్కాటకం (కర్క లగ్నం)",
  moonPhase: "వాలుతున్న గిబ్బస్ 🌖",
  lifePathNumber: 8,
  lifePathMeaning: "ఆశావాది, అధికారయుత, నిర్వహణ మనస్తత్వం"
};

// ===== ASTRO DATA TELUGU =====
export const ASTRO_DATA_TE = {
  basicDetails: {
    rashi: "కర్కాటకం (క్యాన్సర్) ♋",
    nakshatra: "పుష్యమి (పాద 3)",
    gothram: "చేరకునూల్ల",
    gan: "దేవ (దివ్య)",
    nadi: "మధ్య (మిడిల్)",
    manglik: "తేలిక (శుక్రుడి ద్వారా తటస్థీకరణ)"
  },
  planets: [
    { name: "సూర్యుడు ☀️", sign: "మేషం ♈", house: 10, degree: "28°", nature: "ఉచ్చ", effect: "బలమైన నాయకత్వం, ఆశయం, వృత్తి అధికారం" },
    { name: "చంద్రుడు 🌙", sign: "కర్కాటకం ♋", house: 1, degree: "9°", nature: "స్వక్షేత్రం", effect: "భావోద్వేగ తెలివి, అంతర్ దృష్టి, పోషణ" },
    { name: "కుజుడు ♂️", sign: "కన్య ♍", house: 3, degree: "12°", nature: "తటస్థ", effect: "విశ్లేషణాత్మక, కష్టపడే, వ్యూహాత్మక, ధైర్యవంతుడు" },
    { name: "బుధుడు ☿", sign: "వృషభం ♉", house: 11, degree: "4°", nature: "శుభ", effect: "వ్యావహారిక సంభాషణ, వ్యాపార మనస్తత్వం" },
    { name: "గురుడు ♃", sign: "మకరం ♑", house: 7, degree: "6°", nature: "నీచ", effect: "పరిణత భాగస్వామి, ఆలస్యమైన కానీ స్థిరమైన వివాహం" },
    { name: "శుక్రుడు ♀️", sign: "మీనం ♓", house: 9, degree: "26°", nature: "ఉచ్చ ✨", effect: "లోతైన ప్రేమ, ఆదర్శవాది, ఆధ్యాత్మిక భాగస్వామి" },
    { name: "శని ♄", sign: "కుంభం ♒", house: 8, degree: "8°", nature: "స్వక్షేత్రం", effect: "పరివర్తన, ఆలస్యాలు కానీ దీర్ఘకాలిక స్థిరత్వం" },
    { name: "రాహు ☊", sign: "కన్య ♍", house: 3, degree: "24°", nature: "ఛాయ", effect: "ఆశయం, సంభాషణ నైపుణ్యం, సాంకేతిక సామర్థ్యం" },
    { name: "కేతు ☋", sign: "మీనం ♓", house: 9, degree: "24°", nature: "ఛాయ", effect: "ఆధ్యాత్మిక, తాత్విక, పూర్వజన్మ జ్ఞానం" }
  ]
};
