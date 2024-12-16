'use client'

const Welcome = () => {
  return (
    <section id="welcome" className="h-screen flex flex-col items-center justify-center   ">
      <div className="flex flex-col px-2 ">
        <p className="text-2xl md:text-4xl font-bold  min-w-[max-content]">
            $ <span className="h-full  bg-accent text-accent mx-4"> 0 </span> Designing with Precision,
        </p>
        <div className="flex flex-col-reverse md:flex-row pt-6">
            <p className="max-w-[440px] pt-10 md:pt-0">As a Moroccan front-end developer, I specialize in creating clean, responsive websites that prioritize user experience.</p>
            <p className="  text-2xl md:text-4xl font-bold  min-w-[max-content]">Developing with Passion</p>
        </div>
      </div>

    </section>  
  )
}

export default Welcome; 



{/* <div className="w-full h-[500px] flex justify-center items-center mt-4 md:mt-20 relative">
<Carousel 
  opts={{
    align: "center", // Align items to the start (left)
    loop: true, // Infinite loop
  }}
  plugins={[
    Autoplay({
      delay: 2000,
    }),
  ]}
  className="w-[100%] h-full absolute center"
>
  <CarouselContent className="gap-10 p-20">
    <CarouselItem className="md:basis-1/2 lg:basis-1/3 2xl:basis-1/4 h-48 rounded-lg bg-card p-0">
      <div className="w-[65%] h-full bg-popover rounded-r-lg ml-auto flex flex-col gap-4 justify-center items-start p-2 md:p-8">
        <p className=" font-bold">Project 1</p>
        <p className="text-sm line-clamp-4 md:line-clamp-2 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel corrupti voluptatem ab sed eveniet exercitationem dolore eos, quaerat ea tempore consequuntur nemo maxime dolorem inventore eum aperiam tempora commodi aut.</p>
        <div className="flex gap-2 flex-row items-center">
          <p className="text-xs py-1 bg-card text-card-foreground font-bold px-4 md:px-8 rounded-full">Read more</p>
          <div className="flex gap-2 flex-row items-center rounded-full bg-primary p-1">
            <MousePointerClick strokeWidth={1.5} className="w-4 h-4" />
          </div>
        </div>
      </div>
    </CarouselItem>
    <CarouselItem className="md:basis-1/2 lg:basis-1/3 2xl:basis-1/4 h-48 rounded-lg bg-card  md:mt-20">Project 2</CarouselItem>
    <CarouselItem className="md:basis-1/2 lg:basis-1/3 2xl:basis-1/4 h-48 rounded-lg bg-card ">Project 3</CarouselItem>
    <CarouselItem className="md:basis-1/2 lg:basis-1/3 2xl:basis-1/4 h-48 rounded-lg bg-card md:mt-20">Project 4</CarouselItem>
    <CarouselItem className="md:basis-1/2 lg:basis-1/3 2xl:basis-1/4 h-48 rounded-lg bg-card ">Project 5</CarouselItem>
    <CarouselItem className="md:basis-1/2 lg:basis-1/3 2xl:basis-1/4 h-48 rounded-lg bg-card md:mt-20 ">Project 6</CarouselItem>
  </CarouselContent>
</Carousel>
</div> */}