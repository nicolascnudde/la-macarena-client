<script>
export default {
  name: 'TheNavigation',
};
</script>

<template>
  <nav class="app__header__nav">
    <ul class="app__header__nav__list">
      <li class="app__header__nav__list__item">
        <router-link to="/" class="app__header__nav__list__item">
          Home
        </router-link>
      </li>

      <li class="app__header__nav__list__item">
        <router-link to="/activities" class="app__header__nav__list__item">
          Activities
        </router-link>
      </li>

      <li class="app__header__nav__list__item">
        <router-link to="/about" class="app__header__nav__list__item">
          About
        </router-link>
      </li>

      <li class="app__header__nav__list__item">
        <router-link to="/goals" class="app__header__nav__list__item">
          Goals
        </router-link>
      </li>

      <li class="app__header__nav__list__item">
        <router-link to="/contact" class="app__header__nav__list__item">
          Contact
        </router-link>
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

      a {
        padding: 0 0.25rem;
      }

      &__link--active {
        background: linear-gradient($clrRed 0 0) bottom / 100% 50% no-repeat;
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
