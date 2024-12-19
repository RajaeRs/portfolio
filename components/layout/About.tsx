import { ReactNode } from "react"
import ImageSection from "./ImageSection"

type SubPart = {
    title: string
    section: {
        title: string
        description: string
    }[]
}

export const PageSection = ({title, description, subPart}: {title: string, description: ReactNode, subPart?: SubPart}) => {
    return (
        <div className="w-full pt-4">
            <h3 className="text-lg font-bold">{title}</h3>
            <div className="pt-1 ml-10 md:ml-16">
                {description}
                {subPart && (
                    <div className="">
                        <p className="text-md font-bold pt-2">{subPart.title}:</p>
                        {subPart.section.map((item, index) => (
                            <div key={index} className="pt-1">
                                <p className="underline decoration-1 decoration-black/50">{item.title}:</p>
                                <p className="pl-8 md:pl-12">{item.description}</p>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}


const About = () => {
    const subPart: SubPart = {
        title: "Skills Overview",
        section: [
            {title: "Front-end", description: "TypeScript / React / Next.js"},
            {title: "Styling", description: "Sass / Bootstrap"},
            {title: "Back-end", description: "Django / MySQL / Redis / Microservices"},
            {title: "Technologies, tools, and topics worked with", description: "Docker / Nginx / Shell / Bash / VMs"},
            {title: "Interests", description: "UI/UX Design "},
        ]
    }
    return (
        <section id="about" className="min-h-max pt-10 md:pt-20 pb-20 xl:pb-0 flex justify-center items-center py-20 lg:py-36">
            <div className="max-h-max ">
                <div className="container w-full justify-between flex">
                    <p className="text-xl font-bold">About Me</p>
                    <p className="text-xl">How Am I ?</p>
                    <p className="text-xl font-bold">About Me</p>
                </div>
                <div className="container w-full pt-10 md:mt-20 flex flex-col-reverse md:flex-row relative">
                    <div className="w-full">
                        <PageSection title="NAME" description={<p>Rajae RASEZINE</p>} />
                        <PageSection title="SYNOPSIS" description={<p><span className="font-bold">Front-end</span> developer with entry-level experience.</p>} />
                        <PageSection 
                            title="DESCRIPTION" 
                            description={<p>Motivated Moroccan front-end developer with a passion for learning new technologies and taking on challenging projects. I enjoy working in dynamic environments where I can contribute to innovative solutions and continuously improve my skills.</p>} 
                            subPart={subPart}
                        />
                    </div>
                    <div className="w-full h-full">
                        <ImageSection imageUrl="/images/me-2.png" />
                    </div>
                </div>
            </div>

            </section>
    )
}

export default About;