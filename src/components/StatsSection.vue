<template>
  <section class="py-24 bg-gradient-to-b from-white to-slate-50">
    <div class="container mx-auto px-4">
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div
          v-for="item in stats"
          :key="item.id"
          class="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:shadow-md transition"
        >
          <div
            class="w-12 h-12 rounded-xl bg-slate-900 text-white flex items-center justify-center mb-4"
          >
            <component :is="item.icon" class="w-6 h-6" />
          </div>

          <h3 class="text-3xl text-slate-900 font-semibold mb-2">
            {{ item.value }}
          </h3>
          <p class="text-slate-600">
            {{ item.label }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import {
  TrendingUp,
  Users,
  Package,
  Store,
} from "lucide-vue-next";

const stats = [
  {
    id: 1,
    icon: TrendingUp,
    value: "1.200+",
    label: "Total Produk",
  },
  {
    id: 2,
    icon: Users,
    value: "500+",
    label: "UMKM Terdaftar",
  },
  {
    id: 3,
    icon: Package,
    value: "10.000+",
    label: "Transaksi",
  },
  {
    id: 4,
    icon: Store,
    value: "4.9/5",
    label: "Tingkat Kepuasan",
  },
];
</script>
