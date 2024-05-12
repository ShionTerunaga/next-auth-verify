import { auth } from "@/auth";
import { SignInView } from "../signIn";
import Image from "next/image";
import { signOutAction } from "@/serverActions/signOutAction";

export const AccountInformation = async () => {
  const session = await auth();

  if (!session?.user)
    return (
      <div style={{ textAlign: "center", marginTop: 30 }}>
        <SignInView />
      </div>
    );

  return (
    <section
      style={{
        textAlign: "center",
      }}
    >
      <picture>
        <Image
          src={session.user.image ?? ""}
          width={100}
          height={100}
          alt="github"
          style={{
            borderRadius: "50%",
          }}
        />
      </picture>
      <div>
        <p>{session.user.name}</p>
        <p>{session.user.email}</p>
      </div>
      <form
        action={async () => {
          "use server";
          await signOutAction();
        }}
      >
        <button>サインアウト</button>
      </form>
    </section>
  );
};
