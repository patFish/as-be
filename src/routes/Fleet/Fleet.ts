import express, { Request, Response } from 'express'
import { fleetController } from '../../controllers'

export const router = express.Router({
  strict: true,
})

router.post('/', (req: Request, res: Response) => {
  fleetController.create(req, res)
})

router.get('/', (req: Request, res: Response) => {
  fleetController.read(req, res)
})

router.patch('/', (req: Request, res: Response) => {
  fleetController.update(req, res)
})

router.delete('/', (req: Request, res: Response) => {
  fleetController.delete(req, res)
})
