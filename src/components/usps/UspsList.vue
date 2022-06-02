<script>
import UspsListItem from './UspsListItem.vue';

export default {
  name: 'CategoriesList',
  components: { UspsListItem },
};
</script>

<template>
  <ul class="usps__list">
    <UspsListItem />

    <UspsListItem />

    <UspsListItem />
  </ul>
</template>

<style lang="scss">
.usps__list {
  @include responsive(tablet) {
    display: flex;
    flex-wrap: wrap;
    gap: 4%;
  }

  @include responsive(desktop) {
    display: flex;
    flex-wrap: wrap;
    gap: 2%;
  }

  &__item {
    margin-top: 3rem;
  }
}
</style>
