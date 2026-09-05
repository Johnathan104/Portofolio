import Hero from './components/Hero';
import Background from './components/Background';
import Services from './components/Services';
import Projects from "./components/Projects";
import AboutMe from './components/AboutMe';

export default function Home() {
  return (
    <div className="relative flex flex-col flex-1 items-center justify-center font-sans">
      <div className="fixed inset-0 -z-10 bg-gradient-to-br from-dark to-ink" />
      <div className="min-h-[100vh] flex flex-col items-center justify-center">
        <Hero/>
      </div>
      <div className=" w-full p-4 flex flex-col items-center justify-center">
        <AboutMe/>
      </div>
      <div className=" w-full p-4 flex flex-col items-center justify-center">
        <Projects/>
      </div>
      <div className="min-h-[100vh] w-full p-4 flex flex-col items-center justify-center">
        <Background/>  
      </div>is github pages able to render next apps
       <div className=" w-full p-4 flex flex-col items-center justify-center">
        <Services/>
      </div>
      
    </div>
  );
}