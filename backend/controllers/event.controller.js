const Event = require("../models/events");

// =======================
// CREATE EVENT
// =======================
const createEvent = async (req, res) => {
  try {
    const { title, description, date } = req.body;

    if (!title || !date) {
      return res.status(400).json({
        success: false,
        message: "Title and date are required",
      });
    }

    const newEvent = new Event({
      title,
      description,
      date,
      createdBy: req.user.id
    });

    await newEvent.save();

    res.status(201).json({
      success: true,
      message: "Event created successfully",
      event: newEvent,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// =======================
// GET ALL EVENTS
// =======================
const getEvents = async (req, res) => {
  try {
    const events = await Event.find().sort({ date: 1 });

    res.status(200).json({
      success: true,
      events,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// =======================
// DELETE EVENT
// =======================

//TODO: Add authorization to ensure only event creator or admin can delete
const deleteEvent = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedEvent = await Event.findByIdAndDelete(id);

    if (!deletedEvent) {
      return res.status(404).json({
        success: false,
        message: "Event not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Event deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};


const getMyEvents = async (req, res) => {
  try {

    const userId = req.user.id;
    const role = req.user.role;

    let events;

    if (role === "host") {

      // HOST EVENTS
      events = await Event.find({ createdBy: userId });

    } else {

      // GUEST EVENTS
      events = await Event.find({ status: { $ne: "draft" } });

    }

    const upcoming = [];
    const past = [];
    const draft = [];

    const now = new Date();

    events.forEach(event => {

      if (event.status === "draft") {
        draft.push(event);
      }

      if (new Date(event.date) > now) {
        upcoming.push(event);
      } else {
        if (role === "guest" && event.attendees.includes(userId)) {
          past.push(event);
        } else if (role === "host" && event.createdBy.toString() === userId) {
          past.push(event);
        }
      }

    });

    // statistics
    const stats = {
      total: events.length,
      upcoming: upcoming.length,
      past: past.length,
      draft: draft.length
    };

    res.json({
      role,
      events: {
        upcoming,
        past,
        draft
      },
      stats
    });

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }
};
//TODO: Update Event with authorization checks

const updateEvent = async (req, res) => {
  const { id } = req.params
  const { title, description, date, status } = req.body;

  try {
    const event = await Event.findById(id);
    if (!event) {
      return res.status(404).json({
        success: false,
        message: "Event not found",
      });
    }

    if (event.createdBy.toString() !== req.user.id && req.user.role !== "admin") {
      return res.status(401).json({
        success: false,
        message: "Unauthorized to update this event",
      });
    }

    if (title) event.title = title;
    if (description) event.description = description;
    if (date) {
      const eventDate = new Date(date).toDateString();
      const today = new Date().toDateString();

      if (eventDate > today) {
        event.date = date;
      } else {
        return res.status(400).json({
          success: false,
          message: "Event date must be in the future",
        });
      }
    }

    if (status) event.status = status;

    await event.save();

    res.status(200).json({
      success: true,
      message: "Event updated successfully",
      event,
    });
  }
  catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
}


// =======================
// EXPORTS (VERY IMPORTANT)
// =======================
module.exports = {
  createEvent,
  getEvents,
  getMyEvents,
  deleteEvent,
  getMyEvents,
  updateEvent
};

