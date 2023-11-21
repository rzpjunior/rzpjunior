<!-- App.vue -->
<template>
  <div>
    <loading v-if="isLoading" />
    <div v-else>
      <!-- Your main content goes here -->
    </div>
  </div>
</template>

<script>
import Loading from './components/Loading.vue';

export default {
  name: 'App',
  components: {
    Loading,
  },
  data() {
    return {
      isLoading: true,
    };
  },
  mounted() {
    setTimeout(() => {
      this.isLoading = false;
    }, 2000);
  },
};
</script>
