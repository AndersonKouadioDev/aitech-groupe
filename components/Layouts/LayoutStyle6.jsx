import React from 'react';
import FooterStyle1 from '../footer/FooterStyle1';
import shape38 from '@/public/assets/img/shape/38.png';
import logoLightSolid from '@/public/assets/img/logo-light-solid.png';
import HeaderStyle6 from '../header/HeaderStyle6';

const LayoutStyle6 = ({ children }) => {
    return (
        <>
            <div className="wrapper">
                <HeaderStyle6 />
                {children}
                <FooterStyle1 shape={shape38} shapeClass="bottom" logo={logoLightSolid} formStyle="secondary" />
            </div>
        </>
    );
};

export default LayoutStyle6;