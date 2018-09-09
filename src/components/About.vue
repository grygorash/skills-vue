<template>
    <div class="about">
        <h1>Hello {{their_name}}, this is about page</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda aut commodi deserunt dicta, dolorem,
           eligendi eveniet facilis hic impedit ipsa libero mollitia neque nobis non omnis quo sed tempore vitae.</p>
    </div>
</template>

<script>
	export default {
		name: 'About',
		data() {
			return {
				their_name: this.$route.params.name
			};
		}
	};
</script>