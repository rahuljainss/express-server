export interface IPermissions {
  [TRAINEEE: string]: {
    all: string[];
    read: String[];
    write: string[];
    delete: string[];
  };
}
