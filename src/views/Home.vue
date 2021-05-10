<template>
  <div class="home">
    <SlideShow />

    <MoreInfo />
  </div>
</template>

<script>

import SlideShow from '@/components/Home/SlideShow.vue'
import MoreInfo from '@/components/Home/MoreInfo.vue'

export default {
  name: 'Home',
  components: {
    SlideShow,
    MoreInfo
  }
}
</script>
