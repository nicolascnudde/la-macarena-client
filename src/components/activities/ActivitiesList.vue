<script>
import gql from 'graphql-tag';

import ActivitiesListItem from './ActivitiesListItem.vue';
import { placeholderImage } from '@/constants';

export default {
  name: 'ActivitiesList',
  components: { ActivitiesListItem },
  data: { placeholderImage },
  props: {
    limit: {
      type: Number,
    },
  },
  apollo: {
    activities: {
      query: gql`
        query activities($limit: Int){
          activities(orderBy: { date: asc }, take: $limit) {
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
            location
            duration
            date
            toDate
          }
        }
      `,
      variables() {
        return { limit: this.limit };
      },
    },
  },
};
</script>

<template>
  <ul class="activities__list">
    <ActivitiesListItem
      v-for="activity in activities"
      :key="activity.id"
      :categoryTitle="activity.category ? activity.category.title : null"
      :date="activity.date"
      :description="activity.description"
      :duration="activity.duration"
      :fromDate="activity.fromDate"
      :id="activity.id"
      :image="activity.image ? activity.image.publicUrl : placeholderImage"
      :location="activity.location"
      :price="activity.price"
      :slots="activity.slots"
      :title="activity.title"
      :toDate="activity.toDate"
    />
  </ul>
</template>

<style lang="scss">
.activities__list {
  margin-bottom: 3rem;

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
