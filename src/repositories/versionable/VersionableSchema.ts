import * as mongoose from 'mongoose';
import IVersionableModel from '../versionable/IVersionableModel';
export default class VersionableSchema extends mongoose.Schema {
  constructor(options: any, collections: any) {
    const versionable = Object.assign({
      createdAt: {
        default: Date.now,
        required: true,
        type: Date,
      },
      deletedAt: {
        required: false,
        type: Boolean,
      },
      originalId: {
        required: true,
        type: String,
      },
    }, options);
    super(versionable, collections);
  }
}
