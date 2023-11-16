"use client";

import { JokePromptGenerator } from "@/components/joke-prompt-generator";
import { useChat } from "ai/react";

export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();

  return (
    <main className="mx-auto w-full h-screen p-24 flex flex-col">
      <div className="p-4 m-4">
        <JokePromptGenerator />
      </div>
      <div className="p-4 m-4 max-w-lg text-center mx-auto">
        <section className="mb-auto m">
          {messages.map((m) => (
            <div className="mb-4" key={m.id}>
              {m.role === "user" ? "User: " : "AI: "}
              {m.content}
            </div>
          ))}
        </section>
        <form className="flex space-x-4" onSubmit={handleSubmit}>
          <input
            className="rounded-md p-2 text-black"
            value={input}
            onChange={handleInputChange}
            placeholder="Paste your joke here..."
          />
          <button
            className="border-solid border-2 border-white p-2 rounded-md"
            type="submit"
          >
            Send
          </button>
        </form>
      </div>
    </main>
  );
}
