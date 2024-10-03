import React from 'react';
import StackIcon from 'tech-stack-icons' // Import your StackIcon component

function Project() {
    return (
        <div className='w-full max-w-6xl mx-auto mb-4'>
            {/* Heading */}
            <h2 className="text-3xl font-bold text-center lg:text-left mb-4">Tech Stack</h2>

            {/* Icons Container */}
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4'>
                {/* Icon 1 */}
                <div className='flex justify-center items-center w-32 h-28 rounded-md bg-gray-800 bg-opacity-60 backdrop-filter backdrop-blur-md shadow-lg'>
                    <StackIcon name="nextjs" />
                </div>


                {/* Icon 2 */}
                <div className='flex justify-center items-center w-32 h-28 rounded-md bg-gray-800 bg-opacity-0 backdrop-filter backdrop-blur-md shadow-lg'>
                    <StackIcon name="reactjs" />
                </div>


                {/* Icon 3 */}
                <div className='flex justify-center items-center w-32 h-28 rounded-md bg-gray-800 bg-opacity-60 backdrop-filter backdrop-blur-md shadow-lg'>
                    <StackIcon name="nodejs" />
                </div>

                <div className='flex justify-center items-center w-32 h-28 rounded-md bg-gray-800 bg-opacity-60 backdrop-filter backdrop-blur-md shadow-lg'>
                    <StackIcon name="js" />
                </div>

                <div className='flex justify-center items-center w-32 h-28 rounded-md bg-gray-800 bg-opacity-60 backdrop-filter backdrop-blur-md shadow-lg'>
                    <StackIcon name="tailwindcss" />
                </div>

                <div className='flex justify-center items-center w-32 h-28 rounded-md bg-gray-800 bg-opacity-60 backdrop-filter backdrop-blur-md shadow-lg'>
                    <StackIcon name="typescript" />
                </div>

                {/* Icon 4 */}
                <div className='flex justify-center items-center w-32 h-28 rounded-md bg-gray-800 bg-opacity-0 backdrop-filter backdrop-blur-md shadow-lg'>
                    <StackIcon name="mongodb" />
                </div>



                <div className='flex justify-center items-center w-32 h-28 rounded-md bg-gray-800 bg-opacity-0 backdrop-filter backdrop-blur-md shadow-lg'>
                    <StackIcon name="postgresql" />
                </div>

                <div className='flex justify-center items-center w-32 h-28  bg-[#f7f3e8] rounded-md backdrop-filter backdrop-blur-md shadow-lg'>
                    <StackIcon name="prisma" />
                </div>

                <div className='flex justify-center items-center w-32 h-28 rounded-md bg-white bg-opacity-40 backdrop-filter backdrop-blur-md shadow-lg'>
                    <StackIcon name="postman" className='text-white'/>
                </div>



                <div className='flex justify-center items-center w-32 h-28 rounded-md bg-gray-800 bg-opacity-0 backdrop-filter backdrop-blur-md shadow-lg'>
                    <StackIcon name="python" />
                </div>

                <div className='flex justify-center items-center w-32 h-28 rounded-md bg-gray-900 bg-opacity-0 backdrop-filter backdrop-blur-md shadow-lg'>
                    <StackIcon name="aws" />
                </div>

                <div className='flex justify-center items-center w-32 h-28 rounded-md bg-gray-900 bg-opacity-0 backdrop-filter backdrop-blur-md shadow-lg'>
                    <StackIcon name="docker" />
                </div>

                <div className='flex justify-center items-center w-32 h-28 rounded-md bg-gray-900 bg-opacity-0 backdrop-filter backdrop-blur-md shadow-lg'>
                    <StackIcon name="linux" />
                </div>

                <div className='flex justify-center items-center w-32 h-28 rounded-md bg-[#f7f3e8] bg-opacity- backdrop-filter backdrop-blur-md shadow-lg'>
                    <StackIcon name="github" />
                </div>

                <div className='flex justify-center items-center w-32 h-28 rounded-md bg-gray-900 bg-opacity-0 backdrop-filter backdrop-blur-md shadow-lg'>
                    <StackIcon name="git" />
                </div>

                {/* Add more icons as needed */}
            </div>
        </div>
    )
}

export default Project;



/* import StackIcon from 'tech-stack-icons' */

