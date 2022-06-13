<script>
import { useMeta } from 'vue-meta';
import gql from 'graphql-tag';

import { placeholderImage } from '@/constants';
import { BaseLayout } from '@/layouts';
import { Cta } from '@/components/cta';
import { Hero } from '@/components/hero';
import { OurStory } from '@/components/our-story';
import { TeamSection } from '@/components/team';
import { TitleAndText } from '@/components';
import { UspsSection } from '@/components/usps';

export default {
  name: 'About',
  components: {
    BaseLayout,
    Cta,
    Hero,
    OurStory,
    TeamSection,
    TitleAndText,
    UspsSection,
  },
  data: { placeholderImage },
  setup() {
    useMeta({ title: 'About' });
  },
  apollo: {
    content: {
      query: gql`
        query content($id: ID!) {
          content(where: { id: $id }) {
            id
            aboutPageHeroTitle
            aboutPageHeroDescription
            aboutPageHeroImage {
              publicUrl
            }
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
  <BaseLayout v-if="!this.$apollo.queries.content.loading" pageClass="about-page">
    <Hero
      :title="content.aboutPageHeroTitle"
      :description="content.aboutPageHeroDescription"
      :image="content.aboutPageHeroImage ? content.aboutPageHeroImage.publicUrl : placeholderImage"
      noButton
    />

    <OurStory />

    <UspsSection />

    <TeamSection imageRight />

    <Cta />
  </BaseLayout>
</template>

<style lang="scss">
.about-page {
  .team__content {
    .title-text__content__description {
      // The client preferred the description to not be shown on the about page
      display: none;
    }
  }
}
</style>