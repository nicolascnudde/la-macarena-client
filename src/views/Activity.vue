<script>
import { useMeta } from 'vue-meta';
import { useRoute } from 'vue-router';
import gql from 'graphql-tag';

import BaseLayout from '@/layouts/BaseLayout.vue';
import TitleAndText from '@/components/TitleAndText.vue';

export default {
  name: 'Activity',
  components: { BaseLayout, TitleAndText },
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
    <TitleAndText
      bgImageUrl="https://res.cloudinary.com/dvb6lcmag/image/upload/v1653846484/bg-images/Brush_blue_bxzmpm.png"
      type="h1"
      :title="activity.title"
    >
      {{ activity.description }}
    </TitleAndText>

    <section class="container">
      <p>Slots: {{ activity.slots }}</p>

      <p>Price: {{ activity.price }}</p>

      <p>Date: {{ activity.date }}</p>
    </section>
  </BaseLayout>
</template>

<style lang="scss"></style>
