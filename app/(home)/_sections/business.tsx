import { MdOutlineHub, MdOutlineLightbulb } from "react-icons/md";
import { PiHeadCircuit } from "react-icons/pi";
import BusinessCard from "../_components/business-card";

const BUSINESS_ITEMS = [
  {
    title: "AI Solution",
    description:
      "데이터 기반의 AI 기술을 도입하여 미래 지향적인 가치를 창출합니다.",
    item1: "빅데이터 분석/처리",
    item2: "AI 모델링 및 서비스",
    icon: <PiHeadCircuit className="-scale-x-100 h-8 w-auto" />,
  },
  {
    title: "SI / SM",
    description:
      "비즈니스 환경에 맞는 시스템 구축 및 운영 서비스를 지원합니다.",
    item1: "공공·금융·제조 분야 시스템 통합 구축",
    item2: "통합 유지보수 및 시스템 운영",
    icon: <MdOutlineHub className="size-7" />,
  },
  {
    title: "IT Consulting",
    description: "디지털 전환(DX)을 위한 최적의 IT 전략과 로드맵을 제시합니다.",
    item1: "IT 인프라 진단 및 전략 수립",
    item2: "최적의 시스템 아키텍처 설계",
    icon: <MdOutlineLightbulb className="size-7" />,
  },
];

export default function HomeBusiness() {
  return (
    <section
      id="business"
      className="relative z-20 py-24 lg:py-32 px-[5%] bg-surface-light"
    >
      <div className="max-w-5xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold text-primary tracking-widest uppercase mb-4 font-display">
            BUSINESS
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-text-main font-display">
            핵심 사업 영역
          </h3>
          <p className="mt-4 text-text-sub text-lg flex flex-col justify-center items-center">
            <span>최첨단 기술과 안정적인 운영 노하우로</span>
            <span>비즈니스의 핵심 가치를 창출합니다.</span>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {BUSINESS_ITEMS.map((item) => (
            <BusinessCard key={item.title} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}
