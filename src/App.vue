<script>
import gql from 'graphql-tag';
import Home from './views/Home.vue';

export default {
  name: 'App',
  components: { Home },
};
</script>

<template>
  <header>This will be the header.</header>

  <main>
    <Home />
  </main>

  <footer>This will be the footer.</footer>
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
