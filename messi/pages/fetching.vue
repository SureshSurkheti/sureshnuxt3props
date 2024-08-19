<script setup>
// import { onNuxtReady } from '@nuxtjs/composition-api';
// const id = ref(1)
// const {data: product, refresh} = await useFetch(() => {
//     return (`https://fakestoreapi.com/products/${id.value}`)
// })
    
// console.log(product.value)
// const fetchProduct = async() => {
//     ++id.value
//     console.log('ID')
//     console.log(id.value)
//     await refresh()
//     console.log('Product here')
//     console.log(product.value)
// }
// const {data: product, refresh} = await useFetch('https://fakestoreapi.com/products/1')

// const fetchProduct = async () => {
//     const interval = setInterval (async () => {
//     await refresh()
// }, 1)
// setTimeout(() => {
//     clearInterval(interval)
// }, 5000);
// }

// const {data: products} = await useFetch('products/categories', {
//     baseURL: 'https://fakestoreapi.com/'
// })
// const {data: posts} = await useFetch('posts', {
//     baseURL: 'https://jsonplaceholder.typicode.com/',
//     method: 'post',
//     body: {
//         title: 'New Post',
//         body: 'This is a sample post',
//         userId: 1
//     }
// })

// const {data: posts} = await useFetch('posts/1', {
//     baseURL: 'https://jsonplaceholder.typicode.com/',
//     method: 'put',
//     body: JSON.stringify({
//         id: 1,
//         title: 'Updated Post',
//         body: 'This is an updated post',
//         userId: 1
//     })
// })

//use fo the patch method which is used to update the partial parts only
// const {data: posts} = await useFetch('posts/1', {
//     baseURL: 'https://jsonplaceholder.typicode.com/',
//     method: 'patch',
//     body: ({
//         title: 'this is the partial update',
      
//     })
// })

// const {data: postsDe} = await useFetch('posts/1', {
//     baseURL: 'https://jsonplaceholder.typicode.com/',
//     method: 'put',
//     body: JSON.stringify({
//         id: 1,
//         title: 'Updated Post',
//         body: 'This is an updated post',
//         userId: 1
//     })
// })

// const apiKey = 'O258VEEHTMR8MQOI'
// const {data: stocks} = await useFetch('/query', {
//     baseURL: 'https://www.alphavantage.co',
//     query:{ //instead of params alos workd properly
//         function: 'GLOBAL_QUOTE',
//         symbol: 'AAPL',
//         interval: '1min',
//         apikey: apiKey
//     }
// })

// const {data: products, pending} = await useFetch('https://fakestoreapi.com/products/1',{
//     lazy: true
// })
// const {data: products, execute} = await useFetch('https://fakestoreapi.com/products/1',{
//     immediate: false
// })

// const {data: product, execute} = await useFetch('https://fakestoreapi.com/products/1',{
//     immediate: false,
//     default: (product) => {
//         product = 'no data availabe'
//         return product;
//     }
// })


// const {data: product, execute} = await useFetch('https://fakestoreapi.com/products/1',{
//     transform: (product) => {
//         return {
//             ...product, title: 'Messi'
//         }
//     }
// })

// const {data: product} = await useFetch('https://fakestoreapi.com/products/1',{
//     pick: ['title']
// })

//show the each id data in the every second

// const id = ref(1)
// const {data: product} = await useFetch(() => {
//     return `https://fakestoreapi.com/products/${id.value}`
// }, {
//     watch: false //to make the auto increae to keep the [] instead of false
// })

// if (process.client) {
//   setInterval(() => {
//     id.value++
//   }, 1000);
// }

// const id = ref(1)
// const {data: product} = await useFetch(() => {
//     return `https://fakestoreapi.com/products/1`
// }, {
//     // watch: false //to make the auto increae to keep the [] instead of false
//     watch: [id],
//     transform: (product) => {
//         console.log('product')
//         return product
//     }
// })

// const increament = () => {
//     id.value++
// }

// const nuxtApp = useNuxtApp()
// const id = ref(1)
// const {data: product} = await useFetch(() => {
//     return `https://fakestoreapi.com/products/1`
// }, {
//     getCachedData: key => {
//         return nuxtApp.payload.data[key] 
//         || nuxtApp.static.data[key]
// }
// })

const {data: product} = await useFetch(() => {
    return `https://fakestoreapi.com/products/1`
},{
    deep: false,
    server: false
})

const changerRating = () => {
    // product.value = {
    //     name: 'Mobile'
    // }
    console.log(product)
    product.value.rating.rate = 'Any'
}

</script>
<template>
    <div>
        <p>{{ product }}</p>
        <NuxtLink to="/">This is the home page</NuxtLink>
        <br><br><br>
        <button @click="changerRating">auto increat the data</button>
        <!-- <button @click="increament">auto increat the data</button> -->
        <!-- <br><br><br>
        <button @click="execute">get the data here</button> -->
        <!-- <h1 v-if="pending">Loading...</h1>
        <p  v-else>{{ products }}</p> -->
        <!-- {{ products }} -->
        <!-- <br><br>
        <button @click="fetchProduct">show the value of the id</button> -->
    </div>
</template>