require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
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

// Coonnect to database
mongoose
	.connect(process.env.MONGO_URI)
	.then(() => {
		// Listen for requests
		app.listen(process.env.PORT, () => {
			console.log('connected to db and listening on port', process.env.PORT)
		})
	})
	.catch((error) => {
		console.log(error)
	})
