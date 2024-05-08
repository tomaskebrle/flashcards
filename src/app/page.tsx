"use client";
import { Questions } from "./questions";

export default function Home() {
  return (
    <main className="flex flex-col bg-background min-h-screen dark text-foreground">
      <div className="hero h-[50vh] flex items-center justify-center">
        <div className="flex items-center flex-col">
          <img src="/quizcraft.png" className="h-32" alt="" />
          <h1 className="text-7xl text-white">QuizCraft</h1>
        </div>
      </div>

      <Questions></Questions>
    </main>
  );
}
