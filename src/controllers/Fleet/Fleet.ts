import { Request, Response } from 'express'
import { CrudController } from '../CrudController'
import * as AWS from 'aws-sdk'

AWS.config.update({ region: 'us-east-2' })
const ddb = new AWS.DynamoDB({ apiVersion: '2012-08-10' })
const params = {
  TableName: 'as-fleet',
}

interface DbCar {
  id: { N: string }
  name: { S: string }
  vin: { S: string }
  make: { S: string }
  model: { S: string }
  year: { S: string }
  fuelType: { S: string }
  type: { S: string }
  Position: {
    M: {
      lat: { N: string }
      lon: { N: string }
    }
  }
  odometer: { N: string }
  fuel: { N: string }
  battery: { N: string }
}

interface Car {
  id: number
  name: string
  vin: string
  make: string
  model: string
  year: string
  fuelType: string
  type: string
  Position: {
    lat: number
    lon: number
  }
  odometer: number
  fuel: number
  battery: number
}

export class FleetController extends CrudController {
  public create(
    req: Request<import('express-serve-static-core').ParamsDictionary>,
    res: Response
  ): void {
    throw new Error('Method not implemented.')
  }

  public read(req: Request<import('express-serve-static-core').ParamsDictionary>, res: Response): void {
    ddb.scan(params, (err, data) => {
      if (err) {
        console.log('Error', err)
      } else {
        const replyData: any = data.Items
        const converted: Array<DbCar> = replyData as Array<DbCar>
        const fleet = converted.map(
          (dbCar: DbCar): Car => {
            return {
              id: parseInt(dbCar.id.N, 10),
              name: dbCar.name.S,
              vin: dbCar.vin.S,
              make: dbCar.make.S,
              model: dbCar.model.S,
              year: dbCar.year.S,
              fuelType: dbCar.fuelType.S,
              type: dbCar.type.S,
              Position: {
                lat: parseInt(dbCar.Position.M.lat.N, 10),
                lon: parseInt(dbCar.Position.M.lon.N, 10),
              },
              odometer: parseInt(dbCar.odometer.N, 10),
              fuel: parseInt(dbCar.fuel.N, 10),
              battery: parseInt(dbCar.battery.N, 10),
            }
          }
        )
        res.json(fleet)
      }
    })
  }

  public update(
    req: Request<import('express-serve-static-core').ParamsDictionary>,
    res: Response
  ): void {
    throw new Error('Method not implemented.')
  }

  public delete(
    req: Request<import('express-serve-static-core').ParamsDictionary>,
    res: Response
  ): void {
    throw new Error('Method not implemented.')
  }
}
