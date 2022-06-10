<script>
import ConnectingArrowIcon from '@/assets/icons/connecting-arrow.svg?component';

export default {
  name: 'CategoriesListItem',
  components: { ConnectingArrowIcon },
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
    imageRight: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<template>
  <li class="goals__list__item">
    <div :class="[`goals__list__item__image ${ imageRight ? 'goals__list__item__image--right' : ''}`]">
      <img :src="image" :alt="title"/>
    </div>

    <div class="goals__list__item__content">
      <h2 class="goals__list__item__content__title">{{ title }}</h2>

      <p class="goals__list__item__content__description">{{ description }}</p>
    </div>

    <ConnectingArrowIcon class="goals__list__item__separator" />
  </li>
</template>

<style lang="scss">
.goals__list__item {
  margin-top: 3rem;
  padding-bottom: 10rem;
  position: relative;

  &:last-child {
    padding-bottom: 0;

    .goals__list__item__separator {
      display: none;
    }
  }

  @include responsive(tablet) {
    padding-bottom: 15rem;
  }

  @include responsive(desktop) {
    display: flex;
    justify-content: space-between;
    padding-bottom: 17rem;
  }

  &__content {
    @include responsive(desktop) {
      flex-basis: 48%;
      margin-top: 2rem;
    }

    &__title {
      margin-bottom: 1rem;
    }
  }

  &__image {
    margin-bottom: 1rem;

    @include responsive(desktop) {
      flex-basis: 48%;
      margin-bottom: 0;
    }

    &--right {
      order: 1;
    }

    img {
      border-radius: 100px 30px 70px 0;
      width: 100%;
      max-width: 100%;
      object-fit: cover;

      @include responsive(desktop) {
        width: 100%;
        height: 40rem;
      }
    }
  }

  &__separator {
    position: absolute;
    width: 75%;
    left: 50%;
    bottom: 0;
    transform: translateX(-50%);

    @include responsive(tablet) {
      width: 50%;
    }

    @include responsive(desktop) {
      width: 25%;
    }
  }
}
</style>
