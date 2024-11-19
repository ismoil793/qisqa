'use client';
import Image from 'next/image';
import Logo from '../Logo';
import FooterIllustration from '/public/footer-illustration.svg';
import { FaTelegramPlane, FaMedium, FaGithub } from 'react-icons/fa';
import Link from 'next/link';
import useTranslation from '@/hooks/useTranslation';

export default function Footer() {
  const { translate } = useTranslation();

  return (
    <footer className="relative overflow-x-hidden">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Footer illustration */}
        <div
          className="pointer-events-none absolute bottom-0 left-1/2 -z-10 -translate-x-1/2"
          aria-hidden="true"
        >
          <Image
            className="max-w-none"
            src={FooterIllustration}
            width={1076}
            height={378}
            alt="Footer illustration"
          />
        </div>
        <div className="grid grid-cols-2 justify-between gap-12 py-8 sm:grid-rows-[auto_auto] md:grid-cols-4 md:grid-rows-[auto_auto] md:py-12 lg:grid-cols-[repeat(4,minmax(0,140px))_1fr] lg:grid-rows-1 xl:gap-20">
          {/* 1st block */}
          <div className="space-y-2">
            <h3 className="text-sm font-medium text-gray-200">{translate('navigation.product')}</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  className="text-indigo-200/65 transition hover:text-indigo-500"
                  href="/signin"
                >
                  {translate('navigation.signin')}
                </Link>
              </li>
              <li>
                <a
                  className="text-indigo-200/65 transition hover:text-indigo-500"
                  href="https://buymeacoffee.com/ismoil"
                >
                  {translate('navigation.support-project')}
                </a>
              </li>
            </ul>
          </div>
          {/* 2nd block */}
          <div className="space-y-2">
            <h3 className="text-sm font-medium text-gray-200">{translate('navigation.company')}</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  className="text-indigo-200/65 transition hover:text-indigo-500"
                  href="https://shokirov.uz"
                >
                  {translate('navigation.about-author')}
                </a>
              </li>
            </ul>
          </div>
          {/* 3rd block */}
          <div className="space-y-2">
            <h3 className="text-sm font-medium text-gray-200">{translate('navigation.resources')}</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  className="text-indigo-200/65 transition hover:text-indigo-500"
                  href="/privacy-policy"
                >
                  {translate('navigation.terms')}
                </Link>
              </li>
            </ul>
          </div>
          {/* 4th block */}
          <div className="space-y-2"></div>
          {/* 5th block */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1 lg:text-right">
            <div className="mb-3">
              <Logo />
            </div>
            <div className="text-sm">
              <p className="mb-3 text-indigo-200/65">
                © qizqa.uz
                <span className="text-gray-700"> · </span>
                <Link
                  className="text-indigo-200/65 transition hover:text-indigo-500"
                  href="/privacy-policy"
                >
                  {translate('navigation.terms')}
                </Link>
              </p>
              <ul className="inline-flex gap-2">
                <li>
                  <a
                    className="flex items-center justify-center text-indigo-500 transition hover:text-indigo-400"
                    href="https://t.me/qisqalog"
                    aria-label="Twitter"
                  >
                    <FaTelegramPlane className="h-6 w-6 fill-current" />
                  </a>
                </li>
                <li>
                  <a
                    className="flex items-center justify-center text-indigo-500 transition hover:text-indigo-400"
                    href="https://medium.com/@ismoil.793"
                    aria-label="Medium"
                  >
                    <FaMedium className="h-6 w-6 fill-current" />
                    {/*<svg*/}
                    {/*  className="h-8 w-8 fill-current"*/}
                    {/*  viewBox="0 0 32 32"*/}
                    {/*  xmlns="http://www.w3.org/2000/svg"*/}
                    {/*>*/}
                    {/*  <path d="M23 8H9a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1Zm-1.708 3.791-.858.823a.251.251 0 0 0-.1.241V18.9a.251.251 0 0 0 .1.241l.838.823v.181h-4.215v-.181l.868-.843c.085-.085.085-.11.085-.241v-4.887l-2.41 6.131h-.329l-2.81-6.13V18.1a.567.567 0 0 0 .156.472l1.129 1.37v.181h-3.2v-.181l1.129-1.37a.547.547 0 0 0 .146-.472v-4.749a.416.416 0 0 0-.138-.351l-1-1.209v-.181H13.8l2.4 5.283 2.122-5.283h2.971l-.001.181Z" />*/}
                    {/*</svg>*/}
                  </a>
                </li>
                <li>
                  <a
                    className="flex items-center justify-center text-indigo-500 transition hover:text-indigo-400"
                    href="https://github.com/ismoil793"
                    aria-label="Github"
                  >
                    <FaGithub className="h-6 w-6 fill-current" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
