import { AuthProvider } from "@/hooks/useAuth";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
  // Ensures users are logged in or returned to the login page
  <AuthProvider>
    <Component {...pageProps} />
  </AuthProvider>
  );
}
