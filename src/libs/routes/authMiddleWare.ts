import * as jwt from "jsonwebtoken";
import hasPermission from "./permissions";
export default (module, permissiontype) => (req, res, next) => {
  console.log("Inside auth middleware", module, permissiontype);
  const token = req.header("Authorization");
  //console.log("value of token:", token);
  try {
    let decoded = jwt.verify(token, process.env.Key);
    console.log(decoded);
    const role = decoded.role;
    const data = hasPermission(module, role, permissiontype);
    if (!data) {
      next({
        status: "Bad Request",
        message: "Permission not allowed"
      });
    }
  } catch (err) {
    next({
      status: 403,
      message: "Unauthorized access"
    });
  }
  next();
};
