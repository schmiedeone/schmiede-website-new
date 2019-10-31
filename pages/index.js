import React from 'react';
import Head from 'next/head';

import './homepage.css';

export default function Homepage() {
  return (
    <div>
      <Head>
        <title>Home</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <article
        className="Homepage"
        style={{ backgroundImage: 'url("/homepage.jpg")' }}
      >
        <section className="container">
          <div className="Homepage-NavStub">
            <a href="#" className="Homepage-LogoLink">
              <img className="Homepage-Logo" src="/logo-white.png" alt="Logo" />
            </a>
          </div>
        </section>

        <main className="Homepage-Main container">
          <div style={{ marginBottom: '0.5rem' }}>
            <span className="Homepage-Title">We move heavy metal</span>
          </div>
          <div>
            <span className="Homepage-Subtitle">
              Hi there, would you like to know about:
            </span>
          </div>

          <ul className="Homepage-Menu">
            <li className="Homepage-MenuItem">Robotics</li>
            <li className="Homepage-MenuItem">Development</li>
            <li className="Homepage-MenuItem">Farming</li>
          </ul>
        </main>

        <section className="Homepage-MoreLinkWrapper container">
          <a href="#" className="Homepage-MoreLink">
            <span>
              <span style={{ whiteSpace: 'nowrap' }}>
                Don’t know yet? You can browse
              </span>
              {' '}
              <span style={{ whiteSpace: 'nowrap' }}>
                around our website at any time.
              </span>
            </span>
            <img
              className="Homepage-MoreLinkImage"
              src="/arrow-right.svg"
              alt="Visit website"
            />
          </a>
        </section>
      </article>
    </div>
  );
}

// Want to go deeper?

// Hi there, would you like to know about:
// Choose between out projects' subjects:
// Choose whatever you want to know about us:

/*

<li className="Homepage-MenuItem">Us</li>
            <li className="Homepage-MenuItem">Projects</li>

*/

/*

<li className="Homepage-MenuItem">Culture</li>
            <li className="Homepage-MenuItem">Team</li>
            <li className="Homepage-MenuItem">Office</li>
            <li className="Homepage-MenuItem">Join Us</li>

*/

/*

<li className="Homepage-MenuItem">Robotics</li>
            <li className="Homepage-MenuItem">Development</li>
            <li className="Homepage-MenuItem">Farming</li>

*/
