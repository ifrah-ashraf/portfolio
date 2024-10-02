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
                    title: "This is my project 1",
                    description: "Hover over it to see the effect",
                    image_url: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    link_url: "https://github.com/ifrah-ashraf/agni"
                }} />

                {/* Project 2 */}
                <ThreeDCardDemo body={{
                    title: "This is my project 2",
                    description: "Hover over it to see the effect",
                    image_url: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    link_url: "https://github.com/ifrah-ashraf/agni"
                }} />

                {/* Project 3 */}
                <ThreeDCardDemo body={{
                    title: "This is my project 3",
                    description: "Hover over it to see the effect",
                    image_url: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    link_url: "https://github.com/ifrah-ashraf/agni"
                }} />

                <ThreeDCardDemo body={{
                    title: "This is my project 3",
                    description: "Hover over it to see the effect",
                    image_url: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    link_url: "https://github.com/ifrah-ashraf/agni"
                }} />

                <ThreeDCardDemo body={{
                    title: "This is my project 3",
                    description: "Hover over it to see the effect",
                    image_url: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    link_url: "https://github.com/ifrah-ashraf/agni"
                }} />

                <ThreeDCardDemo body={{
                    title: "This is my project 3",
                    description: "Hover over it to see the effect",
                    image_url: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    link_url: "https://github.com/ifrah-ashraf/agni"
                }} />
            </div>
        </div>
    )
}

export default Project;
