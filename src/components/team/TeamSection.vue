<script>
import gql from 'graphql-tag';

import { placeholderImage } from '@/constants';
import { TitleAndText } from '@/components';
import TeamList from './TeamList.vue';
import { AppButton } from '@/components/button';

export default {
  name: 'Team',
  components: { AppButton, TeamList, TitleAndText },
  data: { placeholderImage },
  props: {
    imageRight: {
      type: Boolean,
      default: false,
    },
    showButton: {
      type: Boolean,
      default: false,
    },
  },
  apollo: {
    content: {
      query: gql`
        query content($id: ID!) {
          content(where: { id: $id }) {
            id
            whoWeAreTitle
            whoWeAreDescription
            whoWeAreButtonText
            whoWeAreImage {
              publicUrl
            }
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
  <section v-if="!this.$apollo.queries.content.loading" class="team">
    <div class="team__container container">
      <div :class="`team__image ${imageRight ? 'team__image--right' : ''}`">
        <img :src="content.whoWeAreImage ? content.whoWeAreImage.publicUrl : placeholderImage" :alt="content.whoWeAreTitle"/>
      </div>

      <div class="team__content">
        <TitleAndText type="h2" :title="content.whoWeAreTitle">
          {{ content.whoWeAreDescription }}
        </TitleAndText>

        <AppButton
          v-if="showButton"
          class="team__content__button"
          link="/about"
        >
          {{ content.whoWeAreButtonText }}
        </AppButton>
        <TeamList />
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.team {
  margin-bottom: 5rem;

  @include responsive(tablet) {
    margin-bottom: 8rem;
  }

  @include responsive(desktop) {
    position: relative;
  }

  &__container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__image {
    display: none;

    @include responsive(desktop) {
      display: block;
      flex-basis: 48%;

      img {
        margin-left: -2rem; // Mitigate the margin from the wrapper's padding of 2rem
        border-radius: 0 150px 250px 0;
        position: absolute;
        top: 50%;
        width: 45%;
        transform: translateY(-50%);
        left: 0;
        max-height: 75%;
        object-fit: cover;
      }
    }

    &--right {
      @include responsive(desktop) {
        display: block;
        flex-basis: 48%;
        order: 1;

        img {
          margin-left: 2rem; // Mitigate the margin from the wrapper's padding of 2rem
          border-radius: 150px 0 0 350px;
          left: unset;
          right: 0;
        }
      }
    }
  }

  &__content {
    @include responsive(desktop) {
      flex-basis: 48%;
    }

    &__button {
      margin-bottom: 2rem;

      @include responsive(desktop) {
        margin-bottom: 0;
      }
    }
  }
}
</style>
