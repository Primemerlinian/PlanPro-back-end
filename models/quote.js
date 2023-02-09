import mongoose from "mongoose"

const Schema = mongoose.Schema


const quoteSchema = new Schema({
  quote: {
    type: String,
    required: true,
  }
}, {  
  timestamps: true,
})


const Quote = mongoose.model('Quote', quoteSchema)

export { Quote }