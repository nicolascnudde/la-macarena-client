<script>
import UspsList from './UspsList.vue';
import TitleAndText from '../TitleAndText.vue';

export default {
  name: 'Usps',
  components: { TitleAndText, UspsList },
  props: {
    title: {
      type: String,
      default: 'Title',
    },
    description: {
      type: String,
      default: 'Category',
    },
  },
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
