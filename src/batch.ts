import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const batchTransaction = async () => {
  //
  const createUser = prisma.user.create({
    data: {
      username: "abdullah2",
      email: "abdullah2@gmail.com",
    },
  });

  // console.log(createUser, "create user");

  const updateUser = prisma.user.update({
    where: {
      id: 4,
    },
    data: {
      age: 30,
    },
  });

  //console.log(updateUser, "update user");

  const [userData, updateData] = await prisma.$transaction([
    createUser,
    updateUser,
  ]);

  console.log(userData, updateData);
};

batchTransaction();
