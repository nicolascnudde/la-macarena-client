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
    <figure class="team__list__item__figure">
      <img
        class="team__list__item__figure__img"
        src="https://res.cloudinary.com/dvb6lcmag/image/upload/v1653469604/categories/cl3ld3z9j00012062ah2abmp1.webp"
      />

      <figcaption class="team__list__item__figure__caption">Mayleen</figcaption>
    </figure>
  </li>
</template>

<style lang="scss">
.team__list__item {
  margin-bottom: 1rem;

  &__figure {
    width: 100%;
    height: 0;
    background-color: #fff;
    border: 2px solid #f4f4f4;
    padding-top: 134%;
    position: relative;

    &__img {
      position: absolute;
      top: 0;
      width: 100%;
      height: 85%;
      object-fit: cover;
      padding: 1rem;
    }

    &__caption {
      position: absolute;
      bottom: 0.5rem;
      left: 50%;
      transform: translateX(-50%);
      font-family: 'Comforter Brush', cursive;
      color: $clrPrimary;
      font-size: $fontSize40;
    }
  }

  &:nth-child(even) {
    transform: rotate(5deg) translateY(0) translateX(5%);

    @include responsive(tablet) {
      transform: rotate(-7deg) translateY(0) translateX(-110%);
    }
  }

  &:not(:nth-child(even)) {
    transform: rotate(-5deg) translateY(0) translateX(-5%);

    @include responsive(tablet) {
      transform: rotate(5deg) translateY(-30%) translateX(110%);
    }
  }
}
</style>
