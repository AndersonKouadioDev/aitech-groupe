"use client";
import React from "react";
import CountUp from "react-countup";

const AchievementCounter1 = () => {
  return (
    <>
      <div className="achivement-counter">
        <ul>
          <li>
            <div className="icon">
              <i className="flaticon-network"></i>
            </div>
            <div className="fun-fact">
              <div className="counter">
                <div className="timer">
                  <CountUp end={1000} enableScrollSpy />
                </div>
                <div className="operator">+</div>
              </div>
              <span className="medium">Projets IT déployés avec succès</span>
            </div>
          </li>
          <li>
            <div className="icon">
              <i className="flaticon-cloud-computing"></i>
            </div>
            <div className="fun-fact">
              <div className="counter">
                <div className="timer">
                  <CountUp end={50} enableScrollSpy />
                </div>
                <div className="operator">TB</div>
              </div>
              <span className="medium">De données sécurisées et gérées</span>
            </div>
          </li>
          <li>
            <div className="icon">
              <i className="flaticon-customer-service"></i>
            </div>
            <div className="fun-fact">
              <div className="counter">
                <div className="timer">
                  <CountUp end={99} enableScrollSpy />
                </div>
                <div className="operator">%</div>
              </div>
              <span className="medium">Taux de disponibilité des services</span>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};

export default AchievementCounter1;
