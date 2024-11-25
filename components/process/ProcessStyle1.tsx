import React from "react";
import shape40 from "@/public/assets/img/shape/40.png";
import Image from "next/image";
import Process1Data from "@/public/assets/jsonData/process/Process1Data.json";
import SingleProcess1 from "./SingleProcess1";

const ProcessStyle1 = ({ sectionClass }: { sectionClass?: string }) => {
  return (
    <>
      <div
        className={`process-style-one-area text-center default-padding ${
          sectionClass ? sectionClass : ""
        }`}
      >
        <div className="large-shape">
          <Image src={shape40} alt="Shape" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2">
              <div className="site-heading text-center">
                <h4 className="sub-heading">NOTRE PROCESSUS </h4>
                <h2 className="title">
                  ÉTAPES DE PRESTATION <br /> Processus de Travail
                </h2>
                <div className="devider"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            {Process1Data.map((process) => (
              <div className="col-lg-4" key={process.id}>
                <SingleProcess1 process={process} key={process.id} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProcessStyle1;
