<script>
import TeamListItem from './TeamListItem.vue';

export default {
  name: 'TeamList',
  components: { TeamListItem },
};
</script>

<template>
  <ul class="team__list">
    <TeamListItem />

    <TeamListItem />

    <TeamListItem />
  </ul>
</template>

<style lang="scss">
.team__list {
  position: relative;
}
</style>
