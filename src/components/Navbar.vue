<template>
  <nav
    :class="[
      'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
      scrolled ? 'bg-white shadow-md' : 'bg-white'
    ]"
  >
    <div class="container mx-auto px-4">
      <div class="flex justify-between items-center h-20">
        <!-- Logo -->
        <RouterLink to="/" class="flex items-center gap-3">
          <div class="w-10 h-10 bg-slate-900 rounded-lg flex items-center justify-center">
            <Building2 class="w-6 h-6 text-white" />
          </div>
          <div>
            <span class="block text-slate-900">Galeri RupaKarya Balikpapan</span>
            <span class="block text-xs text-slate-500">Local Business Platform</span>
          </div>
        </RouterLink>

        <!-- Desktop nav -->
        <div class="hidden md:flex items-center gap-8">
          <RouterLink
            v-for="link in navLinks"
            :key="link.path"
            :to="link.path"
            class="relative text-sm transition-colors"
            :class="isActive(link.path)
              ? 'text-slate-900'
              : 'text-slate-600 hover:text-slate-900'"
          >
            {{ link.label }}
            <span
              v-if="isActive(link.path)"
              class="absolute -bottom-2 left-0 right-0 h-0.5 bg-slate-900"
            />
          </RouterLink>
        </div>

        <!-- Mobile button -->
        <button
          class="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-md border border-slate-200"
          @click="isOpen = !isOpen"
        >
          <Menu v-if="!isOpen" class="w-6 h-6 text-slate-900" />
          <X v-else class="w-6 h-6 text-slate-900" />
        </button>
      </div>

      <!-- Mobile menu -->
      <div v-if="isOpen" class="md:hidden pb-4">
        <div class="pt-4 border-t border-slate-200 space-y-2">
          <RouterLink
            v-for="link in navLinks"
            :key="link.path"
            :to="link.path"
            class="block px-2 py-2 text-sm"
            :class="isActive(link.path) ? 'text-slate-900' : 'text-slate-600'"
            @click="isOpen = false"
          >
            {{ link.label }}
          </RouterLink>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { useRoute, RouterLink } from 'vue-router'
import { Menu, X, Building2 } from 'lucide-vue-next'

const isOpen = ref(false)
const scrolled = ref(false)
const route = useRoute()

const navLinks = [
  { path: '/', label: 'Beranda' },
  { path: '/produk', label: 'Produk' },
  { path: '/kategori', label: 'Kategori' },
  { path: '/tentang', label: 'Tentang Kami' },
  { path: '/kontak', label: 'Kontak' },
]

const isActive = (path: string) => route.path === path

const handleScroll = () => {
  scrolled.value = window.scrollY > 0
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>
