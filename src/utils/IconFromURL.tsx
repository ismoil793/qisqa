import React from 'react';
import { FiInstagram, FiYoutube, FiLinkedin, FiFacebook } from 'react-icons/fi';
import {
  FaLink,
  FaTelegramPlane,
  FaGoogle,
  FaGithub,
  FaTiktok,
  FaStackOverflow,
  FaStackExchange,
  FaSnapchat,
  FaWhatsapp,
  FaAmazon,
  FaAws
} from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

export const IconFromURL = ({ url }) => {
  if (!url?.length) return <FaLink />;

  if (url.includes('instagram.com')) return <FiInstagram />;
  if (url.includes('facebook.com')) return <FiFacebook />;
  if (url.includes('google.com')) return <FaGoogle />;
  if (url.includes('github.com')) return <FaGithub />;
  if (url.includes('twitter.com')) return <FaXTwitter />;
  if (url.includes('x.com')) return <FaXTwitter />;
  if (url.includes('youtube.com')) return <FiYoutube />;
  if (url.includes('t.me')) return <FaTelegramPlane />;
  if (url.includes('telegram.org')) return <FaTelegramPlane />;
  if (url.includes('tiktok.com')) return <FaTiktok />;
  if (url.includes('linkedin.com')) return <FiLinkedin />;
  if (url.includes('stackoverflow.com')) return <FaStackOverflow />;
  if (url.includes('stackexchange.com')) return <FaStackExchange />;
  if (url.includes('snapchat.com')) return <FaSnapchat />;
  if (url.includes('whatsapp.com')) return <FaWhatsapp />;
  if (url.includes('pinterest.com')) return <FaWhatsapp />;
  if (url.includes('amazon.com')) return <FaAmazon />;
  if (url.includes('aws.com')) return <FaAws />;

  return <FaLink />;
};
