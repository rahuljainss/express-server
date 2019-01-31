import * as mongoose from "mongoose";
import seedData from "./../seedData";
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
          }
          seedData();
        }
      );
    });
  }
  static disconnect() {
    //mongoose.disconnect();
    //console.log("Disconnected from database");
  }
}
export default Database;
