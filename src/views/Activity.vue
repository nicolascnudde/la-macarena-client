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
      routeParam: this.$route.params.id,
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
            numberOfSlots
          }
        }
      `,
      variables() {
        return {
          id: this.routeParam,
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
  </BaseLayout>
</template>

<style lang="scss"></style>
