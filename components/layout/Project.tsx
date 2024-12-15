import { PageSection } from "./about"

const Project = () => {
    return (
        <section id="projects" className="h-screen pt-10 md:pt-20">
            <div className="container w-full justify-between flex">
                <p className="text-xl font-bold">projects(2)</p>
                <p className="text-xl">I Learn A ....</p>
                <p className="text-xl font-bold">projects(2)</p>
            </div>
            <div className="">
                {/* <div 
                    className="absolute inset-0 bg-[url('/images/background.svg')] bg-cover bg-no-repeat bg-top -z-10">
                </div> */}
                <div className="container w-full">
                    <div className="flex flex-col-reverse md:flex-row pt-10">
                        <div className="w-[80%] h-[800px] border border-accent/20 rounded-xl">
                            
                        </div>
                        <div className="w-full">
                            <PageSection title="Project name" description={<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi laoreet feugiat mattis.  tfeugi mattis.  t feugiat mattis. </p>} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Project;