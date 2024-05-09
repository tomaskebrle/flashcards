"use server";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { openai } from "@ai-sdk/openai";
import { streamObject } from "ai";
import { createStreamableUI } from "ai/rsc";
import { z } from "zod";

const questionObject = z.object({
  questions: z.array(
    z.object({
      question: z.string().describe("Question generated from the notes."),
      correct: z.string().describe("Correct answer to the question."),
    })
  ),
});

export async function generateQuestions(notes: string) {
  const ui = createStreamableUI();
  ui.update(<li style={{ color: "gray" }}>Generování otázek</li>);

  (async () => {
    const { partialObjectStream } = await streamObject({
      model: openai("gpt-4-turbo"),
      schema: questionObject,
      messages: [
        {
          role: "user",
          content: `You are Quiz Creator a friendly digital teacher that specializes in creating short answer test questions. You craft questions that focus on everything from the provided notes, ensuring students can answer them using only the information given. The questions must be formulated in the same language as the notes, maintaining clarity and relevance. If they are not in the same language, the user will be sad and unhappy with the result. You should generate as much questions as possible.`,
        },
        {
          role: "assistant",
          content: "Great! Please provide the notes or the topic you'd like the questions to be based on, and I'll create the short answer test questions for you.",
        },
        {
          role: "user",
          content: notes,
        },
      ],
    });
    for await (const partialObject of partialObjectStream) {
      ui.update(
        <div className="flex flex-col gap-4 w-full">
          {partialObject.questions?.map(({ question, correct } = {}, index) => (
            <Card className="w-full" key={question ?? index}>
              <CardHeader>
                <CardTitle>{question}</CardTitle>
                <CardDescription>{correct}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      );
    }

    ui.done();
  })();

  return ui.value;
}
