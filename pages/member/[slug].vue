<template>
  <div class="container">
    <component :is="currentComponent" />
  </div>
</template>

<script setup>
import { useRoute } from "vue-router";
import Dashboard from "@/components/member/dashboard.vue";
import Register from "@/components/member/register.vue";
import Login from "@/components/member/login.vue";
import ForgotPassword from "@/components/member/forgot-password.vue";

import { computed } from "vue";

const route = useRoute();

const currentComponent = computed(() => {
  switch (route.params.slug) {
    case "register":
      return Register;
    case "login":
      return Login;
    case "forgot-password":
      return ForgotPassword;
    default:
      return Dashboard;
  }
});
</script>
