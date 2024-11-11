'use client';

import Image from 'next/image';
import { FiInstagram, FiYoutube, FiLinkedin, FiTrash, FiSave, FiPlus, FiX } from 'react-icons/fi';
import { FaTelegram, FaLink, FaTelegramPlane } from 'react-icons/fa';
import { useState } from 'react';

const btnStyle = 'py-2 px-4 rounded bg-opacity-30 bg-black';
const inputStyle = 'py-2 px-4 rounded bg-opacity-30 bg-black mb-2';

const LINKS = [
  {
    id: 1,
    name: 'Instagram here',
    icon: <FiInstagram />,
    href: 'https://shokirov.uz'
  },
  {
    id: 5,
    name: 'My linkedin',
    icon: <FiLinkedin />,
    href: 'https://www.linkedin.com/in/ismoil-shokirov/'
  },
  {
    id: 3,
    name: 'My telegram channel',
    icon: <FaTelegramPlane />,
    href: 'https://t.me/qisqalog'
  },
  {
    id: 2,
    name: 'My youtube channel',
    icon: <FiYoutube />,
    href: 'https://www.youtube.com/@ismoilshokirov'
  },
  {
    id: 4,
    name: 'My twitter',
    icon: <FiX />,
    href: 'https://shokirov.uz'
  },
  {
    id: 6,
    name: 'Personal website',
    icon: <FaLink />,
    href: 'https://shokirov.uz'
  }
];

export default function Home() {
  const [avatarLink, setAvatarLink] = useState(
    'https://avatars.githubusercontent.com/u/33512473?v=4'
  );
  const [authorName, setAuthorName] = useState('Ismoil Shokirov');
  const [bg, setBg] = useState('/samarqand.jpg');
  const [links, setLinks] = useState<any>(LINKS);

  const renderLinks = () => {
    return links.map((link: any) => (
      <div key={link.id} className="flex">
        <input
          name="href"
          onChange={e => handleLinkChange(e, link.id)}
          value={link.href}
          placeholder="https://instagram.com"
          className={`${inputStyle} w-full`}
        />

        <input
          name="name"
          onChange={e => handleLinkChange(e, link.id)}
          value={link.name}
          placeholder="My instagram account"
          className={`${inputStyle} w-full sm:ml-5 ml-2`}
        />
        <button onClick={() => handleRemoveLink(link.id)} className={`${btnStyle} ml-3 mb-2`}>
          <FiTrash />
        </button>
      </div>
    ));
  };

  const handleAvatarLinkChange = (e: any) => {
    setAvatarLink(e.target.value);
  };
  const handleAuthorNameChange = (e: any) => {
    setAuthorName(e.target.value);
  };

  const handleSave = () => {
    console.log(bg);
    console.log(authorName);
    console.log(avatarLink);
    console.log(links);
  };
  const handleBgChange = (bgName: string) => {
    setBg(bgName);
  };
  const handlePreview = () => {};

  const handleAddLink = () => {
    setLinks((prev: any) => [...prev, { id: prev.length + 1 }]);
  };

  const handleLinkChange = (e: any, id: number) => {
    setLinks((prev: any) =>
      prev.map((link: any) => {
        if (link.id === id) {
          return { ...link, [e.target.name]: e.target.value };
        }
        return link;
      })
    );
  };

  const handleRemoveLink = (id: number) => {
    setLinks((prev: any) => prev.filter((link: any) => link.id !== id));
  };

  return (
    <div
      className="flex min-h-screen flex-col text-white"
      // style={{ background: `url(${bg})` }}
    >
      <div
        className="bg-no-repeat bg-cover bg-center absolute z-10 h-full w-full"
        style={{ backgroundImage: `url(${bg})`, filter: 'blur(5px)' }}
      ></div>
      <div className="flex items-center justify-center flex-col mt-12 relative z-20">
        <div className="flex mb-5">
          <button className="active" onClick={() => handleBgChange('/samarqand.jpg')}>
            <img src="/samarqand.jpg" className="w-36 h-24 object-cover" />
          </button>

          <button onClick={() => handleBgChange('/kalta-minor-khiva.jpg')}>
            <img src="/kalta-minor-khiva.jpg" className="w-36 h-24 object-cover" />
          </button>

          <button className="active" onClick={() => handleBgChange('/amir-temur-museum.jpg')}>
            <img src="/amir-temur-museum.jpg" className="w-36 h-24 object-cover" />
          </button>

          <button className="active" onClick={() => handleBgChange('/minor-tash.jpg')}>
            <img src="/minor-tash.jpg" className="w-36 h-24 object-cover" />
          </button>

          <button className="active" onClick={() => handleBgChange('/uzb-hotel.jpg')}>
            <img src="/uzb-hotel.jpg" className="w-36 h-24 object-cover" />
          </button>

          <button className="active" onClick={() => handleBgChange('/metro.jpg')}>
            <img src="/metro.jpg" className="w-36 h-24 object-cover" />
          </button>

          <button className="active" onClick={() => handleBgChange('/kalon-buhara.jpg')}>
            <img src="/kalon-buhara.jpg" className="w-36 h-24 object-cover" />
          </button>

          {/* <button onClick={() => handleBgChange("/beach.jpg")}>
            <img src="/beach.jpg" className="w-36" />
          </button> */}

          {/* style={{ backgroundImage: 'url(/amir-temur-museum.jpg)' }} */}
          {/* style={{ backgroundImage: 'url(/minor-tash.jpg)' }} */}
          {/* style={{ backgroundImage: 'url(/uzb-hotel.jpg)' }} */}
          {/* style={{ backgroundImage: 'url(/metro.jpg)' }} */}
          {/* style={{ backgroundImage: 'url(/kalon-buhara.jpg)' }} */}
          {/* style={{ backgroundImage: 'url(/kalta-minor-khiva.jpg)' }} */}
        </div>

        <p>Link to your logo</p>
        <input
          onChange={handleAvatarLinkChange}
          className={`${inputStyle} sm:w-3/5 w-96`}
          value={avatarLink}
          placeholder="link to your avatar"
        />
        <p>Title</p>
        <input
          onChange={handleAuthorNameChange}
          className={`${inputStyle} sm:w-3/5 w-96`}
          value={authorName}
          placeholder="your name"
        />
        <p>Social links</p>
        <div className="sm:w-3/5 w-96">{renderLinks()}</div>

        <button className={`flex items-center ${btnStyle}`} onClick={handleAddLink}>
          <FiPlus /> Add new link
        </button>

        <button
          onClick={handleSave}
          className={`${btnStyle} flex items-center justify-center mt-12`}
        >
          <span className="mr-3">Save changes</span> <FiSave />
        </button>
      </div>

      {/* <button onClick={handlePreview} className={`${btnStyle} flex absolute top-8 right-10 items-center justify-center`}>
        <span className="mr-3">Preview</span> <FiEye />
      </button> */}
    </div>
  );
}
