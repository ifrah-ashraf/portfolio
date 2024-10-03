"use client";
/* src/components/ui/3d-card.tsx*/

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "../../components/ui/3d-card";
import Link from "next/link";

/* head title
   description
 */

type BodyProps = {
  title : string ,
  description : string ,
  image_url : string ,
  link_url : string
}

export function ThreeDCardDemo({ body} : { body : BodyProps}) {
  return (
    <CardContainer className="inter-var">
      <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[20rem] h-auto rounded-xl p-4 border"> {/* Reduced width and padding */}
        <CardItem
          translateZ="50"
          className="text-lg font-bold text-neutral-600 dark:text-white" // Reduced text size
        >
          
          {body.title}
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
          {body.description}
        </CardItem>
        <CardItem
          translateZ="100"
          rotateX={20}
          rotateZ={-10}
          className="w-full mt-4"
        >
          <Image
            src={body.image_url}
            height="400" // Adjusted image height
            width="400" // Adjusted image width
            className="h-40 w-full object-cover rounded-xl group-hover/card:shadow-xl" // Adjusted image height
            alt="thumbnail"
          />
        </CardItem>
        <div className="flex justify-end items-center mt-4"> {/* Adjusted margin top */}
          <CardItem
            translateZ={20}
            translateX={-40}
            as="button"
            className="px-3 py-1 rounded-xl text-xs font-normal dark:text-white"
          >
            <Link 
              href={body.link_url} target="_blank" rel="noopener noreferrer"
            >
            Try now →
            </Link>
          </CardItem>
          
        </div>
      </CardBody>
    </CardContainer>
  );
}
