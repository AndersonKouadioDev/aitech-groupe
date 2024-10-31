import Image from "next/image";
import React from "react";
import shape7 from "@/public/assets/img/shape/7.png";
import shape9 from "@/public/assets/img/shape/9.png";
import logoLight from "@/public/assets/img/logo-light.png";
import Link from "next/link";
import SocialShare from "../utilities/SocialShare";
import FooterNewsLetter from "../form/FooterNewsLetter";

const FooterStyle1 = ({
  shape,
  shapeClass,
  logo,
  formStyle,
}: {
  shape?: string;
  shapeClass?: string;
  logo?: string;
  formStyle?: string;
}) => {
  return (
    <>
      <footer className="bg-dark text-light">
        <div className="footer-shape">
          <div className={`item ${shapeClass}`}>
            {shape ? (
              <Image src={shape} alt="Shape" />
            ) : (
              <Image src={shape7} alt="Shape" />
            )}
          </div>
          <div className="item">
            <Image src={shape9} alt="Shape" />
          </div>
        </div>
        <div className="container">
          <div className="f-items relative pt-70 pb-120 pt-xs-0 pb-xs-50">
            <div className="row">
              <div className="col-lg-4 col-md-6 footer-item pr-50 pr-xs-15">
                <div className="f-item about">
                  <Link href="/">
                    {logo ? (
                      <Image className="logo" src={logo} alt="Logo" />
                    ) : (
                      <Image className="logo" src={logoLight} alt="Logo" />
                    )}
                  </Link>
                  <p>
                    Votre partenaire de confiance pour tous vos besoins en
                    infrastructure IT, télécom et solutions énergétiques.
                  </p>
                  <div className="opening-hours">
                    <h5>Heures d&apos;Assistance</h5>
                    <ul>
                      <li>
                        <div className="working-day">Lundi – Samedi:</div>
                        <div className="marker"></div>
                        <div className="working-hour">8h – 18h</div>
                      </li>
                      <li>
                        <div className="working-day">Support 24/7:</div>
                        <div className="marker"></div>
                        <div className="working-hour">Clients Premium</div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-6 footer-item">
                <div className="f-item link">
                  <h4 className="widget-title">Notre Entreprise</h4>
                  <ul>
                    <li>
                      <Link href="/about-us">À Propos</Link>
                    </li>
                    <li>
                      <Link href="/contact-us">Support Technique</Link>
                    </li>
                    <li>
                      <Link href="/about-us">Carrières</Link>
                    </li>
                    <li>
                      <Link href="/about-us">Tarifs & Forfaits</Link>
                    </li>
                    <li>
                      <Link href="/contact-us">Contact</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-2 col-md-6 footer-item">
                <div className="f-item link">
                  <h4 className="widget-title">Nos Services</h4>
                  <ul>
                    <li>
                      <Link href="/services">
                        Réseau Informatique
                      </Link>
                    </li>
                    <li>
                      <Link href="/services">Solutions Télécom</Link>
                    </li>
                    <li>
                      <Link href="/services">
                        Services Électriques
                      </Link>
                    </li>
                    <li>
                      <Link href="/services">Smart Life</Link>
                    </li>
                    <li>
                      <Link href="/services">Solutions Cloud</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 footer-item">
                <h4 className="widget-title">Newsletter</h4>
                <p>
                  Abonnez-vous à notre newsletter pour recevoir <br /> nos
                  actualités et offres spéciales.
                </p>
                <div className={`f-item newsletter ${formStyle}`}>
                  <FooterNewsLetter />
                </div>
                <ul className="footer-social">
                  <SocialShare />
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <p>
                  &copy; Copyright {new Date().getFullYear()}. Tous droits
                  réservés
                </p>
              </div>
              <div className="col-lg-6 text-end">
                <ul>
                  <li>
                    <Link href="/about-us">Confidentialité</Link>
                  </li>
                  <li>
                    <Link href="/contact-us">Support</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default FooterStyle1;
