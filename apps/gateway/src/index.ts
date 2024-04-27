import {Hono} from "hono";
import {env} from "hono/adapter";

// import {newId} from "./utils/generate";

const app = new Hono();

app.get("/", (c) => {
  // const id = newId("gateway");
  // console.log(id);
  return c.text("Hello Hono!");
});

export default app;
