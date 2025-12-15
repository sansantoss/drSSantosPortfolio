import { Popover } from "@headlessui/react";
import { useTheme } from "next-themes";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Button from "../Button";

// Local Data
import data from "../../data/portfolio.json";

const Header = ({ handleWorkScroll, handleAboutScroll, isBlog }) => {
  const router = useRouter();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  const { name, showBlog, showResume } = data;
  const contactEmail = "mailto:santisantos87@gmail.com";

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      {/* ===== MOBILE HEADER ===== */}
      <Popover className="block tablet:hidden mt-5">
        {({ open }) => (
          <>
            <div className="flex items-center justify-between p-2">
              <h1
                onClick={() => router.push("/")}
                className="font-medium p-2 cursor-pointer"
              >
                {name}.
              </h1>

              <div className="flex items-center">
                {data.darkMode && (
                  <Button
                    onClick={() =>
                      setTheme(theme === "dark" ? "light" : "dark")
                    }
                  >
                    <img
                      className="h-6"
                      src={`/images/${
                        theme === "dark" ? "moon.svg" : "sun.svg"
                      }`}
                      alt="Toggle theme"
                    />
                  </Button>
                )}

                <Popover.Button>
                  <img
                    className="h-5"
                    src={`/images/${
                      !open
                        ? theme === "dark"
                          ? "menu-white.svg"
                          : "menu.svg"
                        : theme === "light"
                        ? "cancel.svg"
                        : "cancel-white.svg"
                    }`}
                    alt="Menu"
                  />
                </Popover.Button>
              </div>
            </div>

            <Popover.Panel
              className={`absolute right-0 z-10 w-11/12 p-4 ${
                theme === "dark" ? "bg-slate-800" : "bg-white"
              } shadow-md rounded-md`}
            >
              {!isBlog ? (
                <div className="grid grid-cols-1 gap-2">
                  <Button onClick={handleWorkScroll}>
                    Procedimientos y Cirugías
                  </Button>
                  <Button onClick={handleAboutScroll}>Quién Soy</Button>

                  {showBlog && (
                    <Button onClick={() => router.push("/blog")}>
                      Blog
                    </Button>
                  )}

                  {showResume && (
                    <Button onClick={() => router.push("/resume")}>
                      Trayectoria Profesional
                    </Button>
                  )}

                  <Button onClick={() => window.open(contactEmail)}>
                    Contacto
                  </Button>
                </div>
              ) : (
                <div className="grid grid-cols-1 gap-2">
                  <Button onClick={() => router.push("/")}>Inicio</Button>

                  {showBlog && (
                    <Button onClick={() => router.push("/blog")}>
                      Blog
                    </Button>
                  )}

                  {showResume && (
                    <Button onClick={() => router.push("/resume")}>
                      Trayectoria Profesional
                    </Button>
                  )}

                  <Button onClick={() => window.open(contactEmail)}>
                    Contacto
                  </Button>
                </div>
              )}
            </Popover.Panel>
          </>
        )}
      </Popover>

      {/* ===== DESKTOP HEADER ===== */}
      <div
        className={`mt-10 hidden tablet:flex flex-row items-center justify-between sticky ${
          theme === "light" && "bg-white"
        } dark:text-white top-0 z-10`}
      >
        <h1
          onClick={() => router.push("/")}
          className="font-medium cursor-pointer"
        >
          {name}.
        </h1>

        {!isBlog ? (
          <div className="flex items-center">
            <Button onClick={handleWorkScroll}>
              Procedimientos y Cirugías
            </Button>
            <Button onClick={handleAboutScroll}>Quién Soy</Button>

            {showBlog && (
              <Button onClick={() => router.push("/blog")}>Blog</Button>
            )}

            {showResume && (
              <Button
                onClick={() => router.push("/resume")}
                classes="first:ml-1"
              >
                Trayectoria Profesional
              </Button>
            )}

            <Button onClick={() => window.open(contactEmail)}>
              Contacto
            </Button>

            {mounted && theme && data.darkMode && (
              <Button
                onClick={() =>
                  setTheme(theme === "dark" ? "light" : "dark")
                }
              >
                <img
                  className="h-6"
                  src={`/images/${theme === "dark" ? "moon.svg" : "sun.svg"}`}
                  alt="Toggle theme"
                />
              </Button>
            )}
          </div>
        ) : (
          <div className="flex items-center">
            <Button onClick={() => router.push("/")}>Inicio</Button>

            {showBlog && (
              <Button onClick={() => router.push("/blog")}>Blog</Button>
            )}

            {showResume && (
              <Button
                onClick={() => router.push("/resume")}
                classes="first:ml-1"
              >
                Trayectoria Profesional
              </Button>
            )}

            <Button onClick={() => window.open(contactEmail)}>
              Contacto
            </Button>

            {mounted && theme && data.darkMode && (
              <Button
                onClick={() =>
                  setTheme(theme === "dark" ? "light" : "dark")
                }
              >
                <img
                  className="h-6"
                  src={`/images/${theme === "dark" ? "moon.svg" : "sun.svg"}`}
                  alt="Toggle theme"
                />
              </Button>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default Header;
