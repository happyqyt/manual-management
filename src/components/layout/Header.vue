<script setup>
import Hamburger from './header/Hamburger.vue'
import UserMenu from './header/UserMenu.vue'
import Manual from '@/views/manual/Index.vue'
</script>

<template>
  <Hamburger />
  <div class="flex-1">
    <Manual />
  </div>
  <UserMenu />
</template>