<template>
    <div class="holder">
        <form @submit.prevent="addSkill">
            <input
                    type="text"
                    placeholder="Enter a skill your have"
                    v-model="skill"
                    v-validate="'min:3'"
                    name="skill">
            <transition name="alert-in" enter-active-class="animated shake">
                <p class="alert" v-if="errors.has('skill')"> {{errors.first('skill')}} </p>
            </transition>
        </form>
        <ul>
            <transition-group name="list" enter-active-class="animated bounceIn"
                              leave-active-class="animated bounceOut">
                <li v-for="(data, index) in skills"
                    :key="index">
                    {{data.skill}}
                </li>
            </transition-group>
        </ul>
        <p class="footer">These are the skills that you possess</p>
    </div>
</template>

<script>
	export default {
		name: 'Skills',
		data() {
			return {
				skill: '',
				skills: [
					{'skill': 'Vue.js', id: 0},
					{'skill': 'React.js', id: 1}
				]
			};
		},
		methods: {
			addSkill() {
				this.$validator.validateAll().then(result => {
					if (result) {
						this.skills.push({skill: this.skill, id: +new Date()});
						this.skill = '';
					} else {
						console.log('--->not valid',);
					}
				});
			}
		}
	};
</script>

<style scoped>
    @import "https://cdn.jsdelivr.net/npm/animate.css@3.5.1";
    @import "https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css";

    .holder {
        background: transparent;
        position: relative;
    }

    form {
        margin-bottom: 30px;
    }

    ul {
        margin: 0;
        padding: 0;
        list-style-type: none;
    }

    ul li {
        padding: 20px;
        font-size: 1.3em;
        background-color: #e0edf4;
        border-left: 5px solid #3eb3f6;
        margin-bottom: 2px;
        color: #3e5252;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    ul li:hover {

        transition: all .4s;
        background-color: #3eb3f6;
        color: #e0edf4;
    }

    .footer {
        text-align: center;
        padding: 30px 0;
        color: gray;
        margin: 0;
        background-color: #fff;
        border-bottom: 5px solid #3eb3f6;
    }

    .container {
        box-shadow: 0 0 40px lightgray;
    }

    input {
        width: calc(100% - 40px);
        border: 0;
        padding: 20px;
        font-size: 1.3em;
        background-color: #323333;
        color: #687f7f;
    }

    .alert {
        color: red;
        font-weight: bold;
        display: inline-block;
        padding: 5px;
        margin: 0;
        position: absolute;
        left: 0;
        top: -30px;
        background: transparent;
    }

    .alert-in-enter-active {
        animation: bounce-in .5s;
    }

    .alert-in-leave-active {
        animation: bounce-in .5s reverse;
    }

    @keyframes bounce-in {
        0% {
            transform: scale(0);
        }
        50% {
            transform: scale(1.1);
        }
        100% {
            transform: scale(1);
        }
    }
</style>
