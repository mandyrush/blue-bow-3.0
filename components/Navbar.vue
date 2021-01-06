<template>
<nav class="navbar navbar-expand-lg navbar-light">
  <nuxt-link to="/" class="navbar-brand" href="#">Blue Bow Fashion</nuxt-link>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#primaryNav" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="primaryNav">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item">
        <nuxt-link to="/" class="nav-link">Home</nuxt-link>
      </li>
      <li class="nav-item">
        <nuxt-link to="/gallery" class="nav-link">Gallery</nuxt-link>
      </li>
    </ul>
  </div>
</nav>
</template>
