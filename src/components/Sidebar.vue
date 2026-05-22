<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <aside class="w-72 bg-zinc-950 border-r border-zinc-800 min-h-screen p-6 fixed left-0 top-0">

    <RouterLink
      to="/"
      class="text-4xl font-black text-white mb-10 block"
    >
      GameDEV
    </RouterLink>

    <nav class="flex flex-col gap-3">

      <RouterLink
        to="/"
        class="text-zinc-300 hover:text-white hover:bg-zinc-800 rounded-xl duration-300 text-lg">
        🎮 Início
      </RouterLink>

      <RouterLink
        to="/popular"
        class="text-zinc-300 hover:text-white hover:bg-zinc-800 rounded-xl duration-300 text-lg">
        🔥 Populares
      </RouterLink>

    </nav>

    <!--<div class="mt-12">
      <h2 class="text-zinc-500 uppercase text-sm font-bold mb-4">
        Categorias
      </h2>

      <div class="flex flex-col gap-2">
        <button class="text-left text-zinc-400 hover:text-white duration-300">
          Ação
        </button>

        <button class="text-left text-zinc-400 hover:text-white duration-300">
          RPG
        </button>

        <button class="text-left text-zinc-400 hover:text-white duration-300">
          Terror
        </button>

        <button class="text-left text-zinc-400 hover:text-white duration-300">
          Corrida
        </button>
      </div> -->
    <!-- </div> --> -->

  </aside>
</template>
