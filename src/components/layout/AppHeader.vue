<script>
import AppNav from './AppNav.vue';

export default {
  name: 'AppHeader',
  components: { AppNav },
};
</script>

<template>
    <header class="app__header">
        <div class="app__header__logo">
            <img src="https://www.gstatic.com/images/branding/product/1x/keep_48dp.png" alt="Keep logo">
        </div>

        <AppNav />
    </header>
</template>

<style>

</style>