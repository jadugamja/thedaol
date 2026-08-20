import PortfolioCard from "@/app/(home)/_components/portfolio-card";
import { PROJECTS } from "@/constants/projects";

export default function ProjectsPage() {
  return (
    <>
      <div className="flex items-center gap-4 mb-8">
        <span className="text-primary font-bold tracking-widest uppercase text-sm font-display">
          Portfolio
        </span>
        <div className="h-px bg-gray-200 flex-1" />
      </div>
      <h2 className="text-3xl font-bold text-text-main mb-10">
        Project Gallery
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {PROJECTS.map((project) => (
          <PortfolioCard key={project.title} {...project} />
        ))}
      </div>
    </>
  );
}
