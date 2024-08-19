<script setup>
definePageMeta({
    middleware: [
        function(to){
            if(to.params.id === '1')
            return navigateTo('/')
            if(to.params.id === '2')
            return abortNavigation()
            if(to.params.id === '3')
            return abortNavigation
            ('ID should not be 3')
            console.log('its fine now')
        }
    ]
})

</script>
<template>
    <h1>{{ $route.params.name }}</h1>
</template>
