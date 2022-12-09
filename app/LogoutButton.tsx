"use client";
import React from "react";

function LogoutButton() {
  return (
    <button
      onClick={() => console.log("heelo")}
      className="bg-lime-500 hover:bg-lime-700 text-white font-bold py-2 px-4 rounded"
    >
      Sign Out
    </button>
  );
}

export default LogoutButton;
