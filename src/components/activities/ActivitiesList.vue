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
            slots
            category {
              id
              title
              description
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
      :categoryTitle="activity.category.title"
      :date="activity.date"
      :description="activity.description"
      :fromDate="activity.fromDate"
      :id="activity.id"
      :image="activity.image.publicUrl"
      :price="activity.price"
      :slots="activity.numberOfSlots"
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
