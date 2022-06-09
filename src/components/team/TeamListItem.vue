<script>
export default {
  name: 'TeamListItem',
  props: {
    key: {
      type: String,
    },
    image: {
      type: String,
    },
    firstName: {
      type: String,
    },
  },
};
</script>

<template>
  <li class="team__list__item" :key="key">
    <figure class="team__list__item__figure">
      <img
        class="team__list__item__figure__img"
        :src="image"
      />

      <figcaption class="team__list__item__figure__caption">{{ firstName }}</figcaption>
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
      color: $clrPrimary;
      font-family: 'Comforter Brush', cursive;
      font-size: $fontSize40;
      position: absolute;
      bottom: 0.5rem;
      left: 0;
      text-align: center;
      width: 100%;
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
