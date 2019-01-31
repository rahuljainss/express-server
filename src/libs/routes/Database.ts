import * as mongoose from "mongoose";
class Database {
  static open(mongoURL: string) {
    return new Promise((resolve, reject) => {
      mongoose.connect(
        mongoURL,
        { useNewUrlParser: true },
        err => {
          if (err) {
            reject("error in connecting to database");
          } else {
            console.log("Successful connection");
            resolve({ a: "hello" });
            // schema defination
            const schema1 = new mongoose.Schema({ name: String });
            const Person = mongoose.model("name", schema1);
            const person = new Person({ name: "trainee" });
            console.log(person);
          }
        }
      );
    });
  }
  static disconnect() {
    mongoose.disconnect();
    console.log("Disconnected from database");
  }
}
export default Database;
