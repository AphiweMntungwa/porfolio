import React from "react";
import "./contacts.css";

function Contacts() {
  const socialLinks = [
    { link: "https://github.com/AphiweMntungwa", name: "github" },
    {
      link: "https://www.linkedin.com/in/aphiwe-mntungwa-a0b412218/",
      name: "linkedin",
    },
    { link: "https://facebook.com/AphiweMntungwa", name: "facebook" },
    { link: "tel:0765881859", name: "phone" },
    { link: "mailto:aphiwemntungwa66@gmail.com", name: "gmail" },
  ];
  return (
    <section className="contact-section">
      {socialLinks.map((element) => (
        <a href={element.link} key={element.link}>
          {element.name !== "phone" ? (
            <box-icon type="logo" name={element.name}></box-icon>
          ) : (
            <box-icon name={element.name}></box-icon>
          )}
        </a>
      ))}
    </section>
  );
}

export default Contacts;
