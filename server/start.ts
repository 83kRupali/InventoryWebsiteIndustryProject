import { createServer } from "./index.js";

async function start() {
  const app = await createServer();
  const port = process.env.PORT || 3001;

  app.listen(port, () => {
    console.log(`🚀 Server running on port ${port}`);
  });
}

start();
