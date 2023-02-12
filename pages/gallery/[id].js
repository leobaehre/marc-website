import fs from 'fs';
import path from 'path';
import React from 'react';

import GalleryImage from '../../components/galleryimage';

const Gallery = ({ folderName, images }) => {

  return (
    <div className="flex flex-wrap">
      <h1 className="text-2xl font-bold">{`This is the gallery for the folder "${folderName}"`}</h1>
      {images && images.length > 0 ? (
        <div className="flex flex-wrap">
          {images.map(image => (
            <GalleryImage folderName={folderName} image={image} />
          ))}
        </div>
      ) : (
        <p className="text-xl">No images found in this folder.</p>
      )}
    </div>
  );
};

export const getStaticPaths = async () => {
  const imagesDirectory = path.join(process.cwd(), 'public', 'images');
  const folderNames = fs.readdirSync(imagesDirectory, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name);

  const paths = folderNames.map(folderName => ({
    params: { id: folderName },
  }));

  return { paths, fallback: false };
};


const fsp = require('fs').promises;

export const getStaticProps = async ({ params }) => {
  const folderName = params.id;
  const folderPath = path.join(process.cwd(), 'public', 'images', folderName);

  let images = [];

  const getImages = async (folder, parent) => {
    const files = await fsp.readdir(folder);
    for (const file of files) {
      const filePath = path.join(folder, file);
      const stats = await fsp.stat(filePath);
      if (stats.isDirectory()) {
        await getImages(filePath, file);
      } else if (['.jpg', '.jpeg', '.png', '.gif'].includes(path.extname(file).toLowerCase())) {

        var bandName = parent.split(',')[0];
        var date = parent.split(',')[1];

        images.push({
            name: parent ? `${parent}/${file}` : file,
            bandName,
            date: date,
          });
      }
    }
  };

  await getImages(folderPath);

  return { props: { folderName, images } };
};

export default Gallery;
