import { Router } from "express"
import * as quotesCtrl from "../controllers/quotes.js"
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'

const router = Router ()

router.use(decodeUserFromToken)
router.post('/', checkAuth, quotesCtrl.createQuote) 
router.get('/', checkAuth, quotesCtrl.index)
router.get('/:id', checkAuth, quotesCtrl.show)
router.delete('/:id', checkAuth, quotesCtrl.delete)

export { router }
