import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import { cookies } from "next/headers";

const handler = NextAuth({
    pages: {    
        signIn: '/login/',
        // signOut: '/auth/signout',
        // error: '/auth/error',
        // verifyRequest: '/auth/verify-request',
       
        },
  providers: [
    CredentialsProvider({
       
        name: 'Credentials',
        
        credentials: {
          email: { label: "email", type: "email", placeholder: "" },
          password: { label: "Password", type: "password" }
        },
        async authorize(credentials, req) {
            

            if(!credentials){
                return null;
            }
           
            try{
                const response = await fetch("http://localhost:5129/api/auth/login", {
                    method: 'POST',
                    body: JSON.stringify({
                        email: credentials.email,
                        password:credentials.password
                    }),
                    headers: { "Content-Type": "application/json" }
                })

                if(response.status !==200) return null;

                const authData = await response.json();
                console.log(authData);

            
                if (!authData.jwt && !authData.userAcess) return null;

                (await cookies()).set("jwt", authData.jwt);

                return {
                    id:authData.userAcess.id,
                    email:authData.userAcess.email,
                    name:authData.userAcess.name
                }
            } catch (erro) {
                console.error(erro);
                return null;
            }
        }
      })
  ],
//   callbacks: {
//     async jwt({ jwt, user }) {
//       if (user) {
//         jwt.accessjwt = user.jwt;
//       }
//       return jwt;
//     },
//     async session({ session, jwt }) {
//       session.accessjwt = jwt.accessjwt;
//       return session;
//     },
//   },
  secret: process.env.NEXTAUTH_SECRET,
})

export { handler as GET, handler as POST }