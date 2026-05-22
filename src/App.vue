<script setup>
import { RouterView } from 'vue-router'
import Sidebar from './components/Sidebar.vue'
</script>

<template>
  <div class="bg-zinc-900 min-h-screen">

    <Sidebar />

    <main class="ml-72 p-10">
      <RouterView />
    </main>

  </div>
</template>
