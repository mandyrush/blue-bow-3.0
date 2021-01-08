<template>
    <b-row no-gutters>
        <b-col md="7">
            <div class="thumbnail" v-for="thumbnail in card.thumbnails" :key="thumbnail">
                    <b-img :src="require(`~/${thumbnail}_lg.jpg`)" fluid></b-img>
            </div>
        </b-col>
        <b-col md="5">
            <div class="card-title">
                <h2 class="text-center">{{ card.cardTitle }}</h2>
            </div>
        </b-col>
    </b-row>
</template>    

<script>
    export default {
        layout: 'interior',
        data() {
            return {
                card: {
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
                }
            }   
        }
    }
</script>

<style lang="scss">
    .card-title {
        height: calc(100vh - 56px);
        position: fixed;
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>