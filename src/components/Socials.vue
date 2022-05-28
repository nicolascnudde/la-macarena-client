<script>
import FacebookIcon from '@/assets/icons/facebook.svg?component';
import InstagramIcon from '@/assets/icons/instagram.svg?component';

export default {
  name: 'Socials',
  components: { FacebookIcon, InstagramIcon },
};
</script>

<template>
  <div class="socials">
    <ul class="socials__list">
      <li class="socials__list__item">
        <a
          href="https://www.instagram.com/la-macarena-be"
          target="_blank"
          rel="noopener noreferrer"
        >
          <InstagramIcon />
        </a>
      </li>

      <li class="socials__list__item">
        <a
          href="https://www.facebook.com/la-macarena-be"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FacebookIcon />
        </a>
      </li>
    </ul>
  </div>
</template>

<style lang="scss">
.socials {
  &__list {
    display: flex;
    justify-content: center;
    align-items: baseline;
    gap: 3rem;

    &__list__item {
      @include responsive(desktop) {
        transition: transform $transitionFast;

        &:hover {
          transform: scale(1.2);
        }
      }
    }
  }
}
</style>
