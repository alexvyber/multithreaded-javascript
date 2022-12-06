console.log("hello from worker.js");

self.onmessage = (msg) => {
  console.log("message from main", msg.data);

  if ("name" in msg.data) {
    console.log("Name is", msg.data.name);
  }

  setInterval(
    () =>
      postMessage(
        "message sent from worker " + new Date().toLocaleTimeString()
      ),
    1000
  );
};
