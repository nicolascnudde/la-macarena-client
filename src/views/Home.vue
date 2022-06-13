<script>
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
  metaInfo() {
    return {
      // The meta information will automatically update after the data loads
      // The title will be set to just 'La Macarena' as defined in the App.vue file
      title: '',
      description: this.$apollo.queries.content.loading ? 'Loading...' : this.content.homePageHeroDescription,
      meta: [
        {
          property: 'og:title',
          content: this.$apollo.queries.content.loading ? 'Loading...' : this.content.homePageHeroTitle,
        },
        {
          property: 'og:description',
          content: this.$apollo.queries.content.loading ? 'Loading...' : this.content.homePageHeroDescription,
        },
        {
          property: 'og:image',
          content: this.$apollo.queries.content.loading ? 'Loading...' : this.content.homePageHeroImage ? this.content.homePageHeroImage.publicUrl : placeholderImage,
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
