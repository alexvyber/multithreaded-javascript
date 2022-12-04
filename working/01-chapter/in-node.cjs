const vm = require("vm")
const ContextObject = vm.runInNewContext("Object")

console.log(Object === ContextObject)
console.log(new Object() instanceof ContextObject)
console.log(ContextObject.name)
