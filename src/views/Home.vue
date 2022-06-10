<script>
import { useMeta } from 'vue-meta';
import gql from 'graphql-tag';

import BaseLayout from '@/layouts/BaseLayout.vue';
import Hero from '@/components/hero/Hero.vue';
import InfoBlock from '../components/InfoBlock.vue';
import Cta from '../components/cta/Cta.vue';
import TeamSection from '@/components/team/TeamSection.vue';
import { placeholderImage } from '@/constants';

export default {
  name: 'Home',
  components: { BaseLayout, Cta, Hero, InfoBlock, TeamSection },
  data: { placeholderImage },
  setup() {
    useMeta({ title: '' });
  },
  apollo: {
    content: {
      query: gql`
        query content($id: ID!) {
          content(where: { id: $id }) {
            id
            homePageHeroTitle
            homePageHeroDescription
            homePageHeroImage {
              publicUrl
            }
            homePageAboutTitle
            homePageAboutDescription
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
    <Hero
      :title="content.homePageHeroTitle"
      :description="content.homePageHeroDescription"
      :image="
        content.homePageHeroImage
          ? content.homePageHeroImage.publicUrl
          : placeholderImage
      "
      buttonText="Upcoming activities"
      buttonLink="/activities"
    />

    <InfoBlock
      :title="content.homePageAboutTitle"
      :description="content.homePageAboutDescription"
    />

    <TeamSection />

    <Cta />
  </BaseLayout>
</template>
