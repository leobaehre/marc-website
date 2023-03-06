import Head from "next/head";
import Footer from "../components/footer";
import Header from "../components/header";
import Background from "../components/background";

import Image from "next/image";
import Link from "next/link";
export default function Publicaties() {
  return (
    <div>
      <Head>
        <title>Marc de Krosse</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/logo-color.svg" />
        <link rel="stylesheet" href="https://use.typekit.net/qjb8mfi.css" />
      </Head>
      <main className="relative bg-black h-screen overflow-hidden">
        <Background />
        <Header />
        <div className="relative h-screen mx-auto container">
          <h1 className="text-6xl font-medium mb-4 text-white">Publicaties</h1>

          <div className="flex flex-col items-center justify-center text-white">
            <Link href="/publications/books" className="">
              <button className="btn relative inline-flex items-center justify-start overflow-hidden transition-all bg-black rounded hover:bg-black group">
                <span className="w-0 h-0 rounded bg-vera-orange absolute top-0 left-0 ease-out duration-500 transition-all group-hover:w-full group-hover:h-full -z-1"></span>
                <span className="w-full text-white transition-colors duration-300 ease-in-out group-hover:text-white z-10">
                  <p className="p-2">Books</p>
                </span>
              </button>
            </Link>

            <Link href="/publications/expos" className="">
              <button className="btn relative inline-flex items-center justify-start overflow-hidden transition-all bg-black rounded hover:bg-black group">
                <span className="w-0 h-0 rounded bg-vera-orange absolute top-0 left-0 ease-out duration-500 transition-all group-hover:w-full group-hover:h-full -z-1"></span>
                <span className="w-full text-white transition-colors duration-300 ease-in-out group-hover:text-white z-10">
                  <p className="p-2">Expos</p>
                </span>
              </button>
            </Link>

            <Link href="/publications/posters" className="">
              <button className="btn relative inline-flex items-center justify-start overflow-hidden transition-all bg-black rounded hover:bg-black group">
                <span className="w-0 h-0 rounded bg-vera-orange absolute top-0 left-0 ease-out duration-500 transition-all group-hover:w-full group-hover:h-full -z-1"></span>
                <span className="w-full text-white transition-colors duration-300 ease-in-out group-hover:text-white z-10">
                  <p className="p-2">Posters</p>
                </span>
              </button>
            </Link>

            <Link href="/publications/socialmedia" className="">
              <button className="btn relative inline-flex items-center justify-start overflow-hidden transition-all bg-black rounded hover:bg-black group">
                <span className="w-0 h-0 rounded bg-vera-orange absolute top-0 left-0 ease-out duration-500 transition-all group-hover:w-full group-hover:h-full -z-1"></span>
                <span className="w-full text-white transition-colors duration-300 ease-in-out group-hover:text-white z-10">
                  <p className="p-2">Social media</p>
                </span>
              </button>
            </Link>

            <Link href="/publications/vinyls" className="">
              <button className="btn relative inline-flex items-center justify-start overflow-hidden transition-all bg-black rounded hover:bg-black group">
                <span className="w-0 h-0 rounded bg-vera-orange absolute top-0 left-0 ease-out duration-500 transition-all group-hover:w-full group-hover:h-full -z-1"></span>
                <span className="w-full text-white transition-colors duration-300 ease-in-out group-hover:text-white z-10">
                  <p className="p-2">Vinyls</p>
                </span>
              </button>
            </Link>
          </div>
        </div>
        <Footer />
      </main>
    </div>
  );
}