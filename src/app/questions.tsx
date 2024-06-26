"use client";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import React from "react";
import { generateQuestions } from "./generate-question-action";
import { notes } from "./notes";

export const Questions = () => {
  const [questions, setQuestions] = React.useState<React.ReactNode>(null);
  const [note, setNote] = React.useState("");

  return (
    <>
      <div className="bg-background mx-auto -mt-12 p-8 rounded-lg shadow-lg flex flex-col gap-4">
        <h2>Nahrajte vlastní výpisky, nebo vyzkoušejte jak QuizCraft funguje s našima.</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {notes.map((note) => (
            <Button onClick={() => setNote(note.content)} variant="outline" className="border-primary border-2" key={note.title}>
              {note.title}
            </Button>
          ))}
        </div>
        <Textarea value={note} onChange={(e) => setNote(e.target.value)} className="w-full h-40 resize-y" placeholder="Vložte svoje poznámky" />
        <Button
          onClick={async () => {
            const questionUi = await generateQuestions(note);
            setQuestions(questionUi);
          }}
          className="w-full"
        >
          ✨ Vytvořit otázky
        </Button>
      </div>
      <div className="flex items-center max-w-screen-lg w-full mx-auto py-12">{questions}</div>
    </>
  );
};
