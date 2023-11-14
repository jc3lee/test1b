// import { auth } from "../../../auth";
// import { NextApiRequest, NextApiResponse } from "next";

// export default async function handler(
//   req: NextApiRequest,
//   res: NextApiResponse
// ) {
//   const session = await auth(req, res);
//   if (session) return res.json("Success");
//   return res.status(401).json("You must be logged in.");
// }

import { auth } from "../../../auth";

export const GET = auth((req) => {
  if (req.auth) {
    return Response.json({ data: "Protected data" });
  }

  return Response.json({ message: "Not authenticated" }, { status: 401 });
});
