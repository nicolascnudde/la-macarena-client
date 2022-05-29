<script>
import { TheFooter, TheHeader } from '../components/layout';

export default {
  name: 'BaseLayout',
  components: { TheFooter, TheHeader },
};
</script>

<template>
  <div class="app__wrapper">
    <TheHeader />

    <main class="app__main">
      <slot></slot>
    </main>

    <TheFooter />
  </div>
</template>
