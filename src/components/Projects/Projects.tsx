"use client";

import { motion } from "framer-motion";

function ProjectCard({title, image, description, links}: {title: string, image: string, description: string, links: string[]}) {
    return (
        <div className="flex flex-col items-center">
            <img src={image} alt={title} />
            <h3>{title}</h3>
            <p>{description}</p>
            <div>
                {links.map((link, index) => (
                    <a key={index} href={link}>
                        {link}
                    </a>
                ))}
            </div>
        </div>
    );
};
    

export function Projects() {
    return (
        <section id="proyectos" className="py-20 bg-green mt-[-300px] min-h-[100vh]">
            <div className="text-center">
                <h1 className="font-heading text-4xl md:text-5xl text-sand mt-4">
                    Proyectos
                </h1>
                <div>

                </div>
            </div>
        </section>
    );
};
