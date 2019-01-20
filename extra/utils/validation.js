import{validateEmail} from './helper';
export default function validateUsers(users) {
  let count = 0;
  let count1 = 0;
  let valid = [];
  let invalid = [];
  users.forEach(function(user, index) {
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
