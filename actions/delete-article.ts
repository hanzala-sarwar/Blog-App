"use server"

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { auth } from "@clerk/nextjs/server";
 
export const deleteArticle = async (articleId: string) => {


      // ✅ Authenticate user
        const { userId } = await auth();
        if (!userId) {
            return {
                errors: { formErrors: ["You must be logged in to update an article."] },
            };
        }

            // ✅ Find the existing article
    const existingArticle = await prisma.articles.findUnique({
        where: { id: articleId },
    });

    if (!existingArticle) {
        return {
            errors: { formErrors: ["Article not found."] },
        };
    }

    // ✅ Check if the user is the author
    const user = await prisma.user.findUnique({
        where: { clerkUserId: userId },
    });

    if (!user || existingArticle.authorId !== user.id) {
        return {
            errors: { formErrors: ["You are not authorized to edit this article."] },
        };
    }

 // 1. Delete related comments first
     await prisma.comment.deleteMany({
    where: { articleId },
  });

    // 2. Delete related likes
  await prisma.like.deleteMany({
    where: { articleId },
  });


   // 2. Now delete the article
    await prisma.articles.delete({
        where: {
            id: articleId,
        },
    });
    revalidatePath("/dashboard");
}