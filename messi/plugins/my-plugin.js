// export default defineNuxtPlugin(() => {
//     addRouteMiddleware((to, from) => {
//         if(to.path === '/database')
//             return abortNavigation
//         ('Forbidden')
//     })

//     addRouteMiddleware('denySuresh', (to, from) => {
//         const name = to.params.name
//         if(name === 'suresh') return
//         abortNavigation('Thi name suresh is not allowed')
//     })
// })