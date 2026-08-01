import { SignUp } from "@clerk/nextjs";

export default function SignUpPage() {
  return (
    <main className="flex-1 bg-[#f8f8f5] py-16 px-6 flex items-center justify-center">
      <SignUp />
    </main>
  );
}
