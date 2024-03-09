import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
  /// find all
  const getAllFromDB = await prisma.post.findMany();

  /// find fast or error throw
  const findFirst = await prisma.post.findFirstOrThrow({
    where: {
      published: false,
    },
  });

  /// find unique and find throw error
  const findUnique = await prisma.post.findUniqueOrThrow({
    where: {
      id: 15,
    },
    select: {
      title: true,
      content: true,
      authorName: true,
    },
  });

  console.log({ findUnique });
};
main();
