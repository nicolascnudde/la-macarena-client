<script>
import FaqListItem from './FaqListItem.vue';
import gql from 'graphql-tag';

export default {
  name: 'FaqList',
  components: { FaqListItem },
  apollo: {
    faqs: {
      query: gql`
        query faqs {
          faqs {
            id
            question
            answer
          }
        }
      `,
    },
  },
};
</script>

<template>
  <div v-if="$apollo.queries.faqs.loading" style="font-size: 80px">
    Loading...
  </div>

  <ul class="faq__list">
    <FaqListItem
      v-for="faq in faqs"
      :key="faq.id"
      :question="faq.question"
      :answer="faq.answer"
    />
  </ul>
</template>

<style lang="scss">
.faq__list {
  @include responsive(desktop) {
    width: 66.67%;
    margin-left: auto;
    margin-right: auto;
  }
}
</style>
