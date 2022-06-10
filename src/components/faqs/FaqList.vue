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
            isExpanded
          }
        }
      `,
    },
  },
};
</script>

<template>
  <ul v-if="!this.$apollo.queries.faqs.loading" class="faq__list">
    <FaqListItem
      v-for="faq in faqs"
      :key="faq.id"
      :question="faq.question"
      :answer="faq.answer"
      :isExpanded="faq.isExpanded"
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
