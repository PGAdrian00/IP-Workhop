<template>
    <div>
        <h1>Title</h1>
        <p>
            {{dynamicText}}
        </p>
        

        <button v-on:click="changeAlert()"> Change Alert! </button>
        <button v-on:click="clickMeFunction()"> Click Me! </button>
    </div>
</template>

<script lang="ts">

import Vue from "vue";

export default Vue.extend({
	name: "Cmp",
	data() {
        //Here is the local variable storage
		return {
            messageAlert:"This is a dynamic Alert message",
            dynamicText:"Dynamic text to display"
		};
	},
	methods: {
        //Here is the function storage
		clickMeFunction() {
            alert(this.messageAlert);
        },
		changeAlert() {
            this.messageAlert = "Your first click me funciton";
        },
	}
});
</script>
