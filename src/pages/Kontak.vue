<template>
  <div class="pt-20">
    <Hero
      title="Hubungi Kami"
      subtitle="Kami siap membantu pertanyaan seputar UMKM di Balikpapan."
      :showSearch="false"
      :showCta="false"
    />

    <section class="py-24 bg-white">
      <div class="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12">
        <!-- Informasi -->
        <div>
          <h2 class="text-slate-900 text-2xl font-semibold mb-6">
            Informasi Kontak
          </h2>

          <ul class="space-y-4 text-slate-700">
            <li><strong>Alamat:</strong> Balikpapan, Kalimantan Timur</li>
            <li><strong>Email:</strong> info@galerirupakarya.id</li>
            <li><strong>Telepon:</strong> +62 812-3456-7890</li>
            <li><strong>Instagram:</strong> @galerirupakarya</li>
          </ul>

          <div class="mt-8 w-full h-64 bg-slate-200 rounded-xl flex items-center justify-center">
            <span class="text-slate-500">Map Placeholder</span>
          </div>
        </div>

        <!-- Form -->
        <form class="bg-slate-50 border border-slate-200 p-6 rounded-xl shadow-sm space-y-4">
          <input placeholder="Nama Lengkap" class="w-full p-3 border rounded-lg" />
          <input placeholder="Email" class="w-full p-3 border rounded-lg" />
          <input placeholder="Nomor Telepon" class="w-full p-3 border rounded-lg" />
          <textarea rows="5" placeholder="Pesan" class="w-full p-3 border rounded-lg" />
          <button class="w-full bg-slate-900 text-white py-3 rounded-lg hover:bg-slate-800">
            Kirim Pesan
          </button>
        </form>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import Hero from "../components/Hero.vue"
</script>
