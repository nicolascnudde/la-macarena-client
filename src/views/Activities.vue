<script>
import { useMeta } from 'vue-meta';
import gql from 'graphql-tag';

import { ActivitiesSection } from '@/components/activities';
import { BaseLayout } from '@/layouts';
import { CategoriesSection } from '@/components/categories';
import { Cta } from '@/components/cta';
import { TitleAndText } from '@/components';

export default {
  name: 'Activities',
  components: {
    ActivitiesSection,
    BaseLayout,
    CategoriesSection,
    Cta,
    TitleAndText,
  },
  setup() {
    useMeta({ title: 'Activities' });
  },
  apollo: {
    content: {
      query: gql`
        query content($id: ID!) {
          content(where: { id: $id }) {
            id
            activitiesPageHeroTitle
            activitiesPageHeroDescription
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
  <BaseLayout v-if="!this.$apollo.queries.content.loading" pageClass="activities-page">
    <TitleAndText
      bgImageUrl="https://res.cloudinary.com/dvb6lcmag/image/upload/v1653846484/bg-images/Brush_blue_bxzmpm.png"
      type="h1"
      :title="content.activitiesPageHeroTitle"
    >
      {{ content.activitiesPageHeroDescription }}
    </TitleAndText>

    <ActivitiesSection />

    <CategoriesSection />

    <Cta />
  </BaseLayout>
</template>
