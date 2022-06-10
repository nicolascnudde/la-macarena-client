<script>
import { useMeta } from 'vue-meta';
import gql from 'graphql-tag';

import BaseLayout from '@/layouts/BaseLayout.vue';
import ActivityForm from '@/components/forms/ActivityForm.vue';
import ActivitySection from '@/components/activity/ActivitySection.vue';
import Cta from '@/components/cta/Cta.vue';
import Hero from '@/components/hero/Hero.vue';
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
  setup() {
    useMeta({ title: 'Activity' });
  },
  data() {
    return {
      placeholderImage,
      routeParamId: this.$route.params.id,
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
  <BaseLayout v-if="!this.$apollo.queries.activity.loading" pageClass="activity-page">
    <Hero
      :image="activity.image ? activity.image.publicUrl : placeholderImage"
      :title="activity.title"
      :description="activity.description"
      buttonLink="/activities"
      buttonText="Back to activities"
    />

    <ActivitySection
      :slots="activity.slots"
      :price="activity.price"
      :date="activity.date"
      :toDate="activity.toDate"
    />

    <ActivityForm
      :activityTitle="activity.title"
      :activityPrice="activity.price"
      :activityDate="activity.date"
      :activityToDate="activity.toDate"
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

        .btn__text {
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
