<script setup>
import { ref, onMounted } from 'vue'
import { useRoute, RouterLink } from 'vue-router'
import axios from 'axios'
import { filterGames } from '@/utils/filter'

const route = useRoute()

const games = ref([])

const API_KEY = '0ee8e9fea4684d2c8a8cb60b1cf93e81'

async function searchGames() {
  try {
    const response = await axios.get(
      `https://api.rawg.io/api/games?search=${route.params.query}&key=${API_KEY}`
    )

    games.value = filterGames(response.data.results)
  } catch (error) {
    console.log(error)
  }
}

onMounted(() => {
  searchGames()
})
</script>

<template>
  <div class="bg-zinc-900 min-h-screen p-10">

    <h1 class="text-white text-5xl font-bold mb-2">
      Resultados da Busca
    </h1>

    <p class="text-zinc-400 mb-10">
      Pesquisa: "{{ route.params.query }}"
    </p>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

      <div
        v-for="game in games"
        :key="game.id"
        class="bg-zinc-800 rounded-2xl overflow-hidden shadow-xl flex flex-col"
      >
        <img
          :src="game.background_image"
          :alt="game.name"
          class="w-full h-60 object-cover"
        >

        <div class="p-5 flex-1 flex flex-col">

          <h2 class="text-white text-2xl font-bold mb-3">
            {{ game.name }}
          </h2>

          <div class="flex justify-between mb-4">
            <span class="text-white">
              ⭐ {{ game.rating }}
            </span>

            <span class="text-zinc-400 text-sm">
              {{ new Date(game.released).toLocaleDateString('pt-BR') }}
            </span>
          </div>

          <RouterLink
            :to="`/game/${game.id}`"
            class="mt-auto block text-center bg-gray-600 hover:bg-gray-700 text-white py-3 rounded-xl duration-300 font-semibold"
          >
            Descrição
          </RouterLink>

        </div>

      </div>

    </div>

  </div>
</template>
