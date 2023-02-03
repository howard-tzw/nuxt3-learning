<template>
	<i-layout>
		<i-layout-header>
			<BaseHeader />
		</i-layout-header>

		<i-layout-content>
			<slot />
		</i-layout-content>

		<i-layout-footer>
			<BaseFooter />
		</i-layout-footer>
	</i-layout>
</template>
