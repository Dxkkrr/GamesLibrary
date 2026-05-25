<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'

const games = ref([])

const API_KEY = '0ee8e9fea4684d2c8a8cb60b1cf93e81'

async function getPopularGames() {
  try {
    const response = await axios.get(
      `https://api.rawg.io/api/games?ordering=-rating&key=${API_KEY}`
    )

    games.value = response.data.results.filter((game) => {
  const name = game.name.toLowerCase()

  const blockedWords = [
    'porn',
    'sex',
    'hentai',
    'adult',
    'nsfw'
  ]

  return !blockedWords.some(word => name.includes(word))
})
  } catch (error) {
    console.log(error)
  }
}

onMounted(() => {
  getPopularGames()
})
</script>

<template>
  <div class="bg-zinc-900 min-h-screen p-10">

    <h1 class="text-white text-5xl font-bold mb-2">
      Jogos Populares
    </h1>

    <p class="text-zinc-400 mb-10 text-lg">
      Os jogos mais bem avaliados da RAWG
    </p>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

      <div
        v-for="game in games"
        :key="game.id"
        class="bg-zinc-800 rounded-2xl overflow-hidden shadow-xl hover:scale-105 hover:shadow-green-500/20 duration-300"
      >
        <img
          :src="game.background_image"
          :alt="game.name"
          class="w-full h-60 object-cover"
        >

        <div class="p-5">

          <h2 class="text-white text-2xl font-bold mb-3">
            {{ game.name }}
          </h2>

          <div class="flex items-center justify-between mb-2">
            <span class="text-green-400 font-semibold">
              ⭐ {{ game.rating }}
            </span>

            <span class="text-zinc-400 text-sm">
              {{ new Date(game.released).toLocaleDateString('pt-BR') }}
            </span>
          </div>

          <div class="flex flex-wrap gap-2 mt-4">
            <span
              v-for="genre in game.genres"
              :key="genre.id"
              class="bg-green-500/20 text-green-300 px-3 py-1 rounded-full text-sm"
            >
              {{ genre.name }}
            </span>
          </div>

        </div>
      </div>

    </div>

  </div>
</template>
