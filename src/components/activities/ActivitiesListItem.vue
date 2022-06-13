<script>
import { AppButton } from '@/components/button';

export default {
  name: 'ActivitiesList',
  components: { AppButton },
  props: {
    id: {
      type: String,
    },
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
    slots: {
      type: Number,
    },
    location: {
      type: String,
    },
    duration: {
      type: String,
    },
    date: {
      type: String,
    },
    toDate: {
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
  <li class="activities__list__item">
    <div class="activities__list__item--top">
      <h3 class="activities__list__item--top__title">{{ title }}</h3>

      <div class="activities__list__item--top__container">
        <div class="activities__list__item--top__box__container">
          <span class="activities__list__item--top__box">€ {{ price }}</span>

          <span v-if="!toDate" class="activities__list__item--top__box">{{ parseDate(date) }}</span>
          <span v-else class="activities__list__item--top__box">{{ parseDate(date) }} — {{ parseDate(toDate) }}</span>
        </div>

        <a href="#categories">
          <span class="activities__list__item--top__category">{{ categoryTitle }}</span>
        </a>
      </div>
    </div>

    <div class="activities__list__item--bottom">
      <div class="activities__list__item--bottom__image">
        <img :src="image" :alt="title" />
      </div>

      <p class="activities__list__item--bottom__description">
        {{ description }}
      </p>

      <p class="activities__list__item--bottom__location">
        Location: {{ location }}
      </p>

      <p class="activities__list__item--bottom__duration">
        Duration: {{ duration }}
      </p>

      <p v-if="slots > 0" class="activities__list__item--bottom__slots">{{ slots }} slots remaining</p>
      <p v-else class="activities__list__item--bottom__slots">Sorry... no more slots remaining!</p>

      <AppButton
        v-if="slots > 0"
        type="secondary"
        :link="`/activities/${id}-${title.toLowerCase().replaceAll(' ', '-')}`"
      >
        Reserve / See details
      </AppButton>

      <AppButton
        v-else
        type="secondary"
        :link="`/activities/${id}-${title.toLowerCase().replaceAll(' ', '-')}`"
      >
        See details
      </AppButton>
    </div>
  </li>
</template>

<style lang="scss">
.activities__list__item {
  margin-top: 3rem;
  border-radius: 25px;
  border: 1px solid #f4f4f4;
  overflow: hidden;

  @include responsive(tablet) {
    flex-basis: 48%;
  }

  @include responsive(desktop) {
    flex-basis: 32%;
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
      font-size: $fontSize12;
      padding: 0.5rem;

      @include responsive(desktop) {
        font-size: $fontSize16;
      }

      &__container {
        display: flex;
        gap: 0.75rem;
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
      position: relative;
      height: 0;
      padding-top: 56.25%;
      margin-bottom: 2rem;

      img {
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        object-fit: cover;
      }
    }

    &__description,
    &__duration {
      margin-bottom: 1rem;
    }

    &__location {
      margin-bottom: 0.5rem;
    }

    &__slots {
      font-size: $fontSize16;
      margin-bottom: 2rem;
      font-weight: $fontWeightBold;
    }

    &__full {
      font-weight: $fontWeightBold;
    }
  }
}
</style>
