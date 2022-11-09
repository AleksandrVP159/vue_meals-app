<template>
    <Teleport to="body">
        <button @click="$emit('scroll-top')"
            class="flex items-center justify-center fixed shadow-md shadow-orange-300 w-16 h-16 right-16 bottom-0 mb-20 z-1000 rounded-lg bg-orange-300">
            <ArrowSmallUpIcon class="h-8" />
        </button>
    </Teleport>
</template>

<script setup>
import { ArrowSmallUpIcon } from '@heroicons/vue/24/outline'

defineEmits([
    "scroll-top"
])

</script>