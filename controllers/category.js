import { Category } from '../models/category.js'
import { Profile } from '../models/profile.js'

const createCategory = async (req, res) => {
  try {
  req.body.owner = req.user.profile
  const category = await Category.create(req.body)
  const profile = await Profile.findByIdAndUpdate(
  req.user.profile,
  { $push: { categories: category } },
  { new: true }
  )
  category.owner = profile
  res.status(201).json(category)
  } catch (error) {
  console.log(error)
  res.status(500).json(error)
  }
  };





export {
  createCategory,

}