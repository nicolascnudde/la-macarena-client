<script>
import gql from 'graphql-tag';

import { AppButton } from '@/components/button';
import { placeholderImage } from '@/constants';

export default {
  name: 'Cta',
  components: { AppButton },
  data: { placeholderImage },
  apollo: {
    content: {
      query: gql`
        query content($id: ID!) {
          content(where: { id: $id }) {
            id
            ctaTitle
            ctaDescription
            ctaImage {
              publicUrl
            }
            ctaButtonText
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
  <section v-if="!this.$apollo.queries.content.loading" class="cta">
    <div class="cta__container container">
      <div class="cta__content">
        <h2 class="cta__content__title">{{ content.ctaTitle }}</h2>

        <div class="cta__content__image cta__content__image--mobile">
          <img :src="content.ctaImage ? content.ctaImage.publicUrl : placeholderImage" :alt="content.ctaTitle"/>
        </div>

        <p class="cta__content__description">
          {{ content.ctaDescription }}
        </p>

        <AppButton class="cta__content__button" type="primary" link="/contact">
          {{ content.ctaButtonText }}
        </AppButton>
      </div>

      <div class="cta__content__image cta__content__image--desktop">
        <img :src="content.ctaImage ? content.ctaImage.publicUrl : placeholderImage" :alt="content.ctaTitle"/>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.cta {
  background: $clrYellow;
  margin-bottom: 5rem;

  @include responsive(tablet) {
    margin-bottom: 8rem;
  }

  &__container {
    @include responsive(tablet) {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }

  &__content {
    padding: 2rem 0;

    @include responsive(tablet) {
      flex-basis: 48%;
    }

    &__title {
      text-align: center;
      margin-bottom: 2rem;

      @include responsive(tablet) {
        text-align: left;
      }
    }

    &__image {
      text-align: center;

      img {
        width: 15rem;
        border-radius: 100px 40px 60px 40px;
      }

      &--mobile {
        margin-bottom: 2rem;

        @include responsive(tablet) {
          display: none;
        }
      }

      &--desktop {
        display: none;
        margin: 2rem 0;
        flex-basis: 50%;

        img {
          width: 100%;
          max-height: 25rem;
          object-fit: cover;

          @include responsive(desktop) {
            width: 48%;
          }
        }

        @include responsive(tablet) {
          display: block;
        }
      }
    }

    &__description {
      margin-bottom: 2rem;

      @include responsive(desktop) {
        width: 50%;
      }
    }
  }
}
</style>
