import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';
import { FiLoader, FiPlus, FiSave, FiTrash } from 'react-icons/fi';
import Iphone from '@/components/Iphone';
import axios from 'axios';
import { isValidForm } from './constants';
import PreviewImage from '@/components/pages/preview/PreviewImage';

const btnStyle = 'py-2 px-4 rounded-md shadow-sm text-gray-900';

const PreviewForm = ({ pageData, linksData }) => {
  const [links, setLinks] = useState<any>(() => {
    if (linksData?.length) return linksData;
    return [{ title: '', url: '' }];
  });
  const [avatarLink, setAvatarLink] = useState(
    'https://avatars.githubusercontent.com/u/33512473?v=4'
  );
  const [pageTitle, setPageTitle] = useState('');
  const [bg, setBg] = useState('kalon-buhara.jpg');
  const [qisqaPath, setQisqaPath] = useState('');
  const [logoFile, setLogoFile] = useState({
    url: '',
    base64: ''
  });
  const [isFormSaving, setFormSaving] = useState(false);
  const router = useRouter();

  const handleAvatarLinkChange = (e: any) => {
    setAvatarLink(e.target.value);
  };
  const handlePageTitleChange = (e: any) => {
    setPageTitle(e.target.value);
  };

  const handleAddLink = e => {
    e.preventDefault();
    const greatestID = links.reduce((acc, link) => (link.id > acc ? link.id : acc), 0);
    setLinks((prev: any) => [...prev, { id: greatestID + 1 }]);
  };

  const handleLinkChange = (e: any, id: number) => {
    e.preventDefault();
    setLinks((prev: any) =>
      prev.map((link: any) => {
        if (link.id === id) {
          return { ...link, [e.target.name]: e.target.value };
        }
        return link;
      })
    );
  };

  const handleRemoveLink = (e, id: number) => {
    e.preventDefault();
    setLinks((prev: any) => prev.filter((link: any) => link.id !== id));
  };

  const handleBgChange = (bgName: string) => {
    setBg(bgName);
  };

  const handleQisqaPathChange = e => {
    setQisqaPath(e.target.value);
  };

  const handleSave = async e => {
    e.preventDefault();
    try {
      const formData = {
        path: qisqaPath,
        title: pageTitle,
        image: logoFile.base64 || undefined,
        bgImageName: bg,
        links
      };
      setFormSaving(true);
      if (isValidForm(formData)) {
        await axios.post('/api/profile', formData);
        toast.success('Your changes have been saved!');
        router.push(`/${qisqaPath}`);
      }
    } catch (err) {
      toast.error(err.response?.data?.error || err.message);
    } finally {
      setFormSaving(false);
    }
  };

  const renderLinks = () => {
    return links?.map((link: any, idx: number) => (
      <div key={link.id || idx} className="flex">
        <input
          name="url"
          onChange={e => handleLinkChange(e, link.id)}
          value={link.url}
          placeholder="https://linkedin.com"
          className={`form-input mb-2 w-full`}
          required
          disabled={isFormSaving}
        />

        <input
          name="title"
          onChange={e => handleLinkChange(e, link.id)}
          value={link.title}
          placeholder="My linkedin account"
          className={`form-input mb-2 w-full sm:ml-5 ml-2`}
          required
          disabled={isFormSaving}
        />
        <button
          type="button"
          onClick={e => handleRemoveLink(e, link.id)}
          className={`${btnStyle} ml-3 mb-2 text-white`}
          disabled={isFormSaving}
        >
          <FiTrash />
        </button>
      </div>
    ));
  };

  useEffect(() => {
    if (linksData?.length) {
      setLinks(linksData);
    }
  }, [linksData]);

  useEffect(() => {
    if (pageData.path) {
      setQisqaPath(pageData.path);
    }
    if (pageData.title) {
      setPageTitle(pageData.title);
    }
    if (pageData.bgImageName?.length) {
      setBg(pageData.bgImageName);
    }
    if (pageData.image) {
      setLogoFile({ url: pageData.image, base64: pageData.image });
    }
  }, [pageData]);

  return (
    <div className="flex w-full h-full lg:flex-row flex-col">
      <form onSubmit={handleSave} className="flex flex-col relative z-20 lg:w-1/2 w-full">
        <p>Page</p>
        <div className="flex py-1 px-4 rounded-md shadow-sm border border-gray-700 bg-gray-900/50 focus-within:ring-2 focus-within:ring-inset sm:w-5/6 w-96 mb-2">
          <span className="flex select-none items-center text-gray-500 sm:text-sm">qisqa.uz/</span>
          <input
            type="text"
            name="qisqa-path"
            value={qisqaPath}
            onChange={handleQisqaPathChange}
            className="outline-none block flex-1 border-0 bg-transparent py-1.5 pl-1 placeholder:text-gray-500 focus:ring-0 sm:text-sm/6"
            placeholder="example"
            required
            disabled={isFormSaving}
          />
        </div>

        <p>Title</p>
        <input
          onChange={handlePageTitleChange}
          className={'form-input sm:w-5/6 w-96 mb-3'}
          value={pageTitle}
          placeholder="Your name"
          required
          disabled={isFormSaving}
        />
        <p>Upload your logo</p>
        <PreviewImage logoFile={logoFile} setLogoFile={setLogoFile} isFormSaving={isFormSaving} />
        <p>Social links</p>
        <div className="sm:w-11/12 w-96 mb-3">{renderLinks()}</div>

        <div className="flex justify-center sm:w-5/6 w-96">
          <button
            className={`btn-sm relative bg-gradient-to-b from-gray-800 to-gray-800/60 bg-[length:100%_100%] bg-[bottom] py-[5px] text-gray-300 before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,theme(colors.gray.800),theme(colors.gray.700),theme(colors.gray.800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] hover:bg-[length:100%_150%]`}
            onClick={handleAddLink}
            type="button"
            disabled={isFormSaving}
          >
            <FiPlus /> Add new link
          </button>
        </div>

        <div className="flex justify-center mt-8 sm:w-5/6 w-96">
          <button
            disabled={isFormSaving}
            type="submit"
            className={`w-full btn-sm bg-gradient-to-t from-indigo-600 to-indigo-500 bg-[length:100%_100%] bg-[bottom] py-[5px] text-white shadow-[inset_0px_1px_0px_0px_theme(colors.white/.16)] hover:bg-[length:100%_150%]`}
          >
            <span className="mr-3">{isFormSaving ? 'Uploading' : 'Save changes'}</span>{' '}
            {isFormSaving ? <FiLoader className="animate-spin" /> : <FiSave />}
          </button>
        </div>
      </form>

      <div className="w-full lg:w-1/2 flex justify-center lg:justify-end items-center flex-col lg:flex-row">
        <div className="phone-container flex items-start justify-center ml-0 lg:ml-auto mt-16 lg:mt-0">
          <Iphone
            bgImageURL={bg}
            socialLinks={links}
            pageTitle={pageTitle}
            logoURL={logoFile.url}
          />
        </div>

        <div className="flex mb-5 flex-wrap mt-10 flex-row lg:flex-col justify-center ml-0 lg:ml-auto">
          <button className="mb-3 ml-3 lg:ml-0" onClick={() => handleBgChange('kalon-buhara.jpg')}>
            <img
              src="/kalon-buhara.jpg"
              alt="Kalon Bukhara"
              className="w-16 h-16 object-cover rounded-full"
            />
          </button>

          <button className="mb-3 ml-3 lg:ml-0" onClick={() => handleBgChange('samarqand.jpg')}>
            <img
              src="/samarqand.jpg"
              alt="Registon Samarqand"
              className="w-16 h-16 object-cover rounded-full"
            />
          </button>

          <button
            className="mb-3 ml-3 lg:ml-0"
            onClick={() => handleBgChange('kalta-minor-khiva.jpg')}
          >
            <img
              src="/kalta-minor-khiva.jpg"
              alt="Kalta Minor Khiva"
              className="w-16 h-16 object-cover rounded-full"
            />
          </button>

          <button
            className="mb-3 ml-3 lg:ml-0"
            onClick={() => handleBgChange('amir-temur-museum.jpg')}
          >
            <img
              src="/amir-temur-museum.jpg"
              alt="Amir Temur museum"
              className="w-16 h-16 object-cover rounded-full"
            />
          </button>

          <button className="mb-3 ml-3 lg:ml-0" onClick={() => handleBgChange('minor-tash.jpg')}>
            <img
              src="/minor-tash.jpg"
              alt="Minor Tashkent"
              className="w-16 h-16 object-cover rounded-full"
            />
          </button>

          <button className="mb-3 ml-3 lg:ml-0" onClick={() => handleBgChange('uzb-hotel.jpg')}>
            <img
              src="/uzb-hotel.jpg"
              alt="Hotel Uzbekistan"
              className="w-16 h-16 object-cover rounded-full"
            />
          </button>

          <button className="mb-3 ml-3 lg:ml-0" onClick={() => handleBgChange('metro.jpg')}>
            <img
              src="/metro.jpg"
              alt="Tashkent metro"
              className="w-16 h-16 object-cover rounded-full"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PreviewForm;
