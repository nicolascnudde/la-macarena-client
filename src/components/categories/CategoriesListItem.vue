<script>
export default {
  name: 'CategoriesListItem',
  props: {
    image: {
      type: String,
      default: 'asdf',
    },
    title: {
      type: String,
      default: 'Category',
    },
    description: {
      type: String,
      default:
        'This is the description of a category. Placeholder text until the categories are loaded in from the cms.',
    },
  },
};
</script>

<template>
  <li class="categories__list__item">
    <img v-if="image" class="categories__list__item__image" />

    <h3 class="categories__list__item__title">{{ title }}</h3>

    <p class="categories__list__item__description">{{ description }}</p>
  </li>
</template>

<style lang="scss">
.categories__list__item {
  @include responsive(tablet) {
    flex-basis: 48%;
  }

  @include responsive(desktop) {
    flex-basis: 32%;
  }

  &__image,
  &__title {
    margin-bottom: 1rem;
  }
}
</style>
