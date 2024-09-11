<script setup lang='ts'>
import { findSessionByName } from '@/api'
import { useRequest } from '@/hooks'

import { useSession } from './hooks';

const { currentSession } = useSession();

const { data, reload } = useRequest(findSessionByName, {
	initialValue: {
		data: {
			list: []
		},
		code: 0,
		msg: '',
	}
});

onMounted(() => {
	reload(undefined);
})

</script>

<template>
	<div class="flex flex-col gap-2 p-4 overflow-auto scrollbar">
		<div 
			class="flex justify-center items-center p-2 border border-solid border-yellow-200 cursor-pointer hover:text-yellow-400" 
			:class="{
				'text-white bg-yellow-600': currentSession === session
			}" 
			@click="currentSession.id = session.id" 
			v-for="session in data.data.list"
		>
			{{ session.topic }}
		</div>
	</div>
</template>

<style scoped lang='less'></style>
