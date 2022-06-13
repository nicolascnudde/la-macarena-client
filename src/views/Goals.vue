<script>
import gql from 'graphql-tag';

import { BaseLayout } from '@/layouts';
import { Cta } from '@/components/cta';
import { GoalsSection } from '@/components/goals';
import { TitleAndText } from '@/components';

export default {
  name: 'Goals',
  components: { BaseLayout, Cta, GoalsSection, TitleAndText },
  metaInfo() {
    return {
      // The meta information will automatically update after the data loads
      title: this.$apollo.queries.content.loading ? 'Loading...' : this.content.goalsPageHeroTitle,
      description: this.$apollo.queries.content.loading ? 'Loading...' : this.content.goalsPageHeroDescription,
      meta: [
        {
          property: 'og:title',
          content: this.$apollo.queries.content.loading ? 'Loading...' : this.content.goalsPageHeroTitle,
        },
        {
          property: 'og:description',
          content: this.$apollo.queries.content.loading ? 'Loading...' : this.content.goalsPageHeroDescription,
        },
      ],
    };
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
