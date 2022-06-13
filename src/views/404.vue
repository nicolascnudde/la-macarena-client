<script>
import { AppButton } from '@/components/button';
import { BaseLayout } from '@/layouts';

export default {
  name: '404',
  components: { AppButton, BaseLayout },
  metaInfo: {
    title: '404 - This page could not be found.',
    description: 'The page could not be found, please return to the homepage.',
    meta: [
      {
        property: 'og:title',
        content: '404 - This page could not be found.',
      },
      {
        property: 'og:description',
        content: 'The page could not be found, please return to the homepage.',
      },
      {
        property: 'og:image',
        content:
          'https://res.cloudinary.com/dvb6lcmag/image/upload/v1654813030/404/404_akmnof.png',
      },
    ],
  },
};
</script>

<template>
  <BaseLayout pageClass="page-not-found">
    <div class="container">
      <h1 class="page-not-found__title">Page not found</h1>

      <AppButton class="page-not-found__button" link="/">
        Go back home
      </AppButton>

      <div class="page-not-found__image">
        <img src="https://res.cloudinary.com/dvb6lcmag/image/upload/v1654813030/404/404_akmnof.png" alt="cat knocking over water"/>
      </div>
    </div>
  </BaseLayout>
</template>

<style lang="scss">
.page-not-found {
  &__title {
    margin-bottom: 2rem;

    @include responsive(desktop) {
      margin-bottom: 3rem;
    }
  }

  &__button {
    margin-bottom: 3rem;

    @include responsive(desktop) {
      margin-bottom: 0;
    }
  }

  &__image {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 5rem;

    @include responsive(desktop) {
      img {
        width: 50%;
      }
    }
  }
}
</style>
