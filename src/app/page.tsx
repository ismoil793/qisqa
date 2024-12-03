'use client';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import PageIllustration from '@/components/PageEffects/PageIllustration';
import HeroHomePage from '@/components/pages/homepage/HeroHomePage';
import PhoneComponent from '@/components/Iphone';
import PricingHomePage from '@/components/pages/homepage/PricingHomePage';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import VideoThumb from '/public/thumbnail-qisqa-demo.jpg';
import ModalVideo from "@/components/ModealVideo";

const SHOW_CASE_LINKS = [
  {
    id: 1,
    title: 'My linkedin',
    url: 'https://www.linkedin.com/in/ismoil-shokirov/'
  },
  {
    id: 2,
    title: 'My telegram',
    url: 'https://t.me/qisqalog'
  },
  // {
  //   id: 3,
  //   title: 'My github',
  //   url: 'https://github.com/ismoil793'
  // },
  // {
  //   id: 4,
  //   title: 'Stackoverflow',
  //   url: 'https://stackoverflow.com/users/12924484/ismoil-shokirov'
  // },
  {
    id: 5,
    title: 'My website',
    url: 'https://shokirov.uz'
  }
];

export default function Home() {
  useEffect(() => {
    AOS.init({
      once: true,
      disable: 'phone',
      duration: 600,
      easing: 'ease-out-sine'
    });
  });

  return (
    <>
      <Header />
      <main className="relative flex grow flex-col overflow-x-hidden">
        <PageIllustration />
        <HeroHomePage />

        <div className="md:pb-16 pb-10 px-6 md:px-0">
          <ModalVideo
            thumb={VideoThumb}
            thumbWidth={900}
            thumbHeight={400}
            thumbAlt="Modal video thumbnail"
            video="https://www.youtube.com/embed/Mb0el211FUc?autoplay=1"
            videoWidth={1920}
            videoHeight={1080}
          />
        </div>

        <div className="mx-auto max-w-6xl px-4 sm:px-6 pb-12 md:pb-20">
          <PhoneComponent
            pageTitle="qisqa.uz demo"
            bgImageURL="kalon-buhara.jpg"
            socialLinks={SHOW_CASE_LINKS}
            footerURL="https://qisqa.uz/demo"
          />
        </div>

        <PricingHomePage />
      </main>
      <Footer />
    </>
  );
}
