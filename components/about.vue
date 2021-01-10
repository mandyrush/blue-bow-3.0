<template>
    <div class="about-content" id="about-me">
        <b-container>
            <b-row align-h="center" align-v="center">
                <b-col md="4">
                    <b-img src="~/assets/linda.jpg" alt="Image of Linda Pinney" fluid class="linda-img"></b-img>
                </b-col>
                <b-col md="5" offset-md="1">
                    <div class="about-linda">

                        <header class="title section-title">About Me</header>

                        <span>
                            My name is Linda and I love making wedding veils and accessories. In fact it's on my list of
                            things I love the most right along with my husband, my kids and my cats (aka my other furry
                            kids). In my spare time you'll find me in my sewing room drinking coffee from my blue kitty
                            mug, watching Die Hard and working on my latest project.
                        </span>

                    </div>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<style lang="scss">
    .about-content {
        padding-top: 3rem;
        padding-bottom: 3rem;
    }
    .linda-img {
        border-radius: 50%;
        max-width: 80%;
    }
</style>