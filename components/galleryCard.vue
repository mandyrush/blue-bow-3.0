<template>
<NuxtLink :to="galleryItemPath">
    <div class="gallery-card">
        <b-img :src="require(`~/${featuredPath()}`)" :alt="card.cardTitle" fluid class="card-image"></b-img>
        <div class="card-title">{{ card.cardTitle }}</div>
    </div>
</NuxtLink>
</template>

<script>
    export default {
        props: {
            card: Object
        },
        data() {
            return {
                thumbnailNumber: 0
            }
        },
        computed: {
            featuredImagePath() {
                return this.card.thumbnails[this.thumbnailNumber] + '_lg.jpg';
            },
            galleryItemPath() {
                return '/gallery/' + this.card.id;
            }
        },
        methods: {
            featuredPath() {
                return this.card.featured + '.jpg';
            },
            thumbnailPath(thumbnail) {
                return  thumbnail + '.jpg';
            },
            setFeaturedImage(index) {
                this.thumbnailNumber = index;
            }
        },
    }
</script>

<style lang="scss">
    .gallery-card {
        position: relative;
        .card-image {
            filter: grayscale(100%);
        }
        .card-title {
            position: absolute;
            bottom: 0;
            left: 50%;
            transform: translate(-50%);
            background-color: rgba(0,0,0,0.6);
            width: 100%;
            height: 25%;
            text-align: center;
            margin-bottom: 0;
            padding: 1rem;
            color: #ffffff;
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }
    .gallery-card:hover .card-image {
        filter: none;
    }

    @media (min-width: 1200px) {
        .gallery-card {
            .card-title {
                height: 30%;
            }
        }
    }
</style>
