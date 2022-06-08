<script>
import TitleAndText from '../TitleAndText.vue';

export default {
  name: 'Our Story',
  components: { TitleAndText },
  props: {
    title: {
      type: String,
      default: 'Our Story',
    },
    description: {
      type: String,
      default:
        'This is the description of the our story section. Placeholder text until the description is loaded in from the cms.',
    },
    imageUrl: {
      type: String,
    },
  },
};
</script>

<template>
  <section class="our-story">
    <div class="our-story__container container">
      <div class="our-story__background"></div>

      <div class="our-story__image">
        <img :src="imageUrl" />

        <img :src="imageUrl" />
      </div>

      <div class="our-story__content">
        <TitleAndText
          type="h2"
          :title="title"
          bgImageUrl="https://res.cloudinary.com/dvb6lcmag/image/upload/v1653846485/bg-images/Brush_Pink_dsvgal.png"
        >
          {{ description }}
        </TitleAndText>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.our-story {
  margin-bottom: 5rem;

  @include responsive(tablet) {
    margin-bottom: 8rem;
  }

  @include responsive(desktop) {
    position: relative;
  }

  &__container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__background {
    display: none;

    @include responsive(desktop) {
      display: block;
      background: $clrRed;
      position: absolute;
      left: 0;
      top: 50%;
      transform: translateY(-50%);
      height: 20rem;
      width: 48%;
      border-radius: 0 25px 25px 0;
    }
  }

  &__image {
    display: none;

    @include responsive(desktop) {
      display: block;
      flex-basis: 48%;
      position: relative;
      padding: 10rem 0;

      img {
        width: 15rem;
        position: absolute;

        &:first-child {
          top: 3rem;
          right: 6rem;
          border-radius: 20px 40px 30px 10px;
        }

        &:last-child {
          bottom: 3rem;
          right: 12rem;
          border-radius: 30px 20px 40px 10px;
        }
      }
    }
  }

  &__content {
    @include responsive(desktop) {
      flex-basis: 48%;
    }

    .title-text {
      margin-bottom: 0;
    }
  }
}
</style>
