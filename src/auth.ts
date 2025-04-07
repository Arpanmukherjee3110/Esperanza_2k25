import NextAuth, { CredentialsSignin } from "next-auth";
import CredentialProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import { User } from "@/models/user.model";
import { connectDB } from "./utils/db/connect";
import { compare } from "bcryptjs";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    CredentialProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      authorize: async function (credentials) {
        const email = credentials.email as string;
        const password = credentials.password as string;

        console.log(email, password);
        

        if (!email || !password) {
          throw new CredentialsSignin("Invalid credentials");
        }
        await connectDB();
        const user = await User.findOne({ email: email });
        console.log(user);
        
        if (!user) {
          throw new CredentialsSignin({
            cause: "User not found",
          });
        }
        if (!user.credentials?.password) {
          throw new CredentialsSignin({
            cause: "Invalid Credentials",
          });
        }
        const isMatch = compare(password, user.credentials.password);
        if (!isMatch) {
          throw new CredentialsSignin({
            cause: "Invalid password",
          });
        } else {
          return {
            name: user.name,
            department: user.department,
            email: user.credentials.email,
            phoneNumber: user.credentials.phoneNumber,
            bio: user.bio,
            registeredEvents: user.registeredEvents,
          };
        }
      },
    }),
  ],
  // pages: {
  //   signIn: "/login",
  // },
});
