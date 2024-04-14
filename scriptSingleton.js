// class Api {
//
//     get() {
//         console.log("get request")
//     }
//
//     post() {
//         console.log("post request")
//     }
//    
// }
//
// const api1 = new Api()
// const api2 = new Api()
//
// console.log(api1 instanceof Api, api2 instanceof Api)
// console.log(api1===api2)


// class Api {
//
//
//     constructor() {
//
//         if (Api.singleton) {
//             return Api.singleton
//         } else {
//             Api.singleton = this
//             return this
//         }
//
//     }
//
//
//     get() {
//         console.log("get request")
//     }
//
//     post() {
//         console.log("post request")
//     }
//
// }
//
// Api.singleton = null
//
//
// const api1 = new Api()
// const api2 = new Api()
//
// console.log(api1 instanceof Api, api2 instanceof Api)
// console.log(api1 === api2)


// class Api {
//     static singleton = null
//     constructor() {
//         if (Api.singleton) {
//             return Api.singleton
//         } else {
//             Api.singleton = this
//             return this
//         }
//     }
//
//
//     get() {
//         console.log("get request")
//     }
//
//     post() {
//         console.log("post request")
//     }
//
// }
//
// Api.singleton = null
//
//
// const api1 = new Api()
// const api2 = new Api()
//
// console.log(api1 instanceof Api, api2 instanceof Api)
// console.log(api1 === api2)