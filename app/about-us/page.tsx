import LayoutStyle7 from '@/components/Layouts/LayoutStyle7';
import AboutStyle1 from '@/components/about/AboutStyle1';
import Mission from '@/components/about/Mission';
import PartnerStyle1 from '@/components/partner/PartnerStyle1';
import ProcessStyle1 from '@/components/process/ProcessStyle1';
import TeamStyle1 from '@/components/team/TeamStyle1';
import React from 'react';

export const metadata = {
    title: "Aitech-CI - IT Company - About Us"
}

const AboutUsPage = () => {
    return (
        <>
            <LayoutStyle7 breadCrumb="A Propos de nous" title="Qui sommes-nous ?">
                <AboutStyle1 />
                <Mission />
                <ProcessStyle1 sectionClass="bg-gray" />
                <PartnerStyle1 sectionClass="default-padding" />
                <TeamStyle1 sectionClass="bg-gray" teamTitle={true} />
            </LayoutStyle7>
        </>
    );
};

export default AboutUsPage;