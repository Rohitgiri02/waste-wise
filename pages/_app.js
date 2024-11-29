import Navbar from "@/components/navbar";
import { ClerkProvider } from "@clerk/nextjs";
import "@/styles/globals.css";
export default function App({ Component, pageProps }) {
  return   <ClerkProvider>
  <Navbar></Navbar>
  <Component {...pageProps} />
</ClerkProvider>
   ;
}
