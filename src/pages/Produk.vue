<template>
  <div class="pt-20">
    <!-- Hero Section -->
    <Hero
      title="Semua Produk UMKM Balikpapan"
      subtitle="Jelajahi ribuan produk unggulan dari UMKM lokal Balikpapan."
      :showSearch="true"
      :showCta="false"
      backgroundImage="/hero-bg.jpg"
    />

    <section class="py-24 bg-white">
      <div class="container mx-auto px-4">
        <div class="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-4">
          <div class="max-w-2xl">
            <h2 class="text-slate-900 mb-4 text-2xl md:text-3xl font-semibold">
              Daftar Produk Lengkap
            </h2>
            <p class="text-slate-600 text-lg">
              Telusuri berbagai produk pilihan dari UMKM Balikpapan.
            </p>
          </div>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <ProductCard
            v-for="product in products"
            :key="product.id"
            v-bind="product"
            :onViewDetails="() => openModal(product)"
          />
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
import { ref } from "vue"
import Hero from "../components/Hero.vue"
import ProductCard from "../components/ProductCard.vue"
import ProductModal from "../components/ProductModal.vue"
import { products } from "../data/products"

const isModalOpen = ref(false)
const selectedProduct = ref(null)

const openModal = (product: any) => {
  selectedProduct.value = product
  isModalOpen.value = true
}
</script>
