import { PERMISSION } from "../constants";
export default function hasPermission(
  modulename: string,
  role: string,
  permissiontype: string
): void {
  if (PERMISSION[modulename]) {
    if (
      PERMISSION[modulename][permissiontype].includes(role) ||
      PERMISSION[modulename]["all"].includes(role)
    ) {
      console.log(role, " has permission to", permissiontype);
    } else {
      console.log(role, "has no permission to", permissiontype);
    }
  } else {
    console.log(role, "has no permission to", permissiontype);
  }
}
