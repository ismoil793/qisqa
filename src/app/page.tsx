'use client';
import { useEffect } from 'react';
import Link from 'next/link';
import AOS from 'aos';
import 'aos/dist/aos.css';
import PageIllustration from '@/components/PageEffects/PageIllustration';
import HeroHomePage from '@/components/pages/homepage/HeroHomePage';
import PhoneComponent from '@/components/Iphone';
import PricingHomePage from '@/components/pages/homepage/PricingHomePage';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

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
          <PhoneComponent />
        </div>

        <PricingHomePage />

        <ul>
          <li className="text-blue-600">
            <Link href="/create-page">Create page</Link>
          </li>
          <li className="text-blue-600">
            <Link href="/preview">Preview</Link>
          </li>
          <li className="text-blue-600">
            <Link href="/edit">Edit</Link>
          </li>
          <li className="text-blue-600">
            <Link href="/login">Login</Link>
          </li>
          <li className="text-blue-600">
            <Link href="/login">Login</Link>
          </li>
        </ul>
      </main>
      <Footer />
    </>
  );
}
