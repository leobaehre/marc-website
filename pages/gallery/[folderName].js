import Head from "next/head";
import Footer from "../../components/footer";
import Header from "../../components/header";
import Background from "../../components/background";

import fs from 'fs';
import path from 'path';
import React from 'react';
import fsp from 'fs/promises';


import GalleryBand from '../../components/galleryband';

const Gallery = ({ folderName, images }) => {

  return (
    <div>
      <Head>
        <title>Marc de Krosse</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/logo-color.svg" />
        <link rel="stylesheet" href="https://use.typekit.net/qjb8mfi.css" />
      </Head>

      <main className={"relative bg-black overflow-hidden" + (images.length <= 12 ? " h-screen" : "")}>
        <Background />
        <Header />
        <div className="relative mx-auto container pt-8">
          <h1 className="text-6xl font-medium mb-4 text-white">
            {folderName.toUpperCase()}
          </h1>
          {images && images.length > 0 ? (
            <div className="grid grid-cols-6 gap-16 pt-4 pb-10">
              {images.map((image, index) => (
                <GalleryBand folderName={folderName} image={image} key={index}/>
              ))}
            </div>
          ) : (
            <p className="text-xl text-white">{"No images found in this folder :("}</p>
          )}
        </div>
        <Footer />
      </main>

      <footer></footer>
    </div>
  );
};

export const getStaticPaths = async () => {
  const imagesDirectory = path.join(process.cwd(), 'public', 'images');

  // Get the names of all the subdirectories within the images directory
  const folderNames = fs.readdirSync(imagesDirectory, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name);

  // Create an array of objects with the folder names as the "params"
  const paths = folderNames.map(folderName => ({
    params: { folderName },
  }));

  // Return the paths array and set fallback to false
  return { paths, fallback: false };
};

export const getStaticProps = async ({ params }) => {
  const folderName = params.folderName;
  const folderPath = path.join(process.cwd(), 'public', 'images', folderName);

  let images = [];

  // Recursively read the files within the folder
  const getImages = async (folder, parent) => {
    const files = await fsp.readdir(folder);
    for (const file of files) {
      const filePath = path.join(folder, file);
      const stats = await fsp.stat(filePath);
      if (stats.isDirectory()) {
        await getImages(filePath, file);
      } else if (file === 'thumbnail.jpg') {
        const [bandName, date] = parent.split(', ');
        images.push({
          name: parent ? `${parent}/${file}` : file,
          bandName,
          date
        });
      }
    }
  };

  // Call the getImages function to get the images
  await getImages(folderPath);

  // Return the folderName and images as props
  return { props: { folderName, images } };
};

export default Gallery;
