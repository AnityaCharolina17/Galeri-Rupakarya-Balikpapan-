<template>
  <div class="pt-20">
    <!-- notifikasi sukses -->
    <transition
      enter-active-class="transition ease-in-out duration-300"
      enter-from-class="opacity-0 translate-y-2"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition ease-in-out duration-300"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 translate-y-2"
    >
      <div
        v-if="showNotification"
        class="fixed top-4 right-4 z-50 bg-green-500 text-white px-6 py-4 rounded-lg shadow-xl flex items-center gap-3"
      >
        <span class="text-xl">✓</span>
        <span>Pesan Anda telah terkirim dengan sukses!</span>
      </div>
    </transition>

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
            <li><strong>Telepon:</strong> +62 812-6351-4671</li>
            <li><strong>Instagram:</strong> @galerirupakaryabalikpapan</li>
          </ul>

         <div class="mt-8 w-full h-64 md:h-80 rounded-xl overflow-hidden shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3989.0204556799786!2d116.87606247496534!3d-1.145863598843167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMcKwMDgnNDUuMSJTIDExNsKwNTInNDMuMSJF!5e0!3m2!1sid!2sid!4v1759501319100!5m2!1sid!2sid"
            class="w-full h-full border-0"
            allowfullscreen
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade">
          </iframe>
        </div>

        </div>

        <!-- Form -->
        <form @submit.prevent="handleSubmit" class="bg-slate-50 border border-slate-200 p-6 rounded-xl shadow-sm space-y-4">
          <input
            v-model="form.nama"
            placeholder="Nama Lengkap"
            class="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-900"
            required
          />
          <input
            v-model="form.email"
            type="email"
            placeholder="Email"
            class="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-900"
            required
          />
          <input
            v-model="form.telepon"
            placeholder="Nomor Telepon"
            class="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-900"
            required
          />
          <textarea
            v-model="form.pesan"
            rows="5"
            placeholder="Pesan"
            class="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-900"
            required
          />
          <button
            type="submit"
            class="w-full bg-slate-900 text-white py-3 rounded-lg hover:bg-slate-800 transition-colors"
          >
            Kirim Pesan
          </button>
        </form>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Hero from "../components/Hero.vue"

const form = ref({
  nama: '',
  email: '',
  telepon: '',
  pesan: ''
})

const showNotification = ref(false)

const handleSubmit = () => {
  // tunjukkan notifikasi sukses
  showNotification.value = true
  
  // kosongkan form setelah submit
  form.value = {
    nama: '',
    email: '',
    telepon: '',
    pesan: ''
  }
  
  // sembunyikan notifikasi setelah 3 detik
  setTimeout(() => {
    showNotification.value = false
  }, 3000)
}
</script>
