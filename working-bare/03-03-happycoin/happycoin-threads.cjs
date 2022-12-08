const { Worker, isMainThread, parentPort } = require("node:worker_threads")
const { random64, isHappycoin } = require("./lib.cjs")

const THREAD_COUNT = 16

if (isMainThread) {
  let inFlight = THREAD_COUNT
  let count = 0

  for (let i = 0; i < THREAD_COUNT; i++) {
    const worker = new Worker(__filename)
    worker.on("message", (msg) => {
      if (msg === "done") {
        if (--inFlight === 0) {
          process.stdout.write("\nCount: " + count + "\n")
        }
      } else if (typeof msg === "bigint") {
        process.stdout.write(msg.toString() + " ")
        count++
      }
    })
  }
} else {
  for (let i = 1; i < 10_000_000 / THREAD_COUNT; i++) {
    const randomNum = random64()
    if (isHappycoin(randomNum)) {
      parentPort.postMessage(randomNum)
    }
  }
  parentPort.postMessage("done")
}
