<template>
  <navbar />
  <router-view />
</template>

<script>
import navbar from "@/components/_navbar.vue";
export default {
  components: {
    navbar,
  },
};
</script>
