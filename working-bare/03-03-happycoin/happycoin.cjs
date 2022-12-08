const { random64, isHappycoin } = require("./lib.cjs")

let count = 0

for (let i = 1; i < 10_000_000; i++) {
  const randomNum = random64()
  if (isHappycoin(randomNum)) {
    process.stdout.write(randomNum.toString() + " ")
    count++
  }
}

process.stdout.write("\n\nCount: " + count + "\n")
