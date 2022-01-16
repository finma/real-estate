import Head from "next/head";

import Footer from "./Footer";
import Navbar from "./Navbar";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Real Estate</title>
      </Head>
      <div className="max-w-[1280px] m-auto">
        <header>
          {/* Navbar */}
          <Navbar />
        </header>
        <main>{children}</main>
        <footer>
          {/* Footer */}
          <Footer />
        </footer>
      </div>
    </>
  );
}
