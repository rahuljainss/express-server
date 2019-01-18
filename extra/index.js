import { diamond, equilateral } from "./patterns"; // importing patterns
import { validateUsers, hasPermission } from "./utils"; //importing utils
// constants of validation.js
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
//calling Equilateral.js
equilateral(5);
equilateral(10);
equilateral(7);
//calling Diamond.js
diamond(5);
diamond(10);
//calling validation.js
validateUsers(users);
//calling permissions.js
hasPermission("getUsers", "head-trainer", "read");
hasPermission("getUsers", "trainer", "delete");
