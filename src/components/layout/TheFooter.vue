<script>
import { Socials } from '@/components/socials';
import Heart from '@/assets/icons/heart.svg?component';
import SeparatorBottom from '@/assets/icons/separator-bottom.svg?component';
import SeparatorTop from '@/assets/icons/separator-top.svg?component';
import Logo from '@/assets/icons/logo.svg?component';

export default {
  name: 'TheFooter',
  components: { Heart, Logo, SeparatorBottom, SeparatorTop, Socials },
  methods: {
    getCurrentYear() {
      return new Date().getFullYear();
    },
  },
};
</script>

<template>
  <footer class="app__footer">
    <div class="container">
      <div class="app__footer__top">
        <SeparatorTop class="app__footer__top__separator" />

        <div class="app__footer__top__content">
          <router-link class="link-to-home" to="/">
            <Logo class="icon--logo--footer" />
          </router-link>

          <Socials class="app__footer__socials socials" />
        </div>

        <SeparatorBottom class="app__footer__top__separator" />
      </div>

      <div class="app__footer__bottom">
        <p class="app__footer__bottom__text">
          © La Macarena {{ getCurrentYear() }}
        </p>

        <p class="app__footer__bottom__text">
          <span>Made with</span>

          <Heart class="icon--heart" />

          <span>by Nicolas Cnudde</span>
        </p>
      </div>
    </div>
  </footer>
</template>

<style lang="scss">
.app__footer {
  margin-bottom: 2rem;

  &__top {
    &__separator {
      width: 100%;
      fill: none;
      stroke: #f4f4f4;
      stroke-width: 1px;
    }

    &__content {
      display: flex;
      justify-content: space-between;
      align-items: center;

      .link-to-home {
        background: none; // Hide the background of the active link on the site logo
      }
    }
  }

  &__bottom {
    @include responsive(tablet) {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    &__text {
      margin-top: 1rem;
    }
  }
}
</style>
