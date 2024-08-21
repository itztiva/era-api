import { Hono } from "hono";
import logger from "./utils/logger";
import { logger as honolog } from "hono/logger";
import path from "node:path"
import routing from "./utils/routing";

const app = new Hono({ strict: false });

export default app;

app.use(honolog());

await routing.loadRoutes(path.join(__dirname, "routes"), app);

logger.startup("Era API Listening on PORT: 3000!")