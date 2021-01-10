<template>
    <footer>
        <b-container>
            <b-row align-h="center">
                <b-col cols="auto">
                    Blue Bow Fashion
                </b-col>
                <b-col cols="auto">
                    <b-link href="/gallery">Gallery</b-link>
                    <b-link href="#contact">Contact</b-link>
                    <b-link href="#about">About</b-link>
                </b-col>
            </b-row>
        </b-container>
    </footer>
</template>

<style lang="scss">
    footer {
        // background-color: #d9dcd6;
        background-color: #16425b;
        padding-top: 3rem;
        padding-bottom: 3rem;
        a {
            color: #3a7ca5;
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