<script>
import gql from 'graphql-tag';

import { TitleAndText } from '@/components';
import FaqList from './FaqList.vue';

export default {
  name: 'FaqSection',
  components: { FaqList, TitleAndText },
  apollo: {
    content: {
      query: gql`
        query content($id: ID!) {
          content(where: { id: $id }) {
            id
            contactPageFaqTitle
            contactPageFaqDescription
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
  <section v-if="!this.$apollo.queries.content.loading" class="faqs">
    <div class="container">
      <TitleAndText
        bgImageUrl="https://res.cloudinary.com/dvb6lcmag/image/upload/v1653846498/bg-images/Brush_Pink_4_dzjij3.png"
        type="h2"
        :title="content.contactPageFaqTitle"
      >
        {{ content.contactPageFaqDescription ? content.contactPageFaqDescription : null }}
      </TitleAndText>

      <FaqList />
    </div>
  </section>
</template>

<style lang="scss">
.faqs {
  margin-bottom: 5rem;

  @include responsive(tablet) {
    margin-bottom: 8rem;
  }

  .title-text {
    margin-bottom: 0; // Remove the margin bottom because we're adding margin top on the cards in FaqListItem.vue
  }
}
</style>
