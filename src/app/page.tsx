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

const SHOW_CASE_LINKS = [
  {
    id: 1,
    name: '@ismoil-shokirov',
    href: 'https://www.linkedin.com/in/ismoil-shokirov/'
  },
  {
    id: 2,
    name: '@qisqalog',
    href: 'https://t.me/qisqalog'
  },
  {
    id: 3,
    name: '@ismoil793',
    href: 'https://github.com/ismoil793'
  },
  {
    id: 4,
    name: 'Stackoverflow',
    href: 'https://stackoverflow.com/users/12924484/ismoil-shokirov'
  },
  {
    id: 5,
    name: 'My website',
    href: 'https://shokirov.uz'
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
      <main className="relative flex grow flex-col">
        <PageIllustration />
        <HeroHomePage />

        <div className="mx-auto max-w-6xl px-4 sm:px-6 pb-12 md:pb-20">
          <PhoneComponent
            authorName="Ismoil Shokirov"
            bgImageURL="kalon-buhara.jpg"
            socialLinks={SHOW_CASE_LINKS}
          />
        </div>

        <PricingHomePage />
      </main>
      <Footer />
    </>
  );
}
