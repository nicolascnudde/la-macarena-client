<script>
import gql from 'graphql-tag';

import FacebookIcon from '@/assets/icons/facebook.svg?component';
import InstagramIcon from '@/assets/icons/instagram.svg?component';

export default {
  name: 'Socials',
  components: { FacebookIcon, InstagramIcon },
  apollo: {
    content: {
      query: gql`
        query content($id: ID!) {
          content(where: { id: $id }) {
            id
            socialMediaInstagram
            socialMediaFacebook
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
  <div v-if="!this.$apollo.queries.content.loading" class="socials">
    <ul class="socials__list">
      <li class="socials__list__item">
        <a
          :href="content.socialMediaInstagram"
          target="_blank"
          rel="noopener noreferrer"
        >
          <InstagramIcon />
        </a>
      </li>

      <li class="socials__list__item">
        <a
          :href="content.socialMediaFacebook"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FacebookIcon />
        </a>
      </li>
    </ul>
  </div>
</template>

<style lang="scss">
.socials {
  &__list {
    display: flex;
    justify-content: center;
    align-items: baseline;
    gap: 3rem;

    &__item {
      @include responsive(desktop) {
        transition: transform $transitionFast;

        &:hover {
          transform: scale(1.2);
        }
      }
    }
  }
}
</style>
