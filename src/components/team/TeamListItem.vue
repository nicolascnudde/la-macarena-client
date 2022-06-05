<script>
export default {
  name: 'TeamListItem',
  props: {
    image: {
      type: String,
      default: 'asdf',
    },
    firstName: {
      type: String,
      default: 'Eleven',
    },
    key: {
      type: String,
      default: '',
    },
  },
};
</script>

<template>
  <li class="team__list__item" :key="key">
    <div class="team__list__item__image">
      <img src="https://res.cloudinary.com/dvb6lcmag/image/upload/v1653469604/categories/cl3ld3z9j00012062ah2abmp1.webp" />
    </div>

    <p class="team__list__item__description">{{ description }}</p>
  </li>
</template>

<style lang="scss">
.team__list__item {
  margin-top: 3rem;

  &__image,
  &__title {
    margin-bottom: 1rem;
  }

  img {
    width: 10rem;
  }

  /* &__image {
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
  } */
}
</style>
