<template>
  <div>
  <div class="container">
  <div id="app">
     <transition
        name="fade"
        mode="out-in"
      >
      <router-view/>
    </transition>
  </div>
  </div>
  </div>
</template>
<script>
</script>
<style scoped>.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.3s;
  transition-property: opacity;
  transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0
}
</style>