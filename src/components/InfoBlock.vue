<script>
export default {
  name: 'InfoBlock',
};
</script>

<template>
  <section class="info-block">
    <div class="info-block__container container">
      <div class="info-block__content">
        <h2 class="info-block__content__title">What we do</h2>

        <p class="info-block__content__text">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus est.
        </p>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.info-block {
  &__container {
    background: linear-gradient(90deg, $clrRed calc(50% - 4rem), transparent 0);
    background-position-x: 0%;
    background-position-y: 0%;
    background-position: calc(25vw + 2rem);
  }

  &__content {
    padding: 3rem 0;

    &__title {
      margin-bottom: 1rem;
    }
  }
}
</style>
