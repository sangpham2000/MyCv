<template>
  <section class="container heading" style="color: #fff">
    <div class="heading-info">
      <h1 class="">
        Hi, I'm <span class="heading-info-name">{{ info.name }}</span
        ><div class="hand">👋</div>
      </h1>
      <p>{{ info.desc }}</p>
    </div>
    <div class="heading-info-image">
      <div></div>
    </div>
  </section>
</template>

<script>
import { defineComponent } from 'vue'
import { information } from '@/assets/data.js'

export default defineComponent({
  name: 'HomeView',
  data() {
    return {
      info: information
    }
  }
})
</script>

<style lang="scss" scoped>
.heading {
  @include flex(center, center);
  gap: 40px;
  padding: 4rem;
  position: absolute;
  @include tablet {
    flex-direction: column-reverse;
    padding: 3.5rem;
  }
  @include mobile {
    padding: 30px 20px;
  }

  &-info {
    width: 70%;
    @include tablet {
      width: 100%;
    }

    h1 {
      font-size: 60px;
      font-weight: 700;
    }
    & > p {
      font-size: 30px;
      margin: 20px 0;
    }

    &-name {
      color: aqua;
    }
    
    &-image {
      width: 400px;
      height: 600px;
      background-color: red;
      border-radius: 15px;
      position: relative;
      @include tablet {
        margin: 0 auto;
        width: 200px;
        height: 300px;
      }
    }
  }
}

.hand {
  display: inline-block;
  animation: shaking .8s infinite;
}

@keyframes shaking {
  0% {
    transform: rotate(0deg);
  }
  25% {
    transform: rotate(5deg);
  }
  50% {
    transform: rotate(0deg);
  }
  75% {
    transform: rotate(-5deg);
  }
  100% {
    transform: rotate(0deg);
  }
}
</style>
