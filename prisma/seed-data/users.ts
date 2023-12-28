import { faker } from "@faker-js/faker";
import type { Prisma, User } from "@prisma/client";
import { Factory } from "fishery";

export const UserCreateInputFactory = Factory.define<Prisma.UserCreateInput>(
  () => ({
    email: faker.internet.email(),
    name: faker.internet.userName(),
  })
);
