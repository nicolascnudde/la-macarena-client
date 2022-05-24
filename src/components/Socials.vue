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
    <a href="https://www.instagram.com/la-macarena-be" target="_blank" rel="noopener noreferrer">
      <InstagramIcon />
    </a>

    <a href="https://www.facebook.com/la-macarena-be" target="_blank" rel="noopener noreferrer">
      <FacebookIcon />
    </a>
  </div>
</template>
