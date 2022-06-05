<script>
import TeamList from './TeamList.vue';
import TitleAndText from '../TitleAndText.vue';

export default {
  name: 'Team',
  components: { TeamList, TitleAndText },
  props: {
    title: {
      type: String,
      default: 'Who we are',
    },
    description: {
      type: String,
      default:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
  },
};
</script>

<template>
  <section class="team">
    <div class="team__container container">
      <div class="team__image">
        <img
          src="https://res.cloudinary.com/dvb6lcmag/image/upload/v1653469604/categories/cl3ld3z9j00012062ah2abmp1.webp"
        />
      </div>

      <div class="team__content">
        <TitleAndText type="h2" :title="title">
          {{ description }}
        </TitleAndText>

        <TeamList />
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.team {
  margin-bottom: 5rem;

  @include responsive(tablet) {
    margin-bottom: 8rem;
  }

  @include responsive(desktop) {
    position: relative;
  }

  .title-text {
    margin-bottom: 0; // Remove the margin bottom because we're adding margin top on the cards in TeamListItem.vue
  }

  &__container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__image {
    display: none;

    @include responsive(desktop) {
      display: block;
      flex-basis: 48%;

      img {
        margin-left: -2rem; // Mitigate the margin from the wrapper's padding of 2rem
        border-radius: 0 75px 150px 0;
      }
    }
  }

  &__content {
    flex-basis: 48%;
  }
}
</style>
