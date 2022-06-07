<script>
import ActivitiesListItem from './ActivitiesListItem.vue';
import gql from 'graphql-tag';

export default {
  name: 'ActivitiesList',
  components: { ActivitiesListItem },
  apollo: {
    activities: {
      query: gql`
        query activities {
          activities {
            id
            title
            description
            image {
              publicUrl
            }
            price
            numberOfSlots
            category {
              id
              title
              description
            }
            date
            fromDate
            toDate
          }
        }
      `,
    },
  },
};
</script>

<template>
  <ul class="upcoming-activities__list" v-for="activity in activities" :key="activity.id">
    <ActivitiesListItem 
      :id="activity.id"
      :title="activity.title"
      :description="activity.description"
      :price="activity.price"
      :slots="activity.numberOfSlots"
      :date="activity.date"
      :fromDate="activity.fromDate"
      :toDate="activity.toDate"
      :categoryTitle="activity.category.title"
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
