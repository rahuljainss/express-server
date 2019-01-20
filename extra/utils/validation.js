const users = [
  {
    traineeEmail: "trainee1@successive.tech",
    reviewerEmail: "reviewer1@successive.tech"
  },
  {
    traineeEmail: "trainee1@successive.tech",
    reviewerEmail: "reviewer1@successive.tech"
  },
  {
    traineeEmail: "trainee1@successive.tech",
    reviewerEmail: "reviewer1@@@successive.tech"
  }
];
function validateEmail(email) {
  let regex = /^([A-Za-z0-9_\-\.])+\@successive.tech/;
  if (!regex.test(email)){
    return false;
  } else {
    return true;
  }
}
let count = 0;
let count1 = 0;
function validateUsers(users) {
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
validateUsers(users);
