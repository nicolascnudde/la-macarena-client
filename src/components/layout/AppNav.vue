<script>
export default {
  name: 'AppNav',
};
</script>

<template>
  <nav class="app__header__nav">
    <ul class="app__header__nav__list">
      <li class="app__header__nav__list">
        <a>Activities</a>
      </li>

      <li class="app__header__nav__list">
        <a>About</a>
      </li>

      <li class="app__header__nav__list">
        <a>Goals</a>
      </li>

      <li class="app__header__nav__list">
        <a>Contact</a>
      </li>
    </ul>
  </nav>
</template>

<style lang="scss">
  .app__header__nav {
    &__list {
      display: flex;
      flex-direction: column;
      gap: 1rem;

      &__item {
        width: 100%;
      }
    }
  }
</style>