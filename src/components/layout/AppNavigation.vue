<script>
export default {
  name: 'AppNavigation',
};
</script>

<template>
  <nav class="app__header__nav">
    <ul class="app__header__nav__list">
      <li class="app__header__nav__list__item">
        <router-link to="/">Home</router-link>
      </li>

      <li class="app__header__nav__list__item">
        <router-link to="/activities">Activities</router-link>
      </li>

      <li class="app__header__nav__list__item">
        <router-link to="/about">About</router-link>
      </li>

      <li class="app__header__nav__list__item">
        <router-link to="/goals">Goals</router-link>
      </li>

      <li class="app__header__nav__list__item">
        <router-link to="/contact">Contact</router-link>
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

      &__link--active {
        border-bottom: 2px solid $clrPrimary;
        padding: 0 0.15rem 0.3rem 0.15rem;
      }
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
