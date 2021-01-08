<template>
  <div>
      <header>
          <h1>Gallery</h1>
      </header>
    <Navbar />
    <Nuxt />
  </div>
</template>

<script>
import Navbar from '~/components/Navbar.vue'

export default {
  components: {
    Navbar,
  },
}
</script>

<style lang="scss">
    header {
        background: url('~assets/banner/interior_bkgd.jpg') no-repeat center left;
        background-size: cover;
        height: 300px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>
