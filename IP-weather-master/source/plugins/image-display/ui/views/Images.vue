<template>
	<v-app>
		<v-content  fluid app>
			<v-container pr-2 pl-2 pt-4>
				I AM THE IMAGES PAGE
				<Cmp></Cmp>
			</v-container>
		</v-content>
	</v-app>
</template>

<script lang="ts">

import Vue from "vue";
import Cmp from "./Cmp.vue";

export default Vue.extend({
	name: "Images",
	components: {
		Cmp:Cmp
	},
	data() {
		return {
			
		};
	},
	methods: {
		
	}
});
</script>
