"use client";
import { TextGenerateEffect } from "../../components/ui/text-generate-effect";

const words = `Hello, world! I'm Ifrah Ashraf, an engineer driven by a passion for problem-solving. My programming journey began with C, and I soon explored various fields of computer science. Web development, in particular, captured my interest, and building full-stack projects has solidified my skills in both frontend and backend development.

 `;

export function TextGenerateEffectDemo() {
    return <TextGenerateEffect words={words} />;
}
