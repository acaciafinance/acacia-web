'use client'
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "@/redux/store";
import Head from "next/head";
// import { SessionProvider } from "next-auth/react";

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({ 
  subsets: ["latin"], 
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
})


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* <title>
          Quizzo
        </title> */}
      </head>
      <body className={poppins.className}>
        {/* <SessionProvider> */}
          <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
              {/* <NextAuthProvider> */}
                {children}
              {/* </NextAuthProvider> */}
            </PersistGate>
          </Provider>

        {/* </SessionProvider> */}
      </body>
    </html>
  );
}
