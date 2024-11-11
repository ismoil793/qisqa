import React from 'react';
import PageIllustration from '@/components/PageEffects/PageIllustration';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default async function PrivacyPage() {
  return (
    <>
      <Header />
      <section className="mx-auto max-w-6xl px-4 sm:px-6 py-12 md:py-20">
        <PageIllustration />
        <h1>Privacy Policy</h1>
        <p>
          <strong>Effective Date:</strong> 15-09-2024
        </p>

        <h2>1. Introduction</h2>
        <p>
          Welcome to qisqa.uz (&#34;we&#34;, &#34;our&#34;, &#34;us&#34;). We respect your privacy
          and are committed to protecting the personal information you provide to us. This Privacy
          Policy explains how we collect, use, and safeguard your information when you visit our
          website{' '}
          <a href="https://qisqa.uz" target="_blank">
            https://qisqa.uz
          </a>
          .
        </p>

        <h2>2. Information We Collect</h2>
        <p>We only collect the following information:</p>
        <ul>
          <li>
            <strong>Email Address:</strong> Required for registration and login purposes.
          </li>
          <li>
            <strong>Profile Picture Link:</strong> Optional, provided by the user as a URL to
            display a profile picture.
          </li>
        </ul>

        <h2>3. How We Use Your Information</h2>
        <p>We use your email address to:</p>
        <ul>
          <li>Register and manage your account.</li>
          <li>Communicate with you about updates or changes to our services.</li>
        </ul>
        <p>We do not store or host your profile picture; we only display the link you provide.</p>

        <h2>4. Data Sharing</h2>
        <p>
          We do not share, sell, or distribute your personal information to third parties unless
          required by law.
        </p>

        <h2>5. Data Security</h2>
        <p>
          We take reasonable measures to protect your email address and other information you
          provide. However, please be aware that no data transmission over the internet is
          completely secure.
        </p>

        <h2>6. Changes to This Privacy Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. Any changes will be posted on this
          page with the updated &#34;Effective Date.&#34;
        </p>

        <h2>7. Contact Us</h2>
        <p>
          If you have any questions or concerns about this Privacy Policy, please contact us at{' '}
          <a href="mailto:matrixluka152@gmail.com">matrixluka152@gmail.com</a>.
        </p>
      </section>

      <Footer />
    </>
  );
}
