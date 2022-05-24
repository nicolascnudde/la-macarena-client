<script>
export default {
  name: 'AppNav',
};
</script>

<template>
  <nav class="app__header__nav">
    <ul class="app__header__nav__list">
      <li class="app__header__nav__list__item">
        <a>Activities</a>
      </li>

      <li class="app__header__nav__list__item">
        <a>About</a>
      </li>

      <li class="app__header__nav__list__item">
        <a>Goals</a>
      </li>

      <li class="app__header__nav__list__item">
        <a>Contact</a>
      </li>
    </ul>
  </nav>
</template>

<style lang="scss">
.app__header__nav {
  display: flex;

  &__list {
    display: flex;
    flex-direction: column;
    gap: 2rem;

    &__item {
      font-size: $fontSize40;
      font-weight: $fontWeightBold;
    }
  }

  @include responsive(desktop) {
    display: flex;

    &__list {
      flex-direction: row;
      align-items: center;
      gap: 3rem;

      &__item {
        font-size: $fontSize18;
        font-weight: $fontWeightBold;
      }
    }
  }
}
</style>
