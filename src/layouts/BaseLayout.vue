<script>
import { AppHeader } from '../components/layout';

export default {
  name: 'BaseLayout',
  components: { AppHeader },
};
</script>

<template>
  <AppHeader />

  <main>
    <slot></slot>
  </main>
</template>
