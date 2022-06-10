<script>
import ArrowRight from '@/assets/icons/arrow-right.svg?component';

export default {
  name: 'AppButton',
  components: { ArrowRight },
  props: {
    type: {
      type: String,
      default: 'primary',
    },
    link: {
      type: String,
      default: '#',
    },
  },
};
</script>

<template>
  <button :class="`btn btn--${type}`">
    <router-link v-if="link" :to="link">
      <span class="btn__text"><slot></slot></span>

      <ArrowRight class="btn__icon" />
    </router-link>

    <div v-else class="btn__content">
      <span class="btn__text"><slot></slot></span>

      <ArrowRight class="btn__icon" />
    </div>
  </button>
</template>

<style lang="scss">
.btn {
  &--primary,
  &--secondary {
    &:hover {
      .btn {
        &__text {
          --size: 50%;
        }

        &__icon {
          transform: translateX(0.5rem);
        }
      }
    }
  }

  &--primary {
    .btn__text {
      background: linear-gradient($clrRed 0 0) bottom / 100% var(--size, 0)
        no-repeat;
      transition: $transitionNormal;
    }
  }

  &--secondary {
    .btn__text {
      background: linear-gradient($clrBlue 0 0) bottom / 100% var(--size, 0)
        no-repeat;
      transition: $transitionNormal;
    }
  }

  &__text {
    font-weight: $fontWeightBold;
    text-transform: uppercase;
    letter-spacing: 0.1rem;
  }

  &__icon {
    margin-left: 0.5rem;
    transition: transform $transitionNormal ease;
  }
}
</style>
