<script setup lang='ts'>
import { event } from './event';
import { useSession } from './hooks'
const { currentSession } = useSession();

event.on('reload', () => {
	console.log('右组件需要重新渲染')
})
</script>

<template>
	<span class="flex justify-center p-4">当前sesssion: {{ currentSession }}</span>
</template>

<style scoped lang='less'>
</style>
