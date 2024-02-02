import TodoElement from "@/components/TodoElement";
import { prisma } from "@/data";
import Image from "next/image";
import Link from "next/link";

function GetTodo() {
  return prisma.todo.findMany();
}
interface todoData {
  id: number;
  title: string;
  complete: boolean;
  createAt: Date;
  updateAt: Date;
}

async function todoToggle(id: number, complete: boolean) {
  "use server";

  console.log(id, complete);
  await prisma.todo.update({ where: { id }, data: { complete } });
  // prisma.todo.update({ where: { id }, data: { complete } });
}

export default async function Home() {
  const todo = await GetTodo();
  // await prisma.todo.create({
  //   data: { title: "test", complete: false },
  // });

  return (
    <>
      <header className="mb-4 flex justify-between bg-slate-800 p-5 backdrop-blur-lg items-center ">
        <h1 className="text-3xl">Todo</h1>
        <Link
          href="/new"
          className="text-lg border-2 p-2 rounded-md hover:text-xl hover:bg-gray-950 transition-all active:scale-90"
        >
          New
        </Link>
      </header>
      <ul className="pl-4">
        {todo.map((todo: todoData) => (
          <div key={todo.id}>
            <TodoElement {...todo} todoToggle={todoToggle} />
          </div>
        ))}
      </ul>
    </>
  );
}
