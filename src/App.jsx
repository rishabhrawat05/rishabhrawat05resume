import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation, useNavigate } from "react-router-dom";
import "./index.css";
import profileimage from "./assets/profileimage.png";
import projectsData from "./data/projects.json";
import hack2skillgdg from "./assets/Hack2skill-Certificate.png";
import hack2skillisro from "./assets/Hack2skill-Certificateisro.png";
import projammGif from "./assets/Untitleddesign.gif";
import dropifyGif from "./assets/Untitleddesign2.gif";
import trafficGif from "./assets/Untitleddesign3.gif";
import nothingGif from "./assets/Untitleddesign4.gif";
import {
  RiFileList2Line,
  RiGithubLine,
  RiLinkedinBoxLine,
  RiMoonLine,
  RiSunLine,
  RiPagesLine,
  RiTwitterXLine,
  RiCodeSSlashLine,
  RiRocketLine,
  RiTeamLine,
  RiLightbulbLine,
} from "@remixicon/react";
import BadgeComp from "./components/BadgeComp";
import ProjectComp from "./components/ProjectComp";
import GitHubCalendar from "react-github-calendar";
import ProjectDetail from "./pages/ProjectDetail";

function HomePage({ isDarkMode, toggleTheme }) {
  const [blogPosts, setBlogPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isHeaderFixed, setIsHeaderFixed] = useState(false);
  const mainRef = React.useRef(null);

  useEffect(() => {
    // Fetch Dev.to blog posts
    fetch("https://dev.to/api/articles?username=rishabhrawat05")
      .then((res) => res.json())
      .then((data) => {
        setBlogPosts(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching blog posts:", err);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    // Handle scroll for sticky header
    const handleScroll = () => {
      const mainElement = mainRef.current;
      if (mainElement && mainElement.scrollTop > 100) {
        setIsHeaderFixed(true);
      } else {
        setIsHeaderFixed(false);
      }
    };

    const mainElement = mainRef.current;
    if (mainElement) {
      mainElement.addEventListener("scroll", handleScroll);
      return () => mainElement.removeEventListener("scroll", handleScroll);
    }
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    const mainElement = mainRef.current;
    if (element && mainElement) {
      const elementTop = element.offsetTop;
      mainElement.scrollTo({ top: elementTop - 100, behavior: "smooth" });
    }
  };

  return (
    <main
      ref={mainRef}
      className={`w-full h-screen ${
        isDarkMode ? "bg-black" : "bg-white"
      } flex flex-col overflow-y-auto items-center transition-colors duration-300`}
    >
      <header
        className={`w-full max-w-3xl h-20 px-4 ${
          isHeaderFixed ? "fixed top-0 pt-6 z-50 backdrop-blur-md" : "mt-5"
        } ${
          isDarkMode ? "bg-black/70" : "bg-white/70"
        } flex items-center gap-2 md:gap-4 justify-between transition-all duration-300`}
      >
        <div className="flex items-end-safe gap-2 md:gap-3">
          <div
            className={`h-10 w-10 md:h-12 md:w-12 border-2 ${
              isDarkMode ? "border-white" : "border-black"
            } rounded-xl overflow-hidden flex`}
          >
            <img
              src={profileimage}
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="h-full w-fit flex gap-2 md:gap-3 items-end-safe">
            <h5
              className={`${
                isDarkMode ? "text-white" : "text-black"
              } text-xs md:text-sm cursor-pointer hover:opacity-70 transition-opacity`}
              onClick={() => scrollToSection("experience")}
            >
              Work
            </h5>
            <h5
              className={`${
                isDarkMode ? "text-white" : "text-black"
              } text-xs md:text-sm cursor-pointer hover:opacity-70 transition-opacity`}
              onClick={() => scrollToSection("projects")}
            >
              Projects
            </h5>
            <h5
              className={`${
                isDarkMode ? "text-white" : "text-black"
              } text-xs md:text-sm cursor-pointer hover:opacity-70 transition-opacity`}
              onClick={() => scrollToSection("activities")}
            >
              Activities
            </h5>
            <h5
              className={`${
                isDarkMode ? "text-white" : "text-black"
              } text-xs md:text-sm cursor-pointer hover:opacity-70 transition-opacity`}
              onClick={() => scrollToSection("blogs")}
            >
              Blogs
            </h5>
          </div>
        </div>
        <button
          onClick={toggleTheme}
          className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all hover:scale-105 ${
            isDarkMode
              ? "bg-white/10 hover:bg-white/20 border border-white/20"
              : "bg-black/5 hover:bg-black/10 border border-black/10"
          }`}
        >
          {isDarkMode ? (
            <RiMoonLine className="h-5 w-5 text-white" />
          ) : (
            <RiSunLine className="h-5 w-5 text-black" />
          )}
        </button>
      </header>
      <section
        className={` mb-5 ${
          isHeaderFixed ? "mt-28" : "mt-20"
        } w-full max-w-3xl flex flex-col p-4 md:p-3 transition-all duration-300`}
      >
        <div className="h-20 w-20 md:h-28 md:w-28 rounded-full overflow-hidden flex">
          <img
            src={profileimage}
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>
        <h1
          className={`pt-3 text-2xl md:text-4xl ${
            isDarkMode ? "text-white" : "text-black"
          } font-semibold flex flex-col gap-2`}
        >
          Hi, I'm Rishabh <br></br>{" "}
          <span className="text-gray-400">
            A Full Stack Java Web Developer.
          </span>
        </h1>
        <p className="text-gray-400 text-sm md:text-md leading-relaxed md:leading-[2.4rem] pt-5 md:pt-7 whitespace-normal gap-1">
          I build interactive, design-driven web apps with{" "}
          <BadgeComp
            text={"Java"}
            logo={
              "https://imgs.search.brave.com/djEsMSGOy1tX-6CgcAEmcweSs17XY2_sRj71Gud01Ig/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/c3ZncmVwby5jb20v/c2hvdy8zMDMzODgv/amF2YS00LWxvZ28u/c3Zn"
            }
            isDarkMode={isDarkMode}
            url="https://www.java.com"
          />
          ,{" "}
          <BadgeComp
            text={"Spring Boot"}
            logo={
              "https://imgs.search.brave.com/wFaaOvkhrH8qt1EllU7YT8CmGEhlWhKXgOJG1AIW6JQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zcHJp/bmcuaW8vaW1nL3By/b2plY3RzL3Nwcmlu/Zy1ib290LnN2Zw"
            }
            isDarkMode={isDarkMode}
            url="https://spring.io/projects/spring-boot"
          />
          ,{" "}
          <BadgeComp
            text={"React.js"}
            logo={
              "https://imgs.search.brave.com/-wRYfmc8MFTE9dYoFBioZSxfu45QaJyuKfJ3h68gZGM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG40/Lmljb25maW5kZXIu/Y29tL2RhdGEvaWNv/bnMvbG9nb3MtMy82/MDAvUmVhY3QuanNf/bG9nby01MTIucG5n"
            }
            isDarkMode={isDarkMode}
            url="https://react.dev"
          />
          , and{" "}
          <BadgeComp
            text={"MySQL"}
            logo={
              "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"
            }
            isDarkMode={isDarkMode}
            url="https://www.mysql.com"
          />
          . I focus on crafting seamless user experiences backed by robust,
          scalable systems.
        </p>
        <button
          className={`mt-6 md:mt-8 px-4 w-fit py-2.5 flex items-center gap-2.5 rounded-xl font-medium text-sm transition-all hover:scale-105 ${
            isDarkMode
              ? "bg-white/10 hover:bg-white/20 text-white border border-white/20"
              : "bg-black/5 hover:bg-black/10 text-black border border-black/10"
          }`}
          onClick={() => window.open("https://drive.google.com/file/d/1dUsVlGgXdQ5QZTuaI725svEDcQTiMUZO/view?usp=sharing", "_blank")}
        >
          <RiFileList2Line className="h-4 w-4" /> Resume / CV
        </button>
        <div className="w-fit flex gap-2 mt-4 md:mt-5">
          <a 
            href="https://www.linkedin.com/in/rishabhrawat05/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-500 transition-colors"
          >
            <RiLinkedinBoxLine className="w-5 h-5 md:w-6 md:h-6" />
          </a>
          <a 
            href="https://github.com/rishabhrawat05" 
            target="_blank" 
            rel="noopener noreferrer"
            className={`transition-colors ${isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-400 hover:text-black'}`}
          >
            <RiGithubLine className="w-5 h-5 md:w-6 md:h-6" />
          </a>
        </div>
      </section>

      {/* Why Hire Me Section */}
      <section className="w-full max-w-3xl flex flex-col p-4 md:p-3 mb-12 md:mb-20">
        <div
          className={`${
            isDarkMode
              ? "bg-gradient-to-r from-blue-500/10 to-purple-500/10 border-blue-500/20"
              : "bg-gradient-to-r from-blue-500/5 to-purple-500/5 border-blue-500/20"
          } border rounded-2xl p-6 md:p-8`}
        >
          <h2
            className={`${
              isDarkMode ? "text-white" : "text-black"
            } text-xl md:text-2xl font-bold mb-4`}
          >
            Why Hire Me?
          </h2>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <span className="text-blue-400 text-xl mt-1">✓</span>
              <p className={`${isDarkMode ? "text-gray-300" : "text-gray-700"} text-sm md:text-base`}>
                <span className="font-semibold">Full-Stack Production Experience</span> – Built scalable applications with Java, Spring Boot, React, and PostgreSQL, deployed on Azure.
              </p>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-400 text-xl mt-1">✓</span>
              <p className={`${isDarkMode ? "text-gray-300" : "text-gray-700"} text-sm md:text-base`}>
                <span className="font-semibold">Problem Solver & Fast Learner</span> – Resolved critical production issues, optimized database performance, and delivered RESTful APIs in Agile sprints.
              </p>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-400 text-xl mt-1">✓</span>
              <p className={`${isDarkMode ? "text-gray-300" : "text-gray-700"} text-sm md:text-base`}>
                <span className="font-semibold">Open Source & Community Active</span> – Hacktoberfest contributor, national hackathon participant, passionate about building MVPs that solve real problems.
              </p>
            </li>
          </ul>
        </div>
      </section>

      <section id="experience" className="w-full max-w-3xl flex flex-col p-4 md:p-3 mb-12 md:mb-20">
        <p className="text-xs md:text-sm text-gray-400">Featured</p>
        <h1
          className={`${
            isDarkMode ? "text-white" : "text-black"
          } text-xl md:text-2xl font-semibold`}
        >
          Experience
        </h1>
        <div className="w-full flex flex-col gap-3 mt-6 md:mt-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 md:gap-0 w-full">
            <div className="flex gap-3">
              <img
                src="https://www.dookanpe.com/logo-trans.svg"
                className="bg-yellow-400 w-10 h-10 md:w-12 md:h-12 shrink-0"
                alt=""
              />
              <div className="flex flex-col text-gray-400">
                <p
                  className={`text-xs md:text-sm ${
                    isDarkMode ? "text-white" : "text-black"
                  }`}
                >
                  Anthrovia Technologies Private Limited
                </p>
                <p className="text-xs md:text-sm">Spring Boot Intern</p>
              </div>
            </div>
            <div className="flex flex-col text-gray-400">
              <p className="text-xs md:text-sm">July 2025 - Aug 2025</p>
              <p className="text-xs md:text-sm">Karnataka (Remote)</p>
            </div>
          </div>
          <p
            className={`${
              isDarkMode ? "text-white" : "text-black"
            } pt-4 md:pt-5 text-sm md:text-base font-semibold`}
          >
            Technologies & Tools
          </p>
          <div className="flex flex-wrap gap-2 pb-2">
            <BadgeComp
              text={"Java"}
              logo={
                "https://imgs.search.brave.com/djEsMSGOy1tX-6CgcAEmcweSs17XY2_sRj71Gud01Ig/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/c3ZncmVwby5jb20v/c2hvdy8zMDMzODgv/amF2YS00LWxvZ28u/c3Zn"
              }
              isDarkMode={isDarkMode}
            />
            <BadgeComp
              text={"Spring Boot"}
              logo={
                "https://imgs.search.brave.com/wFaaOvkhrH8qt1EllU7YT8CmGEhlWhKXgOJG1AIW6JQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zcHJp/bmcuaW8vaW1nL3By/b2plY3RzL3Nwcmlu/Zy1ib290LnN2Zw"
              }
              isDarkMode={isDarkMode}
            />
            <BadgeComp
              text={"PostgreSQL"}
              logo={
                "https://imgs.search.brave.com/cRYMDz-JxHAkAACLKH8kktAvcA23WhZnFBlLKEp51Qk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/cG9zdGdyZXNxbC5v/cmcvbWVkaWEvaW1n/L2Fib3V0L3ByZXNz/L2VsZXBoYW50LnBu/Zw"
              }
              isDarkMode={isDarkMode}
            />
            <BadgeComp
              text={"IntelliJ IDEA"}
              logo={
                "https://imgs.search.brave.com/1D-EZPB-eeHg1QoJ9zyZSFDE3TC-SXryjdM-mgtHpdM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMuc3RpY2twbmcu/Y29tL2ltYWdlcy81/ODQ4MDkxMGNlZjEw/MTRjMGI1ZTQ4Zjcu/cG5n"
              }
              isDarkMode={isDarkMode}
            />
            <BadgeComp
              text={"Postman"}
              logo={
                "https://imgs.search.brave.com/ElzYVPmGQbJEyMZyK9ec7Ikcs7dFnvtGZigLoBUR8gU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91eHdp/bmcuY29tL3dwLWNv/bnRlbnQvdGhlbWVz/L3V4d2luZy9kb3du/bG9hZC9icmFuZHMt/YW5kLXNvY2lhbC1t/ZWRpYS9wb3N0bWFu/LWljb24ucG5n"
              }
              isDarkMode={isDarkMode}
            />
            <BadgeComp
              text={"Swagger"}
              logo={
                "https://imgs.search.brave.com/6MADDmQp1J-IAYCtaXlj0BAFB9lAXZjyk_lPPbG5VDE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuc2Vla2xvZ28u/Y29tL2xvZ28tcG5n/LzMzLzIvc3dhZ2dl/ci1sb2dvLXBuZ19z/ZWVrbG9nby0zMzg1/ODkucG5n"
              }
              isDarkMode={isDarkMode}
            />
          </div>
          <ul className="text-gray-400 text-sm md:text-base list-disc space-y-2 ml-4">
            <li>
              Built and deployed RESTful APIs in Spring Boot within Agile Scrum,
              enabling smooth integration across services.
            </li>
            <li>
              Resolved production and staging issues in Spring Boot services,
              improving system stability and reducing downtime.
            </li>
            <li>
              Optimized SQL queries and indexing to improve database performance
              and scalability
            </li>
            <li>
              Documented APIs with Swagger, streamlining developer onboarding
              and API security compliance.
            </li>
          </ul>
        </div>
      </section>

      <section id="projects" className="w-full max-w-3xl flex flex-col p-4 md:p-3 mb-12 md:mb-20">
        <p className="text-xs md:text-sm text-gray-400">Featured</p>
        <h1
          className={`${
            isDarkMode ? "text-white" : "text-black"
          } text-xl md:text-2xl font-semibold`}
        >
          Projects
        </h1>
        <div className="flex-wrap gap-4 flex mt-6 md:mt-10">
          {projectsData.map((project) => {
            let projectImage = project.image;
            if (project.id === 1) projectImage = projammGif;
            if (project.id === 2) projectImage = dropifyGif;
            if (project.id === 3) projectImage = trafficGif;
            if (project.id === 4) projectImage = nothingGif;

            return (
              <ProjectComp
                key={project.id}
                title={project.title}
                image={projectImage}
                desc={project.desc}
                tech={project.tech}
                status={project.status}
                video={project.video}
                live={project.live}
                github={project.github}
                isDarkMode={isDarkMode}
                projectId={project.id}
              />
            );
          })}
        </div>
      </section>

      <section className="w-full max-w-3xl flex flex-col p-4 md:p-3 mt-6 md:mt-10">
        <p className="text-xs md:text-sm text-gray-400">About</p>
        <h1
          className={`${
            isDarkMode ? "text-white" : "text-black"
          } text-xl md:text-2xl font-semibold`}
        >
          Me
        </h1>
        <div className="mt-6 md:mt-10 flex flex-col md:flex-row items-start md:items-center gap-4">
          <img src={profileimage} className="rounded-xl h-40 md:h-64 w-auto" alt="" />
          <div className="flex flex-col gap-3">
            <h1
              className={`${
                isDarkMode ? "text-white" : "text-black"
              } text-lg md:text-xl font-semibold`}
            >
              Rishabh Singh Rawat
            </h1>
            <p className="text-gray-400 text-sm md:text-base leading-relaxed">
              I'm a Full Stack web developer and Open Source Contributor, I love
              building products to solve real-world problems. I'm specialized in
              building MVP's.
            </p>
            <p
              className={`${
                isDarkMode ? "text-white" : "text-black"
              } text-sm md:text-base font-semibold leading-relaxed`}
            >
              Skills
            </p>
            <div className="flex flex-wrap gap-2">
              <img
                src="https://imgs.search.brave.com/djEsMSGOy1tX-6CgcAEmcweSs17XY2_sRj71Gud01Ig/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/c3ZncmVwby5jb20v/c2hvdy8zMDMzODgv/amF2YS00LWxvZ28u/c3Zn"
                className="h-6 w-6 md:h-7 md:w-7 object-contain"
              />
              <img
                src="https://imgs.search.brave.com/wFaaOvkhrH8qt1EllU7YT8CmGEhlWhKXgOJG1AIW6JQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zcHJp/bmcuaW8vaW1nL3By/b2plY3RzL3Nwcmlu/Zy1ib290LnN2Zw"
                className="h-6 w-6 md:h-7 md:w-7 object-contain"
              />
              <img
                src="https://imgs.search.brave.com/STKrMOUcL16Bts3BdWe_fmoTCgyMQ48tiFPDZeJBK8w/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMuc3RpY2twbmcu/Y29tL2ltYWdlcy82/MTNiNjRmZTMwZTg1/MzAwMDRiYTNhMDMu/cG5n"
                className="h-6 w-6 md:h-7 md:w-7 object-contain"
              />
              <img
                src="https://imgs.search.brave.com/-wRYfmc8MFTE9dYoFBioZSxfu45QaJyuKfJ3h68gZGM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG40/Lmljb25maW5kZXIu/Y29tL2RhdGEvaWNv/bnMvbG9nb3MtMy82/MDAvUmVhY3QuanNf/bG9nby01MTIucG5n"
                className="h-6 w-6 md:h-7 md:w-7 object-contain"
              />
              <img
                src="https://imgs.search.brave.com/BAxhkzCHDEaIcz5cLgYP9yqvYsPtEpX478omuliMY9Y/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9sb2dv/cy13b3JsZC5uZXQv/d3AtY29udGVudC91/cGxvYWRzLzIwMjUv/MDcvTXlTUUwtTG9n/by0yMDAyLTUwMHgy/ODEucG5n"
                alt=""
                className="h-6 w-6 md:h-7 md:w-7 object-contain"
              />
              <img
                src="https://imgs.search.brave.com/cRYMDz-JxHAkAACLKH8kktAvcA23WhZnFBlLKEp51Qk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/cG9zdGdyZXNxbC5v/cmcvbWVkaWEvaW1n/L2Fib3V0L3ByZXNz/L2VsZXBoYW50LnBu/Zw"
                alt=""
                className="h-6 w-6 md:h-7 md:w-7 object-contain"
              />
              <img
                src="https://imgs.search.brave.com/ebiND_c3W1fQe5d7YWL72A3RIuQ57x38mPgFq4NCsQ0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/cG5nYWxsLmNvbS93/cC1jb250ZW50L3Vw/bG9hZHMvMTMvRmln/bWEtTG9nby1QTkct/SW1hZ2UucG5n"
                alt=""
                className="h-6 w-6 md:h-7 md:w-7 object-contain"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="w-full max-w-3xl flex flex-col p-4 md:p-3 mt-6 md:mt-10">
        <p className="text-xs md:text-sm text-gray-400">Featured</p>
        <h1
          className={`${
            isDarkMode ? "text-white" : "text-black"
          } text-xl md:text-2xl font-semibold mb-4 md:mb-6`}
        >
          GitHub Activity
        </h1>
        <div
          className={`${
            isDarkMode
              ? "bg-gray-900 border-gray-800"
              : "bg-gray-100 border-gray-300"
          } rounded-2xl p-4 md:p-6 border transition-colors duration-300 overflow-x-auto`}
        >
          <GitHubCalendar
            username="rishabhrawat05"
            blockSize={8}
            blockMargin={4}
            fontSize={10}
            colorScheme={isDarkMode ? "dark" : "light"}
            showWeekdayLabels
            theme={{
              light: ["#ebedf0", "#9be9a8", "#40c463", "#30a14e", "#216e39"],
              dark: ["#161b22", "#0e4429", "#006d32", "#26a641", "#39d353"],
            }}
            style={{
              color: "#9ca3af",
            }}
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
            <img
              src={
                isDarkMode
                  ? "https://github-readme-stats.vercel.app/api?username=rishabhrawat05&show_icons=true&theme=dark&hide_border=true&bg_color=111827&title_color=ffffff&text_color=9ca3af&icon_color=39d353"
                  : "https://github-readme-stats.vercel.app/api?username=rishabhrawat05&show_icons=true&theme=vue&hide_border=true&bg_color=ffffff&title_color=000000&text_color=333333&icon_color=39d353"
              }
              alt="GitHub Stats"
              className="w-full rounded-lg"
            />
            <img
              src={
                isDarkMode
                  ? "https://github-readme-streak-stats-salesp07.vercel.app/?user=rishabhrawat05&theme=dark&hide_border=true&background=111827&stroke=374151&ring=39d353&fire=39d353&currStreakLabel=9ca3af"
                  : "https://github-readme-streak-stats-salesp07.vercel.app/?user=rishabhrawat05&theme=default&hide_border=true&background=ffffff&stroke=e5e7eb&ring=39d353&fire=39d353&currStreakLabel=333333"
              }
              alt="GitHub Streak"
              className="w-full rounded-lg"
            />
          </div>
        </div>
      </section>
      <section id="activities" className="w-full max-w-3xl flex flex-col p-4 md:p-3 mt-6 md:mt-10">
        <p className="text-xs md:text-sm text-gray-400">Featured</p>
        <h1
          className={`${
            isDarkMode ? "text-white" : "text-black"
          } text-xl md:text-2xl font-semibold mb-4 md:mb-6`}
        >
          Activities
        </h1>
        <p className="text-[#8e8e90] text-sm md:text-base pb-3">Hacktoberfest 2024, 2025</p>
        <img
          src="https://holopin.me/rishabhrawat05"
          alt="Holopin Badges"
          className="w-full rounded-lg"
        />
        <p className="text-[#8e8e90] text-sm md:text-base pt-4 md:pt-5">
          Participated in National Level Hackathons
        </p>
        <div
          className={`${
            isDarkMode ? "bg-black border-gray-800" : "bg-white border-gray-300"
          } rounded-2xl p-6 md:p-9 border mt-2 border-dashed flex flex-col md:flex-row items-center justify-center gap-4 md:gap-3 transition-colors duration-300`}
        >
          <img src={hack2skillgdg} className="h-32 md:h-44 rotate-12" alt="" />
          <img src={hack2skillisro} className="h-32 md:h-44 rotate-12" alt="" />
        </div>
      </section>
      <section id="blogs" className="w-full max-w-3xl flex flex-col p-4 md:p-3 mt-6 md:mt-10 mb-12 md:mb-20">
        <p className="text-xs md:text-sm text-gray-400">Featured</p>
        <h1
          className={`${
            isDarkMode ? "text-white" : "text-black"
          } text-xl md:text-2xl font-semibold mb-4 md:mb-6`}
        >
          Blogs
        </h1>

        {loading ? (
          <div className="text-gray-400 text-sm md:text-base text-center py-8 md:py-10">
            Loading blog posts...
          </div>
        ) : blogPosts.length === 0 ? (
          <div className="text-gray-400 text-sm md:text-base text-center py-8 md:py-10">
            No blog posts found
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {blogPosts
              .filter(
                (post) =>
                  post.title.toLowerCase().includes("hacktoberfest") ||
                  post.title.toLowerCase().includes("chasing") ||
                  post.title.toLowerCase().includes("map dream")
              )
              .slice(0, 2)
              .map((post) => (
                <a
                  key={post.id}
                  href={post.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${
                    isDarkMode
                      ? "bg-gray-900 border-gray-800 hover:border-gray-600"
                      : "bg-white border-gray-300 hover:border-gray-400"
                  } rounded-2xl overflow-hidden border transition-all hover:scale-[1.02] group`}
                >
                  {post.cover_image && (
                    <img
                      src={post.cover_image}
                      alt={post.title}
                      className="w-full h-36 md:h-48 object-cover"
                    />
                  )}
                  <div className="p-4 md:p-6">
                    <h3
                      className={`${
                        isDarkMode ? "text-white" : "text-black"
                      } text-base md:text-xl font-semibold mb-2 md:mb-3 group-hover:text-blue-400 transition-colors line-clamp-2`}
                    >
                      {post.title}
                    </h3>
                    <p className="text-gray-400 text-xs md:text-sm mb-3 md:mb-4 line-clamp-3">
                      {post.description}
                    </p>
                    <div className="flex items-center justify-between text-gray-500 text-xs md:text-sm">
                      <span>
                        {new Date(post.published_at).toLocaleDateString(
                          "en-US",
                          {
                            month: "short",
                            day: "numeric",
                            year: "numeric",
                          }
                        )}
                      </span>
                      <div className="flex items-center gap-2 md:gap-3">
                        <span>❤️ {post.public_reactions_count}</span>
                        <span>💬 {post.comments_count}</span>
                      </div>
                    </div>
                  </div>
                </a>
              ))}
          </div>
        )}
      </section>
      <footer className="min-h-20 md:min-h-24 w-full text-[#8e8e90] text-xs flex flex-col items-center justify-center gap-1 py-4">
        <p>Developed By Rishabh</p>
        <p>© 2025. All rights reserved.</p>
      </footer>
    </main>
  );
}

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage isDarkMode={isDarkMode} toggleTheme={toggleTheme} />} />
        <Route path="/project/:projectId" element={<ProjectDetail isDarkMode={isDarkMode} />} />
      </Routes>
    </Router>
  );
}

export default App;
