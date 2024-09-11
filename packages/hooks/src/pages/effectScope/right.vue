<script setup lang='ts'>
import { useSession } from './hooks'
const { currentSession } = useSession();

watch(currentSession.value, (newValue) => {
	console.log('currentSession right', newValue)
})
</script>

<template>
	<span class="flex justify-center p-4">当前sesssion: {{ currentSession }}</span>
</template>

<style scoped lang='less'>
</style>
