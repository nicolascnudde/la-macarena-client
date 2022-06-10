<script>
import gql from 'graphql-tag';

import { TitleAndText } from '@/components';
import ActivitiesList from './ActivitiesList.vue';

export default {
  name: 'ActivitiesSection',
  components: { ActivitiesList, TitleAndText },
  apollo: {
    content: {
      query: gql`
        query content($id: ID!) {
          content(where: { id: $id }) {
            id
            activitiesPageUpcomingTitle
            activitiesPageUpcomingDescription
          }
        }
      `,
      variables: {
        id: 1,
      },
    },
  },
};
</script>

<template>
  <section v-if="!this.$apollo.queries.content.loading" class="activities">
    <div class="container">
      <TitleAndText type="h2" :title="content.activitiesPageUpcomingTitle">
        {{ content.activitiesPageUpcomingDescription }}
      </TitleAndText>

      <ActivitiesList />
    </div>
  </section>
</template>

<style lang="scss">
.activities {
  background-image: url('https://res.cloudinary.com/dvb6lcmag/image/upload/v1653846498/bg-images/Brush_Pink_3_jcor13.png');
  background-repeat: no-repeat;
  background-size: 100%;
  background-position: center;

  @include responsive(tablet) {
    background-position: right 10rem;
    background-size: 30rem;
  }

  @include responsive(desktop) {
    background-position: right top;
  }

  margin-bottom: 5rem;

  @include responsive(tablet) {
    margin-bottom: 8rem;
  }

  .title-text {
    margin-bottom: 0; // Remove the margin bottom because we're adding margin top on the cards in UpcomingListItem.vue
  }
}
</style>
