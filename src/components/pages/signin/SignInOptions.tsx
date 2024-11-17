'use client';
import React, { useEffect, useState } from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { useSession, signIn, signOut } from 'next-auth/react';
import axios from 'axios';
import { useRouter } from 'next/navigation';

const SignInOptions = () => {
  const { data: session, ...rest } = useSession();
  const router = useRouter();
  const [profileData, setProfileData] = useState(null);
  const pageData = profileData?.page?.length > 0 ? profileData.page[0] : {};

  const renderAuthOptions = () => {
    if (session) {
      return (
        <div>
          {pageData.path?.length && (
            <a className="btn w-full mb-5 " href={`https://qisqa.uz/${pageData.path}`} target="_blank">
              Visit: {`https://qisqa.uz/${pageData.path}`}
            </a>
          )}
          <button
            onClick={() => router.push('/profile')}
            className="mb-5 btn w-full bg-gradient-to-t from-indigo-600 to-indigo-500 bg-[length:100%_100%] bg-[bottom] text-white shadow-[inset_0px_1px_0px_0px_theme(colors.white/.16)] hover:bg-[length:100%_150%]"
          >
            <span className="ml-2">Go to profile</span>
          </button>
          <button
            onClick={() => signOut()}
            className="btn relative w-full bg-gradient-to-b from-gray-800 to-gray-800/60 bg-[length:100%_100%] bg-[bottom] text-gray-300 before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,theme(colors.gray.800),theme(colors.gray.700),theme(colors.gray.800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] hover:bg-[length:100%_150%]"
          >
            <span className="ml-2">Sign out</span>
          </button>
        </div>
      );
    }

    return (
      <>
        <button
          onClick={() => signIn('google')}
          className="btn w-full bg-gradient-to-t from-indigo-600 to-indigo-500 bg-[length:100%_100%] bg-[bottom] text-white shadow-[inset_0px_1px_0px_0px_theme(colors.white/.16)] hover:bg-[length:100%_150%]"
        >
          <FaGoogle /> <span className="ml-2">Sign in with Google</span>
        </button>
        <div className="flex items-center gap-3 text-center text-sm italic text-gray-600 before:h-px before:flex-1 before:bg-gradient-to-r before:from-transparent before:via-gray-400/25 after:h-px after:flex-1 after:bg-gradient-to-r after:from-transparent after:via-gray-400/25">
          or
        </div>
        <button
          onClick={() => signIn('github')}
          className="btn relative w-full bg-gradient-to-b from-gray-800 to-gray-800/60 bg-[length:100%_100%] bg-[bottom] text-gray-300 before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,theme(colors.gray.800),theme(colors.gray.700),theme(colors.gray.800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] hover:bg-[length:100%_150%]"
        >
          <FaGithub /> <span className="ml-2">Sign in with Github</span>
        </button>
      </>
    );
  };

  const getOrCreateUser = async () => {
    try {
      const response = await axios.get('/api/users');
      setProfileData(response.data.data);
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    if (session) {
      getOrCreateUser();
    }
  }, [session]);

  return (
    <div className="py-12 md:py-20">
      {/* Section header */}
      <div className="pb-6 text-center">
        <h1 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.gray.200),theme(colors.indigo.200),theme(colors.gray.50),theme(colors.indigo.300),theme(colors.gray.200))] bg-[length:200%_auto] bg-clip-text font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
          Welcome back
        </h1>
        {session && (
          <div className="mt-3">
            <div>Signed in as {session.user?.email}</div>
            <div className="flex items-center justify-center mt-4">
              <img
                className="rounded-full border-2 w-24 object-cover block shadow-2xl"
                src={session.user?.image || ''}
                alt="user avatar"
              />
            </div>
          </div>
        )}
      </div>
      <div className="mx-auto max-w-[400px]">
        <div className="mt-6 space-y-5">{renderAuthOptions()}</div>
      </div>
    </div>
  );
};

export default SignInOptions;
