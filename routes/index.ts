import { Router } from "https://deno.land/x/oak/mod.ts";
const router = new Router();

import dataController from = "../controllers/todo.ts";

router
    .get("/", dataController.getAllData)
    .post("/", dataController.createNewData)
    .get("/:id", dataController.getDataByID)
    .put("/:id", dataController.updateDataByID)
    .delete("/:id", dataController.deleteDataByID)

export default router;