const { fork } = require('child_process');

const forked = fork('child');

forked.on('message', (msg) => {
    console.log("From chid " + msg)
})

forked.send("Hello child")