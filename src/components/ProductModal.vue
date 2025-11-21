<template>
  <transition name="fade">
    <div
      v-if="isOpen && product"
      class="fixed inset-0 z-50 flex items-center justify-center"
    >
      <!-- Overlay -->
      <div
        class="absolute inset-0 bg-black/50 backdrop-blur-sm"
        @click="onClose"
      />

      <!-- Modal -->
      <div
        class="relative bg-white w-[95%] md:w-[750px] max-h-[90vh] overflow-y-auto rounded-2xl shadow-2xl z-10"
      >
        <!-- Tombol close -->
        <button
          class="absolute right-4 top-4 p-2 rounded-full bg-white shadow hover:bg-slate-100 transition"
          @click="onClose"
        >
          <X class="w-5 h-5 text-slate-600" />
        </button>

        <!-- Layout isi -->
        <div class="grid md:grid-cols-[1.2fr_1fr] gap-6 p-6">
          <!-- Gambar -->
          <div class="aspect-[4/3] overflow-hidden rounded-xl bg-slate-100">
            <img
              :src="product.image"
              :alt="product.name"
              class="w-full h-full object-cover"
            />
          </div>

          <!-- Info produk -->
          <div class="space-y-4">
            <div>
              <span class="text-xs text-slate-500 uppercase tracking-wide">
                {{ product.category }}
              </span>
              <h2 class="text-slate-900 text-xl font-semibold mt-1">
                {{ product.name }}
              </h2>
              <p class="text-2xl text-slate-900 font-bold mt-2">
                {{ product.price }}
              </p>
              <p class="text-sm text-slate-600 mt-1">
                {{ product.umkm }}
              </p>
            </div>

            <div>
              <h3 class="text-slate-900 font-semibold mb-2">
                Deskripsi Produk
              </h3>
              <p class="text-sm text-slate-600 leading-relaxed">
                {{ product.description }}
              </p>
            </div>

            <div class="space-y-2">
              <h3 class="text-slate-900 font-semibold">
                Kontak UMKM
              </h3>
              <p class="flex items-center gap-2 text-sm text-slate-600">
                <Phone class="w-4 h-4" />
                {{ product.contact.phone }}
              </p>
              <p class="flex items-center gap-2 text-sm text-slate-600">
                <Mail class="w-4 h-4" />
                {{ product.contact.email }}
              </p>
              <p class="flex items-center gap-2 text-sm text-slate-600">
                <MapPin class="w-4 h-4" />
                {{ product.contact.address }}
              </p>
            </div>

            <div class="flex gap-3 pt-2">
              <button
                class="px-6 py-2.5 text-slate-700 hover:bg-slate-100 rounded-lg transition-colors"
                @click="onClose"
              >
                Tutup
              </button>
              <button
                class="px-6 py-2.5 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-colors"
              >
                Hubungi Penjual
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script setup lang="ts">
import { X, MapPin, Phone, Mail } from "lucide-vue-next";

interface Contact {
  phone: string;
  email: string;
  address: string;
}

interface Product {
  id: string;
  name: string;
  category: string;
  price: string;
  image: string;
  umkm: string;
  description: string;
  contact: Contact;
}

const props = defineProps<{
  product: Product | null;
  isOpen: boolean;
}>();

const emit = defineEmits<{
  (e: "close"): void;
}>();

const onClose = () => emit("close");
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
