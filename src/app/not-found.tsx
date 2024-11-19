import React from 'react';
import Link from 'next/link';

const NotFound = () => {
  return (
    <section className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold">404</h1>
      <p className="mt-2 text-lg">Oops! The page you&#39;re looking for doesn&#39;t exist.</p>
      <Link href="/" className="mt-4 px-4 py-2 text-white bg-indigo-600 rounded hover:bg-indigo-500">
        Go Back Home
      </Link>
    </section>
  );
};

export default NotFound;
