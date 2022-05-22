<script>
import Home from './views/Home.vue';

export default {
  name: 'App',
  components: { Home },
};
</script>

<template>
  <Home />
</template>

<style lang="scss">
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

html {
  scroll-behavior: smooth;
}
</style>
