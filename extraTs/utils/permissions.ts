import { permission } from "../constants";
export default function hasPermission(
  modulename: string,
  role: string,
  permissiontype: string
): void {
  if (permission[modulename]) {
    if (
      permission[modulename][permissiontype].includes(role) ||
      permission[modulename]["all"].includes(role)
    ) {
      console.log(role, " has permission to", permissiontype);
    } else {
      console.log(role, "has no permission to", permissiontype);
    }
  } else {
    console.log(role, "has no permission to", permissiontype);
  }
}
