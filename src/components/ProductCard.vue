<template>
  <div
    class="group bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-xl transition-all cursor-pointer"
    @click="onViewDetails && onViewDetails()"
  >
    <div class="aspect-[4/3] overflow-hidden bg-slate-100">
      <img :src="image" :alt="name" class="w-full h-full object-cover group-hover:scale-105 transition-transform" />
    </div>
    <div class="p-5">
      <span class="text-xs text-slate-500 uppercase tracking-wide">{{ category }}</span>
      <h3 class="mt-2 text-slate-900 line-clamp-2">{{ name }}</h3>
      <p class="text-sm text-slate-600 mt-1">{{ umkm }}</p>
      <div class="mt-4 flex items-center justify-between">
        <span class="text-slate-900 font-semibold">{{ price }}</span>
        <button
          class="inline-flex items-center gap-1 px-3 py-1.5 rounded-full text-xs bg-slate-900 text-white group-hover:bg-slate-800"
          @click.stop="onViewDetails && onViewDetails()"
        >
          <Eye class="w-4 h-4" />
          <span>Detail</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Eye } from 'lucide-vue-next'

interface Props {
  id: string
  name: string
  category: string
  price: string
  image: string
  umkm: string
  onViewDetails?: () => void
}

const props = defineProps<Props>()
const { name, category, price, image, umkm, onViewDetails } = props
</script>
