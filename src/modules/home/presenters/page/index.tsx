"use client";
import { useGetPokemonQuery } from "@/modules/common/presenters";
import { signIn, signOut } from "next-auth/react";

export default function Home() {
  const { data } = useGetPokemonQuery(1);
  const { error } = useGetPokemonQuery(199999999);
  console.log(data, "data");
  console.log(error, "error");

  return (
    <main className="flex flex-col items-center justify-between min-h-screen p-24">
      <div className="z-10 items-center justify-between w-full max-w-5xl font-mono text-sm lg:flex">
        <button
          onClick={() => {
            signIn("google");
          }}
          className=""
        ></button>
        <button onClick={() => signOut()}></button>
      </div>
    </main>
  );
}
