<script>
import FaqListItem from './FaqListItem.vue';

export default {
  name: 'FaqList',
  components: { FaqListItem },
};
</script>

<template>
  <ul class="faq__list">
    <FaqListItem />

    <FaqListItem />

    <FaqListItem />
  </ul>
</template>

<style lang="scss">
.faq__list {
  display: block;
}
</style>
