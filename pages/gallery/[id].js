import fs from 'fs';
import path from 'path';
import React from 'react';

const Gallery = ({ folderName, images }) => {

  return (
    <div className="flex flex-wrap">
      <h1 className="text-2xl font-bold">{`This is the gallery for the folder "${folderName}"`}</h1>
      {images && images.length > 0 ? (
        <div className="flex flex-wrap">
          {images.map(image => (
            <img
              key={image.name}
              src={`/images/${folderName}/${image.name}`}
              className="w-48 h-48 object-cover object-center m-4"
            />
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

export const getStaticProps = async ({ params }) => {
  const folderName = params.id;
  const folderPath = path.join(process.cwd(), 'public', 'images', folderName);
  const images = await new Promise((resolve, reject) => {
    fs.readdir(folderPath, (err, files) => {
      if (err) {
        reject(err);
      } else {
        resolve(files.map(file => ({ name: file })));
      }
    });
  });

  return { props: { folderName, images } };
};

export default Gallery;
