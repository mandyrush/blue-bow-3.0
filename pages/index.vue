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
  <featured-projects />
  <contact />
  <about />
</div>
</template>

<script>
import FeaturedProjects from '~/components/featuredProjects.vue'
import About from '~/components/about.vue'
import Contact from '~/components/contact.vue'

export default {
  components: {
    FeaturedProjects,
    About,
    Contact,
  }
}
</script>

<style lang="scss">
  .billboard {
    padding: 1rem;
    background: url('~assets/banner/billboard_bkgd.jpg') no-repeat center center;
    background-size: cover;
    .billboard-img {
      box-shadow: 8px 8px 8px rgba(0,0,0,0.5);
    }
  }

  @media (min-width: 768px) {
    .billboard {
      padding: 3rem;
    }
  } 
  @media (min-width: 1200px) {
    .billboard {
      padding: 5rem;
    }
  } 
</style>
