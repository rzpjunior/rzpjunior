<template>
  <div>
    <div v-if="isLoading">
      <loading/>
    </div>
    <div v-else>
      <home/>
    </div>
  </div>
</template>

<script>
import Loading from './components/Loading.vue';
import Home from './components/Home.vue';

export default {
  name: 'App',
  components: {
    Loading,
    Home
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
