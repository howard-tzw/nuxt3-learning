<template>
	<i-layout>
		<i-layout-header>
			<BaseHeader />
		</i-layout-header>

		<i-layout-content>
			<slot />
		</i-layout-content>

		<i-layout-footer>
			<div class="flex items-center justify-center">footer</div>
		</i-layout-footer>
	</i-layout>
</template>
