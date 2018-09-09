<template>
    <div id="app">
        <nav>
            <router-link to="/">Home</router-link>
            <router-link to="/about">About</router-link>
        </nav>
        <router-view />
    </div>
</template>

<script>
	import Skills from './components/Skills.vue';

	export default {
		name: 'app',
		components: {
			Skills
		}
	};
</script>

<style>
    @import url('https://fonts.googleapis.com/css?family=Montserrat:400,700');

    body {
        cursor: default;
        font-family: 'Montserrat', sans-serif;
        display: grid;
        grid-template-rows: auto;
        justify-items: center;
    }

    input, button {
    outline: none;
    }

    body, html {
        margin: 0;
        height: 100%;
    }

    #app {
        width: 50%;
    }

    nav {
        padding: 20px 20px 20px 0;
        margin-bottom: 30px;
    }

    nav a {
        padding: 20px;
        font-size: 1.3em;
        background-color: #e0edf4;
        border-left: 5px solid #3eb3f6;
        margin-bottom: 2px;
        color: #3e5252;
        transition: all .3s;
        text-decoration: none;
    }

    nav a:hover {
        background-color: #3eb3f6;
        color: #e0edf4;
    }
</style>
