<script>
import gql from 'graphql-tag';
import { useMeta } from 'vue-meta';

import BaseLayout from '@/layouts/BaseLayout.vue';
import TitleAndText from '@/components/TitleAndText.vue';
import ActivitiesSection from '@/components/activities/ActivitiesSection.vue';
import { CategoriesSection } from '@/components/categories';
import Cta from '../components/cta/Cta.vue';

export default {
  name: 'Activities',
  components: { ActivitiesSection, BaseLayout, Cta, CategoriesSection, TitleAndText },
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
  <BaseLayout v-if="!this.$apollo.queries.content.loading">
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

<style lang="scss"></style>
