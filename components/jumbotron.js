import Image from "next/image";

export default function Jumbotron() {
  return (
    <>
      <div className="relative z-10 container mx-auto my-2 p-2 flex flex-col md:flex-row gap-2 flex-between justify-between pt-9">
        <div>
          <h1 className="text-white font-9xl font-azo-sans-web text-6xl leading-12">
            <span className="font-black">
              MARC
              <br />
            </span>
            <span className="font-medium">
              DE
              <br />
            </span>
            <span className="font-bold">
              KROSSE
              <br />
            </span>
          </h1>
          <h2>
            <span className="text-gray-400 font-azo-sans-web font-bold text-xl leading-snug">
              CONCERT PHOTOGRAPHER
            </span>
          </h2>
        </div>
        <div className="text-white p-2">
          <p>
            Welcome on this website. here you see the videos and photos that
            Marc de Krosse made at Vera concerts.
          </p>
        </div>
      </div>
    </>
  );
}

/*

*/
