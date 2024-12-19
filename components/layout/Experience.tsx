import React from "react"
import Image from "next/image"

interface JobProps{
    dots : boolean,
    year ?: number,
    position ?: 'top' | 'bottom',
    title ?: React.ReactNode,
    type ?: string,
    company ?: string,
    duration ?: string,
    skills ?: {
        name : string
    }[],
    tools ?: {
        iconPath : string,
        alt : string,
    }[]
}

const Job : React.FC<JobProps>  = ({
    dots,
    year,
    position,
    title,
    type,
    company,
    duration,
    skills,
    tools
}) => {
    return (
        <div className="flex flex-row h-full lg:flex-col lg:w-full items-center w-full
        ">
            <div className="h-[30px] text-center w-[80px] lg:w-[200px]" ><p>{year}</p></div>
            <div className={`lg:hidden border-r border-accent ${position == 'top' ? 'lg:h-[50px] h-[350px]' : 'lg:h-[200px] h-[350px]'}` }></div>
            <div className={`h-[350px] lg:h-[20px] lg:w-full ${position == 'top' ? 'w-[5%] md:w-[20%]' : 'w-[15%] md:w-[40%]'} flex flex-col lg:items-center  justify-center relative `}>
                <div className="rounded-full h-[20px] w-[20px] bg-background border border-accent/50 absolute  -left-[10px] lg:left-auto"></div>
                <div className="border-b border-accent/50 w-full "></div>
            </div>
            <div className={`hidden lg:block border-l border-accent/50 ${position == 'top' ? 'h-[50px]' : 'h-[200px]'}` }></div>
            <div className="rounded-full h-[20px] w-[20px] bg-background border border-accent/50  "></div>
            { dots == false &&
                <div className="flex flex-col w-max gap-2 p-4 h-[350px]">
                    <p className="text-xl font-bold">{title}</p>
                    <p>{type} at {company}</p>
                    <p>{duration}</p>
                    <ul className="list-disc pl-8">
                        {skills && skills.map((skill, key) => (
                            <li key={key}>{skill.name}</li>
                        ))}
                    </ul>
                    <div className="flex flex-row gap-4 pt-4">
                        {tools && tools.map((tool, key) => (
                            <Image 
                                key = {key}
                                src = {tool.iconPath}
                                alt = {tool.alt}
                                width={30}
                                height={30}
                            />
                        ))}
                    </div>
                </div>
            }
            {
                dots && 
                <div className="flex flex-row gap-2 w-max pl-8 lg:pl-4 p-4">
                    {[...Array(3)].map((_, i) => (
                        <div 
                            key={i} 
                            className="rounded-full h-[12px] w-[12px] bg-background border border-accent/50"
                        ></div>
                    ))}
                </div>
            }
        </div>
    )
}


const Experience = () => {
    const Jobs: JobProps[] = [
        {
            dots : false,
            year : 2022,
            position : 'top' as const,
            title : <>UI / UX Designer</>,
            type : 'Full Time',
            company : 'EZAYN Agency',
            duration : '1 year',
            skills : [
                { name : 'Product Design'},
                { name : 'Prototyping'},
                { name : 'Web Design'},
                { name : 'User Experience Design'},
            ]
            ,
            tools : [
                { iconPath : '/icons/illustrator.png' , alt : 'illustrator logo'},
                { iconPath : '/icons/xd.png' , alt : 'xd logo'},
                { iconPath : '/icons/figma.png' , alt : 'figma logo'}
            ]
        },
        {
            dots : false,
            year : 2023,
            position : 'bottom' as const,
            title : <>Tutor - Staff</>,
            type : 'Volunteering',
            company : '1337 School',
            duration : '4 months',
            skills : [
                { name : 'Event organization'},
                { name : 'Prototyping'},
                { name : 'Exam supervision'},
                { name : 'Code reviews'},
            ]
            ,
            tools : [
                { iconPath : '/icons/discord.png' , alt : 'discord logo'},
                { iconPath : '/icons/slack.png' , alt : 'slack logo'},
            ]
        },
        {
            dots : false,
            year : 2024,
            position : 'top' as const,
            title : <>Frontend<br/>& UI / UX Development</>,
            type : 'Internship',
            company : 'Leet Initiative - 1337',
            duration : '6 months',
            skills : [
                { name : 'Web Design'},
                { name : 'Prototyping'},
                { name : 'React'},
                { name : 'NextJS '},
                { name : 'Tailwind'},
            ]
            ,
            tools : [
                { iconPath : '/icons/figma.png' , alt : 'figma logo'},
                { iconPath : '/icons/nextjs.svg' , alt : 'nextjs logo'},
                { iconPath : '/icons/tailwind-css.svg' , alt : 'tailwind-css logo'},
                { iconPath : '/icons/atom.png' , alt : 'react logo'}
            ]
        },
        {
            dots: true,
            position: 'top' as const,
        }
    ]

    return (
        <section id="experience" className="container w-full min-h-max flex flex-col items-center justify-center py-20 lg:py-36">
            <div className="container w-full justify-between flex gap-10 pb-20 uppercase">
                <p className="text-xl font-bold">experience(2)</p>
                <p className="text-xl capitalize">good time</p>
                <p className="text-xl font-bold">experience(2)</p>
            </div>
            <div className="flex flex-col lg:flex-row w-full h-full ">
                {Jobs.map((job, key) => (
                    <Job key={key} {...job}/>
                ))}
            </div>
        </section>
    )
}

export default Experience;