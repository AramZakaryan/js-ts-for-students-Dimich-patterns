////////// without Proxy

// const realServiceObject = {
//     saySomething(something) {
//         console.log(something)
//     }
// }
//
// realServiceObject.saySomething("hello")
//
// realServiceObject.saySomething("shit")

////////// with Proxy

const realServiceObject = {
    saySomething(something) {
        console.log(something)
    }
}


const proxy = {
    privateKey:"lala",
    saySomething(something) {
        if (something === "shit") something = "----"
        realServiceObject.saySomething(something)
    }
}

 
proxy.saySomething("hello")

proxy.saySomething("shit")


////////// with Proxy by changing name of realServiceObject

// let realServiceObject = {
//     saySomething(something) {
//         console.log(something)
//     }
// }
//
// const _realServiceObject=realServiceObject
//
//
// const proxy = {
//     saySomething(something) {
//         if (something === "shit") something = "----"
//         _realServiceObject.saySomething(something)
//     }
// }
//
// realServiceObject = proxy
//
// realServiceObject.saySomething("hello")
//
// realServiceObject.saySomething("shit")