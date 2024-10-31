import Image from "next/image";
import React from "react";
import shape17 from "@/public/assets/img/shape/17.png";

const ChooseStyle1 = () => {
  return (
    <>
      <div className="choose-us-style-one-area default-padding text-light">
        <div
          className="cover-bg"
          style={{ backgroundImage: `url(/assets/img/banner/banner_11.png)` }}
        ></div>
        <div className="shape-left-top">
          <Image src={shape17} alt="Shape" />
        </div>
        <div className="text-invisible">AITECH-GROUPE</div>
        <div className="container">
          <div className="row">
            <div className="col-lg-6 pr-80 pr-md-15 pr-xs-15">
              <div className="choose-us-style-one">
                <h2 className="title mb-35">
                  Soyez à la pointe de la nouvelle innovation
                </h2>
                <ul className="list-item">
                  <li className="wow fadeInUp">
                    <h4>Meilleur conseil aux entreprises</h4>
                    <p>
                      En la voyant plutôt, vous n&apos;estimez pas les hommes
                      qui s&apos;installent avec un génie. Accord international
                      dit sur vous l&apos;âge de. Comparaison du nouveau jambon
                      mélancolique fils eux-mêmes.
                    </p>
                  </li>
                  <li className="wow fadeInUp" data-wow-delay="300ms">
                    <h4>Support client 24/7</h4>
                    <p>
                      Tohether plutôt qu&apos;elle, tu n&apos;estimes pas les
                      hommes qui s&apos;installent comme des génies. Affaire à
                      suivre, dis-moi ton âge. Comparaison avec le nouveau
                      jambon mélancolique du fils.
                    </p>
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

export default ChooseStyle1;
