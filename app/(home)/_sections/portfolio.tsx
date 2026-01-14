import { PROJECTS } from "@/constants/projects";
import PortfolioCard from "../_components/portfolio-card";

export default function HomePortfolio() {
  return (
    <section className="relative w-full overflow-hidden px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <div className="mb-12 flex flex-col items-center text-center">
          <h2 className="text-sm font-bold text-primary tracking-widest uppercase mb-4 font-display">
            Projects
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-text-main font-display">
            주요 프로젝트
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map(({ title, description, image, category }) => (
            <PortfolioCard
              key={title}
              title={title}
              description={description}
              image={image}
              category={category}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
