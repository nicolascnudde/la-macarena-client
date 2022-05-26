<script>
import { TheHeader } from '../components/layout';

export default {
  name: 'BaseLayout',
  components: { TheHeader },
};
</script>

<template>
  <TheHeader />

  <main>
    <slot></slot>
  </main>
</template>
