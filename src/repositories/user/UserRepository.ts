import { IUserModel } from "./IUserModel";
import * as mongoose from "mongoose";
import { userModel } from "./UserModel";
import { userSchema } from "./UserModel";
export default class UserRepository {
  private model: mongoose.Model<IUserModel>;
  public static generateObjectId(){
    return String(mongoose.Types.ObjectId());
  }
  constructor(){
    this.model=userModel;
  }
  public create(data:any):Promise<IUserModel>{
    return this.model.create({...data,_id:UserRepository.generateObjectId()});
  }
}
