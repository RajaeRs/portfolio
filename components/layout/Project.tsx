import { ReactNode } from "react";

export const PageSection = ({title, description}: {title: string, description: ReactNode}) => {
    return (
        <div className="w-full pt-4">
            <h3 className="text-lg font-bold">{title}</h3>
            <div className="pt-1 ml-10 md:ml-16">
                {description}
            </div>
        </div>
    )
}
const Project = () => {
    return (
        <section id="projects" className="min-h-[100vh] pt-10 md:pt-20">
            {/* <div className="container w-full justify-between flex">
                <p className="text-xl font-bold">projects(2)</p>
                <p className="text-xl">I Learn A ....</p>
                <p className="text-xl font-bold">projects(2)</p>
            </div>
            <div className="">
                <div className="container w-full">
                    <div className="flex flex-col-reverse md:flex-row pt-10">
                        <div className="w-[80%]  border border-accent/20 rounded-xl">
                            
                        </div>
                        <div className="w-full">
                            <PageSection title="Project name" description={<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi laoreet feugiat mattis.  tfeugi mattis.  t feugiat mattis. </p>} />
                        </div>
                    </div>
                </div>
            </div> */}
            
        </section>
    )
}

export default Project;