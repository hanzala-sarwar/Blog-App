"use server";

import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env.GROQ_API_KEY,
  baseURL: "https://api.groq.com/openai/v1",
});

type ImproveContentResponse = {
  content?: string;
  error?: string;
};

export async function improveContentAction(
  content: string
): Promise<ImproveContentResponse> {

  if (!content) {
    return {
      error: "Content is required",
    };
  }

  try {
    const completion = await client.chat.completions.create({
      model: "llama-3.3-70b-versatile",

      messages: [
        {
          role: "user",
          content: `Improve this HTML content.
Fix grammar, spelling, and clarity.
Keep HTML formatting exactly the same.

Return ONLY the improved HTML.
Do not explain changes.
Do not add notes.
Do not use bullet points.

HTML:
${content}`,
        },
      ],
    });

    return {
      content: completion.choices[0].message.content || "",
    };

  } catch (error) {
    console.error(error);

    return {
      error: "Failed to improve content",
    };
  }
} 