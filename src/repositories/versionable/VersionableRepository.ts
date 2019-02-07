import * as mongoose from 'mongoose';
export class VersionableRepository<D extends mongoose.Document, M extends mongoose.Model<D>> {
  private model: M;
  constructor(model) {
    this.model = model;
  }
  public generateObjectId() {
    return String(mongoose.Types.ObjectId());
  }
  public async create(data) {
    const id = this.generateObjectId();
    // console.log(data);
    return await this.model.create({ ...data, _id: id, originalId: id });
  }
  public delete(data) {
    console.log(data);
    return this.find({ originalId: data.originalId, deletedAt: {$exists: false} }).lean().then((founddata) => {
      console.log(founddata);
      return this.model.updateOne({_id: founddata._id }, { $set: { deletedAt: Date.now() } });
    });
  }
  public count() {
    return this.model.countDocuments({});
  }
  public update(data) {
    console.log(data);
    return this.find({ originalId: data.originalId, deletedAt: {$exists: false}})
      .lean().then((data1) => {
        this.create(Object.assign(data1, { name: data.name })).then((result) => {
          return this.model.updateOne({ _id: result._id },
            { originalId: data.originalId, createdAt: Date.now() }, (err) => {
              if (err) {
            console.log('error');
              }
              else {
                console.log('Successfully updated');
              }
          });
        });
        this.model.updateOne({ _id: data1._id },
          { $set: { deletedAt: Date.now() } }, { upsert: true }).then((err) => {
            console.log(err);
          });
      });
  }
  public find(data) {
    return this.model.findOne(data);
  }
}
