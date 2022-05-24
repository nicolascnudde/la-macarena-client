<script>
import AppNav from './AppNav.vue';
import Socials from '../Socials.vue';

export default {
  name: 'AppHeader',
  components: { AppNav, Socials },
  data() {
    return {
      isNavOpen: false,
    };
  },
  methods: {
    toggleNav() {
      this.isNavOpen = !this.isNavOpen;
    },
  },
};
</script>

<template>
  <header :class="['app__header', 'container', { open: isNavOpen }]">
    <div class="app__header__top">
      <div class="app__header__top__logo">
        <img src="https://i.imgur.com/oU7CVcy.png" alt="La Macarena logo" />
      </div>

      <button class="btn btn--hamburger" @click="toggleNav">
        <div></div>
      </button>
    </div>

    <AppNav />

    <Socials class="app__header__socials" />
  </header>
</template>

<style lang="scss">
.app__header {
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &.container {
    padding-top: 1rem;
    padding-bottom: 1rem;
  }

  &__top {
    display: flex;
    justify-content: space-between;
    align-items: center;

    &__logo {
      img {
        width: 5rem;
      }
    }
  }

  &__nav {
    opacity: 0;
    height: 0;
    overflow: hidden;
    transform: translateX(100%);
    transition: transform $transitionNormal ease;
  }

  &__socials {
    opacity: 0;
    height: 0;
    overflow: hidden;
    transform: translateY(200%);
    transition: transform $transitionNormal ease;
  }

  @include responsive(desktop) {
    flex-direction: row;

    .btn--hamburger {
      display: none;
    }

    &__nav {
      opacity: 1;
      height: auto;
      transform: translateX(0);
    }

    &__socials {
      display: none;
    }
  }

  &.open {
    background-color: $clrYellow;
    position: fixed;
    height: 100vh;
    width: 100%;
    z-index: 10;

    .app__header__nav {
      opacity: 1;
      height: auto;
      transform: translateX(0);
    }

    .app__header__socials {
      display: flex;
      justify-content: center;
      align-items: baseline;
      gap: 3rem;
      opacity: 1;
      height: auto;
      transform: translateY(0);
      transition-delay: $transitionNormal;

      .icon {
        &--facebook {
          width: 3rem;
          height: 3rem;
        }

        &--instagram {
          width: 3rem;
          height: 2.5rem;
        }
      }
    }

    .btn--hamburger {
      &:before {
        transform: translateY(12px) rotate(135deg);
        width: 100%;
      }

      &:after {
        transform: translateY(-12px) rotate(-135deg);
      }

      & div {
        transform: scale(0);
      }
    }
  }
}
</style>
