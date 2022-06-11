<script>
import gql from 'graphql-tag';

import { AppButton } from '@/components/button';
import { TitleAndText } from '@/components';
import ActivitiesList from './ActivitiesList.vue';

export default {
  name: 'ActivitiesSection',
  components: { ActivitiesList, AppButton, TitleAndText },
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
  data: {
    // This is the number of upcoming activities to show on the activities page.
    limit: 3,
  },
  methods: {
    // Every time the 'Show more activities' button is clicked, 3 more activities will be fetched.
    limitUp() {
      this.limit += 3;
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

      <ActivitiesList :limit="this.limit" />

      <div class="load-more">
        <AppButton type="secondary" @click="limitUp">Show more activities</AppButton>
      </div>
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

  .load-more {
    .button {
      .icon {
        display: none;
      }
    }
  }
}
</style>
