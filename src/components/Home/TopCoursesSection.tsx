import React from 'react';
import { Button } from "@/components/ui/button";
import { Slider } from '@/components/shared/slider';
import { Link, useNavigate } from 'react-router-dom';

const TopCoursesSection: React.FC = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/course');
    };
    return (
        <section className="w-full py-16 ">
                <div className="container grid items-center gap-4 px-4 text-center md:px-6 lg:gap-10">
                    <div className="space-y-2">
                        
                        <Link to="/course" className="text-black hover:underline focus:outline-none" onClick={handleClick}>
                        <h2 className=" text-3xl center h3-bold tracking-tighter sm:text-4xl md:text-5xl">TOP COURSE</h2>
                        </Link>

                    </div>
                    <div className='flex justify-evenly dark:bg-gray-800 bg-gray-100 py-10  border-none rounded-[2.5rem]'>
                        <div className='h-50 w-1/2 border-gray-200 rounded-[2.5rem] border-[1px] bg-white'>
                            <div className='p-16'>
                                <p className='p-2'>"Explore our top courses for diverse opportunities. Whether for career growth or personal enrichment, we've got you covered."</p>
                                <p className='p-2'>"Join a vibrant community of learners. Our top courses offer expert instruction and flexibility to fit your schedule."</p>
                                <p className='p-2'>"Ready to shape your future? Enroll now in our top courses and reach your goals in technology, business, and more."</p>
                            <Button className='bg-gray-400 mt-5 text-xl text-white py-2 px-10 rounded-full border-[1px]'>

                                Explore
                            </Button>
                            </div>


                        </div>
                        <div>
                            <Slider />
                        </div>
                    </div>

                </div>
            </section>
    );
}

export default TopCoursesSection;
