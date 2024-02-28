import { auth } from "@/auth.config";
import { redirect } from "next/navigation";
import Image from "next/image";

export default async function ProfilePage() {
  const session = await auth();

  if (!session?.user) {
    redirect("/");
  }

  return (
    <div className="w-1/2 flex flex-col items-center gap-2">
      <h2 className="text-center text-xl font-bold antialiased ">Mi Perfil</h2>
      {session.user.image ? (
        <Image
          src={session.user.image}
          className="rounded-full"
          alt="User Image"
          width={100}
          height={100}
        />
      ) : (
        <span>No Image</span>
      )}

      <span className="font-bold text-md">{session.user.name}</span>
      <span className="text-md">{session.user.email}</span>
    </div>
  );
}
