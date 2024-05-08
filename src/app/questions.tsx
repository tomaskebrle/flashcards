"use client";
import { Button } from "@/components/ui/button";
import React from "react";
import { generateQuestions } from "./generate-question-action";

export const Questions = ({ note }: { note: string }) => {
  const [questions, setQuestions] = React.useState<React.ReactNode>(null);

  return (
    <div>
      <Button
        onClick={async () => {
          console.time("generateQuestions");
          const questionUi = await generateQuestions(note);
          console.timeEnd("generateQuestions");
          setQuestions(questionUi);
        }}
      >
        Generovat{" "}
      </Button>
      <ul className="list-disc">{questions}</ul>
    </div>
  );
};
