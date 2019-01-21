import { IPermissions } from "./interface";
export const headTrainer = "head-trainer";
export const trainee = "trainee";
export const trainer = "trainer";
export const getUsers = "getUsers";
export const getUsers1 = "getUsers1";
export const permission: IPermissions = {
  getUsers: {
    all: [headTrainer],
    read: [trainee, trainer],
    write: [trainer],
    delete: []
  },
  getUsers1: {
    all: [headTrainer],
    read: [trainee, trainer],
    write: [trainer],
    delete: []
  }
};
