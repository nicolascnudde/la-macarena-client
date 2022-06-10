<script>
import { useMeta } from 'vue-meta';
import gql from 'graphql-tag';

import { BaseLayout } from '@/layouts';
import { Cta } from '@/components/cta';
import { Hero } from '@/components/hero';
import { InfoBlock } from '@/components';
import { placeholderImage } from '@/constants';
import { TeamSection } from '@/components/team';

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
            homePageHeroButtonText
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
  <BaseLayout v-if="!this.$apollo.queries.content.loading" pageClass="home-page">
    <Hero
      :title="content.homePageHeroTitle"
      :description="content.homePageHeroDescription"
      :image="
        content.homePageHeroImage
          ? content.homePageHeroImage.publicUrl
          : placeholderImage
      "
      :buttonText="
        content.homePageHeroButtonText
          ? content.homePageHeroButtonText
          : 'Upcoming activities'
      "
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
