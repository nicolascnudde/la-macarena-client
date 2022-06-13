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
          <InstagramIcon /><span>Instagram</span>
        </a>
      </li>

      <li class="socials__list__item">
        <a
          :href="content.socialMediaFacebook"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FacebookIcon /><span>Facebook</span>
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
      // Render the names for accessibility reasons but hide them from screen
      span {
        opacity: 0;
        position: absolute;
        top: 0;
        left: 0;
        transform: translateX(-1000%);
      }

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
