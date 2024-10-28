import React from "react";
import SocialShare from "../utilities/SocialShare";

const HeaderTopStyle4 = () => {
  return (
    <>
      <div className="top-bar-area top-bar-style-one bg-dark text-light">
        <div className="container">
          <div className="row align-center">
            <div className="col-lg-7">
              <ul className="item-flex">
                <li>
                  <small>
                    <i className="fas fa-map-marker-alt"></i> Abidjan - Cocody
                    Mermoz en Face de FIN'L{" "}
                  </small>
                </li>
                <li>
                  <small>
                    <a href="tel:+2252722540053">
                      <i className="fas fa-phone-alt"></i> +225 27 22 54 00 53
                    </a>
                  </small>
                </li>
                <li>
                  <small>
                    {" "}
                    <a href="mailto:info@aitechgroupe.com">
                      <i className="fas fa-envelope"></i> info@aitechgroupe.com
                    </a>
                  </small>
                </li>
              </ul>
            </div>
            <div className="col-lg-5 text-end">
              <div className="social">
                <ul>
                  <SocialShare />
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderTopStyle4;
