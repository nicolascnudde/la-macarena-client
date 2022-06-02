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
    key: {
      type: String,
      default: '',
    },
  },
};
</script>

<template>
  <li class="categories__list__item" :key="key">
    <div class="categories__list__item__image">
      <img src="https://res.cloudinary.com/dvb6lcmag/image/upload/v1653469604/categories/cl3ld3z9j00012062ah2abmp1.webp" />
    </div>

    <h3 class="categories__list__item__title">{{ title }}</h3>

    <p class="categories__list__item__description">{{ description }}</p>
  </li>
</template>

<style lang="scss">
.categories__list__item {
  margin-top: 3rem;

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

  &__image {
    height: 0;
    padding-top: 75%;
    position: relative;

    img {
      border-radius: 25px 25px 0 0;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
}
</style>
