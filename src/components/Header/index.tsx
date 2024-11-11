'use client';
import Link from 'next/link';
import Logo from '../Logo';
import { useSession } from 'next-auth/react';
import React from 'react';

export default function Header() {
  const { data: session } = useSession();

  return (
    <header className="z-30 mt-2 w-full md:mt-5">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="relative flex h-14 items-center justify-between gap-3 rounded-2xl bg-gray-900/90 px-3 before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,theme(colors.gray.800),theme(colors.gray.700),theme(colors.gray.800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] after:absolute after:inset-0 after:-z-10 after:backdrop-blur-sm">
          {/* Site branding */}
          <div className="flex flex-1 items-center">
            <Logo />

            <ul className="hidden flex-1 items-center justify-start gap-3 ml-10 sm:flex">
              <li>
                <Link href="/#pricing" className="">
                  About
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="">
                  Privacy-Policy
                </Link>
              </li>
              <li>
                <Link href="/#pricing" className="">
                  Pricing
                </Link>
              </li>
            </ul>
          </div>

          {/* Desktop sign in links */}
          <ul className="flex flex-1 items-center justify-end gap-3">
            <li>
              <Link
                href="/signin"
                className="btn-sm bg-gradient-to-t from-indigo-600 to-indigo-500 bg-[length:100%_100%] bg-[bottom] py-[5px] text-white shadow-[inset_0px_1px_0px_0px_theme(colors.white/.16)] hover:bg-[length:100%_150%]"
              >
                Signin
              </Link>
            </li>

            {/*<li>*/}
            {/*  <Link*/}
            {/*    href="/signin"*/}
            {/*    className="btn-sm relative bg-gradient-to-b from-gray-800 to-gray-800/60 bg-[length:100%_100%] bg-[bottom] py-[5px] text-gray-300 before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,theme(colors.gray.800),theme(colors.gray.700),theme(colors.gray.800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] hover:bg-[length:100%_150%]"*/}
            {/*  >*/}
            {/*    Sign In*/}
            {/*  </Link>*/}
            {/*</li>*/}

            {session && (
              <li>
                <Link href="/" className="flex items-center justify-center">
                  <img
                    className="rounded-full border w-9 object-cover block shadow-2xl"
                    src={session.user?.image || ''}
                    alt="user avatar"
                  />
                  <span className="ml-2">Profile</span>
                </Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </header>
  );
}
