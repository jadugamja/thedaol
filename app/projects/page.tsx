import Sidebar from "@/components/layout/sidebar";
import PortfolioCard from "../(home)/_components/portfolio-card";

const PROJECTS = [
  {
    title: "국회 e-의안지원시스템 차세대",
    description:
      "국회 입법 프로세스의 디지털 혁신을 위한 차세대 시스템 분석 및 설계. 의안 처리 효율성 증대 및 대국민 서비스 강화.",
    image: "/images/thumbnail/national-assembly.webp",
    category: "Public",
  },
  {
    title: "두나무 Next Steppers 플랫폼",
    description:
      "금융위기 청년의 신용 회복과 자산 형성을 돕는 자립 지원 플랫폼 구축. 맞춤형 금융 상담 및 지원 프로그램 운영 시스템.",
    image: "/images/thumbnail/next-steppers.webp",
    category: "Platform",
  },
  {
    title: "NH AML 시스템 고도화",
    description:
      "금융 리스크 선제적 대응을 위한 자금세탁방지(AML) 모니터링 시스템 고도화. 의심 거래 탐지 알고리즘 개선 및 보고 체계 강화.",
    image: "/images/thumbnail/nh-aml.webp",
    category: "Finance",
  },
  {
    title: "BNK 종합감사시스템 고도화",
    description:
      "데이터 기반 상시 모니터링 시스템 구축 및 선제적 내부통제 시스템 고도화. 감사 효율성 증대 및 리스크 사전 예방.",
    image: "/images/thumbnail/bnk-1.webp",
    category: "Finance",
  },
  {
    title: "BNK FATCA/CRS 시스템",
    description:
      "글로벌(FATCA) 및 국내(CRS) 금융 규제 이행을 위한 정보 보고 체계 통합 고도화. 국가별 보고 규격 준수 및 데이터 검증 자동화.",
    image: "/images/thumbnail/bnk-2.webp",
    category: "Regulatory",
  },
  {
    title: "포스코 DX 스마트 팩토리",
    description:
      "제조 현장 데이터 실시간 수집 및 분석, 시뮬레이션 시스템 구축. 공정 최적화 및 생산성 향상 지원.",
    image: "/images/thumbnail/posco-dx.webp",
    category: "Smart Factory",
  },
];

export default function ProjectsPage() {
  return (
    <>
      {/* 1. Hero Section */}
      <section className="relative bg-slate-900 py-24 sm:py-32 overflow-hidden max-h-[352px]">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-[#2a4167] to-black"></div>
        </div>
        <div className="relative z-10 max-w-5xl mx-auto px-6 h-full flex flex-col justify-center">
          {/* <span className="text-primary font-bold tracking-widest uppercase text-sm font-display mb-4 block">
            Portfolio
          </span> */}
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight">
            Major Projects
          </h1>
          <p className="text-lg text-slate-300 max-w-2xl leading-relaxed font-pretendard">
            더다올디앤씨가 수행한 다양한 성공 사례를 소개합니다.
          </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-6 py-20 flex flex-col md:flex-row gap-16">
        {/* Sidebar */}
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
