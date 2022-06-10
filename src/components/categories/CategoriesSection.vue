<script>
import CategoriesList from './CategoriesList.vue';
import TitleAndText from '../TitleAndText.vue';

export default {
  name: 'CategoriesSection',
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
  <section class="categories" id="categories">
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
  margin-bottom: 5rem;

  @include responsive(tablet) {
    margin-bottom: 8rem;
  }

  .title-text {
    margin-bottom: 0; // Remove the margin bottom because we're adding margin top on the cards in CategoriesListItem.vue
  }
}
</style>
