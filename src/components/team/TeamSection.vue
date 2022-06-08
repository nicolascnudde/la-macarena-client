<script>
import gql from 'graphql-tag';

import TeamList from './TeamList.vue';
import TitleAndText from '../TitleAndText.vue';

export default {
  name: 'Team',
  components: { TeamList, TitleAndText },
  apollo: {
    content: {
      query: gql`
        query content($id: ID!) {
          content(where: { id: $id }) {
            id
            whoWeAreTitle
            whoWeAreDescription
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
  <section v-if="!this.$apollo.loading" class="team">
    <div class="team__container container">
      <div :class="`team__image ${imageRight ? 'team__image--right' : ''}`">
        <img
          src="https://res.cloudinary.com/dvb6lcmag/image/upload/v1654678968/content/default-image_onwn5a.webp"
        />
      </div>

      <div class="team__content">
        <TitleAndText type="h2" :title="content.whoWeAreTitle">
          {{ content.whoWeAreDescription }}
        </TitleAndText>

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
        border-radius: 0 75px 150px 0;
        position: absolute;
        top: 50%;
        width: 45%;
        transform: translateY(-50%);
        left: 0;
      }
    }

    &--right {
      @include responsive(desktop) {
        display: block;
        flex-basis: 48%;
        order: 1;

        img {
          margin-left: 2rem; // Mitigate the margin from the wrapper's padding of 2rem
          border-radius: 75px 0 0 150px;
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
  }
}
</style>
