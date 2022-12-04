const iframe = document.createElement("iframe")
document.body.appendChild(iframe)
const FrameObject = iframe.contentWindow.Object
console.log(Object === FrameObject)
console.log(new Object() instanceof FrameObject)
console.log(FrameObject.name)
