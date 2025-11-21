<template>
  <div class="pt-20">
    <Hero
      title="Kategori Produk UMKM"
      subtitle="Temukan produk berdasarkan kategori pilihan."
      :showSearch="false"
      :showCta="false"
      backgroundImage="/hero-bg.jpg"
    />

    <section class="py-24 bg-white">
      <div class="container mx-auto px-4">
        <h2 class="text-slate-900 text-2xl md:text-3xl font-semibold mb-10">
          Pilih Kategori
        </h2>

        <div class="flex flex-wrap gap-3 mb-12">
          <button
            v-for="cat in categories"
            :key="cat"
            class="px-6 py-3 rounded-full border border-slate-300 text-sm hover:bg-slate-900 hover:text-white transition-all"
            :class="category === cat ? 'bg-slate-900 text-white' : 'bg-white text-slate-700'"
            @click="category = cat"
          >
            {{ cat }}
          </button>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <ProductCard
            v-for="product in filtered"
            :key="product.id"
            v-bind="product"
            :onViewDetails="() => openModal(product)"
          />
        </div>

        <ProductModal
          :product="selectedProduct"
          :isOpen="isModalOpen"
          @close="isModalOpen = false"
        />
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue"
import Hero from "../components/Hero.vue"
import ProductCard from "../components/ProductCard.vue"
import ProductModal from "../components/ProductModal.vue"
import { products } from "../data/products"

const categories = ["Makanan", "Kerajinan", "Fashion", "Aksesoris", "Lainnya"]

const category = ref("Makanan")
const isModalOpen = ref(false)
const selectedProduct = ref(null)

const filtered = computed(() =>
  products.filter((p) => p.category === category.value)
)

const openModal = (product: any) => {
  selectedProduct.value = product
  isModalOpen.value = true
}
</script>
