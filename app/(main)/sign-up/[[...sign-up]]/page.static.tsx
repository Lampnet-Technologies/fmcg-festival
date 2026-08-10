import SignUpRedirect from "./SignUpRedirect";

export const dynamic = "force-static";
export const dynamicParams = false;

export async function generateStaticParams() {
  return [{ "sign-up": [] }];
}

export default function SignUpPage() {
  return <SignUpRedirect />;
}
