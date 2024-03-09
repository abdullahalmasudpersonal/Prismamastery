import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const paginationSorting = async () => {
  /// offset pagination
  const offsetData = await prisma.post.findMany({
    skip: 15,
    take: 2,
  });

  /// cursonrbase pagination
  const coursorbaseData = await prisma.post.findMany({
    skip: 5,
    take: 2,
    cursor: {
      id: 15,
    },
  });

  /// sorting
  const sortingData = await prisma.post.findMany({
    orderBy: {
      id: "desc",
    },
    skip: 2,
    take: 5,
    where: {
      title: "This is title2!",
    },
  });

  console.log("sorted data:", sortingData);
};

paginationSorting();
