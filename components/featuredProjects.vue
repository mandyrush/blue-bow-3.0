<template>
    <div>
        <div class="gradient-border"></div>
        <div class="gallery">
            <b-row no-gutters>
                <b-col md="4" v-for="card in galleryCards" :key="card.id">
                    <gallery-card
                        :card="card"
                        :key="card.id"
                    >
                    </gallery-card>
                </b-col>
            </b-row>
        </div>
        <div class="link-to-gallery">
            <NuxtLink to="/gallery">View full gallery</NuxtLink>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                galleryCards: [
                    {
                        id: 1,
                        thumbnails: [
                            'assets/gallery/rhinestone_bride/thumbnail_6',
                            'assets/gallery/rhinestone_bride/thumbnail_1',
                            'assets/gallery/rhinestone_bride/thumbnail_8',
                            'assets/gallery/rhinestone_bride/thumbnail_2',
                            'assets/gallery/rhinestone_bride/thumbnail_7',
                            'assets/gallery/rhinestone_bride/thumbnail_9'
                        ],
                        featured: 'assets/gallery/rhinestone_bride/thumbnail_6',
                        cardTitle: 'Cathedral Veil with Rhinestone Embellishments'
                    },
                    {
                        id: 14,
                        thumbnails: [
                            'assets/gallery/shelby_flower_girl/thumbnail_1',
                            'assets/gallery/shelby_flower_girl/thumbnail_2',
                            'assets/gallery/shelby_flower_girl/thumbnail_6',
                            'assets/gallery/shelby_flower_girl/thumbnail_4',
                            'assets/gallery/shelby_flower_girl/thumbnail_5',
                            'assets/gallery/shelby_flower_girl/thumbnail_3'
                        ],
                        featured: 'assets/gallery/shelby_flower_girl/thumbnail_1',
                        cardTitle: 'Flower Girl Dress with matching Halo & Diaper Cover'
                    },
                    {
                        id: 8,
                        thumbnails: [
                            'assets/gallery/shandra/thumbnail_1',
                            'assets/gallery/shandra/thumbnail_2',
                            'assets/gallery/shandra/thumbnail_3',
                            'assets/gallery/shandra/thumbnail_4',
                            'assets/gallery/shandra/thumbnail_5',
                            'assets/gallery/shandra/thumbnail_6'
                        ],
                        featured: 'assets/gallery/shandra/thumbnail_1',
                        cardTitle: 'Lace Cathedral Veil'
                    },
                ]
            }
        }
    }
</script>

<style lang="scss">
    .gradient-border {
        height:10px;
        background-image: linear-gradient(to left, #16425b, #3a7ca5, #81c3d7);
    }
    .link-to-gallery {
        text-align: center;
        font-size: 1rem;
        padding: 1rem;
        background-image: linear-gradient(to right, #16425b, #3a7ca5, #81c3d7);
        box-shadow: 0 8px 10px rgba(0,0,0,0.3);
        a {
            color: #ffffff;
            text-transform: uppercase;
        }
        a:hover,
        a:active,
        a:focus {
            color: #d9dcd6;
            text-decoration: none;
        }
    }
</style>