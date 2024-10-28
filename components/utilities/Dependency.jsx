"use client";

import React, { useEffect } from "react";
import { ScrollToTop } from "react-simple-scroll-up";

// Importations dynamiques pour éviter les erreurs de SSR
const Dependency = () => {
  useEffect(() => {
    if (typeof document !== 'undefined' && typeof window !== "undefined") {
      // Bootstrap Js 
      import('bootstrap/dist/js/bootstrap.bundle.js');

      // WowJs 
      import('wowjs/dist/wow.js').then((WOW) => {
        window.wow = new WOW.WOW({
          live: false,
        });

        window.wow.init();
      });
    }
  }, []);

  return (
    <>
      <ScrollToTop symbol={<i className="fal fa-long-arrow-up"></i>} />
    </>
  );
};

export default Dependency;
