import axios from 'axios';
import { IconFromURL } from '@/utils/IconFromURL';
import React from 'react';
import QisqaPageEdit from '@/components/pages/qisqa/QisqaPageEdit';
import Head from 'next/head';

const btnStyle = 'py-2 px-4 rounded bg-opacity-20 bg-black';

export default async function QisqaPage({ params }) {
  const awaitedParams = await params;

  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/qisqa-pages/${awaitedParams.qisqa}`
  );

  const links = response?.data?.data?.links || [];
  const bgImage = response?.data?.data?.bgImageName || 'kalon-buhara.jpg';
  const imgLogo = response?.data?.data?.image || `${process.env.NEXT_PUBLIC_BASE_URL}/qisqa.png`;
  const pageTitle = response?.data?.data?.title || '';

  const renderLinks = () => {
    return links.map(link => (
      <li key={link.id}>
        <a href={link.url} className={`${btnStyle} mb-2 flex items-center mb-2"`} target="_blank">
          <IconFromURL url={link.url} /> <span className="ml-3">{link.title}</span>
        </a>
      </li>
    ));
  };

  return (
    <div>
      <Head>
        <title>{pageTitle} | qisqa.uz - link in bio tool</title>
        <meta name="description" content={`${pageTitle} | qisqa.uz - link in bio tool`} />
        <meta property="og:title" content={`${pageTitle} | qisqa.uz`} />
        <meta
          property="og:image"
          content={process.env.NEXT_PUBLIC_BASE_URL + `/qisqa512-black.png`}
        />
      </Head>

      <div
        className="flex min-h-screen flex-col bg-no-repeat bg-cover bg-center text-white"
        // style={{ backgroundImage: 'url(/amir-temur-museum.jpg)' }}
        // style={{ backgroundImage: 'url(/minor-tash.jpg)' }}
        // style={{ backgroundImage: 'url(/uzb-hotel.jpg)' }}
        // style={{ backgroundImage: 'url(/metro.jpg)' }}
        // style={{ backgroundImage: 'url(/kalon-buhara.jpg)' }}
        // style={{ backgroundImage: 'url(/kalta-minor-khiva.jpg)' }}
        style={{ backgroundImage: `url(/${bgImage})`, filter: 'blur(0px)' }}
      ></div>
      <div className="absolute top-0 w-full h-full text-white">
        <div className="flex items-center justify-center flex-col mt-16">
          {imgLogo && (
            <img
              className="rounded-full w-32 object-cover block mb-4"
              src={imgLogo}
              alt={pageTitle}
            />
          )}
          <h1 className="text-3xl mb-4">{pageTitle}</h1>
          <ul>{renderLinks()}</ul>
        </div>

        <footer className="absolute bottom-4 left-1/2 text-2xl -translate-x-1/2">
          <a href="https://qisqa.uz" target="_blank" className="rounded underline py-1 px-4">
            qisqa.uz
          </a>
        </footer>

        <QisqaPageEdit />
      </div>
    </div>
  );
}
