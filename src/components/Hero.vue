<template>
  <div class="relative bg-slate-900 text-white overflow-hidden min-h-[600px] md:min-h-[700px] flex items-center">
    <!-- background optional -->
    <div v-if="backgroundImage" class="absolute inset-0">
      <img :src="backgroundImage" alt="Hero background" class="w-full h-full object-cover" />
      <div class="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/85 to-slate-900/70" />
    </div>

    <div class="container mx-auto px-4 py-24 md:py-32 relative z-10">
      <div class="max-w-4xl">
        <h1 class="text-white mb-6 text-4xl md:text-6xl lg:text-7xl leading-tight">
          {{ title }}
        </h1>
        <p class="text-xl md:text-2xl text-slate-200 mb-10 leading-relaxed max-w-3xl">
          {{ subtitle }}
        </p>

        <!-- search -->
        <div v-if="showSearch" class="max-w-2xl mb-8">
          <div class="relative">
            <input
              type="text"
              placeholder="Cari produk UMKM Balikpapan..."
              class="w-full px-6 py-5 pr-14 rounded-xl text-slate-900 bg-white shadow-2xl focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button
              class="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-lg bg-slate-900 text-white flex items-center justify-center hover:bg-slate-800"
            >
              <Search class="w-5 h-5" />
            </button>
          </div>
        </div>

        <!-- CTA -->
        <div v-if="showCta" class="flex flex-col sm:flex-row gap-4">
          <RouterLink to="/produk">
            <button
              class="px-8 py-5 bg-white text-slate-900 rounded-xl inline-flex items-center justify-center gap-2 shadow-xl hover:scale-105 transition-transform"
            >
              <span>Jelajahi Produk</span>
              <ArrowRight class="w-5 h-5" />
            </button>
          </RouterLink>
          <RouterLink to="/kontak">
            <button
              class="px-8 py-5 bg-transparent text-white rounded-xl border border-white/40 hover:bg-white hover:text-slate-900 transition-all hover:shadow-2xl"
            >
              Daftar UMKM Anda
            </button>
          </RouterLink>
        </div>
      </div>
    </div>

    <div class="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
  </div>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { Search, ArrowRight } from 'lucide-vue-next'

interface Props {
  title: string
  subtitle: string
  showSearch?: boolean
  backgroundImage?: string
  showCta?: boolean
}

const props = defineProps<Props>()
const { title, subtitle, showSearch = false, backgroundImage, showCta = false } = props
</script>
