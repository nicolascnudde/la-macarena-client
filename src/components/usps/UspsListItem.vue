<script>
export default {
  name: 'UspsListItem',
  props: {
    image: {
      type: String,
      default: 'asdf',
    },
    title: {
      type: String,
      default: 'USP',
    },
    description: {
      type: String,
      default:
        'This is the description of a USP. Placeholder text until the USPs are loaded in from the cms.',
    },
    key: {
      type: String,
      default: '',
    },
  },
};
</script>

<template>
  <li class="usps__list__item" :key="key">
    <div class="usps__list__item__image">
      <img src="https://res.cloudinary.com/dvb6lcmag/image/upload/v1654088043/usps/plant_vuevbb.png" />
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
