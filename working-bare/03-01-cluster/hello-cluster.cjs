const http = require("node:http")
const cluster = require("node:cluster")

let count = 0
let limit = 100

if (cluster.isPrimary) {
  for (let i = 0; i < limit; i++) {
    cluster.fork()
  }
  console.log("WE'RE HERE", ++count)
} else {
  http
    .createServer((req, res) => {
      res.end(
        JSON.stringify({
          name: "Alice"
        })
      )
    })
    .listen(3000)
  console.log("AND THERE", ++count)
}

console.log("AT THE END", ++count)
