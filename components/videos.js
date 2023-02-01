import Video1 from "../public/video1.png";
import Video2 from "../public/video2.png";
import Video3 from "../public/video3.png";
import Video4 from "../public/video4.png";

export default function Videos() {
  return (
    <div className="flex flex-row gap-8">
      <div className="flex flex-col gap-8 pt-10">
        <div className="overflow-hidden rounded-lg">
          <img className="object-cover" src={Video1.src} alt="a" />
        </div>
        <div className="overflow-hidden rounded-lg">
          <img className="object-cover" src={Video2.src} alt="a" />
        </div>
      </div>
      <div className="flex flex-col gap-8">
        <div className="overflow-hidden rounded-lg">
          <img className="object-cover" src={Video3.src} alt="a" />
        </div>
        <div className="overflow-hidden rounded-lg pb-10" >
          <img className="object-cover pb-10" src={Video4.src} alt="a" />
        </div>
      </div>
    </div>
  );
}