<script setup lang='ts'>
import Left from './left.vue'
import { useSession } from './hooks'
import Right from './right.vue';

const { currentSession } = useSession();
watch(currentSession.value, (newValue) => {
	console.log('currentSession', newValue)
})
</script>

<template>
	<div class="flex gap-2 w-full h-full text-white overflow-hidden">
		<Left />
		<span class="flex justify-center flex-1 w-0 p-4">当前sesssion: {{ currentSession }}</span>
		<Right />
	</div>
</template>
