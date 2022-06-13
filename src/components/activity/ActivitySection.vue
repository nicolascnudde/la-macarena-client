<script>
export default {
  name: 'ActivitySection',
  props: {
    slots: {
      type: Number,
    },
    price: {
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
    title: {
      type: String,
    },
    description: {
      type: String,
    },
  },
  methods: {
    parseDate(date) {
      const parsedDate = new Date(date);
      const year = parsedDate.getFullYear();
      const month = parsedDate.getMonth() + 1;
      const day = parsedDate.getDate();

      return `${day}/${month}/${year}`;
    },
  },
};
</script>

<template>
  <section class="activity-details">
    <div class="activity-details__container container">
      <div class="activity-details__content">
        <h1 class="activity-details__content__title">{{ title }}</h1>

        <p class="activity-details__content__description">{{ description }}</p>
      </div>

      <ul class="activity-details__list">
        <li class="activity-details__list__item">
          <p class="activity-details__list__item__label">Slots</p>

          <p class="activity-details__list__item__value activity-details__list__item__value--slots">
            {{ slots ? slots : 'Sold out!' }}
          </p>
        </li>

        <li class="activity-details__list__item">
          <p class="activity-details__list__item__label">Price</p>

          <p class="activity-details__list__item__value activity-details__list__item__value--price">
            {{ price }}
          </p>
        </li>

        <li class="activity-details__list__item">
          <p class="activity-details__list__item__label">Location</p>

          <p class="activity-details__list__item__value activity-details__list__item__value--location">
            {{ location }}
          </p>
        </li>

        <li class="activity-details__list__item">
          <p class="activity-details__list__item__label">Duration</p>

          <p class="activity-details__list__item__value activity-details__list__item__value--duration">
            {{ duration }}
          </p>
        </li>

        <li class="activity-details__list__item">
          <p class="activity-details__list__item__label">Date(s)</p>

          <p class="activity-details__list__item__value activity-details__list__item__value--date">
            {{ parseDate(date) }} {{ toDate ? ' – ' + parseDate(toDate) : null }}
          </p>
        </li>
      </ul>
    </div>
  </section>
</template>

<style lang="scss">
.activity-details {
  margin-bottom: 5rem;

  @include responsive(desktop) {
    margin-bottom: 7rem;
  }

  &__content {
    &__title {
      margin-bottom: 2rem;
    }

    &__description {
      font-size: $fontSize20;
      margin-bottom: 3rem;

      @include responsive(desktop) {
        width: 75%;
      }
    }
  }


  &__list {
    @include responsive(tablet) {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
    }

    &__item {
      margin-bottom: 2.25rem;
      text-align: center;

      @include responsive(tablet) {
        flex-basis: 100%;
      }

      @include responsive(desktop) {
        flex-basis: 33.33%;
      }

      &:last-child {
        margin-bottom: 0;
      }

      &__label {
        font-weight: $fontWeightBold;
        margin-bottom: 0.75rem;
      }

      &__value {
        font-size: $fontSize32;

        &--price {
          &::before {
            content: '€ ';
          }
        }
      }
    }
  }
}
</style>
