import { prisma } from "@/data";
import { redirect } from "next/navigation";
import Link from "next/link";
import React from "react";

async function createTodo(data: FormData) {
  "use server";
  const title = data.get("title")?.valueOf();
  if (typeof title !== "string" || title.length === 0) {
    throw new Error("Invalid Title");
    // return console.log("invalid title");
  }
  await prisma.todo.create({ data: { title, complete: false } });
  redirect("/");
}

const Page = () => {
  return (
    <>
      <header className="mb-4 flex justify-between bg-slate-800 p-5 backdrop-blur-lg items-center ">
        <h1 className="text-3xl">Create New Todo</h1>
        <Link
          href="/"
          className="text-lg border-2 p-2 rounded-md hover:text-xl hover:bg-gray-950 transition-all active:scale-90"
        >
          Back
        </Link>
      </header>
      <form className="flex gap-4 flex-col w-1/2 mx-auto" action={createTodo}>
        <input
          type="text"
          name="title"
          className=" p-3 oultine-none  border border-white rounded-md bg-transparent focus-within:border-slate-200"
        />
        <button
          type="submit"
          className="p-3 bg-transparent border border-white hover:bg-[#ffffff42] active:scale-95 w-40 rounded-sm"
        >
          Create{" "}
        </button>
      </form>
    </>
  );
};

export default Page;
