<script>
import { useMeta } from 'vue-meta';

import BaseLayout from '@/layouts/BaseLayout.vue';
import Hero from '@/components/hero/Hero.vue';
import TeamSection from '@/components/team/TeamSection.vue';
import TitleAndText from '@/components/TitleAndText.vue';
import Usps from '@/components/usps/Usps.vue';
import OurStory from '../components/our-story/OurStory.vue';

export default {
  name: 'About',
  components: { BaseLayout, Hero, TitleAndText, Usps, TeamSection, OurStory },
  setup() {
    useMeta({ title: 'About' });
  },
};
</script>

<template>
  <BaseLayout>
    <Hero
      title="About us"
      description="This is a dummy description for the hero section on the about page. This will be replaced with a real description from the CMS."
      noButton
    />

    <OurStory />

    <Usps />

    <TeamSection imageRight />
  </BaseLayout>
</template>
