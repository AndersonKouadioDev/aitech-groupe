import React from "react";
import AchievementCounter1 from "./AchievementCounter1";
import Link from "next/link";

const RequestCallStyle1 = () => {
  return (
    <>
      <div
        className="request-call-back-area text-light default-padding"
        style={{ backgroundImage: `url(/assets/img/banner/banner_3.png)` }}
      >
        <div className="container">
          <div className="row align-center">
            <div className="col-lg-6">
              <h2 className="title">
                Vous cherchez un conseiller en entreprise de qualité ?
              </h2>
              <Link
                className="btn circle btn-light mt-30 mt-md-15 mt-xs-10 btn-md radius animation"
                href="/contact-us"
              >
                Demande un appel
              </Link>
            </div>
            <div className="col-lg-6 text-end">
              <AchievementCounter1 />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RequestCallStyle1;
