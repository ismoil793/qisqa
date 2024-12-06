import axios from 'axios';
import { notFound } from 'next/navigation';
import { IconFromURL } from '@/utils/IconFromURL';
import React from 'react';
import QisqaPageEdit from '@/components/pages/qisqa/QisqaPageEdit';
import Head from 'next/head';
import QisqaPageLogo from '@/components/pages/qisqa/QisqaPageLogo';
import ShareContentBtn from '@/components/Button/ShareContentBtn';

const btnStyle = 'py-2 px-4 rounded bg-opacity-40 bg-black';

export default async function QisqaPage({ params }) {
  try {
    const awaitedParams = await params;
    const GET_PAGE_API_URL = `${process.env.NEXT_PUBLIC_BASE_URL}/api/qisqa-pages/${awaitedParams.qisqa}`;

    const response = await axios.get(GET_PAGE_API_URL);

    const links = response?.data?.data?.links || [];
    const bgImage = response?.data?.data?.bgImageName || 'kalon-buhara.jpg';
    const pageTitle = response?.data?.data?.title || '';
    const pageLogoURL = response?.data?.data?.image || undefined;

    const renderLinks = () => {
      return links.map(link => (
        <li key={link.id}>
          <a href={link.url} className={`${btnStyle} mb-2 flex items-center mb-2"`} target="_blank">
            <IconFromURL url={link.url} /> <span className="ml-2">{link.title}</span>
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
            <QisqaPageLogo pageTitle={pageTitle} pageLogoURL={pageLogoURL} />
            <h1 className="text-3xl mb-4 font-bold sm:max-w-xl max-w-xs">{pageTitle}</h1>
            <ul>{renderLinks()}</ul>
          </div>

          {/*<div className="flex items-center justify-center mt-10">*/}
          {/*  <ShareContentBtn*/}
          {/*    title={`${pageTitle} | qisqa.uz`}*/}
          {/*    url={`https://qisqa.uz/${awaitedParams.qisqa}`}*/}
          {/*  />*/}
          {/*</div>*/}

          <footer className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col justify-center items-center w-full">
            <ShareContentBtn
              title={`${pageTitle} | qisqa.uz`}
              url={`https://qisqa.uz/${awaitedParams.qisqa}`}
            />
            <a
              href="https://qisqa.uz"
              target="_blank"
              className="rounded underline py-1 px-4 text-xl mt-2"
            >
              qisqa.uz
            </a>
          </footer>

          <QisqaPageEdit />
        </div>
      </div>
    );
  } catch (error) {
    if (error.response?.status === 404) {
      notFound();
    } else {
      console.error('Unexpected error:', error);
      throw error;
    }
  }
}
