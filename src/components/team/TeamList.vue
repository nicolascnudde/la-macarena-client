<script>
import gql from 'graphql-tag';

import { placeholderImage } from '@/constants';
import TeamListItem from './TeamListItem.vue';

export default {
  name: 'TeamList',
  components: { TeamListItem },
  data: { placeholderImage },
  apollo: {
    members: {
      query: gql`
        query members {
          members(orderBy: { id: asc }) {
            id
            firstName
            lastName
            image {
              publicUrl
            }
          }
        }
      `,
    },
  },
};
</script>

<template>
  <ul v-if="!this.$apollo.queries.members.loading" class="team__list">
    <TeamListItem
      v-for="member in members"
      :key="member.id"
      :firstName="member.firstName"
      :image="member.image ? member.image.publicUrl : placeholderImage"
    />
  </ul>
</template>

<style lang="scss">
.team__list {
  background: url('https://res.cloudinary.com/dvb6lcmag/image/upload/v1653846498/bg-images/Brush_Pink_1_q1htng.png') center/200% no-repeat;
  position: relative;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 1rem;
  width: 75%;
  margin: 0 auto;

  @include responsive(tablet) {
    grid-template-columns: repeat(2, 1fr);
    background-size: 100%;
    margin-bottom: -12%; // Mitigate the transform translateY of the TeamListItems
  }
}
</style>
