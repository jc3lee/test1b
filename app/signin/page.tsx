import CustomSignInBtnGroup from "@/components/custom-signin";
import { auth } from "../../auth";
import { redirect } from "next/navigation";
export default async function CustomSignIn() {
  const session = await auth();
  if (session?.user) {
    redirect("/");
  }
  return (
    <>
      <CustomSignInBtnGroup />
    </>
  );
}
