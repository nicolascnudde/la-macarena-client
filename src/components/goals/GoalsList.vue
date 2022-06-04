<script>
import GoalsListItem from './GoalsListItem.vue';

export default {
  name: 'GoalsList',
  components: { GoalsListItem },
};
</script>

<template>
  <ul class="goals__list">
    <GoalsListItem />

    <GoalsListItem />
  </ul>
</template>

<style lang="scss">
.goals__list {
  display: flex;
  flex-direction: column;
  gap: 15rem;
}
</style>
