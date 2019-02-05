import * as mongoose from 'mongoose';
import { IUserDeleteModel, IUserModel } from './IUserModel';
import { userModel } from './UserModel';
export default class UserRepository {
  public static generateObjectId() {
    return String(mongoose.Types.ObjectId());
  }
  private model: mongoose.Model<IUserModel>;
  constructor() {
    this.model = userModel;
  }

  public count() {
    return this.model.countDocuments({});
  }
  public findone(query) {
    return this.model.findOne(query);
  }
  public create(data: any): Promise<IUserModel> {
    return this.model.create({
      ...data,
      _id: UserRepository.generateObjectId(),
    });
  }
  public delete(data): mongoose.Query<IUserDeleteModel> {
    return this.model.deleteOne({ ...data }, (err) => {
      if (err) {
        console.log('Error in deleting');
      } else {
        console.log('Successfully deleted');
      }
    });
  }
  public update(data, doc): mongoose.Query<IUserModel> {
    return this.model.updateMany(data, doc, (err) => {
      if (err) {
        console.log('Error in updating');
      } else {
        console.log('Successfully updated');
      }
    });
  }
  public getUser(data) {
    return this.model.findById(data);
  }
}
