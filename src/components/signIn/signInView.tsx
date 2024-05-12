import { signInAction } from "@/serverActions/signInAction";

export const SignInView = () => {
  return (
    <form
      action={async () => {
        "use server";
        await signInAction();
      }}
    >
      <button>サインイン</button>
    </form>
  );
};
