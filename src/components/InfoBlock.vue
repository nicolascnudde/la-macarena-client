<script>
export default {
  name: 'InfoBlock',
};
</script>

<template>
  <section class="info-block">
    <div class="container">
      <div class="info-block__container">
        <div class="info-block__content">
          <h2 class="info-block__content__title">What we do</h2>

          <p class="info-block__content__text">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est.
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
    background: url('@/assets/icons/what-we-do-title.svg') no-repeat center;
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
        top: 44.5%;
        left: -8.5rem;
        transform: rotate(90deg);
      }
    }

    &__text {
      line-height: 1.5;

      @include responsive(tablet) {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(25%, -50%);
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
