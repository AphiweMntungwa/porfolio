import React from "react";
import "./contacts.css";

function Contacts({ socialLinks, cname }) {
  return (
    <section className={`contact-section ${cname}`}>
      {socialLinks.map((element) => (
        <a href={element.link} key={element.link}>
          {element.noLogo ? (
            <box-icon name={element.name}></box-icon>
          ) : (
            <box-icon type="logo" name={element.name}></box-icon>
          )}
        </a>
      ))}
    </section>
  );
}

export default Contacts;
