<template>
	<div>
		<i-header class="_text-align:center">
			<h1>有 AliceLaws 律事無障礙</h1>
			<h3>這邊可以放文字，請提供相關訊息</h3>
			<p><nuxt-link to="/count/useAsyncData">useAsyncData</nuxt-link></p>
			<p><nuxt-link to="/count/useLazyAsyncData">useLazyAsyncData</nuxt-link></p>
			<p><nuxt-link to="/counter/increment">counter</nuxt-link></p>
			<p><nuxt-link to="/counter/surprise">surprise</nuxt-link></p>
			<div class="my-4 flex flex-col space-y-4">
				<NuxtLink to="/config">前往 /config</NuxtLink>
			</div>

			<NuxtErrorBoundary>
				<!-- 這個按鈕元件可以拋出一個錯誤 -->
				<ButtonOOPS />

				<template #error="{ error }">
					<p class="my-4 text-xl text-gray-500">這裡是發生錯誤時，才會渲染出來的地方</p>
					<button
						type="button"
						class="inline-flex items-center rounded-md border border-transparent bg-green-100 px-4 py-2 text-sm font-medium text-green-700 hover:bg-green-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
						@click="fixIssue(error)"
					>
						修正錯誤
					</button>
				</template>
			</NuxtErrorBoundary>
		</i-header>

		<div class="flex p-10">
			<div class="p-10">
				<p>判決資料庫數量</p>
				<p>26156321</p>
			</div>
			<div class="p-10">
				<p>律師資料數量</p>
				<p>26156321</p>
			</div>
		</div>

		<i-header class="_text-align:center">
			<h1>關於 alicelaws</h1>
			<nuxt-link to="/about/useFetch">useFetch</nuxt-link>
		</i-header>
	</div>
</template>

<script lang="ts" setup>
const fixIssue = error => {
	error.value = null
}
</script>
