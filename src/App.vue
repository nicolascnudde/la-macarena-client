<script>
export default {
  name: 'App',
};
</script>

<template>
  <metainfo>
    <template v-slot:title="{ content }">{{ content ? `${content} - La Macarena` : `La Macarena` }}</template>
  </metainfo>

  <router-view v-slot="{ Component }">
    <transition name="fade" mode="out-in">
      <component :is="Component" :key="$route.path"></component>
    </transition>
  </router-view>
</template>

<style lang="scss">
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

html {
  scroll-behavior: smooth;
}

.fade {
  &-enter-active,
  &-leave-active {
    transition: opacity $transitionFast;
  }

  &-enter-from,
  &-leave-to {
    opacity: 0;
  }
}
</style>
