import Head from "next/head";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import CultureCarousel from "../../components/culture-carousel";
import MemberCard from "../../components/member-card";
import Nav from "../../components/nav";
import OfficeCarousel from "../../components/office-carousel";
import members from "../../data/members";
import "./about.css";

function renderMembers() {
  return members.map((x, i) => {
    return <MemberCard key={i} {...x} />;
  });
}

/**
 * About page component.
 */
export default function About() {
  // height-100 fix for mobile browsers
  const [windowInnerWidth, setInnerWidth] = useState(0);
  function setRelativeVH() {
    const newWidth = window.innerWidth;
    if (newWidth !== windowInnerWidth) {
      let vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty("--vh", `${vh}px`);
      setInnerWidth(newWidth);
    }
  }
  useEffect(() => {
    setRelativeVH();
    window.addEventListener("resize", setRelativeVH);
    return () => window.removeEventListener("resize", setRelativeVH);
  });
  // end height-100 fix

  function handleHeaderLinkClick(e) {
    e.preventDefault();
    const cultureSection = document.getElementById("culture");
    const offset = cultureSection.offsetTop;
    window.scroll({
      top: offset,
      left: 0,
      behavior: "smooth",
    });
  }

  return (
    <article className="About">
      <Head>
        <title>Schmiede.one - About</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Nav />
      <header
        className="About-Header"
        style={{ backgroundImage: 'url("/about/header.jpg")' }}
      >
        <div className="container">
          <div className="About-HeaderContent">
            <div style={{ paddingTop: "6rem" }}></div>
            <div>
              <span className="Banner-Title">
                We are an international team of developers, designers and
                inventors redesigning the future of heavy metal and food!
              </span>
            </div>
            <div className="Banner-Subtitle About-HeaderSubtitle">
              Based in Düsseldorf, Germany
            </div>

            <div className="About-HeaderSpacer"></div>

            <a
              className="About-HeaderLink"
              href="#culture"
              onClick={handleHeaderLinkClick}
            >
              <img
                className="About-HeaderLinkImage"
                src="/arrow-right-button.svg"
                alt="More"
              />
              <span className="About-HeaderLinkLabel">
                Scroll down to learn more!
              </span>
            </a>
          </div>
        </div>
      </header>

      <section
        id="culture"
        className="container"
        style={{ paddingTop: "4.5rem" }}
      >
        <CultureCarousel />
      </section>

      <section
        id="team"
        className="container"
        style={{
          paddingTop: "4.5rem",
          textAlign: "center",
        }}
      >
        <div className="Grid">{renderMembers()}</div>
      </section>

      <section
        className="Banner"
        style={{
          marginTop: "3rem",
          paddingTop: "7rem",
          paddingBottom: "4rem",
          backgroundImage: 'url("/about/banner.jpg")',
        }}
      >
        <div>
          <span className="Banner-Title">
            Do you want to be part
            <br />
            of this cool team?
          </span>
        </div>
        <div style={{ marginTop: "0.5rem" }}>
          <span className="Banner-Subtitle">
            Send us an email with your cv and
            <br />
            tell us why you would be a great fit.
            <br />
            We would love to hear from you!
          </span>
        </div>
        <div style={{ marginTop: "2.5rem" }}>
          <a href="mailto:hello@schmiede.one">
            <img className="Banner-RoundImage" src="/mail.svg" alt="Email" />
          </a>
        </div>
      </section>

      <section
        id="office"
        className="container"
        style={{ paddingTop: "4.5rem" }}
      >
        <OfficeCarousel />
      </section>

      <footer
        id="join-us"
        className="Banner"
        style={{
          marginTop: "4.5rem",
          paddingTop: "7rem",
          paddingBottom: "4.5rem",
          backgroundImage: 'url("/about/footer.jpg")',
        }}
      >
        <div>
          <span className="Banner-Title">
            Find out if we have a job
            <br />
            opportunity for you!
          </span>
        </div>
        <div style={{ marginTop: "0.5rem" }}>
          <span className="Banner-Subtitle">
            If we don’t and you think you can
            <br />
            be a good fit, just send as an email!
          </span>
        </div>
        <div
          style={{
            display: "inline-flex",
            marginTop: "2rem",
          }}
        >
          <a
            href="https://angel.co/company/schmiede-one/jobs"
            target="_blank"
            className="Banner-Button"
            style={{ marginRight: "1rem" }}
          >
            Job Offers
          </a>
          <a href="mailto:hello@schmiede.one">
            <img className="Banner-RoundImage" src="/mail.svg" alt="Email" />
          </a>
        </div>
        <div className="Footer-Links">
          <Link href="/imprint">
            <a className="Footer-Link">imprint</a>
          </Link>
          <Link href="/privacy-policy">
            <a className="Footer-Link">privacy policy</a>
          </Link>
        </div>
      </footer>
    </article>
  );
}
