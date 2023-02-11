import Image from "next/image";

import D_ABC from "../public/disks/abc.png";
import D_DEF from "../public/disks/def.png";
import D_GHI from "../public/disks/ghi.png";
import D_JKL from "../public/disks/jkl.png";
import D_MNO from "../public/disks/mno.png";
import D_PQR from "../public/disks/pqr.png";
import D_STU from "../public/disks/stu.png";
import D_VW from "../public/disks/vw.png";
import D_XYZ from "../public/disks/xyz.png";

export default function Gallery() {
  var disks = [];

  disks.push({
    img: D_ABC,
    name: "abc",
  });
  disks.push({
    img: D_DEF,
    name: "def",
  });
  disks.push({
    img: D_GHI,
    name: "ghi",
  });
  disks.push({
    img: D_JKL,
    name: "jkl",
  });
  disks.push({
    img: D_MNO,
    name: "mno",
  });
  disks.push({
    img: D_PQR,
    name: "pqr",
  });
  disks.push({
    img: D_STU,
    name: "stu",
  });
  disks.push({
    img: D_VW,
    name: "vw",
  });
  disks.push({
    img: D_XYZ,
    name: "xyz",
  });

  return (
    <>
      <div className="inline-grid grid-cols-3 gap-4 pb-16">
        {disks.map((value, index) => {
          return (
            <>
              <a href={"gallery/" + value.name}>
                <div className="h-full w-full">
                  <Image src={value.img} alt={"disk: " + index} />
                </div>
              </a>
            </>
          );
        })}
      </div>
    </>
  );
}
