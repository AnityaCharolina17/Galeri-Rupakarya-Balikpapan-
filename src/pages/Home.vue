<template>
  <div class="pt-20">
    <Hero
      title="Galeri Produk UMKM Balikpapan Berkualitas"
      subtitle="Platform digital yang menghubungkan produk-produk unggulan UMKM Balikpapan dengan pasar yang lebih luas di seluruh Indonesia."
      :showSearch="true"
      :showCta="true"
      @search="onSearch"
    />

    <!-- TODO: StatsSection.vue kalau mau dikonversi juga -->
    <!-- <StatsSection /> -->

    <!-- Featured products -->
    <section class="py-24 bg-gradient-to-b from-slate-50 to-white">
      <div class="container mx-auto px-4">
        <div class="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-4">
          <div class="max-w-2xl">
            <div class="inline-block px-4 py-2 bg-white border border-slate-200 rounded-full mb-4">
              <p class="text-sm text-slate-700">🌟 Pilihan Terbaik</p>
            </div>
            <h2 class="text-slate-900 mb-4 text-2xl md:text-3xl font-semibold">Produk Unggulan UMKM</h2>
            <p class="text-slate-600 text-lg">
              Temukan produk-produk terbaik dari UMKM lokal Balikpapan yang telah dipilih khusus untuk Anda.
            </p>
          </div>

          <RouterLink
            to="/produk"
            class="hidden md:flex items-center gap-2 px-6 py-3 rounded-full bg-slate-900 text-white hover:bg-slate-800 hover:gap-3 transition-all shadow-lg hover:shadow-xl"
          >
            Lihat Semua
            <ArrowRight class="w-5 h-5" />
          </RouterLink>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <ProductCard
            v-for="product in featuredProducts"
            :key="product.id"
            v-bind="product"
            :onViewDetails="() => openModal(product)"
          />
        </div>

        <div class="text-center md:hidden">
          <RouterLink
            to="/produk"
            class="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-slate-900 text-white hover:bg-slate-800 shadow-lg"
          >
            Lihat Semua Produk
            <ArrowRight class="w-5 h-5" />
          </RouterLink>
        </div>
      </div>
    </section>

    <!-- Modal Product -->
    <ProductModal
      :product="selectedProduct"
      :isOpen="isModalOpen"
      @close="isModalOpen = false"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { RouterLink } from 'vue-router'
import { useRouter } from 'vue-router'
import { ArrowRight } from 'lucide-vue-next'
import Hero from '../components/Hero.vue'
import ProductCard from '../components/ProductCard.vue'
import { products } from '../data/products'
import StatsSection from '../components/StatsSection.vue'
import ProductModal from '../components/ProductModal.vue'

const isModalOpen = ref(false)
const selectedProduct = ref<(typeof products)[0] | null>(null)

const featuredProducts = computed(() => products.slice(0, 3))

const openModal = (product: (typeof products)[0]) => {
  selectedProduct.value = product
  isModalOpen.value = true
}

const router = useRouter()

const onSearch = (query: string) => {
  // navigate to produk page with query param
  router.push({ path: '/produk', query: { q: query } })
}
</script>
