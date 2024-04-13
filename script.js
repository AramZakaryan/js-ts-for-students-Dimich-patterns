////////// PUBLISHER

class Pub {
    sec = 0
    subscribers = []

    constructor() {
        setInterval(() => {
            this.sec++
            console.log(this.sec + ' sec')
            this.subscribers.forEach(s => s(this.sec))
        }, 1000)
    }
    subscribe (observer) {
        this.subscribers.push(observer)
    }
}

const globalTime = new Pub()
    
////////// SUBSCRIBER 1

class Sub1 {
    constructor() {
        this._el = document.createElement("div")
        document.body.appendChild(this._el)
    }

    render(sec) {
        // setInterval(() => {
        this._el.innerText = "Sub1: " + sec
        // }, 1000)
    }
}

const clock1 = new Sub1()
globalTime.subscribe(clock1.render.bind(clock1))
// globalTime.subscribers.push(clock1.render.bind(clock1))

////////// SUBSCRIBER 2

class Sub2 {
    constructor() {
        this._el = document.createElement("h1")
        document.body.appendChild(this._el)
    }

    render(sec) {
        // setInterval(() => {
        this._el.innerText = "Sub2: " + sec
        // }, 1000)
    }
}

const clock2 = new Sub2()
globalTime.subscribe(clock2.render.bind(clock2))

// globalTime.subscribers.push(clock2.render.bind(clock2))

