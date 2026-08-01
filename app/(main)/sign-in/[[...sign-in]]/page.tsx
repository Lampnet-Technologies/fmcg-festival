import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
  return (
    <div className="flex-1 flex items-center justify-center py-20 px-6 bg-[#f4f4f0]">
      <SignIn 
        appearance={{
          elements: {
            formButtonPrimary: 'bg-[#0A2E1F] hover:bg-[#062015] text-sm normal-case',
            footerActionLink: 'text-[#0A2E1F] hover:text-[#062015] font-bold',
            card: 'shadow-md border border-gray-200 rounded-xl',
          }
        }}
      />
    </div>
  );
}
