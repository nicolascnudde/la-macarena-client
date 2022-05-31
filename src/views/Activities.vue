<script>
import { useMeta } from 'vue-meta';

import BaseLayout from '@/layouts/BaseLayout.vue';
import TitleAndText from '@/components/TitleAndText.vue';
import Categories from '@/components/categories/Categories.vue';

export default {
  name: 'Activities',
  components: { BaseLayout, Categories, TitleAndText },
  setup() {
    useMeta({ title: 'Activities' });
  },
};
</script>

<template>
  <BaseLayout>
    <TitleAndText
      bgImageUrl="https://res.cloudinary.com/dvb6lcmag/image/upload/v1653846484/bg-images/Brush_blue_bxzmpm.png"
      type="h1"
      title="Activities"
    >
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua.
    </TitleAndText>

    <Categories />
  </BaseLayout>
</template>

<style lang="scss"></style>
