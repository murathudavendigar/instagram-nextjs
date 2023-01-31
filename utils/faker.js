import { faker } from "@faker-js/faker";

export const USERS = [];
export const SUGGESTIONS_USERS = [];
export const RANDOM_POST = [];

export function createRandomUser() {
  let randomNumber = Math.random() * 500;
  return {
    userId: faker.datatype.uuid(),
    username: faker.internet.userName(),
    // email: faker.internet.email(),
    avatar: faker.image.avatar(),
    // password: faker.internet.password(),
    // birthdate: faker.date.birthdate(),
    registeredAt: faker.date.past(),
    // location: faker.random.locale(),
    companyName: faker.company.companyName(),
    postImg: `https://source.unsplash.com/random/800x600?sig=${
      randomNumber + 1
    }`,
    caption: faker.lorem.paragraph(),
  };
}
