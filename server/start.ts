import { createServer } from "./index.js";

/**
 * App entry point for Render deployment.
 * This file will be compiled to dist/server/start.js
 * and will run with "node dist/server/start.js"
 */
async function start() {
  try {
    const app = await createServer();

    const port = process.env.PORT || 3001;

    app.listen(port, () => {
      console.log(`🚀 Server running on port ${port}`);
    });
  } catch (error) {
    console.error("❌ Error starting server:", error);
    process.exit(1);
  }
}

start();
