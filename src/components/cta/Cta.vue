<script>
import AppButton from '../button/AppButton.vue';

export default {
  name: 'Cta',
  components: { AppButton },
};
</script>

<template>
  <section class="cta">
    <div class="cta__container container">
      <div class="cta__content">
        <h2 class="cta__content__title">Live the experience</h2>

        <div class="cta__content__image cta__content__image--mobile">
          <img src="https://i.imgur.com/AqjbcUM.jpg" alt="alt text" />
        </div>

        <p class="cta__content__description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisi euismod consectetur consectetur,
        </p>

        <AppButton class="cta__content__button" type="primary" link="/contact"
          >Get in touch</AppButton
        >
      </div>

      <div class="cta__content__image cta__content__image--desktop">
        <img src="https://i.imgur.com/AqjbcUM.jpg" alt="alt text" />
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.cta {
  background: $clrYellow;
  margin-bottom: 5rem;

  @include responsive(tablet) {
    margin-bottom: 8rem;
  }

  &__container {
    @include responsive(tablet) {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }

  &__content {
    padding: 2rem 0;

    &__title {
      text-align: center;
      margin-bottom: 2rem;

      @include responsive(tablet) {
        text-align: left;
      }
    }

    &__image {
      text-align: center;

      img {
        width: 15rem;
        border-radius: 100px 40px 60px 40px;
      }

      &--mobile {
        margin-bottom: 2rem;

        @include responsive(tablet) {
          display: none;
        }
      }

      &--desktop {
        display: none;
        margin: 2rem 0;

        img {
          width: 25vw;
        }

        @include responsive(tablet) {
          display: block;
        }
      }
    }

    &__description {
      margin-bottom: 2rem;

      @include responsive(tablet) {
        width: 50%;
      }
    }
  }
}
</style>
