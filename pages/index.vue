<template>
<div>
  <div class="billboard">
    <b-container fluid>
      <b-row align-h="center">
        <b-col lg="10" class="text-center">
          <h1>Blue Bow Fashion</h1>
          <b-img src="~/assets/banner/banner_2.jpg" alt="Wedding veils" fluid class="billboard-img"></b-img>
        </b-col>
      </b-row>
    </b-container>
  </div>
  <About />
</div>
</template>

<script>
import About from '~/components/about.vue'
  export default {
    components: {
      About,
    }
  }
</script>

<style lang="scss">
  .billboard {
    padding: 5rem;
    background: url('~assets/banner/billboard_bkgd.jpg') no-repeat center center;
    background-size: cover;
    .billboard-img {
      box-shadow: 8px 8px 8px rgba(0,0,0,0.5);
    }
  }
</style>
