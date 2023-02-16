export default function GalleryBand({ folderName, image }) {

    const bandName = image.bandName.length > 40 ? image.bandName.slice(0, 38).replace("{colon}", ";") + "..." : image.bandName.replace("{colon}", ";");

    return (
        <div className="flex justify-center">
            <a
                href={`/gallery/${folderName}/${image.bandName}`}
                className="p-1 border-2 border-transparent hover:border-white rounded-lg transition-all duration-100"
                >
                <div className="w-48 h-48 rounded-lg overflow-hidden">
                    <img
                        src={`/images/${folderName}/${image.name}`}
                        className="w-full h-full object-cover scale-125 "
                    />
                </div>
                
                <div className="mt-4 text-center text-white">
                    <p className="font-bold text-lg leading-tight break-all max-w-48">{bandName}</p>
                    <p className="text-sm leading-tight break-all max-w-48">{image.date}</p>
                </div>
            </a>
        </div>
    );
}
