import React from "react";

const ContactInfo = () => {
  return (
    <>
      <div className="contact-style-one-info">
        <h2>Vous avez un projet à nous confier ?</h2>
        <p>
          Vous souhaitez nous rencontrer, nous proposer un partenariat, nous
          soumettre un projet ou tout simplement entrer en relation avec nous ?
        </p>
        <ul>
          <li className="wow fadeInUp">
            <div className="icon">
              <i className="fas fa-phone-alt"></i>
            </div>
            <div className="content">
              <h5 className="title">Contact</h5>
              <a href="tel:+2252722540053">+225 27 22 54 00 53</a> /
              <a href="tel:+2250595215821">+225 05 95 21 58 21</a>
            </div>
          </li>
          <li className="wow fadeInUp" data-wow-delay="300ms">
            <div className="icon">
              <i className="fas fa-map-marker-alt"></i>
            </div>
            <div className="info">
              <h5 className="title">Notre emplacement </h5>
              <p>
                Abidjan - Cocody Mermoz en Face de FIN&apos;L 08 BP 2944 ABJ 08
                - Abidjan CÔTE D&apos;IVOIRE
              </p>
            </div>
          </li>
          <li className="wow fadeInUp" data-wow-delay="500ms">
            <div className="icon">
              <i className="fas fa-envelope-open-text"></i>
            </div>
            <div className="info">
              <h5 className="title">Notre email officiel</h5>
              <a href="mailto:info@aitechgroupe.com">info@aitechgroupe.com</a>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};

export default ContactInfo;
