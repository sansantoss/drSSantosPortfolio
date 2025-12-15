import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Cursor from "../components/Cursor";
import Header from "../components/Header";
import ProjectResume from "../components/ProjectResume";
import Socials from "../components/Socials";
import Button from "../components/Button";
import { useTheme } from "next-themes";
import Image from "next/image";

// Data
import data from "../data/portfolio.json";
import { name, showResume, resume } from "../data/portfolio.json";

const Resume = () => {
  const router = useRouter();
  const theme = useTheme();
  const [mount, setMount] = useState(false);

  useEffect(() => {
    setMount(true);
    if (!showResume) {
      router.push("/");
    }
  }, []);

  return (
    <>
        {/* AGENDAR CITA si lo llego a poner sera aqui*/}


      {data.showCursor && <Cursor />}

      <div
        className={`container mx-auto mb-10 ${
          data.showCursor && "cursor-none"
        }`}
      >
        <Header isBlog />

        {mount && (
          <div className="mt-10 w-full flex flex-col items-center">
            <div
              className={`w-full ${
                mount && theme.theme === "dark"
                  ? "bg-slate-800"
                  : "bg-gray-50"
              } max-w-4xl p-20 mob:p-5 desktop:p-20 rounded-lg shadow-sm`}
            >
              {/* HEADER CON FOTO */}
              <div className="flex flex-col tablet:flex-row tablet:items-center tablet:justify-between gap-6">
                <div>
                  <h1 className="text-3xl font-bold">{name}</h1>
                  <h2 className="text-xl mt-5">{resume.tagline}</h2>
                  <h2 className="w-4/5 text-xl mt-5 opacity-50">
                    {resume.description}
                  </h2>

                  <div className="mt-3">
                    <Socials />
                  </div>
                </div>

                {/* FOTO */}
                {data.heroImage && (
                  <div className="flex justify-center tablet:justify-end">
                    <Image
                      src={data.heroImage}
                      alt={name}
                      width={160}
                      height={160}
                      priority
                      className="rounded-full object-cover"
                    />
                  </div>
                )}
              </div>

              {/* POSICIÓN ACTUAL */}
              {data.currentPosition && (
                <div className="mt-8">
                  <h1 className="text-2xl font-bold">Ocupación Actual</h1>
                  <p className="mt-2 text-sm opacity-75">
                    {data.currentPosition.role}
                  </p>
                  <p className="text-sm opacity-50">
                    {data.currentPosition.institution} –{" "}
                    {data.currentPosition.location}
                  </p>
                </div>
              )}

              {/* EXPERIENCE */}
              <div className="mt-8">
                <h1 className="text-2xl font-bold">Experiencia Profesional</h1>

                {resume.experiences.map(
                  ({ id, dates, type, position, bullets }) => (
                    <ProjectResume
                      key={id}
                      dates={dates}
                      type={type}
                      position={position}
                      bullets={bullets}
                    />
                  )
                )}
              </div>

              {/* FORMACIÓN CLÍNICA */}
              {data.medicalTraining && (
                <div className="mt-8">
                  <h1 className="text-2xl font-bold">Formación Clínica</h1>

                  <div className="mt-4">
                    <h2 className="text-lg font-semibold">Internado Médico</h2>
                    <p className="text-sm opacity-75">
                      {data.medicalTraining.internship.institution}
                    </p>
                    <p className="text-sm opacity-50">
                      {data.medicalTraining.internship.period}
                    </p>
                    <p className="text-sm opacity-50">
                      Promedio: {data.medicalTraining.internship.average}
                    </p>
                    <p className="text-sm opacity-50">
                      {data.medicalTraining.internship.document}
                    </p>
                  </div>

                  <div className="mt-4">
                    <h2 className="text-lg font-semibold">Servicio Social</h2>
                    <p className="text-sm opacity-75">
                      {data.medicalTraining.socialService.institution}
                    </p>
                    <p className="text-sm opacity-50">
                      {data.medicalTraining.socialService.region}
                    </p>
                    <p className="text-sm opacity-50">
                      {data.medicalTraining.socialService.period}
                    </p>
                    <p className="text-sm opacity-50">
                      {data.medicalTraining.socialService.document}
                    </p>
                  </div>
                </div>
              )}

              {/* EDUCATION */}
              <div className="mt-8">
                <h1 className="text-2xl font-bold">Educación</h1>
                <div className="mt-2">
                  <h2 className="text-lg">
                    {resume.education.universityName}
                  </h2>
                  <h3 className="text-sm opacity-75">
                    {resume.education.universityDate}
                  </h3>
                  <p className="text-sm mt-2 opacity-50">
                    {resume.education.universityPara}
                  </p>
                </div>
              </div>

              {/* CERTIFICACIONES */}
              {data.certifications && (
                <div className="mt-8">
                  <h1 className="text-2xl font-bold">Certificaciones</h1>
                  <ul className="list-disc ml-5 mt-3">
                    {data.certifications.map((cert) => (
                      <li key={cert.id} className="py-1 text-sm opacity-75">
                        {cert.name} – {cert.date}{" "}
                        {cert.number && `(No. ${cert.number})`} –{" "}
                        {cert.validity}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* SKILLS */}
              <div className="mt-8">
                <h1 className="text-2xl font-bold">Habilidades</h1>
                <div className="flex mob:flex-col desktop:flex-row justify-between">
                  {resume.languages && (
                    <div className="mt-2 mob:mt-5">
                      <h2 className="text-lg">Idiomas</h2>
                      <ul className="list-disc ml-5">
                        {resume.languages.map((language, index) => (
                          <li key={index} className="py-1">
                            {language}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {resume.frameworks && (
                    <div className="mt-2 mob:mt-5">
                      <h2 className="text-lg">Áreas de Especialidad</h2>
                      <ul className="list-disc ml-5">
                        {resume.frameworks.map((framework, index) => (
                          <li key={index} className="py-1">
                            {framework}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>

              {/* ASSOCIATIONS */}
              {data.associations && (
                <div className="mt-10">
                  <h1 className="text-2xl font-bold">Asociaciones</h1>
                  <div className="mt-4 grid grid-cols-1 tablet:grid-cols-3 gap-6">
                    {data.associations.map((association) => (
                      <div
                        key={association.id}
                        className="flex flex-col items-center text-center"
                      >
                        <img
                          src={association.image}
                          alt={association.name}
                          className="w-32 h-32 object-cover rounded-lg"
                        />
                        <p className="mt-3 text-sm opacity-75">
                          {association.name}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Resume;
