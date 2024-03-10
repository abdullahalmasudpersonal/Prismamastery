import { PrismaClient, UserRole } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
  // const createUser = await prisma.user.create({
  //   data: {
  //     username: "user2",
  //     email: "user1@ph.com",
  //     role: UserRole.user,
  //   },
  // });
  // console.log(createUser);

  // const createProfile = await prisma.profile.create({
  //   data: {
  //     bio: "This is bio...!",
  //     userId: 1,
  //   },
  // });

  // const createCategory = await prisma.category.create({
  //   data: {
  //     name: "Software Engineering",
  //   },
  // });

  const createPost = await prisma.post.create({
    data: {
      title: "This is title",
      content: "This is content",
      authorId: 1,
      postCategory: {
        create: {
          categoryId: 3,
          // category: {
          //   connect: {
          //     id: 1,
          //   },
          // },
        },
      },
    },
    include: {
      postCategory: true,
    },
  });

  console.log(createPost);
};
main();
