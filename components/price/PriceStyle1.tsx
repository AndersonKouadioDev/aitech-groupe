import React from "react";
import SinglePrice1 from "./SinglePrice1";
import Price1Data from "@/public/assets/jsonData/price/Price1Data.json";
import PriceTitle from "./PriceTitle";

const PriceStyle1 = ({
  priceTitle,
  sectionClass,
}: {
  priceTitle: boolean;
  sectionClass: string;
}) => {
  return (
    <>
      <div
        className={`pricing-style-one-area default-padding bottom-less ${sectionClass}`}
      >
        {priceTitle ? <PriceTitle /> : <></>}
        <div className="container">
          <div className="row">
            {Price1Data.map((price) => (
              <div className="col-xl-3 col-md-6 mb-30" key={price.id}>
                <SinglePrice1 price={price} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default PriceStyle1;
