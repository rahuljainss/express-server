import {permission} from '../constants'
export default function hasPermission(modulename, role, permissiontype) {
  if (permission[modulename]) {
    if (
      permission[modulename][permissiontype].includes(role) ||
      permission[modulename]["all"].includes(role)
    ) {
      console.log("true");
    } else {
      console.log("false");
    }
  } else {
    console.log("false");
  }
}
