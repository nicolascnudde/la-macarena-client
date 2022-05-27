<script>
import Socials from '@/components/Socials.vue';
import SeparatorTop from '@/assets/icons/separator-top.svg?component';
import SeparatorBottom from '@/assets/icons/separator-bottom.svg?component';

export default {
  name: 'TheFooter',
  components: { SeparatorBottom, SeparatorTop, Socials },
};
</script>

<template>
  <footer class="app__footer">
    <div class="container">
      <div class="app__footer__top">
        <SeparatorTop class="app__footer__top__separator" />

        <div class="app__footer__top__content">
          <div class="app__footer__top__content__logo">
            <img src="https://i.imgur.com/oU7CVcy.png" alt="La Macarena logo" />
          </div>

          <Socials class="app__footer__socials socials" />
        </div>

        <SeparatorBottom class="app__footer__top__separator" />
      </div>
    </div>
  </footer>
</template>

<style lang="scss">
.app__footer {
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

      &__logo {
        img {
          width: 5rem;
        }
      }
    }
  }
}
</style>
