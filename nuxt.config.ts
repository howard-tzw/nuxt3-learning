// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	modules: ['@nuxtjs/tailwindcss', 'nuxt-icon', '@inkline/nuxt', '@pinia/nuxt', '@pinia-plugin-persistedstate/nuxt'],
	typescript: {
		typeCheck: false,
	},
	inkline: {
		// Plugin options (optional)
	},
	runtimeConfig: {
		apiSecret: ':P',
		public: {
			apiBase: '/api',
		},
	},
})
