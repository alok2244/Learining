import React from 'react';
import Card from '@/components/ui/Topic_Card';
import { Link, useNavigate } from 'react-router-dom';

const FeaturedTopicsSection: React.FC = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/topics');
    };
    return (
        <section className="w-full py-12 bg-gray-100 dark:bg-gray-800">
                <div className="space-y-2 mb-10 ">
                <Link to="/topics" className="text-black hover:underline focus:outline-none" onClick={handleClick}>
                <h2 className=" text-3xl center font-bold tracking-tighter sm:text-4xl md:text-5xl">Featured Topic</h2>
                </Link>
                    <div className="w-full text-center">
                        <p className="text-lg font-semibold text-gray-800">Top Trending Topics - Choose As Per Your Needs</p>
                        <p className="text-sm text-gray-600 mt-2">Stay updated with the latest trends in various fields. Explore and select topics that interest you the most.</p>
                    </div>

                </div>
                <div className="center">

                    <div className=" grid gap-8 px-6 md:px-6 lg:grid-cols-4 lg:gap-16 w-3/4">

                        <div className="space-y-8 xl:space-y-10">
                            <Card link="/Python/Home" buttonText="Python" />
                        </div>
                        <div className="space-y-8 xl:space-y-10">
                            <Card link="Java/Home" buttonText="Java" />
                        </div>
                        <div className="space-y-8 xl:space-y-10">
                            <Card link="C++/Home" buttonText="C++" />
                        </div>
                        <div className="space-y-8 xl:space-y-10">
                            <Card link="React/Home" buttonText="React" />
                        </div>
                        <div className="space-y-8 xl:space-y-10">
                            <Card link="Perl/Home" buttonText="Perl" />
                        </div>
                        <div className="space-y-8 xl:space-y-10">
                            <Card link="Ruby/Home/Home" buttonText="Ruby" />
                        </div>
                        <div className="space-y-8 xl:space-y-10">
                            <Card link="JavaScript/Home" buttonText="JavaScript" />
                        </div>
                        <div className="space-y-8 xl:space-y-10">
                            <Card link="Go/Home" buttonText="Go" />
                        </div>
                        <div className="space-y-8 xl:space-y-10">
                            <Card link="Swift/Home" buttonText="Swift" />
                        </div>
                        <div className="space-y-8 xl:space-y-10">
                            <Card link="Rust/Home" buttonText="Rust" />
                        </div>
                        <div className="space-y-8 xl:space-y-10">
                            <Card link="PHP/Home" buttonText="PHP" />
                        </div>
                        <div className="space-y-8 xl:space-y-10">
                            <Card link="TypeScript/Home" buttonText="Exp" />
                        </div>
                    </div>
                </div>
            </section>
    );
}

export default FeaturedTopicsSection;
