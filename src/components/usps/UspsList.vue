<script>
import gql from 'graphql-tag';

import { placeholderImage } from '@/constants';
import UspsListItem from './UspsListItem.vue';

export default {
  name: 'UspsList',
  components: { UspsListItem },
  data: { placeholderImage },
  apollo: {
    usps: {
      query: gql`
        query usps {
          usps(orderBy: { id: asc }) {
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
  <ul v-if="!this.$apollo.queries.usps.loading" class="usps__list">
    <UspsListItem
      v-for="usp in usps"
      :key="usp.id"
      :title="usp.title"
      :description="usp.description"
      :image="usp.image ? usp.image.publicUrl : placeholderImage"
    />
  </ul>
</template>

<style lang="scss">
.usps__list {
  @include responsive(tablet) {
    display: flex;
    flex-wrap: wrap;
    gap: 2%;
  }

  &__item {
    margin-top: 3rem;
  }
}
</style>
