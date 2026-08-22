"use client";
import React from "react";
import "./styles.scss";
import { IoArrowForward } from "react-icons/io5";
import { mailto, profile } from "@/data/profile";

const channels = [
  { label: "Email", value: profile.email, href: mailto },
  { label: "LinkedIn", value: profile.linkedinHandle, href: profile.linkedin },
  { label: "GitHub", value: profile.githubHandle, href: profile.github },
  {
    label: "Résumé",
    value: "Download PDF",
    href: profile.resumeUrl,
    download: true,
  },
];

const Section5 = () => {
  return (
    <div className="section" id="contact">
      <div className="section-inner">
        <div className="section-head" data-reveal>
          <span className="section-index">04</span>
          <h2 className="section-title">Contact</h2>
        </div>

        <div className="section-body">
          <p className="lede" data-reveal>
            Open to new projects and roles. If you have something in mind — or
            just want to talk shop — the fastest route is email.
          </p>

          <ul className="contact-list">
            {channels.map((channel, index) => (
              <li
                key={channel.label}
                data-reveal
                style={{ transitionDelay: `${index * 55}ms` }}
              >
                <a
                  className="contact-row"
                  href={channel.href}
                  target={
                    channel.href.startsWith("mailto") ? undefined : "_blank"
                  }
                  rel="noopener noreferrer"
                  download={
                    channel.download ? profile.resumeFileName : undefined
                  }
                >
                  <span className="contact-label">{channel.label}</span>
                  <span className="contact-value">{channel.value}</span>
                  <IoArrowForward className="contact-arrow" size={15} />
                </a>
              </li>
            ))}
            <li data-reveal style={{ transitionDelay: "220ms" }}>
              <div className="contact-row contact-row--static">
                <span className="contact-label">Location</span>
                <span className="contact-value">{profile.location}</span>
              </div>
            </li>
          </ul>

          <div className="contact-cta" data-reveal>
            <a href={mailto} className="btn btn--solid">
              Get in touch
              <IoArrowForward />
            </a>
            <span className="contact-cta-note">
              Usually replies within a day.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section5;
