<script setup>
import { ref } from 'vue'
import { RouterLink, useRouter } from 'vue-router'

const router = useRouter()

const search = ref('')

function searchGame() {
  if (!search.value.trim()) return

  router.push(`/search/${encodeURIComponent(search.value)}`)

  search.value = ''
}
</script>

<template>
  <aside class="w-72 bg-zinc-950 border-r border-zinc-800 min-h-screen p-6 fixed left-0 top-0">

    <RouterLink
      to="/"
      class="text-4xl font-black text-white mb-10 block"
    >
      GameDEV
    </RouterLink>

    <div class="mb-8">
      <input
        v-model="search"
        @keyup.enter="searchGame"
        type="text"
        placeholder="Pesquisar jogo..."
        class="w-full bg-zinc-800 text-white px-4 py-3 rounded-xl outline-none border border-zinc-700 focus:border-white"
      >

      <button
        @click="searchGame"
        class="w-full mt-3 bg-zinc-600 hover:bg-zinc-800 text-white py-2 rounded-xl duration-300"
      >
        Buscar
      </button>
    </div>

    <nav class="flex flex-col gap-3">

      <RouterLink
        to="/"
        class="text-zinc-300 hover:text-white hover:bg-zinc-800 rounded-xl duration-300 text-lg"
      >
        🎮 Início
      </RouterLink>

      <RouterLink
        to="/popular"
        class="text-zinc-300 hover:text-white hover:bg-zinc-800 rounded-xl duration-300 text-lg"
      >
        🔥 Populares
      </RouterLink>

    </nav>

  </aside>
</template>
