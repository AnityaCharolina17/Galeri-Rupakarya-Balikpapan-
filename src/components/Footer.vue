<template>
  <footer class="bg-slate-900 text-white">
    <div class="container mx-auto px-4 py-16">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
        
        <!-- Brand -->
        <div class="md:col-span-2">
          <div class="flex items-center gap-3 mb-6">
            <div class="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
              <Building2 class="w-6 h-6 text-slate-900" />
            </div>
            <div>
              <span class="block text-white">Galeri RupaKarya Balikpapan</span>
              <span class="block text-xs text-slate-400">Local Business Platform</span>
            </div>
          </div>

          <p class="text-slate-300 leading-relaxed max-w-md">
            Platform digital yang menghubungkan produk-produk berkualitas dari UMKM lokal
            Balikpapan dengan pelanggan di seluruh Indonesia.
          </p>

          <div class="flex gap-4 mt-6">
            <a
              href="#"
              aria-label="Facebook"
              class="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-slate-700 transition-colors"
            >
              <Facebook class="w-5 h-5" />
            </a>
            <a
              href="#"
              aria-label="Instagram"
              class="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-slate-700 transition-colors"
            >
              <Instagram class="w-5 h-5" />
            </a>
            <a
              href="#"
              aria-label="LinkedIn"
              class="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-slate-700 transition-colors"
            >
              <Linkedin class="w-5 h-5" />
            </a>
          </div>
        </div>

        <!-- Quick Links -->
        <div>
          <h3 class="text-white mb-4">Navigasi</h3>
          <ul class="space-y-3 text-sm">
            <li v-for="item in navLinks" :key="item.label">
              <RouterLink
                :to="item.to"
                class="text-slate-300 hover:text-white transition-colors"
              >
                {{ item.label }}
              </RouterLink>
            </li>
          </ul>
        </div>

        <!-- Contact -->
        <div>
          <h3 class="text-white mb-4">Kontak</h3>
          <ul class="space-y-3 text-sm text-slate-300">
            <li class="flex items-start gap-2">
              <MapPin class="w-4 h-4 mt-0.5 flex-shrink-0" />
              <span>Jl. Jenderal Sudirman No. 1, Balikpapan, Kalimantan Timur</span>
            </li>
            <li class="flex items-center gap-2">
              <Phone class="w-4 h-4 flex-shrink-0" />
              <span>+62 812-6351-4671</span>
            </li>
            <li class="flex items-center gap-2">
              <Mail class="w-4 h-4 flex-shrink-0" />
              <span>info@umkmbalikpapan.id</span>
            </li>
          </ul>
        </div>

      </div>

      <div
        class="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-400"
      >
        <p>&copy; 2025 Galeri RupaKarya Balikpapan. All rights reserved.</p>
        <div class="flex gap-6">
          <a href="#" class="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" class="hover:text-white transition-colors">Terms of Service</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Building2 } from 'lucide-vue-next'

const navLinks = [
  { label: 'Beranda', to: '/' },
  { label: 'Produk', to: '/produk' },
  { label: 'Kategori', to: '/kategori' },
  { label: 'Tentang Kami', to: '/tentang' },
  { label: 'Kontak', to: '/kontak' },
]
</script>
