<script>
import gql from 'graphql-tag';

import { placeholderImage } from '@/constants';
import CategoriesListItem from './CategoriesListItem.vue';

export default {
  name: 'CategoriesList',
  components: { CategoriesListItem },
  data: { placeholderImage },
  apollo: {
    categories: {
      query: gql`
        query categories {
          categories(orderBy: { id: asc }) {
            id
            title
            description
            image {
              publicUrl
            }
          }
        }
      `,
    },
  },
};
</script>

<template>
  <ul class="categories__list">
    <CategoriesListItem
      v-for="category in categories"
      :key="category.id"
      :id="category.id"
      :title="category.title"
      :description="category.description"
      :image="category.image ? category.image.publicUrl : placeholderImage"
    />
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
