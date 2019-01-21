import { IUsers } from "./../interface";
import { validateEmail } from "./helper";
export default function validateUsers(users: IUsers[]): void {
  let count: number = 0;
  let count1: number = 0;
  let valid: string[] = [];
  let invalid: string[] = [];
  users.forEach(function(user: IUsers, index: number): void {
    const { traineeEmail, reviewerEmail } = user;
    if (validateEmail(traineeEmail) && validateEmail(reviewerEmail)) {
      valid.push(`user - ${index + 1}`);
      count = count + 1;
    } else {
      invalid.push(`user - ${index + 1}`);
      count1 = count1 + 1;
    }
  });

  console.log("valid users are", count, "\n", valid);
  console.log("invalid users are", count1, "\n", invalid);
}
