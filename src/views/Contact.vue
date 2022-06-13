<script>
import gql from 'graphql-tag';

import { BaseLayout } from '@/layouts';
import { ContactForm } from '@/components/forms';
import { FaqSection } from '@/components/faqs';
import { TitleAndText } from '@/components';

export default {
  name: 'Contact',
  components: { BaseLayout, ContactForm, FaqSection, TitleAndText },
  metaInfo() {
    return {
      // The meta information will automatically update after the data loads
      title: this.$apollo.queries.content.loading ? 'Loading...' : this.content.contactPageHeroTitle,
      description: this.$apollo.queries.content.loading ? 'Loading...' : this.content.contactPageHeroDescription,
      meta: [
        {
          property: 'og:title',
          content: this.$apollo.queries.content.loading ? 'Loading...' : this.content.contactPageHeroTitle,
        },
        {
          property: 'og:description',
          content: this.$apollo.queries.content.loading ? 'Loading...' : this.content.contactPageHeroDescription,
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
            contactPageHeroTitle
            contactPageHeroDescription
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
  <BaseLayout v-if="!this.$apollo.queries.content.loading" pageClass="contact-page">
    <TitleAndText
      bgImageUrl="https://res.cloudinary.com/dvb6lcmag/image/upload/v1653846499/bg-images/Yellow_Paint_byfsl6.png"
      type="h1"
      :title="content.contactPageHeroTitle"
      >{{ content.contactPageHeroDescription }}
    </TitleAndText>

    <ContactForm />

    <FaqSection />
  </BaseLayout>
</template>
