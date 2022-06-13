<script>
import AppButton from '@/components/button/AppButton.vue';

export default {
  name: 'Hero',
  components: { AppButton },
  props: {
    title: {
      type: String,
    },
    description: {
      type: String,
    },
    image: {
      type: String,
    },
    buttonText: {
      type: String,
      default: 'Button text',
    },
    buttonLink: {
      type: String,
      default: '#',
    },
    noButton: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<template>
  <section class="hero">
    <div class="hero__content container">
      <h1 class="hero__content__title">{{ title }}</h1>

      <p class="hero__content__description">
        {{ description }}
      </p>

      <AppButton
        v-if="!noButton"
        class="hero__content__button"
        type="secondary"
        :link="buttonLink"
      >
        {{ buttonText }}
      </AppButton>
    </div>

    <div class="hero__image">
      <img :src="image" :alt="title" />
    </div>
  </section>
</template>

<style lang="scss">
.hero {
  margin-bottom: 5rem;
  min-height: 31.5rem; // Calculated from image height (30rem) and the absolute positioning (1rem) from the top
  position: relative;

  @include responsive(tablet) {
    position: static;
    min-height: 31rem; // Calculated from image height (40rem) and header height (8rem) - margin-bottom (1rem)
    margin-bottom: 8rem;
  }

  &__content {
    &__title {
      margin-bottom: 1rem;

      @include responsive(desktop) {
        width: 50%;
      }
    }

    &__description {
      margin-bottom: 1.5rem;
      font-size: $fontSize20;

      @include responsive(tablet) {
        width: 50%;
      }

      @include responsive(desktop) {
        width: 30%;
      }
    }
  }

  &__image {
    position: absolute;
    top: 1.5rem;
    opacity: 0.4;
    z-index: -1;

    @include responsive(tablet) {
      top: 0;
      right: 0;
    }

    img {
      width: 100vw;
      height: 30rem;
      border-radius: 100px 70px 100px 0;
      max-width: 100%;
      object-fit: cover;
      object-position: center;

      @include responsive(tablet) {
        border-radius: 100px 0 0 200px;
        width: 75vw;
        height: 40rem;
      }

      @include responsive(desktop) {
        border-radius: 100px 0 0 200px;
        width: 75vw;
      }
    }
  }
}
</style>
