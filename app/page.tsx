import Link from "next/link";
import { auth } from "@clerk/nextjs/server";

export default async function Home() {
  const { userId } = await auth();
  const href = userId ? "/notes" : "/new-user";

  return (
    <div className="w-screen h-screen bg-black flex justify-center items-center text-white">
      <div className="w-full max-w-[500px] mx-auto">
        <h1 className="text-6xl mb-4">Best Notes App</h1>
        <p className="text-2xl text-white/60 mb-4">
          This is the app for your notes.
        </p>
        <div>
          <Link href={href}>
            <button className="bg-orange-400 px-4 py-2 rounded-lg text-xl">
              Get Started
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
