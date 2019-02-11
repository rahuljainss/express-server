import * as mongoose from 'mongoose';
export default interface IVersionableModel extends mongoose.Document {
deletedAt: Date;
originalId: string;
createdBy: Date;
}
