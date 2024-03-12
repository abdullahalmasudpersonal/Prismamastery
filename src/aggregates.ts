import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const aggregates = async () => {
  /// find avrage age
  const avgAge = await prisma.user.aggregate({
    _avg: {
      age: true,
    },
  });
  /// find sum age
  const sumAge = await prisma.user.aggregate({
    _sum: {
      age: true,
    },
  });

  /// find count
  const countAge = await prisma.user.aggregate({
    _count: {
      username: true,
    },
  });

  /// count hol data
  const countRecord = await prisma.user.count();

  /// count max age
  const countMaxAge = await prisma.user.aggregate({
    _max: {
      age: true,
    },
  });

  console.log(countMaxAge);
};

aggregates();
