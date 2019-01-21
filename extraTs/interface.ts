export interface IPermissions {
  [getUsers: string]: {
    all: string[];
    read: String[];
    write: string[];
    delete: string[];
  };
}
export interface IUsers {
  traineeEmail: string;
  reviewerEmail: string;
}
