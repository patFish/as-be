import { Request, Response } from 'express'
import { CrudController } from '../CrudController'
import * as AWS from 'aws-sdk'

AWS.config.update({ region: 'us-east-2' })
const ddb = new AWS.DynamoDB({ apiVersion: '2012-08-10' })
const params = {
  TableName: 'as-fleet',
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
        res.json(data.Items)
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
