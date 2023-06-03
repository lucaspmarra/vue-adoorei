<script setup>
</script>

<template>
    <div>
        <component :is="this.$route.meta.layout || 'div'">
            <RouterView />
        </component>
    </div>
</template>
