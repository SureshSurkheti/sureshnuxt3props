<script setup>
// definePageMeta({
//     layout: false
// })
const counter = ref(1)
</script>
<template>
    <div>
        <Head>
            <Title>
                {{ counter }}
            </Title>
        </Head>
        <button @click="counter++">Increament</button>
    </div>
</template>