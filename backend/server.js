require('dotenv').config()

const express = require('express')
const workoutRoutes = require('./routes/workouts')

// Create express app
const app = express()

// Middleware
app.use(express.json())

app.use((req, res, next) => {
	console.log(req.path, req.mathod)
	next()
})

// Routes
app.use('/api/workouts', workoutRoutes)

// Listen for requests
app.listen(process.env.PORT, () => {
	console.log('listening on port', process.env.PORT)
})
