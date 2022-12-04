readFile(filename, (data) => {
  doSomethingWithData(data, (modifiedData) => {
    writeFile(modifiedData, () => {
      console.log("done")
    })
  })
})

// or

const data = await readFile(filename)
const modifiedData = await doSomethingWithData(data)
await writeFile(filename)
console.log("done")
