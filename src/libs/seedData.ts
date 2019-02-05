import UserRepository from '.././repositories/user/UserRepository';
export default function seedData() {
  console.log('Seed function');
  const repository = new UserRepository();
  // repository.create({ name: "trainee12333", id: "100" });
  // repository.update({ name: "trainee12333"}, { name: "test" });
  // repository.delete({ name: "trainee12333"});
  // repository.read({name:"trainee12333"});

  repository.count().then((count) => {
    if (count === 0) {
      repository.create({
        email: 'head.trainer@successive.tech',
        name: 'Head-Trainer',
        role: 'head-trainer',
      });
      repository.create({
        email: 'trainer@successive.tech',
        name: 'Trainer',
        role: 'trainer',
      });
    }
  });
}
