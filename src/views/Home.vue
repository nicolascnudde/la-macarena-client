<script>
import { useMeta } from 'vue-meta';

import BaseLayout from '@/layouts/BaseLayout.vue';
import Hero from '@/components/hero/Hero.vue';
import InfoBlock from '../components/InfoBlock.vue';
import Cta from '../components/cta/Cta.vue';

export default {
  name: 'Home',
  components: { BaseLayout, Cta, Hero, InfoBlock },
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

    <InfoBlock />

    <Cta />
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
