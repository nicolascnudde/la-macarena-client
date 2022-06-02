<script>
import ActivitiesListItem from './ActivitiesListItem.vue';

export default {
  name: 'ActivitiesList',
  components: { ActivitiesListItem },
};
</script>

<template>
  <ul class="upcoming-activities__list">
    <ActivitiesListItem />

    <ActivitiesListItem />

    <ActivitiesListItem />
  </ul>
</template>

<style lang="scss">
.upcoming-activities__list {
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
}
</style>
