const Piscina = require("./piscina_/node_modules/piscina")
const { random64, isHappycoin } = require("./lib.cjs")

const THREAD_COUNT = 16

if (!Piscina.isWorkerThread) {
  // <1>
  const piscina = new Piscina({
    filename: __filename, // <2>
    minThreads: THREAD_COUNT, // <3>
    maxThreads: THREAD_COUNT
  })
  let done = 0
  let count = 0
  for (let i = 0; i < THREAD_COUNT; i++) {
    // <4>
    ;(async () => {
      const { total, happycoins } = await piscina.run() // <5>
      process.stdout.write(happycoins)
      count += total
      if (++done === THREAD_COUNT) {
        // <6>
        console.log("\ncount", count)
      }
    })()
  }
}

module.exports = () => {
  let happycoins = ""
  let total = 0
  for (let i = 0; i < 10_000_000 / THREAD_COUNT; i++) {
    // <1>
    const randomNum = random64()
    if (isHappycoin(randomNum)) {
      happycoins += randomNum.toString() + " "
      total++
    }
  }
  return { total, happycoins } // <2>
}
