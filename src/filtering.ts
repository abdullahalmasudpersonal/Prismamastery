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
  console.log(andFiltaring);
};

filtering();
