import UserRepository from ".././repositories/user/UserRepository";
export default function seedData() {
  console.log("Seed function");
  const repository = new UserRepository();
  repository.create({ name: "trainee12333", id: "100" });
}
