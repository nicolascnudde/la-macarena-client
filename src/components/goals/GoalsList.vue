<script>
import gql from 'graphql-tag';

import GoalsListItem from './GoalsListItem.vue';

export default {
  name: 'GoalsList',
  components: { GoalsListItem },
  apollo: {
    goals: {
      query: gql`
        query goals {
          goals {
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
      :image="
        goal.image
          ? goal.image.publicUrl
          : 'https://res.cloudinary.com/dvb6lcmag/image/upload/v1654678968/content/default-image_onwn5a.webp'
      "
      :imageRight="goal.imageRight"
    />
  </ul>
</template>
