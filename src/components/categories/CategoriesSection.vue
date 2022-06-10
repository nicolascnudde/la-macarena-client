<script>
import gql from 'graphql-tag';

import { TitleAndText } from '@/components';
import CategoriesList from './CategoriesList.vue';

export default {
  name: 'CategoriesSection',
  components: { CategoriesList, TitleAndText },
  apollo: {
    content: {
      query: gql`
        query content($id: ID!) {
          content(where: { id: $id }) {
            id
            activitiesPageCategoriesTitle
            activitiesPageCategoriesDescription
          }
        }
      `,
      variables: {
        id: 1,
      },
    },
  },
};
</script>

<template>
  <section v-if="!this.$apollo.queries.content.loading" class="categories" id="categories">
    <div class="container">
      <TitleAndText
        bgImageUrl="https://res.cloudinary.com/dvb6lcmag/image/upload/v1653846485/bg-images/Brush_Light_Blue_eywnk7.png"
        type="h2"
        :title="content.activitiesPageCategoriesTitle"
      >
        {{ content.activitiesPageCategoriesDescription }}
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
