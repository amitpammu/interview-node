const cluster = require('cluster');
const http = require('http');
const cpu = require('os').cpus().length;

if (cluster.isMaster) {
    console.log(`Master is running on ${process.pid}`)

    for (let i = 0; i < cpu; i++) {
        cluster.fork();
    }

    cluster.on('exit', (worker, code, signal) => {
        console.log(`worker ${worker.process.pid} died`);
    })
} else {
    http.createServer((req, res) => {
        console.log("Worker "+process.pid)
        res.end("Worker "+process.pid)
    }).listen(8000)

    console.log(`Worker ${process.pid} started`);
}