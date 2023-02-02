const Router = require("express");
const UserController = require("./Controllers/UserController.js");

const router = new Router();

router.post("/users", UserController.create);
router.get("/users", UserController.getAll);
router.post("/users/email", UserController.getByEmail);
router.get("/users/:id", UserController.getOne);
router.put("/users", UserController.update);
router.delete("/users", UserController.deleteMany);
router.delete("/users/:id", UserController.delete);

module.exports = router;
