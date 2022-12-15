import Image from "next/image";

import LatestWork from "../public/latestwork.png";

export default function LatestWorkCard() {
  // div in center with tailwindcss
  return (
    <>
      <div className="relative z-10 mx-auto my-2 p-2 flex flex-row flex-between h-96">
        <Image src={LatestWork} alt="a"/>
      </div>
    </>
  );
}
