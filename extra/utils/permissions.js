const permission = {
  getUsers: {
    all: ["head-trainer"],
    read: ["trainee", "trainer"],
    write: ["trainer"],
    delete: []
  },
  getUsers2: {
    all: ["head-trainer"],
    read: ["trainee", "trainer"],
    write: ["trainer"],
    delete: []
  }
};
function hasPermission(modulename, role, permissiontype) {
  if (permission[modulename]) {
    if (
      permission[modulename][permissiontype].includes(role) ||
      permission[modulename]["all"].includes(role)
    ) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
}
console.log(hasPermission("getUsers", "head-trainer", "read"));
console.log(hasPermission("getUsers", "trainer", "delete"));
