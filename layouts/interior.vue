<template>
  <div>
    <header :style="{ backgroundImage: `url(` + require(`~/${backgroundUrl}`) + `)`}">
      <div class="gradient">
        <h1>Gallery</h1>
      </div>
    </header>
    <Navbar />
    <div class="content">
      <Nuxt />
    </div>
    <Footer />
  </div>
</template>

<script>
import Navbar from '~/components/Navbar.vue'
import Footer from '~/components/Footer.vue'

export default {
  components: {
    Navbar,
    Footer
  },
  data() {
    return {
    
    }
  },
  computed: {
    backgroundUrl () {
      return "assets/banner/interior_bkgd_" + this.randomNum + ".jpg";
    },
    randomNum () {
      return Math.floor(Math.random() * 3);
    },
  }
}
</script>

<style lang="scss" scoped>
    header {
        background-position: center left;
        background-repeat: no-repeat;
        background-size: cover;
        height: 300px;
        h1 {
          color: #ffffff;
        }
    }
    .gradient {
      background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.5), transparent);
      height: 100%;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
</style>
