import { signIn, signOut } from "@/auth";
import { redirect } from "next/navigation";
import React from "react";

function Signin({ proName, proId }: { proName?: string; proId?: string }) {
  async function actionSignin() {
    "use server";
    const url = await signIn(proId, { redirect: false });
    redirect(url);
  }
  return (
    <form action={actionSignin}>
      <button>Sign In {proName}</button>
    </form>
  );
}

function Signout() {
  async function actionSignOut() {
    "use server";
    await signOut({
      redirectTo: "http://localhost:3000",
    });
  }
  return (
    <form action={actionSignOut}>
      <button>Sign Out</button>
    </form>
  );
}

export { Signin, Signout };
