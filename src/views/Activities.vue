<script>
import { useMeta } from 'vue-meta';

import BaseLayout from '../layouts/BaseLayout.vue';
import TitleAndText from '../components/TitleAndText.vue';

export default {
  name: 'Activities',
  components: { BaseLayout, TitleAndText },
  setup() {
    useMeta({ title: 'Activities' });
  },
};
</script>

<template>
  <BaseLayout>
    <TitleAndText bgImage="blue-brush.png" type="h" title="Activities">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua.
    </TitleAndText>
  </BaseLayout>
</template>

<style lang="scss"></style>
