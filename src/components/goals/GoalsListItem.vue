<script>
import ConnectingArrowIcon from '@/assets/icons/connecting-arrow.svg?component';

export default {
  name: 'CategoriesListItem',
  components: { ConnectingArrowIcon },
  props: {
    image: {
      type: String,
      default: '',
    },
    title: {
      type: String,
      default: 'Future goal',
    },
    description: {
      type: String,
      default:
        'This is the description of a future goal. Placeholder text until the goal(s) are loaded in from the cms.',
    },
    imageRight: {
      type: Boolean,
      default: false,
    },
    key: {
      type: String,
      default: '',
    },
  },
};
</script>

<template>
  <li class="goals__list__item" :key="key">
    <div :class="[`goals__list__item__image ${imageRight ? 'goals__list__item__image--right' : '' }`]">
      <img src="https://res.cloudinary.com/dvb6lcmag/image/upload/v1653469604/categories/cl3ld3z9j00012062ah2abmp1.webp" />
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
  padding-bottom: 17rem;
  position: relative;

  &:last-child {
    padding-bottom: 0;

    .goals__list__item__separator {
      display: none;
    }
  }

  @include responsive(desktop) {
    display: flex;
    justify-content: space-between;
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
    width: 25%;
    left: 50%;
    bottom: 0;
    transform: translateX(-50%);
  }
}
</style>
