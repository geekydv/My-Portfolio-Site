import Image from "next/image";

export default function Home() {

  return (
    <div className="layout-container">
      <section className="scroll-smooth scroll-my-3.5 info-about-me w-fit lg:h-[400px] flex flex-col lg:flex-row mx-auto items-center gap-x-10 mt-0 lg:mt-[140px] lg:mb-40">
        <Image
          className="rounded-full object-cover my-10 lg:my-20"
          width="400"
          height="400"
          src="/my-dp.jpg"
          alt="Divyesh Birawat"
          loading="lazy"
        />
        <div className="my-info flex flex-col maxlg:h-dvh maxlg:justify-center text-center gap-y-3">
          <span className="text-xl font-medium">{`Hello, I'm`}</span>
          <h1 className="name text-6xl font-bold">Divyesh Birawat</h1>
          <span className="text-3xl font-bold">Frontend Developer</span>
          <div className="btn-container flex gap-x-3 mx-auto my-4">
            <button className="outlined-btn transition-all duration-500 rounded-full border-2 p-3 bg-black border-white font-bold hover:bg-slate-50 hover:text-black">
              Download CV
            </button>
            <button className="filled-btn transition-all duration-500 rounded-full border-2 p-3 bg-white border-black text-black font-bold hover:border-slate-50 hover:bg-black hover:text-white">
              Contact Info
            </button>
          </div>
          <p className="flex gap-x-8 mx-auto">
            <a
              href="https://github.com/geekydv/"
              className="size-8 bg-white rounded-full"
              title="github"
            >
              <Image width="32" height="32" src="/github.png" alt="github" />
            </a>
            <a
              href="https://www.linkedin.com/in/divyeshbirawat/"
              className="size-8 object-cover"
              title="linkedin"
            >
              <Image
                width="34"
                height="34"
                src="/linkedin.png"
                alt="linkedin"
                className="scale-[1.1]"
              />
            </a>
          </p>
        </div>
      </section>
      <section id="aboutme" className="scroll-smooth scroll-my-3.5 get-to-know-more lg:my-40">
        <div className="text-center">
          <span className="text-xl leading-2">Get To Know More</span>
          <h2 className="text-5xl my-4 font-bold tracking-wide">About Me</h2>
        </div>
        <div className="image-and-exp flex flex-col lg:flex-row my-20 justify-between">
          <Image
            width="350"
            height="350"
            src="/side-face.jpeg"
            alt=""
            className="rounded-xl"
          />
          <div className="w-full lg:w-2/3">
            <div className="exp-col flex gap-x-8 mt-10">
              <div className="experience-box w-full h-3/6 border-2 border-white rounded-xl flex flex-col items-center p-4">
                <Image
                  width="42"
                  height="42"
                  src="/experience.png"
                  alt="experience"
                  className="mb-2"
                />
                <strong className="text-bold text-white">Experience</strong>
                <p className="text-center">2.5+ years <br />
                  Frontend Development
                </p>
              </div>
              <div className="education-box w-full h-3/6 border-2 border-slate-50 rounded-xl flex flex-col items-center p-4">
                <Image
                  width="42"
                  height="42"
                  src="/graduation-hat.png"
                  alt="education"
                  className="mb-2"
                />
                <strong className="text-bold text-white">Education</strong>
                <p className="text-center">B.E Computer Engineering
                </p>
                <br />
              </div>
            </div>
          <p className="about-me-desc mt-6">
            Experienced Frontend Developer with a track record of driving success through technical expertise and interpersonal skills. Proficient in modern technologies like ReactJS, NextJS, Redux, and more. Skilled in leading cross-functional teams to achieve project success while maintaining high standards. Committed to continuous learning, mentorship, and staying ahead of industry trends. Open to new frontend development opportunities.
          </p>
          </div>
        </div>
      </section>
      <section id="myexperience" className="scroll-smooth scroll-my-3.5 explore-experience my-20 lg:my-40">
      <div className="text-center text-center mb-10">
        <span className="text-xl leading-2">Explore My</span>
        <h3 className="text-5xl my-4 font-bold tracking-wide">Experience</h3>
      </div>
      <div className="flex flex-col lg:flex-row gap-x-8">
        <div className="w-full lg:w-3/6 border-2 border-slate-50 flex-wrap rounded-xl mb-5 lg:mb-0">
          <strong className="text-2xl block w-full text-center mt-8">Frontend Development</strong>
          <div className="skills-container px-3 py-5 lg:px-20 lg:py-10 grid grid-cols-2 gap-4 lg:gap-8">
            <div className="flex w-fit">
              <Image
                width="42"
                height="42"
                src="/checklist.png"
                alt="education"
                className="mb-2"
              />
              <div className="flex flex-col ml-4">
                <strong>HTML</strong>
                <span>Experienced</span>
              </div>
            </div>
            <div className="flex w-fit">
              <Image
                width="42"
                height="42"
                src="/checklist.png"
                alt="education"
                className="mb-2"
              />
              <div className="flex flex-col ml-4">
                <strong>CSS</strong>
                <span>Experienced</span>
              </div>
            </div>
            <div className="flex w-fit">
              <Image
                width="42"
                height="42"
                src="/checklist.png"
                alt="education"
                className="mb-2"
              />
              <div className="flex flex-col ml-4">
                <strong>SASS</strong>
                <span>Experienced</span>
              </div>
            </div>
            <div className="flex w-fit">
              <Image
                width="42"
                height="42"
                src="/checklist.png"
                alt="education"
                className="mb-2"
              />
              <div className="flex flex-col ml-4">
                <strong>JavaScript</strong>
                <span>Experienced</span>
              </div>
            </div>
            <div className="flex w-fit">
              <Image
                width="42"
                height="42"
                src="/checklist.png"
                alt="education"
                className="mb-2"
              />
              <div className="flex flex-col ml-4">
                <strong>TailwindCSS</strong>
                <span>Experienced</span>
              </div>
            </div>
            <div className="flex w-fit">
              <Image
                width="42"
                height="42"
                src="/checklist.png"
                alt="education"
                className="mb-2"
              />
              <div className="flex flex-col ml-4">
                <strong>Material UI</strong>
                <span>Experienced</span>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-3/6 border-2 border-slate-50 flex-wrap rounded-xl">
        <strong className="text-2xl block w-full text-center mt-8">Frontend Development</strong>
          <div className="skills-container px-3 py-5 lg:px-20 lg:py-10 grid grid-cols-2 gap-4 lg:gap-8">
            <div className="flex w-fit">
              <Image
                width="42"
                height="42"
                src="/checklist.png"
                alt="education"
                className="mb-2"
              />
                <div className="flex flex-col ml-4">
                  <strong>ReactJS</strong>
                  <span>Experienced</span>
                </div>
            </div>
            <div className="flex w-fit">
              <Image
                width="42"
                height="42"
                src="/checklist.png"
                alt="education"
                className="mb-2"
              />
                <div className="flex flex-col ml-4">
                  <strong>NextJS</strong>
                  <span>Intermediate</span>
                </div>
            </div>
            <div className="flex w-fit">
              <Image
                width="42"
                height="42"
                src="/checklist.png"
                alt="education"
                className="mb-2"
              />
                <div className="flex flex-col ml-4">
                  <strong>Redux</strong>
                  <span>Experienced</span>
                </div>
            </div>
            <div className="flex w-fit">
              <Image
                width="42"
                height="42"
                src="/checklist.png"
                alt="education"
                className="mb-2"
              />
                <div className="flex flex-col ml-4">
                  <strong>GitHub</strong>
                  <span>Intermediate</span>
                </div>
            </div>
            <div className="flex w-fit">
              <Image
                width="42"
                height="42"
                src="/checklist.png"
                alt="education"
                className="mb-2"
              />
                <div className="flex flex-col ml-4">
                  <strong>NodeJS</strong>
                  <span>Basic</span>
                </div>
            </div>
          </div>
        </div>
      </div>
      </section>
      <section id="contactme" className="scroll-smooth scroll-my-3.5 get-in-touch w-full h-dvh flex items-center m-auto">
        <div className="w-fit mx-auto">
          <div className="text-center text-center mb-10">
            <span className="text-xl leading-2">Get in Touch</span>
            <h4 className="text-5xl my-4 font-bold tracking-wide">Contact Me</h4>
          </div>
          <div className="w-fit rounded-2xl border-2 border-slate-50 flex flex-col lg:flex-row px-3 py-5 mx-auto gap-y-4 lg:gap-y-0">
            <a href="mailto:divyeshbirawat@gmail.com" className="email inline-flex items-center">
            <Image
              width="34"
              height="34"
              src="/mail.png"
              alt="email"
              className="" />
            <span className="ml-2">divyeshbirawat@gmail.com</span>
            </a>
            <a href="https://www.linkedin.com/in/divyeshbirawat/" className="email inline-flex items-center lg:ml-8">
            <Image
              width="34"
              height="34"
              src="/linkedin.png"
              alt="linkedin"
              className="" />
            <span className="ml-2">Linkedin</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
