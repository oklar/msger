import { Session } from "inspector";
import { unstable_getServerSession } from "next-auth";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import LogoutButton from "./LogoutButton";

type Props = {
  session: any;
};

function Header({ session }: Props) {
  if (session)
    return (
      <header className="sticky top-0 z-50 bg-white flex justify-between items-center p-10 showdow-sm">
        <div className="flex space-x-2">
          <Image
            className="rounded-full mx-2 object-contain"
            height={10}
            width={50}
            src={session.user?.image!}
            alt="Profile Picture"
          />
          <div>
            <p className="text-lime-400">Logged in as:</p>
            <p className="font-bold text-lg">{session.user?.name}</p>
          </div>
        </div>

        <LogoutButton />
      </header>
    );

  return (
    <header className="sticky top-0 z-50 bg-white flex justify-center items-center p-10 showdow-sm">
      <div className="flex flex-col items-center space-y-5">
        <div className="flex space-x-2 items-center">
          <div className="text-4xl">🥝</div>
          <p className="text-lime-400">Welcome to MSGR</p>
        </div>

        <Link
          className="bg-lime-500 hover:bg-lime-700 text-white font-bold py-2 px-4 rounded"
          href="/auth/signin"
        >
          Sign In
        </Link>
      </div>
    </header>
  );
}

export default Header;
