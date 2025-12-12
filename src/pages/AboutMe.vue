<template>
  <div class="pt-18">
    <!-- Hero Section -->
    <Hero
      title="Anitya C R Sinaga"
      subtitle="11231011-INFORMATIKA-INSTITUT TEKNOLOGI KALIMANTAN"
      backgroundImage="/hero-bg.jpg"
    />

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <ProductCard
            v-for="product in filteredProducts"
            :key="product.id"
            v-bind="product"
            :onViewDetails="() => openModal(product)"
          />
        </div>
        <textarea
            v-model="Skill"
            rows="5"
            placeholder="Skill"
            class="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-100"
            required
          />
        </div>


</template>

<script setup>
import Hero from "../components/Hero.vue"
import ProductCard from "../components/ProductCard.vue"

</script>
