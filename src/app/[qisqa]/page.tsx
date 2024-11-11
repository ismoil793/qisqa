import { FiInstagram, FiYoutube, FiLinkedin, FiX, FiEdit } from 'react-icons/fi';
import { FaTelegram, FaLink, FaTelegramPlane } from 'react-icons/fa';
import LinkButton from '@/components/Button/LinkButton';

const LINKS = [
  // {
  //   id: 1,
  //   name: 'Instagram here',
  //   icon: <FiInstagram />,
  //   href: "https://shokirov.uz"
  // },
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
  // {
  //   id: 4,
  //   name: 'My twitter',
  //   icon: <FiX />,
  //   href: "https://shokirov.uz"
  // },
  {
    id: 6,
    name: 'Personal website',
    icon: <FaLink />,
    href: 'https://shokirov.uz'
  }
];

const btnStyle = 'py-2 px-4 rounded bg-opacity-20 bg-black';

export default async function QisqaPage({ params }) {
  console.log('params', params);

  const renderLinks = () => {
    return LINKS.map(link => (
      <li key={link.id}>
        <a href={link.href} className={`${btnStyle} mb-2 flex items-center mb-2"`} target="_blank">
          {link.icon} <span className="ml-3">{link.name}</span>
        </a>
      </li>
    ));
  };

  return (
    <div>
      <div
        className="flex min-h-screen flex-col bg-no-repeat bg-cover bg-center text-white"
        // style={{ backgroundImage: 'url(/amir-temur-museum.jpg)' }}
        // style={{ backgroundImage: 'url(/minor-tash.jpg)' }}
        // style={{ backgroundImage: 'url(/uzb-hotel.jpg)' }}
        // style={{ backgroundImage: 'url(/metro.jpg)' }}
        // style={{ backgroundImage: 'url(/kalon-buhara.jpg)' }}
        // style={{ backgroundImage: 'url(/kalta-minor-khiva.jpg)' }}
        style={{ backgroundImage: 'url(/samarqand.jpg)', filter: 'blur(0px)' }}
      ></div>
      <div className="absolute top-0 w-full h-full text-white">
        <div className="flex items-center justify-center flex-col mt-16">
          <img
            className="rounded-full border-2 w-32 object-cover block mb-4"
            src="https://avatars.githubusercontent.com/u/33512473?v=4"
            alt="Ism"
          />
          <h1 className="text-3xl mb-4">Ismoil Shokirov</h1>
          <ul>{renderLinks()}</ul>
        </div>

        <footer className="absolute bottom-4 left-1/2 text-2xl -translate-x-1/2">
          <a href="https://qisqa.uz" target="_blank" className="rounded underline py-1 px-4">
            qisqa.uz
          </a>
        </footer>

        <LinkButton className="absolute top-8 right-10" href="/edit">
          <span className="mr-3">Edit</span> <FiEdit />
        </LinkButton>
      </div>
    </div>
  );
}
