import Image from "next/image";

export default function GalleryBuilder() {
  function importAll(r) {
    return r.keys().map(r);
  }

  const files = importAll(
    require.context("../images", true, /\.(png|jpe?g|svg)$/)
  );

  const images = [];

  for (let i = 0; i < files.length; i++) {
    const splitted = files[i].default.src.split("/")[4].split(", ");

    const filename = files[i].default.src;
    const name = splitted[0];
    const date = splitted[1]?.replace("(", "").replace(")", "").split(".")[0];

    images.push({
      name: filename,
      bandname: name,
      date: date,
    });
  }

  return (
    <section className="overflow-hidden">
      <div className="container mx-auto px-5 py-2 pt-4">
        <div className="flex flex-wrap -m-1 md:-m-2">
          <div className="flex flex-wrap w-1/2"></div>
        </div>
      </div>
      <div className="grid grid-cols-4 p-16 gap-8 pt-3">
        {images.map((value, index) => {
          return (
            <>
              <div>
                <Image
                  src={value.name}
                  alt={"Picture " + index}
                  width={500}
                  height={500}
                  className="block object-cover object-center rounded-lg"
                />
                <div className="mt-4">
                  <h3 className="text-white font-azo-sans-web text-lg title-font font-medium mb-1">
                    {value.bandname}
                  </h3>
                  <p className="text-white font-azo-sans-web text-base">
                    {value.date}
                  </p>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </section>
  );
}
