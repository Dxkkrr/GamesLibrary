<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import axios from 'axios'

const route = useRoute()

const game = ref(null)

const API_KEY = 'SUA_API_KEY'

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
    <img
      :src="game.background_image"
      :alt="game.name"
      class="w-full max-h-[500px] object-cover rounded-3xl mb-8"
    >

    <h1 class="text-5xl font-bold text-white mb-4">
      {{ game.name }}
    </h1>

    <div class="flex gap-6 mb-8">
      <span class="text-purple-400 text-xl">
        ⭐ {{ game.rating }}
      </span>

      <span class="text-zinc-400">
        {{ new Date(game.released).toLocaleDateString('pt-BR') }}
      </span>
    </div>

    <div
      class="text-zinc-300 leading-8 text-lg"
      v-html="game.description"
    ></div>
  </div>
</template>
