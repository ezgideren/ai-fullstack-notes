import { getUserByClerkID } from "@/utils/auth";
import { prisma } from "@/utils/db";
import { NextResponse } from "next/server";
import { revalidatePath } from "next/cache";
import { analyze } from "@/utils/ai";

export const POST = async () => {
    const user = await getUserByClerkID();
    const entry = await prisma.notesEntry.create({
        data: {
            userId: user.id,
            content: "Write your note here",
        }
    })

    const analysis = await analyze(entry.content)
    await prisma.analysis.create({
        data: {
            userId: user.id,
            entryId: entry.id,
            ...analysis
        }

    })


    revalidatePath('/notes')


    return NextResponse.json({ data: entry })

}
