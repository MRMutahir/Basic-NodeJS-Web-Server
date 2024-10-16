const cluster = require("cluster");
const os = require("os");
const app = require("./app");

const numCPUs = os.cpus().length;

if (cluster.isMaster) {
  console.log(`Master process running with PID: ${process.pid}`);

  // Fork workers equal to the number of CPUs
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  // Listen for worker exits
  cluster.on("exit", (worker, code, signal) => {
    console.log(
      `Worker with PID: ${worker.process.pid} died. Starting a new one...`
    );
    cluster.fork(); // Restart new worker if one dies
  });
} else {
  // Workers can share any TCP connection, in this case, HTTP server
  app.listen(process.env.PORT || 3000, () => {
    console.log(
      `Worker with PID: ${process.pid} is listening on port ${
        process.env.PORT || 3000
      }`
    );
  });
}
