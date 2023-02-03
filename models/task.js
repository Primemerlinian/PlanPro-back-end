import mongoose from "mongoose"

const Schema = mongoose.Schema




const stepSchema = new Schema ({
  title: {
    type: String,
    required: true,
  },
    owner: { type: Schema.Types.ObjectId, ref: 'Profile'},
})


const taskSchema = new Schema(
  {
      note: {
          type: String,
          required: true,
      },
      taskName: "string",
      date: "number",
      time: "number",
      steps: [stepSchema],
      categroy: [{ type: Schema.Types.ObjectId, ref: 'Category'}],
      owner: { type: Schema.Types.ObjectId, ref: 'Profile'}
  }
)

const Task = mongoose.model("Task", taskSchema)


export { Task }