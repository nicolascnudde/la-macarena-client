<script>
import { useMeta } from 'vue-meta';
import { useRoute } from 'vue-router';

import BaseLayout from '@/layouts/BaseLayout.vue';
import TitleAndText from '@/components/TitleAndText.vue';

export default {
  name: 'Activity',
  components: { BaseLayout, TitleAndText },
  setup() {
    useMeta({ title: 'Activity' });
    const route = useRoute();
    const id = route.params.id;
    console.log(id);
  },
};
</script>

<template>
  <BaseLayout>
    <TitleAndText
      bgImageUrl="https://res.cloudinary.com/dvb6lcmag/image/upload/v1653846484/bg-images/Brush_blue_bxzmpm.png"
      type="h1"
      title="Activity"
    >
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua.
    </TitleAndText>
  </BaseLayout>
</template>

<style lang="scss"></style>
