import { Qutoes } from "../models/quote.js";

const createQuote = async (req, res) => {
  try {
    const quote = await Quote.create(req.body);
    res.status(201).json(quote);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

export { createQuote };