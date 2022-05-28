<script>
import { useMeta } from 'vue-meta';

import BaseLayout from '@/layouts/BaseLayout.vue';
import Hero from '@/components/hero/Hero.vue';

export default {
  name: 'Home',
  components: { BaseLayout, Hero },
  setup() {
    useMeta({ title: '' });
  },
};
</script>

<template>
  <BaseLayout>
    <Hero
      title="La Macarena"
      description="Homepage hero description."
      buttonText="Upcoming activities"
      buttonLink="/activities"
    />
  </BaseLayout>
</template>

<style lang="scss">
h1 {
  font-size: $fontSize80;
  font-weight: $fontWeightBold;

  @include responsive(tablet) {
    color: lightcoral;
  }

  @include responsive(desktop) {
    color: lightblue;
  }
}
</style>
