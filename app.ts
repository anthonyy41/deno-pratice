import { Application, Router } from "https://deno.land/x/oak/mod.ts";

const app = new Application();
const router = new Router();

app.use(router.routes());
app.use(router.allowedMethods());

// router.get("/", ({ response }: { response: any }) => {
//     response.body = {
//         message: "test",
//     };
// });

await app.listen({ port: 8000 });



