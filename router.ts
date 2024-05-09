import { Router } from "https://deno.land/x/oak@v16.0.0/mod.ts";
import { createUser, getUser, getUsers, updateUser } from "./controller/user.ts";

const router = new Router();

router.get("/", (ctx) => {
  ctx.response.body = "Hello Deno!";
});

router.get("/users", getUsers);
router.get("/users/:id", getUser);
router.post("/users", createUser);
router.put("/users/:id", updateUser);

export { router };