import React from "react";
import Socials from "../Socials";
import Link from "next/link";
import Button from "../Button";

// Local Data
import data from "../../data/portfolio.json";

const Footer = () => {
  return (
    <>
      <div className="mt-20 laptop:mt-40 p-2 laptop:p-0">
        <div>
          {/* TITLE */}
          <h1 className="text-2xl text-bold">Contacto</h1>

          <div className="mt-10">
            {/* MAIN CTA */}
            <h1 className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl text-bold">
              Agenda tu
            </h1>
            <h1 className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl text-bold">
              consulta
            </h1>

            {/* CTA BUTTON */}
            {data.appointment && (
              <Button
                type="primary"
                classes="mt-6"
                onClick={() => window.open(data.appointment.link, "_blank")}
              >
                {data.appointment.label}
              </Button>
            )}

            {/* SOCIALS */}
            <div className="mt-10">
              <Socials />
            </div>

            {/* LOCATION */}
            {data.currentPosition && (
              <div className="mt-10 text-sm opacity-75">
                <p>{data.currentPosition.institution}</p>
                <p>{data.currentPosition.location}</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* FOOTER BOTTOM */}
      <h1 className="text-sm text-bold mt-10 p-2 laptop:p-0 opacity-50">
        © {new Date().getFullYear()} {data.name}. Todos los derechos reservados.
      </h1>
    </>
  );
};

export default Footer;
