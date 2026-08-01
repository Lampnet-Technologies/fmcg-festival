import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
  return (
    <main className="flex-1 bg-[#f8f8f5] py-16 px-6 flex items-center justify-center">
      <SignIn />
    </main>
  );
}
