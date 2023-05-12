import { prisma } from "@/db/prisma";

export async function isAdmin(email: string): Promise<boolean> {
  const admin = await prisma.user.findUnique({
    where: { email },
  });
  return admin != null;
}
