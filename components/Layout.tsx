import { Inter } from 'next/font/google'
import Header from "./Header";
import Footer from "./Footer";
import {PropsWithChildren} from "react";

const inter = Inter({ subsets: ['latin'] })

export default function Layout({ children  }: PropsWithChildren<any>) {
  return (
    <>
      {/* <Header /> */}
      <main
        className={`flex min-h-screen items-center flex-col gap-8 p-24 ${inter.className}`}
      >
        {children}
      </main>
      {/* <Footer /> */}
    </>
  )
}
