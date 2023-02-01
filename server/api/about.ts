let counter = 0

export default defineEventHandler(async () => {
	await new Promise(resolve => setTimeout(resolve, 2000)) // 等待 2 秒

	counter += 1

	return {
		name: 'Ryan',
		gender: '男',
		email: 'ryanchien8125@gmail.com',
		counter,
	}
})