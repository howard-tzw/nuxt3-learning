<template>
	<div class="mx-6 mb-4 bg-slate-50 py-24">
		<div class="flex flex-col items-center">
			<h1 class="text-6xl font-semibold text-yellow-400">大家好！我是 Ryan</h1>
			<p class="my-8 text-3xl text-gray-600">這裡是 /about</p>
		</div>

		<div class="flex flex-col items-center">
			<div class="mt-8 flex items-center">
				<input id="show-button" v-model="useRound" name="show-button" type="checkbox" class="h-5 w-5" />
				<label for="show-button" class="ml-2 block text-base text-slate-800">使用圓角按鈕</label>
			</div>
			<component :is="useRound ? RoundButton : BaseButton" />
		</div>
		<p class="pb-4 text-2xl text-slate-600">這裡是最外層 app.vue</p>
		<div class="flex justify-center">
			<Icon name="logos:nuxt" size="360" />
		</div>
	</div>
</template>

<script lang="ts" setup>
const useRound = ref(false)
const BaseButton = resolveComponent('BaseApplyButton')
const RoundButton = resolveComponent('RoundApplyButton')
</script>
