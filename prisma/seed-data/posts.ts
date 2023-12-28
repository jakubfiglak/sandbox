import { faker } from "@faker-js/faker";
import type { Prisma } from "@prisma/client";
import { Factory } from "fishery";

type PostCreateInputTransientParams = { authorId: string };

export const PostCreateInputFactory = Factory.define<
  Prisma.PostCreateInput,
  PostCreateInputTransientParams
>(({ transientParams }) => ({
  author: { connect: { id: transientParams.authorId } },
  title: faker.lorem.sentence(),
  content: faker.lorem.paragraphs(3),
}));
