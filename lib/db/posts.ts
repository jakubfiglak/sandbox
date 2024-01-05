import { prisma } from "@/prisma";

export async function getPostsList() {
  return prisma.post.findMany({});
}
