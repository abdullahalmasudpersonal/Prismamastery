import { PrismaClient } from "@prisma/client";
import { title } from "process";

const prisma = new PrismaClient();

const updates = async () => {
  //   const resultUpdate = await prisma.post.update({
  //     where: {
  //       id: 9,
  //     },
  //     data: {
  //       title: "title9",
  //       //content: "content4",
  //       //  authorName: "Abdullah Al Masud4",
  //     },
  //   });
  ///console.log("updates", resultUpdate);
  //   const updateMany = await prisma.post.updateMany({
  //     where: {
  //       title: "This is title3!",
  //     },
  //     data: {
  //       published: true,
  //     },
  //   });
  //   console.log(updateMany);

  const upsertData = await prisma.post.upsert({
    where: {
      id: 16,
    },
    update: {
      authorName: "Abdullah",
    },
    create: {
      title: "title 1",
      content: "content 1",
    },
  });
  console.log(upsertData);
};
updates();
