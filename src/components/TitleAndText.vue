<script>
export default {
  name: 'TitleAndText',
  props: {
    title: {
      type: String,
      default: 'Default title',
    },
    type: {
      type: String,
      default: 'h2',
    },
    bgImageUrl: {
      type: String,
      default: '',
    },
  },
  methods: {
    // Check if the type property is h1
    isH1() {
      return this.type === 'h1' ?? this.type === 'H1';
    },
  }
};
</script>

<template>
  <section :class="[`title-text ${isH1() ? 'title-text--h1' : ''}`]">
    <div :class="[`title-text__container ${isH1() ? 'container' : ''}`]">
      <div :class="[`title-text__content ${isH1() ? 'title-text__content--flex' : ''}`]">
        <h1 class="title-text__content__title" v-if="isH1()">{{ title }}</h1>
        <h2 class="title-text__content__title" v-else>{{ title }}</h2>

        <p class="title-text__content__description">
          <slot></slot>
        </p>
      </div>

      <div v-if="bgImageUrl !== ''" class="title-text__image">
        <img :src="bgImageUrl" />
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.title-text {
  position: relative;
  margin-bottom: 2rem;

  @include responsive(tablet) {
    margin-bottom: 3rem;
  }

  &--h1 {
    margin-bottom: 5rem;

    @include responsive(tablet) {
      margin-bottom: 8rem;
    }
  }

  &__content {
    &__title {
      margin-bottom: 1rem;
      text-align: center;

      @include responsive(tablet) {
        text-align: left;
      }
    }

    &__description {
      font-size: $fontSize20;

      @include responsive(tablet) {
        width: 50%;
      }

      @include responsive(desktop) {
        margin-top: 1rem;
      }
    }

    &--flex {
      @include responsive(desktop) {
        display: flex;
        justify-content: space-between;
      }
    }
  }

  &__image {
    position: absolute;
    top: -5rem;
    left: 0;
    z-index: -1;

    img {
      width: 100%;
      max-width: 100%;
    }

    @include responsive(tablet) {
      img {
        width: 30rem;
      }
    }
  }
}
</style>
