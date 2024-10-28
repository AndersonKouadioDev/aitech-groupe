import React from 'react';
import FooterStyle1 from '../footer/FooterStyle1';
import shape38 from '@/public/assets/img/shape/38.png';
import logoLightSolid from '@/public/assets/img/logo-light-solid.png';
import HeaderStyle3 from '../header/HeaderStyle3';

const LayoutStyle3 = ({ children }) => {
    return (
        <>
            <div className="wrapper">
                <HeaderStyle3 />
                {children}
                <FooterStyle1 shape={shape38} shapeClass="bottom" logo={logoLightSolid} formStyle="secondary" />
            </div>
        </>
    );
};

export default LayoutStyle3;