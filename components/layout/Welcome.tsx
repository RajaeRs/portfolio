'use client'

const Welcome = () => {
  return (
    <section id="welcome" className="h-screen flex flex-col items-center justify-center   ">
      <div className="flex flex-col px-2 ">
        <p className="text-2xl md:text-4xl font-bold  min-w-[max-content]">
            $ <span className="h-full  bg-accent text-accent mx-4"> 0 </span>Front-end Developer,
        </p>
        <div className="flex flex-col-reverse md:flex-row pt-6">
            <p className="max-w-[440px] pt-10 md:pt-0">As a Moroccan front-end developer, I specialize in creating clean, responsive websites that prioritize user experience.</p>
            <p className="  text-2xl md:text-4xl font-bold  min-w-[max-content]">& UI / UX Designer</p>
        </div>
      </div>

    </section>  
  )
}

export default Welcome; 