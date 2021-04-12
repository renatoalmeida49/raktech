<template>
  <div class="home">
    <SlideShow />

    <MoreInfo />
  </div>
</template>

<script>

import SlideShow from '@/components/SlideShow.vue'
import MoreInfo from '@/components/MoreInfo.vue'

export default {
  name: 'Home',
  components: {
    SlideShow,
    MoreInfo
  }
}
</script>
