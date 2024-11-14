import { useEffect } from "react";

// assets
import aboutme from "../assets/aboutme_photo.png";
import artdirector from "../assets/artdirector_circle.png";

import AOS from "aos";
import "aos/dist/aos.css";

const AboutMe = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center mx-4 lg:flex-row lg:items-start lg:gap-[3vw] lg:mt-[1rem] lg:mx-0">
      <div
        className="relative lg:w-[50vw] flex items-end justify-end lg:translate-y-[-1.5vw]"
        id="about"
      >
        <img
          src={aboutme}
          className="pointer-events-none lg:my-[2vw] lg:w-[33vw] min-[1440px]:w-[35vw]"
        />
        <img
          src={artdirector}
          className="animate-[rotate_8s_linear_infinite] pointer-events-none absolute w-20 top-[2rem] right-[5rem] md:w-40 md:right-[9rem] lg:top-[5vw] lg:right-[7vw] lg:w-[10vw]"
          data-aos="fade-right"
          data-aos-duration="1500"
        />
      </div>
      <div className="text-center mx-4 gap-6 flex flex-col md:mx-24 lg:w-[50vw] lg:gap-[3vw] lg:text-left lg:md:mx-0">
        <p
          className="helv-light text-[#231F20] md:text-[2rem] lg:text-[2vw] lg:mr-[8vw] min-[1440px]:text-[1.5vw] min-[1440px]:mr-[12vw]"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          With{" "}
          <span className="helv-bold">7 years of experience in audiovisual</span>
          , I began my career in photography and soon transitioned to video
          editing, combining narrative and visual aesthetics.
        </p>

        <p
          className="helv-light text-[#231F20] md:text-[2rem] lg:text-[2vw] lg:mr-[8vw] min-[1440px]:text-[1.5vw] min-[1440px]:mr-[12vw]"
          data-aos="fade-up"
          data-aos-duration="1500"
        >
          Throughout my journey, I have worked in various fields, such as
          advertising videos, interviews, and motion graphics, always focusing
          on quality and creativity.
        </p>

        <p
          className="helv-light text-[#231F20] md:text-[2rem] lg:text-[2vw] lg:mr-[8vw] min-[1440px]:text-[1.5vw] min-[1440px]:mr-[13vw] "
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          Today, I am an <span className="helv-bold">Art Director</span> in the
          health sector, leveraging my expertise in video editing and design to
          create visual solutions that blend aesthetics and strategy.
        </p>
        <p
          className="helv-light text-[#231F20] md:text-[2rem] lg:text-[2vw] lg:mr-[8vw] min-[1440px]:text-[1.5vw] min-[1440px]:mr-[13vw] "
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          I am a <span className="helv-bold">versatile</span>,{" "}
          <span className="helv-bold">curious</span>, and{" "}
          <span className="helv-bold">dedicated</span> professional,
          continuously striving for innovation.
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
