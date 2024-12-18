import Welcome from '@/components/layout/Welcome';
import About from '@/components/layout/About';
// import Project from '@/components/layout/Project';
import Contact from '@/components/layout/Contact';
import Experience from '@/components/layout/Experience';

export default function Home() {
  return (
    <>
      <Welcome />
      <About />
      <Experience />
      {/* <Project /> */}
      <Contact />
    </> 
  );
}
