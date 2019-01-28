import { Request, Response, NextFunction } from "express";
import SuccessHandler from "../../libs/routes/SuccessHandler";
class TraineeController {
  public static getInstance(instance: TraineeController) {
    if (!instance) {
      instance = new TraineeController();
    }
    return instance;
  }
  get(req: Request, res: Response) {
    const data = [
      {
        name: "trainee1"
      },
      {
        name: "trainee2"
      }
    ];
    res
      .status(200)
      .send(SuccessHandler("ok", "Successfully fetched data", data));
    console.log("Inside get method");
  }

  create(req: Request, res: Response) {
    const { name, id } = req.body;
    if (!name) {
      res
        .status(400)
        .send({ status: "Bad request", message: "name is not present" });
    }
    if (!id) {
      res
        .status(400)
        .send({ status: "Bad request", message: "ID is not present" });
    } else
      res.status(200).send({
        status: "ok",
        message: "Successfully Created",
        data: { name, id }
      });
  }
  update(req: Request, res: Response) {
    const { name, id } = req.body;
    if (!id) {
      res
        .status(400)
        .send({ status: "Bad request", message: "ID is not present" });
    } else
      res.status(200).send({
        status: "ok",
        message: "Successfully Updated",
        data: { name, id }
      });
  }
  delete(req: Request, res: Response) {
    const id=req.params.id;
    res.status(200).send({
      status: "ok",
      message: `Successfully deleted - ${id}`,
      data: null
    });
  }
}
export default TraineeController.getInstance(new TraineeController());
