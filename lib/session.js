import { getServerSession } from "next-auth";
import { authOptions } from "../src/pages/api/auth/[...nextauth]/route";

export async function getSessionServerSide(context) {
    return await getServerSession(context.req, context.res, authOptions);
}
