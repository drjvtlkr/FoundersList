import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { FcGoogle } from "react-icons/fc";
import { FaDiscord } from "react-icons/fa6";

import React from "react";
import { signIn } from "@/auth";
import { handleGoogleSignin } from "../actions/authActions";
// import { signIn } from "@/auth";

// const SignIn (){
//   return <button onClick={()=> signIn}></button>
// }

const Login = () => {
  return (
    <div className="hover:scale-105 transition-all duration-300 ease-in-out mt-48 max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white border-2 border-indigo-500 dark:bg-black">
      <h1 className="font-bold text-4xl text-neutral-800 dark:text-neutral-200">
        Welcome back to
        <br />
        <span className="text-indigo-500 underline underline-offset-2">
          FoundersList
        </span>
      </h1>
      <p className="text-neutral-600 text-lg max-w-sm mt-2 dark:text-neutral-300">
        Glad to have you back😄..
      </p>
      <form>
        <Label htmlFor="email" className="text-2xl">
          Email
        </Label>
        <Input
          id="email"
          placeholder="your@email.com"
          type="email"
          name="email"
          className="rounded hover:scale-105 transition-all duration-300 ease-in-out"
        />

        <Label htmlFor="password" className="text-2xl">
          Password
        </Label>
        <Input
          id="password"
          placeholder="***********"
          type="password"
          name="password"
          className="rounded placeholder:text-muted-foreground hover:scale-105 transition-all duration-300 ease-in-out"
        />

        <div className="py-8">
          <button className="hover:rounded hover:scale-105 transition-all duration-300 ease-in-out rounded bg-gradient-to-br relative group/btn from-indigo-500 dark:from-zinc-900 dark:to-zinc-900 to-indigo-700 block dark:bg-zinc-800 w-full text-white h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]">
            SignIn &rarr;
          </button>
        </div>
      </form>
      <span className="flex justify-center items-center">or</span>

      <form
        action={async () => {
          "use server";
          await signIn("google", { redirectTo: "/" });
        }}>
        {/* action={handleGoogleSignin}> */}
        <Button
          variant="outline"
          type="submit"
          className="w-full hover:rounded hover:scale-105 transition-all duration-300 ease-in-out">
          <FcGoogle className="h-4 w-4 mr-2" />
          Sign in with Google
        </Button>
      </form>
      <form
        className="w-full my-4"
        action={async () => {
          "use server";
          await signIn("github", { redirectTo: "/" });
        }}>
        <Button
          variant="outline"
          type="submit"
          className="w-full hover:rounded hover:scale-105 transition-all duration-300 ease-in-out">
          <GitHubLogoIcon className="h-4 w-4 mr-2" />
          Sign in with GitHub
        </Button>
      </form>
      <form
        className="w-full my-4"
        action={async () => {
          "use server";
          await signIn("discord", { redirectTo: "/" });
        }}>
        <Button
          variant="outline"
          type="submit"
          className="w-full hover:rounded hover:scale-105 transition-all duration-300 ease-in-out">
          <FaDiscord className="h-4 w-4 mr-2" />
          Sign in with Discord
        </Button>
      </form>
    </div>
  );
};

export default Login;
