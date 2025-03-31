import NextAuth, { CredentialsSignin } from "next-auth";
import CredentialProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";

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
      authorize : async({ email , password}) => {
        console.log(email, password);
        if (typeof email !== "string")
          throw new CredentialsSignin("Email is required");
        const user = { email: "absn", id: "1223" };
        
        if(password !== "passcode") {
          throw new CredentialsSignin("Invalid password");
        }
        return user;
      },
    }),
  ],
  pages : {
    signIn : "/login",
  }
});
