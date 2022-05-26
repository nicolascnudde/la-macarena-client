<script>
import BaseLayout from '@/layouts/BaseLayout.vue';
import AppButton from '@/components/button/AppButton.vue';

export default {
  name: 'Home',
  components: { BaseLayout, AppButton },
};
</script>

<template>
  <BaseLayout>
    <h1>Say hello</h1>

    <AppButton type="secondary">
      <router-link to="/activities">
        Activities
      </router-link>
    </AppButton>
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
