import Decode from "jwt-decode";
import { cookies } from "next/headers";

interface User {
  sub: string;
  name: string;
  avatarUrl: string;
}

export function getUser(): User {
  const token = cookies().get("token")?.value;

  if (!token) {
    throw new Error("Unauthenticated");
  }

  const user: User = Decode(token);

  return user;
}
