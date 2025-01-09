import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Poppins } from "next/font/google";
import { Provider } from "react-redux";
import store from "@/lib/redux/store";

const poppins = Poppins({
  weight: ["400", "700", "800", "900"],
  subsets: ["latin"],
});

export default function App({
  Component,
  pageProps: { ...pageProps },
}: AppProps) {
  return (
    <main className={poppins.className}>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </main>
  );
}
