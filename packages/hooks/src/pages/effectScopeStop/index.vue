<script setup lang='ts'>
import Left from './left.vue'
import { useSession, scope } from './hooks'
import Right from './right.vue';

const { currentSession } = useSession();
</script>

<template>
	<div class="flex gap-2 w-full h-full text-white overflow-hidden">
		<Left />
		<div  class="flex justify-center items-center gap-1 flex-1 w-0 p-4">
			<span>当前sesssion: {{ currentSession }}</span>
		<button class="bg-blue-500 p-2 rounded-lg" @click="scope.stop()">停止传播</button>
		</div>
		<Right />
	</div>
</template>
