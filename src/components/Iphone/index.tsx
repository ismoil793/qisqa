import React, { useState } from 'react';
import { IconFromURL } from '@/utils/IconFromURL';
import './style.css';

const PhoneComponent = ({
  bgImageURL = 'kalta-minor-khiva.jpg',
  socialLinks,
  pageTitle,
  logoURL
}) => {
  const [theme, setTheme] = useState('deep-purple');

  return (
    <div>
      {/* Phone structure */}
      <div className={'phone'}>
        <div className="buttons">
          <div className="left">
            <div className="button"></div>
            <div className="button"></div>
            <div className="button"></div>
          </div>
          <div className="right">
            <div className="button"></div>
          </div>
        </div>
        <div className="camera"></div>

        {/* Screen container with different themes */}
        <div className="screen-container">
          <div className="bg" style={{ backgroundImage: `url(/${bgImageURL})` }}>
            {/*<div className={`deep-purple ${theme === 'deep-purple' ? 'active' : ''}`}>*/}
            {/*  <div className="section">*/}
            {/*    <div className="glow"></div>*/}
            {/*  </div>*/}
            {/*  <div className="section">*/}
            {/*    <div className="glow"></div>*/}
            {/*  </div>*/}
            {/*</div>*/}
            {/*<div className={`gold ${theme === 'gold' ? 'active' : ''}`}>*/}
            {/*  <div className="section">*/}
            {/*    <div className="glow"></div>*/}
            {/*  </div>*/}
            {/*  <div className="section">*/}
            {/*    <div className="glow"></div>*/}
            {/*  </div>*/}
            {/*</div>*/}
            {/*<div className={`space-black ${theme === 'space-black' ? 'active' : ''}`}>*/}
            {/*  <div className="section">*/}
            {/*    <div className="glow"></div>*/}
            {/*  </div>*/}
            {/*  <div className="section">*/}
            {/*    <div className="glow"></div>*/}
            {/*  </div>*/}
            {/*</div>*/}
            {/*<div className={`silver ${theme === 'silver' ? 'active' : ''}`}>*/}
            {/*  <div className="section">*/}
            {/*    <div className="glow"></div>*/}
            {/*  </div>*/}
            {/*  <div className="section">*/}
            {/*    <div className="glow"></div>*/}
            {/*  </div>*/}
            {/*</div>*/}
          </div>

          <div className="notch-container" tabIndex="0">
            <div className="notch">
              <div className="content">
                <div className="left">
                  <div className="title"></div>
                  <div className="text"></div>
                </div>
                {/*<div className="right"></div>*/}
                {/*<div className="bar">*/}
                {/*  <div className="duration"></div>*/}
                {/*</div>*/}
              </div>
            </div>
          </div>
          <div className="notch-blur"></div>

          {/* Personal information */}
          <div
            style={{
              color: 'white',
              zIndex: 1,
              position: 'relative',
              top: '0',
              // transform: 'translateY(-50%)',
              fontSize: '0.8rem',
              textAlign: 'center',
              // background: 'rgba(0,0,0,0.1)',
              width: '100%',
              height: '100%',
              borderRadius: 'var(--border-radius)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between'
            }}
          >
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                marginTop: '20%',
                alignItems: 'center'
              }}
            >
              <img
                alt={pageTitle}
                src={logoURL || '/qisqa.png'}
                // src="https://avatars.githubusercontent.com/u/33512473?v=4"
                // src="https://media.licdn.com/dms/image/v2/D5603AQHJasw-uAgntg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1710613057112?e=1736985600&v=beta&t=GIdC9Rf6zV2RWgqm15Jx7V2Lhh5X-_dhLzygeWh0-wI"
                className="rounded-full w-24 h-24 object-cover block mb-2 shadow-2xl"
              />
              <h4 className="mb-4 font-bold text-lg">{pageTitle}</h4>
              <ul>
                {socialLinks?.map((curLink, idx) => (
                  <li
                    className="mb-2 rounded bg-opacity-40 bg-black shadow-2xl"
                    key={curLink.id || idx}
                  >
                    <a
                      href={curLink.url}
                      target="_blank"
                      className="py-1.5 px-2 flex items-center "
                    >
                      <IconFromURL url={curLink.url} />
                      <span className="ml-1.5">{curLink.title}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div style={{ marginBottom: '30px' }}>
              <a href="https://qisqa.uz" style={{ color: 'white' }}>
                qisqa.uz
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhoneComponent;
