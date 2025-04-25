import React from "react";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";
const LoginButton = () => {
  return (
    <header>
      <SignedOut>
        <SignInButton className="cursor-pointer" />
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </header>
  );
};

export default LoginButton;
