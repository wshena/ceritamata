export const NavbarLinks:NavbarLinksProps[] = [
  {
    label: 'Our Yogya Beautiful Tourism Story',
    sublinks: [
      {label: 'The Heartbeat of Yogya', link: '#'},
      {label: 'A Canvas of Time', link: '#'},
      {label: `Through Traveler's Eyes`, link: '#'},
      {label: 'Listen to the Whispers', link: '#'},
    ]
  },
  {
    label: 'Specialties for You',
    sublinks: [
      {label: 'For the Cultural Soul', link: '#'},
      {label: 'For the Adventurous Spirit', link: '#'},
      {label: `For the Curious Palate`, link: '#'},
      {label: 'For the Artistic Heart', link: '#'},
    ]
  },
  {
    label: 'Contact our Personal si Kelana',
    sublinks: [
      {label: 'Meet Your Friend, Kelana', link: '#'},
      {label: 'Share Your Dream with Kelana', link: '#'},
      {label: `Let Kelana Guide Your Steps`, link: '#'},
      {label: 'A Whisper Away', link: '#'},
      {label: `Kelana's Little Black Book`, link: '#'},
    ]
  },
  {
    label: 'Who are Kala Kelana',
    sublinks: [
      {label: 'The Eyes Behind the Stories', link: '/the-eyes-behind-the-stories'},
      {label: 'Pages From Our Diary', link: '#'},
      {label: `Lens of Wonder`, link: '#'},
      {label: 'Sound of the Streets', link: '#'},
      {label: 'Join Our Journey', link: '#'},
    ]
  }
]

export const ExperienceHighlights = [
  {
    id: 1,
    title:"Yogya Food & Culinary",
    paragraf:"Experience the authentic taste of Yogyakarta",
    image:"/images/jangan-ndeso.jpg",
    showBadge:true,
    badgeText:"Featured",
    dimension:"w-70 md:w-82 lg:w-110 xl:w-140 h-50 md:h-90"
  },
  {
    id: 2,
    title:"Beaches",
    image:"/images/semi-private-beach/semi-private-beach5.jpeg",
    dimension:"w-full md:w-40 lg:w-53 xl:w-65 h-40",
  },
  {
    id: 3,
    title:"Adventure",
    image:"/images/cave-jomblang/cave-jomblang-6.jpeg",
    dimension:"w-full md:w-40 lg:w-53 xl:w-65 h-40",
  },
  {
    id: 4,
    title:"Temples & Heritage",
    image:"/images/adat-pantai-ngobaran/adat-pantai-ngobaran-3.jpeg",
    dimension:"w-full md:w-40 lg:w-53 xl:w-65 h-40",
  },
  {
    id: 5,
    title:"Palaces & Museums",
    image:"/images/baju-adat-jawa/adat-jawa-3.jpeg",
    dimension:"w-full md:w-40 lg:w-53 xl:w-65 h-40",
  },
  {
    id: 6,
    title:"Festivals & Events",
    paragraf:"Experience the festive spirit of Yogyakarta",
    image:"/images/vw-safari-borobudur/vw-safari-borobudur-1.jpeg",
    showBadge:true,
    badgeText:"Popular",
    dimension:"w-70 md:w-82 lg:w-110 xl:w-140 h-50 md:h-90"
  }
]

export const SpotlightItems = [
    {
      id: 1,
      image: "/images/malioboro.jpg",
      title: "Malioboro",
      paragraf: "Sobat Pesona pastinya sudah tidak asing kan dengan Candi Borobudur? Terletak di Kabupaten Magelang, Jawa Tengah, candi yang sangat megah dan rupawan ini telah dikenal oleh wisatawan lokal maupun mancanegara sebagai kuil Buddha terbesar di dunia.",
      href: "#"
    },
    {
      id: 2,
      image: "/images/borobudur_banner.webp",
      title: "Candi Borobudur",
      paragraf: "Candi Borobudur memiliki luas sekitar 2500 meter persegi, dengan panjang 121,66 meter, lebar 121,38 meter, dan tinggi yang membuatnya menjadi salah satu keajaiban dunia.",
      href: "#"
    },
    {
      id: 3,
      image: "/images/keraton.jpg",
      title: "Keraton Yogyakarta",
      paragraf: "Keraton Yogyakarta adalah istana resmi Kesultanan Yogyakarta yang terletak di pusat kota Yogyakarta. Keraton ini didirikan oleh Sri Sultan Hamengkubuwono I pada tahun 1755.",
      href: "#"
    },
    {
      id: 4,
      image: "/images/gudeg.jpg",
      title: "Gudeg Yogya",
      paragraf: "Gudeg adalah makanan khas Yogyakarta yang terbuat dari nangka muda yang dimasak dengan santan. Makanan ini memiliki rasa manis dan gurih yang khas.",
      href: "#"
    },
    {
      id: 5,
      image: "/images/pantai-mesra/pantai-mesra-1.jpeg",
      title: "Pantai Mesra",
      paragraf: "Pantai Mesra adalah pantai yang terletak di Gunungkidul, Yogyakarta. Pantai ini terkenal dengan kawasan pantai yang bersih, deburan ombak yang menerpa karang, dan taman indah dengan rerumputan hijau.",
      href: "#"
    }
  ]

export const JogjaTourPackages: TourPackage[] = [
  {
    id: "JOGJA-POETIC-01",
    name: "Epik Budaya: Jejak-jejak Abadi (Ilustrasi: Ngobaran)",
    image: "/images/adat-pantai-ngobaran/adat-pantai-ngobaran-4.jpeg",
    subtitle: "Sebuah Perjalanan Melalui Lembaran Sejarah & Rasa",
    description: "Paket eksklusif untuk jiwa yang ingin menyelami Yogya paling hakiki. Dari candi yang berdialog dengan fajar hingga sentuhan tangan pembatik yang sabar, setiap momen adalah puisi yang terwujud.",
    
    price: {
      perPerson: 2850000,
      groupDiscount: 2600000, // untuk grup 4+ orang
      includes: [
        "Akomodasi boutique hotel 3 malam",
        "Transportasi pribadi dengan sopir-pemandu",
        "Semua tiket masuk dan donasi situs budaya",
        "3 workshop seni & kuliner",
        "Sarapan dan 5 kali makan kurasi khusus",
        "Asuransi perjalanan",
        "Si Tama sebagai travel concierge selama 24 jam"
      ],
      excludes: [
        "Tiket pesawat ke/dari Jogja",
        "Pengeluaran pribadi dan souvenir",
        "Makan di luar itinerary"
      ]
    },
    
    duration: {
      days: 4,
      nights: 3,
      dailySchedule: [
        "Hari 1: Penyambutan & Penyelarasan - Ngobrol santai dengan Si Tama di angkringan legendaris, check-in, ramah-tamah budaya",
        "Hari 2: Dialog dengan Abadi - Borobudur saat fajar, workshop membatik di rumah maestro, pertunjukan Ramayana di Prambanan",
        "Hari 3: Jejak-jejak Istimewa - Tur Kraton dengan penutur sejarah, workshop membuat keramik Kasongan, malam di Alun-alun Kidul",
        "Hari 4: Kenangan yang Terukir - Kelas memasak gudeg tradisional, berbelanja kisah di Beringharjo, perpisahan dengan doa"
      ]
    },
    
    transportation: {
      type: "Mobil Pribadi Eksklusif",
      description: "Mobil MPV nyaman dengan sopir yang juga adalah penutur cerita lokal. Dilengkapi air mineral, WiFi, dan pemandu audio tentang sejarah tempat yang dikunjungi.",
      capacity: 6
    },
    
    accommodation: {
      type: "Boutique Heritage Stay",
      description: "Penginapan bergaya Jawa kontemporer di kawasan budaya. Setiap kamar memiliki cerita dan ornamen tradisional dengan fasilitas modern.",
      specialFeature: "Terbuka ke taman dalam dengan kolam ikan dan pagelaran musik gamelan setiap sore"
    },
    
    highlights: [
      "Menyaksikan Borobudur bangun dari tidur bersama pendeta Buddha",
      "Belajar membatik dari tangan ketiga generasi maestro",
      "Makan malam privat di pelataran Candi Prambanan",
      "Menemukan filosofi hidup dari penjaga Kraton",
      "Membuat keramik sendiri di Kasongan sebagai kenangan abadi"
    ],
    
    inclusions: [
      "Welcome kit eksklusif (buku harian perjalanan, selempang batik, map heritage)",
      "Sesi foto profesional di 3 lokasi ikonik",
      "Akses ke komunitas lokal dan pertemuan dengan seniman",
      "Buku panduan 'Jogja dalam Puisi' edisi terbatas",
      "Konfirmasi prioritas untuk acara budaya langka"
    ],
    
    themeTags: ["Budaya Mendalam", "Warisan UNESCO", "Pengalaman Sensorik", "Akomodasi Kurasi"],
    recommendedFor: ["Pencinta sejarah", "Pasangan yang mencari pengalaman bermakna", "Fotografer budaya", "Traveler dewasa yang menghargai ketenangan"],
    
    personalNoteFromTama: "Paket ini adalah surat cinta saya untuk Jogja yang paling dalam. Kita tidak hanya akan mengunjungi tempat, tetapi akan berdialog dengan jiwa-jiwanya. Siapkan hati, bukan hanya kamera."
  },
  
  {
    id: "JOGJA-POETIC-02",
    name: "Simfoni Alam: Nafas Gunung & Bisik Goa",
    image: "/images/cave-jomblang/cave-jomblang-2.jpeg",
    subtitle: "Petualangan untuk Jiwa yang Merindu pada Liarnya Bumi",
    description: "Untuk mereka yang percaya bahwa keindahan sejati ada di jalan yang belum sepenuhnya terpetakan. Dari puncak gunung api purba hingga kedalaman perut bumi, paket ini adalah ode untuk alam Jogja.",
    
    price: {
      perPerson: 2250000,
      groupDiscount: 2050000,
      includes: [
        "Penginapan glamping 2 malam",
        "Jeep adventure dan peralatan caving",
        "Pemandu gunung bersertifikat",
        "Semua perlengkapan keselamatan",
        "Semua makan selama ekspedisi",
        "Dokumentasi foto dan video petualangan",
        "First aid kit dan emergency support"
      ],
      excludes: [
        "Peralatan pribadi (sepatu hiking, dll)",
        "Tip untuk pemandu dan porter",
        "Pengeluaran di luar aktivitas petualangan"
      ]
    },
    
    duration: {
      days: 3,
      nights: 2,
      dailySchedule: [
        "Hari 1: Menyatu dengan Tanah - Trekking ke Puncak Gunung Api Purba Nglanggeran, sunset meditation, malam di glamping dengan cerita bintang",
        "Hari 2: Menyelami Rahasia Bumi - Ekspedisi Goa Jomblang (cahaya surgawi), susur sungai bawah tanah, api unggun dengan cerita rakyat setempat",
        "Hari 3: Mengambil Napas - Bersepeda di antara sawah dan bukit kapur, visit ke desa organik, penutupan dengan teh herbal lokal"
      ]
    },
    
    transportation: {
      type: "Jeep 4x4 & Kendaraan Adventure",
      description: "Jeep terbuka untuk pengalaman maksimal, dilengkapi dengan peralatan pendakian dan caving profesional.",
      capacity: 4
    },
    
    accommodation: {
      type: "Luxury Glamping",
      description: "Kemah mewah dengan kasur nyaman, listrik, dan kamar mandi pribadi. Terletak di tepi hutan dengan pemandangan langsung ke lembah.",
      specialFeature: "Atap tenda transparan untuk pengamatan bintang dan bangun dengan kabut pagi"
    },
    
    highlights: [
      "Mendaki Gunung Api Purba Nglanggeran saat matahari terbenam",
      "Menyaksikan 'cahaya surgawi' di Goa Jomblang dari ketinggian",
      "Menyusuri sungai bawah tanah dengan penerangan kepala",
      "Meditasi pagi di bukit kapur dengan pemandangan 360°",
      "Makan malam di bawah kanopi bintang dengan masakan gunung"
    ],
    
    inclusions: [
      "Sertifikat petualangan 'Penakluk Dua Dunia' (gunung & goa)",
      "Goodie bag adventure (botol tumbler, buff, buku lapangan)",
      "Dokumentasi profesional selama kegiatan ekstrem",
      "Cenderamata batu dari dasar goa",
      "Konsultasi pasca-perjalanan untuk petualangan berikutnya"
    ],
    
    themeTags: ["Petualangan Ekstrem", "Ekowisata", "Fotografi Alam", "Koneksi dengan Bumi"],
    recommendedFor: ["Backpacker berpengalaman", "Pasangan aktif", "Kelompok pencari tantangan", "Pecinta fotografi alam"],
    
    personalNoteFromTama: "Alam Jogja adalah guru yang paling sabar. Paket ini akan menguji fisik, tetapi akan memulihkan jiwa. Saya akan ada di sana, bukan hanya sebagai pemandu, tapi sebagai teman yang sama-sama kagum."
  },
  
  {
    id: "JOGJA-POETIC-03",
    name: "Palet Rasa: Symphony Lidah & Cerita Dapur",
    image: "/images/food.jpg",
    subtitle: "Perjalanan Gastronomi Melalui Lorong Waktu & Rasa",
    description: "Jogja dimaknai bukan hanya dengan mata, tetapi terutama dengan lidah. Dari gudeg yang dimasak 8 jam hingga kopi di beranda musala, setiap gigitan adalah bab dalam buku sejarah kuliner yang hidup.",
    
    price: {
      perPerson: 1850000,
      groupDiscount: 1650000,
      includes: [
        "Penginapan gaya heritage di pusat kota 2 malam",
        "Tur kuliner ke 15+ tempat makan otentik",
        "3 kelas memasak dengan ahli waris resep",
        "Semua biaya makanan dan minuman dalam itinerary",
        "Transportasi tur khusus kuliner (becak dan van)",
        "Food journal eksklusif",
        "Panduan kuliner cetak dengan peta rahasia"
      ],
      excludes: [
        "Makan di luar daftar kurasi",
        "Minuman beralkohol",
        "Belanja bahan makanan untuk dibawa pulang"
      ]
    },
    
    duration: {
      days: 3,
      nights: 2,
      dailySchedule: [
        "Hari 1: Fondasi Rasa - Tur angkringan legendaris, demo pembuatan gudeg 8 jam, makan malam di rumah abdi dalem Kraton",
        "Hari 2: Eksplorasi Tekstur - Pasar Beringharjo pagi-pagi, kelas membuat sate klatak dan wedang uwuh, tur kedai kopi indie dan toko kue tradisional",
        "Hari 3: Warisan di Ujung Lidah - Visit ke desa pembuat tempe dan tahu, kelas membuat jajanan pasar, makan perpisahan dengan rantang lengkap"
      ]
    },
    
    transportation: {
      type: "Becak Hias & Van Kuliner",
      description: "Kombinasi becak yang dihias khusus untuk pengalaman nostalgia dan van modern dengan pendingin untuk bahan makanan segar.",
      capacity: 8
    },
    
    accommodation: {
      type: "Heritage Homestay",
      description: "Rumah Jawa kuno yang diubah menjadi penginapan nyata di dalam kompleks keluarga. Setiap kamar memiliki akses ke dapur bersama untuk eksperimen rasa.",
      specialFeature: "Akses ke dapur keluarga untuk sesi memasak informal dan perpustakaan resep turun-temurun"
    },
    
    highlights: [
      "Menyaksikan proses sakral pembuatan gudeg di kuali besar",
      "Makan sate klatak di bengkel pembuatnya sambil mendengar kisah asal-usul",
      "Tur pasar tradisional dengan ahli kuliner lokal",
      "Membuat wedang uwuh dengan resep rahasia keluarga",
      "Mencicipi kopi yang diseduh dengan filosofi Jawa di kedai tersembunyi"
    ],
    
    inclusions: [
      "Apron dan peralatan memasak pribadi selama kelas",
      "Buku resep 'Rahasia Dapur Jogja' edisi terbatas",
      "Goodie bag kuliner (bumbu racikan, gula aren, cetakan kue)",
      "Sertifikat 'Pencicip Terverifikasi Masakan Jogja'",
      "Keanggotaan komunitas kuliner online eksklusif"
    ],
    
    themeTags: ["Gastronomi Mendalam", "Kelas Memasak", "Wisata Pasar", "Warisan Kuliner"],
    recommendedFor: ["Foodies sejati", "Pasangan yang bonding lewat masak", "Blogger kuliner", "Pelancong yang ingin membawa pulang skill"],
    
    personalNoteFromTama: "Makanan adalah memori yang bisa dicicip. Paket ini adalah undangan ke dapur-dapur rahasia Jogja, tempat cerita dan rempah berpadu. Datanglah dengan perut kosong dan hati terbuka."
  }
];

export const JogjaArticles = [
  {
    id: "ART-JOGJA-001",
    title: "Bisik Pasir dan Rindu di Semi Private Beach",
    subtitle: "Di Mana Lautan Bercerita Tentang Letting Go dan Sunset yang Tak Pernah Sama",
    date: "15 Maret 2024",
    image: "/images/semi-private-beach/semi-private-beach4.jpeg",
    images: [
      '/images/semi-private-beach/semi-private-beach1.jpeg',
      '/images/semi-private-beach/semi-private-beach2.jpeg',
      '/images/semi-private-beach/semi-private-beach3.jpeg',
      '/images/semi-private-beach/semi-private-beach4.jpeg',
      '/images/semi-private-beach/semi-private-beach5.jpeg',
      '/images/semi-private-beach/semi-private-beach6.jpeg'
    ],
    category: "Pantai & Pesisir",
    readingTime: "6 menit",
    author: "Cerita Mata",
    location: {
      name: "Pantai Mesra, Gunungkidul",
      coordinates: "-8.1655, 110.6002",
      distanceFromCity: "65 km dari pusat kota (≈1.5 jam)"
    },
    featuredQuote: "Laut tak pernah meminta maaf karena pasang-surutnya. Mungkin kita pun tak perlu.",
    
    content: `
      <p>Ada yang berbeda tentang pasir di Pantai Indrayanti. Bukan hanya putihnya yang memikat, tetapi caranya menyimpan jejak—jejak kaki yang datang dan pergi, jejak ombak yang selalu kembali, jejak matahari yang setiap sore melukis langit dengan palet yang tak pernah persis sama.</p>
      
      <h3>Perjalanan Menuju Diam</h3>
      <p>Jalan menuju sini adalah bagian dari meditasi. Setelah melewati bukit-bukit kapur yang tandus, tiba-tiba biru samudera menyapa. Perubahan itu drastis, seperti halaman baru dalam buku harian alam.</p>
      
      <h3>Sunset: Pertunjukan Ephemeral</h3>
      <p>Puncak pengalaman di Indrayanti adalah senja. Bukan sekadar matahari terbenam, tetapi <em>transisi</em>. Warna berubah dari emas menjadi jingga, lalu merah, ungu, dan akhirnya biru kelam. Di sini, sunset bukan tontonan, melainkan pengalaman sensorik penuh. Suara ombak menjadi soundtrack, angin laut menjadi selimut, dan pasir di antara jari menjadi pengingat akan keniscayaan perubahan.</p>
      
      <h3>Warung-warung Penyimpan Cerita</h3>
      <p>Di sepanjang pantai, deretan warung seafood sederhana menawarkan lebih dari sekadar ikan bakar. Masing-masing memiliki karakter. Ada yang kursinya langsung tertanam di pasir, ada yang beratap daun kelapa. Pemiliknya—sebagian nelayan, sebagian petani yang beralih profesi—selalu punya cerita tentang laut yang memberi dan mengambil.</p>
      
      <h3>Pantai untuk Mereka yang...</h3>
      <ul>
        <li><strong>Ingin lari dari keramaian</strong>: Indrayanti relatif lebih sepi daripada Parangtritis</li>
        <li><strong>Pencari sunset sempurna</strong>: Sudut barat pantai memberikan view tak terhalang</li>
        <li><strong>Penyuka fotografi minimalis</strong>: Perahu nelayan yang terdampar menjadi objek fotogenik</li>
        <li><strong>Ingin merenung sambil mendengar simfoni ombak</strong></li>
      </ul>
      
      <h3>Tips dari Cerita Mata</h3>
      <p>Datanglah pada hari kerja jika ingin kesunyian. Bawa alas duduk sendiri jika tak ingin punggung penuh pasir. Dan yang terpenting: <strong>tinggalkan jam tangan</strong>. Biarkan ombak yang menentukan ritme waktumu di sini.</p>
      
      <p>Indrayanti mengajarkan satu hal sederhana: terkadang, keindahan terbesar ada dalam kepasifan—dalam membiarkan diri diam dan diterpa elemen-elemen alam. Seperti pasir yang tak melawan ombak, namun tetap ada, selalu.</p>
    `,
    
    tags: ["pantai", "gunungkidul", "sunset", "meditasi", "fotografi", "laut", "renungan"]
  },
  {
    id: "ART-JOGJA-002",
    title: "Menyelam ke Dalam Rahasia Bumi: Goa Jomblang",
    subtitle: "Sebuah Perjalanan Vertikal Menuju Cahaya Surgawi",
    date: "22 Februari 2024",
    image: "/images/cave-jomblang/cave-jomblang-6.jpeg",
    category: "Gua & Bawah Tanah",
    readingTime: "8 menit",
    author: "Si Tama",
    location: {
      name: "Goa Jomblang, Semanu, Gunungkidul",
      coordinates: "-7.9760, 110.5873",
      distanceFromCity: "50 km dari pusat kota (≈1.5 jam)"
    },
    featuredQuote: "Terkadang, kita harus turun ke dalam kegelapan untuk menemukan cahaya kita sendiri.",
    
    content: `
      <p>Ini bukan wisata biasa. Ini <em>ekspedisi</em>. Goa Jomblang meminta keberanian sebelum keindahan. Dimulai dengan turun vertikal 60 meter dengan sistem single rope technique—tubuhmu menggantung di atas lubang yang menelan cahaya.</p>
      
      <h3>Detik-detik Menegangkan</h3>
      <p>Suara katrol berderit, tali bergoyang, dan perlahan-lahan, dunia atas menjauh. Selama 10-15 menit itu, hanya ada kamu, tali, dan kegelapan yang semakin dalam. Lalu, tiba-tiba: kaki menyentuh dasar. Mata butuh waktu beradaptasi. Dan kemudian kamu melihatnya—hutan purba yang terawetkan.</p>
      
      <h3>"Grunug" yang Hidup Kembali</h3>
      <p>Di dasar goa, ada ekosistem yang terisolasi ribuan tahun. Pakis-pakis raksasa, lumut yang bersinar lembut, udara yang lembab dan kaya oksigen. Ini disebut "grunug"—gua runtuhan yang membentuk taman eden bawah tanah.</p>
      
      <h3>Cahaya Surgawi (Heavenly Light)</h3>
      <p>Berjalan 300 meter melalui lorong basah, kamu sampai di Goa Grubug. Dan di sini, keajaiban terjadi. Pukul 10.00-12.00, matahari tepat di atas, menyorotkan satu pilar cahaya melalui lubang di langit-langit goa. Cahaya itu menembus kabut, menyinari air yang menetes, menciptakan efek yang—maafkan klise ini—surgawi.</p>
      
      <p>Ini momen yang membuat orang diam. Tidak ada yang berbicara. Hanya deru angin di atas dan tetesan air di bawah. Cahaya itu bergerak, berubah bentuk, berinteraksi dengan uap air. Fotografer menyebutnya "God's spotlight".</p>
      
      <h3>Filosofi dari Dalam Bumi</h3>
      <p>Goa Jomblang mengajarkan tentang:
      <ol>
        <li><strong>Trust</strong>: Kamu harus percaya pada tali, peralatan, dan pemandu</li>
        <li><strong>Kesabaran</strong>: Cahaya surgawi hanya muncul di waktu tertentu</li>
        <li><strong>Adaptasi</strong>: Dari terang ke gelap, lalu menemukan terang dalam gelap</li>
        <li><strong>Respect</strong>: Ini ekosistem rapuh; jangan sentuh stalaktit yang butuh ribuan tahun terbentuk</li>
      </ol></p>
      
      <h3>Persiapan yang Diperlukan</h3>
      <ul>
        <li>Kondisi fisik minimal sehat (bukan untuk penderita jantung atau claustrophobia berat)</li>
        <li>Pakaian yang boleh kotor dan sepatu trekking dengan grip baik</li>
        <li>Mental siap untuk gelap total (headlamp disediakan, tapi tetap saja)</li>
        <li>Booking minimal 1 minggu sebelumnya—kuota terbatas untuk menjaga kelestarian</li>
      </ul>
      
      <h3>Catatan dari Tama</h3>
      <p>Saya sudah memandu ratusan orang ke sini, dan reaksi mereka selalu sama: <em>speechless</em>. Bukan karena tak ada kata, tetapi karena kata-kata tak cukup. Jomblang bukan destinasi; dia adalah pengalaman transformatif. Kamu turun sebagai turis, naik sebagai seseorang yang sedikit berbeda.</p>
      
      <p>PS: Bawa perubahan baju lengkap. Kamu akan basah, kotor, dan mungkin sedikit gemetar. Tapi percayalah, itu bagian dari keajaiban.</p>
    `,
    
    tags: ["gua", "petualangan", "bawah tanah", "ekspedisi", "fotografi dramatis", "gunungkidul", "vertikal"]
  },
  {
    id: "ART-JOGJA-003",
    title: "Mengikuti Aliran: Goa Pindul dan Seni Melupakan Waktu",
    subtitle: "Tubing di Sungai yang Mengajarkan Arti Keberangkalan",
    date: "10 April 2024",
    image: "/images/goa-pindul/goa-pindul-3.jpeg",
    category: "Sungai & Air",
    readingTime: "7 menit",
    author: "Cerita Mata",
    location: {
      name: "Sungai Oyo, Wonosari",
      coordinates: "-7.9542, 110.5381",
      distanceFromCity: "40 km dari pusat kota (≈1 jam)"
    },
    featuredQuote: "Sungai tak pernah terburu-buru, namun selalu sampai ke tujuannya. Mungkin kita bisa belajar darinya.",
    
    content: `
      <p>Tubing di Sungai Oyo bukan tentang adrenalin. Ini tentang <em>surrender</em>—menyerahkan diri pada aliran, membiarkan air menentukan kecepatan dan arah. Kamu duduk di ban dalam, kaki terendam air jernih, dan dunia perlahan mengalir bersama kamu.</p>
      
      <h3>Ritme Sungai</h3>
      <p>Air Oyo dingin tapi tidak menggigit. Jernih sampai bisa melihat batu-batu di dasar. Perjalanan dimulai tenang. Kamu mengapung di antara dinding tebing kapur, melihat akar-akar pohon menjuntai seperti rambut raksasa, mendengar burung-burung yang tak terlihat.</p>
      
      <p>Lalu sungai berbelok, kecepatan berubah. Terkadang deras, terkadang hampir diam. Inilah metaforanya: hidup juga begitu. Ada masa-masa deras yang menegangkan, ada masa tenang yang membosankan, dan semuanya bagian dari perjalanan yang sama.</p>
      
      <h3>Pemandu yang Menjadi Sahabat</h3>
      <p>Setiap kelompok didampingi pemandu lokal—biasanya pemuda desa yang mengenal setiap belokan sungai. Mereka bukan hanya menjaga keselamatan, tetapi juga penutur cerita. Tanya tentang masa kecil mereka bermain di sungai ini. Tanya tentang perubahan yang mereka lihat. Mereka akan bercerita sambil sesekali mendorong ban kamu saat terjebak di batu.</p>
      
      <h3>Titik-titik Ajaib Sepanjang Aliran</h3>
      <ul>
        <li><strong>Gua Kelelawar</strong>: Terowongan alami di tebing tempat ribuan kelelawar tinggal</li>
        <li><strong>Jeram Mini</strong>: Cukup untuk menyemprotkan air segar ke wajah, bukan untuk membuat jantung berdebar</li>
        <li><strong>Telaga Biru</strong>: Bagian sungai yang melebar seperti danau kecil, airnya biru kehijauan</li>
        <li><strong>Spring Underwater</strong>: Sumber air tawar yang muncul dari dasar sungai, terasa hangat di antara air dingin</li>
      </ul>
      
      <h3>Meditasi dalam Pergerakan</h3>
      <p>Ini mungkin kontradiksi: bergerak tapi meditatif. Tubing di Oyo adalah kesempatan langka untuk <em>hadir sepenuhnya</em>. Ponsel tak bisa digunakan (kecuali dalam dry bag). Tak ada musik kecuali alam. Kamu hanya ada, di sini, sekarang, dengan sungai.</p>
      
      <blockquote>
        "Di kota, kita sibuk mengisi waktu. Di sini, kita belajar mengosongkannya."
      </blockquote>
      
      <h3>Untuk Siapa Pengalaman Ini?</h3>
      <p><strong>Cocok untuk:</strong> Pasangan yang ingin quality time, keluarga dengan anak remaja, solo traveler yang ingin refleksi, grup kecil yang ingin bonding tanpa gadget.<br>
      <strong>Kurang cocok untuk:</strong> Pencari thrill ekstrem, mereka yang takut air, atau yang ingin aktifitas high-speed.</p>
      
      <h3>Yang Perlu Dibawa</h3>
      <p>Pakaian renang, sandal karet, tabir surya waterproof, dan mental untuk basah kuyup. Serta—ini penting—<strong>keinginan untuk tidak terburu-buru</strong>.</p>
      
      <p>Sungai Oyo tidak akan mengubah hidupmu dalam 2 jam. Tapi dia mungkin akan mengingatkanmu pada sesuatu: bahwa terkadang, cara terbaik untuk maju adalah dengan membiarkan diri terbawa.</p>
    `,
    
    tags: ["sungai", "tubing", "air", "relaksasi", "meditasi", "wonosari", "keluarga", "outdoor"]
  },
  {
    id: "ART-JOGJA-004",
    title: "Festival Ngobaran Yogyakarta: Kota Menjadi Panggung",
    subtitle: "60 Hari di Mana Seni Mengalir di Setiap Sudut Jogja",
    date: "5 Mei 2024",
    image: "/images/adat-pantai-ngobaran/adat-pantai-ngobaran-2.jpeg",
    category: "Event & Festival",
    readingTime: "9 menit",
    author: "Si Tama & Cerita Mata",
    location: {
      name: "Berbagai Lokasi di Yogyakarta",
      coordinates: "Seluruh Kota",
      distanceFromCity: "0 km—ini terjadi di sekitarmu"
    },
    featuredQuote: "Selama dua bulan ini, batas antara penonton dan pemain menghilang. Semua orang menjadi bagian dari pertunjukan.",
    
    content: `
      <p>Bayangkan: Selama 60 hari penuh, kota ini berubah. Jalanan bukan hanya untuk mobil, tetapi untuk parade. Taman bukan hanya untuk duduk, tetapi untuk pertunjukan. Bahkan trotoar pun menjadi galeri. Selamat datang di Festival Kesenian Yogyakarta (FKY)—acara tahunan di mana Jogja mengingatkan dunia (dan dirinya sendiri) bahwa ia adalah ibu kota kebudayaan.</p>
      
      <h3>Bukan Festival Biasa</h3>
      <p>FKY bukan event yang terkunci dalam gedung megah. Ia <em>menyebar</em> seperti jamur setelah hujan. Di sudut Malioboro, ada teatrikal jalanan. Di pendopo Kraton, konser gamelan kontemporer. Di kampung-kampung, workshop seni rupa gratis untuk anak-anak. Di kafe, diskusi sastra sampai larut.</p>
      
      <p>Yang membuat FKY unik adalah demokratisasinya. Tiketnya murah, seringkali gratis. Seniman kelas dunia tampil berdampingan dengan pemula. Penonton bisa memberi tepuk tangan, bisa juga berdialog langsung dengan seniman setelah pertunjukan.</p>
      
      <h3>Highlight yang Tak Boleh Dilewatkan</h3>
      <div class="festival-highlights">
        <div>
          <h4>1. Opening Parade</h4>
          <p>Ribuan seniman berjalan dari Benteng Vredeburg ke Alun-alun. Kostumnya fantastis, musiknya hidup, energinya… listrik murni.</p>
        </div>
        <div>
          <h4>2. Art in Public Space</h4>
          <p>Instalasi seni muncul di tempat tak terduga: di bawah jembatan, di halte bus, di pasar. Seni menjadi bagian dari kehidupan sehari-hari.</p>
        </div>
        <div>
          <h4>3. Kampung-kampung Kreatif</h4>
          <p>Setiap kampung mengangkat tema berbeda. Kampung A jadi desain grafis, Kampung B jadi seni instalasi, Kampung C jadi musik tradisional eksperimental.</p>
        </div>
        <div>
          <h4>4. Midnight Shows</h4>
          <p>Pertunjukan yang dimulai tengah malam—biasanya lebih eksperimental, lebih intim, lebih… berani.</p>
        </div>
      </div>
      
      <h3>Pengalaman Personal Kami</h3>
      <p><strong>Cerita Mata:</strong> "Tahun lalu, saya menemukan pertunjukan butoh (tari Jepang) di gudang tua dekat stasiun. Hanya 20 penonton. Setelah selesai, penarinya—seorang maestro dari Tokyo—duduk bersama kami, minum teh, bercerita tentang gerakan pertama tadi. Itulah FKY: akses yang tak terbayangkan."</p>
      
      <p><strong>Si Tama:</strong> "Saya selalu membawa tamu-tamu saya ke FKY. Bukan ke acara utamanya, tetapi ke <em>sisi-sisinya</em>. Ke diskusi informal di warung kopi. Ke latihan terbuka di sanggar. Di sanalah jiwa festival ini benar-benar terasa."</p>
      
      <h3>Tips Menikmati FKY seperti Lokal</h3>
      <ol>
        <li><strong>Jangan overplan</strong>: Ambil brosur, pilih 2-3 acara yang menarik, lalu biarkan kaki dan rasa penasaran membawamu.</li>
        <li><strong>Naik sepeda atau jalan kaki</strong>: Parkir mobil akan menyiksamu. Kota selama FKY paling baik dijelajahi pelan-pelan.</li>
        <li><strong>Datang lebih awal</strong>: Untuk pertunjukan populer, antrean bisa panjang. Tapi seringkali, obrolan dalam antrean itu bagian dari pengalaman.</li>
        <li><strong>Bicara dengan orang</strong>: Tanyakan pada penjaga loket, penjual makanan, atau penonton lain. Mereka punya rekomendasi terbaik.</li>
        <li><strong>Ikuti akun media sosial FKY</strong>: Jadwal bisa berubah dadakan, ada pop-up events yang tak terdaftar di brosur.</li>
      </ol>
      
      <h3>FKY 2024: Tema "Transisi"</h3>
      <p>Tahun ini, tema festival adalah <em>Transisi</em>—sesuai dengan keadaan dunia pasca-pandemi, perubahan iklim, transformasi digital. Seniman diajak merespon: Bagaimana kita berubah? Apa yang kita pertahankan? Apa artinya menjadi manusia di masa transisi?</p>
      
      <p>Yang pasti: selama Juni-Juli 2024, Jogja akan menjadi laboratorium budaya terbesar di Indonesia. Dan kamu diundang—bukan sebagai penonton pasif, tetapi sebagai partisipan aktif.</p>
      
      <p class="note">Catatan: FKY biasanya diadakan Juni-Juli. Tapi persiapannya sudah terasa sejak April. Cek website resmi untuk konfirmasi tanggal.</p>
    `,
    
    tags: ["festival", "seni", "budaya", "event tahunan", "pertunjukan", "komunitas", "kota", "juni-juli"]
  }
];

export const congratulationsMessages = [
  {
    id: "CONG-001",
    name: "Nina Pertiwi",
    profilePic: "/images/profiles/nina-pertiwi.jpg",
    title: "Travel Blogger & Content Creator",
    organization: "Wanderlust Stories",
    ucapan: "Website yang luar biasa! Desainnya seperti puisi visual yang membawa jiwa Jogja ke layar. Navigasi 'Cerita Mata' dan sentuhan personal 'Si Tama' memberikan pengalaman yang sangat berbeda dari website turisme biasa. Ini bukan sekadar direktori wisata, tapi sebuah undangan untuk mengalami Jogja dengan seluruh indra. Sukses selalu!",
    date: "28 Mei 2024",
    relation: "Kolaborator Konten",
    quote: "Jogja bukan tempat, tapi perasaan—dan website ini berhasil menangkapnya.",
    isFeatured: true,
    socialMedia: {
      platform: "Instagram",
      username: "@nina_wanders"
    }
  },
  {
    id: "CONG-002",
    name: "Budi Santoso",
    profilePic: "/images/profiles/budi-santoso.jpg",
    title: "Pemandu Wisata & Budayawan",
    organization: "Komunitas Pemandu Jogja Asli",
    ucapan: "Sebagai pemandu yang sudah 15 tahun mengenalkan Jogja pada dunia, saya terkesan dengan kedalaman konten website ini. Bukan hanya menampilkan tempat-tempat ikonik, tetapi juga menghidupkan cerita di baliknya. Bagian tentang filosofi batik dan makna di balik arsitektur Kraton sangat akurat. Website ini akan menjadi referensi yang saya rekomendasikan pada tamu-tamu saya.",
    date: "27 Mei 2024",
    relation: "Pakar Budaya Lokal",
    quote: "Wisatawan datang untuk melihat, tapi website ini mengajak mereka untuk memahami.",
    socialMedia: {
      platform: "WhatsApp Group",
      username: "Guide Jogja Community"
    }
  },
  {
    id: "CONG-003",
    name: "Maya Sari",
    profilePic: "/images/profiles/maya-sari.jpg",
    title: "Pemilik Boutique Hotel",
    organization: "Rumah Jawa Heritage Stay",
    ucapan: "Saya menitikkan air mata membaca bagian 'Our Jogja Beautiful Tourism Story'. Akhirnya ada platform yang memahami bahwa Jogja bukan sekadar produk pariwisata, tapi kisah yang harus diceritakan dengan hati. Desainnya elegan, fotografi memukau, dan sudut pandang 'Cerita Mata' memberikan kedalaman yang langka. Website ini akan mengubah cara orang merencanakan perjalanan ke Jogja.",
    date: "29 Mei 2024",
    relation: "Mitra Akomodasi",
    isFeatured: true,
    quote: "Di setiap kamar kami ada cerita, dan website ini tahu bagaimana menceritakannya."
  },
  {
    id: "CONG-004",
    name: "Agung Prabowo",
    profilePic: "/images/profiles/agung-prabowo.jpg",
    title: "Fotografer Dokumenter",
    organization: "Lensa Nusantara",
    ucapan: "Visual storytelling di website ini berada di level yang berbeda. Setiap foto seolah bercerita, setiap scroll adalah perjalanan emosional. Saya khususnya mengapresiasi bagian galeri yang tidak over-edited, menjaga keaslian momen. Konsep 'Specialties for You' dengan kurasi berdasarkan minat personal—brilian! Ini akan menjadi benchmark baru untuk website pariwisata di Indonesia.",
    date: "26 Mei 2024",
    relation: "Fotografer Kolaborator",
    quote: "Kamera menangkap gambar, tapi website ini menangkap jiwa.",
    socialMedia: {
      platform: "500px",
      username: "agung_prabowo_visual"
    }
  },
  {
    id: "CONG-005",
    name: "Sari Dewi",
    profilePic: "/images/profiles/sari-dewi.jpg",
    title: "Penggiat Seni & Founder",
    organization: "Komunitas Batik Tulis Jogja",
    ucapan: "Sebagai pelaku seni yang hidup dari warisan budaya, saya sangat tersentuh dengan cara website ini menghargai dan mempresentasikan kerajinan tradisional. Bukan sebagai komoditas, tapi sebagai living heritage. Penjelasan tentang proses membatik yang dikemas dalam cerita puitis—sempurna! Website ini tidak hanya mempromosikan wisata, tapi juga melestarikan makna. Terima kasih sudah memberikan suara pada seniman lokal.",
    date: "28 Mei 2024",
    relation: "Komunitas Seni Lokal",
    quote: "Setiap goresan canting punya cerita, dan website ini menjadi pena yang menuliskannya.",
    socialMedia: {
      platform: "Facebook Group",
      username: "Batik Jogja Artisans"
    }
  },
  {
    id: "CONG-006",
    name: "Rendra Wijaya",
    profilePic: "/images/profiles/rendra-wijaya.jpg",
    title: "Digital Nomad & Travel Writer",
    organization: "Remote Indonesia",
    ucapan: "Saya sudah mengunjungi 40+ negara dan melihat ratusan website turisme, tapi yang ini spesial. Voice dan tone-nya konsisten dari halaman pertama sampai terakhir—personal, puitis, namun informatif. UX-nya luar biasa; saya bisa menemukan informasi praktis tanpa kehilangan 'rasa' Jogja. Fitur konsultasi dengan 'Si Tama' adalah sentuhan genius yang membuat perbedaan besar. Ini akan menjadi contoh studi kasus yang bagus untuk tourism marketing.",
    date: "30 Mei 2024",
    relation: "Travel Enthusiast",
    isFeatured: true,
    quote: "Website yang baik memberikan informasi, website yang hebat memberikan pengalaman.",
    socialMedia: {
      platform: "LinkedIn",
      username: "rendra-wijaya-travel"
    }
  }
];