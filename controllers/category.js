import { Category } from '../models/category.js'
import { Profile } from '../models/profile.js'

const newCategory = new Category({
  title: req.body.title,
  color:req.body.color
});




export {
  newCategory,

}