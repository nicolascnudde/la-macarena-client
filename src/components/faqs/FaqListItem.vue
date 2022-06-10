<script>
import ChevronIcon from '@/assets/icons/chevron-up.svg?component';

export default {
  name: 'FaqListItem',
  components: { ChevronIcon },
  props: {
    question: {
      type: String,
      default: 'Question',
    },
    answer: {
      type: String,
      default: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    isExpanded: {
      type: Boolean,
    },
  },
  data() {
    return {
      isOpen: false,
    };
  },
  methods: {
    toggleAccordion() {
      this.isOpen = !this.isOpen;
    },
  },
  mounted() {
    // When the component is mounted, check if the isExpanded prop is true so it automatically collapses the accordion
    this.isExpanded ? this.isOpen = true : this.isOpen = false;
  }
};
</script>

<template>
  <li :class="['faq__list__item', { open: isOpen }]">
    <div class="faq__list__item__container" @click="toggleAccordion">
      <p class="faq__list__item__question">{{ question }}</p>

      <ChevronIcon class="faq__list__item__icon" />
    </div>

    <p class="faq__list__item__answer">{{ answer }}</p>
  </li>
</template>

<style lang="scss">
.faq__list__item {
  margin-top: 2rem;

  &__container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
  }

  &__question {
    font-weight: $fontWeightBold;
  }

  &__icon {
    transform: rotate(180deg);
    transition: all $transitionFast ease;
  }

  &__answer {
    display: none;
    margin-top: 1rem;
  }

  &.open {
    .faq__list__item {
      &__icon {
        transform: rotate(0);
        transition: all $transitionFast ease;
      }

      &__answer {
        display: block;
      }
    }
  }
}
</style>
