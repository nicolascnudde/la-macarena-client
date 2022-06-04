<script>
import { useMeta } from 'vue-meta';

import BaseLayout from '../layouts/BaseLayout.vue';
import ContactForm from '../components/forms/ContactForm.vue';
import FaqSection from '@/components/faqs/FaqSection.vue';
import TitleAndText from '../components/TitleAndText.vue';

export default {
  name: 'Contact',
  components: { BaseLayout, FaqSection, ContactForm, TitleAndText },
  setup() {
    useMeta({ 
        title: 'Contact',
        description: `Don't be a stranger and say hello to us! We are always happy to hear from you.`,
      });
  },
};
</script>

<template>
  <BaseLayout>
    <TitleAndText
      bgImageUrl="https://res.cloudinary.com/dvb6lcmag/image/upload/v1653846499/bg-images/Yellow_Paint_byfsl6.png"
      type="h1"
      title="Contact"
    >
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua.
    </TitleAndText>

    <ContactForm />

    <FaqSection />
  </BaseLayout>
</template>

<style lang="scss"></style>
