import ProjectsSidebar from "./_components/projects-sidebar";

export default function ProjectsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <section className="relative bg-slate-900 py-24 sm:py-32 overflow-hidden max-h-88">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-linear-to-br from-slate-900 via-[#2a4167] to-black" />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto px-6 h-full flex flex-col justify-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight">
            Major Projects
          </h1>
          <p className="text-lg text-slate-300 max-w-2xl leading-relaxed font-pretendard">
            프로젝트 수행 사례와 보유 기술 및 솔루션을 소개합니다.
          </p>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-6 py-20 flex flex-col md:flex-row gap-16 min-h-124">
        <ProjectsSidebar />
        <div className="flex-1 min-w-0 bg-background-light">{children}</div>
      </div>
    </>
  );
}
