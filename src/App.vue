<template>
    <!-- <NavigationBar /> -->
    <RouterView />
</template>

<script>
import { defineComponent } from 'vue'
// import NavigationBar from '@/components/NavigationBar.vue'

export default defineComponent({
  name: 'App',
  // components: {
  //   NavigationBar
  // }
})
</script>

<!-- <style lang="scss">
.wrapper {
  display: flex;
  position: relative;
  @include mobile {
    flex-direction: column-reverse;
  }
}
</style> -->
