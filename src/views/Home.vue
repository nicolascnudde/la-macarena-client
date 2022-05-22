<script>
import BaseLayout from '../layouts/BaseLayout.vue';

export default {
  name: 'Home',
  components: { BaseLayout },
};
</script>

<template>
  <BaseLayout>
    <h1>Say hello</h1>
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
