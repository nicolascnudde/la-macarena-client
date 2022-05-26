<script>
import { TheHeader } from '../components/layout';

export default {
  name: 'BaseLayout',
  components: { TheHeader },
};
</script>

<template>
  <div>
    <TheHeader />

    <main>
      <slot></slot>
    </main>
  </div>
</template>
