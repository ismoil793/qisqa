'use client';
import React, { useEffect, useState } from 'react';
// import axios from 'axios';

const DEFAULT_LOGO = `${process.env.NEXT_PUBLIC_BASE_URL}/qisqa.png`;

const QisqaPageLogo = ({ pageLogoURL, pageTitle }) => {
  // const [logoURL, setLogoURL] = useState(DEFAULT_LOGO);

  // const getPageLogo = async () => {
  //   try {
  //     const response = await axios.get(`${baseURL}/img-logo`);
  //     const img = response?.data?.data?.image || DEFAULT_LOGO;
  //     setLogoURL(img);
  //   } catch (err) {
  //     setLogoURL(DEFAULT_LOGO);
  //   }
  // };

  // useEffect(() => {
  //   getPageLogo();
  // }, []);

  return (
    <img
      id="delayed-image"
      className="rounded-full w-32 object-cover block mb-4"
      src={pageLogoURL || DEFAULT_LOGO}
      alt={pageTitle}
      loading="eager"
    />
  );
};

export default QisqaPageLogo;
