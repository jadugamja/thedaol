import Sidebar from "@/components/layout/sidebar";
import PortfolioCard from "../(home)/_components/portfolio-card";
import { PROJECTS } from "@/constants/projects";

export default function ProjectsPage() {
  return (
    <>
      {/* 1. Hero Section */}
      <section className="relative bg-slate-900 py-24 sm:py-32 overflow-hidden max-h-88">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-linear-to-br from-slate-900 via-[#2a4167] to-black"></div>
        </div>
        <div className="relative z-10 max-w-5xl mx-auto px-6 h-full flex flex-col justify-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight">
            Major Projects
          </h1>
          <p className="text-lg text-slate-300 max-w-2xl leading-relaxed font-pretendard">
            더다올디앤씨가 수행한 다양한 성공 사례를 소개합니다.
          </p>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-6 py-20 flex flex-col md:flex-row gap-16">
        <Sidebar title="Projects" />

        {/* Main Content */}
        <div className="flex-1 min-w-0 bg-background-light">
          <div className="flex items-center gap-4 mb-8">
            <span className="text-primary font-bold tracking-widest uppercase text-sm font-display">
              Portfolio
            </span>
            <div className="h-px bg-gray-200 flex-1"></div>
          </div>
          <h2 className="text-3xl font-bold text-text-main mb-10">
            Project Gallery
          </h2>

          {/* Filter Buttons */}
          {/* <div className="flex flex-wrap gap-3 mb-12">
            <button className="px-5 py-2 rounded-full bg-primary text-white font-bold text-sm shadow-md transition-transform hover:scale-105">
              All
            </button>
            <button className="px-5 py-2 rounded-full bg-white border border-gray-200 text-text-sub font-medium text-sm hover:border-primary hover:text-primary transition-all hover:scale-105">
              Public
            </button>
            <button className="px-5 py-2 rounded-full bg-white border border-gray-200 text-text-sub font-medium text-sm hover:border-primary hover:text-primary transition-all hover:scale-105">
              Finance
            </button>
            <button className="px-5 py-2 rounded-full bg-white border border-gray-200 text-text-sub font-medium text-sm hover:border-primary hover:text-primary transition-all hover:scale-105">
              Platform
            </button>
          </div> */}

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
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
      </div>
    </>
  );
}
