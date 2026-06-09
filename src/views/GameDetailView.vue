<script setup>
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import axios from 'axios'

const route = useRoute()
const router = useRouter()

const game = ref(null)

const API_KEY = '0ee8e9fea4684d2c8a8cb60b1cf93e81'

function goBack() {
  router.back()
}

async function getGameDetails() {
  try {
    const response = await axios.get(
      `https://api.rawg.io/api/games/${route.params.id}?key=${API_KEY}`
    )

    game.value = response.data
  } catch (error) {
    console.log(error)
  }
}

onMounted(() => {
  getGameDetails()
})
</script>

<template>
  <div
    v-if="game"
    class="bg-zinc-900 min-h-screen p-10"
  >
    <button
      @click="goBack"
      class="mb-6 bg-zinc-800 hover:bg-zinc-700 text-white px-6 py-3 rounded-3xl duration-300 font-semibold cursor-pointer"
    >
      ← Voltar
    </button>

    <img
      :src="game.background_image"
      :alt="game.name"
      class="w-full max-h-[500px] object-cover rounded-3xl mb-8"
    >

    <h1 class="text-5xl font-bold text-white mb-4">
      {{ game.name }}
    </h1>

    <div class="flex gap-6 mb-8">
      <span class="text-white text-xl font-semibold">
        ⭐ {{ game.rating }}
      </span>

      <span class="text-zinc-400 flex items-center">
        {{ new Date(game.released).toLocaleDateString('pt-BR') }}
      </span>
    </div>

    <div
      class="text-zinc-300 leading-8 text-lg"
      v-html="game.description"
    ></div>

    <p class="text-zinc-500 italic mt-8">
      Descrição fornecida automaticamente pela API RAWG.
    </p>
  </div>
</template>
