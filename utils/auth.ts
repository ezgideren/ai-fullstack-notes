import { auth } from "@clerk/nextjs/server"
import { prisma } from "./db"

export const getUserByClerkID = async () => {
    const { userId } = await auth()

    if (!userId) {
        throw new Error("User not authenticated")
    }

    const user = await prisma.user.findUniqueOrThrow({
        where: {
            clerkId: userId
        },
    })

    return user
}
