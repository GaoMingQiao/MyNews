import "@/styles/globals.css";
import Head from "next/head";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import news from "@/reducers/news";
import { INTERNAL_HEADERS } from "next/dist/shared/lib/constants";

const store = configureStore({
  reducer: { news },
});

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Head>
        <title>Favorite news</title>
      </Head>
      <Component {...pageProps} />
    </Provider>
  );
}
