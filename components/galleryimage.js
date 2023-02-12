import React from 'react';

export default function GalleryImage({ folderName, image }) {
    return (
        <div className="relative m-4">
            <img
            src={`/images/${folderName}/${image.name}`}
            className="w-48 h-48 object-cover object-center rounded-lg"
            />
            <div className="mt-4 text-center">
                <p className="font-bold">{image.bandName}</p>
                <p className="text-sm">{image.date}</p>
            </div>
        </div>
    );
}