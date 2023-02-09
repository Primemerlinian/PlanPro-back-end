import { Router } from "express"
import * as quoteCtrl from "../controllers/quotes.js"
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'

const router = Router ()

router.use(decodeUserFromToken)
router.post('/', checkAuth, quoteCtrl.createQuote) 
router.get('/', checkAuth, quoteCtrl.index)
router.get('/:id', checkAuth, quoteCtrl.show)

export { router }
