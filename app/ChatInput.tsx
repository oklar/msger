"use client";
import React, { FormEvent, useState } from "react";

function ChatInput() {
  const [input, setInput] = useState("");

  const addMessage = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!input) return;

    const messageToSend = input;

    setInput("");
  };

  return (
    <form
      onSubmit={(e) => addMessage}
      className="fixed bottom-0 z-50 w-full flex px-10 py-5 space-x-2 border-t border-gray-100"
    >
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter your msg here..."
        className="flex-1 rounded border bor
        der-gray-300 focus:outline-none focus:ring-2 focus:ring-lime-600 focus:border-transparent px-5 py-3 disabled:opacity-50 disabled:cursor-not-allowed"
      />
      <button
        type="submit"
        disabled={!input}
        className="bg-lime-500 hover:bg-lime-700 text-white font-bold py-2 px-4 rounded disabled:cursor-not-allowed disabled:opacity-50"
      >
        Send
      </button>
    </form>
  );
}

export default ChatInput;
