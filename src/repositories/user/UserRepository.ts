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
    return this.find(query);
  }
  public createUser(data: any): Promise<IUserModel> {
    return this.create(data);
  }
  public updateUser(data) {
    return this.update(data);
  }
public deleteUser(data) {
return this.delete(data);
}
}
