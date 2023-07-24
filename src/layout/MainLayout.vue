<template>
    <NavigationBar />
    <div class="wrapper">
       <RouterView />
    </div>
</template>

<script>
import { defineComponent } from 'vue'
import NavigationBar from '@/components/NavigationBar.vue'

export default defineComponent({
  name: 'MainLayout',
  components: {
    NavigationBar
  }
})
</script>

<style lang="scss" scoped>

</style>