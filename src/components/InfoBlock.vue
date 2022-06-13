<script>
export default {
  name: 'InfoBlock',
  props: {
    title: {
      type: String,
    },
    description: {
      type: String,
    },
  },
};
</script>

<template>
  <section class="info-block">
    <div class="container">
      <div class="info-block__container">
        <div class="info-block__content">
          <h2 class="info-block__content__title">{{ title }}</h2>

          <p class="info-block__content__text">
            {{ description }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.info-block {
  position: relative;
  margin-bottom: 5rem;

  @include responsive(tablet) {
    background: url('@/assets/images/what-we-do-title.svg') no-repeat center;
    background-size: 100%;
    margin-bottom: 8rem;
  }

  &__container {
    background: linear-gradient(90deg, $clrRed 50%, transparent 0);
    background-position: calc(25vw - 1rem); // Center the background minus 1 rem padding from the container parent

    @include responsive(tablet) {
      position: relative;
      background: #f69d9e;
      background-position-x: 0%;
      background-position-y: 0%;
      background-position: calc(37vw - 1rem);
      width: 20rem;
      margin: 0 auto;
    }
  }

  &__content {
    padding: 3rem 0;

    @include responsive(tablet) {
      padding: 0;
      height: 30rem;
    }

    &__title {
      margin-bottom: 1rem;

      @include responsive(tablet) {
        position: absolute;
        top: 44%;
        left: -75%;
        transform: rotate(90deg);
        width: 30rem; // Added the same width as the rectangle background's height to make sure the positioning is correct
        text-align: center;
      }
    }

    &__text {
      font-size: $fontSize20;

      @include responsive(tablet) {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(25%, -50%);
        width: 90%;
      }

      @include responsive(desktop) {
        width: 100%;
      }
    }
  }

  &__background-title {
    display: none;

    @include responsive(tablet) {
      display: block;
      max-width: 100%;
      position: absolute;
      top: 50%;
      left: 0;
      transform: translateY(-50%);
      z-index: -1;
    }
  }
}
</style>
