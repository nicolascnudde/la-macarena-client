<script>
import { useMeta } from 'vue-meta';
import gql from 'graphql-tag';

import { BaseLayout } from '@/layouts';
import { Cta } from '@/components/cta';
import { GoalsSection } from '@/components/goals';
import { TitleAndText } from '@/components';

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
  <BaseLayout v-if="!this.$apollo.queries.content.loading" pageClass="goals-page">
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
