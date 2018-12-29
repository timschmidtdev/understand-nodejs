// es6 classes - lecture_ 36 inheriting from the emitter
'use strict'

const Greetr = require('./greetr')

const greeter1 = new Greetr()

greeter1.on('greet', function(data) {
    console.log(`Someone greeted!: ${ data }`)
})

greeter1.greet('Tim')