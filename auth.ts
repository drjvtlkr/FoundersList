import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import GitHub from "next-auth/providers/github"
import Discord from "next-auth/providers/discord"
import Credentials from "next-auth/providers/credentials"
import {z} from "zod";
 
export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [Google, GitHub, Discord, Credentials({
    credentials: {
      email: {},
      password: {},
    },
    authorize: async (credentials) => {
      let user = null

      // logic to salt and hash password
      // const pwHash = saltAndHashPassword(credentials.password)

      // logic to verify if the user exists
      // user = await getUserFromDb(credentials.email, pwHash)

      if (!user) {
        // No user found, so this is their first attempt to login
        // Optionally, this is also the place you could do a user registration
        throw new Error("Invalid credentials.")
      }

      // return user object with their profile data
      return user
    },
  })],
  callbacks: {
    authorized: async ({ auth }) => {
      // Logged in users are authenticated, otherwise redirect to login page
      return !!auth
    },
  },
  pages:{
    signIn:"/login",
  }
});