<script>
import GoalsList from './GoalsList.vue';

export default {
  name: 'GoalsSection',
  components: { GoalsList },
};
</script>

<template>
  <section class="goals">
    <div class="container">
      <GoalsList />
    </div>
  </section>
</template>

<style lang="scss">
.goals {
  margin-bottom: 5rem;
  background: url('https://res.cloudinary.com/dvb6lcmag/image/upload/v1653846484/bg-images/Brush_Green_yuvrrs.png') center/cover no-repeat;

  @include responsive(tablet) {
    margin-bottom: 8rem;
  }

  .title-text {
    margin-bottom: 0; // Remove the margin bottom because we're adding margin top on the cards in GoalsListItem.vue
  }
}
</style>
