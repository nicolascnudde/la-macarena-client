<script>
import gql from 'graphql-tag';

import UspsListItem from './UspsListItem.vue';

export default {
  name: 'UspsList',
  components: { UspsListItem },
  apollo: {
    usps: {
      query: gql`
        query usps {
          usps {
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
  <ul class="usps__list">
    <UspsListItem
      v-for="usp in usps"
      :key="usp.id"
      :title="usp.title"
      :description="usp.description"
      :image="
        usp.image
          ? usp.image.publicUrl
          : 'https://res.cloudinary.com/dvb6lcmag/image/upload/v1654678968/content/default-image_onwn5a.webp'
      "
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
