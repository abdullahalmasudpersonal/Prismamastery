import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const filtering = async () => {
  const andFiltaring = await prisma.post.findMany({
    where: {
      AND: [
        {
          title: {
            contains: "title",
          },
        },
        { published: true },
      ],
    },
  });
  /// OR filtering
  const orFiltaring = await prisma.post.findMany({
    where: {
      OR: [
        {
          title: {
            contains: "title",
          },
        },
        { published: true },
      ],
    },
  });

  const notFiltaring = await prisma.post.findMany({
    where: {
      NOT: [
        {
          title: {
            contains: "This",
          },
        },
      ],
    },
  });

  const startWith = await prisma.user.findMany({
    where: {
      role: {
        equals: "user", /// statrtWith, endWith, contains, equals
      },
    },
  });

  const userNameArray = ["user1", "user2", "user3"];

  const userNamesByArray = await prisma.user.findMany({
    where: {
      username: {
        in: userNameArray,
      },
    },
  });

  const inDeepthData = await prisma.user.findUnique({
    where: {
      id: 3,
    },
    include: {
      post: {
        include: {
          postCategory: {
            include: {
              category: true,
            },
          },
        },
      },
    },
  });

  console.dir(inDeepthData, { depth: Infinity });
};

filtering();
