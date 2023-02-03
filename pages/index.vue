<template>
	<div>
		<i-header class="">
			<h1 class="text-3xl">有 AliceLaws 律事無障礙</h1>
			<h3>這邊可以放文字，請提供相關訊息</h3>
			<i-button>閱讀更多</i-button>
		</i-header>

		<div class="absolute top-60 right-40 flex w-2/6 rounded-xl border bg-white shadow-xl">
			<div class="container p-7">
				<div class="mb-4 text-center text-xl">律師在哪裡？</div>

				<i-tabs v-model="activeTab" class="">
					<template #header>
						<i-tab-title for="tab-1">律師姓名</i-tab-title>
						<i-tab-title for="tab-2">簡易查詢</i-tab-title>
					</template>

					<i-tab name="tab-1">
						<i-input v-model="lawyerName" placeholder="請輸入律師姓名" />
					</i-tab>
					<i-tab name="tab-2">
						<i-input placeholder="請輸入..." />
					</i-tab>
				</i-tabs>

				<div class="mt-6 flex justify-center">
					<i-button>搜尋</i-button>
				</div>
			</div>
		</div>

		<div class="flex p-10">
			<div class="p-10">
				<p class="">判決資料庫數量</p>
				<p class="text-4xl">26156321</p>
			</div>
			<div class="p-10">
				<p>律師資料數量</p>
				<p class="text-4xl">26156321</p>
			</div>
		</div>

		<i-header class="_text-align:center">
			<h1>關於 alicelaws</h1>
			<p>
				eque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..." "There is
				no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain..
			</p>
			<i-button>閱讀更多</i-button>
		</i-header>

		<div class="flex flex-col items-center justify-center p-7">
			<p class="mb-4 text-xl">對造律師/承審法官</p>

			<div class="flex flex-row items-center">
				<i-input placeholder="請輸入..." />
				<p>與</p>
				<i-input placeholder="請輸入..." />
			</div>
			<i-button class="mt-5">查詢</i-button>
		</div>
	</div>
</template>

<script lang="ts" setup>
const fixIssue = error => {
	error.value = null
}
const activeTab = ref('')
const lawyerName = ref('')
</script>
