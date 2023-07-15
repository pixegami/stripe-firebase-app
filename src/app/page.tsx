"use client";

import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const signIn = async () => {
    goToAccount();
  };

  const rightArrow = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
      />
    </svg>
  );

  const goToAccount = () => {
    router.push("/account");
  };

  return (
    <>
      <div className="text-5xl md:text-6xl font-bold">
        <span className="text-transparent bg-clip-text bg-gradient-to-tr from-teal-400 to-blue-500">
          my app
        </span>
      </div>
      <div className="text-xl md:text-2xl font-light mb-8">
        Welcome! Let's get started.
      </div>
      <button
        onClick={signIn}
        className="bg-blue-600 p-4 px-6 text-lg rounded-lg hover:bg-blue-700 shadow-lg"
      >
        <div className="flex gap-2 items-center align-middle">
          Login With Google {rightArrow}
        </div>
      </button>
    </>
  );
}
