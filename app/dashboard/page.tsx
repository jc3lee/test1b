import { auth } from "@/auth";
import Image from "next/image";

export default async function Dashboard() {
  const session = await auth();
  if (!session)
    return (
      <div className="flex flex-col content-center w-full">
        <h1 className=" text-center text-4xl mt-8">Dashboard</h1>
        <p className=" text-center mt-4">Please login</p>
      </div>
    );
  console.log("session", JSON.stringify(session, null, 2));
  return (
    <div className="flex flex-col content-center w-full">
      <h1 className=" text-center text-4xl mt-8">Dashboard</h1>
      <Image
        className="rounded-full mt-4 object-cover border border-white mx-auto w-20 h-20"
        src={session.user?.image || ""}
        alt={session.user?.name || "Avatar"}
        width={200}
        height={200}
      />
      <p className=" text-center mt-6">Name: {session.user?.name}</p>
      <p className=" text-center mt-4">Email: {session.user?.email}</p>
    </div>
  );
}
