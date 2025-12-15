import { useRef } from "react";
import Header from "../components/Header";
import ServiceCard from "../components/ServiceCard";
import Socials from "../components/Socials";
import WorkCard from "../components/WorkCard";
import { useIsomorphicLayoutEffect } from "../utils";
import { stagger } from "../animations";
import Footer from "../components/Footer";
import Head from "next/head";
import Button from "../components/Button";
import Link from "next/link";
import Cursor from "../components/Cursor";
import Image from "next/image";

// Local Data
import data from "../data/portfolio.json";

export default function Home() {
  // Refs
  const workRef = useRef();
  const aboutRef = useRef();
  const locationRef = useRef();
  const textOne = useRef();
  const textTwo = useRef();
  const textThree = useRef();
  const textFour = useRef();

  // Scroll handlers
  const handleWorkScroll = () => {
    window.scrollTo({
      top: workRef.current.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };

  const handleAboutScroll = () => {
    window.scrollTo({
      top: aboutRef.current.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };

  useIsomorphicLayoutEffect(() => {
    stagger(
      [textOne.current, textTwo.current, textThree.current, textFour.current],
      { y: 40, x: -10, transform: "scale(0.95) skew(10deg)" },
      { y: 0, x: 0, transform: "scale(1)" }
    );
  }, []);

  return (
    <div className={`relative ${data.showCursor && "cursor-none"}`}>
      {data.showCursor && <Cursor />}

      <Head>
        <title>{data.name}</title>
      </Head>

      <div className="gradient-circle"></div>
      <div className="gradient-circle-bottom"></div>

      <div className="container mx-auto mb-10 relative">
        <Header
          handleWorkScroll={handleWorkScroll}
          handleAboutScroll={handleAboutScroll}
        />

        {/* HERO */}
        <div className="laptop:mt-20 mt-10 relative">
          <div className="mt-5">
            <h1
              ref={textOne}
              className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl p-1 tablet:p-2 text-bold w-4/5 mob:w-full laptop:w-4/5"
            >
              {data.headerTaglineOne}
            </h1>
            <h1
              ref={textTwo}
              className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl p-1 tablet:p-2 text-bold w-full laptop:w-4/5"
            >
              {data.headerTaglineTwo}
            </h1>
            <h1
              ref={textThree}
              className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl p-1 tablet:p-2 text-bold w-full laptop:w-4/5"
            >
              {data.headerTaglineThree}
            </h1>
            <h1
              ref={textFour}
              className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl p-1 tablet:p-2 text-bold w-full laptop:w-4/5"
            >
              {data.headerTaglineFour}
            </h1>
          </div>

          <Socials className="mt-2 laptop:mt-5" />

          {/* HERO IMAGE */}
          {data.heroImage && (
            <div className="hidden laptop:block absolute right-0 top-1/2 -translate-y-1/2">
              <Image
                src={data.heroImage}
                alt={data.name}
                width={420}
                height={520}
                priority
                className="rounded-2xl"
              />
            </div>
          )}
        </div>

        {/* PROCEDIMIENTOS / CIRUGÍAS */}
        <div className="mt-10 laptop:mt-30 p-2 laptop:p-0" ref={workRef}>
          <h1 className="text-2xl text-bold">Procedimientos y Cirugías</h1>

          <div className="mt-5 laptop:mt-10 grid grid-cols-1 tablet:grid-cols-2 gap-4">
            {data.projects.map((project) => (
              <WorkCard
                key={project.id}
                img={project.imageSrc}
                name={project.title}
                description={project.description}
                onClick={() => {}}
              />
            ))}
          </div>
        </div>

        {/* SERVICIOS */}
        <div className="mt-10 laptop:mt-30 p-2 laptop:p-0">
          <h1 className="tablet:m-10 text-2xl text-bold">
            Servicios Médicos
          </h1>

          <div className="mt-5 tablet:m-10 grid grid-cols-1 laptop:grid-cols-2 gap-6">
            {data.services.map((service, index) => (
              <ServiceCard
                key={index}
                name={service.title}
                description={service.description}
              />
            ))}
          </div>
        </div>

        {/* UBICACIÓN */}
        <div
          className="mt-20 laptop:mt-40 p-2 laptop:p-0"
          ref={locationRef}
        >
          <h1 className="tablet:m-10 text-2xl text-bold">
            Dónde me encuentro
          </h1>

          <p className="tablet:m-10 mt-2 text-lg opacity-75">
            {data.currentPosition.role}
          </p>
          <p className="tablet:m-10 text-sm opacity-50">
            {data.currentPosition.institution} –{" "}
            {data.currentPosition.location}
          </p>

          <div className="tablet:m-10 mt-6 w-full h-[450px] rounded-xl overflow-hidden shadow-md">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3826.403568323589!2d-95.0284121!3d16.455090500000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x859555cc8fd217b7%3A0x8b8ed9229b5907e9!2sCl%C3%ADnica%20oftalmol%C3%B3gica%20Siloe%20%C3%93ptica!5e0!3m2!1ses!2smx!4v1765788204811!5m2!1ses!2smx"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          {/* HORARIOS */}
          <div className="mt-10 laptop:mt-20">
            <h2 className="text-xl text-bold">Horarios de Atención Preguntar santi si dejarlo o quitarlo</h2>
            <div className="mt-4">
              <p className="text-lg">Lunes: 9:00 AM - 3:00 PM</p>
              <p className="text-lg">Martes: 9:00 AM - 3:00 PM</p>
              <p className="text-lg">Miércoles: 9:00 AM - 3:00 PM</p>
              <p className="text-lg">Jueves: 9:00 AM - 3:00 PM</p>
              <p className="text-lg">Viernes: 9:00 AM - 3:00 PM</p>
              <p className="text-lg">Sábado: 9:00 AM - 2:00 PM</p>
              <p className="text-lg">Domingo: Cerrado</p>
            </div>
          </div>
        </div>

        {/* ABOUT */}
        <div className="mt-20 laptop:mt-40 p-2 laptop:p-0" ref={aboutRef}>
          <h1 className="tablet:m-10 text-2xl text-bold">Quién Soy</h1>
          <p className="tablet:m-10 mt-2 text-xl laptop:text-3xl w-full laptop:w-3/5">
            {data.aboutpara}
          </p>
        </div>
        
{/* AGENDAR CITA */}
{data.appointment && (
  <div className="fixed bottom-5 right-5 z-50">
    <Button
      type="primary"
      classes="px-8 py-4 text-lg rounded-xl shadow-lg hover:scale-105 transition-transform"
      onClick={() => window.open(data.appointment.link, "_blank")}
    >
      {data.appointment.label}
    </Button>
  </div>
)}




        <Footer />
      </div>
    </div>
  );
}
