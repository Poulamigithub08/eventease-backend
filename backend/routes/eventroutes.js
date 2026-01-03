const express = require("express");
const router = express.Router();
const eventController = require("../controllers/eventcontroller");
const authMiddleware = require("../middlewares/authmiddleware");


router.post("/",authMiddleware, eventController.createEvent);
router.get("/",authMiddleware, eventController.getEvents);
router.delete("/:id",authMiddleware, eventController.deleteEvent);

module.exports = router;



