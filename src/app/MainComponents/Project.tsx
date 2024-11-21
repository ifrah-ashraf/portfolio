import React from 'react'
import { ThreeDCardDemo } from '../components/ThreeDCardDemo'

function Project() {
    return (
        <div id="project" className='w-full max-w-6xl mx-auto '>
            {/* Heading */}
            <h2 className="text-3xl font-bold text-left ml-8 mb-2">Projects</h2>

            {/* Cards Container */}
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0'>
                {/* Project 1 */}
                <ThreeDCardDemo body={{
                    title: "Multithreaded-Scrapper",
                    description: "🚀 Built the scrapper from scratch that leverages go routine to scrape all the links.",
                    image_url: "/images/scrapper.jpg",
                    link_url: "https://github.com/ifrah-ashraf/multithreaded-scrapper"
                }} />

                {/* Project 2 */}
                <ThreeDCardDemo body={{
                    title: "Smart India hackathon Project",
                    description: "Built the Algorithm that allocates resource dynamically for standandardizing the school.  ",
                    image_url: "/images/school.jpg",
                    link_url: "https://github.com/ifrah-ashraf/agni"
                }} />

                {/* Project 3 */}
                <ThreeDCardDemo body={{
                    title: "Live chat application",
                    description: "Building real time chat application with golang and NextJS",
                    image_url: "/images/work_in_progress.jpg",
                    link_url: "https://github.com/ifrah-ashraf/livechat"
                }} />

            </div>
        </div>
    )
}

export default Project;
