import React from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { TextGenerateEffect } from '@/components/ui/text-genrate-effect';

const HeroSection: React.FC = () => {
    return (
        <section className="w-full py-52">
            <div className="container grid items-center gap-4 px-4 text-center md:px-6 lg:gap-10">
                <div className="space-y-3">
                    <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl/tight lg:text-6xl/none">
                        Learn Anything
                    </h1>
                    <p>
                        <TextGenerateEffect
                            words="Access thousands of high-quality tutorials across various subjects. From web development to machine learning, we've got you covered."
                        />
                    </p>
                </div>
                <div className="mx-auto max-w-sm space-y-2">
                    <form className="flex">
                        <Input className="max-w-lg flex-1 border-[1px] border-black px-4 rounded-l-full" placeholder="Enter your email" type="email" />
                        <Button className='bg-black text-white px-8 py-2 rounded-r-full' type="submit">Sign Up</Button>
                    </form>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                        Sign up to get notified when we launch.
                        <Link className="underline underline-offset-2" to="#">
                            Terms & Conditions
                        </Link>
                    </p>
                </div>
            </div>
        </section>
    );
}

export default HeroSection;
