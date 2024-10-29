import Image from "next/image";
import React from "react";
import anim1Thumb from "@/public/assets/img/shape/anim-1.png";
import anim2Thumb from "@/public/assets/img/shape/anim-2.png";
import anim3Thumb from "@/public/assets/img/shape/anim-3.png";
import anim4Thumb from "@/public/assets/img/shape/anim-4.png";
import aboutThumb from "@/public/assets/img/about/about_1.png";
import signatureThumb from "@/public/assets/img/signature.png";
import About1Card from "./About1Card";

const AboutStyle1 = () => {
  return (
    <>
      <div className="about-style-one-area default-padding">
        <div className="shape-animated-left">
          <Image src={anim1Thumb} alt="Image Not Found" />
          <Image src={anim2Thumb} alt="Image Not Found" />
        </div>
        <div className="container">
          <div className="row align-center">
            <div className="about-style-one col-xl-6 col-lg-5">
              <div className="h4 sub-heading">
                SE SENTIR VALORISÉ ET RÉCOMPENSÉ{" "}
              </div>
              <h2 className="title mb-25">Qui sommes-nous ?</h2>
              <p>
                Il s’agit d’une structure de prestation de service et de
                formation qui met à la disposition des entreprises, des solution
                en système d&apos;information et offre aux élèves, étudiants
                ainsi qu&apos;aux particuliers, des stages formation purement
                pratique en vue de leur permettre d&apos;avoir les outils pour
                entreprendre, aller en entreprise avec une main pratique
                exceptionnelle et une capacité d&apos;auto emploi.
              </p>
              <div className="owner-info">
                <div className="left-info">
                  <h4>Pétronil Daga</h4>
                  <span>CEO & Founder</span>
                </div>
                <div className="right-info">
                  <Image src={signatureThumb} alt="Image Not Found" />
                </div>
              </div>
            </div>
            <div className="about-style-one col-xl-5 offset-xl-1 col-lg-6 offset-lg-1">
              <div className="about-thumb">
                <Image
                  className="wow fadeInRight"
                  src={aboutThumb}
                  alt="Image Not Found"
                />
                <About1Card />
                <div
                  className="thumb-shape-bottom wow fadeInDown"
                  data-wow-delay="300ms"
                >
                  <Image src={anim3Thumb} alt="Image Not Found" />
                  <Image src={anim4Thumb} alt="Image Not Found" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutStyle1;
