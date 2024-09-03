<script setup>
const {data: product, pending, execute, error, status} = await useFetch(() => 
{
    return 'https://fakestoreapi.com/products/1'
},{
    immediate: false
}) 

console.log(status.value)
setTimeout(() => {
    execute()
    console.log(status.value)
    setTimeout(() => {
        console.log(status.value)
    }, 400);
    }, 5000)
</script>
<template>
    <div>
        <p v-if="error">{{ error }}</p>
        <p v-else>{{ product }}</p>
    </div>
</template>