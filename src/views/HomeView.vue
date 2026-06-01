<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'
import { filterGames } from '@/utils/filter'
import { RouterLink } from 'vue-router'

const games = ref([])

const API_KEY = '0ee8e9fea4684d2c8a8cb60b1cf93e81'

async function getGames() {
  try {
    const response = await axios.get(
      `https://api.rawg.io/api/games?key=${API_KEY}`
    )

    games.value = filterGames(response.data.results)

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

    <h1 class="text-white text-5xl font-bold mb-2">
      Catálogo de Jogos
    </h1>

    <p class="text-zinc-400 mb-10 text-lg">
      Biblioteca com uma variedade de Jogos
    </p>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

      <div
        v-for="game in games"
        :key="game.id"
        class="bg-zinc-800 rounded-2xl overflow-hidden shadow-xl hover:scale-105 hover:shadow-white/20 duration-300 flex flex-col"
      >
        <img
          :src="game.background_image"
          :alt="game.name"
          class="w-full h-60 object-cover"
        >

        <div class="p-5 flex-1 flex flex-col">

          <h2
            class="text-white text-2xl font-bold mb-3 h-[72px] overflow-hidden"
          >
            {{ game.name }}
          </h2>

          <div class="flex items-center justify-between mb-4">

            <span class="text-white font-semibold">
              ⭐ {{ game.rating }}
            </span>

            <span class="text-zinc-400 text-sm font-semibold">
              {{ new Date(game.released).toLocaleDateString('pt-BR') }}
            </span>

          </div>

          <div class="flex flex-wrap gap-2 mb-4">

            <span class="text-white text-sm font-semibold">
              Gênero:
            </span>

            <span
              v-for="genre in game.genres"
              :key="genre.id"
              class="text-gray-400 text-sm font-bold hover:text-white transition-colors cursor-pointer"
            >
              {{ genre.name }}
            </span>

          </div>

          <RouterLink
            :to="`/game/${game.id}`"
            class="mt-auto block text-center bg-purple-700 hover:bg-purple-800 text-white py-3 rounded-xl duration-300 font-semibold"
          >
            Descrição
          </RouterLink>

        </div>

      </div>

    </div>

  </div>
</template>
