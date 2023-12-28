import { PostCreateInputFactory } from "./seed-data/posts";
import { UserCreateInputFactory } from "./seed-data/users";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const usersInput = UserCreateInputFactory.buildList(3);

  for (const userInput of usersInput) {
    const user = await prisma.user.create({ data: userInput });
    console.log(`👱 Created user with id: ${user.id}`);

    const postsInput = PostCreateInputFactory.buildList(
      3,
      {},
      { transient: { authorId: user.id } }
    );

    for (const postInput of postsInput) {
      const post = await prisma.post.create({ data: postInput });
      console.log(
        `📝 Created post with id: ${post.id} for user with id: ${user.id}`
      );
    }
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
