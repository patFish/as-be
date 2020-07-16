import { Request, Response } from "express";
import { CrudController } from "../CrudController";

export class FleetController extends CrudController {
  public create(
    req: Request<import("express-serve-static-core").ParamsDictionary>,
    res: Response
  ): void {
    throw new Error("Method not implemented.");
  }

  public read(
    req: Request<import("express-serve-static-core").ParamsDictionary>,
    res: Response
  ): void {
    res.json([
      {
        id: 12345678,
        name: "Executive car 1",
        vin: "ASD423E3D3RF5",
        make: "Mazda",
        model: "CX-5",
        year: "2019",
        fuelType: "petrol",
        type: "SUV",
        Position: {
          lat: 3.995,
          lon: 43.2221,
        },
        odometer: 43546,
        fuel: 33.4,
        battery: 12.7,
      },
      {
        id: 12345678,
        name: "Executive car 2",
        vin: "ASD423E3D3RF5",
        make: "Mazda",
        model: "CX-5",
        year: "2019",
        fuelType: "petrol",
        type: "SUV",
        Position: {
          lat: 3.795,
          lon: 43.1221,
        },
        odometer: 43546,
        fuel: 33.4,
        battery: 12.7,
      },
      {
        id: 12345678,
        name: "Executive car 3",
        vin: "ASD423E3D3RF5",
        make: "Mazda",
        model: "CX-5",
        year: "2019",
        fuelType: "petrol",
        type: "SUV",
        Position: {
          lat: 4.095,
          lon: 43.2221,
        },
        odometer: 43546,
        fuel: 33.4,
        battery: 12.7,
      },
      {
        id: 12345678,
        name: "Executive car 4",
        vin: "ASD423E3D3RF5",
        make: "Mazda",
        model: "CX-5",
        year: "2019",
        fuelType: "petrol",
        type: "SUV",
        Position: {
          lat: 4.195,
          lon: 43.2221,
        },
        odometer: 43546,
        fuel: 33.4,
        battery: 12.7,
      },
    ]);
  }

  public update(
    req: Request<import("express-serve-static-core").ParamsDictionary>,
    res: Response
  ): void {
    throw new Error("Method not implemented.");
  }

  public delete(
    req: Request<import("express-serve-static-core").ParamsDictionary>,
    res: Response
  ): void {
    throw new Error("Method not implemented.");
  }
}
