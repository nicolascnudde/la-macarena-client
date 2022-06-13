<script>
export default {
  name: 'App',
};
</script>

<template>
  <metainfo>
    <template v-slot:title="{ content }">{{ content ? `${content} - La Macarena` : `La Macarena` }}</template>
  </metainfo>

  <router-view v-slot="{ Component, route }">
    <transition :name="route.meta.transition || 'fade'" mode='out-in'>
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

.slide-leave-active,
.slide-enter-active {
  transition: transform $transitionNormal, opacity $transitionNormal;
}

.slide-enter {
  transform: translate(100%, 0);
  opacity: 1;
}

.slide-leave-to {
  transform: translate(-100%, 0);
  opacity: 0;
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
