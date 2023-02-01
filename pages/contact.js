import Head from "next/head";
import Footer from "../components/footer";
import Header from "../components/header";

import Image from "next/image";

import Form from "../components/form";
import Background from "../components/background";
import Location from "../components/location";
import Socials from "../components/socials";

export default function Contact() {
  return (
    <div>
      <Head>
        <title>Marc de Krosse</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/logo-color.svg" />
        <link rel="stylesheet" href="https://use.typekit.net/qjb8mfi.css" />
      </Head>

      <main className="relative bg-black overflow-hidden">
        <Background />
        <Header />
          <div className="relative h-screen p-8 px-48">
            <h1 className="text-3xl font-medium mb-4 text-white">
              Neem contact met mij op
            </h1>
            <p className="mb-8 text-white">
              Heb jij een vraag of wil je gewoon hallo zeggen? Vul dan dit form
              uit en we zullen zo snel mogelijk met u in contact komen.
            </p>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <Form />
              </div>
              <div className="grid gap-8">
                <Location />
                <Socials />
              </div>
            </div>
            
          </div>
        <Footer /> 
      </main>

      <footer></footer>
    </div>
  );
}
