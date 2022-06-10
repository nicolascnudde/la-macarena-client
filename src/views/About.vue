<script>
import gql from 'graphql-tag';
import { useMeta } from 'vue-meta';

import BaseLayout from '@/layouts/BaseLayout.vue';
import Hero from '@/components/hero/Hero.vue';
import TeamSection from '@/components/team/TeamSection.vue';
import TitleAndText from '@/components/TitleAndText.vue';
import Usps from '@/components/usps/Usps.vue';
import OurStory from '@/components/our-story/OurStory.vue';
import Cta from '@/components/cta/Cta.vue';
import { placeholderImage } from '@/constants';

export default {
  name: 'About',
  components: { BaseLayout, Cta, Hero, OurStory, TeamSection, TitleAndText, Usps },
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
  <BaseLayout v-if="!this.$apollo.queries.content.loading">
    <Hero
      :title="content.aboutPageHeroTitle"
      :description="content.aboutPageHeroDescription"
      :image="content.aboutPageHeroImage ? content.aboutPageHeroImage.publicUrl : placeholderImage"
      noButton
    />

    <OurStory />

    <Usps />

    <TeamSection imageRight />

    <Cta />
  </BaseLayout>
</template>
