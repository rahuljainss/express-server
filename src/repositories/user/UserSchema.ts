import * as mongoose from 'mongoose';
import VersionableSchema from '../versionable/VersionableSchema';
// import VersionableSchema from '../versionable/VersionableSchema';
export default class UserSchema extends VersionableSchema {
  constructor(options: any) {
    const Schema = {
      _id: String,
      email: String,
      name: String,
      role: String,
    };
    super(Schema, options);
  }
}
