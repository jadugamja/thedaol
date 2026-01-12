import PortfolioCard from "../_components/portfolio-card";

const PROJECTS = [
  {
    title: "국회 e-의안지원시스템 차세대",
    description: "국회 입법 프로세스의 디지털 혁신을 위한 차세대 시스템 분석 및 설계",
    image: "/images/thumbnail/national-assembly.webp",
    category: "Public",
  },
  {
    title: "두나무 Next Steppers 플랫폼",
    description: "금융위기 청년의 신용 회복과 자산 형성을 돕는 자립 지원 플랫폼 구축",
    image: "/images/thumbnail/next-steppers.webp",
    category: "Platform",
  },
  {
    title: "NH AML 시스템 고도화",
    description: "금융 리스크 선제적 대응을 위한 자금세탁방지(AML) 모니터링 시스템 고도화",
    image: "/images/thumbnail/nh-aml.webp",
    category: "Finance",
  },
  {
    title: "포스코 DX 스마트 팩토리",
    description: "실시간으로 수집·분석한 제조 현장의 데이터를 가상 공간에서 시뮬레이션하여",
    image: "/images/thumbnail/posco-dx.webp",
    category: "Smart Factory",
  },
  {
    title: "BNK 종합감사시스템 고도화",
    description: "데이터 기반 상시 모니터링 시스템 구축 및 선제적 내부통제 시스템 고도화",
    image: "/images/thumbnail/bnk-1.webp",
    category: "Finance",
  },
  {
    title: "BNK FATCA/CRS 시스템",
    description: "글로벌 및 국내 금융 규제 이행을 위한 정보 보고 체계 통합 고도화",
    image: "/images/thumbnail/bnk-2.webp",
    category: "Finance",
  },
];

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
