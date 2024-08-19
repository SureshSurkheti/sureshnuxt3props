<script setup>
const enableCustomLayout = () => {
    setPageLayout('custom')

}
const show = ref(false)
</script>

<template>
    <div>
        <h1>Home page</h1>
        <NuxtLink to="/about">About Page</NuxtLink>
        <br><br>
        <button @click="enableCustomLayout">Change Layout</button><br><br>
        <welcome v-if="show" />
        <button @click="show =! show">show the welcome message</button><br><br>
        <NuxtLink to="/fetching">fetching page</NuxtLink>
    </div>
</template>

<style>
.page-enter-active,
.page-leave-active{
    transition: all 0.5s;
}
.page-enter-from,
.page-leave-to{
    opacity: 0;
    filter: blur(1rem);
}
</style>