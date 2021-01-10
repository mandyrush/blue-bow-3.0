<template>
<div>
  <b-navbar toggleable="lg" type="dark">
    <b-navbar-brand href="/">Blue Bow Fashion</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav class="ml-auto">
        <b-nav-item href="/gallery">Gallery</b-nav-item>
        <b-nav-item href="#">Contact</b-nav-item>
        <b-nav-item href="#">About</b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>
</template>

<style lang="scss">
  .navbar {
    background-color: #2f6690;
  }
  .navbar-dark .navbar-nav .nav-link {
    color: #ffffff;
  }
</style>