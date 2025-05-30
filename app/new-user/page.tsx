import { prisma } from "@/utils/db";
import { currentUser } from '@clerk/nextjs/server'
import { redirect } from "next/navigation";

const createNewUser = async () => {
  const user = await currentUser();
  if (!user) {
    redirect("/sign-up");
  }
  console.log(user);

  const match = await prisma.user.findUnique({
    where: {
      clerkId: user.id as string,
    },
  });

  if (!match) {
    await prisma.user.create({
      data: {
        clerkId: user.id,
        email: user.emailAddresses[0]?.emailAddress,
      },
    });
  }

  redirect("/notes");
};
const NewUser = async () => {
  await createNewUser();
  return <div>...loading</div>;
};

export default NewUser;
