<script>
import gql from 'graphql-tag';

import TitleAndText from '../TitleAndText.vue';
import { placeholderImage } from '@/constants';

export default {
  name: 'Our Story',
  components: { TitleAndText },
  data: { placeholderImage },
  apollo: {
    content: {
      query: gql`
        query content($id: ID!) {
          content(where: { id: $id }) {
            id
            aboutPageStoryTitle
            aboutPageStoryDescription
            aboutPageStoryImageOne {
              publicUrl
            }
            aboutPageStoryImageTwo {
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
  <section v-if="!this.$apollo.queries.content.loading" class="our-story">
    <div class="our-story__container container">
      <div class="our-story__background"></div>

      <div class="our-story__image">
        <img :src="content.aboutPageStoryImageOne ? content.aboutPageStoryImageOne.publicUrl : placeholderImage" />

        <img :src="content.aboutPageStoryImageTwo ? content.aboutPageStoryImageTwo.publicUrl : placeholderImage" />
      </div>

      <div class="our-story__content">
        <TitleAndText
          type="h2"
          :title="content.aboutPageStoryTitle"
          bgImageUrl="https://res.cloudinary.com/dvb6lcmag/image/upload/v1653846485/bg-images/Brush_Pink_dsvgal.png"
        >
          {{ content.aboutPageStoryDescription }}
        </TitleAndText>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.our-story {
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

  &__background {
    display: none;

    @include responsive(desktop) {
      display: block;
      background: $clrRed;
      position: absolute;
      left: 0;
      top: 50%;
      transform: translateY(-50%);
      height: 20rem;
      width: 48%;
      border-radius: 0 25px 25px 0;
    }
  }

  &__image {
    display: none;

    @include responsive(desktop) {
      display: block;
      flex-basis: 48%;
      position: relative;
      padding: 10rem 0;

      img {
        width: 15rem;
        height: 10rem;
        object-fit: cover;
        position: absolute;

        &:first-child {
          top: 3rem;
          right: 6rem;
          border-radius: 90px 40px 70px 50px;
        }

        &:last-child {
          bottom: 3rem;
          right: 14rem;
          border-radius: 30px 60px 40px 90px;
        }
      }
    }
  }

  &__content {
    @include responsive(desktop) {
      flex-basis: 48%;
    }

    .title-text {
      margin-bottom: 0;
    }
  }
}
</style>
