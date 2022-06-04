<script>
import { useMeta } from 'vue-meta';

import BaseLayout from '@/layouts/BaseLayout.vue';
import GoalsSection from '@/components/goals/GoalsSection.vue';
import TitleAndText from '@/components/TitleAndText.vue';

export default {
  name: 'Goals',
  components: { BaseLayout, GoalsSection, TitleAndText },
  setup() {
    useMeta({
      title: 'Goals',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    });
  },
};
</script>

<template>
  <BaseLayout>
    <TitleAndText
      bgImageUrl="https://res.cloudinary.com/dvb6lcmag/image/upload/v1653846484/bg-images/Brush_Green_yuvrrs.png"
      type="h1"
      title="Goals"
    >
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua.
    </TitleAndText>

    <GoalsSection />
  </BaseLayout>
</template>

<style lang="scss"></style>
