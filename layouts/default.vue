<template>
  <div>
    <Header />
    <div class="container">
      <Breadcrumb />
      <slot />
    </div>
    <Footer />
  </div>
</template>

<script setup>
import Header from '@/components/Header.vue'
import Breadcrumb from '@/components/Breadcrumb.vue'
import Footer from '@/components/Footer.vue'
</script>
