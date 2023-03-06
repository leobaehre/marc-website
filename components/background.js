// SVG BLOBS
import Blob01 from "../public/blob1.svg";
import Blob02 from "../public/blob2.svg";

export default function Background() {
  return (
    <div className="">
      <div className="absolute bottom-0 right-0">
        <Blob01 className="blur-back transform -translate-x-[40%] -translate-y-[5%]" />
      </div>
      <div className="absolute top-0 left-0">
        <Blob02 className="blur-back transform translate-x-[20%] -translate-y-[10%] " />
      </div>
    </div>
  );
}
