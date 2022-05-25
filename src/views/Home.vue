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

    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
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
