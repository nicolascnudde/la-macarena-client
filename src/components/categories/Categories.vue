<script>
import CategoriesList from './CategoriesList.vue';
import TitleAndText from '../TitleAndText.vue';

export default {
  name: 'Categories',
  components: { CategoriesList, TitleAndText },
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
  <section class="categories">
    <div class="container">
      <TitleAndText
        bgImageUrl="https://res.cloudinary.com/dvb6lcmag/image/upload/v1653846485/bg-images/Brush_Light_Blue_eywnk7.png"
        type="h2"
        title="Categories"
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </TitleAndText>

      <CategoriesList />
    </div>
  </section>
</template>

<style lang="scss">
.categories {
  display: block;
}
</style>
