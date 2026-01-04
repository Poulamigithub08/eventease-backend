const express = require("express");
const router = express.Router();
const eventController = require("../controllers/eventcontroller");
const authMiddleware = require("../middlewares/authmiddleware");

console.log("authmiddleware: ",authMiddleware);
console.log(" eventControllergetMyEvents: ", eventController.getMyEvents);

router.post("/",authMiddleware, eventController.createEvent);
router.get("/",authMiddleware, eventController.getEvents);

router.get("/my-events", authMiddleware, eventController.getMyEvents);
router.delete("/:id",authMiddleware, eventController.deleteEvent);

module.exports = router;



