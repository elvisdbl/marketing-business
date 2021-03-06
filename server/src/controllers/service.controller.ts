import { Request, Response } from "express";
import path from "path";
import fs from "fs-extra";

//DB
import { connect } from "../database";

//Interfaces
import { IService } from "../interface/interfaces";

//Services

export async function getServices(
  req: Request,
  res: Response
): Promise<Response | void> {
  try {
    const conn = await connect();
    const services = await conn.query("SELECT * FROM services");
    return res.status(200).json(services[0]);
  } catch (e) {
    console.log(e);
  }
}

export async function getService(
  req: Request,
  res: Response
): Promise<Response | void> {
  const id = req.params.id;
  const conn = await connect();
  const service = await conn.query(
    "SELECT * FROM services WHERE id_service = ?",
    [id]
  );
  res.json(service[0]);
}

export async function createService(
  req: Request,
  res: Response
): Promise<Response | void> {
  const { title, type, description, price } = req.body;
  const newService: IService = {
    title: title,
    type: type,
    description: description,
    price: price,
    image: req.file.path,
  };
  const conn = await connect();
  await conn.query("INSERT INTO services SET ?", [newService]);
  return res.json({
    message: "Service successfully created",
  });
}

export async function updateService(
  req: Request,
  res: Response
): Promise<Response | void> {
  const id = req.params.id;
  const { title, type, description, price } = req.body;
  const updatedService: IService = {
    title: title,
    type: type,
    description: description,
    price: price,
    image: req.file.path,
  };
  console.log(updateService);
  const conn = await connect();
  await conn.query("UPDATE services SET ? WHERE id_service = ?", [
    updatedService,
    id,
  ]);
  res.json({
    message: "Service has been updated",
  });
}

export async function deleteService(
  req: Request,
  res: Response
): Promise<Response | void> {
  const id = req.params.id;
  const conn = await connect();
  const info = await conn.query(
    "SELECT image FROM services WHERE id_service = ?",
    [id]
  );
  await conn.query("DELETE FROM services WHERE id_service = ?", [id]);

  if (info[0][0].image) {
    await fs.unlink(path.resolve(info[0][0].image));
  }

  res.json({
    message: "Service has been deleted",
  });
}
