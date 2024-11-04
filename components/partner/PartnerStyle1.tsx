import React from "react";
import logo1 from "@/public/assets/img/logo/dipndip.png";
import logo2 from "@/public/assets/img/logo/copaci.png";
import logo4 from "@/public/assets/img/logo/recover.jpeg";
import logo5 from "@/public/assets/img/logo/tropic105.jpeg";
import logo6 from "@/public/assets/img/logo/neskao.webp";
import logo7 from "@/public/assets/img/logo/puratox.png";
import logo8 from "@/public/assets/img/logo/uniserv.png";
import logo9 from "@/public/assets/img/logo/open_si.png";
import Image from "next/image";

const PartnerStyle1 = ({ sectionClass }: { sectionClass?: string }) => {
  return (
    <>
      <div
        className={`partner-style-one-area ${sectionClass ? sectionClass : ""}`}
      >
        <div className="container">
          <div className="row align-center">
            <div className="col-lg-5">
              <div
                className="partner-map"
                style={{ backgroundImage: `url(/assets/img/shape/map.png)` }}
              >
                <h2
                  className="mask-text"
                  style={{
                    backgroundImage: `url(/assets/img/banner/banner_2.png)`,
                  }}
                >
                  80
                </h2>
                <h4>Partenaires dans le monde entier</h4>
              </div>
            </div>
            <div className="col-lg-6 offset-lg-1">
              <div className="partner-items">
                <ul>
                  <li>
                    <Image src={logo1} alt="Image Not FOund" />
                  </li>
                  <li>
                    <Image src={logo2} alt="Image Not FOund" />
                  </li>
                  <li>
                    <Image src={logo7} alt="Image Not FOund" />
                  </li>
                  <li>
                    <Image src={logo4} alt="Image Not FOund" />
                  </li>
                  <li>
                    <Image src={logo5} alt="Image Not FOund" />
                  </li>
                  <li>
                    <Image src={logo6} alt="Image Not FOund" />
                  </li>
                  <li>
                    <Image src={logo8} alt="Image Not FOund" />
                  </li>
                  <li>
                    <Image src={logo9} alt="Image Not FOund" />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PartnerStyle1;
