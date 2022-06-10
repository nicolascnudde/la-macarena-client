<script>
import gql from 'graphql-tag';

import ActivitiesListItem from './ActivitiesListItem.vue';
import { placeholderImage } from '@/constants';

export default {
  name: 'ActivitiesList',
  components: { ActivitiesListItem },
  data: { placeholderImage },
  apollo: {
    activities: {
      query: gql`
        query activities {
          activities(orderBy: { date: asc }) {
            id
            title
            description
            image {
              publicUrl
            }
            price
            slots
            category {
              id
              title
            }
            date
            toDate
          }
        }
      `,
    },
  },
};
</script>

<template>
  <ul class="upcoming-activities__list">
    <ActivitiesListItem
      v-for="activity in activities"
      :key="activity.id"
      :categoryTitle="activity.category ? activity.category.title : null"
      :date="activity.date"
      :description="activity.description"
      :fromDate="activity.fromDate"
      :id="activity.id"
      :image="activity.image ? activity.image.publicUrl : placeholderImage"
      :price="activity.price"
      :slots="activity.slots"
      :title="activity.title"
      :toDate="activity.toDate"
    />
  </ul>
</template>

<style lang="scss">
.upcoming-activities__list {
  @include responsive(tablet) {
    display: flex;
    flex-wrap: wrap;
    gap: 4%;
  }

  @include responsive(desktop) {
    display: flex;
    flex-wrap: wrap;
    gap: 2%;
  }
}
</style>
