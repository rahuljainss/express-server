export interface IPermissions {
  [TRAINEEE: string]: {
    all: string[];
    read: string[];
    write: string[];
    delete: string[];
  };
}
