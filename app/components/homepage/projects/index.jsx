import { projectsData } from '@/utils/data/projects-data';
import ProjectCard from './project-card';

const Projects = () => {

  return (
    <div id='projects' className="relative z-50  my-12 lg:my-24">
      <div className="sticky top-10">
        <div className="w-[80px] h-[80px] bg-violet-100 rounded-full absolute -top-3 left-0 translate-x-1/2 filter blur-3xl  opacity-30"></div>
        <div className="flex items-center justify-start relative">
          <span className="bg-[#1a1443] absolute left-0  w-fit text-white px-5 py-3 text-xl rounded-md">
            PROJECTS
          </span>
          <span className="w-full h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      <div className="top-24 ">
        <div className="flex flex-col mt-12 gap-6">
          {projectsData.slice(0, 7).map((project, index) => (
            <div
              id={`sticky-card-${index + 1}`}
              key={index}
              className="sticky-card sticky z-10 "
            >
              <div className="w-full mx-auto max-w-2xl min-h-[65vh] mb-6 shadow-[0_0_30px_0_rgba(0,0,0,0.3)] rounded transition-all duration-500">
                <ProjectCard project={project} />
              </div>
            </div>
          ))}

        </div>
      </div>
    </div>
  );
};

export default Projects;