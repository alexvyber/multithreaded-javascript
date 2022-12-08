const { Worker, isMainThread, workerData } = require("node:worker_threads")

const assert = require("node:assert")

if (isMainThread) {
  const worker = new Worker(__filename, {
    workerData: { num: 42, name: "Alice" }
  })
} else {
  assert.strictEqual(workerData.num, 42)
  assert.strictEqual(workerData.name, "Alice")
}
