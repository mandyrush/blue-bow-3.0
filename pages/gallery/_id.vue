<template>
    <b-row align-h="center" no-gutters>
        <b-col lg="6" order="2" order-lg="1" class="text-center text-lg-left">
            <div class="thumbnail" v-for="thumbnail in selectedCard.thumbnails" :key="thumbnail">
                    <b-img :src="require(`~/${thumbnail}_lg.jpg`)" fluid></b-img>
            </div>
        </b-col>
        <b-col lg="6" order="1" order-lg="2" class="selected-card-description">
            <div class="selected-card-title">
                <div class="title-container">
                    <div class="divider">
                        <img src="~/assets/divider3.png" alt="Decorative divider">
                    </div>
                    <h2 class="text-center">{{ selectedCard.cardTitle }}</h2>
                    <div class="divider">
                        <img src="~/assets/divider3.png" alt="Decorative divider">
                    </div>
                </div>
            </div>
        </b-col>
    </b-row>
</template>    

<script>
    export default {
        layout: 'interior',
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
                        id: 2,
                        thumbnails: [
                            'assets/gallery/shelby/thumbnail_1',
                            'assets/gallery/shelby/thumbnail_2',
                            'assets/gallery/shelby/thumbnail_3',
                            'assets/gallery/shelby/thumbnail_4',
                            'assets/gallery/shelby/thumbnail_6',
                            'assets/gallery/shelby/thumbnail_5'
                        ],
                        featured: 'assets/gallery/shelby/thumbnail_1',
                        cardTitle: 'Hand Beaded Angel Cut Veil'
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
                        id: 3,
                        thumbnails: [
                            'assets/gallery/renee/thumbnail_1',
                            'assets/gallery/renee/thumbnail_2',
                            'assets/gallery/renee/thumbnail_3',
                            'assets/gallery/renee/thumbnail_4'
                        ],
                        featured: 'assets/gallery/renee/thumbnail_1',
                        cardTitle: 'Cathedral Veil with Lace Trim'
                    },
                    {
                        id: 4,
                        thumbnails: [
                            'assets/gallery/brooke/thumbnail_6',
                            'assets/gallery/brooke/thumbnail_5_resized',
                            'assets/gallery/brooke/thumbnail_3',
                            'assets/gallery/brooke/thumbnail_4',
                            'assets/gallery/brooke/thumbnail_2'
                        ],
                        featured: 'assets/gallery/brooke/thumbnail_6',
                        cardTitle: 'Cathedral Veil with Pearl Accents'
                    },
                    {
                        id: 5,
                        thumbnails: [
                            'assets/gallery/sarah_veil2/thumbnail_1',
                            'assets/gallery/sarah_veil2/thumbnail_2',
                            'assets/gallery/sarah_veil2/thumbnail_3',
                            'assets/gallery/sarah_veil2/thumbnail_4',
                            'assets/gallery/sarah_veil2/thumbnail_5'
                        ],
                        featured: 'assets/gallery/sarah_veil2/thumbnail_1',
                        cardTitle: 'Floral Halo Veil'
                    },
                    {
                        id: 6,
                        thumbnails: [
                            'assets/gallery/nicki/thumbnail_1',
                            'assets/gallery/nicki/thumbnail_2_resized',
                            'assets/gallery/nicki/thumbnail_3',
                            'assets/gallery/nicki/thumbnail_5',
                            'assets/gallery/nicki/thumbnail_4',
                            'assets/gallery/nicki/thumbnail_6_resized'
                        ],
                        featured: 'assets/gallery/nicki/thumbnail_1',
                        cardTitle: 'Tea Length Wedding Dress & Birdcage Veil'
                    },
                    {
                        id: 7,
                        thumbnails: [
                            'assets/gallery/black_red_bride/thumbnail_1',
                            'assets/gallery/black_red_bride/thumbnail_3_resized',
                            'assets/gallery/black_red_bride/thumbnail_2_resized',
                            'assets/gallery/black_red_bride/thumbnail_4_resized'
                        ],
                        featured: 'assets/gallery/black_red_bride/thumbnail_2',
                        cardTitle: 'Birdcage Veil with Feather Embellishment'
                    },
                    {
                        id: 8,
                        thumbnails: [
                            'assets/gallery/shandra/thumbnail_1',
                            'assets/gallery/shandra/thumbnail_2',
                            'assets/gallery/shandra/thumbnail_3',
                            'assets/gallery/shandra/thumbnail_4',
                            'assets/gallery/shandra/thumbnail_5_resized',
                            'assets/gallery/shandra/thumbnail_6'
                        ],
                        featured: 'assets/gallery/shandra/thumbnail_1',
                        cardTitle: 'Lace Cathedral Veil'
                    },
                    {
                        id: 9,
                        thumbnails: [
                            'assets/gallery/shandra_halos/thumbnail_1',
                            'assets/gallery/shandra_halos/thumbnail_2',
                            'assets/gallery/shandra_halos/thumbnail_3',
                            'assets/gallery/shandra_halos/thumbnail_5_resized',
                            'assets/gallery/shandra_halos/thumbnail_6_resized',
                            'assets/gallery/shandra_halos/thumbnail_4_resized',
                        ],
                        featured: 'assets/gallery/shandra_halos/thumbnail_5',
                        cardTitle: 'Flower Girl Floral Halo'
                    },
                    {
                        id: 10,
                        thumbnails: [
                            'assets/gallery/sarah/thumbnail_1',
                            'assets/gallery/sarah/thumbnail_2',
                            'assets/gallery/sarah/thumbnail_3',
                            'assets/gallery/sarah/thumbnail_4_resized',
                            'assets/gallery/sarah/thumbnail_5',
                            'assets/gallery/sarah/thumbnail_6'
                        ],
                        featured: 'assets/gallery/sarah/thumbnail_1',
                        cardTitle: 'Floral Halo Veil'
                    },

                    {
                        id: 11,
                        thumbnails: [
                            'assets/gallery/amanda/thumbnail_1',
                            'assets/gallery/amanda/thumbnail_2',
                            'assets/gallery/amanda/thumbnail_3',
                            'assets/gallery/amanda/thumbnail_4'
                        ],
                        featured: 'assets/gallery/amanda/thumbnail_1',
                        cardTitle: 'Double Tiered Veil with Pearl Edging'
                    },
                    {
                        id: 12,
                        thumbnails: [
                            'assets/gallery/tacy/thumbnail_4',
                            'assets/gallery/tacy/thumbnail_5_resized',
                            'assets/gallery/tacy/thumbnail_1_resized',
                            'assets/gallery/tacy/thumbnail_2_resized',
                            // 'assets/gallery/tacy/thumbnail_3_resized'
                        ],
                        featured: 'assets/gallery/tacy/thumbnail_1',
                        cardTitle: 'Wedding Dress with Asymmetrical Hem & Birdcage Veil'
                    },
                    {
                        id: 13,
                        thumbnails: [
                            'assets/gallery/kelvin/thumbnail_3_resized',
                            'assets/gallery/kelvin/thumbnail_2',
                            'assets/gallery/kelvin/thumbnail_4_resized',
                            'assets/gallery/kelvin/thumbnail_1_resized',
                        ],
                        featured: 'assets/gallery/kelvin/thumbnail_3',
                        cardTitle: 'Button Down Vest with Decorative Pockets'
                    }
                ]
            }   
        },
        computed: {
            selectedCard () {
                return this.galleryCards.find(card => card.id === parseInt(this.$route.params.id));
            }
        }
    }
</script>

<style lang="scss" scoped>
    .selected-card-description {
        display: flex;
        justify-content: center;
        // background: url('~assets/gallery/gallery_detail_bkgd2.png') no-repeat bottom right;
        // background-size: contain;
    }
    .selected-card-title {
        padding: 1rem;
        .title-container {
            text-align: center;
        }
    }
    .divider img {
        max-width: 100%;
        height: auto;
    }
    h2 {
        margin: 2rem 0;
        color: #16425b;
    }
    @media (min-width: 992px) {
      .selected-card-title {
            position: fixed;
            padding: 3rem 5rem;
            .title-container {
                max-width: 75%;
                margin: auto;
            }
        }  
    }
</style>