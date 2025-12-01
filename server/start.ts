import { createServer } from "./index.js";

const PORT = process.env.PORT || 3000;

async function start() {
  const app = await createServer();
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

start();
