// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	modules: ['@nuxtjs/tailwindcss', 'nuxt-icon', '@inkline/nuxt'],
	typescript: {
		typeCheck: false,
	},
	inkline: {
		// Plugin options (optional)
	},
})
