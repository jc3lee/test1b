"use client";

import { signIn } from "next-auth/react";
import useSWR from "swr";

function CustomSignInBtnGroup() {
  const fetcher = (url: string) => fetch(url).then((res) => res.json());
  const { data, isLoading, error } = useSWR("/api/auth/providers", fetcher);
  console.log("data", data);
  console.log("isLoading", isLoading);
  console.log("error", error);
  return (
    <div className="flex flex-col content-center w-full">
      {data &&
        Object.values(data).map((provider: any) => (
          <div
            className="mx-auto text-xl mt-12 hover:bg-white hover:text-black py-2 px-4 border-2 border-white"
            key={provider.name}
          >
            <button
              onClick={() =>
                signIn(provider.id, {
                  callbackUrl: "http://localhost:3000",
                })
              }
            >
              Sign in with {provider.name}
            </button>
          </div>
        ))}
    </div>
  );
}

export default CustomSignInBtnGroup;
