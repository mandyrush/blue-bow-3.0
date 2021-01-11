<template>
    <footer>
        <b-container>
            <b-row align-h="center">
                <b-col cols="auto" class="mb-3 mb-md-0">
                    <b-link href="/">
                        <img src="~/assets/bb_logo2.png" alt="Blue Bow Fashion Logo" fluid>
                    </b-link>
                </b-col>
                <b-col cols="auto">
                    <b-link href="/gallery">Gallery</b-link>
                    <b-link href="/#contact-me" @click="smoothScrollTo('#contact-me')">Contact</b-link>
                    <b-link href="/#about-me" @click="smoothScrollTo('#about-me')">About</b-link>
                </b-col>
            </b-row>
        </b-container>
    </footer>
</template>

<script>
export default {
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

<style lang="scss" scoped>
    footer {
        background-color: #16425b;
        padding-top: 3rem;
        padding-bottom: 3rem;
        color: #ffffff;
        a {
            color: #ffffff;
            text-transform: uppercase;
            font-size: 1rem;
        }
        a:not(:last-child):after {
            content: '|';
            padding: 0.5rem;
        }
        a:hover,
        a:active,
        a:focus {
            color: #81c3d7;
            text-decoration: none;
        }
    }
</style>