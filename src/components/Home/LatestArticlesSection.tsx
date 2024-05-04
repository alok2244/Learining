import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { InfiniteCards } from '@/components/shared/infinity-card';

const LatestArticlesSection: React.FC = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/article');
    };

    return (
        <section className="w-full py-12 bg-gray-100 dark:bg-gray-800">
            <div className="space-y-2 mb-10 ">
                <Link to="/article" className="text-black hover:underline focus:outline-none" onClick={handleClick}>
                    <h2 className="text-3xl center font-bold tracking-tighter sm:text-4xl md:text-5xl cursor-pointer">Lastest Artical</h2>
                </Link>
                <div className="w-full text-center">
                    <p className="text-lg font-semibold text-gray-800">See Latest Artical on tranding event , science ,technology and many more exciting topic</p>
                    <p className="text-sm text-gray-600 mt-2">Stay updated with the latest trends in various fields. Explore and select topics that interest you the most.</p>
                </div>
            </div>
            <div className="center">
                <InfiniteCards />
            </div>
        </section>
    );
}

export default LatestArticlesSection;
