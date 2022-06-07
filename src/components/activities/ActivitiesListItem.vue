<script>
import AppButton from '../button/AppButton.vue';
import gql from 'graphql-tag';

export default {
  name: 'ActivitiesList',
  components: { AppButton },
  props: {
    image: {
      type: String,
    },
    title: {
      type: String,
    },
    description: {
      type: String,
    },
    categoryTitle: {
      type: String,
    },
    price: {
      type: Number,
    },
    date: {
      type: String,
    },
    toDate: {
      type: String,
    },
    id: {
      type: String,
    },
  },
  methods: {
    // Convert the TZ date string to make it readable
    parseDate(date) {
      const parsedDate = new Date(date);
      const month = parsedDate.getMonth() + 1;
      const day = parsedDate.getDate();

      return `${day}/${month}`;
    },
  },
};
</script>

<template>
  <li class="upcoming-activities__list__item">
    <div class="upcoming-activities__list__item--top">
      <h3 class="upcoming-activities__list__item--top__title">{{ title }}</h3>

      <div class="upcoming-activities__list__item--top__container">
        <div class="upcoming-activities__list__item--top__box__container">
          <span class="upcoming-activities__list__item--top__box">€ {{ price }}</span>

          <span v-if="!toDate" class="upcoming-activities__list__item--top__box">{{ parseDate(date) }}</span>
          <span v-else class="upcoming-activities__list__item--top__box">{{ parseDate(date) }} – {{ parseDate(toDate) }}</span>
        </div>

        <a href="#categories">
          <span class="upcoming-activities__list__item--top__category">{{ categoryTitle }}</span>
        </a>
      </div>
    </div>

    <div class="upcoming-activities__list__item--bottom">
      <div class="upcoming-activities__list__item--bottom__image">
        <img src="https://res.cloudinary.com/dvb6lcmag/image/upload/v1653469604/categories/cl3ld3z9j00012062ah2abmp1.webp" />
      </div>

      <p class="upcoming-activities__list__item--bottom__description">
        {{ description }}
      </p>

      <AppButton
        type="secondary"
        :link="`/activities/${id}-${title.toLowerCase().replaceAll(' ', '-')}`"
      >
        Reserve / More info
      </AppButton>
    </div>
  </li>
</template>

<style lang="scss">
.upcoming-activities__list__item {
  margin-top: 3rem;
  border-radius: 25px;
  border: 1px solid #f4f4f4;
  overflow: hidden;

  @include responsive(desktop) {
    flex-basis: 48%;
  }

  &--top {
    background: $clrBlue;
    display: flex;
    flex-direction: column;
    gap: 3rem;
    padding: 1rem 1rem 0 1rem;

    &__container {
      display: flex;
      justify-content: space-between;
      align-items: center;

      * {
        font-weight: $fontWeightBold;
      }
    }

    &__box {
      background: $clrPrimary;
      color: #fff;
      padding: 0.5rem;

      &__container {
        display: flex;
        gap: 1rem;
      }
    }

    &__category {
      text-transform: uppercase;
    }
  }

  &--bottom {
    padding: 1rem;
    background: #fff;

    &__image {
      margin: 0 auto 2rem;

      @include responsive(tablet) {
        width: 50%;
      }

      img {
        width: 100%;
        height: 10rem;
        object-fit: cover;
      }
    }

    &__description {
      margin-bottom: 2rem;
    }
  }
}
</style>
