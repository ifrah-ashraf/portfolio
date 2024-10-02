import React from 'react';
import { TextGenerateEffectDemo } from '../components/TextGenerateEffectDemo';
import { ShootingStarsAndStarsBackgroundDemo } from '../components/ShootingStarsAndStarsBackgroundDemo';
import Image from 'next/image';
import Project from './Project';
import Icons from '../components/Icons';

function About() {
    return (
        <div
            id="about"
            className="relative flex flex-col items-center justify-center w-full p-8 bg-gray-700"
        >
            {/* Shooting Stars Background */}
            <div className="absolute top-0 left-0 min-h-screen w-full h-full z-0">
                <ShootingStarsAndStarsBackgroundDemo />
            </div>

            {/* Content Section */}
            <div className="relative z-10 flex flex-col items-center justify-between w-full max-w-6xl text-white space-y-8"> {/* Adjusted from space-y-12 to space-y-8 */}
                {/* About Section */}
                <div className="flex flex-col md:flex-row items-center justify-between w-full mb-24"> {/* Adjusted from mb-12 to mb-8 */}
                    {/* Image Avatar */}
                    <div className="mb-2 md:mb-0 md:mr-4"> {/* Adjusted mb-4 to mb-2 and md:mr-8 to md:mr-4 */}
                        <Image
                            src="/images/alex-suprun-ZHvM3XIOHoE-unsplash.jpg"
                            alt="Your Avatar"
                            width={192}
                            height={192}
                            className="rounded-full object-cover shadow-lg"
                        />
                    </div>

                    {/* Text Effect Section */}
                    <div className="text-left max-w-2xl">
                        <TextGenerateEffectDemo />
                    </div>
                </div>

                {/* Icons Section */}
                <div className='flex justify-center'>
                    <Icons />
                </div>

                {/* Projects Section */}
                <div className="w-full">
                    <Project />
                </div>
            </div>

        </div>
    );
}

export default About;
