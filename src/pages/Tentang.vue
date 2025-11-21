<template>
  <div class="pt-20">
    <Hero
      title="Tentang Galeri RupaKarya Balikpapan"
      subtitle="Platform digital yang mendukung UMKM Balikpapan untuk berkembang dan dikenal lebih luas."
      :showCta="false"
    />

    <section class="py-24 bg-white">
      <div class="container mx-auto px-4">
        <div class="max-w-3xl mx-auto">
          <h2 class="text-slate-900 text-2xl font-semibold mb-6">
            Misi Kami
          </h2>
          <p class="text-slate-600 leading-relaxed mb-8">
            Kami percaya bahwa UMKM adalah tulang punggung ekonomi daerah. Dengan menyediakan
            platform modern, kami membantu UMKM lokal untuk memperluas jangkauan, meningkatkan
            branding, dan memperkenalkan produk mereka ke pasar nasional.
          </p>

          <h2 class="text-slate-900 text-2xl font-semibold mb-6">
            Visi
          </h2>
          <p class="text-slate-600 leading-relaxed">
            Menjadi platform UMKM terbaik di Kalimantan Timur dengan pengalaman pengguna yang modern,
            cepat, dan mudah digunakan.
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import Hero from "../components/Hero.vue"
</script>
