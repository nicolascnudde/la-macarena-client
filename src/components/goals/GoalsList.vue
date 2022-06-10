<script>
import gql from 'graphql-tag';

import { placeholderImage } from '@/constants';
import GoalsListItem from './GoalsListItem.vue';

export default {
  name: 'GoalsList',
  components: { GoalsListItem },
  data: { placeholderImage },
  apollo: {
    goals: {
      query: gql`
        query goals {
          goals(orderBy: { id: asc }) {
            id
            title
            description
            image {
              publicUrl
            }
            imageRight
          }
        }
      `,
    },
  },
};
</script>

<template>
  <ul class="goals__list">
    <GoalsListItem
      v-for="goal in goals"
      :key="goal.id"
      :title="goal.title"
      :description="goal.description"
      :image="goal.image ? goal.image.publicUrl : placeholderImage"
      :imageRight="goal.imageRight"
    />
  </ul>
</template>
