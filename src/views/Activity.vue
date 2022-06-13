<script>
import { useMeta } from 'vue-meta';
import gql from 'graphql-tag';

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
  },
  data() {
    return {
      placeholderImage,
      routeParamId: this.$route.params.id,
    };
  },
  updated() {
    useMeta({
      title: this.activity.title,
      meta: [
        {
          name: 'description',
          content: this.activity.description,
        },
      ],
    });
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
  <BaseLayout
    v-if="!this.$apollo.queries.activity.loading"
    pageClass="activity-page"
  >
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
  </BaseLayout>
</template>

<style lang="scss">
.activity-page {
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
