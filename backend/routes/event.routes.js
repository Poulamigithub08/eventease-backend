const express = require("express");
const router = express.Router();
const eventController = require("../controllers/event.controller");
const authMiddleware = require("../middlewares/authmiddleware");

// console.log("authmiddleware: ",authMiddleware);
// console.log(" eventControllergetMyEvents: ", eventController.getMyEvents);

/**
 * @swagger
 * tags:
 *   name: Events
 *   description: Events endpoints
 */
/**
 * @swagger
 * components:
 *   securitySchemes:
 *     bearerAuth:
 *       type: http
 *       scheme: bearer
 *       bearerFormat: JWT
 *   schemas:
 *     Event:
 *       type: object
 *       properties:
 *         _id:
 *           type: string
 *           example: 64fa123abc456
 *         title:
 *           type: string
 *           example: Team Meeting
 *         description:
 *           type: string
 *           example: Monthly sync-up
 *         date:
 *           type: string
 *           format: date-time
 *           example: 2026-02-01T10:00:00Z
 *         createdBy:
 *           type: string
 *           example: 64user123abc
 */
/**
 * @swagger
 * /api/events:
 *   post:
 *     summary: Create a new event
 *     tags: [Events]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - title
 *               - date
 *             properties:
 *               title:
 *                 type: string
 *                 example: Hackathon
 *               description:
 *                 type: string
 *                 example: 24 hour coding event
 *               date:
 *                 type: string
 *                 format: date-time
 *                 example: 2026-03-10T09:00:00Z
 *     responses:
 *       201:
 *         description: Event created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 message:
 *                   type: string
 *                 event:
 *                   $ref: '#/components/schemas/Event'
 *       400:
 *         description: Missing required fields
 *       401:
 *         description: Unauthorized
 */

router.post("/",authMiddleware, eventController.createEvent);
/**
 * @swagger
 * /api/events:
 *   get:
 *     summary: Get all events
 *     tags: [Events]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: List of events
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 events:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/Event'
 *       401:
 *         description: Unauthorized
 */

router.get("/",authMiddleware, eventController.getEvents);
/**
 * @swagger
 * /api/events/my-events:
 *   get:
 *     summary: Get events created by the logged-in user
 *     tags: [Events]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: User's events
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 events:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/Event'
 *       401:
 *         description: Unauthorized
 */

router.get("/my-events", authMiddleware, eventController.getMyEvents);
/**
 * @swagger
 * /api/events/{id}:
 *   delete:
 *     summary: Delete an event by ID
 *     tags: [Events]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Event ID
 *     responses:
 *       200:
 *         description: Event deleted successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 message:
 *                   type: string
 *       404:
 *         description: Event not found
 *       401:
 *         description: Unauthorized
 */

router.delete("/:id",authMiddleware, eventController.deleteEvent);

module.exports = router;



