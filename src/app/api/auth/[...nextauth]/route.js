import NextAuth from "next-auth/next";
import GoogleProvider from 'next-auth/providers/google'
import {MongoDBAdapter} from '@auth/mongodb-adapter'
import clientPromise from "../../../../../lib/mongodb";
import User from "../../../../../models/User";
import mongoose from "mongoose";



// const handler = NextAuth({
//     providers: [
//       GoogleProvider({
//         clientId: process.env.GOOGLE_CLIENT_ID,
//         clientSecret: process.env.GOOGLE_CLIENT_SECRET,   
  
//       }),
//     ],
//     adapter: MongoDBAdapter(clientPromise),   
//    // Assuming clientPromise is a configured MongoDB connection
//     session: {
//       strategy: 'jwt',
//     },
//     callbacks: {
//       async signIn({ user, account, profile }) {
//         try {
//           await mongoose.connect(process.env.MONGODB_URI);
  
//           const existingUser = await User.findOne({ email: user.email });
  
//           if (!existingUser) {
//             const newUser = new User({
//               fullName: profile.name,
//               email: profile.email,
//               emailVerified: user.emailVerified ?? false,
//               provider: account.provider,
//               providerId: profile.sub,
//               profilePic: profile.image,
//             });
//             await newUser.save();
//           } else {
//             // Update existing user if needed
//             existingUser.profilePic = profile.picture;
//             existingUser.emailVerified = user.emailVerified ?? existingUser.emailVerified;
//             await existingUser.save();
//           }
  
//           console.log('User signed in or created successfully.');
//           return true;
//         } catch (error) {
//           console.error('Error signing in user:', error);
//           return false; // Indicate sign-in failure
//         } finally {
//           await mongoose.disconnect(); // Close connection after operation
//         }
//       },
//       async jwt({ token, user }) {
//         if (user) {
//           token.id = user.id;
//         }
//         return token;
//       },
//       async session({ session, token }) {
//         session.user.id = token.id;
//         return session;
//       },
//     },
//   });
  
  // Export   
//    for API routes (modify as needed)
//   export const config = {
//     api: {
//       bodyParser: false, // Disallow body parsing for NextAuth routes
//     },
//   };


const handler = NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET
        })
    ],
    adapter: MongoDBAdapter(clientPromise),
    session: {
        strategy: 'jwt',
    },
    callbacks: {
        async signIn({user, account, profile}) {

            await mongoose.connect(process.env.MONGODB_URI)


            const existingUser = await User.findOne({email: user.email})

            if(!existingUser) {
                const newUser = new User({
                    name: profile.name,
                    email: profile.email,
                    emailVerified: user.emailVerified ?? false,
                    provider: account.provider,
                    providerId: profile.sub,
                    image: user.image
                })
                await newUser.save()
            } else {
                // Update existing user if needed
                existingUser.image = profile.picture;
                existingUser.emailVerified = user.emailVerified ?? existingUser.emailVerified;
                await existingUser.save();
            }
            
            return true;
        },
        async jwt({token, user}) {
            if (user) {
                token.id = user.id
            }
            return token;
        },
        async session({session, token}) {
            session.user.id = token.id;
            return session
        }
    }
})

export { handler as GET, handler as POST}