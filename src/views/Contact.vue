<script>
import { useMeta } from 'vue-meta';

import BaseLayout from '../layouts/BaseLayout.vue';
import FaqSection from '@/components/faqs/FaqSection.vue';

export default {
  name: 'Contact',
  components: { BaseLayout, FaqSection },
  setup() {
    useMeta({ title: 'Contact' });
  },
};
</script>

<template>
  <BaseLayout>
    <h1>Say hello</h1>

    <FaqSection />
  </BaseLayout>
</template>

<style lang="scss"></style>
