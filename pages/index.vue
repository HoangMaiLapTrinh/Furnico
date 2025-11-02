<template>
  <div>
    <!-- Loading or redirecting to dashboard -->
  </div>
</template>

<script setup>
import { navigateTo } from '#app'

onMounted(() => {
  navigateTo('/dashboard')
})
</script>
