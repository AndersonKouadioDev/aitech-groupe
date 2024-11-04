"use client";
import React from 'react';
import logo from '@/public/assets/img/logo.png';
import logo2 from '@/public/assets/img/logo-light.png';
import Image from 'next/image';
import Link from 'next/link';

const HeaderLogo = ({ openMenu,isMenuSticky }) => {
    return (
        <>
            <div className="">
                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navbar-menu" onClick={openMenu}>
                    <i className="fa fa-bars"></i>
                </button>
                <Link className="navbar-brand" href="/">
                    <Image src={isMenuSticky?logo:logo2} className="logo" alt="Logo" />
                </Link>
            </div>
        </>
    );
};

export default HeaderLogo;