<template>
	<button
		class="font-base mx-2 rounded-full bg-sky-500 px-4 py-2 text-xl text-white hover:bg-sky-600 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-2"
		@click="onClick"
	>
		ButtonOOPS
	</button>
</template>

<script setup>
const onClick = () => {
	throw new Error('由 ButtonOOPS 元件，拋出一個錯誤！')
}
</script>
