<script>
import { useMeta } from 'vue-meta';

import BaseLayout from '../layouts/BaseLayout.vue';

export default {
  name: '404',
  components: { BaseLayout },
  setup() {
    useMeta({ title: '404' });
  },
};
</script>

<template>
  <BaseLayout>
    <h1>404</h1>

    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
    </p>

    <router-link to="/">Home</router-link>
  </BaseLayout>
</template>

<style lang="scss"></style>
