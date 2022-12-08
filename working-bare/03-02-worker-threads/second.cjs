const { Worker, isMainThread, parentPort } = require("worker_threads")

if (isMainThread) {
  const worker = new Worker(__filename)
  worker.on("message", (msg) => {
    worker.postMessage(msg)
  })
} else {
  parentPort.on("message", (msg) => {
    console.log("We got a message from the main thread:", msg)
  })
  parentPort.postMessage("Hello, World!")
}
