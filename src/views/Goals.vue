<script>
import gql from 'graphql-tag';
import { useMeta } from 'vue-meta';

import BaseLayout from '@/layouts/BaseLayout.vue';
import GoalsSection from '@/components/goals/GoalsSection.vue';
import TitleAndText from '@/components/TitleAndText.vue';
import Cta from '../components/cta/Cta.vue';

export default {
  name: 'Goals',
  components: { BaseLayout, Cta, GoalsSection, TitleAndText },
  setup() {
    useMeta({
      title: 'Goals',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    });
  },
  apollo: {
    content: {
      query: gql`
        query content($id: ID!) {
          content(where: { id: $id }) {
            id
            goalsPageHeroTitle
            goalsPageHeroDescription
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
  <BaseLayout v-if="!this.$apollo.queries.content.loading">
    <TitleAndText
      bgImageUrl="https://res.cloudinary.com/dvb6lcmag/image/upload/v1653846484/bg-images/Brush_Green_yuvrrs.png"
      type="h1"
      :title="content.goalsPageHeroTitle"
    >
      {{ content.goalsPageHeroDescription }}
    </TitleAndText>

    <GoalsSection />

    <Cta />
  </BaseLayout>
</template>

<style lang="scss"></style>
