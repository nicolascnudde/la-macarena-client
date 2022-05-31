<script>
import CategoriesListItem from './CategoriesListItem.vue';

export default {
  name: 'CategoriesList',
  components: { CategoriesListItem },
};
</script>

<template>
  <ul class="categories__list">
    <CategoriesListItem />

    <CategoriesListItem />

    <CategoriesListItem />
  </ul>
</template>

<style lang="scss">
.categories__list {
  @include responsive(tablet) {
    display: flex;
    flex-wrap: wrap;
    gap: 4%;
  }

  @include responsive(desktop) {
    display: flex;
    flex-wrap: wrap;
    gap: 2%;
  }
}
</style>
