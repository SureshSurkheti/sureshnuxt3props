<script setup>
definePageMeta({
    middleware: [
        function(){
            console.log('inline middleware')
        },
        'middleware-example'
    ]
})
definePageMeta({
    layout: false
})
// useHead({
//     title: 'about page',
//     meta: [
//         {
//             name: 'description',
//             content: 'This is about page'
//         }
//     ]
// })

//title for the page wise
</script>

<template>
    <div>
        <!-- <NuxtLayout name="custom"></NuxtLayout> -->
        <!-- to use the both layout -->
       <h1>About Page</h1>
       <NuxtLink to="/">Home Page</NuxtLink>
       <Head>
        <Title>
            about the page from componets
        </Title>
       </Head>
    </div>
</template>
