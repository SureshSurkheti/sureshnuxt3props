<script setup>
const route = useRoute()
const {name} = route.params
</script>

<template>
    <div>
        <h1>Good Morning {{ name }}</h1>
    </div>
</template>