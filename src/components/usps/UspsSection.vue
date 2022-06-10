<script>
import UspsList from './UspsList.vue';

export default {
  name: 'Usps',
  components: { UspsList },
};
</script>

<template>
  <section class="usps">
    <div class="container">
      <UspsList />
    </div>
  </section>
</template>

<style lang="scss">
.usps {
  margin-bottom: 5rem;

  @include responsive(tablet) {
    margin-bottom: 8rem;
  }
}
</style>
