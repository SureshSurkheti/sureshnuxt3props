export default defineNuxtRouteMiddleware
((to, from) => {
    console.log("from",from)
    console.log("to", to)
    console.log('this function run before call to the about page')
})