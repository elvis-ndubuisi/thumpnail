import {Hono} from "hono";
import {compress} from "hono/compress";
import {cors} from "hono/cors";

const app = new Hono();
const allowedOrigins = ["http://localhost:3000"];

app.use("/api/*", cors());
app.use("/hash/*", cors({origin: allowedOrigins, allowMethods: ["GET", "POST"]}));
// app.use(compress())

app.get("/", (c) => {
  return c.text("Hello Hono!");
});

app.post("/thumb/generate", (c) => {
  return c.text("heollo");
});

app.post("/key", (c) => {
  c.status(201);
  return c.text("okay");
});

export default app;
