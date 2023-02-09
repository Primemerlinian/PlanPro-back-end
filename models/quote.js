import mongoose from "mongoose"

const Schema = mongoose.Schema


const quoteSchema = new Schema({
  quote: {
    type: String,
  }
}, {  
  timestamps: true,
})


const Quote = mongoose.model('Quote', quoteSchema)

export { Quote }