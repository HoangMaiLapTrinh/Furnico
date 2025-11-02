<template>
  <div>
    <div class="container">
      <Header />
      <Breadcrumb />
    </div>
    <div class="bg-light-gray">
      <div class="container">
        <slot />
      </div>
    </div>
    <NewLetter />
    <div class="container">
      <Footer />
    </div>
  </div>
</template>

<script setup>
import Header from '@/components/Header.vue'
import Breadcrumb from '@/components/Breadcrumb.vue'
import Footer from '@/components/Footer.vue'
import NewLetter from '@/components/NewLetter.vue'
</script>
<style scoped>
@media (min-width: 1400px) {
    .container, .container-lg, .container-md, .container-sm, .container-xl, .container-xxl {
        max-width: 1180px;
    }
}
.bg-light-gray {
  background-color: #f3f3f3;
}
</style>
