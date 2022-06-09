<script>
import { TheFooter, TheHeader } from '../components/layout';

export default {
  name: 'BaseLayout',
  components: { TheFooter, TheHeader },
  props: {
    pageClass: {
      type: String,
    },
  }
};
</script>

<template>
  <div class="app__wrapper">
    <TheHeader />

    <main :class="`app__main ${pageClass}`">
      <slot></slot>
    </main>

    <TheFooter />
  </div>
</template>
