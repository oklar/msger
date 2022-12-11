import { getProviders } from "next-auth/react";
import Image from "next/image";
import SignInComponent from "./SignInComponent";

async function SignInPage() {
  const providers = await getProviders();

  return (
    <div>
      <div className="flex flex-col items-center">
        <Image
          className="rounded-full mx-2 object-cover"
          width={700}
          height={700}
          src="http://localhost:3000/messenger.png"
          alt="Meta Logo"
        />

        <SignInComponent providers={providers} />
      </div>
    </div>
  );
}

export default SignInPage;
