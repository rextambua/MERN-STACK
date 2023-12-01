const express = require("express");
const {
  createWorkout,
  getWorkouts,
  getWorkout,
  updateWorkout,
  deleteWorkout,
} = require("../controllers/workoutController");

const requireAuth = require("../midleware/requireAuth");

const router = express.Router();

//require auth for all routes
router.use(requireAuth);

//get all workouts
router.get("/", getWorkouts);

//get a single workout
router.get("/:id", getWorkout);

//post a single workout
router.post("/", createWorkout);

//delete a workout
router.delete("/:id", deleteWorkout);

//update a workout
router.patch("/:id", updateWorkout);

module.exports = router;
