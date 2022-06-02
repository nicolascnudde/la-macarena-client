<script>
import { useMeta } from 'vue-meta';

import Usps from '../components/usps/Usps.vue';

import BaseLayout from '../layouts/BaseLayout.vue';

export default {
  name: 'About',
  components: { BaseLayout, Usps },
  setup() {
    useMeta({ title: 'About' });
  },
};
</script>

<template>
  <BaseLayout>
    <h1>About us</h1>

    <Usps />
  </BaseLayout>
</template>
