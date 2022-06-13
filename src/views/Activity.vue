<script>
import gql from 'graphql-tag';
import PulseLoader from 'vue-spinner/src/PulseLoader.vue';

import { ActivityForm } from '@/components/forms';
import { ActivitySection } from '@/components/activity';
import { BaseLayout } from '@/layouts';
import { Cta } from '@/components/cta';
import { Hero } from '@/components/hero';
import { placeholderImage } from '@/constants';

export default {
  name: 'Activity',
  components: {
    ActivityForm,
    ActivitySection,
    BaseLayout,
    Cta,
    Hero,
    PulseLoader,
  },
  data() {
    return {
      placeholderImage,
      routeParamId: this.$route.params.id,
      activity: null,
    };
  },
  metaInfo() {
    return {
      // The meta information will automatically update after the data loads
      title: this.$apollo.queries.activity.loading ? 'Loading...' : this.activity.title,
      description: this.$apollo.queries.activity.loading ? 'Loading...' : this.activity.description,
      meta: [
        {
          property: 'og:title',
          content: this.$apollo.queries.activity.loading ? 'Loading...' : this.activity.title,
        },
        {
          property: 'og:description',
          content: this.$apollo.queries.activity.loading ? 'Loading...' : this.activity.description,
        },
        {
          property: 'og:image',
          content: this.$apollo.queries.activity.loading ? 'Loading...' : this.activity.image ? this.activity.image.publicUrl : placeholderImage,
        },
      ]
    };
  },
  apollo: {
    activity: {
      query: gql`
        query activity($id: ID!) {
          activity(where: { id: $id }) {
            id
            title
            description
            image {
              publicUrl
            }
            price
            slots
            location
            duration
            date
            toDate
            wysiwyg {
              document
            }
          }
        }
      `,
      variables() {
        return {
          id: this.routeParamId,
        };
      },
    },
  },
};
</script>

<template>
  <BaseLayout pageClass="activity-page">
    <div v-if="this.$apollo.queries.activity.loading" class="loading">
      <pulse-loader color="#99c3ec" size="32px" />
    </div>

    <div v-else>
      <Hero
        :description="activity.description"
        :image="activity.image ? activity.image.publicUrl : placeholderImage"
        :title="activity.title"
        buttonLink="/activities"
        buttonText="Back to activities"
      />

      <ActivitySection
        :date="activity.date"
        :duration="activity.duration"
        :location="activity.location"
        :price="activity.price"
        :slots="activity.slots"
        :toDate="activity.toDate"
      />

      <ActivityForm
        :activityTitle="activity.title"
        :activityPrice="activity.price"
        :activityDate="activity.date"
        :activityToDate="activity.toDate"
        :activitySlots="activity.slots"
      />
    </div>
  </BaseLayout>
</template>

<style lang="scss">
.activity-page {
  .loading {
    height: 80vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .hero {
    margin-bottom: 3rem;

    &__content {
      display: flex;
      flex-direction: column;
      align-items: flex-start;

      &__title {
        line-height: 1.2;
      }

      &__button {
        order: -1;
        margin-bottom: 2rem;

        .button__text {
          font-size: $fontSize16;

          &::before {
            content: '« ';
          }
        }
        .icon--arrow-right {
          display: none;
        }
      }
    }
  }
}
</style>
