import { Quote } from "../models/quote.js"

const createQuote = async (req, res) => {
  try {
    const quote = await Quote.create(req.body)
    res.status(201).json(quote)
  } catch (error) {
    console.log(error)
    res.status(500).json(error)
  }
}

const index = async (req, res) => {
  try {
    const quotes = await Quote.find({})
    .sort({ createdAt: 'desc' })
    res.status(200).json(quotes)
  } catch (error) {
    res.status(500).json(error)
  }
}

const show = async (req, res) => {
  try {
    const quote = await Quote.findById(req.params.id)
    res.status(200).json(quote)
  } catch (error) {
    res.status(500).json(error)
  }
}

const deleteQuote = async (req, res) => {
  try {
    const quote = await Quote.findByIdAndDelete(req.params.id)
    res.status(200).json(quote)
  } catch (error) {
    res.status(500).json(error)
  }
}

export {
  createQuote,
  index,
  show,
  deleteQuote as delete
}