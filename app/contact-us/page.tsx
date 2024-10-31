import LayoutStyle7 from '@/components/Layouts/LayoutStyle7';
import ContactMap from '@/components/contact/ContactMap';
import ContactUsContent from '@/components/contact/ContactUsContent';
import React from 'react';

export const metadata = {
    title: "Aitech-Groupe - IT Company - Contact Us"
}

const ContactUs = () => {
    return (
        <>
            <LayoutStyle7 breadCrumb="Contactez-nous" title="Pour nous joindre">
                <ContactUsContent />
                <ContactMap />
            </LayoutStyle7>
        </>
    );
};

export default ContactUs;