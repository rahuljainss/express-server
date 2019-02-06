import * as mongoose from 'mongoose';
import { VersionableRepository } from './../versionable/VersionableRepository';
import { IUserDeleteModel, IUserModel } from './IUserModel';
import { userModel } from './UserModel';
const version = new VersionableRepository(userModel);
export default class UserRepository extends VersionableRepository<IUserModel, mongoose.Model<IUserModel>> {
  public static generateObjectId() {
    return String(mongoose.Types.ObjectId());
  }
  constructor() {
    super(userModel);
  }
  public findone(query) {
    return this.findUser(query);
  }
  public create(data: any): Promise<IUserModel> {
    return this.createUser(data);
  }
  public update(data) {
    return this.updateUser(data);
  }
public delete(data) {
return this.deleteUser(data);
}
}
