import HeroSection from '../components/home/HeroSection';
import WhatIsKlubit from '../components/home/WhatIsKlubit';
import StatsSection from '../components/home/StatsSection';
import FeaturesKlubs from '../components/home/FeaturesKlubs';
import FeaturesRRPPs from '../components/home/FeaturesRRPPs';
import FeaturesEvents from '../components/home/FeaturesEvents';
import FeaturesCustomers from '../components/home/FeaturesCustomers';
import LargeImageSection from '../components/home/LargeImageSection';
import AdvantagesSection from '../components/home/AdvantagesSection';
import Form from '../components/home/Form';

function Home() {
    return (
        <>
            <HeroSection />
            <WhatIsKlubit />
            <StatsSection />
            <FeaturesKlubs />
            <FeaturesRRPPs />
            <FeaturesEvents />
            <FeaturesCustomers />
            <LargeImageSection />
            <AdvantagesSection />
            <Form />
        </>
    );
}

export default Home;