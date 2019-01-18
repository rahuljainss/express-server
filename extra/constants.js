const headTrainer = "head-trainer";
const trainee = "trainee";
const trainer = "trainer";
const getUsers = "getUsers";
export const permission = {
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
