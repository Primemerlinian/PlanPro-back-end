import mongoose from "mongoose"

const Schema = mongoose.Schema

const stepSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
})

const taskSchema = new Schema(
  {
    note: {
      type: String,
      required: true,
    },
    taskName: String,
    date: Date,
    time: String,
    steps: [stepSchema],
    owner: { type: Schema.Types.ObjectId, ref: 'Profile' },
    isComplete: { 
      type: Boolean,
      default: false
    }
  }
)

const Task = mongoose.model("Task", taskSchema)

export { Task }