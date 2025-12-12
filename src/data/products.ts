// This will be populated later after products are defined
const __imageMap: Record<string, string> = {}

export const products = [
  // KERAJINAN (15 produk)
  {
    id: '1',
    name: 'Kain Batik Khas Kalimantan',
    category: 'Kerajinan',
    price: 'Rp 250.000',
    image: 'https://images.unsplash.com/photo-1575277340549-70f2441dee09?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxJbmRvbmVzaWFuJTIwaGFuZGljcmFmdCUyMGJhdGlrfGVufDF8fHx8MTc2MDYwMjY5Mnww&ixlib=rb-4.1.0&q=80&w=1080',
    umkm: 'Batik Borneo Asri',
    description: 'Kain batik premium dengan motif khas Kalimantan. Dibuat dengan pewarna alami dan teknik tradisional yang telah diwariskan turun-temurun. Cocok untuk berbagai acara formal.',
    contact: {
      phone: '+62 812 3456 7890',
      email: 'batikborneo@gmail.com',
      address: 'Jl. MT Haryono No. 45, Balikpapan Tengah',
    },
  },
  {
    id: '7',
    name: 'Anyaman Bambu Dekoratif',
    category: 'Kerajinan',
    price: 'Rp 125.000',
    image: 'https://images.unsplash.com/photo-1611269154421-4e27233ac5c7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080',
    umkm: 'Bambu Kreasi',
    description: 'Anyaman bambu handmade untuk dekorasi rumah. Ramah lingkungan dan tahan lama.',
    contact: {
      phone: '+62 818 2345 6789',
      email: 'bambukreasi@gmail.com',
      address: 'Jl. Sepinggan No. 67, Balikpapan Timur',
    },
  },
  {
    id: '8',
    name: 'Ukiran Kayu Dayak',
    category: 'Kerajinan',
    price: 'Rp 450.000',
    image: 'https://images.unsplash.com/photo-1565538810643-b5bdb714032a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080',
    umkm: 'Seni Ukir Nusantara',
    description: 'Ukiran kayu dengan motif khas suku Dayak. Dikerjakan oleh pengrajin berpengalaman.',
    contact: {
      phone: '+62 819 3456 7890',
      email: 'seniukir@gmail.com',
      address: 'Jl. Ahmad Yani No. 23, Balikpapan Utara',
    },
  },
  {
    id: '9',
    name: 'Keramik Artistik',
    category: 'Kerajinan',
    price: 'Rp 175.000',
    image: 'https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080',
    umkm: 'Keramik Borneo',
    description: 'Keramik handmade dengan desain artistik modern dan tradisional.',
    contact: {
      phone: '+62 820 4567 8901',
      email: 'keramikborneo@gmail.com',
      address: 'Jl. Jenderal Sudirman No. 89, Balikpapan Selatan',
    },
  },
  {
    id: '10',
    name: 'Tenun Tradisional',
    category: 'Kerajinan',
    price: 'Rp 350.000',
    image: 'https://images.unsplash.com/photo-1610701596007-11502861dcfa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080',
    umkm: 'Tenun Heritage',
    description: 'Kain tenun dengan motif tradisional Kalimantan. Proses pengerjaan manual.',
    contact: {
      phone: '+62 821 5678 9012',
      email: 'tenunheritage@gmail.com',
      address: 'Jl. Soekarno Hatta No. 34, Balikpapan Barat',
    },
  },
  {
    id: '11',
    name: 'Perhiasan Manik-Manik',
    category: 'Kerajinan',
    price: 'Rp 85.000',
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080',
    umkm: 'Manik Cantik',
    description: 'Perhiasan handmade dari manik-manik berkualitas dengan desain etnik modern.',
    contact: {
      phone: '+62 822 6789 0123',
      email: 'manikcantik@gmail.com',
      address: 'Jl. Yos Sudarso No. 56, Balikpapan Tengah',
    },
  },
  {
    id: '12',
    name: 'Topeng Kayu Dayak',
    category: 'Kerajinan',
    price: 'Rp 275.000',
    image: 'https://images.unsplash.com/photo-1582139329536-e7284fece509?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080',
    umkm: 'Topeng Heritage',
    description: 'Topeng kayu dengan motif suku Dayak. Cocok untuk koleksi dan dekorasi.',
    contact: {
      phone: '+62 823 7890 1234',
      email: 'topengheritage@gmail.com',
      address: 'Jl. MT Haryono No. 78, Balikpapan Utara',
    },
  },
  {
    id: '13',
    name: 'Patung Miniatur Kayu',
    category: 'Kerajinan',
    price: 'Rp 150.000',
    image: 'https://images.unsplash.com/photo-1580169980114-ccd0babfa840?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080',
    umkm: 'Patung Artistik',
    description: 'Patung miniatur dari kayu jati dengan detail halus dan finishing sempurna.',
    contact: {
      phone: '+62 824 8901 2345',
      email: 'patungartistik@gmail.com',
      address: 'Jl. Letjen Suprapto No. 90, Balikpapan Timur',
    },
  },
  {
    id: '14',
    name: 'Gelang Rotan Etnik',
    category: 'Kerajinan',
    price: 'Rp 65.000',
    image: 'https://images.unsplash.com/photo-1611652022419-a9419f74343a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080',
    umkm: 'Aksesori Borneo',
    description: 'Gelang anyaman rotan dengan sentuhan etnik Kalimantan. Unik dan stylish.',
    contact: {
      phone: '+62 825 9012 3456',
      email: 'aksesoriborneo@gmail.com',
      address: 'Jl. Ahmad Yani No. 123, Balikpapan Selatan',
    },
  },
  {
    id: '15',
    name: 'Lampu Hias Anyaman',
    category: 'Kerajinan',
    price: 'Rp 195.000',
    image: 'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080',
    umkm: 'Lampu Kreasi',
    description: 'Lampu hias dari anyaman rotan dengan desain modern minimalis.',
    contact: {
      phone: '+62 826 0123 4567',
      email: 'lampukreasi@gmail.com',
      address: 'Jl. Gatot Subroto No. 45, Balikpapan Barat',
    },
  },
  {
    id: '16',
    name: 'Sarung Bantal Batik',
    category: 'Kerajinan',
    price: 'Rp 95.000',
    image: 'https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080',
    umkm: 'Batik Home Decor',
    description: 'Sarung bantal dari kain batik berkualitas. Membuat ruangan lebih estetik.',
    contact: {
      phone: '+62 827 1234 5678',
      email: 'batikhomedecor@gmail.com',
      address: 'Jl. Soekarno Hatta No. 67, Balikpapan Tengah',
    },
  },
  {
    id: '17',
    name: 'Kotak Perhiasan Kayu',
    category: 'Kerajinan',
    price: 'Rp 225.000',
    image: 'https://images.unsplash.com/photo-1564574662330-4f5b0c3984c9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080',
    umkm: 'Woodcraft Borneo',
    description: 'Kotak perhiasan kayu jati dengan ukiran detail. Elegan dan fungsional.',
    contact: {
      phone: '+62 828 2345 6789',
      email: 'woodcraftborneo@gmail.com',
      address: 'Jl. Yos Sudarso No. 78, Balikpapan Utara',
    },
  },
  {
    id: '18',
    name: 'Vas Bunga Keramik',
    category: 'Kerajinan',
    price: 'Rp 145.000',
    image: 'https://images.unsplash.com/photo-1493217465235-252dd9c0d632?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080',
    umkm: 'Keramik Artistik',
    description: 'Vas bunga keramik handmade dengan desain unik dan warna-warna menarik.',
    contact: {
      phone: '+62 829 3456 7890',
      email: 'keramikartistik@gmail.com',
      address: 'Jl. Jenderal Sudirman No. 90, Balikpapan Timur',
    },
  },
  {
    id: '19',
    name: 'Boneka Kain Tradisional',
    category: 'Kerajinan',
    price: 'Rp 115.000',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080',
    umkm: 'Boneka Nusantara',
    description: 'Boneka handmade dari kain dengan kostum tradisional Dayak.',
    contact: {
      phone: '+62 830 4567 8901',
      email: 'bonekanusantara@gmail.com',
      address: 'Jl. MT Haryono No. 34, Balikpapan Selatan',
    },
  },
  {
    id: '20',
    name: 'Talenan Kayu Premium',
    category: 'Kerajinan',
    price: 'Rp 165.000',
    image: 'https://images.unsplash.com/photo-1598346762291-a4ea0a4befa7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080',
    umkm: 'Kitchen Woodcraft',
    description: 'Talenan kayu jati solid dengan finishing food grade. Kuat dan tahan lama.',
    contact: {
      phone: '+62 831 5678 9012',
      email: 'kitchenwoodcraft@gmail.com',
      address: 'Jl. Letjen Suprapto No. 56, Balikpapan Barat',
    },
  },

  // MAKANAN (14 produk)
  {
    id: '2',
    name: 'Kue Kering Tradisional',
    category: 'Makanan',
    price: 'Rp 75.000',
    image: 'https://images.unsplash.com/photo-1758891351134-3ccd9a8c9817?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmFkaXRpb25hbCUyMHNuYWNrcyUyMGNvb2tpZXN8ZW58MXx8fHwxNzYwNjAyNjkyfDA&ixlib=rb-4.1.0&q=80&w=1080',
    umkm: 'Dapur Mama Sari',
    description: 'Kue kering premium dengan resep tradisional yang telah teruji. Tersedia dalam berbagai varian rasa. Tanpa bahan pengawet dan dibuat fresh setiap hari.',
    contact: {
      phone: '+62 813 4567 8901',
      email: 'dapurmama@gmail.com',
      address: 'Jl. Letjen Suprapto No. 12, Balikpapan Utara',
    },
  },
  {
    id: '21',
    name: 'Amplang Ikan Khas Kalimantan',
    category: 'Makanan',
    price: 'Rp 55.000',
    image: 'https://images.unsplash.com/photo-1599490659213-e2b9527bd087?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080',
    umkm: 'Amplang Bahari',
    description: 'Kerupuk amplang dari ikan tenggiri asli. Renyah dan gurih, cocok untuk camilan.',
    contact: {
      phone: '+62 832 6789 0123',
      email: 'amplangbahari@gmail.com',
      address: 'Jl. Yos Sudarso No. 12, Balikpapan Tengah',
    },
  },
  {
    id: '22',
    name: 'Dodol Durian Premium',
    category: 'Makanan',
    price: 'Rp 85.000',
    image: 'https://images.unsplash.com/photo-1587314168485-3236d6710814?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080',
    umkm: 'Dodol Nusantara',
    description: 'Dodol durian dengan bahan durian lokal pilihan. Legit dan lezat.',
    contact: {
      phone: '+62 833 7890 1234',
      email: 'dodolnusantara@gmail.com',
      address: 'Jl. Ahmad Yani No. 45, Balikpapan Utara',
    },
  },
  {
    id: '23',
    name: 'Keripik Pisang Aneka Rasa',
    category: 'Makanan',
    price: 'Rp 35.000',
    image: 'https://images.unsplash.com/photo-1621939514649-280e2ee25f60?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080',
    umkm: 'Keripik Bahagia',
    description: 'Keripik pisang renyah dengan berbagai varian rasa: original, coklat, keju, dan balado.',
    contact: {
      phone: '+62 834 8901 2345',
      email: 'keripikbahagia@gmail.com',
      address: 'Jl. MT Haryono No. 67, Balikpapan Selatan',
    },
  },
  {
    id: '24',
    name: 'Sambal Roa Khas Balikpapan',
    category: 'Makanan',
    price: 'Rp 45.000',
    image: 'https://images.unsplash.com/photo-1626074353765-517a681e40be?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080',
    umkm: 'Sambal Pedas Nikmat',
    description: 'Sambal roa pedas dengan ikan asli dan bumbu pilihan. Bikin nagih!',
    contact: {
      phone: '+62 835 9012 3456',
      email: 'sambalroa@gmail.com',
      address: 'Jl. Jenderal Sudirman No. 23, Balikpapan Timur',
    },
  },
  {
    id: '25',
    name: 'Bolu Sarang Semut',
    category: 'Makanan',
    price: 'Rp 95.000',
    image: 'https://images.unsplash.com/photo-1586985289688-ca3cf47d3e6e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080',
    umkm: 'Bolu Manis',
    description: 'Bolu sarang semut dengan tekstur lembut dan rasa manis yang pas.',
    contact: {
      phone: '+62 836 0123 4567',
      email: 'bolumanis@gmail.com',
      address: 'Jl. Soekarno Hatta No. 89, Balikpapan Barat',
    },
  },
  {
    id: '26',
    name: 'Kerupuk Kulit Ikan',
    category: 'Makanan',
    price: 'Rp 40.000',
    image: 'https://images.unsplash.com/photo-1599490659213-e2b9527bd087?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080',
    umkm: 'Kerupuk Laut',
    description: 'Kerupuk dari kulit ikan berkualitas. Renyah dan kaya protein.',
    contact: {
      phone: '+62 837 1234 5678',
      email: 'kerupuklaut@gmail.com',
      address: 'Jl. Yos Sudarso No. 34, Balikpapan Tengah',
    },
  },
  {
    id: '27',
    name: 'Serundeng Kelapa Premium',
    category: 'Makanan',
    price: 'Rp 50.000',
    image: 'https://images.unsplash.com/photo-1596040033229-a0b34e2e4a81?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080',
    umkm: 'Serundeng Nikmat',
    description: 'Serundeng kelapa dengan bumbu rempah pilihan. Cocok untuk pelengkap nasi.',
    contact: {
      phone: '+62 838 2345 6789',
      email: 'serundengnikmat@gmail.com',
      address: 'Jl. Letjen Suprapto No. 45, Balikpapan Utara',
    },
  },
  {
    id: '28',
    name: 'Abon Sapi Premium',
    category: 'Makanan',
    price: 'Rp 125.000',
    image: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080',
    umkm: 'Abon Lezat',
    description: 'Abon sapi dari daging pilihan dengan bumbu tradisional. Gurih dan lembut.',
    contact: {
      phone: '+62 839 3456 7890',
      email: 'abonlezat@gmail.com',
      address: 'Jl. Ahmad Yani No. 78, Balikpapan Selatan',
    },
  },
  {
    id: '29',
    name: 'Brownies Coklat Lumer',
    category: 'Makanan',
    price: 'Rp 65.000',
    image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080',
    umkm: 'Brownies Enak',
    description: 'Brownies coklat dengan tekstur lembut dan rasa coklat yang lumer di mulut.',
    contact: {
      phone: '+62 840 4567 8901',
      email: 'browniesenak@gmail.com',
      address: 'Jl. MT Haryono No. 90, Balikpapan Timur',
    },
  },
  {
    id: '30',
    name: 'Kue Lapis Legit',
    category: 'Makanan',
    price: 'Rp 185.000',
    image: 'https://images.unsplash.com/photo-1616690710400-a16d146927c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080',
    umkm: 'Lapis Tradisi',
    description: 'Kue lapis legit dengan 18 lapis. Resep turun temurun yang autentik.',
    contact: {
      phone: '+62 841 5678 9012',
      email: 'lapistradisi@gmail.com',
      address: 'Jl. Soekarno Hatta No. 12, Balikpapan Barat',
    },
  },
  {
    id: '31',
    name: 'Keripik Singkong Pedas',
    category: 'Makanan',
    price: 'Rp 30.000',
    image: 'https://images.unsplash.com/photo-1599490659213-e2b9527bd087?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080',
    umkm: 'Keripik Mantap',
    description: 'Keripik singkong dengan bumbu pedas yang bikin ketagihan.',
    contact: {
      phone: '+62 842 6789 0123',
      email: 'keripikmantap@gmail.com',
      address: 'Jl. Gatot Subroto No. 56, Balikpapan Tengah',
    },
  },
  {
    id: '32',
    name: 'Rendang Sapi Kemasan',
    category: 'Makanan',
    price: 'Rp 145.000',
    image: 'https://images.unsplash.com/photo-1628294895950-9805252327bc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080',
    umkm: 'Rendang Nusantara',
    description: 'Rendang sapi dengan bumbu rempah lengkap. Praktis dan tahan lama.',
    contact: {
      phone: '+62 843 7890 1234',
      email: 'rendangnusantara@gmail.com',
      address: 'Jl. Yos Sudarso No. 67, Balikpapan Utara',
    },
  },
  {
    id: '33',
    name: 'Kue Nastar Premium',
    category: 'Makanan',
    price: 'Rp 85.000',
    image: 'https://images.unsplash.com/photo-1599599811136-e8c9c224d5e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080',
    umkm: 'Nastar Lezat',
    description: 'Kue nastar dengan selai nanas asli. Lembut dan manis legit.',
    contact: {
      phone: '+62 844 8901 2345',
      email: 'nastarlezat@gmail.com',
      address: 'Jl. Jenderal Sudirman No. 78, Balikpapan Selatan',
    },
  },
  {
    id: '34',
    name: 'Teri Medan Krispi',
    category: 'Makanan',
    price: 'Rp 55.000',
    image: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080',
    umkm: 'Teri Krispi',
    description: 'Teri medan goreng krispi dengan bumbu spesial. Gurih dan renyah.',
    contact: {
      phone: '+62 845 9012 3456',
      email: 'terikrispi@gmail.com',
      address: 'Jl. MT Haryono No. 23, Balikpapan Timur',
    },
  },

  // FASHION (10 produk)
  {
    id: '3',
    name: 'Tas Anyaman Rotan',
    category: 'Fashion',
    price: 'Rp 180.000',
    image: 'https://images.unsplash.com/photo-1759544632264-a31a9ff1e60b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYW5kbWFkZSUyMGJhZ3MlMjBhY2Nlc3Nvcmllc3xlbnwxfHx8fDE3NjA2MDI2OTN8MA&ixlib=rb-4.1.0&q=80&w=1080',
    umkm: 'Rotan Kreasi',
    description: 'Tas anyaman rotan handmade berkualitas tinggi. Desain modern dengan sentuhan tradisional. Awet, kuat, dan ramah lingkungan.',
    contact: {
      phone: '+62 814 5678 9012',
      email: 'rotankreasi@gmail.com',
      address: 'Jl. Ahmad Yani No. 88, Balikpapan Selatan',
    },
  },
  {
    id: '35',
    name: 'Kemeja Batik Modern',
    category: 'Fashion',
    price: 'Rp 285.000',
    image: 'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080',
    umkm: 'Batik Fashion',
    description: 'Kemeja batik dengan desain modern. Cocok untuk acara formal dan kasual.',
    contact: {
      phone: '+62 846 0123 4567',
      email: 'batikfashion@gmail.com',
      address: 'Jl. Soekarno Hatta No. 34, Balikpapan Barat',
    },
  },
  {
    id: '36',
    name: 'Sandal Kulit Handmade',
    category: 'Fashion',
    price: 'Rp 165.000',
    image: 'https://images.unsplash.com/photo-1603487742131-4160ec999306?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080',
    umkm: 'Sandal Borneo',
    description: 'Sandal dari kulit asli dengan jahitan manual. Nyaman dan tahan lama.',
    contact: {
      phone: '+62 847 1234 5678',
      email: 'sandalborneo@gmail.com',
      address: 'Jl. Yos Sudarso No. 89, Balikpapan Tengah',
    },
  },
  {
    id: '37',
    name: 'Dompet Kulit Asli',
    category: 'Fashion',
    price: 'Rp 145.000',
    image: 'https://images.unsplash.com/photo-1627123424574-724758594e93?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080',
    umkm: 'Leather Craft',
    description: 'Dompet dari kulit sapi asli dengan desain minimalis dan elegan.',
    contact: {
      phone: '+62 848 2345 6789',
      email: 'leathercraft@gmail.com',
      address: 'Jl. Letjen Suprapto No. 67, Balikpapan Utara',
    },
  },
  {
    id: '38',
    name: 'Kalung Etnik Modern',
    category: 'Fashion',
    price: 'Rp 95.000',
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080',
    umkm: 'Aksesori Cantik',
    description: 'Kalung dengan desain etnik modern. Cocok untuk melengkapi penampilan.',
    contact: {
      phone: '+62 849 3456 7890',
      email: 'aksesoricantik@gmail.com',
      address: 'Jl. Ahmad Yani No. 90, Balikpapan Selatan',
    },
  },
  {
    id: '39',
    name: 'Topi Anyaman Pandan',
    category: 'Fashion',
    price: 'Rp 75.000',
    image: 'https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080',
    umkm: 'Topi Borneo',
    description: 'Topi anyaman pandan dengan desain casual. Cocok untuk aktivitas outdoor.',
    contact: {
      phone: '+62 850 4567 8901',
      email: 'topiborneo@gmail.com',
      address: 'Jl. MT Haryono No. 12, Balikpapan Timur',
    },
  },
  {
    id: '40',
    name: 'Dress Batik Kombinasi',
    category: 'Fashion',
    price: 'Rp 325.000',
    image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080',
    umkm: 'Dress Nusantara',
    description: 'Dress batik dengan kombinasi kain polos. Elegan dan nyaman dipakai.',
    contact: {
      phone: '+62 851 5678 9012',
      email: 'dressnusantara@gmail.com',
      address: 'Jl. Jenderal Sudirman No. 45, Balikpapan Barat',
    },
  },
  {
    id: '41',
    name: 'Ikat Pinggang Kulit',
    category: 'Fashion',
    price: 'Rp 125.000',
    image: 'https://images.unsplash.com/photo-1624222247344-550fb60583b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080',
    umkm: 'Belt Leather',
    description: 'Ikat pinggang dari kulit asli dengan buckle berkualitas.',
    contact: {
      phone: '+62 852 6789 0123',
      email: 'beltleather@gmail.com',
      address: 'Jl. Soekarno Hatta No. 56, Balikpapan Tengah',
    },
  },
  {
    id: '42',
    name: 'Scarf Tenun Premium',
    category: 'Fashion',
    price: 'Rp 155.000',
    image: 'https://images.unsplash.com/photo-1601924994987-69e26d50dc26?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080',
    umkm: 'Scarf Heritage',
    description: 'Scarf dari kain tenun tradisional dengan motif modern.',
    contact: {
      phone: '+62 853 7890 1234',
      email: 'scarfheritage@gmail.com',
      address: 'Jl. Yos Sudarso No. 78, Balikpapan Utara',
    },
  },
  {
    id: '43',
    name: 'Sepatu Slip On Kanvas',
    category: 'Fashion',
    price: 'Rp 225.000',
    image: 'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080',
    umkm: 'Shoes Borneo',
    description: 'Sepatu slip on dari kanvas berkualitas. Ringan dan nyaman untuk sehari-hari.',
    contact: {
      phone: '+62 854 8901 2345',
      email: 'shoesborneo@gmail.com',
      address: 'Jl. Gatot Subroto No. 23, Balikpapan Selatan',
    },
  },
];

export const categories = [
  { name: 'Kerajinan', count: 15 },
  { name: 'Makanan', count: 14 },
  { name: 'Fashion', count: 10 },
];


    try {
      const modules = import.meta.glob('../assets/products/**/*.{png,jpg,jpeg,webp,svg}', {
      eager: true,
      import: 'default'
    }) as Record<string, unknown>;

    const normalize = (s: string) =>
      String(s)
        .toLowerCase()
        .normalize('NFKD')
        .replace(/\p{Diacritic}/gu, '')
        .replace(/[^a-z0-9\s-]/g, '')
        .replace(/\s+/g, ' ')
        .trim();

    for (const path in modules) {
      const url = modules[path];
      if (typeof url !== "string") continue;

      const filename = path.split('/').pop() || '';
      const nameNoExt = filename.replace(/\.[^.]+$/, '');
      const key = normalize(nameNoExt);

      if (key) __imageMap[key] = url;
    }


    // Assign local images by matching normalized product name, fallback to id
    console.log("Image map keys:", Object.keys(__imageMap));

    products.forEach(p => {
      const byName = normalize(p.name)
      if (byName && __imageMap[byName]) {
        p.image = __imageMap[byName]
        return
      }

      // fallback: try id as filename without extension
      const idKey = normalize(String(p.id))
      if (idKey && __imageMap[idKey]) {
        p.image = __imageMap[idKey]
        return
      }

      // no further fallback; keep remote URL if no local image found
    })

    // Development-only report: which products were matched vs not
    // Development-only report: which products were matched vs not
    try {
      const dev = (import.meta as any).env && (import.meta as any).env.DEV
      if (dev) {
        const matched: string[] = []
        const unmatched: string[] = []
        products.forEach(p => {
          const current = p.image || ''
          const isLocal = Object.values(__imageMap).includes(current)
          if (isLocal) matched.push(p.name)
          else unmatched.push(p.name)
        })
        console.groupCollapsed && console.groupCollapsed('Product image mapping report')
        console.info(`Local images found: ${matched.length}, Using remote/fallback: ${unmatched.length}`)
        if (matched.length > 0) console.info('Matched:', matched.slice(0, 30))
        if (unmatched.length > 0) console.info('Unmatched:', unmatched.slice(0, 30))
        console.groupEnd && console.groupEnd()
      }
    } catch (e) {
      // ignore logging errors
    }
  }
catch (e) {
  // ignore - app will use remote URLs as defined in products
}
