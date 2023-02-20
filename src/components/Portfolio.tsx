import Image from "next/image";
import Link from "next/link";
import { BsGithub } from "react-icons/bs";
export default function Portfolio() {
  interface Project {
    projectName: string;
    description: string;
    techStack: Array<string>;
    period: string;
    image: string;
    github: string;
    keyId: number;
  }
  const projects: Project[] = [
    {
      projectName: "Portfoilo",
      description:
        "개인 포트폴리오 사이트로, 포트폴리오를 깔끔하게 소개하고 싶어 제작하였습니다. NextJS, Typescript와 조금 더 친숙해지려 시작하였으며, 계속 개선중입니다.",
      techStack: ["React", "TypeScript", "NextJS", "Tailwind"],
      period: "2023.01~",
      image: "/portfolio.png",
      github: "https://github.com/seunghoonKang",
      keyId: 1,
    },
    {
      projectName: "Like a Lion",
      description: "Socket, WebRTC를 활용한 온라인 보드게임입니다.",
      techStack: ["React", "Tailwind", "WebRTC(Openvidu)", "Socket.io"],
      period: "2022.11 ~ 2022.12",
      image: "/we-all-lion.png",
      github: "https://github.com/seunghoonKang/we-all-lie-fe",
      keyId: 2,
    },
  ];

  return (
    <section id="portfolio" className=" mt-20">
      <div className=" my-12 pb-12 md:pt-16 md:pb-48">
        <h1 className="text-center font-extrabold text-4xl mb-24">
          포트폴리오
          <hr className="w-10 h-1 mx-auto my-4 bg-cyan-500 border-0 rounded"></hr>
        </h1>
        <div className="space-y-28">
          {projects.map((project) => (
            <div key={project.keyId} className="md:flex md:space-x-12 ">
              <div className="md:w-1/2 ">
                <Link href={project.github}>
                  <Image
                    src={project.image}
                    width={1000}
                    height={1000}
                    alt="projectImage"
                    className=" rounded-xl shadow-xl hover:opacity-30"
                  />
                </Link>
              </div>
              <div className="md:flex-col md:w-1/2 space-y-3">
                <h1 className="font-bold text-3xl">{project.projectName}</h1>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                  {project.period}
                </p>
                <div className="flex flex-wrap gap-3">
                  {project.techStack.map((stack, key) => (
                    <div key={key}>
                      <p className="text-sm border-solid border-2 rounded-xl pl-2 pr-2 hover:opacity-30 cursor-pointer">
                        {stack}
                      </p>
                    </div>
                  ))}
                </div>
                <p className="sm:text-lg md:text-sm leading-7 text-neutral-600 dark:text-neutral-400">
                  {project.description}
                </p>
                <div className="mt-4">
                  <Link href={project.github}>
                    <BsGithub size={30} />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
