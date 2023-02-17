import { Router } from "express";
import * as taskCtrl from '../controllers/tasks.js'
import { decodeUserFromToken, checkAuth } from "../middleware/auth.js"

const router = Router ()

// ========= Protected Routes ========= 
router.use(decodeUserFromToken)
router.post('/', checkAuth, taskCtrl.create)
router.get('/', checkAuth, taskCtrl.index)
router.get('/:id', checkAuth, taskCtrl.show)
router.put('/:id', checkAuth, taskCtrl.update)
router.delete('/:id', checkAuth, taskCtrl.delete)
router.post('/:id/steps', checkAuth, taskCtrl.createStep)

export { router }