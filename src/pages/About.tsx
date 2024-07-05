import { useEffect } from "react";

const About = () => {
  useEffect(() => {
    document.title = "About | Aayush Shukla";
  }, []);

  return (
    <main>
      <div className="pt-10 mt-40 mb-40 lg:pt-30 lg:mt-30 lg:mb-40 sup:mb-40">
        <div className="mod-container">
          <p className="mb-3 text-base font-semibold tracking-wide uppercase md:text-lg text-blue-600 lg:mb-5">
            About Me
          </p>{" "}
          <h1 className="w-full text-black h1 lg:max-w-4/5 sup:max-w-4/6">
            Background, Skills and Future.{" "}
          </h1>
        </div>
      </div>
      <div className="mod-container">
        <div className="-mt-5 about-content lg:-mt-10 mb-15 lg:mb-30 xl:w-4/6">
          <p className="mb-5">
            I am Aayush Shukla, a self-taught programmer and an open-source
            developer from India. I have worked on many open-source projects,
            some of which include a Music Player in Python, a Chess AI in
            Python, and its implementation in Java. On the sidelines, I'm
            actively looking for other open-source projects to contribute to,
            while also working on some of my own projects.
          </p>
          <p className="mb-5">
            I'm currently enrolled in a Bachelor of Technology program at VIT
            University, Chennai Campus, majoring in Computer Science and
            Engineering, with a specialization in Cyber Physical Systems.
          </p>
        </div>
      </div>
      <div className="mod-container my-20 lg:my-30">
        <div className="mb-20 xl:w-3/6">
          <h2 className="mb-4 h2">Skills</h2>{" "}
          <p>
            I have worked across a broad range of areas and have expertise in
            the following areas.
          </p>
        </div>{" "}
        <div className="flex flex-wrap justify-between row">
          <div className="w-full mb-10 column lg:mb-0 lg:w-4/12 xl:w-3/12">
            <div className="mb-4 lg:mb-6 text-blue-600">
              <svg className="feather">
                <polyline points="16 18 22 12 16 6"></polyline>
                <polyline points="8 6 2 12 8 18"></polyline>
              </svg>
            </div>{" "}
            <h3 className="mb-4 h3">Programming</h3>{" "}
            <p className="text-base md:text-lg">
              I have more than 6 years of experience in programming, and know
              many languages, out of which I best know Python and Java.
            </p>
          </div>
          <div className="w-full mb-10 column lg:mb-0 lg:w-4/12 xl:w-3/12">
            <div className="mb-4 lg:mb-6 text-blue-600">
              <svg className="feather">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
              </svg>
            </div>{" "}
            <h3 className="mb-4 h3">Leadership</h3>{" "}
            <p className="text-base md:text-lg">
              I have led many projects, both public and private. I am good at
              leading teams and strategizing roadmaps.
            </p>
          </div>
          <div className="w-full mb-10 column lg:mb-0 lg:w-4/12 xl:w-3/12">
            <div className="mb-4 lg:mb-6 text-blue-600">
              <svg className="feather">
                <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
              </svg>
            </div>{" "}
            <h3 className="mb-4 h3">Problem Solving</h3>{" "}
            <p className="text-base md:text-lg">
              I am an avid problem solver, be it programming problems or real
              world problems.
            </p>
          </div>
        </div>
      </div>
      <div className="mod-container my-20 lg:my-30">
        <div className="flex flex-wrap justify-between row">
          <div className="w-full column lg:w-4/6">
            <h2 className="mt-8 mb-8 h2">Languages and Frameworks</h2>
            <p className="mb-5">
              Listing the programming languages and frameworks I know is a bit
              tough, as I've worked with a lot of them. Keeping that aside,
              these ones are my best bet.
            </p>
            <ul className="flex flex-wrap pl-4 list-disc">
              <li className="w-6/12 mb-1 lg:w-full">Java</li>
              <li className="w-6/12 mb-1 lg:w-full">Python</li>
              <li className="w-6/12 mb-1 lg:w-full">Kotlin</li>
              <li className="w-6/12 mb-1 lg:w-full">C++</li>
              <li className="w-6/12 mb-1 lg:w-full">React</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="mod-container my-20 lg:my-30">
        <div className="xl:w-4/6">
          <h2 className="mb-4 h2">Vision</h2>{" "}
          <p>
            I aim to leverage my technical skills and knowledge to solve
            real-world problems through innovative solutions. I am passionate
            about technology and believe in continuous learning and improvement.
            My goal is to make a significant impact in the tech industry by
            developing applications and tools that can improve people's lives.
          </p>
        </div>{" "}
      </div>
      <div className="mod-container my-20 lg:my-30">
        <div className="xl:w-4/6">
          <h2 className="mb-4 h2">Future</h2>{" "}
          <p>
            Out of improving on what I already know, I'm learning JavaScript and
            Dart to get into other tech domains such as web development and
            cross-platform development.
          </p>
        </div>{" "}
      </div>
    </main>
  );
};

export default About;
