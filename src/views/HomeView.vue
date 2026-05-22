<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'

const games = ref([])

const API_KEY = '0ee8e9fea4684d2c8a8cb60b1cf93e81'

async function getGames() {
  try {
    const response = await axios.get(
      `https://api.rawg.io/api/games?key=${API_KEY}`
    )

    games.value = response.data.results
  } catch (error) {
    console.log(error)
  }
}

onMounted(() => {
  getGames()
})
</script>

<template>
  <div class="bg-zinc-900 min-h-screen p-10">
    <h1 class="text-white text-5xl font-bold mb-8">
      Catálogo de Jogos
    </h1>

    <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
      <div
        v-for="game in games"
        :key="game.id"
        class="bg-zinc-800 rounded-xl overflow-hidden shadow-lg hover:scale-105 duration-300"
      >
        <img
          :src="game.background_image"
          :alt="game.name"
          class="w-full h-56 object-cover"
        >

        <div class="p-4">
          <h2 class="text-white text-xl font-bold">
            {{ game.name }}
          </h2>

          <p class="text-zinc-400 mt-2">
            Nota: {{ game.rating }}
          </p>

          <p class="text-zinc-400">
            Lançamento: {{ new Date(game.released).toLocaleDateString('pt-BR') }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
