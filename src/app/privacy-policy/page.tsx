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

        <h2>1. Introduction</h2>
        <p>
          Welcome to qisqa.uz (&#34;we&#34;, &#34;our&#34;, &#34;us&#34;). We respect your privacy
          and are committed to protecting the personal information you provide to us. This Privacy
          Policy explains how we collect, use, and safeguard your information when you visit our
          website{' '}
          <a className="text-blue-500" href="https://qisqa.uz" target="_blank">
            https://qisqa.uz
          </a>
          .
        </p>

        <h2>2. Information We Collect</h2>
        <p>We collect the following types of information:</p>
        <ul>
          <li>
            <strong>Email Address:</strong> Required for account registration, login, and
            communication.
          </li>
          <li>
            <strong>Name:</strong> Provided by the user to personalize their account.
          </li>
          <li>
            <strong>Page Data:</strong> Includes the following user-created content:
            <ul className="list-disc pl-6">
              <li>
                <strong>Page Path:</strong> A unique identifier for your page.
              </li>
              <li>
                <strong>Page Title:</strong> Optional title to describe your page.
              </li>
              <li>
                <strong>Background Image:</strong> Provided as a file or URL for page customization.
              </li>
              <li>
                <strong>Links:</strong> Titles and URLs of links added by the user to be displayed
                on their page.
              </li>
            </ul>
          </li>
        </ul>

        <h2>3. How We Use Your Information</h2>
        <p>We use your information to:</p>
        <ul>
          <li>Register and manage your account.</li>
          <li>Enable the creation and management of personalized pages.</li>
          <li>Display your links and page content to visitors.</li>
          <li>Communicate with you about updates, new features, or changes to our services.</li>
        </ul>

        <h2>4. Data Storage and Security</h2>
        <p>We take the following measures to protect your data:</p>
        <ul>
          <li>User passwords are securely hashed and are not stored in plaintext.</li>
          <li>
            All content you share on your page, including links, titles, and images, is publicly
            accessible. Please ensure that you do not upload sensitive or private information.
          </li>
        </ul>
        <p>
          While we take reasonable steps to safeguard your data, no method of transmission or
          storage is 100% secure.
        </p>

        <h2>5. Data Sharing</h2>
        <p>
          We do not share, sell, or distribute your personal information to third parties unless
          required by law. User-created content (e.g., links and page titles) is public and
          accessible to visitors of your page.
        </p>

        <h2>6. Your Rights</h2>
        <p>You have the right to:</p>
        <ul>
          <li>Access your account and update your information.</li>
          <li>Delete your account and associated data by contacting us.</li>
        </ul>

        <h2>7. Changes to This Privacy Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. Any changes will be posted on this
          page with the updated &#34;Effective Date.&#34;
        </p>

        <h2>8. Contact Us</h2>
        <p>
          If you have any questions or concerns about this Privacy Policy, please contact us at{' '}
          <a className="text-blue-500" href="mailto:ismoil.shokirov.dev@gmail.com">
            ismoil.shokirov.dev@gmail.com
          </a>
          .
        </p>

        <hr />
        <h1>Terms of Use</h1>
        <h2>1. Acceptance of Terms</h2>
        <p>
          By using qisqa.uz, you agree to follow these Terms of Use. If you disagree, discontinue
          use immediately.
        </p>
        <h2>2. Eligibility</h2>
        <p>
          You must be 13 years or older to use the Website and are responsible for securing your
          account.
        </p>
        <h2>3. User Responsibilities</h2>
        <p>
          You are responsible for all content you upload (e.g., links, titles, images). Ensure it is
          lawful, non-offensive, and does not infringe on third-party rights.
        </p>
        <h2>4. Public Content</h2>
        <p>
          Content you upload (e.g., images and links) is publicly accessible. Do not share sensitive
          or private information.
        </p>
        <h2>5. Intellectual Property</h2>
        <p>
          The Website&#34;s design, code, and branding are owned by qisqa.uz. Do not copy or modify
          without permission.
        </p>
        <h2>6. Liability Disclaimer</h2>
        <p>
          We are not responsible for damages, unauthorized access, or third-party issues. Use the
          Website &#34;as-is&#34; at your own risk.
        </p>
        <h2>7. Changes to Terms</h2>
        <p>We may update these Terms periodically. Continued use implies acceptance of changes.</p>

        <hr />
        <p>Last updated: October 2024</p>
      </section>

      <Footer />
    </>
  );
}
