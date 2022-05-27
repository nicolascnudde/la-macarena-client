<script>
import { TheFooter, TheHeader } from '../components/layout';

export default {
  name: 'BaseLayout',
  components: { TheFooter, TheHeader },
};
</script>

<template>
  <div>
    <TheHeader />

    <main>
      <slot></slot>
    </main>

    <TheFooter />
  </div>
</template>
