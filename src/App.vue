<template>
  <div id="app">
    <TheHeader />

    <router-view class="main"/>

    <TheFooter />
  </div>
</template>

<script>
import TheHeader from '@/components/Layout/TheHeader'
import TheFooter from '@/components/Layout/TheFooter'

export default {
  components: {
    TheHeader,
    TheFooter
  }
}
</script>


<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

#app {
  font-family: Roboto, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background: rgb(247, 247, 247);
}

.main {
  min-height: calc(100vh - 323px - 38px);
}

@media (min-width: 640px) {
  .main {
    min-height: calc(100vh - 145px - 38px);
  }
}

</style>
