import LatestWork from "../public/latestwork.jpg";

export default function LatestWorkCard() {
  return (
    <>
      <div className="overflow-hidden rounded-lg">
        <img className="object-cover" src={LatestWork.src} alt="a"/>
      </div>
    </>
  );
}

