import SignInRedirect from "./SignInRedirect";

export const dynamic = "force-static";
export const dynamicParams = false;

export async function generateStaticParams() {
  return [{ "sign-in": [] }];
}

export default function SignInPage() {
  return <SignInRedirect />;
}
