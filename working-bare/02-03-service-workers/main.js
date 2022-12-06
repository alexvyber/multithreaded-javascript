if ("serviceWorker" in navigator) {
  // Register a service worker hosted at the root of the
  // site using the default scope.
  navigator.serviceWorker
    .register("/sw.js", {
      scope: "/"
    })
    .then(
      (registration) => {
        console.log("Service worker registration succeeded:", registration)
      },
      /*catch*/ (error) => {
        console.error(`Service worker registration failed: ${error}`)
      }
    )

  navigator.serviceWorker.oncontrollerchange = () => {
    console.log("controller change")
  }
} else {
  console.error(
    "Service workers are not supported. If in development Make sure you're accessing the site from `localhost`"
  )
}

async function makeRequest() {
  const result = await fetch("/data.json")
  const payload = await result.json()
  console.log("payload", payload)
}
