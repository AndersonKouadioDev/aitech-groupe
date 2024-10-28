"use client"
import React, { useEffect } from 'react';
import { ScrollToTop } from 'react-simple-scroll-up';
// Ajout des importations ES6
import 'bootstrap/dist/js/bootstrap.bundle.js';
import WOW from 'wowjs/dist/wow.js';

const Dependency = () => {

  useEffect(() => {
    // Initialisation de WowJs
    window.wow = new WOW({
      live: false
    });

    window.wow.init();

  }, []);

  return (
    <>
      <ScrollToTop symbol={<i className="fal fa-long-arrow-up"></i>} />
    </>
  );
};

export default Dependency;
