<template>
<div>
  <b-navbar toggleable="lg" type="dark">
    <b-navbar-brand href="/">
      <img src="~/assets/bb_logo2.png" alt="Blue Bow Fashion Logo" fluid>
    </b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav class="ml-auto">
        <b-nav-item href="/gallery">Gallery</b-nav-item>
        <b-nav-item href="/#contact-me" @click="smoothScrollTo('#contact-me')">Contact</b-nav-item>
        <b-nav-item href="/#about-me" @click="smoothScrollTo('#about-me')">About</b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>
</template>

<script>
  export default{
    methods: {
      smoothScrollTo (scrollTo) {
        if (window.location.pathname === '/') {
          event.preventDefault();
          let el = document.querySelector(scrollTo);
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  }
</script>

<style lang="scss">
  .navbar {
    background-color: #81C3D7;
    box-shadow: 0 8px 12px rgba(0,0,0,0.3);
  }
  .navbar-dark .navbar-nav .nav-link {
    color: #ffffff;
    text-transform: uppercase;
    font-size: 1rem;
  }
</style>