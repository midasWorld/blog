import { signOut } from "next-auth/react";
import { FiLogOut } from "react-icons/fi";

export default function SignOutButton() {
  return (
    <button onClick={() => signOut()} className="hover:scale-110">
      <FiLogOut />
    </button>
  );
}
