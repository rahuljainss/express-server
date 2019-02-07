import * as mongoose from 'mongoose';
import IVersionableModel from '../versionable/IVersionableModel';
export interface IUserModel extends IVersionableModel {
  name: string;
  _id: string;
  role: string;
  email: string;
  password: string;
}

export interface IUserDeleteModel {
  n?: number;
  ok?: number;
}
