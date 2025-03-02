import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Poppins } from "next/font/google";
import { Provider } from "react-redux";
import store from "@/lib/redux/store";
import "react-tooltip/dist/react-tooltip.css";
import { Tooltip } from "react-tooltip";

const poppins = Poppins({
  weight: ["400", "700", "800", "900"],
  subsets: ["latin"],
});

export default function App({
  Component,
  pageProps: { ...pageProps },
}: AppProps) {
  return (
    <>
      {/* Component Sementara */}
      <Tooltip
        id="text-tooltip"
        style={{
          backgroundColor: "white",
          color: "black",
          zIndex: 999,
          fontSize: "20px",
        }}
      />
      <Tooltip
        id="image-tooltip"
        style={{
          backgroundColor: "black",
          color: "white",
          zIndex: 999,
          fontSize: "20px",
        }}
      />
      {/* Component Sementara */}
      <main className={poppins.className}>
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </main>
    </>
  );
}
