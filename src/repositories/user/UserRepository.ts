import { IUserModel, IUserDeleteModel } from "./IUserModel";
import * as mongoose from "mongoose";
import { userModel } from "./UserModel";
export default class UserRepository {
  private model: mongoose.Model<IUserModel>;
  public static generateObjectId() {
    return String(mongoose.Types.ObjectId());
  }
  constructor() {
    this.model = userModel;
  }

  public count() {
    return this.model.countDocuments({});
  }
  public create(data: any): Promise<IUserModel> {
    return this.model.create({
      ...data,
      _id: UserRepository.generateObjectId()
    });
  }
  public delete(data): mongoose.Query<IUserDeleteModel> {
    return this.model.deleteOne({ ...data }, function(err) {
      if (err) {
        console.log("Error in deleting");
      } else {
        console.log("Successfully deleted");
      }
    });
  }
  public update(data, doc): mongoose.Query<IUserModel> {
    return this.model.updateMany(data, doc, function(err) {
      if (err) {
        console.log("Error in updating");
      } else {
        console.log("Successfully updated");
      }
    });
  }
  public getUser(data) {
    return this.model.findById(data);
  }
}
