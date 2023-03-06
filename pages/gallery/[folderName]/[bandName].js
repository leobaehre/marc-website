import Head from "next/head";
import Footer from "../../../components/footer";
import Header from "../../../components/header";
import Background from "../../../components/background";

import fs from 'fs';
import path from 'path';
import React from 'react';
import fsp from 'fs/promises';
import { useState } from 'react';

import GalleryImage from '../../../components/galleryimage';
import LightBox from '../../../components/lightbox';

const GalleryBand = ({ folderName, bandName, images }) => {

  const [currentImage, setCurrentImage] = useState(null);
  const [isLightBoxOpen, setIsLightBoxOpen] = useState(false);

  const handleLightBoxClose = () => {
    setIsLightBoxOpen(false);
  };

  const handleNextImage = () => {
    setCurrentImage(currentImage + 1 >= images.length ? 0 : currentImage + 1);
  };

  const handlePreviousImage = () => {
    setCurrentImage(currentImage - 1 < 0 ? images.length - 1 : currentImage - 1);
  };

  return (
    <div>
      <Head>
        <title>Marc de Krosse</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/logo-color.svg" />
        <link rel="stylesheet" href="https://use.typekit.net/qjb8mfi.css" />
      </Head>

      <main className={"relative bg-black overflow-hidden" + (images.length <= 16 ? " h-screen" : "")}>
        <Background />
        <Header />
        <div className="relative mx-auto container pt-8">
          <h1 className="text-6xl font-medium mb-4 text-white">
            {bandName.replace("{colon}", ";").toUpperCase()}
          </h1>
          {images && images.length > 0 ? (
            <div className="grid grid-cols-6 gap-16 pt-4 pb-10">
              {images.map((image, index) =>  (
                <GalleryImage folderName={folderName} image={image} key={index} onClick={() => {
                  setCurrentImage(index);
                  setIsLightBoxOpen(true);
                }}/>  
              ))}
            </div>
          ) : (
            <p className="text-xl">No images found for this band.</p>
          )}
        </div>
        <Footer />
      </main>
      
      {isLightBoxOpen && (
        <LightBox
          folderName={folderName}
          images={images}
          currentImage={currentImage}
          onClose={handleLightBoxClose}
          onNext={handleNextImage}
          onPrevious={handlePreviousImage}
        />
      )}

      <footer></footer>
    </div>
  );
};

export const getStaticPaths = async () => {
    const imagesDirectory = path.join(process.cwd(), 'public', 'images');
    const folderNames = fs.readdirSync(imagesDirectory, {
        withFileTypes: true
      })
      .filter(dirent => dirent.isDirectory())
      .map(dirent => dirent.name);
  
    const paths = [];
  
    for (const folderName of folderNames) {
      const folderPath = path.join(imagesDirectory, folderName);
      const names = fs.readdirSync(folderPath, {
          withFileTypes: true
        })
        .filter(dirent => dirent.isDirectory())
        .map(dirent => dirent.name);
  
      for (const name of names) {
        const bandName = name.split(', ')[0];
        paths.push({
          params: {
            folderName,
            bandName
          },
        });
      }
    }
  
    return {
      paths,
      fallback: false
    };
  };
  
  export const getStaticProps = async ({
    params
  }) => {
    const folderName = params.folderName;
    const bandName = params.bandName;
  
    var folderPath = path.join(process.cwd(), 'public', 'images', folderName);
  
    // get folder that starts with bandName
    let bandFolder = '';
    const folders = await fsp.readdir(folderPath);
    for (const folder of folders) {
      if (folder.startsWith(bandName)) {
        bandFolder = folder;
        break;
      }
    }
  
    folderPath = path.join(folderPath, bandFolder);
  
  
    let images = [];
  
    const getImages = async (folder) => {
  
      const files = await fsp.readdir(folder);
      for (const file of files) {
        const filePath = path.join(folder, file);
        const stats = await fsp.stat(filePath);
        if (!stats.isDirectory()) {
  
          images.push({
            name: bandFolder + "/" + file,
          });
        }
      }
    };
  
    await getImages(folderPath);
  
    return {
      props: {
        folderName,
        bandName,
        images
      }
    };
  };

export default GalleryBand;
