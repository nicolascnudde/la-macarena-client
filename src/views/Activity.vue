<script>
import { useMeta } from 'vue-meta';
import gql from 'graphql-tag';

import BaseLayout from '@/layouts/BaseLayout.vue';
import TitleAndText from '@/components/TitleAndText.vue';
import Cta from '../components/cta/Cta.vue';
import Hero from '../components/hero/Hero.vue';
import ActivityForm from '../components/forms/ActivityForm.vue';

export default {
  name: 'Activity',
  components: { ActivityForm, BaseLayout, Cta, TitleAndText, Hero, ActivityForm },
  setup() {
    useMeta({ title: 'Activity' });
  },
  data() {
    return {
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
  <div v-if="this.$apollo.queries.activity.loading">Loading...</div>

  <BaseLayout v-else>
    <Hero
      :image="activity.image.publicUrl"
      :title="activity.title"
      :description="activity.description"
      noButton
    />

    <section class="activity-details">
      <div class="container">
        <p>Slots: {{ activity.slots }}</p>

        <p>Price: {{ activity.price }}</p>

        <p>Date: {{ activity.date }}</p>
      </div>
    </section>

    <ActivityForm
      :activityTitle="activity.title"
      :activityPrice="activity.price"
      :activityDate="activity.date"
    />

    <Cta />
  </BaseLayout>
</template>

<style lang="scss"></style>
