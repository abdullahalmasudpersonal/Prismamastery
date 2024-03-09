import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
  /// create data into db

  //   const result = await prisma.post.create({
  //     data: {
  //       title: "This is title!",
  //       content: "This is content...",
  //       authorName: "Abdullah Al Masud",
  //     },
  //   });
  //   console.log(result);

  const createMany = await prisma.post.createMany({
    data: [
      {
        title: "This is title!",
        content: "This is content...",
        authorName: "Abdullah Al Masud",
      },
      {
        title: "This is title2!",
        content: "This is content.2..",
        authorName: "Abdullah Al Masud2",
      },
      {
        title: "This is title3!",
        content: "This is content.3..",
        authorName: "Abdullah Al Masud3",
      },
      {
        title: "This is title!",
        content: "This is content...",
        authorName: "Abdullah Al Masud",
      },
      {
        title: "This is title2!",
        content: "This is content.2..",
        authorName: "Abdullah Al Masud2",
      },
      {
        title: "This is title3!",
        content: "This is content.3..",
        authorName: "Abdullah Al Masud3",
      },
      {
        title: "This is title!",
        content: "This is content...",
        authorName: "Abdullah Al Masud",
      },
      {
        title: "This is title2!",
        content: "This is content.2..",
        authorName: "Abdullah Al Masud2",
      },
      {
        title: "This is title3!",
        content: "This is content.3..",
        authorName: "Abdullah Al Masud3",
      },
      {
        title: "This is title!",
        content: "This is content...",
        authorName: "Abdullah Al Masud",
      },
      {
        title: "This is title2!",
        content: "This is content.2..",
        authorName: "Abdullah Al Masud2",
      },
      {
        title: "This is title3!",
        content: "This is content.3..",
        authorName: "Abdullah Al Masud3",
      },
      {
        title: "This is title!",
        content: "This is content...",
        authorName: "Abdullah Al Masud",
      },
      {
        title: "This is title2!",
        content: "This is content.2..",
        authorName: "Abdullah Al Masud2",
      },
      {
        title: "This is title3!",
        content: "This is content.3..",
        authorName: "Abdullah Al Masud3",
      },
      {
        title: "This is title!",
        content: "This is content...",
        authorName: "Abdullah Al Masud",
      },
      {
        title: "This is title2!",
        content: "This is content.2..",
        authorName: "Abdullah Al Masud2",
      },
      {
        title: "This is title3!",
        content: "This is content.3..",
        authorName: "Abdullah Al Masud3",
      },
      {
        title: "This is title!",
        content: "This is content...",
        authorName: "Abdullah Al Masud",
      },
      {
        title: "This is title2!",
        content: "This is content.2..",
        authorName: "Abdullah Al Masud2",
      },
      {
        title: "This is title3!",
        content: "This is content.3..",
        authorName: "Abdullah Al Masud3",
      },
      {
        title: "This is title!",
        content: "This is content...",
        authorName: "Abdullah Al Masud",
      },
      {
        title: "This is title2!",
        content: "This is content.2..",
        authorName: "Abdullah Al Masud2",
      },
      {
        title: "This is title3!",
        content: "This is content.3..",
        authorName: "Abdullah Al Masud3",
      },
      {
        title: "This is title!",
        content: "This is content...",
        authorName: "Abdullah Al Masud",
      },
      {
        title: "This is title2!",
        content: "This is content.2..",
        authorName: "Abdullah Al Masud2",
      },
      {
        title: "This is title3!",
        content: "This is content.3..",
        authorName: "Abdullah Al Masud3",
      },
      {
        title: "This is title!",
        content: "This is content...",
        authorName: "Abdullah Al Masud",
      },
      {
        title: "This is title2!",
        content: "This is content.2..",
        authorName: "Abdullah Al Masud2",
      },
      {
        title: "This is title3!",
        content: "This is content.3..",
        authorName: "Abdullah Al Masud3",
      },
      {
        title: "This is title!",
        content: "This is content...",
        authorName: "Abdullah Al Masud",
      },
      {
        title: "This is title2!",
        content: "This is content.2..",
        authorName: "Abdullah Al Masud2",
      },
      {
        title: "This is title3!",
        content: "This is content.3..",
        authorName: "Abdullah Al Masud3",
      },
      {
        title: "This is title!",
        content: "This is content...",
        authorName: "Abdullah Al Masud",
      },
      {
        title: "This is title2!",
        content: "This is content.2..",
        authorName: "Abdullah Al Masud2",
      },
      {
        title: "This is title3!",
        content: "This is content.3..",
        authorName: "Abdullah Al Masud3",
      },
      {
        title: "This is title!",
        content: "This is content...",
        authorName: "Abdullah Al Masud",
      },
      {
        title: "This is title2!",
        content: "This is content.2..",
        authorName: "Abdullah Al Masud2",
      },
      {
        title: "This is title3!",
        content: "This is content.3..",
        authorName: "Abdullah Al Masud3",
      },
      {
        title: "This is title!",
        content: "This is content...",
        authorName: "Abdullah Al Masud",
      },
      {
        title: "This is title2!",
        content: "This is content.2..",
        authorName: "Abdullah Al Masud2",
      },
      {
        title: "This is title3!",
        content: "This is content.3..",
        authorName: "Abdullah Al Masud3",
      },
      {
        title: "This is title!",
        content: "This is content...",
        authorName: "Abdullah Al Masud",
      },
      {
        title: "This is title2!",
        content: "This is content.2..",
        authorName: "Abdullah Al Masud2",
      },
      {
        title: "This is title3!",
        content: "This is content.3..",
        authorName: "Abdullah Al Masud3",
      },
      {
        title: "This is title!",
        content: "This is content...",
        authorName: "Abdullah Al Masud",
      },
      {
        title: "This is title2!",
        content: "This is content.2..",
        authorName: "Abdullah Al Masud2",
      },
      {
        title: "This is title3!",
        content: "This is content.3..",
        authorName: "Abdullah Al Masud3",
      },
      {
        title: "This is title!",
        content: "This is content...",
        authorName: "Abdullah Al Masud",
      },
      {
        title: "This is title2!",
        content: "This is content.2..",
        authorName: "Abdullah Al Masud2",
      },
      {
        title: "This is title3!",
        content: "This is content.3..",
        authorName: "Abdullah Al Masud3",
      },
      {
        title: "This is title!",
        content: "This is content...",
        authorName: "Abdullah Al Masud",
      },
      {
        title: "This is title2!",
        content: "This is content.2..",
        authorName: "Abdullah Al Masud2",
      },
      {
        title: "This is title3!",
        content: "This is content.3..",
        authorName: "Abdullah Al Masud3",
      },
      {
        title: "This is title!",
        content: "This is content...",
        authorName: "Abdullah Al Masud",
      },
      {
        title: "This is title2!",
        content: "This is content.2..",
        authorName: "Abdullah Al Masud2",
      },
      {
        title: "This is title3!",
        content: "This is content.3..",
        authorName: "Abdullah Al Masud3",
      },
      {
        title: "This is title!",
        content: "This is content...",
        authorName: "Abdullah Al Masud",
      },
      {
        title: "This is title2!",
        content: "This is content.2..",
        authorName: "Abdullah Al Masud2",
      },
      {
        title: "This is title3!",
        content: "This is content.3..",
        authorName: "Abdullah Al Masud3",
      },
      {
        title: "This is title!",
        content: "This is content...",
        authorName: "Abdullah Al Masud",
      },
      {
        title: "This is title2!",
        content: "This is content.2..",
        authorName: "Abdullah Al Masud2",
      },
      {
        title: "This is title3!",
        content: "This is content.3..",
        authorName: "Abdullah Al Masud3",
      },
      {
        title: "This is title!",
        content: "This is content...",
        authorName: "Abdullah Al Masud",
      },
      {
        title: "This is title2!",
        content: "This is content.2..",
        authorName: "Abdullah Al Masud2",
      },
      {
        title: "This is title3!",
        content: "This is content.3..",
        authorName: "Abdullah Al Masud3",
      },
      {
        title: "This is title!",
        content: "This is content...",
        authorName: "Abdullah Al Masud",
      },
      {
        title: "This is title2!",
        content: "This is content.2..",
        authorName: "Abdullah Al Masud2",
      },
      {
        title: "This is title3!",
        content: "This is content.3..",
        authorName: "Abdullah Al Masud3",
      },
      {
        title: "This is title!",
        content: "This is content...",
        authorName: "Abdullah Al Masud",
      },
      {
        title: "This is title2!",
        content: "This is content.2..",
        authorName: "Abdullah Al Masud2",
      },
      {
        title: "This is title3!",
        content: "This is content.3..",
        authorName: "Abdullah Al Masud3",
      },
      {
        title: "This is title!",
        content: "This is content...",
        authorName: "Abdullah Al Masud",
      },
      {
        title: "This is title2!",
        content: "This is content.2..",
        authorName: "Abdullah Al Masud2",
      },
      {
        title: "This is title3!",
        content: "This is content.3..",
        authorName: "Abdullah Al Masud3",
      },
      {
        title: "This is title!",
        content: "This is content...",
        authorName: "Abdullah Al Masud",
      },
      {
        title: "This is title2!",
        content: "This is content.2..",
        authorName: "Abdullah Al Masud2",
      },
      {
        title: "This is title3!",
        content: "This is content.3..",
        authorName: "Abdullah Al Masud3",
      },
      {
        title: "This is title!",
        content: "This is content...",
        authorName: "Abdullah Al Masud",
      },
      {
        title: "This is title2!",
        content: "This is content.2..",
        authorName: "Abdullah Al Masud2",
      },
      {
        title: "This is title3!",
        content: "This is content.3..",
        authorName: "Abdullah Al Masud3",
      },
      {
        title: "This is title!",
        content: "This is content...",
        authorName: "Abdullah Al Masud",
      },
      {
        title: "This is title2!",
        content: "This is content.2..",
        authorName: "Abdullah Al Masud2",
      },
      {
        title: "This is title3!",
        content: "This is content.3..",
        authorName: "Abdullah Al Masud3",
      },
      {
        title: "This is title!",
        content: "This is content...",
        authorName: "Abdullah Al Masud",
      },
      {
        title: "This is title2!",
        content: "This is content.2..",
        authorName: "Abdullah Al Masud2",
      },
      {
        title: "This is title3!",
        content: "This is content.3..",
        authorName: "Abdullah Al Masud3",
      },
      {
        title: "This is title!",
        content: "This is content...",
        authorName: "Abdullah Al Masud",
      },
      {
        title: "This is title2!",
        content: "This is content.2..",
        authorName: "Abdullah Al Masud2",
      },
      {
        title: "This is title3!",
        content: "This is content.3..",
        authorName: "Abdullah Al Masud3",
      },
      {
        title: "This is title!",
        content: "This is content...",
        authorName: "Abdullah Al Masud",
      },
      {
        title: "This is title2!",
        content: "This is content.2..",
        authorName: "Abdullah Al Masud2",
      },
      {
        title: "This is title3!",
        content: "This is content.3..",
        authorName: "Abdullah Al Masud3",
      },
      {
        title: "This is title!",
        content: "This is content...",
        authorName: "Abdullah Al Masud",
      },
      {
        title: "This is title2!",
        content: "This is content.2..",
        authorName: "Abdullah Al Masud2",
      },
      {
        title: "This is title3!",
        content: "This is content.3..",
        authorName: "Abdullah Al Masud3",
      },
      {
        title: "This is title!",
        content: "This is content...",
        authorName: "Abdullah Al Masud",
      },
      {
        title: "This is title2!",
        content: "This is content.2..",
        authorName: "Abdullah Al Masud2",
      },
      {
        title: "This is title3!",
        content: "This is content.3..",
        authorName: "Abdullah Al Masud3",
      },
      {
        title: "This is title!",
        content: "This is content...",
        authorName: "Abdullah Al Masud",
      },
      {
        title: "This is title2!",
        content: "This is content.2..",
        authorName: "Abdullah Al Masud2",
      },
      {
        title: "This is title3!",
        content: "This is content.3..",
        authorName: "Abdullah Al Masud3",
      },
    ],
  });

  console.log(createMany);
};
main();
