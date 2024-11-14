import see from "../assets/veja_footer.png";
import visit from "../assets/visite_footer.png";
import contact from "../assets/contate_footer.png";

const Footer = () => {
  const inHome = document.URL.length > 34;

  return (
    <footer className="">
      {!inHome && (
        <div className="flex flex-col items-center justify-center lg:flex-row lg:items-start lg:justify-between lg:mx-[8vw] lg:mt-[8vw]">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:gap-[8vw]">
            <div className="flex flex-col items-center justify-center lg:items-start lg:justify-start">
              <img
                src={see}
                alt="blur"
                className="pointer-events-none w-[8rem] lg:w-[7vw]"
              />
              <div>
                <nav>
                  <ul className="flex flex-col items-center justify-center gap-[1rem] lg:gap-[.6vw] lg:items-start">
                    <li className="made-medium text-[1.2rem] lg:text-[2vw]">
                      <a className="relative" href="#about">
                        About Me
                      </a>
                    </li>
                    <li className="made-medium text-[1.2rem] lg:text-[2vw]">
                      <a className="relative" href="#experiences">
                        Experiences
                      </a>
                    </li>
                    <li className="made-medium text-[1.2rem] lg:text-[2vw]">
                      <a className="relative" href="#education">
                        Education
                      </a>
                    </li>
                    <li className="made-medium text-[1.2rem] lg:text-[2vw]">
                      <a className="relative" href="#skills">
                        Skills
                      </a>
                    </li>
                    <li className="made-medium text-[1.2rem] lg:text-[2vw]">
                      <a className="relative" href="#projects">
                        Projects
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center lg:items-center lg:justify-center">
              <img
                src={visit}
                alt="blur"
                className="pointer-events-none w-[8rem] lg:w-[7vw]"
              />

              <div>
                <nav>
                  <ul className="flex flex-col items-center justify-center gap-[1rem] lg:gap-[.6vw] lg:items-center">
                    <li className="made-medium text-[1.2rem] lg:text-[2vw]">
                      <a
                        className="relative"
                        href="https://www.linkedin.com/in/mohamed-fanan-b12367110"
                        target="_blank"
                      >
                        LinkedIn
                      </a>
                    </li>
                    <li className="made-medium text-[1.2rem] lg:text-[2vw]">
                      <a
                        className="relative"
                        href="https://www.instagram.com/md.fanan"
                        target="_blank"
                      >
                        Instagram
                      </a>
                    </li>
                    <li className="made-medium text-[1.2rem] lg:text-[2vw]">
                      <a
                        className="relative"
                        href="https://www.behance.net/mohamedfanan"
                        target="_blank"
                      >
                        Behance
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
          <div>
            <div className="flex flex-col items-center justify-center lg:items-end lg:justify-end">
              <img
                src={contact}
                alt="blur"
                className="pointer-events-none w-[8rem] lg:w-[7vw]"
              />

              <div>
                <nav>
                  <ul className="flex flex-col items-center justify-center gap-[1rem] lg:gap-[.6vw] lg:items-end">
                    <li className="made-medium text-[1.2rem] lg:text-[2vw]">
                      <a
                        className="relative"
                        href="mailto:mfanan64@gmail.com"
                        target="_blank"
                      >
                        mfanan64@gmail.com
                      </a>
                    </li>
                    <li className="made-medium text-[1.2rem] lg:text-[2vw]">
                      <a
                        className="relative"
                        href="tel:+218921131992"
                        target="_blank"
                      >
                        0921131992
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="justify-between overflow-hidden lg:translate-y-[5vw]  mt-8 w-[99vw]">
        <div className="animation-div  inline-flex animate-[move-rtl_60s_linear_infinite]">
          <FooterTitle name="Mohamed" lastname="Fanan" />
          <FooterTitle name="Mohamed" lastname="Fanan" />
          <FooterTitle name="Mohamed" lastname="Fanan" />
          <FooterTitle name="Mohamed" lastname="Fanan" />
          <FooterTitle name="Mohamed" lastname="Fanan" />
          <FooterTitle name="Mohamed" lastname="Fanan" />
          <FooterTitle name="Mohamed" lastname="Fanan" />
          <FooterTitle name="Mohamed" lastname="Fanan" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;

const FooterTitle = ({ name, lastname }) => {
  return (
    <h4 className="made-medium px-4 text-[4rem] lg:px-[4vw] lg:text-[14vw] whitespace-nowrap pointer-events-none lg:leading-[12vw]">
      {name}{" "}
      <span className="made-medium text-[4rem] lg:text-[13vw] text-[#F86C9A] pointer-events-none">
        {" "}
        ©{" "}
      </span>
      {lastname}
    </h4>
  );
};
