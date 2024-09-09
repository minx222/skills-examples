<script setup lang='ts'>
import { useSession } from './hooks';

const { currentSession } = useSession();

const sessions = ref<number[]>([1, 2, 3, 4, 5, 6]);
</script>

<template>
	<div class="flex flex-col gap-2 p-4">
		<div class="flex justify-center items-center p-2 border border-solid 
		border-yellow-200 cursor-pointer hover:text-yellow-400"
			:class="{
				'text-white bg-yellow-600': currentSession === session
			}"
			@click="currentSession = session"
		v-for="session in sessions">
			{{ session }}
		</div>
	</div>
</template>

<style scoped lang='less'>
	
</style>
