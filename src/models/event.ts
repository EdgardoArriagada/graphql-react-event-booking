const mongoose = require('mongoose')

const Schema = mongoose.Schema

const required = true // syntaxt helper

const eventSchema = new Schema({
  title: {
    type: String,
    required
  },
  description: {
    type: String,
    required
  },
  price: {
    type: Number,
    required
  },
  date: {
    type: Date,
    required
  }
})

interface IEventInput {
  title: string
  description: string
  price: number
  date: string
}
interface IEvent extends IEventInput {
  _id: string
}

module.exports = mongoose.model('Event', eventSchema)