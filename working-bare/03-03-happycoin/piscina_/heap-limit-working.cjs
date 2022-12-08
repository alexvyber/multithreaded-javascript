const Piscina = require("piscina")
const assert = require("assert")
const { once } = require("events")

if (!Piscina.isWorkerThread) {
  const piscina = new Piscina({
    filename: __filename,
    maxQueue: "auto"
  })

  ;(async () => {
    for (let i = 0; i < 10_000_000; i++) {
      if (piscina.queueSize === piscina.options.maxQueue) {
        await once(piscina, "drain")
      }

      piscina.run(i).then((squareRootOfI) => {
        assert.ok(typeof squareRootOfI === "number")
      })
    }
  })()
}

module.exports = (num) => Math.sqrt(num)
