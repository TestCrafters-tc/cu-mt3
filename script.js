const questions = [
    
    {
        "id": 1,
        "text": "কোন সুত্র ব্যবহার করে হুইটস্টোন ব্রীজ নীতি প্রতিপাদন করা যায়? / Which formula is used to demonstrate the Wheatstone bridge principle?",
        "options": ["কুলম্বের সুত্র - Coulomb's law", "কির্শফের সুত্র - Kirchhoff's law", "ফ্যারাডের সুত্র - Faraday's law", "অ্যাম্পিয়ারের সুত্র - Ampere's law"],
        "correctAnswer": 1,
        "points": 1
    },
    {
        "id": 2,
        "text": "হাইড্রোজেন পরমানু বর্ণালীতে দিয়ে কোন সিরিজের লাইন দেখা যায় না? / Which series line is not observed in the hydrogen atom spectrum?",
        "options": ["থমসন সিরিজ - Thomson series", "প্যাশ্চেন সিরিজ - Paschen series", "ব্রাকেট সিরিজ - Brackett series", "ফুন্ড সিরিজ - Fund series"],
        "correctAnswer": 0,
        "points": 1
    },
    {
        "id": 3,
        "text": "অম্লীয় দ্রবণে H2S চালনা করলে কোনটির অধঃক্ষেপ পড়বে না? / Which ion will not precipitate when H2S is passed in acidic solution?",
        "options": ["Hg2+", "Cd2+", "Bi3+", "Fe3+"],
        "correctAnswer": 3,
        "points": 1
    },
    {
        "id": 4,
        "text": "কোনটি তড়িৎ বিশ্লেষ্য নয়? / Which is not an electrolyte?",
        "options": ["CH3COOH", "NH4Cl", "CCl4", "CaCl2"],
        "correctAnswer": 2,
        "points": 1
    },
    {
        "id": 5,
        "text": "ফুটন্ত অবস্থায় পানির PH কত? / What is the pH of boiling water?",
        "options": ["0", "7", "7 অপেক্ষা সামান্য কম - Slightly less than 7", "7 অপেক্ষা সামান্য বেশি - Slightly more than 7"],
        "correctAnswer": 2,
        "points": 1
    },
    {
        "id": 6,
        "text": "যে পদার্থ প্রোটন দান করতে পারে থাকে এসিড বলে - এটি অম্ল ক্ষারক সম্পর্কিত কোন তত্ব? / The substance which can donate a proton is called an acid - which theory of acid-base is related to this?",
        "options": ["আরহেনিয়াস তত্ত্ব - Arrhenius theory", "লাক্স-ফ্লাড তত্ত্ব - Lux-Flood theory", "লুইস তত্ত্ব - Lewis theory", "ব্রনস্টেড তত্ত্ব - Bronsted theory"],
        "correctAnswer": 3,
        "points": 1
    },
    {
        "id": 7,
        "text": "বায়ুমন্ডলে ওজন স্থর থাকে- / In which layer of the atmosphere is the ozone layer present?",
        "options": ["ট্রফোস্ফিয়ারে - Troposphere", "থার্মোস্ফিয়ারে - Thermosphere", "মেসোস্ফিয়ারে - Mesosphere", "স্ট্রাটোস্ফিয়ারে - Stratosphere"],
        "correctAnswer": 3,
        "points": 1
    },
    {
        "id": 8,
        "text": "কোন যৌগটি বেশি ক্ষারধর্মী? / Which compound is more alkaline?",
        "options": ["অ্যামোনিয়া - Ammonia", "প্রাইমারি এমিন - Primary amine", "সেকেন্ডারি এমিন - Secondary amine", "এনিলিন - Aniline"],
        "correctAnswer": 2,
        "points": 1
    },
    {
        "id": 9,
        "text": "গ্লিসারিন এর কার্যকরী মুলক হচ্ছে- / What is the functional group of glycerin?",
        "options": ["-OH", "-CHO", "-CO", "-COOH"],
        "correctAnswer": 0,
        "points": 1
    },
    {
        "id": 10,
        "text": "এসিটোন বিজারিত হয়ে কি উৎপন্ন করে? / What is produced by the distillation of acetone?",
        "options": ["প্রোপাইল এলকোহল - Propyl alcohol", "আইসোপ্রোপাইল এলকোহল - Isopropyl alcohol", "এরাইল এলকোহল - Aryl alcohol", "বিউটাইল এলকোহল - Butyl alcohol"],
        "correctAnswer": 1,
        "points": 1
    },
    {
        "id": 11,
        "text": "কোনটি আয়রন(II) Fe2+ আয়ন এর ইলেক্ট্রন বিন্যাস? / What is the electron configuration of Iron(II) Fe2+ ion?",
        "options": ["[Ar]3d54s1", "[Ar]3d6", "[Ar]3d54s2", "[Ar]3d64s2"],
        "correctAnswer": 1,
        "points": 1
    },
    {
        "id": 12,
        "text": "2C6H5CHO+NaOH→C6H5CH2OH+C6H5COONa - এ বিক্রিয়াটির নাম কি? / What is the name of the reaction 2C6H5CHO+NaOH→C6H5CH2OH+C6H5COONa?",
        "options": ["ক্যানিজারো বিক্রিয়া - Cannizzaro reaction", "হফম্যান বিক্রিয়া - Hofmann reaction", "অ্যালডল বিক্রিয়া - Aldol reaction", "উর্টজ বিক্রিয়া - Wurtz reaction"],
        "correctAnswer": 0,
        "points": 1
    },
    {
        "id": 13,
        "text": "সবচেয়ে বেশি তড়িৎ ধনাত্বক মৌল কৌনটি? / Which element has the highest electropositive character?",
        "options": ["Al", "K", "Mg", "Ca"],
        "correctAnswer": 1,
        "points": 1
    },
    {
        "id": 14,
        "text": "কোনটি জৈব যৌগ নয়? / Which is not an organic compound?",
        "options": ["CS2", "HCHO", "CaC2", "HCO2H"],
        "correctAnswer": 2,
        "points": 1
    },
    {
        "id": 15,
        "text": "কোনটি জারণ-বিজারণ বিক্রিয়া নয়? / Which is not a redox reaction?",
        "options": ["2Cu(NO3)2→2CuO+4NO2+O2", "2Na+Cl2→2NaCl", "Na2SO3+2HCl→2NaCl+SO2+H2O", "Mg+H2SO4→MgSO4+H2"],
        "correctAnswer": 2,
        "points": 1
    },
    {
        "id": 16,
        "text": "HCl - এর জলীয় দ্রবণে এক ঘন্টা যাবত 0.5 অ্যাম্পিয়ারে মাত্রার তড়িৎ প্রবাহিত করলে কত মোল H2 উৎপন্ন হবে? / If 0.5 amperes of current flows for one hour through an aqueous solution of HCl, how many moles of H2 will be produced?",
        "options": ["0.5 × 3600 / 2 × 96500", "0.5 × 396000 / 2 × 3600", "2 × 396000 / 0.5 × 3600", "96500 / 2 × 0.5 × 3600"],
        "correctAnswer": 0,
        "points": 1
    },
    {
        "id": 17,
        "text": "কোন যৌগটিতে হাইড্রোজেন বন্ধন নেই? / Which compound does not have hydrogen bonding?",
        "options": ["CH3-CH2-OH", "CH3-CHO", "H-COOH", "CH3-NH2"],
        "correctAnswer": 3,
        "points": 1
    },
    {
        "id": 18,
        "text": "এক ফোঁটা পানিতে বিদ্যামান মোট পরমানুর সংখ্যা কত? / What is the total number of atoms in one drop of water? [One drop of water has a volume of 0.05 cm³, density 1 g/cm³, molecular weight 18, and Avogadro's number is 6×10²³]",
        "options": ["3 × 0.05 / 18", "3.6 × 6 × 10²³ / 18", "0.005 × 6 × 10²³ / 18 × 3", "NONE"],
        "correctAnswer": 3,
        "points": 1
    },
    {
        "id": 19,
        "text": "98% বিশুদ্ধ H2SO4(আপেক্ষিক গুরত্ব=1.80 ; আনবিক ভর=98)-এর মোলারিটি কত? / What is the molarity of 98% pure H2SO4 (relative density=1.80; molecular weight=98)?",
        "options": ["9.8M", "0.98M", "1.0M", "18M"],
        "correctAnswer": 3,
        "points": 1
    },
    {
        "id": 20,
        "text": "কোন গ্যাসটি গ্রীন-হাউজ প্রভাবের জন্য দায়ী নয়? / Which gas is not responsible for the greenhouse effect?",
        "options": ["CFC gas", "Krypton gas", "CH4 gas", "CO2 gas"],
        "correctAnswer": 1,
        "points": 1
    },
    {
        "id": 21,
        "text": "নিচের কোনটিতে sp2 সংকরায়ন অনুপস্থিত? / Which of the following does not have sp2 hybridization?",
        "options": ["C6H6", "BF3", "গ্রাফাইট - Graphite", "ডায়মন্ড - Diamond"],
        "correctAnswer": 3,
        "points": 1
    },
    {
        "id": 22,
        "text": "নিচের কোন মৌলটি ভূ-স্তরে সবচেয়ে বেশি বিদ্যমান? / Which element is most abundant in the Earth's crust?",
        "options": ["অক্সিজেন - Oxygen", "আয়রন - Iron", "সিলিকন - Silicon", "অ্যালুমিনিয়াম - Aluminum"],
        "correctAnswer": 0,
        "points": 1
    },
    {
        "id": 23,
        "text": "নিন্মের কোনটি বিদ্যুৎ পরিবহন করে না? / Which of the following does not conduct electricity?",
        "options": ["কপার - Copper", "সমুদ্রের পানি - Sea water", "বেনজিন - Benzene", "ম্যাঙ্গানিজ - Manganese"],
        "correctAnswer": 2,
        "points": 1
    },
    {
        "id": 24,
        "text": "নিম্নের কোনটি মিশ্রণ নয়? / Which of the following is not a mixture?",
        "options": ["সমুদ্রের পানি - Seawater", "কাদামাটি - Clay", "বায়ু - Air", "প্রোপেন ১,২,৩- ট্রাইওল - Propene 1,2,3-triol"],
        "correctAnswer": 3,
        "points": 1
    },
    {
        "id": 25,
        "text": "Cr3+ আয়নে d ইলেকট্রিনের সংখ্য হলো- / Number of electrons in d orbital –",
        "options": ["2", "3", "4", "5"],
        "correctAnswer": 1,
        "points": 1
    },
    {
        "id": 26,
        "text": "কোন ভেক্টরটি A = 4î + 3ĵ এর উপর লম্ব? / Which vector is perpendicular to A = 4î + 3ĵ?",
        "options": ["3î + 4ĵ", "6î", "7k̂", "4î - 3ĵ"],
        "correctAnswer": 2,
        "points": 1
    },
    {
        "id": 27,
        "text": "কোয়ান্টাম তত্ত্ব আবিষ্কার করেন কোন বিজ্ঞানী? / Who discovered the quantum theory?",
        "options": ["টমাস ইয়ং (Thomas Young)", "আর্নেস্ট রাদারফোর্ড (Ernest Rutherford)", "ম্যাক্স প্লাঙ্ক (Max Planck)", "আলবার্ট আইনস্টাইন (Albert Einstein)"],
        "correctAnswer": 2,
        "points": 1
    },
    {
        "id": 28,
        "text": "টর্কের মাত্রা কোনটি? / Which is the dimension of torque?",
        "options": ["[ML²T⁻²]", "[MLT⁻²]", "[M²LT⁻²]", "[ML⁻²T²]"],
        "correctAnswer": 0,
        "points": 1
    },
    {
        "id": 29,
        "text": "এক কিলোওয়াট-আওয়ার(Kwh) সমান কত জুল? / How many joules are equivalent to 1 kilowatt-hour (KWh)?",
        "options": ["550 j", "746 j", "3.6×10⁶ j", "9.8 j"],
        "correctAnswer": 2,
        "points": 1
    },
    {
        "id": 30,
        "text": "একটি রাইফেলের গুলির বেগ যদি দ্বিগুণ করা হয় তাহলে এর গতিশক্তি কতগুন হবে? / If the velocity of a rifle bullet is doubled, by how much will its kinetic energy increase?",
        "options": ["2 গুন (2 times)", "8 গুন (8 times)", "4 গুন (4 times)", "16 গুন (16 times)"],
        "correctAnswer": 2,
        "points": 1
    },
    {
        "id": 31,
        "text": "একটি ভু-স্থির উপগ্রহের পর্যায়কাল কত? / What is the period of a geostationary satellite?",
        "options": ["0 hr", "24 hrs", "12 hrs", "365 days"],
        "correctAnswer": 1,
        "points": 1
    },
    {
        "id": 32,
        "text": "108 Nm⁻² পীড়নের প্রয়োগে 1m দীর্ঘ একটি তারের দৈর্ঘ্য 10⁻³m বৃদ্ধি পেল।তারটির ইয়ং এর গুনাঙ্ক কত? / If a force of 108 Nm⁻² is applied, and the length of a 1-meter-long wire increases by 10⁻³m, what is the Young’s modulus of the wire?",
        "options": ["10⁵ Nm⁻²", "10⁻¹¹ Nm⁻²", "10⁻⁵ Nm⁻²", "10¹¹ Nm⁻²"],
        "correctAnswer": 3,
        "points": 1
    },
    {
        "id": 33,
        "text": "একটি সেকেন্ড দোলকী দৈর্ঘ্য কত? / What is the length of a simple pendulum for 1 second?",
        "options": ["L = g/π²", "L = g²/π²", "L = π²/g", "L = π²g"],
        "correctAnswer": 0,
        "points": 1
    },
    {
        "id": 34,
        "text": "ধ্বংসাত্মক ব্যতিচারের জন্য পথ পার্থক্য কি হবে? / What will be the path difference for destructive interference?",
        "options": ["nλ", "nλ/2", "(2n + 1)λ/2", "(2n + 1)λ/2"],
        "correctAnswer": 2,
        "points": 1
    },
    {
        "id": 35,
        "text": "6650 Å তরঙ্গদৈর্ঘ্যের ফোটনের শক্তি কত? / What is the energy of a photon with a wavelength of 6650 Å?",
        "options": ["1.869 eV", "1.532 eV", "2.021 eV", "2.50 eV"],
        "correctAnswer": 0,
        "points": 1
    },
    {
        "id": 36,
        "text": "যদি 1 coulomb মানের দুটি আধান বাতাসে পরস্পরের সাথে 1 meter দূরত্ব রেখে অবস্থান করে, তবে তাদের মধ্যবর্তী বল কত? / If two charges of 1 coulomb each are placed 1 meter apart in air, what will be the force between them?",
        "options": ["2.2 N", "8.85×10¹² N", "1.6×10¹⁹ N", "9×10⁹ N"],
        "correctAnswer": 3,
        "points": 1
    },
    {
        "id": 37,
        "text": "400Ω এবং 800Ω এর দুটি রোধ একটি 6.0 volt ব্যাটারির সাথে শ্রেণিতে সংযুক্ত করা আছে।এ বর্তনীতে প্রবাহমাত্রা মাপার জন্য একটি 10Ω রোধের অ্যামিটার ব্যবহার করা হল। অ্যামিটারের পাঠ কত হবে? / Two resistors of 400Ω and 800Ω are connected in series with a 6.0 volt battery. An ammeter with 10Ω resistance is used to measure the current in the circuit. What will be the reading of the ammeter?",
        "options": ["4.96 mA", "5.96 mA", "2.60 mA", "1.92 mA"],
        "correctAnswer": 0,
        "points": 1
    },
    {
        "id": 38,
        "text": "দুটি মৌলকে আইসোটোন বলা হবে যদি তাদের পরমাণু সমূহের- / Two elements are called isotones if they have the same number of -",
        "options": ["একই সংখ্যক প্রোটন কিন্তু ভিন্ন ভর থাকে (Same number of protons but different mass)", "একই সংখ্যক নিউট্রন কিন্তু ভিন্ন ভর থাকে (Same number of neutrons but different mass)", "একই সংখ্যক ইলেক্ট্রন কিন্তু ভিন্ন ভর থাকে (Same number of electrons but different mass)", "একই পারমানবিক ভর থাকে (Same atomic mass)"],
        "correctAnswer": 1,
        "points": 1
    },
    {
        "id": 14,
        "text": "তেজস্ক্রিয়তা হল- / Radioactivity is -",
        "options": ["পরমানুর স্বতঃস্ফূর্ত ভাঙ্গন (Spontaneous decay of atoms)", "পরমানুর নিউক্লিয়াসের স্বতঃস্ফূর্ত ভাঙ্গন (Spontaneous decay of atomic nucleus)", "নিউক্লিয়াসস্থ প্রোটন সমূহের স্বতঃস্ফূর্ত ভাঙ্গন (Spontaneous decay of protons in the nucleus)", "নিউক্লিয়াসস্থ ইলেকট্রন সমূহের স্বতঃস্ফূর্ত ভাঙ্গন (Spontaneous decay of electrons in the nucleus)"],
        "correctAnswer": 1,
        "points": 1
    },
    {
        "id": 39,
        "text": "যদি কোন বাস্তব স্থির ভর mo এবং বস্তুটি V বেগে চলমান হলে তার ভর m হয়, তবে m হচ্ছে- / If an object with a real rest mass mo is moving with velocity V, its mass m is -",
        "options": ["mo/[1 - v²/c²]", "mo/[1 - c²]", "mo/c²", "mo/√[1 - v²/c²]"],
        "correctAnswer": 3,
        "points": 1
    },
    {
        "id": 40,
        "text": "একটি p-type সিলিকনের ক্ষেত্রে কোনটি সঠিক? / Which of the following is correct for a p-type silicon?",
        "options": ["ইলেকট্রনসমূহ সংখ্যাগরিষ্ঠ বাহক এবং ত্রিযোজী পরমাণুসমূহ ডোপ্যান্ট (Electrons are the majority carriers and trivalent atoms are the dopants)", "ইলেকট্রনসমূহ সংখ্যাগরিষ্ঠ বাহক এবং পঞ্চযোজী পরমাণুসমূহ ডোপ্যান্ট (Electrons are the majority carriers and pentavalent atoms are the dopants)", "হোলসমূহ সংখ্যাগরিষ্ঠ বাহক এবং পঞ্চযোজী পরমাণুসমূহ ডোপ্যান্ট (Holes are the majority carriers and pentavalent atoms are the dopants)", "হোলসমূহ সংখ্যাগরিষ্ঠ বাহক এবং ত্রিযোজী পরমাণুসমূহ ডোপ্যান্ট (Holes are the majority carriers and trivalent atoms are the dopants)"],
        "correctAnswer": 3,
        "points": 1
    },
    {
        "id": 41,
        "text": "কোন স্থির তরঙ্গের পরস্পর দুটি নিস্পন্দ বিন্দুর মধ্যবর্তী দুরত্ব 75 cm। এর তরঙ্গদৈর্ঘ্য কত? / In a standing wave, if the distance between two consecutive nodes is 75 cm, what is its wavelength?",
        "options": ["1.5 m", "0.375 m", "3.75 m", "0.75 m"],
        "correctAnswer": 0,
        "points": 1
    },
    {
        "id": 42,
        "text": "2m তরঙ্গদৈর্ঘ্যের একটি তরঙ্গের বেগ 300ms⁻¹ হলে এর কম্পাঙ্ক কত? / For a wave with a wavelength of 2m and speed 300 m/s, what is its frequency?",
        "options": ["300 Hz", "150 Hz", "600 Hz", "350 Hz"],
        "correctAnswer": 1,
        "points": 1
    },
    {
        "id": 43,
        "text": "দুটি উৎসের কম্পাঙ্ক যথাক্রমে f₁ ও f₂ এবং f₁ > f₂ হলে প্রতি সেকেন্ডে উৎপন্ন বিট সংখ্যা কত? / If two sources have frequencies f₁ and f₂ where f₁ > f₂, what is the number of beats produced per second?",
        "options": ["f₁f₂", "f₁/f₂", "f₁ + f₂", "f₁ - f₂"],
        "correctAnswer": 3,
        "points": 1
    },
    {
        "id": 44,
        "text": "বৈদ্যুতিক পাখা তৈরিতে কোন সূত্রটি ব্যবহার করা হয়েছে? / Which formula is used in the construction of an electric fan?",
        "options": ["বিয়োঁ-স্যাভার্টের সূত্র (Biot-Savart Law)", "গাউসের সূত্র (Gauss’s Law)", "ফ্যারাডের সূত্র (Faraday's Law)", "লরেঞ্জের সূত্র (Lorentz's Law)"],
        "correctAnswer": 2,
        "points": 1
    },
    {
        "id": 45,
        "text": "পৃথিবী পৃষ্ঠে একটি সেকেন্ড দোলকের কার্যকরী দৈর্ঘ্য কত? / What is the effective length of a simple pendulum at the Earth's surface?",
        "options": ["0.248 m", "9.81 m", "0.252 m", "0.994 m"],
        "correctAnswer": 3,
        "points": 1
    },
    {
        "id": 46,
        "text": "তাপমাত্রা বৃদ্ধি করলে অর্ধপরিবাহীর তড়িৎ পরিবাহিতা কি হবে? / What happens to the electrical conductivity of a semiconductor when the temperature increases?",
        "options": ["হাস পায় (Decreases)", "একই থাকে (Remains the same)", "বৃদ্ধি পায় (Increases)", "প্রথমে হ্রাস পায় পরে বৃদ্ধি পায় (Initially decreases, then increases)"],
        "correctAnswer": 2,
        "points": 1
    },
    {
        "id": 47,
        "text": "কোন তরঙ্গের বিস্তারের (a) সাথে তীব্রতার (I) সম্পর্ক কোন্‌টি? / What is the relationship between the amplitude (a) and the intensity (I) of a wave?",
        "options": ["I ∝ a²", "I ∝ 1/a", "I ∝ 1/a²", "I ∝ a"],
        "correctAnswer": 0,
        "points": 1
    },
    {
        "id": 48,
        "text": "ইয়ং এর গুণাঙ্কের মাত্রা সমীকরণ............। / The dimensional equation for Young's modulus is _______.",
        "options": ["[MLT⁻²]", "[ML⁻¹T⁻¹]", "[ML⁻1T²]", "[MLT⁻³]"],
        "correctAnswer": 2,
        "points": 1
    },
    {
        "id": 49,
        "text": "কোনটি সার্বজনীন লজিক গেইট? / Which one is a universal logic gate?",
        "options": ["NOT", "AND", "OR", "NAND"],
        "correctAnswer": 3,
        "points": 1
    },
    {
        "id": 50,
        "text": "স্নায়ুতন্ত্র কোন ভ্রূণীয় স্তর থেকে উৎপন্ন হয়? / From which embryonic layer is the nervous system derived?",
        "options": ["এন্ডোডার্ম (Endoderm)", "মেসোগ্লিয়া (Mesoglia)", "মেসোডার্ম (Mesoderm)", "এক্টোডার্ম (Ectoderm)"],
        "correctAnswer": 3,
        "points": 1
    },
    {
        "id": 51,
        "text": "কোন প্রাণীতে হিপনোটক্সিন পাওয়া যায়? / In which animal is hypnotoxin found?",
        "options": ["জেলি মাছ (Jellyfish)", "হাইড্রা (Hydra)", "জোঁক (Leech)", "কোবরা সাপ (Cobra Snake)"],
        "correctAnswer": 0,
        "points": 1
    },
    {
        "id": 52,
        "text": "নিম্ফ কোন প্রাণীর শিশু দশা? / The nymph is the juvenile stage of which animal?",
        "options": ["ঘাস ফড়িং (Grasshopper)", "মৌমাছি (Bee)", "সমুদ্র শশা (Sea Cucumber)", "ডেঙ্গু মশা (Dengue Mosquito)"],
        "correctAnswer": 0,
        "points": 1
    },
    {
        "id": 53,
        "text": "সালোকসংশ্লেষণে সূর্যালোকের কোন কণার ব্যবহৃত হয়? / Which particle of sunlight is used in photosynthesis?",
        "options": ["ইলেকট্রন (Electron)", "ফোটন (Photon)", "ইলেকট্রন ও প্রোটন (Electron and Proton)", "প্রোটন (Proton)"],
        "correctAnswer": 1,
        "points": 1
    },
    {
        "id": 54,
        "text": "ব্যাকটেরিওফাজ এক ধরনের- / Bacteriophage is a type of?",
        "options": ["ব্যাকটেরিয়া (Bacteria)", "ভাইরাস (Virus)", "ছত্রাক (Fungus)", "এককোষী উদ্ভিদ (Single-celled Plant)"],
        "correctAnswer": 1,
        "points": 1
    },
    {
        "id": 55,
        "text": "ক্যাপসিডের একক কোনটি? / What is the unit of a capsid?",
        "options": ["কনিডিয়া (Conidia)", "গ্যামিটোসাইট (Gametocyte)", "স্পোরোজয়েট (Sporozoite)", "ক্যাপসোমিয়ার (Capsomere)"],
        "correctAnswer": 3,
        "points": 1
    },
    {
        "id": 56,
        "text": "দ্বিপদ নামকরণ পদ্ধতি প্রবর্তন করেন কে? / Who introduced the binomial nomenclature system?",
        "options": ["থিওফ্রাস্টাস (Theophrastus)", "বেনথাম হুকার (Bentham Hooker)", "লিনিয়াস (Linnaeus)", "ল্যামার্ক (Lamarck)"],
        "correctAnswer": 2,
        "points": 1
    },
    {
        "id": 57,
        "text": "ইক্ষু কোন গোত্রের উদ্ভিদ? / Sugarcane belongs to which family?",
        "options": ["Poaceae", "Lamiaceae", "Orchidaceae", "Asteraceae"],
        "correctAnswer": 0,
        "points": 1
    },
    {
        "id": 58,
        "text": "কোনটি কোষীয় বর্জ্য পদার্থ? / Which of these is a cellular waste product?",
        "options": ["শর্করা (Carbohydrates)", "নেকটার (Nectar)", "পিগমেন্ট (Pigment)", "অ্যালকালয়েড (Alkaloids)"],
        "correctAnswer": 3,
        "points": 1
    },
    {
        "id": 59,
        "text": "কোষ বিভাজনের কোন পর্যায়ে ক্রোমোজোম গুলো বিষুবীয় অঞ্চলে বিন্যস্ত থাকে? / In which stage of cell division are chromosomes arranged along the equatorial plane?",
        "options": ["প্রোফেজ (Prophase)", "মেটাফেজ (Metaphase)", "অ্যানাফেজ (Anaphase)", "টেলোফেজ (Telophase)"],
        "correctAnswer": 1,
        "points": 1
    },
    {
        "id": 60,
        "text": "ডেঙ্গু ভাইরাস- / The dengue virus is a:",
        "options": ["TIV", "DNA virus", "RNA virus", "T2 virus"],
        "correctAnswer": 2,
        "points": 1
    },
    {
        "id": 61,
        "text": "Annelida এর রেচন অঙ্গ কোনটি? / What is the excretory organ of Annelida?",
        "options": ["কক্সাল গ্রন্থি (Coxal Gland)", "অ্যান্টেনাল গ্রন্থি (Antenal Gland)", "মালপিজিয়ান নালিকা (Malpighian Tubule)", "নেফ্রিডিয়া (Nephridia)"],
        "correctAnswer": 3,
        "points": 1
    },
    {
        "id": 62,
        "text": "হুইল অঙ্গবাহী প্রাণী কোনটি? / Which of these is a wheel-organ bearing animal?",
        "options": ["Lungfish", "Ascaris", "Branchiostom", "Bat"],
        "correctAnswer": 2,
        "points": 1
    },
    {
        "id": 63,
        "text": "কোনটি মাছ নয়? / Which of these is not a fish?",
        "options": ["তিমি (Whale)", "হাঙ্গর (Shark)", "কুচিয়া (Eel)", "কাতলা (Catla)"],
        "correctAnswer": 0,
        "points": 1
    },
    {
        "id": 64,
        "text": "DNA পলিমারেজের কাজ কোনটি? / What is the function of DNA polymerase?",
        "options": ["RNA থেকে DNA সংশ্লেষণ (Synthesis of DNA from RNA)", "DNA থেকে DNA সংশ্লেষণ (Synthesis of DNA from DNA)", "DNA থেকে RNA সংশ্লেষণ (Synthesis of RNA from DNA)", "RNA থেকে RNA সংশ্লেষণ (Synthesis of RNA from RNA)"],
        "correctAnswer": 1,
        "points": 1
    },
    {
        "id": 65,
        "text": "কোথায় গ্লাইকোলাইসিস সংঘটিত হয়? / Where does glycolysis occur?",
        "options": ["সাইটোপ্লাজমে (Cytoplasm)", "সেল মেমব্রেনে (Cell Membrane)", "নিউক্লিয়াসে (Nucleus)", "ক্লোরোপ্লাস্টে (Chloroplast)"],
        "correctAnswer": 0,
        "points": 1
    },
    {
        "id": 66,
        "text": "ভিলাইয়ের রক্ত জালিকায় কী শোষিত হয়? / What is absorbed in the blood capillaries of the villi?",
        "options": ["পানি (Water)", "লবণ (Salt)", "গ্লুকোজ (Glucose)", "সবগুলো (All of the above)"],
        "correctAnswer": 3,
        "points": 1
    },
    {
        "id": 67,
        "text": "সিফিলিস জীবাণুর গণ কোনটি? / What is the genus of the syphilis bacteria?",
        "options": ["Treponema", "Neisseria", "Plasmodium", "Vibrio"],
        "correctAnswer": 0,
        "points": 1
    },
    {
        "id": 68,
        "text": "প্রতিটি এন্টিবডি হল- / Each antibody is a:",
        "options": ["ইমিউনোগ্লোবিউলিন (Immunoglobulin)", "ভ্যাক্সিন (Vaccine)", "এন্টিবায়োটিক (Antibiotic)", "কেমোটোক্সিন (Chemotoxin)"],
        "correctAnswer": 0,
        "points": 1
    },
    {
        "id": 69,
        "text": "কোনটি In situ conservation এর এলাকা নহে? / Which is not an in situ conservation area?",
        "options": ["অভয়ারণ্য (Sanctuary)", "জাতীয় উদ্যান (National Park)", "জিন ব্যাঙ্ক (Gene Bank)", "সাফারি পার্ক (Safari Park)"],
        "correctAnswer": 2,
        "points": 1
    },
    {
        "id": 70,
        "text": "কোনটি বিলুপ্তপ্রায় উদ্ভিদ? / Which is an endangered plant?",
        "options": ["Brassica napus", "Euphorba hirta", "Pisum sativum", "Corypha taliera"],
        "correctAnswer": 3,
        "points": 1
    },
    {
        "id": 71,
        "text": "কোনটিকে \"রামসার সাইট\" ঘোষণা করা হয়েছে? / Which of these has been declared a Ramsar site?",
        "options": ["চলনবিল (Cholonbil)", "বাংলার হাওড় (Bengal's Haor)", "কক্সবাজার সৈকত (Cox's Bazar Beach)", "টাংগুয়ার হাওড় (Tanguar Haor)"],
        "correctAnswer": 3,
        "points": 1
    },
    {
        "id": 72,
        "text": "ইমাস্কুলেশনে কী অপসারণ করা হয়? / What is removed in emasculation?",
        "options": ["দলমন্ডল (Androecium)", "স্ত্রীস্তবক (Gynoecium)", "পুংস্তবক (Stamen)", "মঞ্জুরীপত্র (Ovule)"],
        "correctAnswer": 2,
        "points": 1
    },
    {
        "id": 73,
        "text": "মানবদেহের কোন স্থানে হেনলির লুপ অবস্থিত? / Where is the loop of Henle located in the human body?",
        "options": ["হৃৎপিন্ড (Heart)", "ফুসফুস (Lungs)", "কিডনী (Kidney)", "যকৃত (Liver)"],
        "correctAnswer": 2,
        "points": 1
    },
    {
        "id": 74,
        "text": "কোনটি প্রভু গ্রন্থি নামে পরিচিত? / Which gland is known as the master gland?",
        "options": ["থাইমাস (Thymus)", "থাইরয়েড (Thyroid)", "পিটুইটারি (Pituitary)", "পিনিয়াল (Pineal)"],
        "correctAnswer": 2,
        "points": 1
    },
    {
        "id": 75,
        "text": "The whole incident did not last long, but _____. a. it happened only yesterday b. it felt like eternity c. it was forgotten quickly d. it took just a few seconds.",
        "options": ["it happened only yesterday", "it felt like eternity", "it was forgotten quickly", "it took just a few seconds"],
        "correctAnswer": 1,
        "points": 1
    },
    {
        "id": 76,
        "text": "Psychologists conclude that our childhood experiences often have a strong influence on the way we _____ the world later in life. a. perceive b. anticipate c. appropriate d. portend",
        "options": ["perceive", "anticipate", "appropriate", "portend"],
        "correctAnswer": 0,
        "points": 1
    },
    {
        "id": 77,
        "text": "Andrew Kishore was raised in a _____ Christian family of Bangladesh. a. reliable b. overwhelmingly c. devout d. stalwart",
        "options": ["reliable", "overwhelmingly", "devout", "stalwart"],
        "correctAnswer": 2,
        "points": 1
    },
    {
        "id": 78,
        "text": "An antonym of the word 'honour' is _____. a. empathy b. stigma c. prejudice d. dogma",
        "options": ["empathy", "stigma", "prejudice", "dogma"],
        "correctAnswer": 2,
        "points": 1
    },
    {
        "id": 79,
        "text": "An antonym of 'artless' is _____. a. guileless b. gullible c. cunning d. unassuming",
        "options": ["guileless", "gullible", "cunning", "unassuming"],
        "correctAnswer": 2,
        "points": 1
    },
    {
        "id": 80,
        "text": "We kept in touch with the authorities, _____ some of the street lights were broken in our neighborhood. a. therefore b. for c. in case of d. because of",
        "options": ["therefore", "for", "in case of", "because of"],
        "correctAnswer": 1,
        "points": 1
    },
    {
        "id": 81,
        "text": "The author seems to _____ invite us to empathize with the tragic characters of his book. a. connive b. commiserate c. ridicule d. contemplate",
        "options": ["connive", "commiserate", "ridicule", "contemplate"],
        "correctAnswer": 2,
        "points": 1
    },
    {
        "id": 82,
        "text": "Most scientists find a chasm between theory and practice'. A synonym of the word 'chasm' is _____. a. fissure b. density c. expertise d. chivalry",
        "options": ["fissure", "density", "expertise", "chivalry"],
        "correctAnswer": 0,
        "points": 1
    },
    {
        "id": 83,
        "text": "Recent data from the World Health Organisation (WHO) shows that COVID infections did not spare _____. a. nobody b. everybody c. anybody d. somebody",
        "options": ["nobody", "everybody", "anybody", "somebody"],
        "correctAnswer": 2,
        "points": 1
    },
    {
        "id": 84,
        "text": "_____ you like a cup of tea? a. Should b. Shall c. Would d. Could",
        "options": ["Should", "Shall", "Would", "Could"],
        "correctAnswer": 2,
        "points": 1
    },
    {
        "id": 85,
        "text": "Travelling alone at night is not a _____ option. a. versatile b. veritable c. viable d. verifiable",
        "options": ["versatile", "veritable", "viable", "verifiable"],
        "correctAnswer": 2,
        "points": 1
    },
    {
        "id": 86,
        "text": "People who are usually ill-tempered are _____. a. perhaps unhappy in life b. quite impudent c. guilty of crimes d. very self-centered",
        "options": ["perhaps unhappy in life", "quite impudent", "guilty of crimes", "very self-centered"],
        "correctAnswer": 0,
        "points": 1
    },
    {
        "id": 87,
        "text": "The economic recession means that some of our employees _____ redundant in the coming years. a. are being made b. should be making c. may be made d. would be making",
        "options": ["are being made", "should be making", "may be made", "would be making"],
        "correctAnswer": 2,
        "points": 1
    },
    {
        "id": 88,
        "text": "The mechanic said the refrigerator would be expensive to repair and recommended buying a new one _____. a. instead b. however c. though d. despite",
        "options": ["instead", "however", "though", "despite"],
        "correctAnswer": 0,
        "points": 1
    },
    {
        "id": 89,
        "text": "They preferred to live underground so that the land could _____ them from the scorching heat of the sun and external noise. a. levitate b. insulate c. divulge d. connive",
        "options": ["levitate", "insulate", "divulge", "connive"],
        "correctAnswer": 1,
        "points": 1
    },
    {
        "id": 90,
        "text": "She has been principal of the school _____ the last five years. a. during b. for c. to d. since",
        "options": ["during", "for", "to", "since"],
        "correctAnswer": 1,
        "points": 1
    },
    {
        "id": 91,
        "text": "‘কেতাদুরস্ত’ বাগধারাটির অর্থ—",
        "options": ["পরিপাটি", "ভণ্ড", "বেহায়া", "তোষামুদে"],
        "correctAnswer": 0,
        "points": 1
    },
    {
        "id": 92,
        "text": "‘নেই আঁকড়া’ বাগধারাটি দিয়ে বোঝায় -",
        "options": ["নিতান্ত দরিদ্র", "মূর্খ", "একগুঁয়ে স্বভাবের", "অপব্যয়ী"],
        "correctAnswer": 2,
        "points": 1
    },
    {
        "id": 93,
        "text": "নিচের কোন বাক্যটি অশুদ্ধ?",
        "options": ["মৃত্যুতে তিনি যে হাঁফ ছাড়িলেন সেই তাঁর প্রথম অবকাশ ।", "ভরা নদী ক্ষুরধার খরপরশা ।", "পথে প্রান্তরে ছোটায় বহু তুফান ।", "কর্ণিত জমির প্রতিটি শস্যদানা কবিতা ।"],
        "correctAnswer": 1,
        "points": 1
    },
    {
        "id": 94,
        "text": "‘শাক্ + ভাত’ -এর সঠিক সন্ধিজাত শব্দ হলো-",
        "options": ["শাকভাত", "শাগভাত", "শাক্ভাত", "শাগ্ভাত"],
        "correctAnswer": 1,
        "points": 1
    },
    {
        "id": 95,
        "text": "নিচের কোনটি তৎপুরুষ সমাসের উদাহরণ নয়?",
        "options": ["ভূতপূর্ব", "খেচর", "বিঘ্নহন্তা", "থরেবিথরে"],
        "correctAnswer": 3,
        "points": 1
    },
    {
        "id": 96,
        "text": "“আশা করি আমাকে দেখিয়া তিনি খুশি হইয়াছিলেন। বোঝা শক্ত, কেননা তিনি বড় চুপচাপ” । —উক্তিটি কোন গল্প থেকে নেয়া?",
        "options": ["মাসি-পিসি", "আমার পথ", "অপরিচিতা", "বিলাসী"],
        "correctAnswer": 2,
        "points": 1
    },
    {
        "id": 97,
        "text": "নিচের কোনটি কাজী নজরুল ইসলামের রচিত উপন্যাস?",
        "options": ["রাজবন্দীর জবানবন্দী", "মৃত্যু-ক্ষুধা", "যুগ-বাণী", "কুহেলিকা"],
        "correctAnswer": 1,
        "points": 1
    },
    {
        "id": 98,
        "text": "নিচের কোনটি বহুব্রীহি সমাস নয়?",
        "options": ["অনাসক্ত", "তেপায়া", "অল্পপ্রাণ", "চৌরাস্তা"],
        "correctAnswer": 3,
        "points": 1
    },
    {
        "id": 99,
        "text": "রবীন্দ্রনাথ ঠাকুর রচিত মোট ছোট গল্পের সংখ্যা কয়টি?",
        "options": ["৭৮", "৯৫", "৯০", "১০০"],
        "correctAnswer": 1,
        "points": 1
    },
    {
        "id": 100,
        "text": "নিচের কোনটি ব্যধিকরণ বহুব্রীহি সমাসের উদাহরণ?",
        "options": ["যুবজানি", "পাপমতি", "একচোখা", "সবগুলো"],
        "correctAnswer": 2,
        "points": 1
    },
    


];

let answers = {};
let timeLeft = 60 * 60; // 60 minutes
let examSubmitted = false;
let timer;

function initExam() {
    renderQuestions();
    startTimer();
    addAnimations();
}

function renderQuestions() {
    const container = document.getElementById('questions-container');
    if (!container) return; // Ensure the container exists

    container.innerHTML = questions.map(question => `
        <div class="question-card">
            <div class="question-header">
                <span class="question-number">Question ${question.id}</span>
                <span class="points-badge">${question.points} points</span>
            </div>
            <div class="question-text">${question.text}</div>
            <div class="options">
                ${question.options.map((option, index) => `
                    <div class="option" data-question="${question.id}" data-option="${index}" onclick="selectOption(${question.id}, ${index})">
                        <span class="option-letter">${String.fromCharCode(65 + index)}</span>
                        <span>${option}</span>
                    </div>
                `).join('')}
            </div>
        </div>
    `).join('');
}

function selectOption(questionId, optionIndex) {
    if (examSubmitted) return;

    const previousAnswer = answers[questionId];
    answers[questionId] = optionIndex;

    // Update UI with animation
    document.querySelectorAll(`[data-question="${questionId}"]`).forEach(option => {
        option.classList.remove('selected');
    });

    const selectedOption = document.querySelector(`[data-question="${questionId}"][data-option="${optionIndex}"]`);
    selectedOption.classList.add('selected');

    // Add subtle animation
    selectedOption.style.transform = 'scale(1.02)';
    setTimeout(() => {
        selectedOption.style.transform = 'scale(1)';
    }, 200);

    // Update attempted count with animation
    const attemptedCount = document.getElementById('attempted-count');
    attemptedCount.style.transform = 'scale(1.2)';
    attemptedCount.textContent = Object.keys(answers).length;
    setTimeout(() => {
        attemptedCount.style.transform = 'scale(1)';
    }, 200);
}

function startTimer() {
    timer = setInterval(() => {
        timeLeft--;
        updateTimerDisplay();

        if (timeLeft <= 0) {
            submitExam();
        }
    }, 1000);
}

function updateTimerDisplay() {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    const timeDisplay = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    document.getElementById('time-left').textContent = timeDisplay;

    // Add warning color when time is running out
    const statusPills = document.querySelectorAll('.status-pill');
    if (timeLeft < 300) { // Less than 5 minutes
        statusPills.forEach(pill => {
            pill.style.background = 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)';
        });
    }
}

function calculateScore() {
    let score = 0;
    let correctAnswers = 0;
    let wrongAnswers = 0;

    questions.forEach(question => {
        if (answers[question.id] === question.correctAnswer) {
            score += question.points;
            correctAnswers++;
        } else if (answers[question.id] !== undefined) {
            score -= 0.25; // Negative marking
            wrongAnswers++;
        }
    });

    return {
        score: score.toFixed(2),
        totalQuestions: questions.length,
        correctAnswers,
        wrongAnswers,
        unattempted: questions.length - (correctAnswers + wrongAnswers)
    };
}

function submitExam() {
    clearInterval(timer);
    examSubmitted = true;
    const results = calculateScore();

    // Show results with animation
    const container = document.getElementById('questions-container');
    container.style.opacity = '0';

    setTimeout(() => {
        container.innerHTML = `
            <div class="result-card">
                <h2><i class="fas fa-award"></i> Exam Results</h2>
                <div class="stats-grid">
                    <div class="stat-box">
                        <p>Final Score</p>
                        <h3>${results.score}</h3>
                    </div>
                    <div class="stat-box">
                        <p>Time Taken</p>
                        <h3>${formatTime(3600 - timeLeft)}</h3>
                    </div>
                </div>
                <div class="stats-grid">
                    <div class="stat-box">
                        <p><i class="fas fa-check-circle"></i> Correct Answers</p>
                        <h3 style="color: #059669">${results.correctAnswers}</h3>
                    </div>
                    <div class="stat-box">
                        <p><i class="fas fa-times-circle"></i> Wrong Answers</p>
                        <h3 style="color: #dc2626">${results.wrongAnswers}</h3>
                    </div>
                    <div class="stat-box">
                        <p><i class="fas fa-minus-circle"></i> Unattempted</p>
                        <h3 style="color: #6b7280">${results.unattempted}</h3>
                    </div>
                    <div class="stat-box">
                        <p><i class="fas fa-percentage"></i> Accuracy</p>
                        <h3 style="color: #0891b2">${calculateAccuracy(results)}%</h3>
                    </div>
                </div>
                <div class="answer-review">
                    <h3><i class="fas fa-list"></i> Answer Review</h3>
                    ${generateAnswerReview()}
                </div>
            </div>
        `;
        container.style.opacity = '1';
    }, 500);

    // Hide submit button with animation
    const submitBtn = document.getElementById('submit-btn');
    submitBtn.style.transform = 'scale(0.8)';
    submitBtn.style.opacity = '0';
    setTimeout(() => {
        submitBtn.style.display = 'none';
    }, 300);
}

function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
}

function calculateAccuracy(results) {
    if (results.correctAnswers + results.wrongAnswers === 0) return 0;
    return Math.round((results.correctAnswers / (results.correctAnswers + results.wrongAnswers)) * 100);
}

function generateAnswerReview() {
    return questions.map(question => `
        <div class="question-card ${answers[question.id] === question.correctAnswer ? 'correct' : 'incorrect'}">
            <div class="question-header">
                <span class="question-number">Question ${question.id}</span>
                <span class="result-icon">
                    ${answers[question.id] === question.correctAnswer 
                        ? '<i class="fas fa-check-circle" style="color: #059669"></i>' 
                        : '<i class="fas fa-times-circle" style="color: #dc2626"></i>'}
                </span>
            </div>
            <div class="question-text">${question.text}</div>
            <div class="options">
                ${question.options.map((option, index) => `
                    <div class="option ${
                        index === question.correctAnswer ? 'correct' : 
                        index === answers[question.id] ? 'incorrect' : ''
                    }">
                        <span class="option-letter">${String.fromCharCode(65 + index)}</span>
                        <span>${option}</span>
                        ${index === question.correctAnswer 
                            ? '<i class="fas fa-check" style="color: #059669"></i>' 
                            : index === answers[question.id] 
                                ? '<i class="fas fa-times" style="color: #dc2626"></i>' 
                                : ''}
                    </div>
                `).join('')}
            </div>
        </div>
    `).join('');
}

function addAnimations() {
    // Add hover animations to options
    document.querySelectorAll('.option').forEach(option => {
        option.addEventListener('mouseenter', () => {
            if (!examSubmitted && !option.classList.contains('selected')) {
                option.style.transform = 'translateX(5px)';
            }
        });
        option.addEventListener('mouseleave', () => {
            if (!examSubmitted && !option.classList.contains('selected')) {
                option.style.transform = 'translateX(0)';
            }
        });
    });
}

// Add event listener for submit button
document.getElementById('submit-btn').addEventListener('click', () => {
    if (confirm('Are you sure you want to submit the exam?')) {
        submitExam();
    }
});

// Initialize exam when page loads
document.addEventListener('DOMContentLoaded', initExam);