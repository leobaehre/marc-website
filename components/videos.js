import Image from "next/image";

import Video1 from "../public/video1.png";
import Video2 from "../public/video2.png";
import Video3 from "../public/video3.png";
import Video4 from "../public/video4.png";

export default function Videos() {
  return (
    <>
      <div className="grid grid-cols-2 gap-4">
        <Image src={Video1} className="rounded-md" alt="Video1"></Image>
        <Image src={Video2} className="rounded-md" alt="Video2"></Image>
        <Image src={Video3} className="rounded-md" alt="Video3"></Image>
        <Image src={Video4} className="rounded-md" alt="Video4"></Image>
      </div>
    </>
  );
}
