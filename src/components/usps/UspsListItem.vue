<script>
export default {
  name: 'UspsListItem',
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
  },
};
</script>

<template>
  <li class="usps__list__item">
    <div class="usps__list__item__image">
      <img :src="image" />
    </div>

    <h3 class="usps__list__item__title">{{ title }}</h3>

    <p class="usps__list__item__description">{{ description }}</p>
  </li>
</template>

<style lang="scss">
.usps__list__item {
  @include responsive(tablet) {
    flex-basis: 32%;
  }

  &__image,
  &__title {
    margin-bottom: 1rem;
    text-align: center;
  }

  &__image {
    img {
      width: 50%;
    }
  }
}
</style>
