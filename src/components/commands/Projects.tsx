import { useContext, useEffect } from "react";
import {
  checkRedirect,
  getCurrentCmdArry,
  isArgInvalid,
} from "../../utils/funcs";
import {
  ProjectContainer,
  ProjectDesc,
  ProjectsIntro,
  ProjectTitle,
} from "../styles/Projects.styled";
import { termContext } from "../Terminal";
import Usage from "../Usage";

const Projects: React.FC = () => {
  const { arg, history, rerender } = useContext(termContext);

  /* ===== get current command ===== */
  const currentCommand = getCurrentCmdArry(history);

  /* ===== check current command is redirect ===== */
  useEffect(() => {
    if (checkRedirect(rerender, currentCommand, "projects")) {
      projects.forEach(({ id, url }) => {
        id === parseInt(arg[1]) && window.open(url, "_blank");
      });
    }
  }, [arg, rerender, currentCommand]);

  /* ===== check arg is valid ===== */
  const checkArg = () =>
    isArgInvalid(arg, "go", ["1", "2", "3", "4"]) ? (
      <Usage cmd="projects" />
    ) : null;

  return arg.length > 0 || arg.length > 2 ? (
    checkArg()
  ) : (
    <div data-testid="projects">
      <ProjectsIntro>
        “Actions speak louder than words.“  <br />
        Here's a showcase of my projects that truly highlight my expertise and skills.
      </ProjectsIntro>
      {projects.map(({ id, title, desc }) => (
        <ProjectContainer key={id}>
          <ProjectTitle>{`${id}. ${title}`}</ProjectTitle>
          <ProjectDesc>{desc}</ProjectDesc>
        </ProjectContainer>
      ))}
      <Usage cmd="projects" marginY />
    </div>
  );
};

const projects = [
  {
    id: 1,
    title: "Network-Attached Storage (NAS) Setup and Configuration with TrueNAS",
    desc: "installed, configured, and tested a Network-Attached Storage (NAS) solution using TrueNAS.",
    url: "https://www.linkedin.com/posts/nassim-fatnassi-hnifi-a1698a186_datastorage-truenas-networking-activity-7268963688789811200-p_fY?utm_source=share&utm_medium=member_desktop",
  },
  {
    id: 2,
    title: "Next-Level CI/CD Pipeline Architecture for Modern DevOps",
    desc: "CI/CD pipeline I developed, leveraging a distributed architecture with Jenkins and a Kubernetes cluster on Azure to bring it all together.",
    url: "https://www.linkedin.com/posts/nassim-fatnassi-hnifi-a1698a186_jenkins-agent-agent-activity-7258130815308496896-JALI?utm_source=share&utm_medium=member_desktop",
  },
  {
    id: 3,
    title: "ESPREAT - Microservices Application",
    desc: "ESPREAT is an application designed to assist university students in discovering local restaurants around their campus area.",
    url: "https://github.com/nassimfatnassi1999/ESPREAT.git",
  },
  {
    id: 4,
    title: "OpenStack Cloud Infrastructure Project (IaaS/PaaS)",
    desc: "This project aimed to provide virtualized computing resources on demand, including servers, storage, and containers. The infrastructure needed to adapt to changing workloads by automatically provisioning and de-provisioning resources.",
    url: "https://www.linkedin.com/in/nassim-fatnassi-hnifi-a1698a186/details/projects/",
  },
  {
    id: 5,
    title: "Web Application for managing interns",
    desc: "Design and development of a web application for managing interns.",
    url: "https://github.com/nassimfatnassi1999/Gestion_Stagiaires.git",
  },
  {
    id: 6,
    title: "Electronic Vote",
    desc: "This desktop application streamlines the election management process and delivers instant vote counting capabilities.",
    url: "https://github.com/nassimfatnassi1999/Projet-programmation-C.git",
  },
];

export default Projects;
