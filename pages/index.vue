<template>
	<div>
		<i-header class="_text-align:center">
			<h1>有 AliceLaws 律事無障礙</h1>
			<h3>這邊可以放文字，請提供相關訊息</h3>
			<p><nuxt-link to="/count/useAsyncData">useAsyncData</nuxt-link></p>
			<p><nuxt-link to="/count/useLazyAsyncData">useLazyAsyncData</nuxt-link></p>
			<p><nuxt-link to="/counter/increment">counter</nuxt-link></p>
			<p><nuxt-link to="/counter/surprise">surprise</nuxt-link></p>
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

<script lang="ts" setup></script>
