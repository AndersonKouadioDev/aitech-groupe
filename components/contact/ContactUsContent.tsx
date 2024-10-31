import Image from "next/image";
import React from "react";
import shape37 from "@/public/assets/img/shape/37.png";
import ContactInfo from "./ContactInfo";
import ContactForm from "./ContactForm";

const ContactUsContent = () => {
  return (
    <>
      <div className={`contact-style-one-area overflow-hidden default-padding`}>
        <div className="contact-shape">
          <Image src={shape37} alt="Image Not Found" />
        </div>
        <div className="container">
          <p
            className="text-center mx-auto"
            style={{
              maxWidth: "1000px",
              fontWeight: "500",
              marginBottom: "30px",
            }}
          >
            AITECH s’engage à accompagner les entreprises et organisations
            internationales avec des solutions technologiques et services
            innovants dans des secteurs clés : sécurité électronique, réseaux et
            télécoms, développement web et desktop, formation-conseils, et
            fourniture d’équipements. Nous offrons des systèmes de surveillance
            avancés, des infrastructures de communication robustes, et des
            solutions sur mesure en développement web. Nos services incluent
            également des formations pour optimiser les compétences de vos
            équipes et la fourniture d’équipements technologiques de haute
            qualité. Notre approche repose sur la réactivité, la proximité, le
            professionnalisme et le conseil avisé, garantissant ainsi la bonne
            gouvernance et la prospérité de votre entreprise.
          </p>
          <div className="row align-center">
            <div className="contact-stye-one col-lg-5 mb-md-50 mb-xs-20">
              <ContactInfo />
            </div>
            <div className="contact-stye-one col-lg-7 pl-60 pl-md-15 pl-xs-15">
              <div className="contact-form-style-one">
                <h5 className="sub-title">Vous avez des questions ?</h5>
                <h2 className="heading">Envoyez-nous un message</h2>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUsContent;
