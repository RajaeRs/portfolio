import Link from "next/link";
import Image from "next/image";
import ImageSection from "./ImageSection";

const Contact = () => {
    const socialMedia = [
        {
            name: 'RajaeRs',
            url: 'https://www.linkedin.com/in/rajae-rasezine/',
            icon: '/icons/linkedin.png'
        },
        {
            name: 'rajae-rasezine',
            url: 'https://github.com/RajaeRs',
            icon: '/icons/github.png'
        },
        {
            name: 'rasezine rajae',
            url: 'https://www.behance.net/rasezinerajae',
            icon: '/icons/behance.png'
        },
        {
            name: 'rajaerasezine@gmail.com',
            url: 'mailto:rajaerasezine@gmail.com',
            icon: '/icons/gmail.png'
        }
    ]

    return (
        <section id="contact" className="min-h-map py-20 flex flex-col items-center justify-center">
            <div className="container w-full justify-between flex gap-10 pb-20">
                <p className="text-xl font-bold">contact(4)</p>
                <p className="text-xl capitalize">you are welcome</p>
                <p className="text-xl font-bold">contact(4)</p>
            </div>
            <div className="container full flex flex-col md:flex-row h-full">
                <div className="w-full">
                    <ImageSection imageUrl="/images/coffee.png"/>
                </div>
                <div className="w-full flex flex-col gap-10 h-full justify-center p-10">
                    {socialMedia.map((media, index) => {
                        // For email, use special handling
                        const isEmail = media.name.includes('@');
                        const linkProps = isEmail 
                            ? { 
                                href: media.url,
                                target: undefined,
                                rel: undefined 
                              }
                            : { 
                                href: media.url, 
                                target: "_blank", 
                                rel: "noopener noreferrer" 
                              };

                        return (
                            <Link 
                                key={index}
                                {...linkProps}
                                className="flex items-center gap-2 w-36 hover:text-accent transition-colors" 
                            > 
                                <Image 
                                    src={media.icon}
                                    alt={media.name} 
                                    width={30} 
                                    height={30} 
                                    className="w-[30px]"
                                />
                                {media.name}
                            </Link>
                        )
                    })}
                </div>

            </div>
            <div className="container w-full justify-center flex flex-col w-max text-center  pt-10 capitalize">
                <p className="text-xl text-accent">thank you !</p>
                <p className="text-xl ">let’s work together !</p>
            </div>
        </section>
    )
}

export default Contact;