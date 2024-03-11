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
      content: "This is content of the post 5",
      authorId: 3,
      postCategory: {
        create: [
          {
            categoryId: 1,
          },
          {
            categoryId: 3,
          },
          {
            categoryId: 4,
          },
        ],
      },
    },
    include: {
      postCategory: true,
    },
  });

  console.log(createPost);
};
main();
