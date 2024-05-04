import FeaturedTopicsSection from '@/components/Home/FeaturedTopicsSection';
import HeroSection from '@/components/Home/HeroSection';
import LatestArticlesSection from '@/components/Home/LatestArticlesSection';
import TopCoursesSection from '@/components/Home/TopCoursesSection';
import React from 'react';


const Home: React.FC = () => {
    return (
        <div className="home-page">
            <HeroSection />
            <FeaturedTopicsSection />
            <TopCoursesSection />
            <LatestArticlesSection />

        </div>
    );
}

export default Home;
