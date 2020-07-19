import express, { Request, Response } from 'express'
import { healthController } from '../../controllers'
import { healthRouter } from '..'

export const router = express.Router({
  strict: true,
})

router.get('/', (req: Request, res: Response) => {
  healthController.read(req, res)
})
