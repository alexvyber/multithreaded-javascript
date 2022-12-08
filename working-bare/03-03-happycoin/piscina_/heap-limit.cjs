const Piscina = require("piscina")
const assert = require("assert")

const numberOfNumbers = 10_000_000 // 10_000_000

if (!Piscina.isWorkerThread) {
  const piscina = new Piscina({ filename: __filename })

  for (let i = 0; i < numberOfNumbers; i++) {
    piscina.run(i).then((squareRootOfI) => {
      assert.ok(typeof squareRootOfI === "number")
    })
  }
}

module.exports = (num) => {
  console.log(num)
  return Math.sqrt(num)
}
