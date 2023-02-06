import Image from "next/image";

export default function Jumbotron() {
  return (
    <>
      <div className="relative z-10 container mx-auto my-2 p-2 flex flex-col lg:flex-row gap-2 flex-between justify-between pt-9">
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
        <div className="text-white py-2 text-right">
          <p>
          Vang de energie en opwinding van live muziek op. <br/> Als concertfotograaf streef ik ernaar om tijd stil te zetten  <br/> en herinneringen vast te leggen van onvergetelijke muzikale belevenissen. <br/> Van de felle lichten op het podium tot de passievollegezichten in het publiek, <br/> elke foto vertelt het verhaal van de vreugde en opwinding van live optredens.
          </p>
        </div>
      </div>
    </>
  );
}

/*

*/
