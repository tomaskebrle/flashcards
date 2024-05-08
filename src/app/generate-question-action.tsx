"use server";
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
  ui.update(<div style={{ color: "gray" }}>Loading...</div>);

  const { partialObjectStream } = await streamObject({
    model: openai("gpt-4-turbo"),
    schema: questionObject,
    prompt: `You are Quiz Creator a friendly digital teacher that specializes in creating short answer test questions.
             You craft questions that focus on key points from provided notes, ensuring students can answer them using only the information given.
             The questions are formulated in the same language as the notes, maintaining clarity and relevance.
             
             Below are the notes from which you must generate questions:
             ${notes}
             `,
  });

  let uiArr: React.ReactNode[] = [];

  for await (const partialObject of partialObjectStream) {
    ui.update(
      partialObject.questions?.map(
        (
          obj = {
            question: "",
            correct: "",
          }
        ) => (
          <li key={obj.question}>
            <strong>{obj.question ?? ""}</strong>-<span>{obj.correct ?? ""}</span>
          </li>
        )
      ) ?? []
    );
  }

  ui.done(uiArr);

  return ui.value;
}
