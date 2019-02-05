import { PERMISSION } from './constants';
export default function hasPermission(
  modulename: string,
  role: string,
  permissiontype: string,
): boolean {
  if (PERMISSION[modulename]) {
    if (
      PERMISSION[modulename][permissiontype].includes(role) ||
      PERMISSION[modulename].all.includes(role)
    ) {
      console.log(role, 'has permission to', permissiontype);
      return true;
    } else {
      console.log(role, 'has no permission to', permissiontype);
      return false;
    }
  } else {
    console.log(role, 'has no permission to', permissiontype);
    return false;
  }
}
