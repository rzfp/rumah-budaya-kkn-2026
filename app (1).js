/* ==========================================================================
   RUMAH BUDAYA WATULIMO - MAIN APPLICATION SCRIPT
   ========================================================================== */

// 1. TRANSLATION DICTIONARIES (EN, ID, JV)
const translations = {
  en: {
    nav: {
      about: "About",
      history: "History",
      structure: "Structure",
      units: "Cultural Units",
      events: "Events",
      gallery: "Gallery",
      contact: "Contact"
    },
    hero: {
      tagline: "NURTURING TRADITION, INSPIRING GENERATIONS",
      title: "Rumah Budaya Watulimo",
      description: "Rumah Budaya Watulimo is the epicenter of preservation and development of arts and culture in Watulimo Village, Trenggalek. It is a home for dance, puppetry, gamelan music, campursari, modeling, and Javanese language training.",
      btnExplore: "Explore Culture",
      btnEvents: "View Events",
      btnDoc: "Documentation"
    },
    about: {
      badge: "LIVING CULTURE EXPERIENCE",
      title: "Arts & Traditions Movement of Watulimo",
      desc: "Rumah Budaya Watulimo was founded as the epicenter for preserving the coastal arts of Trenggalek. We believe that tradition is not a static object in a display window, but a living pulse that evolves with the times."
    },
    history: {
      villageTitle: "History of Watulimo Village",
      centerTitle: "History of Rumah Budaya Watulimo"
    },
    structure: {
      title: "Organizational Structure"
    },
    profiles: {
      title: "Board & Management Profiles"
    },
    units: {
      title: "Cultural Units"
    },
    events: {
      title: "Schedule & Agenda"
    },
    gallery: {
      title: "Heritage & Documentation Gallery"
    },
    contact: {
      title: "Connect with Us"
    },
    gamelan: {
      title: "Gamelan Synth"
    }
  },
  id: {
    nav: {
      about: "Tentang",
      history: "Sejarah",
      structure: "Struktur",
      units: "Unit Budaya",
      events: "Kegiatan",
      gallery: "Galeri",
      contact: "Hubungi"
    },
    hero: {
      tagline: "MERAWAT TRADISI, MENGINSPIRASI GENERASI",
      title: "Rumah Budaya Watulimo",
      description: "Rumah Budaya Watulimo merupakan pusat pelestarian dan pengembangan seni budaya di Desa Watulimo, Trenggalek. Menjadi wadah bagi tari, pendalangan, karawitan, jaranan, campursari, modelling, dan pelatihan bahasa Jawa.",
      btnExplore: "Jelajahi Budaya",
      btnEvents: "Lihat Kegiatan",
      btnDoc: "Dokumentasi"
    },
    about: {
      badge: "LIVING CULTURE EXPERIENCE",
      title: "Gerakan Seni & Tradisi Watulimo",
      desc: "Rumah Budaya Watulimo didirikan sebagai episentrum pelestarian kesenian pesisir Trenggalek. Kami percaya bahwa tradisi bukanlah benda mati di etalase, melainkan denyut kehidupan yang berkembang bersama zaman."
    },
    history: {
      villageTitle: "Sejarah Desa Watulimo",
      centerTitle: "Sejarah Rumah Budaya Watulimo"
    },
    structure: {
      title: "Struktur Organisasi"
    },
    profiles: {
      title: "Profil Pengurus Inti & Dewan"
    },
    units: {
      title: "Unit Kebudayaan"
    },
    events: {
      title: "Jadwal & Agenda Kegiatan"
    },
    gallery: {
      title: "Galeri Pusaka & Dokumentasi"
    },
    contact: {
      title: "Hubungi Kami"
    },
    gamelan: {
      title: "Gamelan Synth"
    }
  },
  jv: {
    nav: {
      about: "Perkawis",
      history: "Babad",
      structure: "Pranata",
      units: "Kridha Budaya",
      events: "Kegiatan",
      gallery: "Galeri",
      contact: "Hubungi"
    },
    hero: {
      tagline: "NGURI-URI WARISAN ADILUHUNG",
      title: "Rumah Budaya Watulimo",
      description: "Rumah Budaya Watulimo minangka punjere nglestarekake lan ngrembakake seni budaya ing Desa Watulimo, Trenggalek. Dados papan kagem tari, pedalangan, karawitan, jaranan, campursari, modelling, lan piwulang basa Jawi.",
      btnExplore: "Mirsani Budaya",
      btnEvents: "Mirsani Adicara",
      btnDoc: "Dokumentasi"
    },
    about: {
      badge: "LIVING CULTURE EXPERIENCE",
      title: "Kridha Seni & Tradisi Watulimo",
      desc: "Rumah Budaya Watulimo dipunadegaken minangka episentrum kagem nglestarekaken seni pesisiran Trenggalek. Kita pitados bilih tradisi menika sanes barang mati, nanging raga ingkang gesang sesarengan jaman."
    },
    history: {
      villageTitle: "Babad Dhusun Watulimo",
      centerTitle: "Babad Rumah Budaya Watulimo"
    },
    structure: {
      title: "Pranata Organisasi"
    },
    profiles: {
      title: "Profil Pangurus & Pinunjul Adat"
    },
    units: {
      title: "Unit Kridha Budaya"
    },
    events: {
      title: "Jadwal & Adicara Kegiatan"
    },
    gallery: {
      title: "Galeri Barang Kina & Dokumentasi"
    },
    contact: {
      title: "Hubungi Kita"
    },
    gamelan: {
      title: "Gamelan Synth"
    }
  }
};

// 2. DATA ARRAYS AND CONFIGURATIONS

const milestones = [
  { year: "2017", title: "Pendopo Pertama", img: "pendopo-2017.jpg", desc: "Rumah Budaya Watulimo dirintis dari sebuah pendopo kayu sederhana, menjadi wadah awal bagi warga Watulimo untuk berlatih tari, karawitan, dan pedalangan." },
  { year: "2024", title: "Revitalisasi & Pengakuan Budaya", img: "pendopo-2024.jpg", desc: "Pendopo direvitalisasi dan berkembang menjadi pusat kegiatan budaya yang lebih lengkap, mulai dikenal luas dan mendapat dukungan dari berbagai pihak." },
  { year: "Sekarang", title: "Pusat Warisan Budaya Nasional", img: "pendopo-sekarang.jpg", desc: "Rumah Budaya Watulimo kini menjadi pusat pelestarian budaya yang diakui di kancah nasional, lengkap dengan program digitalisasi dan edukasi budaya." }
];

const orgStructureData = {
  penanggungJawab: [
    { id: "bupati", name: "Bupati dan Wakil Bupati Kabupaten Trenggalek", role: "Penanggung Jawab", bio: "Pimpinan tertinggi pemerintahan daerah Kabupaten Trenggalek yang mengayomi seluruh inisiatif pelestarian budaya lokal.", dedication: "Sejak menjabat", contribution: "State sponsorship, kebijakan pelestarian, pendanaan hibah pariwisata." },
    { id: "camat", name: "Camat Kecamatan Watulimo", role: "Penanggung Jawab", bio: "Kepala pemerintahan Kecamatan Watulimo yang mengoordinasikan koordinasi antar-instansi daerah.", dedication: "Sejak menjabat", contribution: "Fasilitator perizinan pentas seni pesisir, promosi wisata kecamatan." },
    { id: "kades", name: "Kepala Desa Watulimo", role: "Penanggung Jawab", bio: "Kepala desa Watulimo yang mengalokasikan dana desa untuk operasional fisik Rumah Budaya Watulimo.", dedication: "Sejak menjabat", contribution: "Pemberdayaan sanggar desa, fasilitator sarana Pendopo." }
  ],
  dewanPenasehat: [
    { id: "ridwan", name: "Ir. H. M. Ridwan Hisjam", role: "Ketua Dewan Penasehat", bio: "Penasehat senior yang memberikan arahan strategis dan dukungan kebijakan bagi keberlangsungan Rumah Budaya Watulimo.", dedication: "Sejak menjabat", contribution: "Arahan strategis, penguatan jejaring kemitraan, dukungan kebijakan pelestarian budaya." }
  ],
  pengurusInti: [
    { id: "andri", name: "Andri Sudarsono, SA", role: "Ketua Pengurus Inti", bio: "Pemimpin visioner penggerak pemuda Watulimo yang mengelola operasional harian seluruh unit kebudayaan.", dedication: "8 Tahun Pengabdian", contribution: "Digitalisasi museum, manajemen kurator, koordinator kemitraan internasional." },
    { id: "roro-pengurus", name: "Roro Riwayatiningsih, S.Pd", role: "Sekretaris Pengurus Inti", bio: "Tenaga administrasi yang menyusun agenda latihan, registrasi anggota, dan dokumentasi rapat, sekaligus menjembatani koordinasi dengan Dewan Adat.", dedication: "15 Tahun Pengabdian", contribution: "Pengarsipan arsip sejarah, manajemen korespondensi publik." },
    { id: "wini", name: "Wini Kumaidah, S.Tr Keb", role: "Bendahara Pengurus Inti", bio: "Tenaga profesional yang mengawasi arus keuangan, transparansi dana hibah, dan pendaftaran siswa beasiswa gratis.", dedication: "5 Tahun Pengabdian", contribution: "Tata kelola anggaran pelatihan, pengawasan transparansi donasi." }
  ],
  dewanAdat: [
    { id: "bambang", name: "Bambang Sudewo, S.Pd", role: "Ketua Dewan Adat", bio: "Sesepuh adat karismatik watulimo pelatih agung Jaranan Turonggo Yakso yang menjaga orisinalitas pakem ritual.", dedication: "20+ Tahun Pengabdian", contribution: "Penyusunan modul koreografi Turonggo Yakso, pemandu ritual." },
    { id: "roro", name: "Roro Riwayatiningsih, S.Pd", role: "Sekretaris Dewan Adat", bio: "Pendidik tari tradisional yang mengarsipkan syair-syair macapat pengiring upacara adat.", dedication: "15 Tahun Pengabdian", contribution: "Dokumentasi lisan gendhing-gendhing kuno." },
    { id: "dwi", name: "Dwi Prasetyo, SE", role: "Bendahara Dewan Adat", bio: "Pecinta pusaka keris yang merawat perlengkapan sesaji dan ornamen tata rias penari adat.", dedication: "10 Tahun Pengabdian", contribution: "Inventarisasi kostum, penyediaan logistik sesaji." },
    { id: "subagyo", name: "Subagyo", role: "Anggota Dewan Adat", bio: "Sesepuh pembuat topeng Yakso dari kayu pule pilihan.", dedication: "18 Tahun Pengabdian", contribution: "Penyediaan topeng pahat tangan bagi penari cilik." },
    { id: "paryatno", name: "Paryatno", role: "Anggota Dewan Adat", bio: "Dalang wayang purwa yang membina kelompok pedalangan anak-anak.", dedication: "12 Tahun Pengabdian", contribution: "Bimbingan suluk catur pedalangan." },
    { id: "widayat", name: "Widayat", role: "Anggota Dewan Adat", bio: "Pemain kendang senior pengiring irama mistis Jaranan.", dedication: "15 Tahun Pengabdian", contribution: "Pelatihan ketukan kendang slendro." },
    { id: "sutarman", name: "Sutarman", role: "Anggota Dewan Adat", bio: "Penjaga fisik cagar Rumah Adat Jawa di Watulimo.", dedication: "10 Tahun Pengabdian", contribution: "Perawatan harian struktur kayu kuno." },
    { id: "edi", name: "Edi Sunanto", role: "Anggota Dewan Adat", bio: "Pengrajin wayang kulit dari kulit kerbau asli.", dedication: "14 Tahun Pengabdian", contribution: "Pelatihan menatah dan menyungging wayang." },
    { id: "budi", name: "Budi Karyanto", role: "Anggota Dewan Adat", bio: "Pemain gamelan spesialis instrumen pencon besar (Gong).", dedication: "12 Tahun Pengabdian", contribution: "Penyelarasan irama tempo lancaran." },
    { id: "puji", name: "Puji Utomo", role: "Anggota Dewan Adat", bio: "Tokoh adat pemandu pembaca doa ritual Sembonyo.", dedication: "15 Tahun Pengabdian", contribution: "Pelafalan doa mantra tolak bala." },
    { id: "sofan", name: "Sofan Hadi", role: "Anggota Dewan Adat", bio: "Penyanyi campursari pria (Wiraswara) yang mengajarkan cengkok vokal Jawa.", dedication: "8 Tahun Pengabdian", contribution: "Pelatihan olah vokal sindhenan." },
    { id: "nurtika", name: "Nurtika Santoso", role: "Anggota Dewan Adat", bio: "Pengrajin batik tulis Watulimo pewarna kayu mahoni.", dedication: "10 Tahun Pengabdian", contribution: "Pelatihan membatik pesisiran." },
    { id: "agung", name: "Agung Baskoro", role: "Anggota Dewan Adat", bio: "Pelatih modelling busana adat kreasi batik lokal.", dedication: "6 Tahun Pengabdian", contribution: "Koreografi peragaan busana etnik daerah." },
    { id: "suharyono", name: "Suharyono", role: "Anggota Dewan Adat", bio: "Penyusun kurikulum pelatihan bahasa Jawa krama inggil.", dedication: "11 Tahun Pengabdian", contribution: "Pengajaran etika unggah-ungguh basa Jawa." }
  ]
};

const culturalUnits = [
  { id: "pedalangan", name: "Pendalangan", img: "pentas-wayang-kulit.jpg", desc: "Pelatihan seni pewayangan komprehensif, meliputi teknik memegang wayang (sabetan), intonasi suara (catur/suluk), dan filsafat lakon carangan Jawa.", members: "45 Cantrik", schedule: "Sabtu, 15.00 - 18.00 WIB", instructor: "Paryatno", achievements: "Juara 1 Dalang Bocah Jawa Timur 2024" },
  { id: "rumahadat", name: "Rumah Adat", img: "https://images.unsplash.com/photo-1605647540924-852290f6b0d5?q=80&w=600&auto=format&fit=crop", desc: "Pelestarian dan edukasi arsitektur tradisional Joglo Sinom Watulimo yang dibangun tanpa menggunakan paku besi, memamerkan kearifan sipil kuno.", members: "Umum", schedule: "Setiap Hari, 08.00 - 16.00 WIB", instructor: "Sutarman", achievements: "Cagar Budaya Tersertifikasi Provinsi" },
  { id: "perpustakaan", name: "Perpustakaan Budaya", img: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=600&auto=format&fit=crop", desc: "Ruang baca khusus koleksi naskah rontal, babad kuno, kamus Jawa-Kuno, serta dokumentasi visual upacara adat Trenggalek.", members: "120+ Anggota", schedule: "Selasa - Minggu, 09.00 - 15.00 WIB", instructor: "Ayu Lucky Setiani", achievements: "Arsip Digital Terlengkap se-Trenggalek" },
  { id: "jaranan", name: "Jaranan Turonggo Yakso", img: "https://images.unsplash.com/photo-1590073844006-33379778ae09?q=80&w=600&auto=format&fit=crop", desc: "Seni tari khas Trenggalek yang melambangkan kemenangann kesadaran spiritual manusia atas nafsu angkara murka raksasa (Yakso).", members: "150 Penari", schedule: "Minggu, 09.00 - 12.00 WIB", instructor: "Bambang Sudewo, S.Pd", achievements: "Penyaji Terbaik Festival Jaranan Nasional" },
  { id: "campursari", name: "Campursari", img: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=600&auto=format&fit=crop", desc: "Harmonisasi instrumen musik barat modern (keyboard, gitar) dengan gamelan Jawa tradisional, melestarikan musik pop daerah Jawa.", members: "40 Musisi", schedule: "Kamis, 19.30 - 22.00 WIB", instructor: "Sofan Hadi", achievements: "Album Kompilasi Karya Sanggar RBW 2023" },
  { id: "karawitan", name: "Karawitan & Gamelan", img: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=600&auto=format&fit=crop", desc: "Pendidikan instrumen gamelan perunggu (Saron, Bonang, Demung, Gong) dalam tangga nada Laras Slendro dan Pelog.", members: "85 Siswa", schedule: "Sabtu, 13.00 - 15.30 WIB", instructor: "Budi Karyanto", achievements: "Pengisi Musik Utama Ritual Sembonyo" },
  { id: "tari", name: "Seni Tari Pesisir", img: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?q=80&w=600&auto=format&fit=crop", desc: "Pelatihan tari kreasi daerah yang terinspirasi dari aktivitas kehidupan nelayan Prigi dan dinamika laut selatan Jawa.", members: "90 Siswa", schedule: "Jumat, 15.00 - 17.00 WIB", instructor: "Roro Riwayatiningsih, S.Pd", achievements: "Koreografi Unggulan Parade Seni Jatim" },
  { id: "beksan", name: "Beksan Klasik Jawa", img: "https://images.unsplash.com/photo-1547153760-18fc86324498?q=80&w=600&auto=format&fit=crop", desc: "Pengajaran tari gaya klasik Keraton Surakarta dan Yogyakarta (Gatotkaca Gandrung, Srikandi Mustakaweni) demi etika gerak halus.", members: "30 Siswa", schedule: "Rabu, 15.30 - 17.30 WIB", instructor: "Roro Riwayatiningsih, S.Pd", achievements: "Penyaji Tari Klasik Terbaik Trenggalek" },
  { id: "modelling", name: "Modelling Etnik", img: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=600&auto=format&fit=crop", desc: "Pelatihan koreografi catwalk dengan mengenakan kostum kreasi tradisional berbasis batik tulis Watulimohan.", members: "35 Siswa", schedule: "Jumat, 19.00 - 21.00 WIB", instructor: "Agung Baskoro", achievements: "Juara Harapan Fashion Carnaval Nasional" },
  { id: "bahasajawa", name: "Pelatihan Bahasa Jawa", img: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=600&auto=format&fit=crop", desc: "Pengajaran tata krama berbahasa (Ngoko, Madya, Krama Inggil) dan penulisan aksara Jawa demi menjaga unggah-ungguh sosial.", members: "75 Siswa", schedule: "Selasa, 15.30 - 17.00 WIB", instructor: "Suharyono", achievements: "Juara Umum Lomba Menulis Aksara Jawa" }
];

const eventsData = [
  { id: "ev1", title: "Ritual Adat Larung Sembonyo", cat: "events", date: "15 Juni 2027", desc: "Upacara adat sedekah laut tahunan masyarakat pesisir Prigi Watulimo sebagai wujud syukur atas hasil laut, ditandai pelarungan tumpeng raksasa.", time: "07.00 - Selesai", loc: "Pantai Karanggongso / Pelabuhan Prigi", avail: "Terbuka untuk Umum" },
  { id: "ev2", title: "Festival Jaranan Turonggo Yakso", cat: "events", date: "20 Agustus 2027", desc: "Kompetisi akbar tari Jaranan Turonggo Yakso se-Kabupaten Trenggalek memperebutkan piala bergilir Bupati Trenggalek.", time: "09.00 - 23.00 WIB", loc: "Pendopo Agung Rumah Budaya", avail: "Tiket Terbatas" },
  { id: "ev3", title: "Latihan Rutin Karawitan", cat: "routine", date: "Setiap Sabtu", desc: "Gladhi karawitan laras slendro-pelog bagi pemuda desa guna mempersiapkan gending-gending ritual kelautan.", time: "13.00 - 15.30 WIB", loc: "Pendopo Rumah Budaya", avail: "Bebas Masuk / Cantrik Baru" },
  { id: "ev4", title: "Workshop Membatik Pewarna Alami", cat: "routine", date: "Setiap Jumat", desc: "Pelatihan mencanting batik motif biota laut pesisir Watulimo dengan pewarna mahoni dan indigo alami.", time: "14.00 - 17.00 WIB", loc: "Sanggar Kriya RBW", avail: "Khusus Ibu-Ibu & Pemudi" },
  { id: "ev5", title: "Peluncuran Peta Budaya Digital", cat: "future", date: "10 Oktober 2027", desc: "Pameran teknologi visual interaktif peta kebudayaan desa terintegrasi barcode audio guide museum.", time: "10.00 - 12.00 WIB", loc: "Paviliun Imersif RBW", avail: "Undangan & Akademisi" },
  { id: "ev6", title: "Pentas Wayang Kulit Dalang Bocah", cat: "future", date: "05 November 2027", desc: "Pagelaran shadow play wayang purwa berdurasi 3 jam yang didalangi oleh cantrik-cantrik cilik berprestasi.", time: "19.30 - 22.30 WIB", loc: "Pendopo Rumah Budaya", avail: "Terbuka untuk Umum" }
];

const achievementsData = [
  { title: "Status Warisan Budaya Nasional", level: "Nasional", year: "2024", result: "Sertifikasi Cagar Budaya", doc: "Kementerian Pendidikan, Kebudayaan, Riset, dan Teknologi RI" },
  { title: "Juara Umum Festival Jaranan Jawa Timur", level: "Provinsi", year: "2023", result: "Juara Umum & Koreografer Terbaik", doc: "Dinas Kebudayaan & Pariwisata Provinsi Jatim" },
  { title: "Kategori Wisata Budaya Terbaik", level: "Kabupaten", year: "2022", result: "Juara 1 Trenggalek Tourism Awards", doc: "Pemerintah Kabupaten Trenggalek" }
];

const galleryData = [
  { img: "https://images.unsplash.com/photo-1590073844006-33379778ae09?q=80&w=600&auto=format&fit=crop", title: "Atraksi Jaranan Turonggo Yakso", cat: "jaranan", desc: "Penari melompati api melambangkan penaklukan nafsu amarah raksasa.", year: "2024" },
  { img: "pentas-wayang-kulit.jpg", title: "Pentas Wayang Kulit Semalam Suntuk", cat: "wayang", desc: "Lakon Wahyu Makutarama dibawakan oleh dalang binaan Rumah Budaya.", year: "2023" },
  { img: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=600&auto=format&fit=crop", title: "Gladhi Karawitan Kiai Guntur Sari", cat: "karawitan", desc: "Anak-anak belajar melafalkan ketukan saron slendro secara presisi.", year: "2024" },
  { img: "https://images.unsplash.com/photo-1605647540924-852290f6b0d5?q=80&w=600&auto=format&fit=crop", title: "Struktur Joglo Utama Rumah Budaya", cat: "events", desc: "Pendopo agung yang dirawat secara berkala tanpa paku.", year: "2025" },
  { img: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=600&auto=format&fit=crop", title: "Canting Batik Watulimohan", desc: "Proses menggambar lilin malam bermotif cengkeh pesisiran.", cat: "craft", year: "2024" },
  { img: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?q=80&w=600&auto=format&fit=crop", title: "Tari Persembahan Selo Gangsal", cat: "dance", desc: "Koreografi halus menyambut tamu kehormatan dari pariwisata nasional.", year: "2023" },
  { img: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=600&auto=format&fit=crop", title: "Kelas Unggah-Ungguh Basa Jawi", cat: "training", desc: "Siswa berlatih krama inggil dalam interaksi sosial sehari-hari.", year: "2024" },
  { img: "situs-sela-gangsal.jpg", title: "Situs Sela Gangsal - Legenda Lima Batu", cat: "history", desc: "Lima batu purba yang menjadi asal-usul nama Desa Watulimo, dipercaya sebagai penanda batas mistis kerajaan Jawa.", year: "2025" }
];

// ==========================================================================
// STATE MANAGEMENT & TRANSLATION CORE
// ==========================================================================

let appState = {
  lang: localStorage.getItem("rbw_lang") || "id",
  theme: localStorage.getItem("rbw_theme") || "dark-theme",
  timelineIndex: 0,
  activeProfileId: "andri",
  galleryFilter: "all",
  gallerySearch: ""
};

// Initialize app UI on load
document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  initLanguages();
  initCanvasParticles();
  initGamelanSynth();
  initHistoryTimeline();
  initOrgTreeChart();
  initCulturalUnits();
  initEventsAndCountdown();
  initAchievements();
  initGallery();
  initContactAndMap();
  initGlobalControls();
  
  // Set default profile show
  selectProfileNode("andri");
});

function initTheme() {
  document.documentElement.className = appState.theme;
  const sunIcon = document.getElementById("theme-sun-icon");
  const moonIcon = document.getElementById("theme-moon-icon");
  
  if (appState.theme === "light-theme") {
    sunIcon.classList.remove("hide");
    moonIcon.classList.add("hide");
  } else {
    sunIcon.classList.add("hide");
    moonIcon.classList.remove("hide");
  }
  
  document.getElementById("theme-toggle-btn").addEventListener("click", () => {
    if (appState.theme === "dark-theme") {
      appState.theme = "light-theme";
      sunIcon.classList.remove("hide");
      moonIcon.classList.add("hide");
    } else {
      appState.theme = "dark-theme";
      sunIcon.classList.add("hide");
      moonIcon.classList.remove("hide");
    }
    document.documentElement.className = appState.theme;
    localStorage.setItem("rbw_theme", appState.theme);
  });
}

function initLanguages() {
  updateLanguageUI();

  // Bind dropdown language buttons
  document.querySelectorAll(".lang-opt").forEach(btn => {
    btn.addEventListener("click", (e) => {
      const selectedLang = btn.getAttribute("data-lang");
      appState.lang = selectedLang;
      localStorage.setItem("rbw_lang", selectedLang);
      
      document.querySelectorAll(".lang-opt").forEach(o => o.classList.remove("active"));
      btn.classList.add("active");
      
      document.getElementById("current-lang-label").innerText = selectedLang.toUpperCase();
      
      updateLanguageUI();
    });
  });
}

function updateLanguageUI() {
  const dictionary = translations[appState.lang];
  
  // Update nav keys
  document.querySelectorAll("[data-translate]").forEach(elem => {
    const key = elem.getAttribute("data-translate");
    const textVal = getNestedObjectValue(dictionary, key);
    if (textVal) {
      elem.innerText = textVal;
    }
  });

  // Update dynamic inputs
  const searchInput = document.getElementById("smart-search-input");
  if (searchInput) {
    searchInput.placeholder = appState.lang === "en" ? "Search cultural units, timeline, people..." : (appState.lang === "jv" ? "Padosi kridha budaya, babad, pengurus..." : "Cari unit budaya, sejarah, pengurus...");
  }
}

function getNestedObjectValue(obj, pathString) {
  return pathString.split('.').reduce((acc, part) => acc && acc[part], obj);
}

// ==========================================================================
// BACKGROUND CANVAS PARTICLES (Interactive Loop)
// ==========================================================================

function initCanvasParticles() {
  const canvas = document.getElementById("particles-bg");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  
  let particlesArray = [];
  let width = canvas.width = window.innerWidth;
  let height = canvas.height = window.innerHeight;
  
  window.addEventListener("resize", () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  class Particle {
    constructor() {
      this.x = Math.random() * width;
      this.y = Math.random() * height;
      this.size = Math.random() * 2 + 0.5;
      this.speedX = Math.random() * 0.4 - 0.2;
      this.speedY = Math.random() * 0.4 - 0.2;
      this.alpha = Math.random() * 0.5 + 0.1;
    }
    update() {
      this.x += this.speedX;
      this.y += this.speedY;
      
      if (this.x < 0 || this.x > width) this.speedX *= -1;
      if (this.y < 0 || this.y > height) this.speedY *= -1;
    }
    draw() {
      ctx.save();
      ctx.globalAlpha = this.alpha;
      ctx.fillStyle = appState.theme === "dark-theme" ? "rgba(200, 164, 77, 0.4)" : "rgba(107, 79, 59, 0.2)";
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    }
  }

  for (let i = 0; i < 45; i++) {
    particlesArray.push(new Particle());
  }

  function loop() {
    ctx.clearRect(0, 0, width, height);
    particlesArray.forEach(p => {
      p.update();
      p.draw();
    });
    requestAnimationFrame(loop);
  }
  loop();
}

// ==========================================================================
// GAMELAN WEB AUDIO SYNTHESIZER
// ==========================================================================

let audioContext = null;
let ambientSchedulerId = null;
let isAmbientPlaying = false;
let ambientBeat = 0;
let masterGain = null;

// Slendro Frequencies
const saronFrequencies = {
  "1": 270.0, // Ji
  "2": 310.0, // Ro
  "3": 355.0, // Lu
  "5": 415.0, // Ma
  "6": 475.0, // Nem
  "7": 540.0  // Barang (High Ji)
};

const saronNames = {
  "1": "Ji",
  "2": "Ro",
  "3": "Lu",
  "5": "Ma",
  "6": "Nem",
  "7": "Barang"
};

function initGamelanSynth() {
  const keyboardContainer = document.getElementById("mini-saron-keys");
  if (!keyboardContainer) return;
  
  // Draw keys inside dashboard widget
  Object.keys(saronFrequencies).forEach((noteKey) => {
    const keyBtn = document.createElement("button");
    keyBtn.className = "mini-saron-key";
    keyBtn.setAttribute("data-note-key", noteKey);
    keyBtn.innerHTML = `
      <span>${noteKey}</span>
      <span class="mini-key-label">${saronNames[noteKey]}</span>
    `;
    keyBtn.addEventListener("mousedown", () => triggerSaronNote(noteKey));
    keyboardContainer.appendChild(keyBtn);
  });

  // Listen to keyboard numbers 1-7 (skipping 4)
  document.addEventListener("keydown", (e) => {
    if (document.activeElement.tagName === "INPUT" || document.activeElement.tagName === "TEXTAREA") return;
    if (saronFrequencies[e.key]) {
      triggerSaronNote(e.key);
      const keyBtn = keyboardContainer.querySelector(`[data-note-key="${e.key}"]`);
      if (keyBtn) {
        keyBtn.classList.add("active");
        setTimeout(() => keyBtn.classList.remove("active"), 120);
      }
    }
  });

  // Volume slider control
  const volumeSlider = document.getElementById("volume-slider");
  if (volumeSlider) {
    volumeSlider.addEventListener("input", (e) => {
      if (masterGain) {
        masterGain.gain.setValueAtTime(parseFloat(e.target.value), audioContext.currentTime);
      }
    });
  }

  // Ambient toggle
  const ambientBtn = document.getElementById("ambient-toggle-btn");
  if (ambientBtn) {
    ambientBtn.addEventListener("click", () => {
      toggleAmbientGamelan();
    });
  }
}

function initAudioContext() {
  if (!audioContext) {
    audioContext = new (window.AudioContext || window.webkitAudioContext)();
    masterGain = audioContext.createGain();
    const volumeSlider = document.getElementById("volume-slider");
    masterGain.gain.setValueAtTime(volumeSlider ? parseFloat(volumeSlider.value) : 0.4, audioContext.currentTime);
    masterGain.connect(audioContext.destination);
  }
  if (audioContext.state === "suspended") {
    audioContext.resume();
  }
}

function triggerSaronNote(noteKey, duration = 1.8) {
  initAudioContext();
  const freq = saronFrequencies[noteKey];
  if (!freq) return;

  const now = audioContext.currentTime;
  
  // Bronze Saron Synthesizer: 1 fundamental oscillator + 3 high overtone harmonics
  const osc1 = audioContext.createOscillator();
  const osc2 = audioContext.createOscillator();
  const osc3 = audioContext.createOscillator();
  
  const gainNode = audioContext.createGain();
  
  osc1.type = "sine";
  osc1.frequency.setValueAtTime(freq, now);

  osc2.type = "triangle";
  osc2.frequency.setValueAtTime(freq * 2.76, now); // Metallic overtone multiplier 1

  osc3.type = "sine";
  osc3.frequency.setValueAtTime(freq * 5.4, now);  // Metallic overtone multiplier 2

  // Exponential bronze bell decay volume envelope
  gainNode.gain.setValueAtTime(0.7, now);
  gainNode.gain.exponentialRampToValueAtTime(0.005, now + duration);

  osc1.connect(gainNode);
  osc2.connect(gainNode);
  osc3.connect(gainNode);
  
  gainNode.connect(masterGain);
  
  osc1.start(now);
  osc2.start(now);
  osc3.start(now);
  
  osc1.stop(now + duration);
  osc2.stop(now + duration);
  osc3.stop(now + duration);
}

function toggleAmbientGamelan() {
  initAudioContext();
  const playIcon = document.getElementById("ambient-play-icon");
  const pauseIcon = document.getElementById("ambient-pause-icon");
  const btn = document.getElementById("ambient-toggle-btn");
  
  if (isAmbientPlaying) {
    // Stop ambient scheduler
    clearInterval(ambientSchedulerId);
    isAmbientPlaying = false;
    btn.classList.remove("playing");
    playIcon.classList.remove("hide");
    pauseIcon.classList.add("hide");
  } else {
    // Start scheduler (beats play every 750ms)
    isAmbientPlaying = true;
    btn.classList.add("playing");
    playIcon.classList.add("hide");
    pauseIcon.classList.remove("hide");
    ambientBeat = 0;
    
    ambientSchedulerId = setInterval(schedulerTick, 750);
  }
}

function schedulerTick() {
  // Simple lancaran slendro musical loop
  // Beat pattern sequence notes:
  const melody = ["1", "2", "3", "5", "2", "3", "5", "6", "5", "6", "7", "5", "6", "3", "2", "1"];
  const currentMelodyNote = melody[ambientBeat % melody.length];
  
  // Play main note
  triggerSaronNote(currentMelodyNote, 1.2);
  
  // Every 8 beats play a low bass gong note
  if (ambientBeat % 8 === 0) {
    playDeepGong();
  }

  ambientBeat++;
}

function playDeepGong() {
  const now = audioContext.currentTime;
  const osc = audioContext.createOscillator();
  const gain = audioContext.createGain();
  
  osc.type = "sine";
  osc.frequency.setValueAtTime(90.0, now); // Deep bass frequency for Gong Ageng
  
  gain.gain.setValueAtTime(1.0, now);
  gain.gain.exponentialRampToValueAtTime(0.001, now + 3.5);
  
  osc.connect(gain);
  gain.connect(masterGain);
  
  osc.start(now);
  osc.stop(now + 3.6);
}

// ==========================================================================
// 4. HISTORY OF RUMAH BUDAYA (Interactive Timeline Slider)
// ==========================================================================

function initHistoryTimeline() {
  const yearsRow = document.getElementById("timeline-years-row");
  if (!yearsRow) return;

  milestones.forEach((item, index) => {
    const yearBtn = document.createElement("button");
    yearBtn.className = `timeline-year-btn ${index === 0 ? 'active' : ''}`;
    yearBtn.setAttribute("data-timeline-idx", index);
    yearBtn.innerHTML = `
      <div class="dot-node"></div>
      <span class="node-year">${item.year}</span>
    `;
    
    yearBtn.addEventListener("click", () => {
      selectMilestoneIndex(index);
    });
    
    yearsRow.appendChild(yearBtn);
  });
  
  // Trigger layout state
  selectMilestoneIndex(0);
}

function selectMilestoneIndex(index) {
  appState.timelineIndex = index;
  const item = milestones[index];
  
  // Update track progress width
  const totalItems = milestones.length;
  const progressPercent = (index / (totalItems - 1)) * 100;
  document.getElementById("timeline-track-progress").style.width = `${progressPercent}%`;

  // Update active classes on buttons
  const buttons = document.querySelectorAll(".timeline-year-btn");
  buttons.forEach((btn, idx) => {
    btn.classList.remove("active", "past");
    if (idx === index) {
      btn.classList.add("active");
    } else if (idx < index) {
      btn.classList.add("past");
    }
  });

  // Fade update milestone display
  const viewport = document.getElementById("timeline-viewport");
  viewport.style.opacity = 0.3;
  
  setTimeout(() => {
    document.getElementById("timeline-watermark").innerText = item.year;
    document.getElementById("milestone-active-year").innerText = item.year;
    document.getElementById("milestone-active-title").innerText = item.title;
    document.getElementById("milestone-active-desc").innerText = item.desc;
    document.getElementById("milestone-active-index").innerText = index + 1;
    const imgEl = document.getElementById("milestone-active-image");
    if (imgEl && item.img) {
      imgEl.src = item.img;
      imgEl.alt = item.title;
    }
    const totalEl = document.getElementById("milestone-total-count");
    if (totalEl) totalEl.innerText = totalItems;
    viewport.style.opacity = 1;
  }, 150);
}

// ==========================================================================
// 5 & 6. ORGANIZATIONAL STRUCTURE & MANAGEMENT PROFILES
// ==========================================================================

function initOrgTreeChart() {
  const treeContainer = document.getElementById("hierarchy-tree-chart");
  if (!treeContainer) return;

  // Build tree chart layers: Penanggung Jawab -> Pengurus Inti -> Dewan Adat Row
  let treeHTML = `
    <!-- Layer 1: Penanggung Jawab -->
    <div class="tree-row">
  `;
  orgStructureData.penanggungJawab.forEach(node => {
    treeHTML += `
      <div class="tree-card-node" data-profile-id="${node.id}">
        <h5>Penanggung Jawab</h5>
        <h4>${node.name}</h4>
      </div>
    `;
  });
  treeHTML += `
    </div>
    
    <div class="tree-connector-v"></div>

    <!-- Layer 1.5: Dewan Penasehat -->
    <div class="tree-row">
  `;
  orgStructureData.dewanPenasehat.forEach(node => {
    treeHTML += `
      <div class="tree-card-node" data-profile-id="${node.id}">
        <h5>${node.role}</h5>
        <h4>${node.name}</h4>
      </div>
    `;
  });
  treeHTML += `
    </div>

    <div class="tree-connector-v"></div>

    <!-- Layer 2: Pengurus Inti -->
    <div class="tree-row">
  `;
  orgStructureData.pengurusInti.forEach(node => {
    treeHTML += `
      <div class="tree-card-node" data-profile-id="${node.id}">
        <h5>${node.role}</h5>
        <h4>${node.name}</h4>
      </div>
    `;
  });
  treeHTML += `
    </div>

    <div class="tree-connector-v"></div>

    <!-- Layer 3: Expandable Header for Dewan Adat -->
    <div class="tree-row" style="gap: 80px;">
      <div class="tree-card-node" id="adat-expand-btn">
        <h5>Mpu Kebudayaan</h5>
        <h4>Dewan Adat</h4>
        <span style="font-size: 0.68rem; color: var(--text-tertiary);">Click to view members (${orgStructureData.dewanAdat.length})</span>
      </div>
    </div>

    <!-- Expandable Adat Row -->
    <div class="tree-connector-v adat-row-node hide"></div>
    <div class="tree-row hide adat-row-node" style="flex-wrap: wrap; max-width: 900px; gap: 12px;" id="adat-nodes-container"></div>
  `;

  treeContainer.innerHTML = treeHTML;

  // Render adat members inside container
  const adatContainer = document.getElementById("adat-nodes-container");
  orgStructureData.dewanAdat.forEach(node => {
    adatContainer.innerHTML += `
      <div class="tree-card-node" data-profile-id="${node.id}" style="padding: 10px 14px; min-width: 150px;">
        <h5>${node.role}</h5>
        <h4>${node.name}</h4>
      </div>
    `;
  });

  // Bind Adat Expand click
  document.getElementById("adat-expand-btn").addEventListener("click", () => {
    document.querySelectorAll(".adat-row-node").forEach(el => el.classList.toggle("hide"));
    document.getElementById("adat-expand-btn").classList.toggle("active");
  });

  // Bind all node click events to profile display
  treeContainer.addEventListener("click", (e) => {
    const card = e.target.closest("[data-profile-id]");
    if (card) {
      const pId = card.getAttribute("data-profile-id");
      selectProfileNode(pId);
    }
  });
}

function selectProfileNode(profileId) {
  appState.activeProfileId = profileId;

  // Remove active classes
  document.querySelectorAll(".tree-card-node").forEach(node => {
    node.classList.remove("active");
  });

  // Add active to selected
  const activeNode = document.querySelector(`[data-profile-id="${profileId}"]`);
  if (activeNode) {
    activeNode.classList.add("active");
  }

  // Find profile data
  let profile = null;
  Object.keys(orgStructureData).forEach(layerKey => {
    const match = orgStructureData[layerKey].find(n => n.id === profileId);
    if (match) profile = match;
  });

  if (!profile) return;

  const viewPort = document.getElementById("profile-details-viewport");
  viewPort.style.opacity = 0.3;

  setTimeout(() => {
    viewPort.innerHTML = `
      <div class="profile-bio-card glass-panel">
        <div class="bio-avatar-side">
          <div class="bio-avatar-placeholder">
            <svg class="avatar-silhouette-svg" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
            </svg>
          </div>
          <span class="bio-dedication-tag">${profile.dedication}</span>
        </div>
        <div class="bio-text-side">
          <div class="bio-title-wrap">
            <h5>${profile.role}</h5>
            <h3>${profile.name}</h3>
          </div>
          <p class="bio-main-p">${profile.bio}</p>
          <div class="bio-contributions-box">
            <h6>Bidang Tanggung Jawab & Kontribusi:</h6>
            <p>${profile.contribution}</p>
          </div>
        </div>
      </div>
    `;
    viewPort.style.opacity = 1;
  }, 150);
}

// ==========================================================================
// 7. CULTURAL UNITS
// ==========================================================================

function initCulturalUnits() {
  const container = document.getElementById("units-cards-container");
  if (!container) return;

  culturalUnits.forEach(unit => {
    const card = document.createElement("div");
    card.className = "unit-card glass-card";
    card.innerHTML = `
      <div class="unit-image-panel">
        <span class="unit-badge-tag">${unit.instructor}</span>
        <img class="unit-image-placeholder" src="${unit.img}" alt="${unit.name}">
      </div>
      <div class="unit-body-panel">
        <h3 class="serif-text">${unit.name}</h3>
        <p>${unit.desc}</p>
        <div class="unit-meta-list">
          <span>👥 Anggota: <strong>${unit.members}</strong></span>
          <span>📅 Jadwal: <strong>${unit.schedule}</strong></span>
          <span>🏆 Prestasi: <strong>${unit.achievements}</strong></span>
        </div>
      </div>
    `;
    container.appendChild(card);
  });
}

// ==========================================================================
// 8. EVENTS AND SCHEDULE
// ==========================================================================

function initEventsAndCountdown() {
  // Countdown Timer: Setup dynamic countdown targets (always set +120 days from current date for layout persistence)
  const targetDate = new Date();
  targetDate.setDate(targetDate.getDate() + 120);

  function updateClock() {
    const now = new Date().getTime();
    const difference = targetDate.getTime() - now;

    if (difference < 0) return;

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    document.getElementById("cd-days").innerText = String(days).padStart(2, "0");
    document.getElementById("cd-hours").innerText = String(hours).padStart(2, "0");
    document.getElementById("cd-minutes").innerText = String(minutes).padStart(2, "0");
    document.getElementById("cd-seconds").innerText = String(seconds).padStart(2, "0");
  }
  
  setInterval(updateClock, 1000);
  updateClock();

  // Render list of calendar items
  renderEvents("all");

  // Bind calendar tab buttons
  document.querySelectorAll(".event-tab-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".event-tab-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      
      const cat = btn.getAttribute("data-event-cat");
      renderEvents(cat);
    });
  });
}

function renderEvents(category) {
  const container = document.getElementById("events-list-container");
  if (!container) return;
  container.innerHTML = "";

  const filtered = category === "all" ? eventsData : eventsData.filter(ev => ev.cat === category);

  filtered.forEach(ev => {
    const card = document.createElement("div");
    card.className = "event-row-card glass-panel";
    
    // Icon representing event category
    const calIcon = ev.cat === "events" ? "🎖️" : (ev.cat === "routine" ? "🔄" : "🚀");

    card.innerHTML = `
      <div class="event-date-block">
        <span style="font-size: 1.8rem;">${calIcon}</span>
        <span class="event-date-txt">${ev.date}</span>
      </div>
      <div class="event-details-block">
        <span class="event-type-badge">${ev.cat.toUpperCase()}</span>
        <h3 class="serif-text">${ev.title}</h3>
        <p>${ev.desc}</p>
        <div class="event-meta-row">
          <span class="meta-item">🕒 ${ev.time}</span>
          <span class="meta-item">📍 ${ev.loc}</span>
          <span class="meta-item availability">${ev.avail}</span>
        </div>
      </div>
      <div class="event-action-block">
        <button class="btn-primary" onclick="openBookingModal('${ev.id}')">Daftar Pass</button>
      </div>
    `;
    container.appendChild(card);
  });
}

window.openBookingModal = function(eventId) {
  const ev = eventsData.find(e => e.id === eventId);
  if (!ev) return;

  const modal = document.getElementById("booking-modal");
  const modalBody = document.getElementById("booking-modal-body");
  
  modalBody.innerHTML = `
    <button class="modal-close-btn" onclick="closeBookingModal()">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
    </button>
    <div class="booking-form" id="booking-form-el">
      <h3 class="serif-text">Registrasi Tiket Masuk</h3>
      <span class="form-event-name">${ev.title}</span>
      
      <div class="input-group">
        <label>Nama Lengkap</label>
        <input type="text" id="bk-name" required placeholder="Masukkan nama Anda..." />
      </div>
      <div class="input-group">
        <label>Alamat Email</label>
        <input type="email" id="bk-email" required placeholder="name@domain.com" />
      </div>
      <div class="input-group">
        <label>Jumlah Tiket / Pass</label>
        <select id="bk-passes">
          <option value="1">1 Pass</option>
          <option value="2">2 Pass</option>
          <option value="3">3 Pass</option>
          <option value="4">4 Pass</option>
        </select>
      </div>
      
      <button class="btn-primary form-submit-btn" onclick="submitBookingForm()">Konfirmasi Registrasi</button>
    </div>
  `;
  modal.classList.remove("hide");
};

window.closeBookingModal = function() {
  document.getElementById("booking-modal").classList.add("hide");
};

window.submitBookingForm = function() {
  const name = document.getElementById("bk-name").value;
  const email = document.getElementById("bk-email").value;
  
  if (!name || !email) {
    alert("Silakan isi nama dan alamat email Anda.");
    return;
  }

  // Display success message
  const modalBody = document.getElementById("booking-modal-body");
  modalBody.innerHTML = `
    <button class="modal-close-btn" onclick="closeBookingModal()">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
    </button>
    <div class="booking-success-message">
      <span class="success-icon-pulse" style="font-size: 3.5rem;">🎉</span>
      <h3 class="serif-text">Registrasi Berhasil!</h3>
      <p>Terima kasih, <strong>${name}</strong>. Tiket pass digital Anda telah didaftarkan. Link verifikasi telah dikirimkan ke email <em>${email}</em>.</p>
      <button class="btn-secondary" onclick="closeBookingModal()">Tutup</button>
    </div>
  `;
};

// ==========================================================================
// 9. ACHIEVEMENTS & COUNTERS ANIMATION
// ==========================================================================

function initAchievements() {
  // Render award rows
  const listContainer = document.getElementById("awards-list-container");
  if (!listContainer) return;

  achievementsData.forEach(aw => {
    const card = document.createElement("div");
    card.className = "award-row-card glass-panel";
    card.innerHTML = `
      <h5>${aw.level} // ${aw.year}</h5>
      <h4 class="serif-text">${aw.title}</h4>
      <p>${aw.result}</p>
      <span style="font-size:0.75rem; color:var(--text-tertiary);">${aw.doc}</span>
    `;
    listContainer.appendChild(card);
  });

  // Scroll animated counter logic
  let triggered = false;
  window.addEventListener("scroll", () => {
    const el = document.getElementById("achievements");
    if (!el) return;
    const pos = el.getBoundingClientRect().top;
    const screenHeight = window.innerHeight;

    if (pos < screenHeight && !triggered) {
      triggered = true;
      animateNumber("stats-awards", 15);
      animateNumber("stats-years", 10);
      animateNumber("stats-members", 300);
      
      // Also animate weather temp and visitor widget inside about
      animateNumber("visitor-count-number", 24532, 2000);
    }
  });
}

function animateNumber(elementId, targetValue, duration = 1200) {
  const elem = document.getElementById(elementId);
  if (!elem) return;

  let start = 0;
  const stepTime = Math.abs(Math.floor(duration / targetValue));
  
  // Cap stepTime minimum to prevent browser thread freeze on big numbers
  const safeStepTime = Math.max(stepTime, 2);
  const stepIncrement = Math.max(Math.ceil(targetValue / (duration / safeStepTime)), 1);

  const timer = setInterval(() => {
    start += stepIncrement;
    if (start >= targetValue) {
      elem.innerText = targetValue;
      clearInterval(timer);
    } else {
      elem.innerText = start;
    }
  }, safeStepTime);
}

// ==========================================================================
// 10. MASONRY GALLERY & LIGHTBOX PORTAL
// ==========================================================================

function initGallery() {
  const filtersRow = document.getElementById("gallery-filters-row");
  const gridContainer = document.getElementById("gallery-grid-container");
  if (!gridContainer) return;

  // Render filter buttons
  const categories = ["all", "jaranan", "wayang", "karawitan", "dance", "craft", "training", "history"];
  const catNames = { all: "Semua", jaranan: "Jaranan", wayang: "Wayang", karawitan: "Karawitan", dance: "Tari", craft: "Batik", training: "Pelatihan" };

  categories.forEach(cat => {
    const btn = document.createElement("button");
    btn.className = cat === "all" ? "active" : "";
    btn.setAttribute("data-filter", cat);
    btn.innerText = catNames[cat];
    
    btn.addEventListener("click", () => {
      filtersRow.querySelectorAll("button").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      appState.galleryFilter = cat;
      filterGalleryGrid();
    });
    
    filtersRow.appendChild(btn);
  });

  // Bind search text field
  const searchInput = document.getElementById("gallery-search-input");
  searchInput.addEventListener("input", (e) => {
    appState.gallerySearch = e.target.value.toLowerCase();
    filterGalleryGrid();
  });

  // Initially render grid
  filterGalleryGrid();
}

function filterGalleryGrid() {
  const container = document.getElementById("gallery-grid-container");
  container.innerHTML = "";

  const filtered = galleryData.filter(item => {
    const matchesFilter = appState.galleryFilter === "all" || item.cat === appState.galleryFilter;
    const matchesSearch = item.title.toLowerCase().includes(appState.gallerySearch) || item.desc.toLowerCase().includes(appState.gallerySearch);
    return matchesFilter && matchesSearch;
  });

  filtered.forEach(item => {
    const card = document.createElement("div");
    card.className = "gallery-card glass-panel";
    card.innerHTML = `
      <div class="gallery-img-container">
        <div class="gallery-hover-overlay flex-center">
          <span class="zoom-icon" style="font-size: 2rem;">🔍</span>
        </div>
        <img src="${item.img}" alt="${item.title}">
      </div>
      <div class="gallery-card-body">
        <span class="gallery-item-year">${item.year} // ${item.cat.toUpperCase()}</span>
        <h3 class="serif-text">${item.title}</h3>
        <p>${item.desc}</p>
      </div>
    `;
    card.addEventListener("click", () => openLightbox(item));
    container.appendChild(card);
  });
}

function openLightbox(item) {
  const portal = document.getElementById("gallery-lightbox");
  portal.innerHTML = `
    <button class="lightbox-close-btn" onclick="closeLightbox()">
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
    </button>
    <div class="lightbox-content glass-panel">
      <div class="lightbox-image-box">
        <img src="${item.img}" alt="${item.title}">
      </div>
      <div class="lightbox-details-box">
        <span class="lightbox-category-tag">${item.cat.toUpperCase()} // ${item.year}</span>
        <h2 class="serif-text">${item.title}</h2>
        <p class="lightbox-desc">${item.desc}</p>
        <span class="lightbox-metadata">Rumah Budaya Watulimo Digital Archiving Exhibit • Code RBW-IMG-${item.year}</span>
      </div>
    </div>
  `;
  portal.classList.remove("hide");
}

window.closeLightbox = function() {
  document.getElementById("gallery-lightbox").classList.add("hide");
};

// ==========================================================================
// 11. CONTACT & INTERACTIVE MAPS & FORM SUBMISSIONS
// ==========================================================================

function initContactAndMap() {
  // Render custom interactive coordinate vector map
  const mapViewport = document.getElementById("location-map-viewport");
  if (mapViewport) {
    mapViewport.innerHTML = `
      <svg viewBox="0 0 400 300" class="map-svg-frame" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="oceanGrad" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stop-color="#121820" />
            <stop offset="100%" stop-color="#0a0807" />
          </radialGradient>
        </defs>
        <!-- Background coordinate grid represent coastal ocean -->
        <rect width="100%" height="100%" fill="url(#oceanGrad)" />
        <path d="M 0,250 Q 150,220 280,240 T 400,280 L 400,300 L 0,300 Z" fill="#182c18" opacity="0.3" /> <!-- Coast outline -->
        
        <!-- Grid overlay lines -->
        <line x1="50" y1="0" x2="50" y2="300" stroke="rgba(200, 164, 77, 0.05)" />
        <line x1="150" y1="0" x2="150" y2="300" stroke="rgba(200, 164, 77, 0.05)" />
        <line x1="250" y1="0" x2="250" y2="300" stroke="rgba(200, 164, 77, 0.05)" />
        <line x1="350" y1="0" x2="350" y2="300" stroke="rgba(200, 164, 77, 0.05)" />
        <line x1="0" y1="100" x2="400" y2="100" stroke="rgba(200, 164, 77, 0.05)" />
        <line x1="0" y1="200" x2="400" y2="200" stroke="rgba(200, 164, 77, 0.05)" />

        <!-- Roads lines representation -->
        <path d="M 50,0 Q 80,100 120,180 T 260,250" fill="none" stroke="rgba(200, 164, 77, 0.15)" stroke-width="2" />
        <path d="M 0,150 Q 120,130 220,170 T 360,280" fill="none" stroke="rgba(200, 164, 77, 0.1)" stroke-width="1.5" />
        
        <!-- Pulsing Marker for Rumah Budaya Watulimo -->
        <g transform="translate(220, 170)" style="cursor:pointer;" onclick="alert('Rumah Budaya Watulimo\nCoordinates: 8.2709° S, 111.7214° E')">
          <circle r="14" fill="rgba(200, 164, 77, 0.15)">
            <animate attributeName="r" values="8;18;8" dur="3s" repeatCount="indefinite" />
          </circle>
          <circle r="6" fill="var(--accent-maroon)" />
          <circle r="3" fill="var(--color-gold)" />
          <text x="12" y="4" fill="var(--color-gold)" font-family="Cinzel" font-size="8" font-weight="bold">RBW MAIN PENDOPO</text>
        </g>

        <!-- Marker for Pantai Prigi -->
        <g transform="translate(260, 250)">
          <circle r="3" fill="var(--color-gold)" />
          <text x="8" y="2" fill="var(--text-tertiary)" font-size="6">Prigi Traditional Port</text>
        </g>

        <!-- Marker for Pantai Karanggongso -->
        <g transform="translate(360, 280)">
          <circle r="3" fill="var(--color-gold)" />
          <text x="-60" y="-4" fill="var(--text-tertiary)" font-size="6">Karanggongso Beach</text>
        </g>
      </svg>
    `;
  }

  // Render contact messaging form
  const formWrap = document.getElementById("message-form-container");
  if (formWrap) {
    formWrap.innerHTML = `
      <div class="contact-form" id="contact-form-body">
        <h3 class="serif-text" style="color:var(--color-gold); font-size:1.5rem; margin-bottom:10px;">Kirim Pesan Langsung</h3>
        <div class="form-row">
          <label>Nama Anda</label>
          <input type="text" id="msg-name" placeholder="Nama lengkap..." />
        </div>
        <div class="form-row">
          <label>Alamat Email</label>
          <input type="email" id="msg-email" placeholder="name@domain.com" />
        </div>
        <div class="form-row">
          <label>Pesan / Pertanyaan</label>
          <textarea id="msg-body" rows="3" placeholder="Tulis pesan Anda disini..."></textarea>
        </div>
        <button class="btn-primary" onclick="submitContactForm()">Kirim Pesan</button>
      </div>
    `;
  }
}

window.submitContactForm = function() {
  const name = document.getElementById("msg-name").value;
  const email = document.getElementById("msg-email").value;
  const body = document.getElementById("msg-body").value;

  if (!name || !email || !body) {
    alert("Silakan lengkapi seluruh formulir kontak sebelum mengirim.");
    return;
  }

  const container = document.getElementById("message-form-container");
  container.style.opacity = 0;
  
  setTimeout(() => {
    container.innerHTML = `
      <div class="form-success-wrapper">
        <span class="success-icon-spin">✉️</span>
        <h4 class="serif-text" style="font-size:1.6rem; color:var(--text-primary);">Pesan Terkirim</h4>
        <p style="font-size:0.88rem; color:var(--text-secondary); line-height:1.5;">Terima kasih, <strong>${name}</strong>. Pesan Anda telah diteruskan ke sekretaris kebudayaan kami. Tanggapan tertulis akan dikirimkan ke <em>${email}</em>.</p>
      </div>
    `;
    container.style.opacity = 1;
  }, 300);
};

// ==========================================================================
// 12. GLOBAL CONTROLS & COMPACT SEARCH OVERLAY
// ==========================================================================

function initGlobalControls() {
  // Mobile drawer panel toggle
  const toggleBtn = document.getElementById("mobile-menu-toggle-btn");
  const overlayPanel = document.getElementById("mobile-nav-overlay-panel");
  const menuIcon = document.getElementById("mobile-menu-icon");
  const closeIcon = document.getElementById("mobile-close-icon");

  toggleBtn.addEventListener("click", () => {
    const isHidden = overlayPanel.classList.contains("hide");
    if (isHidden) {
      overlayPanel.classList.remove("hide");
      menuIcon.classList.add("hide");
      closeIcon.classList.remove("hide");
    } else {
      overlayPanel.classList.add("hide");
      menuIcon.classList.remove("hide");
      closeIcon.classList.add("hide");
    }
  });

  // Mobile navigation anchor close helper
  overlayPanel.querySelectorAll("a").forEach(anchor => {
    anchor.addEventListener("click", () => {
      overlayPanel.classList.add("hide");
      menuIcon.classList.remove("hide");
      closeIcon.classList.add("hide");
    });
  });

  // Smart Search Trigger Click
  const searchModal = document.getElementById("search-overlay-panel");
  document.getElementById("search-trigger-btn").addEventListener("click", () => {
    searchModal.classList.remove("hide");
    document.getElementById("smart-search-input").focus();
  });
  
  document.getElementById("search-close-btn").addEventListener("click", () => {
    searchModal.classList.add("hide");
  });

  // Bind Smart Search input change
  const searchInput = document.getElementById("smart-search-input");
  const resultsViewport = document.getElementById("search-results-viewport");
  const resultsList = document.getElementById("search-results-list");

  searchInput.addEventListener("input", (e) => {
    const query = e.target.value.toLowerCase().trim();
    if (!query) {
      resultsViewport.classList.add("hide");
      resultsList.innerHTML = "";
      return;
    }

    resultsViewport.classList.remove("hide");
    resultsList.innerHTML = "";

    let matches = [];

    // Search inside cultural units
    culturalUnits.forEach(u => {
      if (u.name.toLowerCase().includes(query) || u.desc.toLowerCase().includes(query)) {
        matches.push({ type: "Unit Budaya", label: u.name, link: "#units" });
      }
    });

    // Search inside milestones
    milestones.forEach(m => {
      if (m.title.toLowerCase().includes(query) || m.desc.toLowerCase().includes(query) || m.year.includes(query)) {
        matches.push({ type: `Babad ${m.year}`, label: m.title, link: "#history" });
      }
    });

    // Search inside profiles
    Object.keys(orgStructureData).forEach(layer => {
      orgStructureData[layer].forEach(p => {
        if (p.name.toLowerCase().includes(query) || p.bio.toLowerCase().includes(query)) {
          matches.push({ type: `Pengurus - ${p.role}`, label: p.name, link: `#profiles` });
        }
      });
    });

    if (matches.length === 0) {
      resultsList.innerHTML = `<span style="font-size:0.85rem; color:var(--text-tertiary);">No archives found for query "${query}"</span>`;
      return;
    }

    // Render matches
    matches.slice(0, 5).forEach(m => {
      const btn = document.createElement("a");
      btn.className = "result-link";
      btn.href = m.link;
      btn.innerHTML = `
        <span style="font-size:0.7rem; color:var(--color-gold); font-weight:600; text-transform:uppercase;">[${m.type}]</span>
        <span style="font-size:0.9rem;">${m.label}</span>
      `;
      btn.addEventListener("click", () => {
        searchModal.classList.add("hide");
        if (m.link === "#profiles") {
          // If it was a profile, make sure it is selected in tree
          const matchProfile = orgStructureData.penanggungJawab.concat(orgStructureData.dewanPenasehat, orgStructureData.pengurusInti, orgStructureData.dewanAdat).find(p => p.name === m.label);
          if (matchProfile) {
            // Expand adat row if they clicked one of its members
            if (orgStructureData.dewanAdat.some(p => p.id === matchProfile.id)) {
              document.querySelectorAll(".adat-row-node").forEach(el => el.classList.remove("hide"));
            }
            selectProfileNode(matchProfile.id);
          }
        }
      });
      resultsList.appendChild(btn);
    });
  });

  // QR Modal triggers
  const qrModal = document.getElementById("qr-overlay-panel");
  document.getElementById("qr-trigger-btn").addEventListener("click", () => {
    qrModal.classList.remove("hide");
  });
  document.getElementById("qr-close-btn").addEventListener("click", () => {
    qrModal.classList.add("hide");
  });

  // Floating Back to top arrow
  const btt = document.getElementById("back-to-top-trigger");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 400) {
      btt.classList.remove("hide");
    } else {
      btt.classList.add("hide");
    }
    
    // Header Scroll Shrink toggle
    const navbar = document.querySelector(".navbar-container");
    if (navbar) {
      if (window.scrollY > 50) {
        navbar.classList.add("shrunk");
      } else {
        navbar.classList.remove("shrunk");
      }
    }
  });
  
  btt.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  // PDF Download Trigger
  document.getElementById("download-profile-btn").addEventListener("click", () => {
    compilePrintablePDF();
  });

  // Loading Screen Fade-out on load
  window.addEventListener("load", () => {
    const loader = document.getElementById("loading-screen");
    if (loader) {
      loader.classList.add("fade-out");
      setTimeout(() => loader.remove(), 1000);
    }
  });
}

function compilePrintablePDF() {
  const tooltip = document.getElementById("download-tooltip");
  tooltip.classList.remove("hide");

  // Compile full company profile texts dynamically into printable wrapper
  const container = document.getElementById("printable-company-profile");
  
  // Format dates
  const today = new Date().toLocaleDateString("id-ID", { day: "numeric", month: "long", year: "numeric" });
  
  let contentHTML = `
    <div style="text-align:center; margin-bottom: 20px;">
      <img src="logo.png" alt="Logo" style="height: 120px; filter: grayscale(100%);" />
    </div>
    <h1>LAPORAN PROFIL PERUSAHAAN</h1>
    <h2 style="text-align:center;">RUMAH BUDAYA WATULIMO</h2>
    <p style="text-align:center; font-style:italic;">Dibuat secara otomatis pada tanggal ${today}</p>
    
    <h2>1. Deskripsi Umum</h2>
    <p>Rumah Budaya Watulimo merupakan pusat pelestarian, dokumentasi sejarah, dan pengajaran kearifan lokal Jaranan Turonggo Yakso, Karawitan, Wayang Kulit, Seni Pesisiran, dan Batik Pesisir di Kecamatan Watulimo, Trenggalek.</p>
    
    <h2>2. Babad Sejarah Desa & Milestone Rumah Budaya</h2>
    <p>Desa Watulimo berawal dari legenda Sela Gangsal (lima batu pembatas spiritual Jawa). Sebagai wilayah cagar adat pesisir, Rumah Budaya didirikan tahun 2017 untuk melestarikan keaslian tari Jaranan Turonggo Yakso dan gending-gending kelautan.</p>
    <ul>
  `;
  milestones.forEach(m => {
    contentHTML += `<li><strong>Tahun ${m.year} - ${m.title}:</strong> ${m.desc}</li>`;
  });
  contentHTML += `
    </ul>
    
    <h2>3. Bagan Struktur Pengurus Inti</h2>
    <ul>
  `;
  orgStructureData.penanggungJawab.forEach(p => {
    contentHTML += `<li><strong>${p.role}:</strong> ${p.name} (Dedikasi: ${p.dedication})</li>`;
  });
  orgStructureData.dewanPenasehat.forEach(p => {
    contentHTML += `<li><strong>${p.role}:</strong> ${p.name} (Dedikasi: ${p.dedication})</li>`;
  });
  orgStructureData.pengurusInti.forEach(p => {
    contentHTML += `<li><strong>${p.role}:</strong> ${p.name} (Dedikasi: ${p.dedication})</li>`;
  });
  contentHTML += `
    </ul>

    <h2>4. 10 Bidang Unit Kebudayaan</h2>
    <ul>
  `;
  culturalUnits.forEach(u => {
    contentHTML += `<li><strong>Unit ${u.name}:</strong> Instruktur: ${u.instructor} | Anggota: ${u.members} | Jadwal: ${u.schedule} | Deskripsi: ${u.desc}</li>`;
  });
  contentHTML += `
    </ul>

    <h2>5. Kontak & Lokasi Resmi</h2>
    <p><strong>Alamat:</strong> Jl. Raya Bandung Prigi Rumah Budaya Watulimo, Kec. Watulimo, Trenggalek, Jawa Timur 66382.</p>
    <p><strong>Narahubung:</strong> Sudewo (+62 813-3130-6689) | Andri (+62 858-9546-5155)</p>
    <p><strong>Jam Kerja:</strong> Senin - Minggu, 08.00 - 16.00 WIB</p>
  `;

  container.innerHTML = contentHTML;

  setTimeout(() => {
    tooltip.classList.add("hide");
    window.print();
  }, 1000);
}
