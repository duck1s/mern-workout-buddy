const express = require('express')
const { createWorkout, getWorkout, getAllWorkouts } = require('../controllers/workoutController')

const router = express.Router()

// GET all workouts
router.get('/', getAllWorkouts)

// Get a single workout
router.get('/:id', getWorkout)

// POST a new workout
router.post('/', createWorkout)

// DELETE a workout
router.delete('/:id', (req, res) => {
	res.json({ msg: 'DELETE a workout' })
})

// UPDATE a workout
router.patch('/:id', (req, res) => {
	res.json({ msg: 'UPDATE a workout' })
})

module.exports = router
