import { IPermissions } from "./interface";
export const HEADTRAINER: string = "head-trainer";
export const TRAINEE: string = "trainee";
export const TRAINER: string = "trainer";
export const GETUSERS: string = "getUsers";
export const GETUSERS1: string = "getUsers1";
export const PERMISSION: IPermissions = {
  GETUSERS: {
    all: [HEADTRAINER],
    read: [TRAINEE, TRAINER],
    write: [TRAINER],
    delete: []
  },
  GETUSERS1: {
    all: [HEADTRAINER],
    read: [TRAINEE, TRAINER],
    write: [TRAINER],
    delete: []
  }
};
