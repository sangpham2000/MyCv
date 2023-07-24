<template>
  <header>
    <nav>
      <RouterLink
        v-for="item in listMenu"
        :key="item.id"
        :to="item.path"
        :class="item.active"
        @click="handleActive(item.id)"
        >{{ item.name }}</RouterLink
      >
    </nav>
  </header>
</template>

<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'NavigationBar',
  setup() {
    let listMenu = ref([
      {
        id: 0,
        path: '/',
        name: 'Home',
        icon: '',
        active: 'active'
      },
      {
        id: 1,
        path: '/about',
        name: 'About'
      },
      {
        id: 2,
        path: '/experience',
        name: 'Experience',
        icon: '',
        active: ''
      },
      {
        id: 3,
        path: '/projects',
        name: 'Projects',
        icon: '',
        active: ''
      },
      {
        id: 4,
        path: '/contact',
        name: 'Contact',
        icon: '',
        active: ''
      }
    ])
    return {
      listMenu
    }
  },
  methods: {
    handleActive(index) {
      this.listMenu.forEach((element) => (element.active = ''))
      this.listMenu[index].active = 'active'
    }
  }
})
</script>

<style lang="scss">
header {
  position: fixed;
  height: 100vh;
  width: 50px;
  top: 0;
  background: $main-bg;
  z-index: 1000;
  @include mobile {
    height: 50px;
    top: unset;
    bottom: 0;
    width: 100%;
    @include flex(center, center);
  }
  nav {
    @include flex(flex-start, space-between);
    flex-direction: column;
    padding: 5px 0px;
    gap: 5px;
    @include mobile {
      width: 100%;
      @include flex(center, space-between);
      flex-direction: row;
      padding: 0 5px;
    }
    & > * {
      @include flex(center, center);
      text-decoration: none;
      color: $txt-white;
      font-size: 20px;
      font-weight: 500;
      padding: 8px;
      width: 100%;
      writing-mode: vertical-rl;
      position: relative;
      &:hover::after {
        content: '';
        position: absolute;
        right: 0;
        height: 100%;
        border: 2px solid red;
        transition: all 1s ease-in;
      }
      @include mobile {
        writing-mode: unset;
        height: 50px;
        &:hover::after {
          top: 0;
          width: 100%;
          right: unset;
          height: 0;
        }
      }
    }
  }
}

.active {
  &::after {
    content: '';
    position: absolute;
    right: 0;
    height: 100%;
    border: 2px solid red;
  }
  @include mobile {
    &::after {
      top: 0;
      width: 100%;
      right: unset;
      height: 0;
    }
  }
}
</style>
