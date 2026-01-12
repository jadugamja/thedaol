import { MdArrowForward, MdOutlineFileDownload } from "react-icons/md";

export default function HomeHero() {
  return (
    <section className="relative z-40 h-[calc(100vh-4.5rem)] grow flex items-center justify-center px-6 py-20 lg:pt-[12.5rem] lg:pb-32 overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center z-0 pointer-events-none select-none">
        {/* background 도형 */}
        <div className="relative size-100 md:size-175 lg:size-200 animate-spin-slow">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[55%] h-[55%] border border-primary/20 bg-primary/5 rounded-full"></div>
          <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[55%] h-[55%] border border-secondary/20 bg-secondary/5 rounded-full"></div>
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[55%] h-[55%] border border-primary/20 bg-primary/5 rounded-full"></div>
          <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[55%] h-[55%] border border-secondary/20 bg-secondary/5 rounded-full"></div>
          <div className="absolute inset-[25%] border border-dashed border-gray-300 rounded-full animate-spin-reverse-slow opacity-60"></div>
          <div className="absolute inset-[25%] border-t border-r border-primary/40 rounded-full rotate-45"></div>
          <div className="absolute top-[5%] left-1/2 -translate-x-1/2 w-3 h-3 bg-white border-2 border-primary rounded-full z-10"></div>
          <div className="absolute bottom-[5%] left-1/2 -translate-x-1/2 w-3 h-3 bg-white border-2 border-primary rounded-full z-10"></div>
          <div className="absolute left-[5%] top-1/2 -translate-y-1/2 w-3 h-3 bg-white border-2 border-secondary rounded-full z-10"></div>
          <div className="absolute right-[5%] top-1/2 -translate-y-1/2 w-3 h-3 bg-white border-2 border-secondary rounded-full z-10"></div>
        </div>
        <div className="absolute size-200 border border-gray-100/50 rounded-full"></div>
        <div className="absolute size-100 border border-primary/5 rounded-full"></div>
      </div>
      <div className="relative z-20 max-w-4xl w-full flex flex-col items-center text-center gap-10 animate-fade-in-up">
        <div className="space-y-6">
          <h1 className="text-secondary text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.1] tracking-tight font-display drop-shadow-sm">
            {"Next "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-secondary">
              {"Innovation,"}
            </span>
            <br />
            {"Better Tomorrow."}
          </h1>
          <p className="text-text-sub text-lg md:text-xl font-normal leading-relaxed max-w-2xl mx-auto font-pretendard">
            안전하고 신뢰할 수 있는 시스템 구축 및 운영 관리, <br />
            그리고 혁신적인 AI 기술로<br className="hidden md:block" />
            귀사의 비즈니스 미래를 함께 열어갑니다.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full pt-4">
          <a
            href="#contact"
            className="group relative flex items-center justify-center h-14 px-10 w-full sm:w-auto bg-primary hover:bg-primary-dark text-white text-base font-bold rounded-xl transition-all shadow-lg shadow-primary/30 hover:shadow-primary/50 overflow-hidden"
          >
            <span className="relative z-10">프로젝트 문의하기</span>
            <MdArrowForward className="relative z-10 ml-2 text-xl transition-transform group-hover:translate-x-1" />
            <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-linear-to-r from-transparent via-white/30 to-transparent z-0" />
          </a>
          <a
            href="docs/(주)더다올디앤씨_회사소개서.pdf"
            download="(주)더다올디앤씨_회사소개서.pdf"
            className="group flex items-center justify-center h-14 px-10 w-full sm:w-auto bg-white border border-gray-200 hover:text-gray-500 text-text-sub text-base font-bold rounded-xl transition-all shadow-sm hover:shadow-md"
          >
            <span>회사소개서 다운로드</span>
            <MdOutlineFileDownload className="ml-2 text-xl group-hover:animate-bounce duration-[400]" />
          </a>
        </div>
      </div>
    </section>
  );
}
